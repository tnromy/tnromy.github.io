$(document).ready(function(){
        $('#btn-submit-live-input').on('click', function(){
        $('#live-embed').html($('#embed-url').val());
        });
      });