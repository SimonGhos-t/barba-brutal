import { Injectable } from '@nestjs/common'
import { RepositorioUsuario, Usuario } from '@barbabrutal/core/'
import { PrismaService } from '../db/prisma.service'
import { Prisma } from '../../generated/prisma'

@Injectable()
export class UsuarioPrisma implements RepositorioUsuario {
	constructor(private readonly prisma: PrismaService) {}
	//Método para salvar, atualizando ou criando um usuário no BD.
	async salvar(usuario: Usuario): Promise<void> {
		const dados: Prisma.UsuarioCreateInput = {
			nome: usuario.nome,
			email: usuario.email,
			telefone: usuario.telefone,
			senha: usuario.senha ?? '',
			barbeiro: usuario.barbeiro ?? false,
		}

		await this.prisma.usuario.upsert({
			where: { id: usuario.id ?? -1 },
			update: usuario,
			create: dados,
		})
	}

	//Método para buscar por email no BD
	async buscarPorEmail(email: string): Promise<Usuario | null> {
		return this.prisma.usuario.findUnique({
			where: { email },
		})
	}
}
