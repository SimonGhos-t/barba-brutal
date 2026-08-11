import Image from 'next/image'
import Logo from '../Logo'

export default function Processando() {
	return (
		<div className="h-screen">
			<Image src="/banners/principal.webp" alt="Banner" fill />
			<div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full bg-black/80 gap-2 ">
				<Logo />
                <span className='font-light text-zinc-400 ml-3'>Processando...</span>
			</div>
		</div>
	)
}
