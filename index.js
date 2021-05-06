import routes from './routes.js';

//container da pagina index.html que vai ser preenchida pelo script js
const container = document.querySelector('#root');

//criar evento que captura hash da url e renderiza pagina na tela
const init = () => window.addEventListener('hashchange', renderPage);

//Verificação se o hash é vazio ou existe caso isso acontece ele retorna para o home, senão ele retira o #
const validateHash = (hash) => hash === "" ? 'login' : hash.replace("#", '');

/**
 * Função responsável por renderizar a pagina na div #root
 */
const renderPage = async () => {
    const page = validateHash(window.location.hash);
    container.innerHTML = "";
    const auth = ""; //hash de autenticação JWTT cedido pela sua api

    //Verifica se o usuário tem um hash jwt de autenticação
    if(auth != null && auth != '' && auth != 'null'){
        switch(page){
            case 'login':
                container.appendChild(await routes['login']);
                break;
            case 'dashboard':
                container.appendChild(await routes['dashboard']);
                break;
            default:
                container.appendChild(await routes['dashboard']);
                break;
        }
    } else {
        window.location.hash = "";
        container.appendChild(await routes['login']);
    }
}

/**
 * Evento de load da pagina
 */
window.addEventListener("load", () => {
    renderPage();
    init();
});