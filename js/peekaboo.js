
//PEEKABOO Script

function getRandomInt(min, max) {
	  		return Math.floor(Math.random() * (max - min)) + min;
		}

		d3.select('#post-2').append('svg')
			.attr('id', 'svg1')
			.attr('width', "100%")
			.attr('height', "100%")
			.attr('position', "absolute")
			.attr('top', "0")
			.attr('left', "0")
			.attr('z-index', "0");

		var canvasWidth = document.getElementById('svg1').clientWidth;	
		var canvasHeight = document.getElementById('svg1').clientHeight;

		//DRAW THE CIRCLES
		var iterations = canvasWidth/50;
		var ballHeight = 0;
		for (var i = 0; i < 20; i++) {
			var first = 0;
			for (var j = 0; j < iterations; j++) {
				d3.select('#svg1').append('circle').attr( {
					r: 30, cx: first, cy: ballHeight
				})
				.attr('fill', function(d) {
					r = getRandomInt(0, 255);
					g = getRandomInt(0, 255);
					b = getRandomInt(0, 255);
					return "rgb(" + r + ", " + g + ", " + b + ")";
				});
				console.log("im about to add 10")
				first += 60;
			}
			ballHeight += 40;
		}

		 d3.selectAll('circle').on('mouseover', function () {
		 		r = getRandomInt(0, 255);
				g = getRandomInt(0, 255);
				b = getRandomInt(0, 255);
		 		d3.select(this)
		 			.transition().duration(2500).attr('cy', 1600)
		 			.transition().duration(500).attr('fill', function(d) {
					r = getRandomInt(0, 255);
					g = getRandomInt(0, 255);
					b = getRandomInt(0, 255);
					return "rgb(" + r + ", " + g + ", " + b + ")";
					});
		 		});

//REFRESH ELEMENT
$(document).ready(function(){
        $(function(){
        $('#ideal_form').submit(function(e){
                e.preventDefault();
                var form = $(this);
                var post_url = form.attr('action');
                var post_data = form.serialize();
                $('#loader3', form).html('<img src="../../images/ajax-loader.gif" />       Please wait...');
                $.ajax({
                    type: 'POST',
                    url: post_url, 
                    data: post_data,
                    success: function(msg) {
                        $(form).fadeOut(800, function(){
                            form.html(msg).fadeIn().delay(2000);

                        });
                    }
                });
            });
        });
         });