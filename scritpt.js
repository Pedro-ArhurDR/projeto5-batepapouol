
function inserirnome(){
    seunome = prompt('Qual seu nome?');
    const name =
    {
      name:seunome
    }

    let promisse = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants',name);
    promisse.then(sucesso);

    promisse.catch(erro);



}

function sucesso(){
    console.log(seunome)
}

function erro(){
    alert('nome ja cadastrado')
}


function  enviarmsg(){
    alert()
}


function buscarmsg(){

}


inserirnome()