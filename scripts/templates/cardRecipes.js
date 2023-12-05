// eslint-disable-next-line no-unused-vars
function cardRecipes(data) {
  const {
    image, name, ingredients, time, description,
  } = data;

  const divCardRecettes = document.createElement("div");
  divCardRecettes.setAttribute("class", "card-recettes");

  const divCardRecettesImg = document.createElement("div");
  divCardRecettesImg.setAttribute("class", "card-recettes-img");
  const imgCarRecettes = document.createElement("img");
  imgCarRecettes.setAttribute("src", `./assets/recettes/${image}`);
  imgCarRecettes.setAttribute("alt", name);
  const divCardRecettesImgTime = document.createElement("div");
  divCardRecettesImgTime.setAttribute("class", "card-recettes-img-time");
  const h3CardRecettesImgTime = document.createElement("h3");
  h3CardRecettesImgTime.innerHTML = `${time}min`;
  divCardRecettesImgTime.appendChild(h3CardRecettesImgTime);
  divCardRecettesImg.appendChild(imgCarRecettes);
  divCardRecettesImg.appendChild(divCardRecettesImgTime);
  divCardRecettes.appendChild(divCardRecettesImg);

  const h2CardRecettesTitre = document.createElement("h2");
  h2CardRecettesTitre.innerHTML = name;
  const h3CardRecettesRecette = document.createElement("h3");
  h3CardRecettesRecette.innerHTML = "RECETTE";
  const h4CardEecettesDescription = document.createElement("h4");
  if (description.length > 203) {
    h4CardEecettesDescription.innerHTML = description.substring(0, 203);
  } else {
    h4CardEecettesDescription.innerHTML = description;
  }

  divCardRecettes.appendChild(h2CardRecettesTitre);
  divCardRecettes.appendChild(h3CardRecettesRecette);
  divCardRecettes.appendChild(h4CardEecettesDescription);

  const h3CardRecettesIgredients = document.createElement("h3");
  h3CardRecettesIgredients.innerHTML = "INGREDIENTS";
  divCardRecettes.appendChild(h3CardRecettesIgredients);

  const divCardRecettesIngredients = document.createElement("div");
  divCardRecettesIngredients.setAttribute("class", "card-recettes-ingredients");

  ingredients.forEach((element) => {
    const divIngredients = document.createElement("div");
    const h4Ingredients = document.createElement("h4");
    h4Ingredients.innerHTML = element.ingredient;
    const h5Ingredients = document.createElement("h5");
    if (element.unit !== undefined) {
      h5Ingredients.innerHTML = `${element.quantity} ${element.unit}`;
    } else {
      h5Ingredients.innerHTML = element.quantity;
    }
    divIngredients.appendChild(h4Ingredients);
    divIngredients.appendChild(h5Ingredients);
    divCardRecettesIngredients.appendChild(divIngredients);
  });

  divCardRecettes.appendChild(divCardRecettesIngredients);

  return divCardRecettes;
}
