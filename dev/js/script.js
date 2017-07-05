jQuery.noConflict();

(function($){

	'use strict';

	/*
	* document ready function
	*/
	$(function() {

		var starColor = '#279257';

		$('.parallax-window').parallax();

		$('.slick').slick({
			  dots: false,
			  infinite: false,
			  speed: 300,
			   slidesToShow:5,
			  slidesToScroll: 1,
			  responsive: [
			    {
			      breakpoint: 992,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1
			      }
			    }
			  ]
			});

			$("#ex2").slider({
				tooltip: 'always'
			});

			$("#ex3").slider({
				tooltip: 'always'
			});

			$('.rating').each(function(){
				var val = $(this).data('value');
				if(val && val>=0 && val<=5){
					$(this).rateYo({
						rating: val,
						starWidth: '12px',
						ratedFill: starColor,
						normalFill: "#dddddd",
						readOnly: true
					});
				}
			});
            
		
			$('#slick2').slick({
			//   infinite: false,
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000
			});

			
		
                                //   $('#menu').slicknav({
								// 		prependTo:'#demo1'
					      		// 	});


			$('#lin1').click(function(){
                 $("#sec1").show();
				 $("#sec2").hide();
				 $("#sec3").hide();
				 $("#lin1").css({'text-decoration': 'underline','color':'black','font-weight': 'bold'});
				 $('#lin2').addClass('lin');
				 $('#lin3').addClass('lin');
				 $("#lin2").css({'text-decoration': 'none'});
				 $("#lin3").css({'text-decoration': 'none'});
				


			});
			$("#ada").click(function(){
                $(".requ1").show();
				$("#ada1").show();
				$("#ada").hide();
			});
			$("#ada1").click(function(){
                $(".requ1").hide();
				$("#ada1").hide();
				$("#ada").show();
			});
   



			//  $("#add-room-type").click(function () {

			// 	   var counter = 2;

			// 			if(counter>10){
			// 					alert("Only 10 textboxes allow");
			// 					return false;
			// 			}

			// 			var newTextBoxDiv = $(document.createElement('div'))
			// 				.attr("id", 'TextBoxDiv' + counter);

			// 			newTextBoxDiv.after().html('<label>Textbox #'+ counter + ' : </label>' +
			// 				'<input type="text" name="textbox' + counter +
			// 				'" id="textbox' + counter + '" value="" >');

			// 			newTextBoxDiv.appendTo("#TextBoxesGroup");


			// 			counter++;
			// 			});
			
			$('#lin2').click(function(){
                $("#sec2").show();
				$("#sec1").hide();
				$("#sec3").hide();
                $("#lin2").css({'text-decoration': 'underline','color':'black','font-weight': 'bold'});
				 $('#lin1').addClass('lin');
				 $('#lin3').addClass('lin');
				 $("#lin1").css({ 'text-decoration':'none'});
				 $("#lin3").css({'text-decoration':'none'});
			});
			$('#lin3').click(function(){
                $("#sec3").show();
				$("#sec1").hide();
				$("#sec2").hide();
				$("#lin3").css({'text-decoration': 'underline','color':'black','font-weight': 'bold'});
			     $('#lin2').addClass('lin');
				 $('#lin1').addClass('lin');
				 $("#lin2").css({'text-decoration': 'none'});
				

			});
			
			$('#yes').click(function(){
				$('#food').show("slow");
			});
			$('#no').click(function(){
				$('#food').hide("slow");
				$('#per').hide("slow");
			});

			$('#guepay').click(function(){
				$('#per').show("slow");
			});
			$('#includ').click(function(){
				$('#per').hide("slow");
			});
			// calenter
			$('.date').datepicker();
			

			
			// end

					$("#analytics").click(function(){
						$("#anal-sun").toggle();
						$("#finance-sub").hide();
						$("#rate-sub").hide();
						$("#property-sub").hide();
						$("#opportunities-sub").hide();
						$("#guest-sub").hide();

					});
			   
			     $("#finance").click(function(){
                        $("#finance-sub").toggle();
						$("#anal-sun").hide();
						$("#rate-sub").hide();
						$("#property-sub").hide();
						$("#opportunities-sub").hide();
						$("#guest-sub").hide();							 
						 
			   });
			     $("#rate").click(function(){
                        $("#finance-sub").hide();
						$("#anal-sun").hide();
						$("#rate-sub").toggle();
						$("#property-sub").hide();
						$("#opportunities-sub").hide();
						$("#guest-sub").hide();						 
			   });
			      $("#property").click(function(){
                        $("#finance-sub").hide();
						$("#anal-sun").hide();
						$("#rate-sub").hide();
						$("#property-sub").toggle();
						$("#opportunities-sub").hide();
						$("#guest-sub").hide();						 
			   });
			      $("#opportunities").click(function(){
                        $("#finance-sub").hide();
						$("#anal-sun").hide();
						$("#rate-sub").hide();
						$("#property-sub").hide();
						$("#opportunities-sub").toggle()
						$("#guest-sub").hide();						 
			   });
			      $("#guest").click(function(){
                        $("#finance-sub").hide();
						$("#anal-sun").hide();
						$("#rate-sub").hide();
						$("#property-sub").hide();
						$("#opportunities-sub").hide()
					    $("#guest-sub").toggle();						 
			   });


			   $(".Tennis").click(function(){
				  
                 $("#TennisEquipment").toggle();
				 
			   });
			    $('#Tennis').click(function() {
					if ($(this).is(':checked')) {
						 $("#TennisEquipment").toggle();
					}
				});

				
					
					$("#userimg1").change(function(){
						userimg(this);
						
					});
				// 		$("#hotelimg").change(function(){

				// 			var wrapper = $('.hoimgad'); 
				//             var fieldHTML = '<div class="col-sm-6 col-md-4"><div class="thumbnail"><img src="images/hotels/hotel-2.jpg" alt="hotel">'+
				// 			+'<div class="caption text-muted-ali"><a href=""> Edit<i class="fa fa-pencil-square-o" aria-hidden="true"></i></a></div></div></div> ';
			    // $(wrapper).append(fieldHTML); 
						
						
				// 	});
					$("#hotelimg").change(function(){						
						hotelimg(this);						
					});
					$("#hotelhome").change(function(){
                         hotelhome(this);
			         });
					 $("#roomhome").change(function(){
                         roomhome(this);
			         });

				
						

					$('#american').click(function(){
							$('#americancheck1').addClass("glyphicon glyphicon-ok");
							$("#americanhide").css({   ' border':' 1px solid #279257','background' : '#b5ea96','color':'black'});
							$("#americanhide").show();
							$('#american').hide();
					});
					$('#americanhide').click(function(){
								$('#americancheck1').removeClass("glyphicon glyphicon-ok");
								$("#americanhide").hide();
								$('#american').show();
					});
					$('#asia').click(function(){
						$('#asiacheck1').addClass("glyphicon glyphicon-ok");
					});

					$("#transport").change(function(){
						var seats = $("#transport").val();
					transport(seats);
				
		         	});
			
            $("#location").click(function(){
               $("#Locaop").slideToggle("slow");
			    $("#showstar").hide();	
			   $("#showcut").hide();
			   $("#showeco").hide();
			});
			$("#star").click(function(){
               $("#Locaop").hide();
			   $("#showstar").slideToggle("slow");				   	
			   $("#showcut").hide();
			   $("#showeco").hide();		  
			});

			$("#customer").click(function(){
               $("#Locaop").hide();
			   $("#showstar").hide();	
			   $("#showcut").slideToggle("slow");	
			    $("#showeco").hide();		  
			});
			$("#economy").click(function(){
               $("#Locaop").hide();
			   $("#showstar").hide();	
			   $("#showcut").hide();
			   $("#showeco").slideToggle("slow");	

			});

			$('#hideTR').click(function(){
				$('#showTR').show();
				$('#hideTR').hide();
			}); 
			$('#cancel').click(function(){
                $('#showTR').hide();
				$('#hideTR').show();
			});    

			$('.addroom2').click(function(){
                 $('#addnewroom').show();
				 $('#roommain').hide();
			}); 
			$('#editroom').click(function(){
                 $('#roomeditde').show();
				 $('#roommain').hide();
			});

			$('.addhotel2').click(function(){
                 $('#addnewhotel').show();
				 $('#hotelmain').hide();
			});   
			$("#edithotel").click(function(){
                $("#edithotelshow").show();
				$('#hotelmain').hide();
			});    



			    //+++++++
			$("#langu").change(function(){
				
				var val1 = $("#langu").val();
				var wrapper = $('.Spoken'); 
				var fieldHTML = '<input type="text" name='+ val1 +' value='+ val1 +' id="" class="form-control"/> ';
                  
			    $(wrapper).append(fieldHTML); 
				$("#lan").show();

      
			});
			

     

				// +++++ 

		
			$('.rating-lg').each(function(){
				var val = $(this).data('value');
				var readonly = true;
				if($(this).data('enableEdit')){
					readonly = false;
				}
				if(val && val>=0 && val<=5){
					$(this).rateYo({
						rating: val,
						starWidth: '24px',
						ratedFill: starColor,
						normalFill: "#dddddd",
						readOnly: readonly
					});
				}
			});

			$('input').iCheck({
				checkboxClass: 'icheckbox_square-green',
				radioClass: 'iradio_square-green'
			});

			$('.filter-toggle').on('click', function(){
				$('.filter-cont-wrap').toggleClass('hidden-xs');
			});

			$('#imageGallery').on('click', function(e){
				event = e || window.event;
			    var target = event.target || event.srcElement,
			        link = target.src ? target.parentNode : target,
			        options = {
			        	index: link, 
			        	event: event,
			        	continuous: false,
			        	toggleControlsOnSlideClick: false
			        },
			        links = this.getElementsByTagName('a');
			    blueimp.Gallery(links, options);
			});

			

			if(!isMobileDevice()){				
				$("#stickyForm").sticky({topSpacing:0});
				$("#stickyNav").sticky({topSpacing:0});
				$("#stickybut").sticky({bottomSpacing:0});

				$('#stickyNav').onePageNav({
					currentClass: 'active',
					changeHash: false,
					scrollSpeed: 750,
				});				
			}
						

		});		


 function hotelimg(input) {
						if (input.files && input.files[0]) {
							var reader = new FileReader();
							
							reader.onload = function (e) {

									var wrapper = $('.hoimgad'); 
				            var fieldHTML = ' <div class="col-sm-6 col-md-4"><div class=""><img src="'+ e.target.result +'"  id="hotel" alt="hotel" class="hotimg"><div class="caption "><a href=""> Deletet<i class="fa fa-pencil-square-o" aria-hidden="true"></i></a></div><div></div> ';
			                 $(wrapper).append(fieldHTML); 
								// $('#hotel').attr('src', e.target.result);
							
							}
							
							reader.readAsDataURL(input.files[0]);
						}
					}
					// Hotel thum Photo
					function hotelhome(input){
						if(input.files && input.files[0]){
							var reader = new FileReader();
							reader.onload = function(e){
								$("#hotelhomeimg").attr('src',e.target.result)
							}
							reader.readAsDataURL(input.files[0]);
						}
					} 
					// END
					// Room thum Photo
					function roomhome(input){
						if(input.files && input.files[0]){
							var reader = new FileReader();
							reader.onload = function(e){
								$("#roomhomeimg").attr('src',e.target.result)
							}
							reader.readAsDataURL(input.files[0]);
						}
					} 
					// END
					 function userimg(input) {
						if (input.files && input.files[0]) {
							var reader = new FileReader();
							
							reader.onload = function (e) {
								$('#user').attr('src', e.target.result);
							
							}
							
							reader.readAsDataURL(input.files[0]);
						}
					}
function transport(seats){
switch (seats) {
    case 'Airport shuttle (arranged by property)':
        	       $("#to").show();
					$("#departs").show();
					$("#line").hide();
					$('#highway').hide();
					$('#junction').hide();

    break;
    case 'Airport shuttle (public)':
                    $("#to").show();
					$("#departs").show();
			     	$("#line").hide();
					$('#highway').hide();
					$('#junction').hide();
    break;
    case 'Bus':
                    $("#to").show();
					$("#departs").show();
					$("#line").show();				
					$('#highway').hide();
					$('#junction').hide();
    break;
    case 'Car':
                	$("#to").show();
					$("#departs").hide();
					$("#line").hide();				
					$('#highway').show();
					$('#junction').show();
    break;
    case 'Subway/Metro':
                    $("#to").show();
					$("#departs").show();
					$("#line").show();				
					$('#highway').hide();
					$('#junction').hide();
   break;
   case 'taxi':
                    $("#othe").hide();
					$("#to").show();
					$("#departs").hide();
					$("#line").hide();				
					$('#highway').hide();
					$('#junction').hide();
 break;
 case'Train':
                    $("#othe").hide();
					$("#to").show();
					$("#departs").show();
					$("#line").hide();				
					$('#highway').hide();
					$('#junction').hide();
 break;
  case'Tram':
                    $("#othe").hide();
					$("#to").show();
					$("#departs").show();
					$("#line").show();				
					$('#highway').hide();
					$('#junction').hide();
 break;
 case'Walking':
                    $("#othe").hide();
					$("#to").show();
					$("#departs").hide();
					$("#line").hide();				
					$('#highway').hide();
					$('#junction').hide();
 break;

  default:
                    $("#othe").hide();
					$("#to").hide();
					$("#departs").hide();
					$("#line").hide();				
					$('#highway').hide();
					$('#junction').hide();
}
}
}(jQuery));