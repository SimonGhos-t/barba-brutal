import { useEffect, useState } from 'react'
import useAPI from './useAPI'
import useSessao from './useSessao'
import { useRouter, useSearchParams } from 'next/navigation'

export default function useFormAuth() {
	const [modo, setModo] = useState<'login' | 'cadastro'>('login')

	const [nome, setNome] = useState('')
	const [email, setEmail] = useState('')
	const [senha, setSenha] = useState('')
	const [telefone, setTelefone] = useState('')

	const { httpPost } = useAPI()
	const { usuario, iniciarSessao } = useSessao()
	const router = useRouter()
	const param = useSearchParams()

	useEffect(() => {
		if(usuario?.email) {
			const destino = param.get("destino") as string
			router.push(destino ? destino : "/")
		}
	}, [usuario, router, param])

	async function submeter() {
		if (modo === 'login') {
			await login()
		} else {
			await registar()
			await login()
		}
		limparFormulario()
	}

	async function login() {
		const token = await httpPost('auth/login', { email, senha })
		console.log(token)
		iniciarSessao(token)
	}

	async function registar() {
			await httpPost('auth/registrar', { nome, email, senha, telefone })
			limparFormulario()
	}

	function limparFormulario() {
		setNome('')
		setEmail('')
		setSenha('')
		setTelefone('')
		setModo('login')
	}

	function alternarModo() {
		setModo(modo === 'login' ? 'cadastro' : 'login')
	}

	return {
		modo,
		nome,
		email,
		senha,
		telefone,
		alterarNome: setNome,
		alterarEmail: setEmail,
		alterarSenha: setSenha,
		alterarTelefone: setTelefone,
		alternarModo,
		submeter,
	}
}
