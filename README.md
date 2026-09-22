# Bolos da Priih — Site de Bolos

Site estático feito para funcionar diretamente com o VS Code + Live Server.

## Como usar

1. Abra a pasta no VS Code.
2. Instale a extensão Live Server, caso ainda não tenha.
3. Abra `index.html`.
4. Clique com o botão direito → **Open with Live Server**.

## Antes de publicar

Abra `app.js` e troque:

```js
const WHATSAPP = "5511965872637";
```

pelo WhatsApp real da loja.

## Fotos

Coloque as fotos reais na pasta `imagens` usando estes nomes:

- bolo-destaque.jpg
- bolo-classico.jpg
- bolo-personalizado.jpg
- bolo-infantil.jpg
- trabalho-01.jpg
- trabalho-02.jpg
- trabalho-03.jpg
- trabalho-04.jpg

Se as imagens ainda não existirem, o site continua funcionando com os fundos de reserva.

O formulário abre o WhatsApp com os dados do pedido. Neste primeiro modelo não há banco de dados nem sistema de agenda automática.
