import { MiddlewareConsumer, Module } from '@nestjs/common'
import { AgendamentoController } from './agendamento.controller'
import { AuthMiddleware } from '../auth/auth.middleware'
import { AuthModule } from '../auth/auth.module'

@Module({
	imports: [AuthModule],
	controllers: [AgendamentoController],
})
export class AgendamentoModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(AuthMiddleware).forRoutes(AgendamentoController)
	}
}
