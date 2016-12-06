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

//jQuery extension, creating a method to handle adding animation class and then removing upon end
// $('#yourElement').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', doSomething);

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

/* creating a method to handle how to add animation class without reload page. We should use this function to remove it at the end
var end = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
$("#jello").on('click', function(){
    $("#image").addClass('animated jello'.one(end, function(){
        $(this).removeClass('animated jello');
    }));
});*/

