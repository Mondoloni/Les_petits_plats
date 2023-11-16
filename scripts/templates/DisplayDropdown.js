//Cette fonction permet d'afficher et de créér les éléments d'un dropdown
//Elle prend 2 paramètres : le nom du dropdown et les valeurs du dropdown

function displayDropdown(nomDropdown,tabData)
{
    const div_dropdown=document.getElementById(`input-group-${nomDropdown}`);
    const div_collapse=document.getElementById(`collapse${nomDropdown}`);
    const input_search=document.getElementById(`search-${nomDropdown}`);
// Sélection de la div avec la classe "input-group"
//On supprime les éléments du dropdown déjà présent
// if (div_dropdown) {
//     let nextElement = div_dropdown.nextElementSibling;

//     // Tant qu'il y a un élément suivant et que ce n'est pas la fin
//     while (nextElement !== null) {
//         // On stocke temporairement la référence de l'élément suivant
//         const tempNextElement = nextElement.nextElementSibling;
//         // On Supprime l'élément suivant (la div)
//         nextElement.remove();
//         // On Passe à l'élément suivant dans la boucle
//         nextElement = tempNextElement;
//     }
// } else {
//     console.error("La classe 'input-group' n'a pas été trouvée.", nomDropdown);
// }

//on parcours la liste des éléments passé en paramètre pour créér autant de div
tabData.forEach((element) => 
    {
        const div_accordion_body=document.createElement("div");
        div_accordion_body.setAttribute("class","accordion-body");
        //On ajoute un événement au click, on déclenche la fonction ajoutTag
        div_accordion_body.setAttribute("OnClick",`ajoutTag("${element}")`);
        div_accordion_body.setAttribute(`data-${nomDropdown}`,`${nomDropdown}`);
        div_accordion_body.innerHTML=element;
        div_collapse.appendChild(div_accordion_body);
        
    });

//On ajoute un évenement, lors de la modification du champ de recherche
//On lance la fonction updateDropdown
    input_search.setAttribute("oninput",`updateDropdown("${nomDropdown}")`);
  
    return true;
}

function ajoutTag(nomTag)
{
    const liste_tag=document.querySelectorAll('div.div-tag');
    const section_label_search=document.getElementById("label-search");
    let isPresent=false;
   
    liste_tag.forEach((e)=>
    {   
        if(e.innerText===nomTag)
        {
            isPresent=true;
        }
    });

    if(isPresent===false)
    {
        const div_tag=document.createElement("div");
        div_tag.setAttribute("class","div-tag");
        

        const span_tag=document.createElement("span");
        span_tag.innerText=nomTag;
        span_tag.setAttribute("class","span-tag");

        const button_close=document.createElement("button");
        button_close.setAttribute("type","button");
        button_close.setAttribute("class","btn-close");
        button_close.setAttribute("aria-label","Close");
        button_close.setAttribute("data-id",nomTag);
        button_close.addEventListener("click", (e) => {
            e.currentTarget.parentNode.remove();
             //Lancer la fonction Tri
        });

        div_tag.appendChild(span_tag);
        div_tag.appendChild(button_close);

        section_label_search.appendChild(div_tag);

    }
    //Lancer la fonction Tri
}

function suppressionTag()
{

}
//la fonction permet de mettre à jour les éléments des dropdows (ingredients, appareils, ustensiles)
function updateDropdown(nomDropdown)
{
    const div_dropdown=document.getElementById(`input-group-${nomDropdown}`);
    // const div_dropdown=document.querySelectorAll(`div[data-${nomDropdown}]`);
    // const input_accordion=document.querySelectorAll(`#accordion-body-${nomDropdown}`);
    const input_accordion=document.querySelectorAll(`div[data-${nomDropdown}]`);
    const input_search=document.getElementById(`search-${nomDropdown}`).value;
// Sélection de la div avec la classe "input-group"


input_accordion.forEach(function(element) {

  if(element.innerText.toLowerCase().includes(input_search.toLowerCase()))
  {
    element.classList.remove('is-hidden');
    } 
    else 
    {
        element.classList.add('is-hidden');
}
});

if (div_dropdown) {
    let nextElement = div_dropdown.nextElementSibling;

    // Tant qu'il y a un élément suivant et que ce n'est pas la fin
    while (nextElement !== null) {
        // On stocke temporairement la référence de l'élément suivant
        const tempNextElement = nextElement.nextElementSibling;
        // On Supprime l'élément suivant (la div)
        // nextElement.remove();
        // On Passe à l'élément suivant dans la boucle
        nextElement = tempNextElement;
    }
} else {
    console.error("La classe 'input-group' n'a pas été trouvée.", nomDropdown);
}
}