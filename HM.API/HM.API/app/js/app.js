(function() {
    var url = 'http://hmapi.local/api/Products';

    $.ajax({
        url: url,
        type: 'GET',
        success: function(response, textStatus, jqXHR) {
            $.each(response, function(index, element) {
                var data = response[index];
                console.info(data);
                $('#product-list').append(
                    '<h2>' + data.productDescription + '</h2>' +
                    '<p>'+ '£' + data.productPrice +'</p>' +
                    '<img src='+ data.productImage +'/>'
                    );
            });
        },
        error: function() {
            
        }

    });

}());