const catalogo = [
    {
        id:1,
        marca:"apple",
        nome:"Iphone 7 Plus",
        preco:1000,
        imagem:"iphone-7-plus.png",
        celular:true,
    },
    {
        id:2,
        marca:"apple",
        nome:"Iphone 8 Plus",
        preco:1000,
        imagem:"iphone-8-plus.png",
        celular:true,
    },
    {
        id:3,
        marca:"apple",
        nome:"Iphone X",
        preco:1000,
        imagem:"iphone-x.png",
        celular:true,
    },
    {
        id:4,
        marca:"apple",
        nome:"Iphone XS",
        preco:1000,
        imagem:"iphone-xs.png",
        celular:true,
    },
    {
        id:5,
        marca:"apple",
        nome:"Iphone XR",
        preco:1000,
        imagem:"iphone-xr.png",
        celular:true,
    },
    {
        id:6,
        marca:"apple",
        nome:"Iphone 11 ",
        preco:1000,
        imagem:"iphone-11.png",
        celular:true,
    },
    {
        id:7,
        marca:"apple",
        nome:"Iphone 11 Pro",
        preco:1000,
        imagem:"iphone-11-pro.png",
        celular:true,
    },
    {
        id:8,
        marca:"apple",
        nome:"Iphone 11 Pro Max",
        preco:1000,
        imagem:"iphone-11-pro-max.png",
        celular:true,
    },
    {
        id:9,
        marca:"apple",
        nome:"Iphone 12",
        preco:1000,
        imagem:"iphone-12.png",
        celular:true,
    },
    {
        id:10,
        marca:"apple",
        nome:"Iphone 12 mini",
        preco:1000,
        imagem:"iphone-12-mini.png",
        celular:true,
    },
    {
        id:11,
        marca:"apple",
        nome:"Iphone 12 pro max",
        preco:1000,
        imagem:"iphone-12-pro-max.png",
        celular:true,
    },
    {
        id:12,
        marca:"apple",
        nome:"Iphone 13",
        preco:1000,
        imagem:"iphone-13.png",
        celular:true,
    },
    {
        id:13,
        marca:"apple",
        nome:"Iphone 13 Mini",
        preco:1000,
        imagem:"iphone-13-mini.png",
        celular:true,
    },
    {
        id:14,
        marca:"apple",
        nome:"Iphone 13 Pro",
        preco:1000,
        imagem:"iphone-13-pro.png",
        celular:true,
    },
    {
        id:15,
        marca:"apple",
        nome:"Iphone 13 Pro max",
        preco:1000,
        imagem:"iphone-13-pro-max.png",
        celular:true,
    },
    {
        id:16,
        marca:"apple",
        nome:"Iphone 14",
        preco:1000,
        imagem:"iphone-14.png",
        celular:true,
    },
    {
        id:17,
        marca:"apple",
        nome:"Iphone 14 Pro",
        preco:1000,
        imagem:"iphone-14-pro.png",
        celular:true,
    },
    {
        id:18,
        marca:"apple",
        nome:"Iphone 14 Pro Max",
        preco:1000,
        imagem:"iphone-14-pro-max.png",
        celular:true,
    },

];

for (const produtosCatalogo of catalogo) {
    const cartaoProduto = `<div id="card-produto-1">
    <img 
    src="./images/products/${produtoCatalogo.imagem}"
    alt="Produto 1 Do catalogo"
    style="height: 300px"
    />
    <p>${produtosCatalogo.marca}</p>
    <p>${produtosCatalogo.nome}</p>
    <p>${produtosCatalogo.preco}</p>
    <button>Adcionar</button>
    </div>`;

    document.getElementById("container-produto").innerHTML += cartaoProduto;
}