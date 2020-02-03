setTimeout(function() {
$.ajax({
    url: 'js/noticesJSON.php',
    dataType: "json",
    success: function(data) {
        var result = "";
        var j = 0;
        for (var indice in data) {
            result += '<div id="post-309" class="row post-bottom clearfix post-309 post type-post status-publish format-image has-post-thumbnail hentry category-inspiration post_format-post-format-image even">'+
                '<div class="post-col-6">'+
                '<div class="bimage">'+
                '<a href="http://biinyu.com.co/Propiedadesycapitales/detalle-noticia.php?codigo=' + data[j].id + '" title="' + data[j].titulo + '">'+
                '<img width="600" height="400" class="img-noti" src="propiedades-noticias/admin/' + data[j].imagen + '" class="attachment-homeland_large_thumb size-homeland_large_thumb wp-post-image"'+
                'alt="" srcset="propiedades-noticias/admin/' + data[j].imagen + '"'+
                'sizes="(max-width: 568px) 50vw, '+
                '(max-width: 736px) 40vw, '+
                '(max-width: 768px) 30vw, '+
                'max-width: 1024px) 20vw, 153px" style="width: 30%;" /> </a>'+
                '</div>'+
                '</div>'+
                '<div class="post-col-6">'+
                '<div class="bdesc">'+
                '<h5>'+
                '<a href="http://biinyu.com.co/Propiedadesycapitales/detalle-noticia.php?codigo=' + data[j].id + '">' + data[j].descripcion + '</a>'+
                '</h5>'+
                '<label>'+ data[j].fecha + '</label>'+
                '</div>'+
                '</div>'+
                '</div>';
            j++;
            if (j >3) {
                break;
            }
        }
        
                
        $("#ulti-noticias").append(result);


    },
    error: function(data) {
    }
});
},500);



setTimeout(function() {
$.ajax({
    url: 'js/noticesJSON.php',
    dataType: "json",
    success: function(data) {
        var result2 = "";
        var j = 0;
        for (var indice in data) {
            result2 += '<div class="noticia-1">'+
                        '<div class="l-fecha"></div>'+
                        '<div class="content-fecha">'+
                            '<img class="imagen-n" src="propiedades-noticias/admin/' + data[j].imagen + '" alt="">'+
                            '<div class="fecha" ><h5  style="color: #fff;">'+ data[j].fecha + '</h5> </div>'+
                        '</div>'+
                        '<div class="noticia-content">'+
                            '<h4><b>' + data[j].titulo + '</b></h4>'+
                            '<p>' + data[j].descripcion + '</p>'+
                            '<a href="http://biinyu.com.co/Propiedadesycapitales/detalle-noticia.php?codigo=' + data[j].id + '" style="color: #024959;">Leer más</a>'+
                        '</div>'+
                    '</div>'+
                    '<br>';
                
            j++;
            if (j >2) {
                break;
            }
        }
        
                
        $("#mi-noticia").append(result2);


    },
    error: function(data) {
    }
});
},500);



setTimeout(function() {
$.ajax({
    url: 'js/noticesJSON.php',
    dataType: "json",
    success: function(data) {
        var result = "";
        for (var j in data) {
            result += '<article id="post-309" class="post-col-6 post-bottom post-309 post type-post status-publish format-image has-post-thumbnail hentry category-inspiration post_format-post-format-image odd">'+
            '<div class="blog-mask">'+
            '<div class="blog-image">'+
            '<div class="blog-large-image">'+
            '<a href="http://biinyu.com.co/Propiedadesycapitales/detalle-noticia.php?codigo=' + data[j].id + '" title="' + data[j].titulo + '">'+
            '<img width="600" height="400" src="propiedades-noticias/admin/' + data[j].imagen + '"'+
            'alt="" srcset="https://qbootstrap.com/wp/Homeland/wp-content/uploads/2013/12/luxury_house_2-wallpaper-1920x1200-600x400.jpg 600w"'+
            'sizes="(max-width: 568px) 100vw, '+
            '(max-width: 736px) 80vw, '+
            '(max-width: 768px) 50vw, '+
            '(max-width: 1024px) 50vw, 520px" /> </a>'+
            '<a href="detalle-noticia.php?codigo=' + data[j].id + '" class="continue">Ver Más &rarr;</a>'+
            '</div>'+
            '</div>'+
            '</div>'+
            '<div class="blog-grid-desc clearfix">'+
            '<div class="blog-text">'+
            '<h4>'+
            '<a href="detalle-noticia.php?codigo=' + data[j].id + '">' + data[j].descripcion + '</a>'+
            '</h4>'+
            '</div>'+
            '<div class="blog-action">'+
            '<ul class="clearfix">'+
            '<li>'+
            '<i class="far fa-calendar-alt"></i>' + data[j].fecha + '</li>'+
            '</ul>'+
            '</div>'+
            '</div>'+
            '</article>';


        }
        $("#notices-info").append(result);


    },
    error: function(data) {
    }
});
},500);
