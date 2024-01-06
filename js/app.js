
// RAIZ PRINCIPAL
let root = document.getElementById("root");

//------------ SLOGAN -------------//

// CONTENEDOR DEL SELECT
let containerSlogan = document.createElement('div');
containerSlogan.classList.add("container");
root.appendChild(containerSlogan);

// SE CREA UNA ROW PARA LA IMAGEN
let rowSlogan = document.createElement('div');
rowSlogan.classList.add("row", "mt-3");
containerSlogan.appendChild(rowSlogan);

// SE CREA UNA COLUMNA (12) PARA LA IMAGEN
let colSlogan = document.createElement('div');
colSlogan.classList.add("col-12");
rowSlogan.appendChild(colSlogan);

// SE INSERTA LA IMAGEN DEL SLOGAN
let imgSlogan = document.createElement('img');
imgSlogan.setAttribute('id', 'slogan');
imgSlogan.setAttribute('src', 'img/slogan.png');

/* img.setAttribute('', alt);
img.setAttribute('', srcser); */
colSlogan.appendChild(imgSlogan);

//---------------------------------//


//------------ SELECT ------------//

// CONTENEDOR DE LOS SELECTS
let containerInput = document.createElement('div');
containerInput.classList.add('container', 'text-start');
root.appendChild(containerInput);

// SE CREA UNA ROW PARA LOS SELECT (LENGUAJE)
let rowSelectLenguajes = document.createElement('div');
rowSelectLenguajes.classList.add('row', 'mt-5', 'mb-3');
containerInput.appendChild(rowSelectLenguajes);

// SE CREA UNA COLUMNA (6) PARA EL SELECT (LENGUAJE)
let colSelectLenguage = document.createElement('div');
colSelectLenguage.classList.add('col-md-6');
rowSelectLenguajes.appendChild(colSelectLenguage);

// SE CREA EL SELECT (LENGUAJE)
let selectLenguage = document.createElement('select');
selectLenguage.classList.add('form-select', 'lenguage');
selectLenguage.setAttribute('aria-label', 'Default select example');
colSelectLenguage.appendChild(selectLenguage);

// SE CREA EL LA ETIQUETA OPTION PARA SELECT (LENGUAJE)
let optionLenguaje1 = document.createElement('option');
optionLenguaje1.setAttribute('selected', 'selected');
optionLenguaje1.textContent = "Seleccionar Idioma"
selectLenguage.appendChild(optionLenguaje1);

// SE CREA EL LA ETIQUETA OPTION PARA SELECT (LENGUAJE)
let optionLenguaje2 = document.createElement('option');
optionLenguaje2.setAttribute('value', 1);
optionLenguaje2.textContent = "Español"
selectLenguage.appendChild(optionLenguaje2);

// SE CREA EL LA ETIQUETA OPTION PARA SELECT (LENGUAJE)
let optionLenguaje3 = document.createElement('option');
optionLenguaje3.setAttribute('value', 2);
optionLenguaje3.textContent = "Ingles"
selectLenguage.appendChild(optionLenguaje3);

// SE CREA UNA COLUMNA (6) PARA EL SELECT (TEMA)
let colSelectTheme = document.createElement('div');
colSelectTheme.classList.add('col-md-6');
rowSelectLenguajes.appendChild(colSelectTheme);

// SE CREA EL SELECT (TEMA)
let selectTheme = document.createElement('select');
selectTheme.classList.add('form-select');
selectTheme.setAttribute('id', 'theme')
selectTheme.setAttribute('aria-label', 'Default select example');
colSelectTheme.appendChild(selectTheme);

// SE CREA EL LA ETIQUETA OPTION PARA SELECT (TEMA)
let optionTheme1 = document.createElement('option');
optionTheme1.setAttribute('selected', 'selected');
optionTheme1.textContent = "Seleccionar Tema"
selectTheme.appendChild(optionTheme1);

// SE CREA EL LA ETIQUETA OPTION PARA SELECT (TEMA)
let optionTheme2 = document.createElement('option');
optionTheme2.setAttribute('value', 1);
optionTheme2.textContent = "CLaro"
selectTheme.appendChild(optionTheme2);

// SE CREA EL LA ETIQUETA OPTION PARA SELECT (TEMA)
let optionTheme3 = document.createElement('option');
optionTheme3.setAttribute('value', 2);
optionTheme3.textContent = "Oscuro"
selectTheme.appendChild(optionTheme3);

// SE CREA EL LA ETIQUETA OPTION PARA SELECT (TEMA)
let optionTheme4 = document.createElement('option');
optionTheme4.setAttribute('value', 2);
optionTheme4.textContent = "libre"
selectTheme.appendChild(optionTheme4);

