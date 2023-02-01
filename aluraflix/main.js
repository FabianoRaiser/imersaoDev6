let livros = `{ "osLivros" : [ 
    { "linkImg": "https://cdn.shopify.com/s/files/1/0155/7645/products/GuiaFront-End_ebook_large.jpg", "nome": "Guia Front-end" }, 
    { "linkImg": "https://cdn.shopify.com/s/files/1/0155/7645/products/TurbineseuCSS_ebook_large.jpg", "nome": "Turbine seu CSS" },
    { "linkImg": "https://cdn.shopify.com/s/files/1/0155/7645/products/HTML5eCSS3_ebook_large.jpg", "nome": "HTML5 e CSS3" },
    { "linkImg": "https://cdn.shopify.com/s/files/1/0155/7645/products/p_801e56cc-890d-4709-8dee-76288fc53c49_large.jpg", "nome": "Guia prático de TypeScript" }
    ] }`;

const objLivros = JSON.parse(livros);
console.log(objLivros.osLivros.length);

let i = 0;

while(i < objLivros.osLivros.length) {
    document.write(`<div class="livros"><img src="${objLivros.osLivros[i].linkImg}"><p class="livro-titulo">${objLivros.osLivros[i].nome}</p></div>`);
    i++
}

