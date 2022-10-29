var header=`
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="index.html">Wine shop</a>
      </div>
      <ul class="nav navbar-nav">
        <li class="active"><a href="index.html">Home</a></li>
        <li><a href="products.html">Productos</a></li>
        <li><a href="contact.html">Contacto</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="registerForm.html"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </nav>
  
  <div>
      <h1>Encuentra los mejores vinos con nosotros</h1>
    </div>
  `

  document.getElementById("jsheader").innerHTML=header;

  var footer=`
  <div class="mt-5 p-4 bg-dark text-white text-center">

  <a href="https://twitter.com" target="_blank"><i class="fa-brands fa-twitter fa-" aria-hidden="true"></i></a>
  <a href="https://es-la.facebook.com/" target="_blank"><i class="fa-brands fa-facebook" aria-hidden="true"></i></a>
  <a href="https://ar.pinterest.com/" target="_blank"><i class="fa-brands fa-pinterest" aria-hidden="true"></i></a>
  <a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>
  <a href="https://ar.linkedin.com/" target="_blank"><i class="fa-brands fa-linkedin" aria-hidden="true"></i></a>

  <p> Derechos Reservados @2022 </p>
  <br>
</div>
`
/* https://mocki.io/v1/d1d88eb1-340f-4185-97cb-a165d0aba995 */
document.getElementById("jsfooter").innerHTML=footer;
fetch('https://mocki.io/v1/d1d88eb1-340f-4185-97cb-a165d0aba995')
  .then(response => response.json())
  .then(response => {
    t1=document.getElementById("c1");
    t1.innerHTML=`<img class="imgprod"src="${response.vinos[0].imagen}" alt="vino">
    <h1 class="nomprod">${response.vinos[0].nombre}</h1>
    <p class="precprod">${response.vinos[0].precio}</p>
    <div class="contboton">
      <button class="botoncarrito"><img src="images/shoppingcart.png" alt="Agregar al carrito"></button>
    </div>`
    t2=document.getElementById("c2");
    t2.innerHTML=`<img class="imgprod"src="${response.vinos[1].imagen}" alt="vino">
    <h1 class="nomprod">${response.vinos[1].nombre}</h1>
    <p class="precprod">${response.vinos[1].precio}</p>
    <div class="contboton">
      <button class="botoncarrito"><img src="images/shoppingcart.png" alt="Agregar al carrito"></button>
    </div>`
    t3=document.getElementById("c3");
    t3.innerHTML=`<img class="imgprod"src="${response.vinos[2].imagen}" alt="vino">
    <h1 class="nomprod">${response.vinos[2].nombre}</h1>
    <p class="precprod">${response.vinos[2].precio}</p>
    <div class="contboton">
      <button class="botoncarrito"><img src="images/shoppingcart.png" alt="Agregar al carrito"></button>
    </div>`
    t4=document.getElementById("c4");
    t4.innerHTML=`<img class="imgprod"src="${response.vinos[3].imagen}" alt="vino">
    <h1 class="nomprod">${response.vinos[3].nombre}</h1>
    <p class="precprod">${response.vinos[3].precio}</p>
    <div class="contboton">
      <button class="botoncarrito"><img src="images/shoppingcart.png" alt="Agregar al carrito"></button>
    </div>`
    t5=document.getElementById("c5");
    t5.innerHTML=`<img class="imgprod"src="${response.vinos[4].imagen}" alt="vino">
    <h1 class="nomprod">${response.vinos[4].nombre}</h1>
    <p class="precprod">${response.vinos[4].precio}</p>
    <div class="contboton">
      <button class="botoncarrito"><img src="images/shoppingcart.png" alt="Agregar al carrito"></button>
    </div>`
    t6=document.getElementById("c6");
    t6.innerHTML=`<img class="imgprod"src="${response.vinos[5].imagen}" alt="vino">
    <h1 class="nomprod">${response.vinos[5].nombre}</h1>
    <p class="precprod">${response.vinos[5].precio}</p>
    <div class="contboton">
      <button class="botoncarrito"><img src="images/shoppingcart.png" alt="Agregar al carrito"></button>
    </div>`
    t7=document.getElementById("c7");
    t7.innerHTML=`<img class="imgprod"src="${response.vinos[6].imagen}" alt="vino">
    <h1 class="nomprod">${response.vinos[6].nombre}</h1>
    <p class="precprod">${response.vinos[6].precio}</p>
    <div class="contboton">
      <button class="botoncarrito"><img src="images/shoppingcart.png" alt="Agregar al carrito"></button>
    </div>`
    t8=document.getElementById("c8");
    t8.innerHTML=`<img class="imgprod"src="${response.vinos[7].imagen}" alt="vino">
    <h1 class="nomprod">${response.vinos[7].nombre}</h1>
    <p class="precprod">${response.vinos[7].precio}</p>
    <div class="contboton">
      <button class="botoncarrito"><img src="images/shoppingcart.png" alt="Agregar al carrito"></button>
    </div>`
    t9=document.getElementById("c9");
    t9.innerHTML=`<img class="imgprod"src="${response.vinos[8].imagen}" alt="vino">
    <h1 class="nomprod">${response.vinos[8].nombre}</h1>
    <p class="precprod">${response.vinos[8].precio}</p>
    <div class="contboton">
      <button class="botoncarrito"><img src="images/shoppingcart.png" alt="Agregar al carrito"></button>
    </div>`
    t10=document.getElementById("c10");
    t10.innerHTML=`<img class="imgprod"src="${response.vinos[9].imagen}" alt="vino">
    <h1 class="nomprod">${response.vinos[9].nombre}</h1>
    <p class="precprod">${response.vinos[9].precio}</p>
    <div class="contboton">
      <button class="botoncarrito"><img src="images/shoppingcart.png" alt="Agregar al carrito"></button>
    </div>`
    t11=document.getElementById("c11");
    t11.innerHTML=`<img class="imgprod"src="${response.vinos[10].imagen}" alt="vino">
    <h1 class="nomprod">${response.vinos[10].nombre}</h1>
    <p class="precprod">${response.vinos[10].precio}</p>
    <div class="contboton">
      <button class="botoncarrito"><img src="images/shoppingcart.png" alt="Agregar al carrito"></button>
    </div>`
    t12=document.getElementById("c12");
    t12.innerHTML=`<img class="imgprod"src="${response.vinos[11].imagen}" alt="vino">
    <h1 class="nomprod">${response.vinos[11].nombre}</h1>
    <p class="precprod">${response.vinos[11].precio}</p>
    <div class="contboton">
      <button class="botoncarrito"><img src="images/shoppingcart.png" alt="Agregar al carrito"></button>
    </div>`
  })
