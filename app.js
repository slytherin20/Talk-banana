const inputField = document.querySelector('.input-field');
const outputField = document.querySelector('.output-field');
const btn = document.querySelector('.btn');

//URI of the API
const apiURI = '	https://api.funtranslations.com/translate/minion.json';

function createRequest(text){
    return `${apiURI}?text=${text}`
}
function handleError(error){
    console.log("An error occured:"+error)
}

function translateText(){
    let requestURI =  createRequest(inputField.value);

    fetch(requestURI)
    .then(response=> response.json())
    .then(json => outputField.value = json.contents.translated)
    .catch(handleError)
}


btn.addEventListener('click',translateText);
