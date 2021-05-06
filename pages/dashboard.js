import { openFileText } from './util/file.js';

/**
 * Função responsável por criar um div e colocar a pagina html dentro
 * 
 * @returns {Object} - Objeto html
 */
export default async () => {
    const container = document.createElement("div");
    container.innerHTML = await openFileText("./pages/html/dashboard.html");
    return container;
}