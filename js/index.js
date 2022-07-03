

function login(event) {
    event.preventDefault()
    let cliente = null
    localStorage.removeItem("usuario");
    let isAdmin = document.querySelector("#check");
    usuario = document.getElementById("user").value
    password = document.getElementById("pass").value
    if (usuario == "EDD") {
        // alert('Te haz loggeado bien')
        if (password == "123" && isAdmin.checked == true) {
            localStorage.setItem("usuario", JSON.stringify(usuario))
            localStorage.setItem("nombre", JSON.stringify("WIlfred Perez"))
            document.getElementById("admin").style.display = "block";
            document.getElementById("cargas").style.display = "block";
            document.getElementById("login").style.display = "none";

        } else if (password == "123" && isAdmin.checked == false) {
            alert('SI ES ADMIN DEBE MARCAR LA CASILLA PARA PODER ENTRAR')
        } else {
            alert('DATOS ERRONEOS')
        }
    } else if (usuario != "EDD" && listaClientes == null) {
        alert('EL USUARIO NO EXISTE')
    } else {
        cliente = listaClientes.buscarCliente(usuario);
        if (cliente.password == password && isAdmin.checked == false) {
            localStorage.setItem("usuario", JSON.stringify(usuario))
            localStorage.setItem("nombre", JSON.stringify(cliente.nombreCompleto))
            document.getElementById("usuario").style.display = "block";
            document.getElementById("homeUser").style.display = "block";
            document.getElementById("login").style.display = "none";
            // console.log("simonn")
        } else if (cliente.password == password && isAdmin.checked == true) {
            alert('DISCULPE NO ES ADMIN NO PUEDE ENTRAR')
        } else if (cliente.password != password && isAdmin.checked == false) {
            alert('CONTRASEÑA INCORRECTA')
        } else if (cliente.password != password && isAdmin.checked == true) {
            alert('CONTRASEÑA INCORRECTA')
        } else if (cliente == null || cliente == undefined) {
            alert('EL USUARIO NO EXISTE')
        }
    }

}
function cerrarSesion() {
    localStorage.removeItem("usuario");
    localStorage.removeItem("nombre");
    document.getElementById("admin").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("cargas").style.display = "none";
    document.getElementById("gclientes").style.display = "none";
    document.getElementById("gcategorias").style.display = "none";
    document.getElementById("gpelis").style.display = "none";
    document.getElementById("gactores").style.display = "none";
    document.getElementById("usuario").style.display = "none"
    document.getElementById("homeUser").style.display = "none";
    document.getElementById("actoresUser").style.display = "none";
    document.getElementById("catUser").style.display = "none";
    document.getElementById("blockchain").style.display = "none";
}

function mostrarGclientes() {
    document.getElementById("admin").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("cargas").style.display = "none";
    document.getElementById("gclientes").style.display = "block";
    document.getElementById("gcategorias").style.display = "none";
    document.getElementById("gpelis").style.display = "none";
    document.getElementById("gactores").style.display = "none";
    document.getElementById("usuario").style.display = "none"
    document.getElementById("blockchain").style.display = "none";
}
function mostrarGcategorias() {
    document.getElementById("admin").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("cargas").style.display = "none";
    document.getElementById("gclientes").style.display = "none";
    document.getElementById("gcategorias").style.display = "block";
    document.getElementById("gpelis").style.display = "none";
    document.getElementById("gactores").style.display = "none";
    document.getElementById("usuario").style.display = "none"
    document.getElementById("blockchain").style.display = "none";
}
function mostrarGpelis() {
    document.getElementById("admin").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("cargas").style.display = "none";
    document.getElementById("gclientes").style.display = "none";
    document.getElementById("gcategorias").style.display = "none";
    document.getElementById("gpelis").style.display = "block";
    document.getElementById("gactores").style.display = "none";
    document.getElementById("usuario").style.display = "none"
    document.getElementById("blockchain").style.display = "none";
}
function mostrarGactores() {
    document.getElementById("admin").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("cargas").style.display = "none";
    document.getElementById("gclientes").style.display = "none";
    document.getElementById("gcategorias").style.display = "none";
    document.getElementById("gpelis").style.display = "none";
    document.getElementById("gactores").style.display = "block";
    document.getElementById("usuario").style.display = "none"
    document.getElementById("blockchain").style.display = "none";
}

function mostrarCargas() {
    document.getElementById("admin").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("cargas").style.display = "block";
    document.getElementById("gclientes").style.display = "none";
    document.getElementById("gcategorias").style.display = "none";
    document.getElementById("gpelis").style.display = "none";
    document.getElementById("gactores").style.display = "none";
    document.getElementById("usuario").style.display = "none"
    document.getElementById("blockchain").style.display = "none";
}
function mostrarBlockchain() {
    document.getElementById("admin").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("cargas").style.display = "none";
    document.getElementById("gclientes").style.display = "none";
    document.getElementById("gcategorias").style.display = "none";
    document.getElementById("gpelis").style.display = "none";
    document.getElementById("gactores").style.display = "none";
    document.getElementById("usuario").style.display = "none";
    document.getElementById("homeUser").style.display = "none";
    document.getElementById("actoresUser").style.display = "none";
    document.getElementById("catUser").style.display = "none";
    document.getElementById("blockchain").style.display = "block";
    merkle()
}
function vistaUsuario() {
    document.getElementById("admin").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("cargas").style.display = "none";
    document.getElementById("gclientes").style.display = "none";
    document.getElementById("gcategorias").style.display = "none";
    document.getElementById("gpelis").style.display = "none";
    document.getElementById("gactores").style.display = "none";
    document.getElementById("usuario").style.display = "block";
    document.getElementById("actoresUser").style.display = "none";
    document.getElementById("catUser").style.display = "none";
    document.getElementById("blockchain").style.display = "none";
}
function homeUser() {
    document.getElementById("admin").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("cargas").style.display = "none";
    document.getElementById("gclientes").style.display = "none";
    document.getElementById("gcategorias").style.display = "none";
    document.getElementById("gpelis").style.display = "none";
    document.getElementById("gactores").style.display = "none";
    document.getElementById("usuario").style.display = "block";
    document.getElementById("homeUser").style.display = "block";
    document.getElementById("actoresUser").style.display = "none";
    document.getElementById("catUser").style.display = "none";
    document.getElementById("blockchain").style.display = "none";
}
function actoresUser() {
    document.getElementById("admin").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("cargas").style.display = "none";
    document.getElementById("gclientes").style.display = "none";
    document.getElementById("gcategorias").style.display = "none";
    document.getElementById("gpelis").style.display = "none";
    document.getElementById("gactores").style.display = "none";
    document.getElementById("usuario").style.display = "block";
    document.getElementById("homeUser").style.display = "none";
    document.getElementById("actoresUser").style.display = "block";
    document.getElementById("catUser").style.display = "none";
    document.getElementById("blockchain").style.display = "none";
}
function categoriasUser() {
    document.getElementById("admin").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("cargas").style.display = "none";
    document.getElementById("gclientes").style.display = "none";
    document.getElementById("gcategorias").style.display = "none";
    document.getElementById("gpelis").style.display = "none";
    document.getElementById("gactores").style.display = "none";
    document.getElementById("usuario").style.display = "block";
    document.getElementById("homeUser").style.display = "none";
    document.getElementById("actoresUser").style.display = "none";
    document.getElementById("catUser").style.display = "block";
    document.getElementById("blockchain").style.display = "none";
}

var svg;
var imgData
//------------------------------------------BOTON PARA DESCARGAR GRAFO--------------------------------------------------------------
d3.select("#saveButton").on("click", function () {
    let div = d3.select("#grafoCat")
    // var html = d3.select("svg")
    var html = d3.select(div.node().querySelector("svg"))
        .attr("xmlns", "http://www.w3.org/2000/svg")
        .node().parentNode.innerHTML;
    var image = new Image();
    var DOMURL = self.URL || self.webkitURL || self;
    var svgg = new Blob([html], { type: "image/svg+xml;charset=utf-8" });
    var url = DOMURL.createObjectURL(svgg);
    // console.log(url)
    var canvas = document.querySelector("#g\\:cat"),
        context = canvas.getContext("2d");
    image.onload = function () {
        context.drawImage(image, 0, 0);
        DOMURL.revokeObjectURL(url);
        var canvasdata = canvas.toDataURL("image/svg");
        var a = document.createElement("a");
        a.download = "GRAFO_CATEGORIAS.png";
        a.href = canvasdata;
        a.click();
        // document.getElementById("can").style.display = "none";
    };
    image.src = url;
});

