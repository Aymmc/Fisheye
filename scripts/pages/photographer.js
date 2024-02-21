const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const nameParam = urlParams.get('name')
const cardsection = document.querySelector('.cardsection');
const galerie = document.querySelector('.divgalerie')
const divimage = document.querySelector('.image')
fetch('./data/photographers.json')
    .then(response => response.json())
    .then(data => {
        const photographers = data.photographers; // Accédez au tableau des photographes
        const element = photographers.find(item => item.id === parseInt(id));
        if (element) {
            const { name, city, country, tagline, portrait } = element;
            const article = document.createElement("article");
            const picture = `assets/photographers/${portrait}`;
            const img = document.createElement("img");
            img.setAttribute("src", picture);
            const h2 = document.createElement("h2");
            h2.textContent = name;
            divimage.appendChild(img)
            article.appendChild(h2);
            const h3 = document.createElement("h3");
            h3.textContent = city + ", " + country;
            article.appendChild(h3);
            const p = document.createElement("p");
            p.textContent = tagline;
            article.appendChild(p);
            cardsection.appendChild(article)
            cardsection.appendChild(article);
            return article;
        } else {
            console.log("ID non trouvé dans le fichier JSON.");
        }
    })
    .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));
fetch('./data/photographers.json')
    .then(response => response.json())
    .then(data => {
        const media = data.media;
        const elementsWithId = media.filter(item => item.photographerId === parseInt(id));

        if (elementsWithId.length > 0) {
            elementsWithId.forEach(item => {
                const { name, image, likes, date, title } = item;
                const imageUrl = `assets/sample_photo/${nameParam}/${image}`;
                const coeur = `assets/coeur.png`;
                const div = document.createElement('div');
                const divtitre = document.createElement('div')
                const divcoeur = document.createElement('div')
                divcoeur.classList.add('divcoeur')
                divtitre.classList.add('titregalerie')
                div.classList.add('imggalerie')
                // a.setAttribute('target', '_blank');
                const imgcoeur = document.createElement('img');
                imgcoeur.setAttribute('src', coeur)
                const img = document.createElement('img');
                img.setAttribute('src', imageUrl);
                img.setAttribute('alt', title);
                img.classList.add('imagegalerie');
                div.appendChild(img);
                galerie.appendChild(div);
                const h4 = document.createElement("h4");
                h4.textContent = title ; 
                div.appendChild(divtitre)
                const p = document.createElement('p')
                p.textContent = likes 
                divtitre.appendChild(h4)
                divtitre.appendChild(divcoeur)
                divcoeur.appendChild(p)
                divcoeur.appendChild(imgcoeur)
            });
        } else {
            console.log("ID non trouvé dans le fichier JSON.");
        }
    })
    .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));


