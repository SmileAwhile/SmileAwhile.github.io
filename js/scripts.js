require('jquery');

$(document).ready(function() {
  
    $('a[href ^= "#"]').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top}, 900, 'swing', function() {
            window.location.hash = target;
        });

    });
    $("#send").click(function(e) {
            e.preventDefault();

            var subject = $('#email').val();
            var name = $('#name').val();
            var phone = $('#phone').val();
            var emailBody = $('#message').val();
            window.location.assign("mailto:cjdunn11@gmail.com?subject="+name+"_"+subject+"_"+phone+"&body="+emailBody);
   });
});
