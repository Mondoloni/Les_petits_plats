/* eslint-disable no-undef */
// Fonction tri
// eslint-disable-next-line no-unused-vars
function tri() {
  let tabDonnees = [];
  const champRecherche = document.getElementById("header-search-input").value.toLowerCase();
  const listeTag = document.getElementsByClassName("span-tag");

  if (champRecherche.length < 3) {
    tabDonnees = recipes.slice();
  } else {
    tabDonnees = recipes.filter((idrecipes) => {
      const tempName = idrecipes.name.toLowerCase();
      const tempDescription = idrecipes.description.toLowerCase();

      return (
        tempName.includes(champRecherche.toLowerCase())
                || tempDescription.includes(champRecherche.toLowerCase())
                || idrecipes.ingredients.some((ingre) => ingre.ingredient.toLowerCase().includes(champRecherche.toLowerCase()))
      );
    });
  }

  const tableauTag = Array.from(listeTag);
  tableauTag.forEach((tag) => {
    // eslint-disable-next-line no-use-before-define
    tabDonnees = triTag(tabDonnees, tag.getAttribute("data-id"), tag.innerText);
  });

  displayRecipes(tabDonnees);
}

function triTag(listeDonnees, type, tag) {
  let tempDonnees = [];

  switch (type) {
    case "Ingredients":
      tempDonnees = listeDonnees.filter((el) => el.ingredients.some((ingre) => ingre.ingredient.includes(tag)));
      break;
    case "Appareils":
      tempDonnees = listeDonnees.filter((el) => el.appliance.includes(tag));
      break;
    case "Ustensiles":
      tempDonnees = listeDonnees.filter((el) => el.ustensils.includes(tag));
      break;
  }
  return tempDonnees;
}
