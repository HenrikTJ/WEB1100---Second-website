$(document).ready(function() {
  $("#more").click(function() {
    $('html, body').animate({
      scrollTop: $('#test').offset().top
    },1000); 
  });
  div class="blurme">
  <div class="no-blur">
    banner
  </div>
</div>

.blurme {
  position: relative;
  height:600px;
}

.blurme:before {
  content: "";
  position:absolute;
  z-index: -1;
  top:0;
  bottom:0;
  left:0;
  right:0;
  background: url("https://www.bouygues-es.fr/sites/france/files/styles/image_background/public/2017-10/genie-climatique.jpg?itok=pQxsosil");
  -webkit-filter: blur(20px);
}
  
});