d3.select("#saveButtonCli").on("click", function () {
    let div = d3.select("#grafoCliente")
    // var html = d3.select("svg")
    var html = d3.select(div.node().querySelector("svg"))
        .attr("xmlns", "http://www.w3.org/2000/svg")
        .node().parentNode.innerHTML;
    console.log(html)
    var image = new Image();
    var DOMURL = self.URL || self.webkitURL || self;
    var svgg = new Blob([html], { type: "image/svg+xml;charset=utf-8" });
    var url = DOMURL.createObjectURL(svgg);
    console.log(url)
    var canvas = document.querySelector("#g\\:clie"),
        context = canvas.getContext("2d");
    image.onload = function () {
        context.drawImage(image, 0, 0);
        DOMURL.revokeObjectURL(url);
        var canvasdata = canvas.toDataURL("image/svg");
        var a = document.createElement("a");
        a.download = "GRAFO_CLIENTES.png";
        a.href = canvasdata;
        a.click();
        // document.getElementById("canCli").style.display = "none";
    };
    image.src = url;
});

d3.select("#saveButtonp").on("click", function () {
    let div = d3.select("#grafoPeli")
    // var html = d3.select("svg")
    var html = d3.select(div.node().querySelector("svg"))
        .attr("xmlns", "http://www.w3.org/2000/svg")
        .node().parentNode.innerHTML;
    var image = new Image();
    var DOMURL = self.URL || self.webkitURL || self;
    var svgg = new Blob([html], { type: "image/svg+xml;charset=utf-8" });
    var url = DOMURL.createObjectURL(svgg);
    console.log(url)
    var canvas = document.querySelector("#foo\\:bar"),
        context = canvas.getContext("2d");
    image.onload = function () {
        context.drawImage(image, 0, 0);
        DOMURL.revokeObjectURL(url);
        var canvasdata = canvas.toDataURL("image/svg");
        var a = document.createElement("a");
        a.download = "GRAFO_PELICULAS.png";
        a.href = canvasdata;
        a.click();
        // document.getElementById("canPeli").style.display = "none";
    };
    image.src = url;
});

d3.select("#saveButtonAc").on("click", function () {
    let div = d3.select("#grafoAct")
    // var html = d3.select("svg")
    var html = d3.select(div.node().querySelector("svg"))
        .attr("xmlns", "http://www.w3.org/2000/svg")
        .node().parentNode.innerHTML;
    var image = new Image();
    var DOMURL = self.URL || self.webkitURL || self;
    var svgg = new Blob([html], { type: "image/svg+xml;charset=utf-8" });
    var url = DOMURL.createObjectURL(svgg);
    console.log(url)
    var canvas = document.querySelector("#g\\:act"),
        context = canvas.getContext("2d");
    image.onload = function () {
        context.drawImage(image, 0, 0);
        DOMURL.revokeObjectURL(url);
        var canvasdata = canvas.toDataURL("image/svg");
        var a = document.createElement("a");
        a.download = "GRAFO_ACTORES.png";
        a.href = canvasdata;
        a.click();
        // document.getElementById("canAct").style.display = "none";
    };
    image.src = url;
});
//------------------------------------------FIN BOTON PARA DESCARGAR GRAFO--------------------------------------------------------------

//---------------------------ARBOL AVL------------------------------------------------------
class NodoAvl {
    constructor(idPelicula, nombrePelicula, descripcion, puntaStar, precio) {
        this.idPelicula = idPelicula;
        this.nombrePelicula = nombrePelicula;
        this.descripcion = descripcion;
        this.puntaStar = puntaStar;
        this.precio = precio;
        this.alquilado = false;
        this.izquierda = null;
        this.derecha = null;
        this.altura = 0;
    }
}

class ArbolAvl {
    constructor() {
        this.altDiferencia = 1;
        this.cabeza = null;
        this.totalPeliculas = 0;
        this.nodos = "";
        this.relaciones = "";

    }

    maximo(id1, id2) {
        if (id1 > id2) {
            return id1;
        }
        return id2;
    }
    altura(nodo) {
        if (nodo == null) {
            return -1;
        }
        return nodo.altura;
    }

    insertar(idPelicula, nombrePelicula, descripcion, puntaStar, precio) {

        if (idPelicula == null || nombrePelicula == null || descripcion == null || puntaStar == null || precio == null) {
            console.log("Debe ingresar todos los campos para poder insertar")
        }
        this.cabeza = this.insertarNodo(idPelicula, nombrePelicula, descripcion, puntaStar, precio, this.cabeza)
    }

    insertarNodo(idPelicula, nombrePelicula, descripcion, puntaStar, precio, temporal) {
        if (temporal == null) {
            this.totalPeliculas++;
            return new NodoAvl(idPelicula, nombrePelicula, descripcion, puntaStar, precio)
        }

        if (idPelicula < temporal.idPelicula) {
            temporal.izquierda = this.insertarNodo(idPelicula, nombrePelicula, descripcion, puntaStar, precio, temporal.izquierda)
        } else if (idPelicula > temporal.idPelicula) {
            temporal.derecha = this.insertarNodo(idPelicula, nombrePelicula, descripcion, puntaStar, precio, temporal.derecha)
        }
        else {
            console.log("La pelicula con id: " + idPelicula + "  ya existe")
            alert("La pelicula con id: " + idPelicula + " y nombre: " + nombrePelicula + "  ya existe, por lo que no se agrego")
        }
        return this.balancear(temporal)
    }

    rotacionDerecha(nodo) {
        let izq = nodo.izquierda
        nodo.izquierda = izq.derecha;
        izq.derecha = nodo;
        nodo.altura = this.maximo(this.altura(nodo.izquierda), this.altura(nodo.derecha)) + 1;
        izq.altura = this.maximo(this.altura(nodo.izquierda), nodo.altura) + 1;
        return izq;
    }

    rotacionIzquierda(nodo) {
        let der = nodo.derecha;
        nodo.derecha = der.izquierda;
        der.izquierda = nodo;
        nodo.altura = this.maximo(this.altura(nodo.izquierda), this.altura(nodo.derecha)) + 1;
        der.altura = this.maximo(nodo.altura, this.altura(der.derecha)) + 1
        return der;
    }

    rotacionDobleIzqDer(nodo) {
        nodo.izquierda = this.rotacionIzquierda(nodo.izquierda);
        return this.rotacionDerecha(nodo);
    }

    rotacionDobleDerIzq(nodo) {
        nodo.derecha = this.rotacionDerecha(nodo.derecha);
        return this.rotacionIzquierda(nodo);
    }

    balancear(temporal) {
        if (temporal == null) {
            return null;
        }
        if ((this.altura(temporal.izquierda) - this.altura(temporal.derecha)) > this.altDiferencia) {
            if (this.altura(temporal.izquierda.izquierda) >= this.altura(temporal.izquierda.derecha)) {
                temporal = this.rotacionDerecha(temporal);
            } else {
                temporal = this.rotacionDobleIzqDer(temporal);
            }

        } else if ((this.altura(temporal.derecha) - this.altura(temporal.izquierda)) > this.altDiferencia) {
            if (this.altura(temporal.derecha.izquierda) > this.altura(temporal.derecha.derecha)) {
                temporal = this.rotacionDobleDerIzq(temporal);
            } else {
                temporal = this.rotacionIzquierda(temporal);
            }
        }
        temporal.altura = this.maximo(this.altura(temporal.izquierda), this.altura(temporal.derecha)) + 1;
        return temporal;
    }

    buscarAvlP(id) {
        return this.buscarAvl(this.cabeza, id);
    }

    buscarAvl(raiz, id) {
        if (raiz == null) {
            return null;
        }
        else if (id == parseInt(raiz.idPelicula)) {
            return raiz;
        }
        else if (id < parseInt(raiz.idPelicula)) {
            return this.buscarAvl(raiz.izquierda, id);
        }
        else {
            return this.buscarAvl(raiz.derecha, id);
        }
    }

    postorden() {
        this.post_orden(this.cabeza);
    }
    post_orden(nodo) {
        if (nodo != null) {
            this.post_orden(nodo.izquierda);
            this.post_orden(nodo.derecha);
            console.log("valor=" + nodo.idPelicula);
        }
    }

