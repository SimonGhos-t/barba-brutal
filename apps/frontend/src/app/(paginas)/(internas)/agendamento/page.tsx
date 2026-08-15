'use client'
import useAPI from '@/data/hooks/useAPI'
import Link from 'next/link'

export default function Page() {
	const { httpGet } = useAPI()
	async function executar() {
		const resp = await httpGet('/agendamento')
		console.log(resp)
	}
	return (
		<div className="flex justify-center items-center h-screen gap-5">
			<span className="text-5xl">Agendamento</span>
			<div className="flex gap-5">
				<button className="button" onClick={executar}>
					Executar
				</button>
				<Link href="/">
					<span className="button">Voltar</span>
				</Link>
			</div>
		</div>
	)
}
