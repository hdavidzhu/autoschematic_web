$(document).ready(function(){
    var hideMechanical=0;
    var hideSoftware=0;
    $('.mechanical_button').click(function(){
        hideMechanical=1-hideMechanical;
        if (hideMechanical){
            $('div.mechanical').slideUp();
            $(this).addClass('active');
        }
        else{
            $('div.mechanical').slideDown();
            $(this).removeClass('active');
        }
    });
    $('.software_button').click(function(){
        hideSoftware=1-hideSoftware;
        if (hideSoftware){
            $('div.software').slideUp();
            $(this).addClass('active');
        }
        else{
            $('div.software').slideDown();
            $(this).removeClass('active');
        }
    });
});