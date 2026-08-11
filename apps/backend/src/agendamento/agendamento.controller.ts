import { Controller, Get } from '@nestjs/common'

@Controller('agendamento')
export class AgendamentoController {
	@Get()
	teste() {
		return 'teste agendamento'
	}
}
