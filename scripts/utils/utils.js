function tri(maRecherche)
{
    let tabDonnees=[];
    const champRecherche =document.getElementById("header-search-input").value.toLowerCase();
    const listeTag=document.getElementsByClassName("span-tag");
   
    if(champRecherche.length<3)
    {
        for(let i=0;i<recipes.length;i++)
        {
            tabDonnees[i]=recipes[i];
        }
    }
    else
    {
        for (let i = 0; i <recipes.length ; i++) 
            {
                // recipes.length
                let tempName =recipes[i].name.toLowerCase();
                let tempDescription =recipes[i].description.toLowerCase();
                // champRecherche=champRecherche.toLowerCase();

                let foundInName=false;
                let foundInDesc=false;
                let foundIngre = false;

                for(let j=0;j<=tempName.length-champRecherche.length;j++)
                {
                    if(tempName.substring(j,j+champRecherche.length)===champRecherche)
                    {
                        foundInName = true;
                        break;
                    }
                }
                if(!foundInName)
                {
                    for(let k=0;k<=tempDescription.length-champRecherche.length;k++)
                    {
                        if(tempDescription.substring(k,k+champRecherche.length)===champRecherche)
                        {
                            foundInDesc=true;
                            break;
                        }
                    }
                }
            
                if(!foundInDesc)
                {
                    for (let l = 0; l <recipes[i].ingredients.length ; l++) 
                    {
                        // recipes[i].ingredients.length
                        let tempIgredients =recipes[i].ingredients[l].ingredient.toLowerCase();
                        
                        for(let m=0;m<=tempIgredients.length-champRecherche.length;m++)
                        {
                            if(tempIgredients.substring(m,m+champRecherche.length)===champRecherche)
                            {
                                foundIngre=true;
                                break;
                            }
                        }
                        // if (
                        //     recipes[i].ingredients[j].ingredient
                        //         .toLowerCase()
                        //         .includes(champRecherche.toLowerCase())
                        //     ) 
                        //     {
                        //         found = true;
                        //         break;
                        //     }
                    }
                    // if (found) 
                    // {
                    //     tabDonnees.push(recipes[i]);
                    // }
                }
                if (foundInName || foundInDesc || foundIngre) 
                {
                    tabDonnees[tabDonnees.length]=recipes[i];
                }
            }

    // console.log(tabDonnees)
//         // console.log(listeTags.length)
//         let tempRecipes=recipes.slice();
//         let tempTags =[];
//         // let tempTags=listeTags.slice();
//         const liste_tag=document.querySelectorAll('div.div-tag');
//     const section_label_search=document.getElementById("label-search");
//     let isPresent=false;
//    console.log(maRecherche)
//     liste_tag.forEach((e)=>
//     {   
//         tempTags.push(e.innerText);
//     });
    
//     // tempTags.push(maRecherche)
//         // tempTags.push(maRecherche);
//         // console.log(tempRecipes);
//         // console.log(recipes)
//         console.log(tempTags);

//         for(let h = 0; h < tempTags.length; h++)
//         {
//             for (let i = 0; i < tempRecipes.length; i++) 
//             {
//                 if (
//                     tempRecipes[i].name.toLowerCase().includes(tempTags[h].toLowerCase()) ||
//                     tempRecipes[i].description.toLowerCase().includes(tempTags[h].toLowerCase())
//                     ) 
//                 {
//                     tabDonnees.push(tempRecipes[i]);
//                 } 
//                 else 
//                 {
//                     let found = false;
//                     for (let j = 0; j < tempRecipes[i].ingredients.length; j++) 
//                     {
//                         if (
//                             tempRecipes[i].ingredients[j].ingredient
//                                 .toLowerCase()
//                                 .includes(maRecherche.toLowerCase())
//                             ) 
//                             {
//                                 found = true;
//                                 break;
//                             }
//                     }
//                     if (found) 
//                     {
//                         tabDonnees.push(tempRecipes[i]);
//                     }
//                 }
//             }
//             // console.log(tabDonnees)
//             tempRecipes.slice(tabDonnees);
//         }
    // displayRecipes(tabDonnees,maRecherche);
   
    }

  
    for(let i=0;i<listeTag.length;i++)
    {
        tabDonnees=tri_Tag(tabDonnees,listeTag[i].getAttribute('data-id'),listeTag[i].innerText);
    }
    displayRecipes(tabDonnees);
}

function tri_Tag(listeDonnees,type,tag)
{

 let tempDonnees=[];
 switch (type) 
        {
            case 'Ingredients':
                for(let i=0;i<listeDonnees.length;i++)
                {
                    for(let j=0;j<listeDonnees[i].ingredients.length;j++)
                    {
                        if(listeDonnees[i].ingredients[j].ingredient===tag)
                        {
                            tempDonnees[tempDonnees.length]=listeDonnees[i];
                        }
                    }
                }
                break;
            case 'Appareils' :
                for(let i=0;i<listeDonnees.length;i++)
                {  
                        if(listeDonnees[i].appliance===tag)
                        {
                            tempDonnees[tempDonnees.length]=listeDonnees[i];
                        }
                    
                }
                break;
            case 'Ustensiles' :
                for(let i=0;i<listeDonnees.length;i++)
                {
                    for(let j=0;j<listeDonnees[i].ustensils.length;j++)
                    {
                        if(listeDonnees[i].ustensils[j]===tag)
                        {
                            tempDonnees[tempDonnees.length]=listeDonnees[i];
                        }
                    }
                }
                break;
        }
        
 return tempDonnees;
}