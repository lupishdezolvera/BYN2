/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){

    $(window).bind('scroll', function(){

        var navHeight = $(window).height() -70;

        if ( $(window).scrollTop() > navHeight){
            $('nav').addClass('fixed');
        }
        else{
            $('nav').removeClass('fixed');
        }
    });
});

$('.miswitch a').click(function(){
		$('.swicht-btn').toggleClass('on');
		$('.pricing-table-cont').toggleClass('rotando-tabla');
});

$('.galeria__img').click(function(e){
  var img = e.target.src;
  var modal = '<div class="modal" id="modal"><img src="'+ img + '" class="modal__img"><div class="modal__boton" id="modal__boton">X</div></div>';
  $('body').append(modal);
  $('#modal__boton').click(function(){
    $('#modal').remove();
  })
});


$(document).keyup(function(e){
  if (e.which==27) {
    $('#modal').remove();
  }
})
