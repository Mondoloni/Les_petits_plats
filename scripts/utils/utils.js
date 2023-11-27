//Fonction tri
function tri(maRecherche)
{
    let tabDonnees=[];
    const champRecherche =document.getElementById("header-search-input").value.toLowerCase();
    const listeTag=document.getElementsByClassName("span-tag");

    if(champRecherche.length<3)
    {
        recipes.forEach((idrecipes)=>
        {
            tabDonnees.push(idrecipes);
        });
    }
    else
    {
        recipes.forEach((idrecipes)=>
        {
            let tempName =idrecipes.name.toLowerCase();
            let tempDescription =idrecipes.description.toLowerCase();
            // champRecherche=champRecherche.toLowerCase();

            let foundInName=false;
            let foundInDesc=false;
            let foundIngre = false;

            // console.log(tempName)
            
        
            if (idrecipes.name.toLowerCase().includes(champRecherche) ||
                idrecipes.description.toLowerCase().includes(champRecherche)
                ) 
            {
                tabDonnees.push(idrecipes);
            }
            else 
                {
                    let found = false;
                    idrecipes.ingredients.forEach((ingre)=>
                    {
                        if (ingre.ingredient.toLowerCase().includes(champRecherche)) 
                            {
                                found = true;
                                // break;
                            }
                    });
                    
                    if (found) 
                    {
                        tabDonnees.push(idrecipes);
                    }
                
                }
        }); 
    
        
    // const tabDonnees=recipes.filter(
    //     (recettes)=>
    //     (
    //         recettes.name.toLowerCase().includes(champRecherche.toLowerCase()) || 
    //         recettes.description.toLowerCase().includes(champRecherche.toLowerCase()) ||
    //         (
    //                 recettes.ingredients.some((ingredient)=>
    //                 ingredient.ingredient.toLowerCase().includes(champRecherche.toLowerCase())
    //                 )
    //         )
    //     )
    //  );
    
    }

    const tableauTag=Array.from(listeTag)
    tableauTag.forEach((tag)=>
    {
        tabDonnees=tri_Tag(tabDonnees,tag.getAttribute('data-id'),tag.innerText);
    });

displayRecipes(tabDonnees);
}

function tri_Tag(listeDonnees,type,tag)
{
    let tempDonnees=[];
    // console.log(listeDonnees)
    // console.log(type)
    // console.log(tag)
    switch (type) 
        {
            case 'Ingredients':
                listeDonnees.forEach((el)=>
                {
                    el.ingredients.forEach((ing)=>
                    {
                        if(ing.ingredient.includes(tag))
                        {
                            tempDonnees.push(el);                       
                        }
                        
                    });
                });
                break;
            case 'Appareils' :
               listeDonnees.forEach((el)=>
               {
                console.log(el)
                    if(el.appliance===tag)
                    {
                        tempDonnees.push(el); 
                    }
               });
                break;
            case 'Ustensiles' :
                listeDonnees.forEach((el)=>
                {
                   
                    el.ustensils.forEach((ust)=>
                    { console.log(ust)
                        if(ust.includes(tag))
                        {
                            tempDonnees.push(el);                       
                        }
                        
                    });
                });
                break;
        }
    return tempDonnees;
}