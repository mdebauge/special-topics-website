
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
// retrieve the element
typeTrigger = document.getElementById("type_trigger");
helloTyper = document.getElementById("hello");
line2Typer = document.getElementById("line2_span");
line3Typer = document.getElementById("line3_span");
line2Hide = document.getElementById("line2");
line3Hide = document.getElementById("line3");


// reset the transition by...
typeTrigger.addEventListener("click", function(e) {
  e.preventDefault;
  
  // -> removing the class
  helloTyper.classList.remove("hello_typer");
  line2Typer.classList.remove("line2_typer");
  line3Typer.classList.remove("line3_typer");
  line2Hide.classList.remove("hide_line2");
  line3Hide.classList.remove("hide_line3");
  
  // -> triggering reflow /* The actual magic */
  // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
  helloTyper.offsetWidth = helloTyper.offsetWidth;
  line2Typer.offsetWidth = line2Typer.offsetWidth;
  line3Typer.offsetWidth = line3Typer.offsetWidth;
  line2Hide.offsetWidth = line2Hide.offsetWidth;
  line3Hide.offsetWidth = line3Hide.offsetWidth;
  
  // -> and re-adding the class
  helloTyper.classList.add("hello_typer");
  line2Typer.classList.add("line2_typer");
  line3Typer.classList.add("line3_typer");
  line2Hide.classList.add("hide_line2");
  line3Hide.classList.add("hide_line3");
}, false);