    inorden() {
        this.in_orden(this.cabeza);
    }
    in_orden(nodo) {
        let tbody = document.getElementById("tbody")
        if (nodo != null) {
            this.in_orden(nodo.izquierda);
            if (nodo.alquilado == false) {
                tbody.innerHTML += '<tr>\n <td>' + nodo.nombrePelicula + '</td>\n <td>' + nodo.descripcion + '</td>\n <td><button class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="modalInfo(' + nodo.idPelicula + ')"><i class="fa fa-info-circle"></i> Info</button></td>\n <td><button class="btn" onclick="alquilarPeli(' + nodo.idPelicula + ')"><i class="fa fa-cart-plus"></i> Alquilar</button></td>\n <td>' + nodo.precio + '</td>\n</tr>'
                console.log("valor=" + nodo.idPelicula + "nombre: " + nodo.nombrePelicula);
            }

            this.in_orden(nodo.derecha);
        }
    }

    desc() {
        this.descendente(this.cabeza);
    }
    descendente(nodo) {
        let tbody = document.getElementById("tbody")
        if (nodo != null) {
            this.descendente(nodo.derecha);
            if (nodo.alquilado == false) {
                tbody.innerHTML += '<tr>\n <td>' + nodo.nombrePelicula + '</td>\n <td>' + nodo.descripcion + '</td>\n <td><button class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick="modalInfo(' + nodo.idPelicula + ')"><i class="fa fa-info-circle"></i> Info</button></td>\n <td><button class="btn"><i class="fa fa-cart-plus"></i> Alquilar</button></td>\n <td>' + nodo.precio + '</td>\n</tr>'
                console.log("valor=" + nodo.idPelicula + "nombre: " + nodo.nombrePelicula);
            }
            this.descendente(nodo.izquierda);
        }
    }

    generarAVL() {
        let graphviz = '';
        var nodos = "";
        var relaciones = "";
        graphviz = 'graph  {\n fontname="Helvetica,Arial,sans-serif"\n' + 'node [fontname="Helvetica,Arial,sans-serif"]\n edge [fontname="Helvetica,Arial,sans-serif"]\n';
        this.generarAVL2(this.cabeza);
        graphviz += this.nodos;
        graphviz += this.relaciones;
        graphviz += "\n}";
        d3.select("#grafoPeli").graphviz()
            .zoom(false)
            .renderDot(graphviz)
        // console.log(graphviz)
        // escribirArchivo("./reporte.dot", this.graphviz);

    }
    generarAVL2(raiz) {
        if (raiz != null) {
            this.nodos += raiz.idPelicula + '[label="' + raiz.nombrePelicula + '\n' + raiz.idPelicula + '"];\n';
            if (raiz.izquierda != null) {
                this.relaciones += raiz.idPelicula + '-- ' + raiz.izquierda.idPelicula + ';\n';
            }
            if (raiz.derecha != null) {
                this.relaciones += raiz.idPelicula + ' -- ' + raiz.derecha.idPelicula + ';\n';
            }
            this.generarAVL2(raiz.izquierda);
            this.generarAVL2(raiz.derecha);
        }

    }

}
///lista simplle mostrar y ordenar peliculas
class Pelicula {
    constructor(idPeli, nombrePeli, descrip, puntua, precio) {
        this.idPeli = idPeli;
        this.nombrePeli = nombrePeli;
        this.descrip = descrip;
        this.puntua = puntua;
        this.precio = precio;
        this.alquilado = false;
        this.comentarios = []
        this.siguiente = null;
    }
}

class ListaSimpPeli {
    constructor() {
        this.primero = null;
        this.size = 0;
    }

    insertarP(id, nombre, desc, punt, precio) {
        let nuevo = new Pelicula(id, nombre, desc, punt, precio);
        this.size++;
        if (this.primero == null) {
            this.primero = nuevo;
        } else {
            let tmp = this.primero
            while (tmp.siguiente != null) {
                tmp = tmp.siguiente
            }
            tmp.siguiente = nuevo
        }
    }

    mostrarPeli() {
        let tbody = document.getElementById("tbody")
        let tmp = this.primero
        tbody.innerHTML = '';
        for (let index = 0; index < this.size; index++) {
            if (tmp.alquilado == false) {
                tbody.innerHTML += '<tr>\n <td>' + tmp.nombrePeli + '</td>\n <td>' + tmp.descrip + '</td>\n <td><button class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="modalInfo(' + tmp.idPeli + ')"><i class="fa fa-info-circle"></i> Info</button></td>\n <td><button class="btn" onclick="alquilarPeli(' + tmp.idPeli + ')"><i class="fa fa-cart-plus"></i> Alquilar</button></td>\n <td>' + tmp.precio + '</td>\n</tr>'
            }
            tmp = tmp.siguiente
        }
    }

    buscarPeli(idPelicula) {
        let tmp = this.primero;
        while (tmp != null) {
            if (tmp.idPeli == idPelicula) {
                return tmp;
            }
            tmp = tmp.siguiente
        }
    }

    eliminarPelicula(id) {
        let tmp = this.primero;
        while (tmp != null) {
            if (tmp.idPeli == id) {
                this.primero = tmp.siguiente;
                console.log("Pelicula eliminada: " + tmp.nombrePeli)
                break
            }
            else if (tmp.siguiente != null) {
                if (tmp.siguiente.idPeli == id) {
                    let borrar = tmp.siguiente;
                    tmp.siguiente = borrar.siguiente;
                    borrar.siguiente = null;
                    console.log("Pelicula eliminada: " + borrar.nombrePeli);
                    break;
                }
            }
            tmp = tmp.siguiente
        }
    }

}

var avlPeli;
var listPeli
function peliculasAVL(e) {

    var archivo = e.target.files[0];
    if (!archivo) {
        return;
    }

    let lector = new FileReader();
    lector.onload = function (e) {
        let contenido = e.target.result;
        const peliculas = JSON.parse(contenido);
        avlPeli = new ArbolAvl()
        listDataB = new ListDataBlock()
        listPeli = new ListaSimpPeli()
        for (const x in peliculas) {
            let peli = peliculas[x]
            avlPeli.insertar(peli.id_pelicula, peli.nombre_pelicula, peli.descripcion, peli.puntuacion_star, peli.precio_Q);
            listPeli.insertarP(peli.id_pelicula, peli.nombre_pelicula, peli.descripcion, peli.puntuacion_star, peli.precio_Q);

        }
        console.log("jejejeje")
        avlPeli.generarAVL()
        avlPeli.inorden()
        listPeli.mostrarPeli()
    }

    lector.readAsText(archivo);

    alert('Ha cargado exitosamente las peliculas!');
}
document.getElementById("peliculasAVL").addEventListener("change", peliculasAVL, false);
//---------------------------FIN ARBOL AVL---------------------------------------------------

//-----------------------------LISTA SIMPLE-----------------------------------------------------.
class NodoSimple {
    constructor(dpi, nombreCompleto, nombreUsuario, correo, password, telefono) {
        this.dpi = dpi;
        this.nombreCompleto = nombreCompleto;
        this.nombreUsuario = nombreUsuario;
        this.correo = correo;
        this.password = password;
        this.telefono = telefono;
        this.siguiente = null;
        this.anterior = null;
    }

}

class ListaSimple {
    constructor() {
        this.primero = null;
        this.ultimo = null;
        this.size = 0;
    }
    agregarCliente(dpi, nombreCompleto, nombreUsuario, correo, password, telefono) {
        let nuevoCliente = new NodoSimple(dpi, nombreCompleto, nombreUsuario, correo, password, telefono);
        this.size++;
        if (this.primero == null) {
            this.primero = nuevoCliente;
        }
        //HACE ESTO SI LA LISTA YA TIENE POR LO MENOS UN ELEMENTO
        else {
            let aux = this.primero;
            while (aux.siguiente != null) {
                aux = aux.siguiente;
            }
            aux.siguiente = nuevoCliente
            nuevoCliente.anterior = aux;
            this.ultimo = nuevoCliente;
        }
        return nuevoCliente;
    }
    mostrarClientes() {
        let aux = this.primero;
        let grafoC = 'digraph L{ \n node[shape=box fillcolor="#FFEDBB"style=filled] \n subgraph cluster_p{ \n label ="CLIENTES GRAFO" bgcolor="gray" \n edge[dir="forward"] \n';
        let uniones = ''
        let rank = '{rank=same;\n'
        while (aux != null) {
            grafoC += 'nodo' + aux.dpi + '[label="' + aux.nombreCompleto + '",fillcolor=white,group=0] \n';
            if (aux.siguiente != null) {
                uniones += 'nodo' + aux.dpi + '->' + 'nodo' + aux.siguiente.dpi + '[dir=forward color="black"] \n'
                rank += 'nodo' + aux.dpi + ', \n'
            } else {
                rank += 'nodo' + aux.dpi + '\n'
            }
            console.log("Cliente: " + aux.nombreCompleto)
            aux = aux.siguiente;
        }
        rank += '}\n'
        grafoC += uniones
        grafoC += rank
        grafoC += '}}'
        console.log(grafoC)
        d3.select("#grafoCliente").graphviz()
            .zoom(false)
            .renderDot(grafoC)
        return "ok"
    }

