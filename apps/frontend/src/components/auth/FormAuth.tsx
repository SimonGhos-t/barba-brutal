'use client'
import Image from 'next/image'
import Logo from '../shared/Logo'
import Link from 'next/link'
import useFormAuth from '@/data/hooks/UseFormAuth'
import CampoSenha from '../shared/formulario/CampoSenha'
import CampoTexto from '../shared/formulario/CampoTexto'
import CampoTelefone from '../shared/formulario/CampoTelefone'

export default function FormAuth() {
	const {
		modo,
		nome,
		email,
		senha,
		telefone,
		alterarNome,
		alterarEmail,
		alterarSenha,
		alterarTelefone,
		alternarModo,
		submeter,
	} = useFormAuth()

	return (
		<div className="h-screen">
			<Image src="/banners/principal.webp" alt="Banner" fill />
			<div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full bg-black/80 gap-6 ">
				<Logo />
				<div>
					{modo === 'login' ? (
						<h1 className="text-2xl font-extralight">Seja bem vindo!</h1>
					) : (
						<h1 className="text-2xl font-extralight">Cadastre-se</h1>
					)}
				</div>

				<div className="flex flex-col gap-4 w-80">
					{modo === 'cadastro' && (
						<CampoTexto value={nome} onChangeText={alterarNome} placeholder="Nome" />
					)}
					<CampoTexto value={email} onChangeText={alterarEmail} placeholder="Email" />
					<CampoSenha placeholder="Senha" value={senha} onChangeText={alterarSenha} />
					{modo === 'cadastro' && (
						<CampoTelefone
							value={telefone}
							onChangeText={alterarTelefone}
							placeholder="Telefone"
						/>
					)}
					<div className="flex gap-2">
						<button onClick={submeter} className="button flex-1 bg-green-600">
							{modo === 'login' ? 'Entrar' : 'Cadastrar'}
						</button>
						<Link href="/" className="button flex flex-1 justify-center">
							Cancelar
						</Link>
					</div>

					<div className="flex mt-4">
						<button onClick={alternarModo} className="flex-1 border button-outline">
							{modo === 'login' ? (
								<div>
									Ainda não tem conta?{' '}
									<span className="font-bold text-blue-700">
										Cadastre-se!
									</span>{' '}
								</div>
							) : (
								<div>
									Já tem conta?{' '}
									<span className="font-bold text-blue-700">
										Entre na plataforma!
									</span>
								</div>
							)}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
