$('#reload-button').click(function() {
    location.reload();
});

//click function for bounce button
$( "#bounce" ).click(function() {
  $(this).addClass('animated bounce');
});


$('#jello').on('click', function(){
    $('#image').addClass('animated jello');
});

/* creating a method to handle how to add animation class without reload page. We should use this function to remove it at the end
var end = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
$("#jello").on('click', function(){
    $("#image").addClass('animated jello').one(end, function(){
        $(this).removeClass('animated jello');
    }));
});*/