    buscarCliente(nombreUsuario) {
        let tmp = this.primero;
        for (let index = 0; index < this.size; index++) {
            if (tmp.nombreUsuario === nombreUsuario) {
                console.log("ENCONTRADO: " + tmp.nombreCompleto + " user: " + tmp.nombreUsuario);
                return tmp;
            }
            tmp = tmp.siguiente;
        }
        console.log("No se encontro al cliente")
        return null
    }
}

var listaClientes;
function clientesL(e) {

    var archivo = e.target.files[0];
    if (!archivo) {
        return;
    }

    let lector = new FileReader();
    lector.onload = function (e) {
        let contenido = e.target.result;
        const clientes = JSON.parse(contenido);
        listaClientes = new ListaSimple()
        for (const x in clientes) {
            let cliente = clientes[x]
            listaClientes.agregarCliente(cliente.dpi, cliente.nombre_completo, cliente.nombre_usuario, cliente.correo, cliente.contrasenia, cliente.telefono)

        }
        listaClientes.mostrarClientes()
    }

    lector.readAsText(archivo);

    alert('Ha cargado exitosamente los clientes!');
}
document.getElementById("clientesL").addEventListener("change", clientesL, false);
//--------------------------------FIN DE LA LISTA SIMPLE-----------------------------------------

///---------------------------------------------ARBOL BB----------------------------------------------------
class NodoAbb {
    constructor(dni, nombreActor, correo, descripcion) {
        this.dni = dni;
        this.nombreActor = nombreActor;
        this.correo = correo;
        this.descripcion = descripcion;
        this.izquierda = null;
        this.derecha = null;
    }

    getIzq() {
        return this.izquierda;
    }

    setIzq(izquierda) {
        this.izquierda = izquierda;
    }

    getDer() {
        return this.derecha;
    }

    setDer(derecha) {
        this.derecha = derecha;
    }
}

class ArbolABB {
    constructor() {
        this.cabeza = null;
        this.cantidadCapas = 0;
        this.contador = 0;
        this.profundidad = 0;
        this.graphviz = '';
        this.nodos = '';
        this.relaciones = '';
        this.capas = '';
        this.recorrido = '';
    }

    insertar(dni, nombreActor, correo, descripcion) {
        this.cabeza = this.insertarArbol(dni, nombreActor, correo, descripcion, this.cabeza)
    }

    insertarArbol(dni, nombreActor, correo, descripcion, raiz) {
        if (raiz == null) {
            raiz = new NodoAbb(dni, nombreActor, correo, descripcion);
            this.cantidadCapas++;
        } else if (dni < raiz.dni) {
            raiz.setIzq(this.insertarArbol(dni, nombreActor, correo, descripcion, raiz.getIzq()))
        } else if (dni > raiz.dni) {
            raiz.setDer(this.insertarArbol(dni, nombreActor, correo, descripcion, raiz.getDer()))
        } else {
            console.log("EL ACTOR CON EL ID: " + raiz.dni + " YA EXISTE!!")
        }
        return raiz;
    }

    buscarActor(dato) {
        return buscar(this.raiz, dato);
    }

    buscar(raiz, dato) {
        if (raiz == null) {
            return null;
        }
        else if (dato == raiz.dni) {
            return raiz;
        }
        else if (dato < raiz.dni) {
            return buscar(raiz.getIzq(), dato);
        }
        else {
            return buscar(raiz.getDer(), dato);
        }
    }

    graficoABB(generar) {
        let nodo = this.cabeza
        this.graphviz = this.nodos = this.relaciones = "";
        this.graphviz = 'graph  {\n fontname="Helvetica,Arial,sans-serif"\n' + 'node [fontname="Helvetica,Arial,sans-serif"]\n edge [fontname="Helvetica,Arial,sans-serif"]\n';
        // this.graphviz = 'graph \"\" {\n';
        this.generarABB(this.cabeza);
        this.graphviz += this.nodos;
        if (nodo != null) {
            // console.log("nodo: "+this.ra)
            // console.log(nodo.dni + " -- " + this.cabeza.dni)
            // this.relaciones += nodo.dni + " -- " + this.cabeza.dni + ";\n";
        }
        this.graphviz += this.relaciones;
        this.graphviz += "\n}";
        if (generar) {

            // escribirArchivo("./reporte.dot", this.graphviz);
            d3.select("#grafoAct").graphviz()
                .zoom(false)
                .renderDot(this.graphviz)
            console.log(this.graphviz)
            return null;
        }

        return (this.nodos + this.relaciones);
    }

    generarABB(raiz) {
        if (raiz != null) {
            this.nodos += raiz.dni + '[label=\"' + raiz.nombreActor + '\"];\n';
            if (raiz.getIzq() != null) {
                this.relaciones += raiz.dni + " -- " + raiz.getIzq().dni + ";\n";
            }
            if (raiz.getDer() != null) {
                this.relaciones += raiz.dni + " -- " + raiz.getDer().dni + ";\n";

            }
            this.generarABB(raiz.getIzq());
            this.generarABB(raiz.getDer());
        }
    }

    inordenABB() {
        this.inABB(this.cabeza);
    }

    inABB(nodo) {
        let tbody = document.getElementById("tbodyAct")
        tbody.innerHTML += ''
        if (nodo != null) {
            this.inABB(nodo.izquierda);
            console.log("Valor:", nodo.nombreActor);
            tbody.innerHTML += '<tr>\n <td>' + nodo.nombreActor + '</td>\n <td>' + nodo.descripcion + '</td>\n <td>' + nodo.correo + '</td>\n</tr>'
            this.inABB(nodo.derecha);
        }
    }

    preordenABB() {
        this.preABB(this.cabeza);
    }

    preABB(nodo) {
        let tbody = document.getElementById("tbodyAct")
        tbody.innerHTML += ''
        if (nodo != null) {
            tbody.innerHTML += '<tr>\n <td>' + nodo.nombreActor + '</td>\n <td>' + nodo.descripcion + '</td>\n <td>' + nodo.correo + '</td>\n</tr>'
            console.log("Valor:", nodo.nombreActor);
            this.preABB(nodo.izquierda);
            this.preABB(nodo.derecha);
        }
    }
    posordenABB() {
        this.poABB(this.cabeza);
    }

    poABB(nodo) {
        let tbody = document.getElementById("tbodyAct")
        tbody.innerHTML += ''
        if (nodo != null) {
            this.poABB(nodo.izquierda);
            this.poABB(nodo.derecha);
            tbody.innerHTML += '<tr>\n <td>' + nodo.nombreActor + '</td>\n <td>' + nodo.descripcion + '</td>\n <td>' + nodo.correo + '</td>\n</tr>'
            console.log("Valor:", nodo.nombreActor);
        }
    }

}
var arbolBB;
function actoresABB(e) {

    var archivo = e.target.files[0];
    if (!archivo) {
        return;
    }

    let lector = new FileReader();
    lector.onload = function (e) {
        let contenido = e.target.result;
        const actores = JSON.parse(contenido);
        arbolBB = new ArbolABB()
        for (const x in actores) {
            let actor = actores[x]
            arbolBB.insertar(actor.dni, actor.nombre_actor, actor.correo, actor.descripcion)

        }
        arbolBB.inordenABB()
        arbolBB.graficoABB(true)
        // listaClientes.mostrarClientes()
    }

    lector.readAsText(archivo);

    alert('Ha cargado exitosamente los actores!');
}
document.getElementById("actoresABB").addEventListener("change", actoresABB, false);


