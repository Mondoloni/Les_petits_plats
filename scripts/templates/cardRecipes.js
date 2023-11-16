function cardRecipes(data){
    const {  image, name, ingredients, time,description  } = data;

    const div_card_recettes= document.createElement("div");
    div_card_recettes.setAttribute("class","card-recettes");
    
    const div_card_recettes_img= document.createElement("div");
    div_card_recettes_img.setAttribute("class","card-recettes-img");
    const img_car_recettes=document.createElement("img");
    img_car_recettes.setAttribute("src",`./assets/recettes/${image}`);
    img_car_recettes.setAttribute("alt",name);
    const div_card_recettes_img_time=document.createElement("div");
    div_card_recettes_img_time.setAttribute("class","card-recettes-img-time");
    const h3_card_recettes_img_time=document.createElement("h3");
    h3_card_recettes_img_time.innerHTML=`${time}min`;
    div_card_recettes_img_time.appendChild(h3_card_recettes_img_time);
    div_card_recettes_img.appendChild(img_car_recettes);
    div_card_recettes_img.appendChild(div_card_recettes_img_time);
    div_card_recettes.appendChild(div_card_recettes_img);
    
    const h2_card_recettes_titre=document.createElement("h2");
    h2_card_recettes_titre.innerHTML=name;
    const h3_card_recettes_RECETTE=document.createElement("h3");
    h3_card_recettes_RECETTE.innerHTML="RECETTE";
    const h4_card_recettes_description=document.createElement("h4");
    if(description.length>203)
    {
        h4_card_recettes_description.innerHTML=description.substring(0,203);
    }
    else
    {
        h4_card_recettes_description.innerHTML=description;
    }
    
    div_card_recettes.appendChild(h2_card_recettes_titre);
    div_card_recettes.appendChild(h3_card_recettes_RECETTE);
    div_card_recettes.appendChild(h4_card_recettes_description);


    const h3_card_recettes_INGREDIENTS=document.createElement("h3");
    h3_card_recettes_INGREDIENTS.innerHTML="INGREDIENTS";
    div_card_recettes.appendChild(h3_card_recettes_INGREDIENTS);

    const div_card_recettes_ingredients=document.createElement("div");
    div_card_recettes_ingredients.setAttribute("class","card-recettes-ingredients");

    ingredients.forEach(element => {
        const div_ingredients=document.createElement("div");
        const h4_ingredients=document.createElement("h4");
        h4_ingredients.innerHTML=element.ingredient;
        const h5_ingredients=document.createElement("h5");
        if(element.unit!==undefined)
        {
            h5_ingredients.innerHTML=`${element.quantity} ${element.unit}`;
        }
        else
        {
            h5_ingredients.innerHTML=element.quantity;
        }
        div_ingredients.appendChild(h4_ingredients);
        div_ingredients.appendChild(h5_ingredients);
        div_card_recettes_ingredients.appendChild(div_ingredients);

    });
    
    div_card_recettes.appendChild(div_card_recettes_ingredients);

    return div_card_recettes;
}