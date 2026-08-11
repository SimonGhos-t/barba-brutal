'use client'
import { Usuario } from '@barbabrutal/core'
import { createContext, ReactNode, useCallback, useEffect, useState } from 'react'
import cookie from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

interface Sessao {
	token: string | null
	usuario: Usuario | null
}

interface ContextoSessaoProps {
	carregando: boolean
	token: string | null
	usuario: Usuario | null
	
	iniciarSessao: (token: string) => void
	encerrarSessao: () => void
}

interface ProvedorSessaoProps {
	children: ReactNode
}

interface TokenPayload {
	id: number
	nome: string
	email: string
	telefone: string
	barbeiro?: boolean
	exp: number
}

const valorPadrao: ContextoSessaoProps = {
	carregando: true,
	token: null,
	usuario: null,
	iniciarSessao: () => {},
	encerrarSessao: () => {},
}

const ContextoSessao = createContext<ContextoSessaoProps>(valorPadrao)
export default ContextoSessao

export function ProvedorSessao({ children }: ProvedorSessaoProps) {
	const nomeCookie = '_barbabrutal_token'
	const [carregando, setCarregando] = useState(true)
	const [sessao, setSessao] = useState<Sessao>({ token: null, usuario: null })

	const carregarSessao = useCallback(function () {
		try {
			setCarregando(true)
			const sessao = obterSessao()
			setSessao(sessao)
		} finally {
			setCarregando(false)
		}
	}, []) 

	useEffect(() => {
		carregarSessao()
	}, [carregarSessao])

	function iniciarSessao(token: string) {
		cookie.set(nomeCookie, token, { expires: 1 })
		const sessao = obterSessao()
		setSessao(sessao)
	}

	function encerrarSessao() {
		cookie.remove(nomeCookie)
		setSessao({token: null, usuario: null})
	}

	function obterSessao(): Sessao {
		const token = cookie.get(nomeCookie)

		if (!token) {
			return { token: null, usuario: null }
		}
		try {
			const payload = jwtDecode<TokenPayload>(token)
			const valido = payload.exp > Date.now() / 1000

			if (!valido) {
				return { token: null, usuario: null }
			}

			return {
				token,
				usuario: {
					id: payload.id,
					nome: payload.nome,
					email: payload.email,
					barbeiro: payload.barbeiro,
					telefone: payload.telefone,
				},
			}
		} catch {
			return { token: null, usuario: null }
		}
	}

	return (
		<ContextoSessao
			value={{
				carregando,
				token: sessao.token,
				usuario: sessao.usuario,
				iniciarSessao,
				encerrarSessao,
			}}
		>
			{children}
		</ContextoSessao>
	)
}
