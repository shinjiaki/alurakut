import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
  if(request.method === 'POST') {
    const TOKEN = '17a9ceebe650c34aa5e2b3a4f39825'
    const client = new SiteClient(TOKEN)

    const registroCriado = await client.items.create({
      itemType: "967812", // ID do Model de "communities" criado pelo Dato
      ...request.body,
      // title: "Teste Comunidade",
      // imageUrl: "https://github.com/shinjiaki.png",
      // creatorSlug: "shinjiaki"
    })

    console.log(registroCriado)

    response.json({
      dados: 'Algum dado qualquer',
      registroCriado: registroCriado,
    })
    return;
  }

  response.status(404).json({
    message: 'Ainda não temos nada no GET, mas no POST tem!'
  })
}