const inputField = document.querySelector('.input-field');
const outputField = document.querySelector('.output-field');
const btn = document.querySelector('.btn');

//URI of the API
const apiURI = '	https://api.funtranslations.com/translate/minion.json';

function createRequest(text){
    return `${apiURI}?text=${text}`
}
function handleError(error){
    outputField.style.color="red";
    outputField.style.fontSize = "1.5em";
    outputField.innerText = "An error has occured. Please try again later."
    console.log("An error occured:"+error)
}

function translateText(){
    let requestURI =  createRequest(inputField.value);

    fetch(requestURI)
    .then(response=> response.json())
    .then(json => {
        outputField.innerText = json.contents.translated
        outputField.style.color="blue"
        }
        )
    .catch(handleError)
}


btn.addEventListener('click',translateText);
