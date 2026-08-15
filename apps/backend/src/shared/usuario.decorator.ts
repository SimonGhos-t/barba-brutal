import { Usuario } from '@barbabrutal/core'
import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { Request } from 'express'

interface RequestComUsuario extends Request {
	usuario: Usuario
}

const UsuarioLogado = createParamDecorator((_, ctx: ExecutionContext) => {
	const req = ctx.switchToHttp().getRequest<RequestComUsuario>()
	return req.usuario
})

export { UsuarioLogado }
