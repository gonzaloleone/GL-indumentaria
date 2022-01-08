function filtrar(nombre) {
    let productos = document.querySelectorAll(".box .prod");
  
    for (let i = 0; i < productos.length; i++) {
      let producto = productos[i];
  
      if (!producto.innerHTML.toLowerCase().includes(nombre)) {
        producto.classList.add("esconder");
      } else {
        producto.classList.remove("esconder");
      }
    }
  }