const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const cardsection = document.querySelector('.cardsection');
const newDiv = document.createElement('div');
newDiv.textContent = 'Contenu du div';
cardsection.appendChild(newDiv);
console.log(id);


fetch('./data/photographers.json')
    .then(response => response.json())
    .then(data => {
        
        const photographers = data.photographers; // Accédez au tableau des photographes
        const element = photographers.find(item => item.id === parseInt(id));
        
        if (element) {
            const { name, city, country, tagline, price, portrait } = element;
            const article = document.createElement("article");
            const img = document.createElement("img");
            const h2 = document.createElement("h2");
            h2.textContent = name;
            article.appendChild(img);
            article.appendChild(h2);
            const h3 = document.createElement("h3");
            h3.textContent = city + ", " + country;
            article.appendChild(h3);
            const p = document.createElement("p");
            p.textContent = tagline;
            article.appendChild(p);
            const span = document.createElement("span");
            span.textContent = price + '€/jour';
            article.appendChild(span);
            console.log(article)
            cardsection.appendChild(article)
            console.log(cardsection)
            return article;

        
        } else {
            console.log("ID non trouvé dans le fichier JSON.");
        }
    })
    .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));
