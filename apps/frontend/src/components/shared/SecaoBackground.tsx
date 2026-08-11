import Image from 'next/image'

export interface SecaoBackgroundProps {
	children: React.ReactNode
	imagem: string
}

export default function SecaoBackground(props: SecaoBackgroundProps) {
	return (
		<div className="relative">
			<Image src={props.imagem} alt="Imagem de fundo" fill className="-z-30" />
			<div className="bg-black/90 sm:bg-transparent sm:bg-gradient-to-r from-black/60 via-black/90 to-black/60">
				<div className="container py-10">{props.children}</div>
			</div>
		</div>
	)
}
