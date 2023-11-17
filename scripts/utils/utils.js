//Fonction tri
function tri(maRecherche)
{
    // let tabDonnees=[];
if(maRecherche==="")
{
    displayRecipes(recipes);
}
else{
    const tabDonnees=recipes.filter(
        (recettes)=>
        (
            recettes.name.toLowerCase().includes(maRecherche.toLowerCase()) || 
            recettes.description.toLowerCase().includes(maRecherche.toLowerCase()) ||
            (
                    recettes.ingredients.some((ingredient)=>
                    ingredient.ingredient.toLowerCase().includes(maRecherche.toLowerCase())
                    )
            )
        )
     );
displayRecipes(tabDonnees,maRecherche);
}

}