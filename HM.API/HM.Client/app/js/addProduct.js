$(function () {
    var s,
        addProduct = {
            settings: {
                $url: 'http://api.hm.local/api/Products',
                $form: $('#addProduct'),
                $success: $('.success')
            },

            init: function () {
                s = this.settings;
                this.bindUIActions();
            },

            bindUIActions: function () {
                s.$form.on('submit', function (e) {
                    e.preventDefault();
                    addProduct.newProduct();
                });
            },

            newProduct: function () {
                // Data to be sent
                var newProductData = {
                    "productDescription": $('#productDescription').val(),
                    "productImage": $('#productImage').val(),
                    "productPrice": $('#productPrice').val(),
                    "productStock": $('#productStock').val()
                };

                $.ajax({
                    url: s.$url,
                    type: 'POST',
                    data: newProductData,
                    success: function(data, textStatus, jqXHR) {
                        s.$success.fadeIn();
                    },
                    error: function (data, textStatus, jqXHR) {
                        console.info(textStatus);
                    }


                });

            }
        };

    addProduct.init();
}());