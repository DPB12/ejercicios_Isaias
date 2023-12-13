// ---- Import del DOM ----

import { deletePostApi } from "./src/components/helpers/deletePostApi";
import { getPostApi } from "./src/components/helpers/getPostApi";
import { renderPosts, updatePost } from "./src/components/renderPost/renderPost";
import { createPostApi } from "./src/components/helpers/createPostApi";
import { updatePostApi } from "./src/components/helpers/updatePostApi";
const URL = `${import.meta.env.VITE_URL_API}/posts`


// ---- Extraer elementos del DOM ----
const postList = document.querySelector(".post-list");
const addPostForm = document.querySelector(".add-post-form");

const inputBtns = document.querySelector("#submitForm");
const postTitle= document.querySelector("#title-post");
const postContenido = document.querySelector("#content-post");




const post = { 
  postTitle,
  postContenido,
};


// Capturador de eventos
postList.addEventListener("click" ,(e)=>{
  e.preventDefault()

  let editBtnPress = e.target.id == "edit-post";
  let deleteBtnPress = e.target.id == "delete-post";
  const postId = e.target.parentElement.dataset.id;
  const card = e.target.closest(".card")

  if (deleteBtnPress) {
    deletePostApi(URL,postId,() =>{
    card.remove();
      return
    })

  }
  if (editBtnPress) {
   const boton = addPostForm.querySelector(".btn");
   boton.classList.add("btn-secondary");
   boton.classList.remove("btn-primary")
   boton.value = "Editar Posts";
   boton.dataset.id = e.target.parentElement.dataset.id;

   const cancel = document.createElement("input")
   inputBtns.appendChild(cancel);
   cancel.type="submit";
   cancel.id= "cancel-edition"
   cancel.className ="cancel-edition btn btn-danger mt-2 ms-3 ";
   cancel.value = "Cancelar Edición";

   const titl = card.querySelector(".card-title");
   const conte = card.querySelector(".card-text");

   post.postTitle.value = titl.textContent.trim();
   post.postContenido.value = conte.textContent.trim();
  }
})

addPostForm.addEventListener("submit",(e) => {
  e.preventDefault();

  const boton = addPostForm.querySelector(".btn");

  if (!(post.postTitle.value && post.postContenido.value)) {
    alert("Los campos tienen que estar rellenos");
    return
  }
  
  const postData = {
    title: post.postTitle.value,
    content: post.postContenido.value,
  }

  if (boton.classList.contains("btn-secondary")) {
    const idEdit = boton.dataset.id;
    updatePostApi(URL,idEdit,postData,(data) =>{
    updatePost(idEdit,data)
    addPostForm.reset();
    boton.classList.remove("btn-secondary");
    boton.classList.add("btn-primary");
    return
    });
  }

  if (boton.classList.contains("btn-primary")) {
    createPostApi(URL,postData,(data) => {
    renderPosts(postList,[data]);
    addPostForm.reset();
    return
    });
  }

  const cancelEditBtn = document.querySelector("#cancel-edition")
  if (cancelEditBtn) { 
    addPostForm.reset();

    boton.removeAttribute("data-id");

    cancelEditBtn.parentNode.removeChild(cancelEditBtn);
    
    boton.classList.remove("btn-secondary"); 
    boton.value = "Añadir Posts";
    return
  }
});




// Funcion que carga todas las funciones necesarias cuando se carga la pagina por primera vez
function init() {
  // --- Traer la informacion de los post 
  // --- Mehtod: GET
  getPostApi(URL, (data) => {
    renderPosts(postList,data)
  });
}
// Inicio de la aplicacion
document.addEventListener("DOMContentLoaded", init)