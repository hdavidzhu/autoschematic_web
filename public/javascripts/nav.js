$(document).ready(function(){
    var height=$('nav').height();
    $('.nav-logo').height(height);
    console.log(window.location.pathname);
    selected=$('#'+window.location.pathname.replace('/',''));
    if(selected){
        selected.addClass('active');        
    }
});