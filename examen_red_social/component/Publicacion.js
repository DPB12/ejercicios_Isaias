export const Publicacion = function (mensaje,fecha) {
    this._mensaje = mensaje;
    this._fecha = fecha;
    this._like = 0;

    this.getMensaje = () => {
        return this._mensaje;
    }
    this.getFecha = () => {
        return this._fecha;
    }
    this.getLike = () => {
        return this._like;
        }

    this.setMensaje = (newMensaje) => {
        this._mensaje = newMensaje;
    }
    this.setFecha = (newFecha) => {
        this._fecha = newFecha;
    }

    this.darLike = () => {
        this._like = this._like+1;
    }
    
}