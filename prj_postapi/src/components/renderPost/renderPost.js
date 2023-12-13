// Imports
import "./style.css"

/**
 * 
 * @param {HTMLDivElement} element 
 * @param {<object>posts} posts 
*/
export const renderPosts = (element, posts) => {
  // Funcion que va a pintar en element el objeto del post
  // usando las cards de bootstrap
  let divPosts = "";

  posts.forEach(post => {
   divPosts = `<div class="card card m-lg-2" style="width: 18rem; " >
   <div class="card-body" data-id=${post.id}>
     <h5 class="card-title">${post.title}</h5>
     <p class="card-text">${post.content}</p>

     <ul class="list-group list-group-flush">
     <li class="list-group-item">${post.id}</li>
   </ul>

   <a href="#" class="card-link" id="edit-post">Editar pos</a>
     <a href="#" class="card-link" id="delete-post">Eliminar post</a>
   </div>
    </div>`;
    element.innerHTML += divPosts;
});
}

export const updatePost = (elementId, post) => {
  const divPosts = document.querySelector('[data-id="'+elementId+'"]');
  
  let divTitle = divPosts.querySelector(".card-title");
  let divText = divPosts.querySelector(".card-text");
  let divLi = divPosts.querySelector(".list-group-item");

  divTitle.innerHTML = post.title;
  divText.innerHTML = post.content;
  divLi.innerHTML = post.id;

}