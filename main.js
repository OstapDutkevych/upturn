  function call() {
        var inputValue = $("#input").val();
        var result = $("#output");

        $.ajax({
          type: 'POST',
          url: 'http://localhost:3000/',
          data: {inputValue: inputValue},
          success: function(data) {
            result.val(data);
          },
          error:  function(xhr, str){
      alert('Error: ' + xhr.responseCode);
          }
        });

    }