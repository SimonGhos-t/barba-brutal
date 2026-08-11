"use client"
import { usePathname, useRouter } from "next/navigation"
import { ReactNode, useEffect } from "react"
import useSessao from "@/data/hooks/useSessao"
import Processando from "./formulario/Processando"

export default function ForcarAutenticacao(props: { children: ReactNode }) {
    const {usuario, carregando} = useSessao()
    const router = useRouter()
    const caminho = usePathname()
    const autenticado = !!usuario?.email

    useEffect(() => {
        if (!carregando && !autenticado) {
            router.push(`/entrar?destino=${caminho}`)
        }
    }, [carregando, autenticado, caminho, router])

    if (carregando || !autenticado) return <Processando />

    return props.children
}
