(function () {
    'use strict';
    var s,
        editProduct = {
            settings: {
                $modalWrapper: $('.modal-wrapper'),
                $editBtn: $('.edit'),
                $deleteBtn: $('.delete'),
                $editForm: $('#editProductForm'),
                $updateBtn: $('#editProductForm').find('input[type="submit"]')
            },

            init: function() {
                s = this.settings;
                this.bindUIActions();
            },

            bindUIActions: function() {
                s.$editBtn.on('click', function(e) {
                    e.preventDefault();
                    editProduct.editForm($(this));
                });

                s.$modalWrapper.on('click', function(e) {
                    e.preventDefault();
                    //$(this).removeClass('reveal');
                });

                $('.update-button').on('click', function(e) {
                    e.preventDefault();
                    editProduct.editMe($(this));
                });

                $('.delete').on('click', function(e) {
                    e.preventDefault();
                    editProduct.deleteMe($(this));
                });
            },

            editForm: function($clicked) {
                //To show the modal window
                s.$modalWrapper.addClass('reveal');
                var id = $clicked.data('id');
                var editUrl = 'http://api.hm.local/api/Products/' + id;

                $.ajax({
                    url: editUrl,
                    type: 'GET',
                    success: function(data, textStatus, jqXHR) {
                        var desc = data.productDescription;
                        var price = data.productPrice;
                        var stock = data.productStock;
                        var image = data.productImage;
                        var id = data.productId;

                        $('#productDescription').val(desc);
                        $('#productImage').val(image);
                        $('#productPrice').val(price);
                        $('#productStock').val(stock);
                        $('input[type="button"]').attr('data-id', id);

                    },
                    error: function(data, textStatus, jqXHR) {
                        console.info(textStatus.statusText);
                    }
                });
            },

            editMe: function($clicked) {
                var id = $clicked.data('id');
                var editUrl = 'http://api.hm.local/api/Products/' + id;


                // Data to be edited
                var editedProductData = {
                    "productDescription": $('#productDescription').val(),
                    "productImage": $('#productImage').val(),
                    "productPrice": $('#productPrice').val(),
                    "productStock": $('#productStock').val()
                };
                $.ajax({
                    url: editUrl,
                    type: 'PUT',
                    data: editedProductData,
                    success: function(data, textStatus, jqXHR) {
                        $('#editProductForm').trigger('reset');
                        setTimeout(function() {
                            s.$modalWrapper.removeClass('reveal');
                        }, 1000);
                        location.reload();
                    },
                    error: function(data, textStatus, jqXHR) {
                        console.info(textStatus);
                    }
                });

            },

            deleteMe: function($clicked) {
                var id = $clicked.data('id');
                var deleteUrl = 'http://api.hm.local/api/Products/' + id;

                $.ajax({
                    url: deleteUrl,
                    type: 'DELETE',
                    success: function(data, textStatus, jqXHR) {
                        console.info('data successfully deleted');
                        location.reload();
                    },
                    error: function() {

                    }
                });

            }
        };

    editProduct.init();

}());