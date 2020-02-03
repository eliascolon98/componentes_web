var j = 1;
                var carrousel = '';
                if (data.fotos == undefined) {
                    carrousel += '<div class="item active">' +
                        '<img src="images/no_image.png" alt=""  id="tam-img" />' +
                        '</div>';
                } else {
                    carrousel += '<div class="item active">' +
                        '<img src="' + data.fotos[0].foto + '" alt=""  id="tam-img" />' +
                        '</div>';

                    for (var y = 1; y < Object.keys(data.fotos).length - 1; y++) {
                        if (data.fotos[y].foto != undefined) {
                            carrousel += '<div class="item">' +
                                '<img src="' + data.fotos[y].foto + '" alt=""  id="tam-img" />' +
                                '</div>';
                            j++;
                        }
                    }
                }

                 $("#mycarousel").html(carrousel);
                 $("#mycarouselito").html(carrousel);
                    $("#mycarousel").owlCarousel({
                        items: 1,
                        loop: true,
                        margin: 10,
                        lazyLoad: true,
                        merge: true,
                        autoplay:true,
                        autoplayTimeout:4000,
                    });
                    $("#mycarouselito").owlCarousel({
                        items: 4,
                        loop: true,
                        margin: 10,
                        lazyLoad: true,
                        merge: true,
                        autoplay:true,
                        autoplayTimeout:4000,
                    });
