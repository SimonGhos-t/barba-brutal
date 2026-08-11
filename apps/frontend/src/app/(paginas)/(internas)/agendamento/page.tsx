import Link from 'next/link'

export default function Page() {
	return (
		<div className="flex justify-center items-center h-screen gap-5">
			<span className="text-5xl">Agendamento</span>
			<Link href="/">
				<span className="button">Voltar</span>
			</Link>
		</div>
	)
}
