console.log(products);

//Gå gjennom alle produkter, generere HTML for hvert produkt, skrive dette til index.html


//En variabel som kan holde på HTML-en for produktene
let productHTML = "";

products.map((product, index) => productHTML += 
        `<article class="product-card">
            <img src="website_images/PROD_${product.imagefile}" alt="PRODUKTTITTEL">
            <a href="#KATEGORISIDE">Ninjago</a>
            <h3>${product.title}</h3>
            <p>Kr. ${product.price},-</p>
            <button id="">Legg i handlekurv</button>
        </article>`)
        
//Finn #product-list, og fyll den med variablene i variabelen i productHTML
        document.getElementById("product-list").innerHTML = productHTML