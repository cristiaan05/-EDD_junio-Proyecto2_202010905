

function login(event) {
    event.preventDefault()
    let isAdmin = document.querySelector("#check");
    usuario = document.getElementById("user").value
    password = document.getElementById("pass").value
    if (usuario == "EDD" && password == "123" && isAdmin.checked == true) {
        // alert('Te haz loggeado bien')
        localStorage.setItem("usuario", JSON.stringify(usuario))
        document.getElementById("admin").style.display = "block";
        document.getElementById("login").style.display = "none";
        console.log("admin")
    }

}
function cerrarSesion() {
    block
}

function mostrarGclientes() {
    document.getElementById("admin").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("cargas").style.display = "none";
    document.getElementById("gclientes").style.display = "block";
    document.getElementById("gcategorias").style.display = "none";
    document.getElementById("gpelis").style.display = "none";
    document.getElementById("gactores").style.display = "none";
}
function mostrarGcategorias() {
    document.getElementById("admin").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("cargas").style.display = "none";
    document.getElementById("gclientes").style.display = "none";
    document.getElementById("gcategorias").style.display = "block";
    document.getElementById("gpelis").style.display = "none";
    document.getElementById("gactores").style.display = "none";
}
function mostrarGpelis() {
    document.getElementById("admin").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("cargas").style.display = "none";
    document.getElementById("gclientes").style.display = "none";
    document.getElementById("gcategorias").style.display = "none";
    document.getElementById("gpelis").style.display = "block";
    document.getElementById("gactores").style.display = "none";
}
function mostrarGactores() {
    document.getElementById("admin").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("cargas").style.display = "none";
    document.getElementById("gclientes").style.display = "none";
    document.getElementById("gcategorias").style.display = "none";
    document.getElementById("gpelis").style.display = "none";
    document.getElementById("gactores").style.display = "block";
}

function mostrarCargas() {
    document.getElementById("admin").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("cargas").style.display = "block";
    document.getElementById("gclientes").style.display = "none";
    document.getElementById("gcategorias").style.display = "none";
    document.getElementById("gpelis").style.display = "none";
    document.getElementById("gactores").style.display = "none";
}
var svg;
var imgData
//------------------------------------------BOTON PARA DESCARGAR GRAFO--------------------------------------------------------------
d3.select("#saveButton").on("click", function () {
    var html = d3.select("svg")
        .attr("xmlns", "http://www.w3.org/2000/svg")
        .node().parentNode.innerHTML;
    var image = new Image();
    var DOMURL = self.URL || self.webkitURL || self;
    var svgg = new Blob([html], { type: "image/svg+xml;charset=utf-8" });
    var url = DOMURL.createObjectURL(svgg);
    console.log(url)
    var canvas = document.querySelector("canvas"),
        context = canvas.getContext("2d");
    image.onload = function () {
        context.drawImage(image, 0, 0);
        DOMURL.revokeObjectURL(url);
        var canvasdata = canvas.toDataURL("image/svg");
        var a = document.createElement("a");
        a.download = "sample.png";
        a.href = canvasdata;
        a.click();
        document.getElementById("can").style.display = "none";
    };
    image.src = url;
});

d3.select("#saveButtonCli").on("click", function () {
    var html = d3.select("svg")
        .attr("xmlns", "http://www.w3.org/2000/svg")
        .node().parentNode.innerHTML;
    var image = new Image();
    var DOMURL = self.URL || self.webkitURL || self;
    var svgg = new Blob([html], { type: "image/svg+xml;charset=utf-8" });
    var url = DOMURL.createObjectURL(svgg);
    console.log(url)
    var canvas = document.querySelector("canvas"),
        context = canvas.getContext("2d");
    image.onload = function () {
        context.drawImage(image, 0, 0);
        DOMURL.revokeObjectURL(url);
        var canvasdata = canvas.toDataURL("image/svg");
        var a = document.createElement("a");
        a.download = "GRAFO_CLIENTES.png";
        a.href = canvasdata;
        a.click();
        document.getElementById("canCli").style.display = "none";
    };
    image.src = url;
});

d3.select("#saveButtonp").on("click", function () {
    var html = d3.select("svg")
        .attr("xmlns", "http://www.w3.org/2000/svg")
        .node().parentNode.innerHTML;
    var image = new Image();
    var DOMURL = self.URL || self.webkitURL || self;
    var svgg = new Blob([html], { type: "image/svg+xml;charset=utf-8" });
    var url = DOMURL.createObjectURL(svgg);
    console.log(url)
    var canvas = document.querySelector("canvas"),
        context = canvas.getContext("2d");
    image.onload = function () {
        context.drawImage(image, 0, 0);
        DOMURL.revokeObjectURL(url);
        var canvasdata = canvas.toDataURL("image/svg");
        var a = document.createElement("a");
        a.download = "GRAFO_PELICULAS.png";
        a.href = canvasdata;
        a.click();
        document.getElementById("canPeli").style.display = "none";
    };
    image.src = url;
});

