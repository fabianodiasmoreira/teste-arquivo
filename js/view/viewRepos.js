import { elements } from "../index.js";

export const renderReposDatas = (repositories) =>{
    let markup = ''

    repositories.forEach((html_url, name) => {
        markup += `
        <a href="${html_url}" class="repo-url" target="_blank">
        ${name}
        </a>
        `
    });
    elements.repos.innerHTML = markup
}