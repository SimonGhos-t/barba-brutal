import { Controller, Get } from '@nestjs/common'
import { UsuarioLogado } from '../shared/usuario.decorator'
import type { Usuario } from '@barbabrutal/core'

@Controller('agendamento')
export class AgendamentoController {
	@Get()
	teste(@UsuarioLogado() usuario: Usuario) {
		return `Agendamento para ${usuario.nome}`
	}
}
