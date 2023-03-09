import { elements } from "../index.js";

const renderUserDatas = (
  avatar_url,
  following,
  followers,
  html_url,
  public_repos
) => {
  const markup = `
    <div class="profile-header">
        <img src = "${avatar_url}" alt="Avatar">
        <a href="${html_url}" target="_blank">Visitar Perfil</a>
    </div>
    <ul class="profile-list">
        <li>Repositórios: ${public_repos}</li>
        <li>Seguidores: ${followers}</li>
        <li>Seguindo: ${following}</li>
    </ul>
    `;

  elements.profile.insertAdjacentHTML("afterbegin", markup);
};

export{renderUserDatas}