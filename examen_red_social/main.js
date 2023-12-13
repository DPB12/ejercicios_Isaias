import { Publicacion } from "./component/Publicacion";
import { Usuario } from "./component/Usuario";
import { RedSocial } from "./component/RedSocial";

const user1 = new Usuario("hhhhhh","1111111");
const user2 = new Usuario("dddddd","2222222");
const user3 = new Usuario("cccccc","3333333");
const user4 = new Usuario("vvvvvv","4444444");

const public1 = new Publicacion("p1",Date());
const public2 = new Publicacion("p2",Date());
const public3 = new Publicacion("p3",Date());
const public4 = new Publicacion("p4",Date());
public1.darLike();
public1.darLike();
public2.darLike();
public2.darLike();
public2.darLike();
public2.darLike();



user1.agregarPublicacion(public1);
user2.agregarPublicacion(public2);
user3.agregarPublicacion(public3);
user4.agregarPublicacion(public4);

const redS = new RedSocial();

redS.agregarUsuario(user1);
redS.agregarUsuario(user2);
redS.agregarUsuario(user3);
redS.agregarUsuario(user4);

console.log(redS);
console.log(redS.encontrarPublicacionMasLikes());
console.log(redS.encontrarUsuarioMasLikes());