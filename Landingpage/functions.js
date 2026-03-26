function moverCarrusel(direccion) {
  const carrusel = document.getElementById('carrusel');
  const desplazamiento = 200;
  carrusel.scrollLeft += direccion * desplazamiento;
}
