(function () {
    'use strict';
    var s,
        editProduct = {
            settings: {
                $modalWrapper: $('.modal-wrapper'),
                $editBtn: $('.edit'),
                $deleteBtn: $('.delete')
            },

            init: function() {
                s = this.settings;
                this.bindUIActions();
            },

            bindUIActions: function() {
                s.$editBtn.on('click', function(e) {
                    e.preventDefault();
                    editProduct.editMe($(this));
                });

                s.$modalWrapper.on('click', function(e) {
                    e.preventDefault();
                    $(this).removeClass('reveal');
                });
            },

            editMe: function($clicked) {
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
                    },
                    error: function(data, textStatus, jqXHR) {
                        
                    }



                });


            },

            deleteMe: function($clicked) {
                
            }
        };

    editProduct.init();

}());