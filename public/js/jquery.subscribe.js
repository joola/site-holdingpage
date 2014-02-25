jQuery(document).ready(function(){
  $('#subscribeform').submit(function(){

    var action = $(this).attr('action');

    $("#mesaj").slideUp(750,function() {
      $('#mesaj').hide();

      $('#subsubmit')
        .after('<img src="images/ajax-loader.gif" class="subscribe-loader" />')
        .attr('disabled','disabled');

      $.post(action, {
          email: $('#subemail').val()
        },
        function(data){
          console.log(data);
          if (data.success) {
            $('#subscribe').hide();
            $('#thankyou').show();
          }
        }
      );

    });

    return false;

  });

});