d3.select("#saveButtonAc").on("click", function () {
    var html = d3.select("svg")
        .attr("xmlns", "http://www.w3.org/2000/svg")
        .node().parentNode.innerHTML;
    var image = new Image();
    var DOMURL = self.URL || self.webkitURL || self;
    var svgg = new Blob([html], { type: "image/svg+xml;charset=utf-8" });
    var url = DOMURL.createObjectURL(svgg);
    console.log(url)
    var canvas = document.querySelector("canvas"),
        context = canvas.getContext("2d");
    image.onload = function () {
        context.drawImage(image, 0, 0);
        DOMURL.revokeObjectURL(url);
        var canvasdata = canvas.toDataURL("image/svg");
        var a = document.createElement("a");
        a.download = "GRAFO_ACTORES.png";
        a.href = canvasdata;
        a.click();
        document.getElementById("canAct").style.display = "none";
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
            if (this.altura(temporal.izquierda) >= this.altura(temporal.izquierda.derecha)) {
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

    postorden() {
        this.post_orden(this.cabeza);
    }
    post_orden(nodo) {
        if (nodo != null) {
            this.post_orden(nodo.izquierda);
            this.post_orden(nodo.derecha);
            console.log("valor=" + nodo.nombrePelicula);
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
            this.nodos += raiz.idPelicula + '[label="' + raiz.nombrePelicula + '"];\n';
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
var avlPeli;
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
        for (const x in peliculas) {
            let peli = peliculas[x]
            avlPeli.insertar(peli.id_pelicula, peli.nombre_pelicula, peli.descripcion, peli.puntuacion_star, peli.precio_Q);


        }
        console.log("jejejeje")
        avlPeli.generarAVL()
        avlPeli.postorden()
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
        let grafoC='digraph L{ \n node[shape=box fillcolor="#FFEDBB"style=filled] \n subgraph cluster_p{ \n label ="CLIENTES GRAFO" bgcolor="gray" \n edge[dir="forward"] \n';
        let uniones=''
        let rank='{rank=same;\n'
        while (aux != null) {
            grafoC+='nodo'+aux.dpi+'[label="'+aux.nombreCompleto+'",fillcolor=white,group=0] \n';
            if (aux.siguiente!=null) {
                uniones+='nodo'+aux.dpi+'->'+'nodo'+aux.siguiente.dpi+'[dir=forward color="black"] \n'
                rank+='nodo'+aux.dpi+', \n'
            } else{
                rank+='nodo'+aux.dpi+'\n'
            }
            console.log("Cliente: " + aux.nombreCompleto)
            aux = aux.siguiente;
        }
        rank+='}\n'
        grafoC+=uniones
        grafoC+=rank
        grafoC+='}}'
        console.log(grafoC)
        d3.select("#grafoCliente").graphviz()
        .zoom(false)
        .renderDot(grafoC);
        return "ok"
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

    inorden() {
        this.in_orden(this.cabeza);
    }

    in_orden(nodo) {
        if (nodo != null) {
            this.in_orden(nodo.izquierda);
            console.log("Valor:", nodo.nombreActor);
            this.in_orden(nodo.derecha);
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
        arbolBB.inorden()
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
                if(this.buscarDato(idCabecera,idCategoria)=="T"){
                    alert('El dato: '+idCategoria+' ya existe no se agregara')
                    break;
                }else{
                let nuevaCat = new NodoLL(idCategoria, company)
                let primeraCat = tempCat.abajo;
                tempCat.abajo = nuevaCat;
                nuevaCat.siguiente = primeraCat;
                tempCat.sizeCategorias++;
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

    buscarDato(idCabecera,idCategoria) {
        var temporal = this.primero
        while (temporal != null) {
            if (temporal.idCabecera == idCabecera) {
                // console.log("*********** Cabecera " + idCabecera + " *********")
                var temporalcanciones = temporal.abajo
                while (temporalcanciones != null) {
                    if (temporalcanciones.id===idCategoria) {
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
        var codigodotH = "";
        let contador = 0;
        let uniones = ""
        while (libU != null) {
            codigodotH += 'nodu' + libU.company + cabeza + '[label="' + libU.company + '",fillcolor=white,group=0] \n'
            // console.log("---SUS LIBROS COMPRADOS: "+libU.company);
            libU = libU.siguiente;
        }
        let libUs = usuario.abajo;
        let alineacion = "{rank=same; \n"
        while (libUs != null) {

            let aux = libUs.siguiente
            if (aux != null) {
                uniones = uniones + 'nodu' + libUs.company + cabeza + '->' + 'nodu' + aux.company + cabeza + '[dir=forward color="black"] \n'
                alineacion += 'nodu' + libUs.company + cabeza + ', \n';
                alineacion += 'nodu' + aux.company + cabeza + '\n';
            }
            if (aux == null) {
                alineacion += 'nodu' + libUs.company + cabeza + '\n';
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
            uniones += cabeza + '->' + 'nodu' + primero.company + cabeza + '\n'
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