//---------------------------------------------FIN ARBOL BB----------------------------------------------------


//--------------------------------------LISTA DE LISTAS CATEGORIAS-------------------------------------------------------------------
var dotCAT;
class NodoCabeceraLL {
    constructor(idCabecera) {
        this.idCabecera = idCabecera;
        this.sizeCategorias = 0;
        this.siguiente = null;
        this.abajo = null;
    }
}

class NodoLL {
    constructor(id, company) {
        this.id = id;
        this.company = company;
        this.siguiente = null;
    }

}

class ListaDeListas {
    constructor() {
        this.primero = null;
        this.utlimo = null;
        this.size = 0;
    }

    agregarCabecera(id) {
        let nuevaCa = new NodoCabeceraLL(id);
        if (this.primero == null) {
            this.primero = nuevaCa;
            this.primero.siguiente = this.primero;
            this.ultimo = this.primero;
            this.primero.anterior = this.ultimo;
            this.size++;
        }
        //HACE ESTO SI LA LISTA YA TIENE POR LO MENOS UN ELEMENTO
        else {
            this.ultimo.siguiente = nuevaCa;
            nuevaCa.anterior = this.ultimo;
            nuevaCa.siguiente = this.primero;
            this.ultimo = nuevaCa;
            this.primero.anterior = this.ultimo;
            this.size++;
        }
    }

    agregarCategoria(idCategoria, company, idCabecera) {
        let tempCat = this.primero;
        do {
            // console.log("entre aqui")
            if (tempCat.idCabecera == idCabecera) {
                if (this.buscarDato(idCabecera, idCategoria) == "T") {
                    alert('El dato: ' + idCategoria + ' ya existe no se agregara')
                    break;
                } else {
                    let nuevaCat = new NodoLL(idCategoria, company)
                    let primeraCat = tempCat.abajo;
                    if (primeraCat == null) {
                        tempCat.abajo = nuevaCat;
                        tempCat.sizeCategorias++;
                    } else {
                        let tmp = tempCat.abajo;
                        while (tmp.siguiente != null) {
                            tmp = tmp.siguiente
                        }
                        tmp.siguiente = nuevaCat
                        tempCat.sizeCategorias++;
                    }
                    // tempCat.abajo = nuevaCat;
                    // nuevaCat.siguiente = primeraCat;
                    // tempCat.sizeCategorias++;
                    // alert('CATEGORIA AGREGADA');
                    // console.log("Libro: "+nuevoLibro.nombreLibro+" a usuario: "+usuario+" agregado")
                    break;
                }
            }
            tempCat = tempCat.siguiente;
        } while (tempCat != this.primero);
        // this.mostrarLibrosUsuario(usuario);
        if (tempCat == null) {
            console.log("No existe la cabecera")
        }

    }



    mostrarCabeceras() {
        let aux = this.primero;
        console.log("-------------CABECERAS------------");
        do {
            console.log(aux.idCabecera);
            aux = aux.siguiente;
        }
        while (aux != this.primero);
    }

    mostrarCategoriass(idCabecera) {
        var temporal = this.primero
        while (temporal != null) {
            if (temporal.idCabecera == idCabecera) {
                console.log("*********** Cabecera " + idCabecera + " *********")
                var temporalcanciones = temporal.abajo
                while (temporalcanciones != null) {
                    console.log(temporalcanciones.company)
                    temporalcanciones = temporalcanciones.siguiente
                }
                return
            }
            temporal = temporal.siguiente
        }
        if (temporal == null) {
            console.log("No se pudo encontrar el album solicitado " + idCabecera)
        }
    }

    buscarDato(idCabecera, idCategoria) {
        var temporal = this.primero
        while (temporal != null) {
            if (temporal.idCabecera == idCabecera) {
                // console.log("*********** Cabecera " + idCabecera + " *********")
                var temporalcanciones = temporal.abajo
                while (temporalcanciones != null) {
                    if (temporalcanciones.id === idCategoria) {
                        return "T"
                    }
                    console.log(temporalcanciones.id)
                    temporalcanciones = temporalcanciones.siguiente
                }
                return
            }
            temporal = temporal.siguiente
        }
        if (temporal == null) {
            console.log("No se pudo encontrar el album solicitado " + idCabecera)
            return "F"
        }
    }


    mostrarCategorias(idCabecera) {
        let aux = this.primero;
        let contador = 0;
        let uniones = ""
        let alineacion = ""
        var codigodotL = ""
        var codigodot = 'digraph L{\n node[shape=box fillcolor="#FFEDBB"style=filled]\n subgraph cluster_p{\nlabel ="TABLA HASH CATEGORIAS" bgcolor="gray" \n edge[dir="forward"]';
        do {
            codigodot = codigodot + 'nodo' + contador + '[label="' + aux.idCabecera + '",fillcolor=white,group=0] \n'
            codigodotL += this.segundaC('nodo' + contador, aux.idCabecera)
            // console.log("dot--"+codigodotL)
            contador++;
            if (aux.idCabecera == idCabecera) {
                // console.log("----------USUARIO:  "+idCabecera+" ---------------");
                var auxLibro = aux.abajo;
                do {
                    if (auxLibro == null) {
                        break
                    }
                    // console.log(auxLibro.company);
                    auxLibro = auxLibro.siguiente;
                } while (auxLibro != aux.abajo);
                break
            }
            aux = aux.siguiente;
            if (aux == this.primero) {
                console.log("No se encontro el libro")
            }
        }
        while (aux != this.primero)
        // alineacion="{rank=same; \n"
        for (let index = 0; index < this.size - 1; index++) {
            uniones = uniones + 'nodo' + index + '->' + 'nodo' + (index + 1) + '[dir=forward color="black"] \n'
            // if (index==(this.size-2)) {
            //     alineacion+='nodo'+index+', \n';
            //     alineacion+='nodo'+(index+1)+'\n';
            // }else{
            //     alineacion+='nodo'+index+', \n'
            // }

        }
        // alineacion+='}'
        // uniones+='nodo'+(this.size-1)+'->nodo0 \n'
        codigodot = codigodot + uniones
        // codigodot+=alineacion
        codigodot += codigodotL
        codigodot = codigodot + '}} \n'
        console.log(codigodot)
        dotCAT = codigodot
        svg = d3.select("#grafoCat").graphviz()
            // .width(6500)
            // .height(8000)
            .zoom(false)
            .renderDot(codigodot);
        this.segundaC()

    }


    segundaC(cabeza, idCabecera) {
        let aux = this.primero;
        let contador = 0;
        let retornar = ""
        do {
            if (aux.idCabecera == idCabecera) {
                retornar += this.mostrarH(aux, cabeza)
            }
            aux = aux.siguiente;
        }
        while (aux != this.primero)
        return retornar
    }

    mostrarH(usuario, cabeza) {
        let libU = usuario.abajo;
        let cats = document.getElementById("rowCat")
        var codigodotH = "";
        let contador = 0;
        let uniones = ""
        while (libU != null) {
            codigodotH += 'nodu' + libU.company.replace(/\s+/g, '') + cabeza + '[label="' + libU.company + '",fillcolor=white,group=0] \n'
            cats.innerHTML += '<div class="col s12 m6 l4" style="padding: 30px 5px;" id="cardCat"> <div class="card" style="width: 18rem;"> <div class="card-body"> <h5 class="card-title">' + libU.company + '</h5> </div></div> </div>'
            // console.log("---SUS LIBROS COMPRADOS: "+libU.company);
            libU = libU.siguiente;
        }
        let libUs = usuario.abajo;
        let alineacion = "{rank=same; \n"
        while (libUs != null) {

            let aux = libUs.siguiente
            if (aux != null) {
                uniones = uniones + 'nodu' + libUs.company.replace(/\s+/g, '') + cabeza + '->' + 'nodu' + aux.company.replace(/\s+/g, '') + cabeza + '[dir=forward color="black"] \n'
                alineacion += 'nodu' + libUs.company.replace(/\s+/g, '') + cabeza + ', \n';
                alineacion += 'nodu' + aux.company.replace(/\s+/g, '') + cabeza + '\n';
            }
            if (aux == null) {
                alineacion += 'nodu' + libUs.company.replace(/\s+/g, '') + cabeza + '\n';
            }

            // codigodotH+='nodu'+libU.nombreLibro+'[label="'+libU.nombreLibro+'",fillcolor=white,group=0]'
            // console.log("---SUS LIBROS COMPRADOS: "+libU.nombreLibro);
            libUs = libUs.siguiente;
            if (libUs == null) {
                alineacion += cabeza + '\n';
            }
            // contador++;
        }
        let primero = usuario.abajo;
        if (primero != null) {
            uniones += cabeza + '->' + 'nodu' + primero.company.replace(/\s+/g, '') + cabeza + '\n'
        }
        alineacion += '}'
        // alineacion="{rank=same; \n"
        // for (let index = 0; index < this.size-1; index++) {
        //     uniones=uniones+'nodo'+index+'->'+'nodo'+(index+1)+'[dir=forward color="black"] \n'
        //     if (index==(this.size-2)) {
        //         alineacion+='nodo'+index+', \n';
        //         alineacion+='nodo'+(index+1)+'\n';
        //     }else{
        //         alineacion+='nodo'+index+', \n'
        //     }

        // }
        // alineacion+='}'


        codigodotH = codigodotH + uniones
        codigodotH += alineacion
        // console.log(codigodotH);
        return codigodotH
        // codigodotH=codigodotH+'}}'

    }


