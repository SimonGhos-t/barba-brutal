import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
		<Link href={'/'} className="flex items-center">
			<Image src="/logo.png" alt="Logo" width={65} height={65} className="hidden sm:block" />
			<Image src="/logo.png" alt="Logo" width={50} height={50} className="block sm:hidden" />
			<div className="flex flex-col">
				<span className="text-xl sm:text-2xl font-extralight tracking-wider text-gradient">
					Barba
				</span>
				<span className="text-[20px] sm:text-[24px] font-bold text-gradient leading-6">
					Brutal
				</span>
			</div>
		</Link>
	)
}