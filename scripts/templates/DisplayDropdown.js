// Cette fonction permet d'afficher et de créér les éléments d'un dropdown
// Elle prend 2 paramètres : le nom du dropdown et les valeurs du dropdown

// eslint-disable-next-line no-unused-vars
function displayDropdown(nomDropdown, tabData) {
  const divDropdown = document.getElementById(`input-group-${nomDropdown}`);
  const divCollapse = document.getElementById(`collapse${nomDropdown}`);
  const inputSearch = document.getElementById(`search-${nomDropdown}`);
  // Sélection de la div avec la classe "input-group"
  // On supprime les éléments du dropdown déjà présent
  if (divDropdown) {
    let nextElement = divDropdown.nextElementSibling;

    // Tant qu'il y a un élément suivant et que ce n'est pas la fin
    while (nextElement !== null) {
      // On stocke temporairement la référence de l'élément suivant
      const tempNextElement = nextElement.nextElementSibling;
      // On Supprime l'élément suivant (la div)
      nextElement.remove();
      // On Passe à l'élément suivant dans la boucle
      nextElement = tempNextElement;
    }
  } else {
    console.error("La classe 'input-group' n'a pas été trouvée.", nomDropdown);
  }

  // on parcours la liste des éléments passé en paramètre pour créér autant de div
  tabData.forEach((element) => {
    const divAccordionBody = document.createElement("div");
    divAccordionBody.setAttribute("class", "accordion-body");
    // On ajoute un événement au click, on déclenche la fonction ajoutTag
    divAccordionBody.setAttribute("OnClick", `ajoutTag("${element}","${nomDropdown}")`);
    divAccordionBody.setAttribute(`data-${nomDropdown}`, `${nomDropdown}`);
    divAccordionBody.innerHTML = element;
    divCollapse.appendChild(divAccordionBody);
  });

  // On ajoute un évenement, lors de la modification du champ de recherche
  // On lance la fonction updateDropdown
  // input_search.setAttribute("oninput",`updateDropdown("${nomDropdown}")`);

  inputSearch.addEventListener("input", (e) => {
    // eslint-disable-next-line no-use-before-define
    updateDropdown(nomDropdown, e.currentTarget.value);
  });

  return true;
}

// eslint-disable-next-line no-unused-vars
function ajoutTag(nomTag, nomDropdown) {
  const listeTag = document.querySelectorAll("div.div-tag");
  const sectionLabelSearch = document.getElementById("label-search");
  let isPresent = false;

  listeTag.forEach((e) => {
    if (e.innerText === nomTag) {
      isPresent = true;
    }
  });

  if (isPresent === false) {
    const divTag = document.createElement("div");
    divTag.setAttribute("class", "div-tag");

    const spanTag = document.createElement("span");
    spanTag.innerText = nomTag;
    spanTag.setAttribute("class", "span-tag");
    spanTag.setAttribute("data-id", nomDropdown);

    const buttonClose = document.createElement("button");
    buttonClose.setAttribute("type", "button");
    buttonClose.setAttribute("class", "btn-close");
    buttonClose.setAttribute("aria-label", "Close");
    buttonClose.setAttribute("data-id", nomTag);
    buttonClose.addEventListener("click", (e) => {
      e.currentTarget.parentNode.remove();
      // eslint-disable-next-line no-undef
      tri("");
    });

    divTag.appendChild(spanTag);
    divTag.appendChild(buttonClose);

    sectionLabelSearch.appendChild(divTag);
  }
  // eslint-disable-next-line no-undef
  tri();
}

// la fonction permet de mettre à jour les éléments des dropdows
// (ingredients, appareils, ustensiles)
function updateDropdown(nomDropdown, laRecherche) {
  const divDropdown = document.getElementById(`input-group-${nomDropdown}`);
  const inputAccordion = document.querySelectorAll(`div[data-${nomDropdown}]`);

  inputAccordion.forEach((element) => {
    if (element.innerText.toLowerCase().includes(laRecherche.toLowerCase())) {
      element.classList.remove("is-hidden");
    } else {
      element.classList.add("is-hidden");
    }
  });

  if (divDropdown) {
    let nextElement = divDropdown.nextElementSibling;
    // Tant qu'il y a un élément suivant et que ce n'est pas la fin
    while (nextElement !== null) {
      // On stocke temporairement la référence de l'élément suivant
      const tempNextElement = nextElement.nextElementSibling;
      // On Supprime l'élément suivant (la div)
      // On Passe à l'élément suivant dans la boucle
      nextElement = tempNextElement;
    }
  } else {
    console.error("La classe 'input-group' n'a pas été trouvée.", nomDropdown);
  }
}
