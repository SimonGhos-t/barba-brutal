import ForcarAutenticacao from "@/components/shared/ForcarAutenticacao";
import { ReactNode } from "react";

export default function Layout(props: { children: ReactNode }) {
    return (
        <ForcarAutenticacao>{props.children}</ForcarAutenticacao>
    )
} 