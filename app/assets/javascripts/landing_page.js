$(document).ready(function(){    
	$(".botao-equipe").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#equipe").offset().top
	    }, 2000);
	});
	$(".botao-sobre").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#sobre").offset().top
	    }, 2000);
	});
	$(".botao-servico").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#servico").offset().top
	    }, 2000);
	});
	$(".botao-home").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#home").offset().top
	    }, 2000);
	});
}