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
			  slidesToShow:6,
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


		

		// 	$("#Tennis1").click(function () {
        //     if ($('#Tennis').is(":checked")) {
        //         $("#TennisEquipment").show();
        //     } else {
        //         $("#TennisEquipment").hide();
        //     }
        // });

			$('input[type=checkbox]').click(function(){
				alert('test');
				$('#TennisEquipment').show("slow");
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
               $("#Locaop").show();
			    $("#showstar").hide();	
			   $("#showcut").hide();
			   $("#showeco").hide();
			});
			$("#star").click(function(){
               $("#Locaop").hide();
			   $("#showstar").show();				   	
			   $("#showcut").hide();
			   $("#showeco").hide();		  
			});

			$("#customer").click(function(){
               $("#Locaop").hide();
			   $("#showstar").hide();	
			   $("#showcut").show();
			    $("#showeco").hide();		  
			});
			$("#economy").click(function(){
               $("#Locaop").hide();
			   $("#showstar").hide();	
			   $("#showcut").hide();
			   $("#showeco").show();	

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
                 $('#addnewroom').show('');
				 $('#roommain').hide('');
			}); 
			$('#editroom').click(function(){
                 $('#hoteleditde').show('');
				 $('#hotelmain').hide('');
			});

			$('.addhotel2').click(function(){
                 $('#addnewhotel').show('');
				 $('#hotelmain').hide('');
			});       



			    //+++++++
			$("#langu").change(function(){
				
				var val1 = $("#langu").val();
				var wrapper = $('.Spoken'); 
				var fieldHTML = '<p><input type="text" name='+ val1 +' value='+ val1 +' readonly="readonly" id="" class="form-control"/> </p>';
                  
			    $(wrapper).append(fieldHTML); 
				$("#lan").show();

      
			})
     

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