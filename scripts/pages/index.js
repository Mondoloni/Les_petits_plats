/* eslint-disable no-undef */
function displayRecipes(dataRecipes) {
  const tabIngredients = [];
  const tabUstensiles = [];
  const tabAppareils = [];
  const champRecherche = document.getElementById("header-search-input").value;
  // On récupére la section des cards des recettes
  const sectionrecettes = document.getElementById("section-recettes");
  // On supprime les cards des recettes
  while (sectionrecettes.firstChild) {
    sectionrecettes.removeChild(sectionrecettes.firstChild);
  }

  if (dataRecipes.length > 0) {
    dataRecipes.forEach((idrecipes) => {
      // La fonction est définie dans un autre fichier js
      // eslint-disable-next-line no-undef
      const recipesModel = cardRecipes(idrecipes);
      sectionrecettes.appendChild(recipesModel);

      idrecipes.ingredients.forEach((element) => {
        if (tabIngredients.includes(element.ingredient) === false) {
          tabIngredients.push(element.ingredient);
        }
      });

      idrecipes.ustensils.forEach((element) => {
        if (tabUstensiles.includes(element) === false) {
          tabUstensiles.push(element);
        }
      });

      if (tabAppareils.includes(idrecipes.appliance) === false) {
        tabAppareils.push(idrecipes.appliance);
      }
    });

    displayDropdown("Ingredients", tabIngredients);
    displayDropdown("Appareils", tabAppareils);
    displayDropdown("Ustensiles", tabUstensiles);
  } else {
    const divNoRecipes = document.createElement("div");
    divNoRecipes.setAttribute("class", "no-recipes");
    const h3NoRecipes = document.createElement("h3");
    h3NoRecipes.innerHTML = `Aucune recette ne contient ‘${champRecherche} ’ vous pouvez chercher « tarte aux pommes », « poisson », etc.`;
    divNoRecipes.appendChild(h3NoRecipes);
    sectionrecettes.appendChild(divNoRecipes);
  }
  const h3TotalRecettes = document.getElementById("totalRecettes");
  h3TotalRecettes.textContent = `${dataRecipes.length} Recettes`;
}

function init() {
  const inputHeaderSearch = document.getElementById("header-search-input");
  inputHeaderSearch.addEventListener("input", () => {
    tri();
  });
  displayRecipes(recipes);
}

init();
