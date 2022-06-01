function counter() {
    /*
    Ejercicio 1
  
    La función counter debe retornar otra función. Esta función retornada debe actuar como un contador, retornando un valor numérico que empieza en 1 e incrementa con cada invocación.
  
    Ejemplo:
    const nuevoContador = counter()
    nuevoContador()     // 1
    nuevoContador()     // 2
    nuevoContador()     // 3
  
    const otroContador = counter()
    otroContador()      // 1
    otroContador()      // 2
    otroContador()      // 3
     */
    var conti = 0
    return function (){
      conti = conti + 1
      console.log(conti)
    }
    console.log(conti)
  }
  
  counter()