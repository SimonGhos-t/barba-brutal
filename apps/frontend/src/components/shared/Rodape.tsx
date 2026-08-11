import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandWhatsapp,
	IconBrandYoutube,
} from '@tabler/icons-react'
import Logo from './Logo'

export default function Rodape() {
	return (
		<footer className="container flex flex-col text-zinc-400 bg-black py-10 gap-10">
			<hr className='h-[1px] text-white'/>
			<div className="flex flex-col md:flex-row md:items-start items-center md:text-left text-center gap-5 md:gap-0 justify-between">
				<Logo />
				<div className="flex flex-col gap-1">
					<span className="font-bold text-zinc-300 pb-2 text-2xl">Sobre</span>
					<span className="text-sm">Nossa História</span>
					<span className="text-sm">Política de Privacidade</span>
					<span className="text-sm">Termos de uso</span>
				</div>
				<div className="flex flex-col gap-1">
					<span className="font-bold text-zinc-300 pb-2 text-2xl">Contato</span>
					<span className="text-sm">suporte@barbabrutal.com</span>
					<div className="text-sm flex items-center justify-center md:justify-start gap-2">
						<IconBrandWhatsapp size={20} className="text-green-500" />
						<span>WhatsApp</span>
					</div>
				</div>
			</div>
			<div className="flex flex-col md:flex-row items-center gap-1.5 justify-between">
				<div className="flex gap-2 ">
					<IconBrandInstagram size={28} stroke={1} />
					<IconBrandYoutube size={28} stroke={1} />
					<IconBrandFacebook size={28} stroke={1} />
				</div>
				<div className="flex flex-col md:flex-row gap-1.5 items-center">
					<div className="flex gap-1.5">
						<span>Feito com</span>
						<span>❤️</span>
						<span>em {new Date().getFullYear()}</span>
					</div>
					<span className="hidden md:inline-block"> - </span>
					<span>Todos os direitos reservados.</span>
				</div>
			</div>
		</footer>
	)
}
