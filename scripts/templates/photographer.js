function photographerTemplate(data) {
    const { name, city, country, tagline, price, portrait } = data;
  
    const picture = `assets/photographers/${portrait}`;
  
    function getUserCardDOM() {
      const article = document.createElement("article");
      const img = document.createElement("img");
      img.setAttribute("src", picture);
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
      span.textContent = price + '€/jour' ;
      article.appendChild(span);
      return article;
    }
    return { name, city, country, picture, tagline, price, getUserCardDOM };
  }