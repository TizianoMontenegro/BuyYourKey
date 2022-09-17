"use strict"
//1-Indicarle las 20 llaves posibles con sus imagenes.
//2-una vez seleccionada enviar datos al servidor.

window.addEventListener("load", ()=>{
const flexContainer = document.querySelector(".flex__container");

function createKey(name,model,price){
    var img = `<img class="img-item" src="images/key.png">`;
    var name = `<h2>${name}</h2>`;
    var model = `<h3 class="model">${model}</h3>`;
    var price = `<p><b>${price}</b></p>`;
    return [img,name,model,price];
}

let fragmentedDiv = document.createDocumentFragment();

for(var i = 1; i <= 20; i++){
    let randomPrice = Math.round(Math.random()*10+30);
    let randomModel = Math.round(Math.random()*100000);
    let key = createKey(`Key: ${i}`,`Model: ${randomModel}`,`Price: <b class="price">$${randomPrice}</b>`);
    let div = document.createElement("DIV");
    let form = document.createElement("FORM");
    let input = document.createElement("INPUT");
    div.addEventListener("click", ()=>document.querySelector(".key-data").value = randomModel);
    div.classList.add("flex__item");
    input.type = "submit";
    input.className = "buy";
    input.value = "BUY";
    div.tabIndex = true;
    div.innerHTML = key[0] + key[1] + key[2] + key[3];
    form.appendChild(input);
    div.appendChild(form);
    fragmentedDiv.appendChild(div);
}

flexContainer.appendChild(fragmentedDiv);
});
