function displayRecipes(dataRecipes,maRecherche) {
    const tabIngredients=[];
    const tabUstensiles=[];
    const tabAppareils=[];
    //On récupére la section des cards des recettes
    const sectionrecettes = document.getElementById("section-recettes");
    //On supprime les cards des recettes
    while (sectionrecettes.firstChild) 
    {
        sectionrecettes.removeChild(sectionrecettes.firstChild);
    }

    dataRecipes.forEach((idrecipes) => 
    {
        // La fonction est définie dans un autre fichier js
        // eslint-disable-next-line no-undef
        const recipesModel = cardRecipes(idrecipes);
        sectionrecettes.appendChild(recipesModel);

        idrecipes.ingredients.forEach((element)=>
        {
            if(tabIngredients.includes(element.ingredient)==false)
            {
                tabIngredients.push(element.ingredient);
            }
        });

        idrecipes.ustensils.forEach((element)=>
        {
            if(tabUstensiles.includes(element)==false)
            {
                tabUstensiles.push(element);
            }
        });
                
        if(tabAppareils.includes(idrecipes.appliance)==false)
        {
            tabAppareils.push(idrecipes.appliance)
        }
        
    });
// console.log(tabIngredients.length)
if(maRecherche===undefined)
{
    displayDropdown("Ingredients",tabIngredients);
    displayDropdown("Appareils",tabAppareils);
    displayDropdown("Ustensiles",tabUstensiles);
}
else{
    updateDropdown("Ingredients",maRecherche);
    updateDropdown("Appareils",maRecherche);
    updateDropdown("Ustensiles",maRecherche);
}
    const h3_total_recettes=document.getElementById("totalRecettes");
    h3_total_recettes.textContent=dataRecipes.length+" Recettes";
}

function init() {
    
    const input_header_search=document.getElementById("header-search-input");
    input_header_search.addEventListener("input", (e) => {
       if(e.currentTarget.value.length>2)
       {
        tri(e.currentTarget.value)
       }
       else
       {
        tri("");
       }
    });

    displayRecipes(recipes);
 }

init();
