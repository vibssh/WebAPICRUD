(function () {
    'use strict';
    var url = 'http://api.hm.local/api/Products';
    var obj = {
        ajx: $.ajax({
            url: url,
            type: 'GET',
            async: false,
            success: function(data, textStatus, jqXHR) {
                $.each(data, function(index) {
                    var d = data[index];
                    var desc = d.productDescription;
                    var price = d.productPrice;
                    var stock = d.productStock;
                    var image = d.productImage;
                    var id = d.productId;

                    $('.product-list').append(
                        '<img src = '+ image +'/>'+
                        '<p>' + desc + '</p>' +
                        '<p>' + '£' + price+'</p>' +
                        '<p>' + stock + '</p>' +
                        '<a class="button edit" href="#" data-id="'+ id +'">'+ "Edit Button "+'</a>' +
                        '<a class="button delete" href="#" data-id="' + id + '">' + "Delete Button " + '</a>'
                        );
                });
            },
            error: function (data,textStatus,jqXHR) {
                console.info(textStatus.statusText);
            }
        })

       
    };

    return obj;


}());