function validarenviar(){
  if(document.formulario.name.value.length <= 0){
    alert("Ingrese su nombre");
    document.formulario.name.focus();
    return 0;
  }
  if (document.formulario.gender.selectedIndex == 0) {
    alert("Debe seleccionar una opcion")
    document.formulario.gender.focus()
    return 0;
  }
  if(document.formulario.docNum.value.length<=0){
    alert("Ingrese su número de documento");
    document.formulario.docNum.focus();
    return 0;
  }
  if(document.formulario.docNum.value.length<=0){
    alert("Ingrese su número de documento");
    document.formulario.docNum.focus();
    return 0;
  }
  if(document.formulario.email.value.length<=0){
    alert("Ingrese su email");
    document.formulario.email.focus();
    return 0;
  }
  if(document.formulario.password.value.length<=0){
    alert("Ingrese su contraseña");
    document.formulario.password.focus();
    return 0;
  }
  if(document.formulario.repassword.value.length<=0){
    alert("Ingrese su contraseña de vuelta");
    document.formulario.repassword.focus();
    return 0;
  }
  if(document.formulario.password.value!==document.formulario.repassword.value){
    alert("Ingrese su contraseña correctamente");
    document.formulario.password.focus();
    document.formulario.repassword.focus();
    return 0;
  }
  
  document.formulario.submit();
}