    buscarUsuario(usuario, password) {
        let aux = this.primero;
        let existe = false;
        // console.log(aux.nombreUsuario)
        do {
            if ((aux.nombreUsuario == usuario) && (aux.password == password) && (aux.rol == "Administrador")) {
                existe = true
                return ["admin", aux.nombreUsuario];
            }
            else if ((aux.nombreUsuario == usuario) && (aux.password == password) && (aux.rol == "Usuario")) {
                existe = true
                return ["user", aux.nombreUsuario];
            }
            aux = aux.siguiente;
        } while (aux != this.primero)
        if (existe == false) {
            return ["null", "null"]
        }
    }
}

var categoriasLL
function listasL(e) {
    var archivo = e.target.files[0];
    console.log(archivo)
    if (!archivo) {
        return;
    }

    let lector = new FileReader();
    lector.onload = function (e) {
        let contenido = e.target.result;
        const categorias = JSON.parse(contenido);
        categoriasLL = new ListaDeListas()
        for (let index = 0; index < 20; index++) {
            categoriasLL.agregarCabecera(index)
        }
        for (const x in categorias) {
            let cate = categorias[x]
            let valor = parseInt(cate.id_categoria) % 20
            categoriasLL.agregarCategoria(parseInt(cate.id_categoria), cate.company, valor)
            // listaListas.agregarUsuario(user.dpi,user.nombre_completo,user.nombre_usuario,user.correo,user.rol,user.contrasenia,user.telefono);

        }
        categoriasLL.mostrarCategorias(19)

    }

    lector.readAsText(archivo);

    alert('Ha cargado exitosamente los usuarios!');
}
document.getElementById("listasL").addEventListener("change", listasL, false);
// -------------------------------------FIN---LISTAS--DE--LISTAS----------------------------------------------------



//---------------------------------FUNCIONES USUARIO------------------------------------------------------------------
function pulse() {
    let libro = document.getElementById("selectMenu").value;
    let tabla = document.getElementById("tbody")
    tabla.innerHTML = ''
    if (libro == "ascendente") {
        avlPeli.inorden()
    } else if (libro == "descendente") {
        avlPeli.desc()
    }
    console.log(libro)
}
function pulseAct() {
    let orden = document.getElementById("selectMenuAct").value;
    let tabla = document.getElementById("tbodyAct")
    tabla.innerHTML = ''
    if (orden == "inorden") {
        arbolBB.inordenABB()
    } else if (orden == "preorden") {
        arbolBB.preordenABB()
    } else if (orden == "postorden") {
        arbolBB.posordenABB()
    }
}

function modalInfo(id) {
    let nodo = listPeli.buscarPeli(parseInt(id))
    let modal = document.getElementById("mostrarPeli");
    modal.innerHTML = ''
    modal.innerHTML += ' <div class="modal-header">\n <h5 class="modal-title" id="exampleModalLabel">' + nodo.nombrePeli + '</h5>\n <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n</div><div class="modal-body">\n <h6 id="tituloComen">DESCRIPCION: </h6>' + nodo.descrip + '<h6 id="tituloComen">Comentarios</h6>\n'
    modal.innerHTML += '<ol class="list-group list-group-numbered" id="listasPeli">\n'
    let lista = document.getElementById("listasPeli")
    for (let index = 0; index < nodo.comentarios.length; index++) {
        if (nodo.comentarios.length == 0) {
            break
        } else {
            lista.innerHTML += '<li class="list-group-item d-flex justify-content-between align-items-start"> <div class="ms-2 me-auto">\n <div class="fw-bold">' + nodo.comentarios[index] + '</div>\n </div> </li>'
        }

    }
    listPeli.innerHTML += '\n </ol>\n';
    modal.innerHTML += '<h6>Puntuacion: </h6> \n'
    if (parseInt(nodo.puntua) == 0) {
        modal.innerHTML += '<span class="fa fa-star"></span> <span class="fa fa-star"></span> <span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>'
    } else if (parseInt(nodo.puntua) == 5) {
        modal.innerHTML += '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>'
    }
    else {
        let star = (5 - parseInt(nodo.puntua))
        for (let index = 1; index <= nodo.puntua; index++) {
            modal.innerHTML += '<span class="fa fa-star checked"></span>'
        }
        for (let index = 1; index <= star; index++) {
            modal.innerHTML += '<span class="fa fa-star"></span>'
        }
    }

    modal.innerHTML += '<div class="input-group mb-3">\n <form> <input type="number" id="mouse-only-number-input" class="form-control" placeholder="Ingres su puntuacion" aria-label="Recipient s username" aria-describedby="button-addon2" name="amount" value="0" min="0" max="5"> <button class="btn btn-outline-secondary" type="button" id="button-addon2" onclick="ingresarCa(' + id + ')">Calificar</button>\n </div>\n <input type="text" id="comentario" placeholder="Ingrese su comentario"/>\n <button type="button" class="btn btn-primary" onclick="ingresarComentario(' + id + ')">Enviar</button>\n </form> </div>\n'
    modal.innerHTML += '<div class="modal-footer"><button class="btn btn-primary me-md-2" type="button" onclick="alquilarPeli(' + nodo.idPeli + ')"><i class="fa fa-cart-plus"></i>Alquilar</button></div>'
    let mouseOnlyNumberInputField = document.getElementById("mouse-only-number-input");

    // console.log(mouseOnlyNumberInputField.value)
    mouseOnlyNumberInputField.addEventListener("keypress", (event) => {
        event.preventDefault();
    });


    // modal.innerHTML+='<div class="input-group mb-3">\n <input type="range" list="tickmarks">\n <datalist id="tickmarks"><option value="0" label="0"><option value="1" label="1"><option value="2" label="2"><option value="3" label="3"><option value="4" label="4"><option value="5" label="5"></datalist> \n </div>\n </div>\n <div class="modal-footer">\n <input type="text" id="comentario" placeholder="Ingrese su comentario"/>\n <button type="button" class="btn btn-primary" onclick="ingresarComentario('+id+')">Enviar</button>\n </div>\n'
    // modal.innerHTML+='<input type="number" id="number" name="amount" value="0" min="5" max="10"> <button>Submit</button>';

}

function ingresarComentario(id) {
    let nombreUsuairo = localStorage.getItem("usuario");
    let nodo = listPeli.buscarPeli(id);
    let comentario = document.getElementById("comentario").value
    nodo.comentarios.push(nombreUsuairo + ": " + comentario)
    alert("Comentario Agregado")
}

function ingresarCa(id) {
    let nodo = listPeli.buscarPeli(id);
    let mouseOnlyNumberInputField = document.getElementById("mouse-only-number-input");
    nodo.puntua = mouseOnlyNumberInputField.value;
    alert("Puntuacion Agregada")
}

function alquilarPeli(id) {
    let user=localStorage.getItem("nombre");
    let nodo = listPeli.buscarPeli(id);
    listPeli.eliminarPelicula(id);
    // listPeli.mostrarPeli()
    let nodoavl = avlPeli.buscarAvlP(parseInt(id));
    nodoavl.alquilado = true;
    nodo.alquilado = true;
    console.log("user: ")
    // let namepe=nodoavl.nombrePelicula.replace(/\s+/g, '')
    listDataB.insertDataBlock(JSON.parse(user), nodoavl.nombrePelicula.toString())
    alert('Pelicula Alquilada')
}


