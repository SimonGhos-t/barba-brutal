import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { DbModule } from './db/db.module'
import { AuthModule } from './auth/auth.module'
import { AgendamentoModule } from './agendamento/agendamento.module'

//Chama os arquivos dentro de auth, db
@Module({
	imports: [DbModule, AuthModule, AgendamentoModule],
	controllers: [AppController],
	providers: [],
})
export class AppModule {}
