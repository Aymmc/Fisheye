const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const nameParam = urlParams.get('name');
const cardsection = document.querySelector('.cardsection');
const galerie = document.querySelector('.divgalerie');
const divimage = document.querySelector('.image');
const titremodal = document.querySelector('.modaltitre');
async function fetchData() {
    try {
        const response = await fetch('./data/photographers.json');
        const data = await response.json();
        const { photographers, media } = data;

        const photographer = photographers.find(item => item.id === parseInt(id));
        if (photographer) {
            const { name, city, country, tagline, portrait } = photographer;
            const article = createPhotographerArticle(name, city, country, tagline, portrait);
            cardsection.appendChild(article);
        } else {
            console.log("ID non trouvé dans le fichier JSON.");
        }

        const elementsWithId = media.filter(item => item.photographerId === parseInt(id));
        if (elementsWithId.length > 0) {
            elementsWithId.forEach(item => {
                const { name, image, likes, title } = item;
                const imageUrl = `assets/sample_photo/${nameParam}/${image}`;
                const article = createMediaArticle(title, imageUrl, likes);
                galerie.appendChild(article);
            });
        } else {
            console.log("ID non trouvé dans le fichier JSON pour les médias.");
        }
    } catch (error) {
        console.error('Erreur lors du chargement du fichier JSON :', error);
    }
}

function createPhotographerArticle(name, city, country, tagline, portrait) {
    const article = document.createElement("article");

    const picture = `assets/photographers/${portrait}`;
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    const h2 = document.createElement("h2");
    h2.textContent = name;
    const h2modal = document.createElement('h2')
    h2modal.textContent = name;
    titremodal.appendChild(h2modal);
    divimage.appendChild(img);
    article.appendChild(h2);
    const h3 = document.createElement("h3");
    h3.textContent = `${city}, ${country}`;
    article.appendChild(h3);
    const p = document.createElement("p");
    p.textContent = tagline;
    article.appendChild(p);
    return article;
}

function createMediaArticle(title, imageUrl, likes) {
    const article = document.createElement('div');
    const divtitre = document.createElement('div');
    const divcoeur = document.createElement('div');
    const img = document.createElement('img');
    const imgcoeur = document.createElement('img');
    const h4 = document.createElement("h4");
    const p = document.createElement('p');

    divcoeur.classList.add('divcoeur');
    divtitre.classList.add('titregalerie');
    article.classList.add('imggalerie');
    img.setAttribute('src', imageUrl);
    img.setAttribute('alt', title);
    img.classList.add('imagegalerie');
    imgcoeur.setAttribute('src', 'assets/coeur.png');
    h4.textContent = title;
    p.textContent = likes;

    article.appendChild(img);
    galerie.appendChild(article);
    article.appendChild(divtitre);
    divtitre.appendChild(h4);
    divtitre.appendChild(divcoeur);
    divcoeur.appendChild(p);
    divcoeur.appendChild(imgcoeur);

    return article;
}

fetchData();
