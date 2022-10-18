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

document.getElementById("jsfooter").innerHTML=footer;
