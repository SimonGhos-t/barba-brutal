import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { IconCalendar, IconHome, IconLogout } from '@tabler/icons-react'
import useSessao from '@/data/hooks/useSessao'
import Image from 'next/image'
import Link from 'next/link'

export default function MenuUsuario() {
	const { usuario, encerrarSessao } = useSessao()

	return usuario ? (
		<div className="flex">
			<DropdownMenu>
				<DropdownMenuTrigger>
					<div className="flex items-center gap-3">
						<div className="flex flex-col items-end">
							<span className="font-bold">{usuario.nome}</span>
							<span className="text-zinc-400 text-xs">{usuario.email}</span>
						</div>
						<div className="bg-zinc-700 w-10 h-10 rounded-full p-1">
							<Image src="/avatar.png" width={40} height={40} alt="Avatar" />
						</div>
					</div>
					<DropdownMenuContent>
						<DropdownMenuItem>
							<Link href="/" className="flex gap-2">
								<IconHome size={18} />
								<span>Início</span>
							</Link>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Link href="/agendamento" className="flex gap-2">
								<IconCalendar size={18} />
								<span>Agendar</span>
							</Link>
						</DropdownMenuItem>
						<DropdownMenuItem onClick={encerrarSessao} className="flex gap-2">
							<IconLogout size={18} />
							<span>Sair</span>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenuTrigger>
			</DropdownMenu>
		</div>
	) : null
}
