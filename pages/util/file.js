/**
 * 
 * @param {String} url - endereço do arquivo html
 * @returns {String} - retorna o html
 */
export async function openFileText(url){
    return await fetch(url)
        .then(response => response.text())
        .then(conteudo => {
           return conteudo;
        })
        .catch(err => console.log("erro ao carregar arquivo: " + err.message))
}