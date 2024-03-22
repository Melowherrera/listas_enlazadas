class Nodo {
    constructor(valor) {
      this.valor = valor;
      this.siguiente = null;
    }
  }
  
  class ListaEnlazada {
    constructor() {
      this.cabeza = null;
    }
  
    insertarAlFinal(valor) {
      if (!this.contiene(valor)) {
        const nuevoNodo = new Nodo(valor);
  
        if (!this.cabeza) {
          this.cabeza = nuevoNodo;
        } else {
          let actual = this.cabeza;
          while (actual.siguiente) {
            actual = actual.siguiente;
          }
          actual.siguiente = nuevoNodo;
        }
      }
    }
  
    contiene(valor) {
      let actual = this.cabeza;
      while (actual) {
        if (actual.valor === valor) {
          return true;
        }
        actual = actual.siguiente;
      }
      return false;
    }
  
    mostrarNodosSuperioresA(valorLimite) {
      let actual = this.cabeza;
      while (actual) {
        if (actual.valor > valorLimite) {
          console.log(actual.valor);
        }
        actual = actual.siguiente;
      }
    }
  }
  
  // Parte 1: Insertar datos al final sin repetir
  const lista1 = new ListaEnlazada();
  lista1.insertarAlFinal(5);
  lista1.insertarAlFinal(3);
  lista1.insertarAlFinal(7);
  lista1.insertarAlFinal(5);
  console.log("Lista 1:");
  console.log(lista1);
  
  // Parte 2: Crear lista y mostrar nodos superiores a un valor
  const lista2 = new ListaEnlazada();
  for (let i = 0; i < 10; i++) {
    lista2.insertarAlFinal(Math.floor(Math.random() * 20));
  }
  console.log("Lista 2:");
  console.log(lista2);
  
  console.log("Nodos superiores a 10 en Lista 2:");
  lista2.mostrarNodosSuperioresA(10);
  