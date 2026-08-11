import { ProvedorSessao } from '@/data/contexts/ContextoSessao'
import { ReactNode } from 'react'

export default function Layout(props: { children: ReactNode }) {
	return <ProvedorSessao>{props.children}</ProvedorSessao>
}