//----------------------------------------------ARBOL MERKLE-------------------------------------------------------------------------
class NodoDataBlock {
    constructor(usuario, pelicula) {
        this.blockdata = usuario + ' - ' + pelicula;
        this.siguiente = null;
    }
}

class ListDataBlock {
    constructor() {
        this.primero = null;
        this.size = 0;
    }

    insertDataBlock(usuario, pelicula) {
        let nuevo = new NodoDataBlock(usuario, pelicula);
        this.size++;
        if (this.primero == null) {
            this.primero = nuevo;
        } else {
            let tmp = this.primero;
            while (tmp.siguiente != null) {
                tmp = tmp.siguiente;
            }
            tmp.siguiente = nuevo;
        }
        return nuevo
    }
    getD(num) {
        let tmp = this.primero
        for (let index = 0; index < this.size; index++) {
            if (index == num) {
                return tmp
            }
            tmp = tmp.siguiente
        }
    }
}

var listDataB;
class DataNode {
    constructor(value) {
        this.value = value
    }
}

class HashNode {
    constructor(hash) {
        this.hash = hash
        this.left = null
        this.right = null
    }
}

class Merkle {
    constructor() {
        this.tophash = null
        this.datablock = listDataB;
        this.dot = ''
    }

    add(usuario, pelicula) {
        this.datablock = listDataB
        // this.datablock.push(new DataNode(value))
    }

    createTree(exp) {
        this.tophash = new HashNode(0)
        this._createTree(this.tophash, exp)
    }

    _createTree(tmp, exp) {
        if (exp > 0) {
            tmp.left = new HashNode(0)
            tmp.right = new HashNode(0)
            this._createTree(tmp.left, exp - 1)
            this._createTree(tmp.right, exp - 1)
        }
    }

    genHash(tmp, n) { // postorder
        if (tmp != null) {
            this.genHash(tmp.left, n)
            this.genHash(tmp.right, n)

            if (tmp.left == null && tmp.right == null) {
                tmp.left = this.datablock.getD(n - index--)
                tmp.hash = Sha256.hash(tmp.left.blockdata)
                // tmp.left = this.datablock[n - index--]
                // tmp.hash = (tmp.left.value * 1000).toString(16)
                console.log("h: " + tmp.hash + "  val: " + tmp.left.blockdata)
            } else {
                // tmp.hash = (parseInt(tmp.left.hash, 16) + parseInt(tmp.right.hash, 16)).toString(16)
                tmp.hash = (Sha256.hash(tmp.left.hash.toString())) + (Sha256.hash(tmp.right.hash.toString()))
                console.log("h: " + tmp.hash + "  val: " + tmp.left.hash + "----" + tmp.right.hash)
            }
        }
    }

    preorder(tmp) {
        if (tmp != null) {
            console.log("hASH: " + tmp.hash)
            // if (tmp instanceof DataNode) {
            //     document.getElementById("log").innerHTML += 'DB:' + tmp.value + ' '
            // } else {
            //     document.getElementById("log").innerHTML += tmp.hash + ' '
            // }
            this.preorder(tmp.left)
            this.preorder(tmp.right)
        }
    }
    posorden(){
        this.pos_orden(this.tophash);
    }
    
    pos_orden(nodo){
        if(nodo!=null){
            this.pos_orden(nodo.izquierda);
            this.pos_orden(nodo.derecha);
            console.log("Valor:",nodo.valor);           
        }
    }

    generarMerkle(generar) {
        let nodo = this.tophash
        this.graphviz = this.nodos = this.relaciones = "";
        this.graphviz = 'graph  {\n fontname="Helvetica,Arial,sans-serif"\n' + 'node [fontname="Helvetica,Arial,sans-serif"]\n edge [fontname="Helvetica,Arial,sans-serif"]\n';
        // this.graphviz = 'graph \"\" {\n';
        this.generarMerkle2(this.tophash);
        this.graphviz += this.nodos;
        if (nodo != null) {
            // console.log("nodo: "+this.ra)
            // console.log(nodo.dni + " -- " + this.cabeza.dni)
            // this.relaciones += nodo.dni + " -- " + this.cabeza.dni + ";\n";
        }
        this.graphviz += this.relaciones;
        this.graphviz += "\n}";
        if (generar) {

            // escribirArchivo("./reporte.dot", this.graphviz);
            d3.select("#grafoBlock").graphviz()
                .zoom(false)
                .renderDot(this.graphviz)
            console.log(this.graphviz)
            return null;
        }

        return (this.nodos + this.relaciones);
    }
    existeNodo(nodo){
        for (let index = 0; index < nodos.length; index++) {
            if (nodo===nodos[index]) {
                return true
            }
        }
        return false
    }

    generarMerkle2(raiz) {
        if (raiz != null) {
            if (raiz.left!=null) {
                if (raiz.left instanceof NodoDataBlock) {
                    let text=raiz.left.blockdata.replace(/\s+/g, '')
                    this.nodos += text.replace('-','') + '[label=\"' + raiz.left.blockdata + '\"];\n';
                    if(this.existeNodo('nodo'+raiz.hash)==false){
                        nodos.push('nodo'+raiz.hash)
                    }else{
                        this.nodos += 'nodo'+raiz.hash + '[label=\"' + raiz.hash + '\"];\n';
                    }
                    this.relaciones += 'nodo'+raiz.hash + " -- " + text.replace('-','')+ ";\n";
                }
            }if (raiz.left instanceof HashNode) {
                this.nodos += 'nodo'+raiz.hash + '[label=\"' + raiz.hash + '\"];\n';
                if(this.existeNodo('nodo'+raiz.hash)==false){
                    nodos.push('nodo'+raiz.hash)
                }else{
                    this.nodos += 'nodo'+raiz.hash + '[label=\"' + raiz.hash + '\"];\n';
                }
                if (raiz.left!=null) {
                    if(this.existeNodo('nodo'+raiz.left.hash)==false){
                        nodos.push('nodo'+raiz.left.hash)
                    }else{
                        this.nodos += 'nodo'+raiz.left.hash + '[label=\"' + raiz.left.hash + '\"];\n';
                    }
                    this.relaciones +=  'nodo'+raiz.hash+" -- " +  'nodo'+raiz.left.hash +";\n";
                }
                if (raiz.right!=null) {
                    if(this.existeNodo('nodo'+raiz.right.hash)==false){
                        nodos.push('nodo'+raiz.right.hash)
                    }else{
                        this.nodos += 'nodo'+raiz.right.hash + '[label=\"' + raiz.right.hash + '\"];\n';
                    }
                    this.relaciones +=  'nodo'+raiz.hash + " -- " + 'nodo'+raiz.right.hash+ ";\n";
                }
            }
            this.generarMerkle2(raiz.left);
            this.generarMerkle2(raiz.right);
            // this.nodos += raiz.hash + '[label=\"' + raiz.hash + '\"];\n';
            // if (raiz.left != null) {
            //     this.relaciones += raiz.hash + " -- " + raiz.left.hash + ";\n";
            // }
            // if (raiz.right != null) {
            //     this.relaciones += raiz.hash + " -- " + raiz.right.hash + ";\n";

            // }
            // this.generarMerkle2(raiz.left);
            // this.generarMerkle2(raiz.right);
        }
    }

    ///esto verifica el tama;o de la lista a ingresar y si hacen falta datos los
    auth() {
        var exp = 1
        while (Math.pow(2, exp) < this.datablock.size) {
            exp += 1
        }
        for (var i = this.datablock.size; i < Math.pow(2, exp); i++) {
            this.datablock.insertDataBlock((i * 100).toString())
            //   this.datablock.push(new DataNode(i*100))
        }
        index = Math.pow(2, exp)
        this.createTree(exp)
        this.genHash(this.tophash, Math.pow(2, exp))
        // this.preorder(this.tophash)
    }

    show() {
        this.datablock.forEach(element => document.getElementById("log").innerHTML += element.value + ' ');
    }
}
var nodos=[]
var index = 0

function merkle() {
    var m = new Merkle()
    m.auth()
    m.generarMerkle(true)
}













































































