//---------------------------------//


//-------------- CARDS --------------//

// CONTENEDOR DE LAS ROWS LAS CUALES TIENES CARDS
let container2 = document.createElement('div');
container2.classList.add('container', 'text-start');
root.appendChild(container2);

// SE CREA UNA ROW (1)
let rowCardone = document.createElement('div');
rowCardone.classList.add('row');
container2.appendChild(rowCardone);

// SE CREA UNA COLUMNA DE 3x4 ES DECIR 4 CARD POR ROW (1)
let colCard = document.createElement('div');
colCard.classList.add('col-md-3', 'col-sm-6', 'mt-5');
rowCardone.appendChild(colCard);

// SE CREA LAS CARD (1)
let cardP = document.createElement('div');
cardP.classList.add('card', 'p-2', 'mb-5');
colCard.appendChild(cardP);

// SE CREA E INSERTA UNA IMAGEN PARA LA CARD (1)
let imgH = document.createElement('img');
imgH.classList.add('card-img-top');
imgH.setAttribute('src', './img/hamburguesa-1.webp');
imgH.setAttribute('alt', '...');
cardP.appendChild(imgH);

// SE CREA UN CONTENEDOR PARA LAS EL TEXTO Y BTN
let cardTextBody = document.createElement('div');
cardTextBody.classList.add('card-body');
cardP.appendChild(cardTextBody);

// SE CREA UNA ETIQUETA h3 PARA LA PRIMERA LINA DE TEXTO
let cardTextTittle1 = document.createElement('h3');
cardTextTittle1.classList.add('card-tittle');
cardTextBody.appendChild(cardTextTittle1);
cardTextTittle1.textContent = "Big Box Nuggets";

// SE CREA UNA ETIQUETA h5 PARA LA SEGUNDA LINEA DE TEXTO
let cardTextTittle2 = document.createElement('h5');
cardTextTittle2.classList.add('card-tittle');
cardTextBody.appendChild(cardTextTittle2);
cardTextTittle2.textContent ="$ 27.900";

// SE CREA UNA ETIQUETA p PARA LA TERCERA LINEA DE TEXTO
let cardTextText = document.createElement('p');
cardTextText.classList.add('card-tittle');
cardTextBody.appendChild(cardTextText);
cardTextText.textContent = "5 Nuggets + 5 Hot Wings (Las alitas picantes hot wings equivalen a un trozo de ala); + 1 Ensalada Coleslaw Personal + 1 Papa Pequeña+ 1 Gaseosa Pet 400 ml + 1 Salsa BBQ"

// SE CREA UN BOTON PARA CARD
let cardBtn = document.createElement('a');
cardBtn.classList.add('btn', 'btn-danger');
cardBtn.setAttribute('href', '#');
cardTextBody.appendChild(cardBtn);
cardBtn.textContent = "Comprar"

// SE CREA UNA ROW (2)
let rowCardtwo = document.createElement('div');
rowCardtwo.classList.add('row');
container2.appendChild(rowCardtwo);

// CASRDS......

//------------------------------------//


//------------- FOOTER --------------//

// CONTENEDOR DE FOOTER
let container3 = document.createElement('div');
container3.classList.add('container', 'text-start');
container2.appendChild(container3);

// FOOTER
let card = document.createElement('div');
card.classList.add('card', 'text-center');
container3.appendChild(card);

// FOOTER LINE FIRST
let cardHeader = document.createElement('div');
cardHeader.classList.add('card-header');
cardHeader.textContent = '---';
card.appendChild(cardHeader);

// CONTENEDOR DE INFO FOOTER
let cardBody = document.createElement('div');
cardBody.classList.add('card-body');
card.appendChild(cardBody);

// FOOTER LINE TITTLE
let cardTittle = document.createElement('h5');
cardTittle.classList.add('card-title');
cardBody.appendChild(cardTittle);
cardTittle.textContent = 'KFC';

// FOOTER PARRAFO
let cardText = document.createElement('p');
cardText.classList.add('card-text');
cardBody.appendChild(cardText);
cardText.textContent = 'YOU CAN ENJOY THE BEST FOOD IN WORLD'

// FOOTER LINE LAST
let InicioLink = document.createElement('a');
InicioLink.classList.add('card-text');
InicioLink.setAttribute('href', '#');
InicioLink.classList.add('btn', 'btn-primary');
cardBody.appendChild(InicioLink);
InicioLink.textContent = 'COPYRIGHT [R]'


//------------------------------------//



