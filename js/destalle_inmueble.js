
		localStorage.setItem("url", "URLsearch");



		var latitud = 0;
		var longitud = 0;
		$.ajax({
			url: "http://www.simi-api.com/ApiSimiweb/response/v2/inmueble/codInmueble/" + codeInm + "",
			async: true,
			type: "GET",
			dataType: "json",
			beforeSend: function (xhr) {
				xhr.setRequestHeader(
					"Authorization",
					'Basic ' + btoa('Authorization:iUBlBj0QwQFXgN3xtmHQEdMbH4PZg3ULB3vdYlN5-878')
				);
			},
			success: function (data) {

				console.log(data)

				if (data.msn == "Inmueble NO Disponible") {
					openModal();
					return;
				}
				var j = 1;
				var carrousel = '';
				if (data.fotos == undefined) {
					carrousel += '<div class="carousel-item ">' +
						'<img class="d-block w-100" src="../assets/img/no_image.png" alt="First slide">' +
						'</div>';
				} else if (data.fotos.length == 1) {
					carrousel += '<div class="carousel-item active">' +
						'<img class="d-block w-100" src="' + data.fotos[0].foto + '">' +
						'</div>';
				} else {

					for (var y = 1; y < Object.keys(data.fotos).length - 1; y++) {
						carrousel += '<div class="carousel-item ">' +
							'<img class="d-block w-100" src="' + data.fotos[y].foto + '">' +
							'</div>';
					}
				}


				window.localStorage.setItem("codigo", data.idInm);
				window.localStorage.setItem("gestion", data.Gestion);
				$("#ciudad").append(data.ciudad);
				$(".precio").append("$ " + data.precio);
				$(".ubicacion").append(" " + data.barrio + ", " + data.ciudad);
				$(".alcobas").append(data.alcobas);
				$(".banios").append(data.banos);
				$(".garajes").append(data.garaje);
				$(".area").append(data.AreaConstruida + " mts<sup>2</sup>");
				$(".code").append(data.idInm);
				$(".estrato").append(data.Estrato);
				$(".administracion").append(data.Administracion);
				$(".venta").append("$ " + data.ValorVenta);
				$("#tipos").append(data.Tipo_Inmueble + " En " + data.Gestion);
				$(".gestion").html('<i class="fa fa-home"></i> ' + data.Gestion + '');


				var j = 1;
				var carrousel = '';
				if (data.fotos == undefined) {
					carrousel += '<div class="carousel-item active">' +
						'<img class="d-block w-100"  style="height: 500px;" src="../assets/img/top-footer-bg.jpg" alt="First slide">' +
						'</div>';
				} else {
					carrousel += '<div class="carousel-item active">' +
						'<img class="d-block w-100"  style="height: 500px;" src="' + data.fotos[0].foto + '" >' +
						'</div>';

					for (var y = 1; y < Object.keys(data.fotos).length - 1; y++) {
						if (data.fotos[y].foto != undefined) {
							carrousel += '<div class="carousel-item ">' +
								'<img class="d-block w-100"  style="height: 500px;" src="' + data.fotos[y].foto + '">' +
								'</div>';
							j++;
						}
					}
				}

				$(".carousel-inner").html(carrousel);

				var e = 1;
				var carrousel = '';
				if (data.fotos == undefined) {
					carrousel += '<li data-target="#carousel-thumb" data-slide-to="0" class="d-block w-100"> <img class="d-block w-100" src="../assets/img/top-footer-bg.jpg" class="img-fluid"></li>';
				} else {
					carrousel += '<li data-target="#carousel-thumb" data-slide-to="1" class="d-block w-100"> <img class="d-block w-100" src="' + data.fotos[0].foto + '"></li>';

					for (var e = 1; e < Object.keys(data.fotos).length - 1; e++) {
						if (data.fotos[e].foto != undefined) {
							carrousel += '<li data-target="#carousel-thumb" data-slide-to="2" class="d-block w-100">'+
							 '<img class="d-block w-100" src="' + data.fotos[e].foto + '" class="img-fluid">'+
							 '</li>';
							e++;
						}
					}
				}

				$(".carousel-indicators").html(carrousel);


				$(".tipo").append('<a title="' + data.Tipo_Inmueble + '">' + data.Tipo_Inmueble + '</a>');
				$(".video").append(data.video);
				var res = '';
				if ((data.caracteristicasExternas != undefined)) {
					for (var x = 0; x < Object.keys(data.caracteristicasExternas).length; x++) {
						res += '<li class="col-sm-6 col-lg-4 active">' + data.caracteristicasExternas[x].Descripcion +
							'</li>';
					}
				}

				if (Object.keys(data.caracteristicasExternas).length == 0) {
					res += '<li><i class="jfont"></i>Garaje: ' + data.garaje + '</li>';
				}
				var res1 = '';

				if (data.caracteristicasInternas != undefined || Object.keys(data.caracteristicasInternas).length > 0) {
					for (var x = 0; x < Object.keys(data.caracteristicasInternas).length; x++) {
						res1 += '<ul class="features-box clearfix"><li class="col-sm-6 col-lg-4 active">' +
							data.caracteristicasInternas[x].Descripcion + '</li></ul>';


					}
				}
				$("#descripcion").text(data.descripcionlarga);
				$("#details-1").append(res);
				$("#details-2").append(res1);

				var detallea = '';
				if ((data.asesor[0] == undefined)) {
					detallea = '<p class="p1" ><a href="mailto:' + data.inmobiliaria.correo +
						'" target="_blank" ><i class="fa fa-envelope"></i> ' + data.inmobiliaria.correo + '</p></a>' +
						'<p class="p1" ><a href="tel:' + data.inmobiliaria.telefono + '" target="_blank"><i class="fa fa-phone"></i> ' +
						data.inmobiliaria.telefono + '</p></a>';
				} else {
					detallea += '<p class="p1" >' + data.asesor[0].ntercero + '</p>' +
						'<p class="p1" ><a href="mailto:' + data.asesor[0].correo +
						'" target="_blank"  ><i class="fa fa-envelope" ></i> ' + data.asesor[0].correo + '</p></a>' +
						'<p class="p1" ><a href="tel:' + data.asesor[0].celular + '" target="_blank"  ><i class="fa fa-phone" ></i> ' +
						data.asesor[0].celular + '</p></a>';
				}

				$(".detalle-asesor").append(detallea);

				latitud = data.latitud;
				longitud = data.longitud;
				if (typeof (Storage) !== "undefined") {
					window.localStorage.setItem("codigo", data.idInm)

					window.localStorage.setItem("gestion", data.Tipo_Inmueble)
					localStorage.setItem("latitud", latitud);
					localStorage.setItem("longitud", longitud);

				} else {
					document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
				}

				initMap(latitud, longitud);
			},
			error: function (data) {
				console.log("Fail");
			}
		});

		function initMap(latitud, longitud) {
			var uluru = {
				lat: parseFloat(latitud),
				lng: parseFloat(longitud)
			};
			var map = new google.maps.Map(document.getElementById('map'), {
				zoom: 17,
				center: uluru
			});
			var marker = new google.maps.Marker({
				position: uluru,
				map: map
			});
		}

		function openModal() {
			$("body").append('<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
				'<div class="modal-dialog" role="document">' +
				'<div class="modal-content">' +
				'<div class="modal-header">' +
				'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>' +
				'<h4 class="modal-title" id="myModalLabel">Descripción del inmueble</h4>' +
				'</div>' +
				'<div class="modal-body">' +
				'El inmueble no existe' +
				'</div>' +
				'<div class="modal-footer">' +
				'<button type="button" class="btn btn-default" data-dismiss="modal" onclick="redirect()">Cerrar</button>' +
				'</div>' +
				'</div>' +
				'</div>' +
				'</div>');

			$("#myModal").modal('show');
			setTimeout(() => {
				redirect();
			}, 2000);
		}

		function redirect() {
			window.history.back();
		}
	