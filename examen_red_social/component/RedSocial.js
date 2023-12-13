export class RedSocial {
    constructor(){

    this._usuarios = [];
    
    }

    agregarUsuario(usuario) {
        this._usuarios.push(usuario);
    }

    obtenerUsuarios() {
        return this._usuarios;
    }

    obtenerPublicacionesUsario(username) {
       this._usuarios.map((user) => {
        if(user._username == username){
            return user._publicaciones;
        }else{
            return "Usuario inexistente";
        }
       }); 
    }

    encontrarPublicacionMasLikes() {
        let publiTop = "";
        let publiActual = "";

        for (const user of this._usuarios) {
            for (const publi of user._publicaciones) {
               if (publiActual < publi.publicacion._like){
                publiTop = publi;
               }else{
                publiActual= publi.publicacion._like;
               }
            }
        }
        return publiTop;
    }

    encontrarUsuarioMasLikes() {
        let userTop = "nohay";
        let userActual = 0;

        for (const user of this._usuarios) {

            if(userActual<user.getTotalLike()){
                userTop = user;
            }
            userActual = user.getTotalLike();
        }
        return userTop;
    }
    
  
}