//-------------------------------------APARTADO PARA LA FUNCION SHA256---------------------------------------------------------
var Sha256 = {};  // Sha256 namespace

/**
 * Generates SHA-256 hash of string
 *
 * @param {String} msg                String to be hashed
 * @param {Boolean} [utf8encode=true] Encode msg as UTF-8 before generating hash
 * @returns {String}                  Hash of msg as hex character string
 */
Sha256.hash = function (msg, utf8encode) {
    utf8encode = (typeof utf8encode == 'undefined') ? true : utf8encode;

    // convert string to UTF-8, as SHA only deals with byte-streams
    if (utf8encode) msg = Utf8.encode(msg);

    // constants [§4.2.2]
    var K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
        0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
        0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
        0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
        0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
        0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
        0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
        0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
    // initial hash value [§5.3.1]
    var H = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];

    // PREPROCESSING 

    msg += String.fromCharCode(0x80);  // add trailing '1' bit (+ 0's padding) to string [§5.1.1]

    // convert string msg into 512-bit/16-integer blocks arrays of ints [§5.2.1]
    var l = msg.length / 4 + 2;  // length (in 32-bit integers) of msg + ‘1’ + appended length
    var N = Math.ceil(l / 16);   // number of 16-integer-blocks required to hold 'l' ints
    var M = new Array(N);

    for (var i = 0; i < N; i++) {
        M[i] = new Array(16);
        for (var j = 0; j < 16; j++) {  // encode 4 chars per integer, big-endian encoding
            M[i][j] = (msg.charCodeAt(i * 64 + j * 4) << 24) | (msg.charCodeAt(i * 64 + j * 4 + 1) << 16) |
                (msg.charCodeAt(i * 64 + j * 4 + 2) << 8) | (msg.charCodeAt(i * 64 + j * 4 + 3));
        } // note running off the end of msg is ok 'cos bitwise ops on NaN return 0
    }
    // add length (in bits) into final pair of 32-bit integers (big-endian) [§5.1.1]
    // note: most significant word would be (len-1)*8 >>> 32, but since JS converts
    // bitwise-op args to 32 bits, we need to simulate this by arithmetic operators
    M[N - 1][14] = ((msg.length - 1) * 8) / Math.pow(2, 32); M[N - 1][14] = Math.floor(M[N - 1][14])
    M[N - 1][15] = ((msg.length - 1) * 8) & 0xffffffff;


    // HASH COMPUTATION [§6.1.2]

    var W = new Array(64); var a, b, c, d, e, f, g, h;
    for (var i = 0; i < N; i++) {

        // 1 - prepare message schedule 'W'
        for (var t = 0; t < 16; t++) W[t] = M[i][t];
        for (var t = 16; t < 64; t++) W[t] = (Sha256.sigma1(W[t - 2]) + W[t - 7] + Sha256.sigma0(W[t - 15]) + W[t - 16]) & 0xffffffff;

        // 2 - initialise working variables a, b, c, d, e, f, g, h with previous hash value
        a = H[0]; b = H[1]; c = H[2]; d = H[3]; e = H[4]; f = H[5]; g = H[6]; h = H[7];

        // 3 - main loop (note 'addition modulo 2^32')
        for (var t = 0; t < 64; t++) {
            var T1 = h + Sha256.Sigma1(e) + Sha256.Ch(e, f, g) + K[t] + W[t];
            var T2 = Sha256.Sigma0(a) + Sha256.Maj(a, b, c);
            h = g;
            g = f;
            f = e;
            e = (d + T1) & 0xffffffff;
            d = c;
            c = b;
            b = a;
            a = (T1 + T2) & 0xffffffff;
        }
        // 4 - compute the new intermediate hash value (note 'addition modulo 2^32')
        H[0] = (H[0] + a) & 0xffffffff;
        H[1] = (H[1] + b) & 0xffffffff;
        H[2] = (H[2] + c) & 0xffffffff;
        H[3] = (H[3] + d) & 0xffffffff;
        H[4] = (H[4] + e) & 0xffffffff;
        H[5] = (H[5] + f) & 0xffffffff;
        H[6] = (H[6] + g) & 0xffffffff;
        H[7] = (H[7] + h) & 0xffffffff;
    }

    return Sha256.toHexStr(H[0]) + Sha256.toHexStr(H[1]) + Sha256.toHexStr(H[2]) + Sha256.toHexStr(H[3]) +
        Sha256.toHexStr(H[4]) + Sha256.toHexStr(H[5]) + Sha256.toHexStr(H[6]) + Sha256.toHexStr(H[7]);
}

Sha256.ROTR = function (n, x) { return (x >>> n) | (x << (32 - n)); }
Sha256.Sigma0 = function (x) { return Sha256.ROTR(2, x) ^ Sha256.ROTR(13, x) ^ Sha256.ROTR(22, x); }
Sha256.Sigma1 = function (x) { return Sha256.ROTR(6, x) ^ Sha256.ROTR(11, x) ^ Sha256.ROTR(25, x); }
Sha256.sigma0 = function (x) { return Sha256.ROTR(7, x) ^ Sha256.ROTR(18, x) ^ (x >>> 3); }
Sha256.sigma1 = function (x) { return Sha256.ROTR(17, x) ^ Sha256.ROTR(19, x) ^ (x >>> 10); }
Sha256.Ch = function (x, y, z) { return (x & y) ^ (~x & z); }
Sha256.Maj = function (x, y, z) { return (x & y) ^ (x & z) ^ (y & z); }

//
// hexadecimal representation of a number 
//   (note toString(16) is implementation-dependant, and  
//   in IE returns signed numbers when used on full words)
//
Sha256.toHexStr = function (n) {
    var s = "", v;
    for (var i = 7; i >= 0; i--) { v = (n >>> (i * 4)) & 0xf; s += v.toString(16); }
    return s;
}


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/*  Utf8 class: encode / decode between multi-byte Unicode characters and UTF-8 multiple          */
/*              single-byte character encoding (c) Chris Veness 2002-2010                         */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

var Utf8 = {};  // Utf8 namespace

/**
 * Encode multi-byte Unicode string into utf-8 multiple single-byte characters 
 * (BMP / basic multilingual plane only)
 *
 * Chars in range U+0080 - U+07FF are encoded in 2 chars, U+0800 - U+FFFF in 3 chars
 *
 * @param {String} strUni Unicode string to be encoded as UTF-8
 * @returns {String} encoded string
 */
Utf8.encode = function (strUni) {
    // use regular expressions & String.replace callback function for better efficiency 
    // than procedural approaches
    var strUtf = strUni.replace(
        /[\u0080-\u07ff]/g,  // U+0080 - U+07FF => 2 bytes 110yyyyy, 10zzzzzz
        function (c) {
            var cc = c.charCodeAt(0);
            return String.fromCharCode(0xc0 | cc >> 6, 0x80 | cc & 0x3f);
        }
    );
    strUtf = strUtf.replace(
        /[\u0800-\uffff]/g,  // U+0800 - U+FFFF => 3 bytes 1110xxxx, 10yyyyyy, 10zzzzzz
        function (c) {
            var cc = c.charCodeAt(0);
            return String.fromCharCode(0xe0 | cc >> 12, 0x80 | cc >> 6 & 0x3F, 0x80 | cc & 0x3f);
        }
    );
    return strUtf;
}

/**
 * Decode utf-8 encoded string back into multi-byte Unicode characters
 *
 * @param {String} strUtf UTF-8 string to be decoded back to Unicode
 * @returns {String} decoded string
 */
Utf8.decode = function (strUtf) {
    // note: decode 3-byte chars first as decoded 2-byte strings could appear to be 3-byte char!
    var strUni = strUtf.replace(
        /[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,  // 3-byte chars
        function (c) {  // (note parentheses for precence)
            var cc = ((c.charCodeAt(0) & 0x0f) << 12) | ((c.charCodeAt(1) & 0x3f) << 6) | (c.charCodeAt(2) & 0x3f);
            return String.fromCharCode(cc);
        }
    );
    strUni = strUni.replace(
        /[\u00c0-\u00df][\u0080-\u00bf]/g,                 // 2-byte chars
        function (c) {  // (note parentheses for precence)
            var cc = (c.charCodeAt(0) & 0x1f) << 6 | c.charCodeAt(1) & 0x3f;
            return String.fromCharCode(cc);
        }
    );
    return strUni;
}