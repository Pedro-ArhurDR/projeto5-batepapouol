let nome;
const TEMPO5 = 5 * 1000;
const TEMPO3 = 3 * 1000;


function inserirnome(){
    seunome = prompt('Qual seu nome?');
    let nome =
    {
      name:seunome
    }

    let promise = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', nome);
    promise.then(sucesso);

    promise.catch(erro);

    console.log(nome)

    setInterval(online, TEMPO5)
    setInterval(carregarmsg, TEMPO3)
    carregarmsg()

}
function online(){
    let nome =
    {
      name:seunome
    }
    let promise1 = axios.post('https://mock-api.driven.com.br/api/v6/uol/status',nome)
    console.log("on")

}

function sucesso(){
    console.log()
}

function erro(){
    window.location.reload()
}


function  enviarmsg(){
    let promise3 = axios.post('https://mock-api.driven.com.br/api/v6/uol/messages')
    alert()
}


function carregarmsg(){
    console.log('rodou')
    let promise2 = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages')
    promise2.then(mostrarmsg)
}
function mostrarmsg(elemento){
    const divmsg = document.querySelector(".mensagens")
    divmsg.innerHTML ="";
    for (let i = 0; i < elemento.data.length; i++){
        let msg = elemento.data[i]
        if(msg.type ==="status"){
            divmsg.innerHTML +=             
            `<li class="entrou">
            <span class="hora margin">(${msg.time})</span>
            <span class="padrao margin"><strong>${msg.from}</strong></span>
            <span class="margin">${msg.text}</span>
            </li>`;
        }
        if(msg.type ==="message"){
            divmsg.innerHTML +=             
            `<li class="mensagemG">
            <span class="hora margin">(${msg.time})</span>
            <strong class="margin">${msg.from}</strong>
            <span class="margin">para</span>
            <strong class="margin">${msg.to}</strong>
            <span class="texto margin">${msg.text}</span>
            </li>`;
        }
        if(Msgprivada(msg)){
            divmsg.innerHTML +=             
            `<li class="mensagemPV">
            <span class="hora">(${msg.time})</span>
            <span class="padrao texto"><strong>${msg.from}</strong></span>
            <span>reservadamente para</span>
            <span class="padrao texto"><strong>${msg.to}</strong></span>
            <span class="texto">${msg.text}</span>
            </li>`;
        }
    }
}
function Msgprivada(msg){
    if(msg.type==="private_mesage" &&  (msg.from === nome || msg.to === nome)){
        return true
    }
    return false
}


inserirnome()
