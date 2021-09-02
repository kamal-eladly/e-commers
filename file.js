

$(document).ready(function () {
  $('#gallary .container ul li').click(function () { 
    $('#gallary .container ul li').removeClass('active1');
      $(this).addClass('active1');
        var index=$(this).attr('id');

      $('#gallary .container >div').removeClass('show1');
      $('#gallary .container >div[custom='+index+']').addClass('show1');


  });


});

