/* eslint-disable default-case */
/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function tri() {
  let tabDonnees = [];
  const champRecherche = document.getElementById("header-search-input").value.toLowerCase();
  const listeTag = document.getElementsByClassName("span-tag");

  if (champRecherche.length < 3) {
    for (let i = 0; i < recipes.length; i++) {
      tabDonnees[i] = recipes[i];
    }
  } else {
    for (let i = 0; i < recipes.length; i++) {
      const tempName = recipes[i].name.toLowerCase();
      const tempDescription = recipes[i].description.toLowerCase();

      let foundInName = false;
      let foundInDesc = false;
      let foundIngre = false;

      for (let j = 0; j <= tempName.length - champRecherche.length; j++) {
        if (tempName.substring(j, j + champRecherche.length) === champRecherche) {
          foundInName = true;
          break;
        }
      }
      if (!foundInName) {
        for (let k = 0; k <= tempDescription.length - champRecherche.length; k++) {
          if (tempDescription.substring(k, k + champRecherche.length) === champRecherche) {
            foundInDesc = true;
            break;
          }
        }
      }

      if (!foundInDesc) {
        for (let l = 0; l < recipes[i].ingredients.length; l++) {
          const tempIgredients = recipes[i].ingredients[l].ingredient.toLowerCase();

          for (let m = 0; m <= tempIgredients.length - champRecherche.length; m++) {
            if (tempIgredients.substring(m, m + champRecherche.length) === champRecherche) {
              foundIngre = true;
              break;
            }
          }
        }
      }
      if (foundInName || foundInDesc || foundIngre) {
        tabDonnees[tabDonnees.length] = recipes[i];
      }
    }
  }

  for (let i = 0; i < listeTag.length; i++) {
    tabDonnees = tri_Tag(tabDonnees, listeTag[i].getAttribute('data-id'), listeTag[i].innerText);
  }
  displayRecipes(tabDonnees);
}

function tri_Tag(listeDonnees, type, tag) {
  const tempDonnees = [];
  switch (type) {
    case 'Ingredients':
      for (let i = 0; i < listeDonnees.length; i++) {
        for (let j = 0; j < listeDonnees[i].ingredients.length; j++) {
          if (listeDonnees[i].ingredients[j].ingredient === tag) {
            tempDonnees[tempDonnees.length] = listeDonnees[i];
          }
        }
      }
      break;
    case 'Appareils':
      for (let i = 0; i < listeDonnees.length; i++) {
        if (listeDonnees[i].appliance === tag) {
          tempDonnees[tempDonnees.length] = listeDonnees[i];
        }
      }
      break;
    case 'Ustensiles':
      for (let i = 0; i < listeDonnees.length; i++) {
        for (let j = 0; j < listeDonnees[i].ustensils.length; j++) {
          if (listeDonnees[i].ustensils[j] === tag) {
            tempDonnees[tempDonnees.length] = listeDonnees[i];
          }
        }
      }
      break;
  }

  return tempDonnees;
}
