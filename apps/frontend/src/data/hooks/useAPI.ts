export default function useAPI() {
	//Url que está dentro do arquivo .env de frontend
	const urlBase = process.env.NEXT_PUBLIC_API_URL

	async function httpGet(caminho: string) {
		//Verifica se a url que veio do usuário tem / ou não
		const uri = caminho.startsWith('/') ? caminho : `/${caminho}`
		const urlCompleta = `${urlBase}${uri}`

		const resposta = await fetch(urlCompleta)
		return extrairDados(resposta)

	}

	async function httpPost(caminho: string, body: unknown) {
		//Verifica se a url que veio do usuário tem / ou não
		const uri = caminho.startsWith('/') ? caminho : `/${caminho}`
		const urlCompleta = `${urlBase}${uri}`

		const resposta = await fetch(urlCompleta, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(body),
		})
		return extrairDados(resposta)
	}

	async function extrairDados(resposta: Response) {
		let conteudo = ""
		try {
			conteudo = await resposta.text()
			return JSON.parse(conteudo)
		} catch {
			return conteudo
		}
	}

	return { httpGet, httpPost }
}
