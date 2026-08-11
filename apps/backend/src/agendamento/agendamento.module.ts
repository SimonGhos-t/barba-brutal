import { Module } from '@nestjs/common'
import { AgendamentoController } from './agendamento.controller'

@Module({
	controllers: [AgendamentoController],
})
export class AgendamentoModule {}
