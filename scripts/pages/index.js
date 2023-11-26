function displayRecipes(dataRecipes) {
    const tabIngredients=[];
    const tabUstensiles=[];
    const tabAppareils=[];
    const champRecherche =document.getElementById("header-search-input").value;
    //On récupére la section des cards des recettes
    const sectionrecettes = document.getElementById("section-recettes");
    //On supprime les cards des recettes
    while (sectionrecettes.firstChild) 
    {
        sectionrecettes.removeChild(sectionrecettes.firstChild);
    }

    if(dataRecipes.length>0)
    {
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

        // if(maRecherche===undefined)
        // {console.log("ok")
            displayDropdown("Ingredients",tabIngredients);
            displayDropdown("Appareils",tabAppareils);
            displayDropdown("Ustensiles",tabUstensiles);
        // }
        // else{
            // updateDropdown("Ingredients",maRecherche);
            // updateDropdown("Appareils",maRecherche);
            // updateDropdown("Ustensiles",maRecherche);
        // }
    }
    else
    {
        const div_no_recipes=document.createElement("div");
        div_no_recipes.setAttribute("class","no-recipes");
        const h3_no_recipes=document.createElement("h3");
        h3_no_recipes.innerHTML=`Aucune recette ne contient ‘${champRecherche} ’ vous pouvez chercher « tarte aux pommes », « poisson », etc.`;
        div_no_recipes.appendChild(h3_no_recipes);
        sectionrecettes.appendChild(div_no_recipes);
    }
    const h3_total_recettes=document.getElementById("totalRecettes");
    h3_total_recettes.textContent=dataRecipes.length+" Recettes";
}

function init() {
    
    const input_header_search=document.getElementById("header-search-input");
    input_header_search.addEventListener("input", (e) => {
    //    if(e.currentTarget.value.length>2)
    //    {
        tri(e.currentTarget.value)
    //    }
    //    else//Dans le cas ou l'on a moins de 3 caractères dans la barre de recherche principale
    //    {
    //     tri("");
    //    }
    });
     displayRecipes(recipes);
 }

 let listeTags=[];

init();
