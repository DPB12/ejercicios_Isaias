export const Usuario = function (username,nombreCompleto) {
    this._username = username;
    this._nombreCompleto = nombreCompleto;
    this._amigos = [];
    this._publicaciones = [];

    this.getUsename = () => {
        return this._username;
    }
    this.getNombre = () => {
        return this._nombreCompleto;
    }
    this.getAmigos = () => {
        return this._amigos
    }
    this.getPublicaciones = () => {
        return this._publicaciones;
    }


    this.setUsername = (newName) =>{
        this._username = newName;
    }
    this.setNombre = (nuevoNombre) =>{
        this._nombreCompleto= nuevoNombre;
    }

    this.agregarAmigo = (amigo) => {
        this._amigos.push(amigo);
    }
    this.agregarPublicacion = (publicacion) => {
        this._publicaciones.push({publicacion});
    }
    this.getTotalLike = () => {
        let totl = 0;
        for (const val of this._publicaciones) {
            totl = val.publicacion._like+val.publicacion._like;
        }
        return totl;
    }
    
}