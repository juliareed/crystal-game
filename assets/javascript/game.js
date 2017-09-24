$(document).ready(function() {


	// crystals
	crystals = ['assets/images/red.png','assets/images/blue.png','assets/images/orange.png','assets/images/green.png'];


	// variables
	var counter = 0;
	var wins = 0;
	var losses = 0;
	$('#win').text(wins);
	$('#loss').text(losses);
	

	// <!-- FUNCTIONS -->
	newCrystals();
	newGame();

	// generate new number
	function newCrystals () {
		var numbers = []
			while(numbers.length < 4) {
			  var randomnumber = Math.ceil(Math.random()*12)
			  var found = false;
			  for (var i=0; i< numbers.length; i++) {
				if (numbers[i] == randomnumber) {
					found = true; break;
				}
			  }
			  if (!found)numbers[numbers.length] = randomnumber;
			}
		console.log(numbers);		

		// everytime a crystal is clicked, add value to score
		for (i = 0; i < numbers.length; i++) {
			var imageCrystal = $('<img>');
			imageCrystal.attr('data-num', numbers[i]);
			imageCrystal.attr('src', crystals[i]);
			imageCrystal.attr('alt', 'crystals');
			imageCrystal.addClass('crystalImage')
			$('#crystals').append(imageCrystal);
		}
	}

	// start new game, GO TIME
	function newGame() {

		// keep score
		counter = 0;
		$('#playerScore').text(counter);

		// generate number
		function randomIntFromInterval(min,max) {
		   	return Math.floor(Math.random()*(max - min + 1)+min);
			}

		// 
		var guessThisNumber = randomIntFromInterval(19, 120);

		// 
		$('.value').text(guessThisNumber);

		//when player clicks crystal
		$('.crystalImage').on('click', function() {
		    counter = counter + parseInt($(this).data('num'));
		   
		   	//track player score
		    $('#playerScore').text(counter);

		    //if player total score matches random number
		    if (counter == guessThisNumber){
		      $('#status').text('WINNER WINNER CHICKEN DINNER');
		      wins ++;
		      $('#win').text(wins);
		      console.log(wins)
		      $('#crystals').empty();
		      newCrystals();
		      newGame();

		    //if player total score exceeds random number
		    } else if ( counter > guessThisNumber){
		        $('#status').text('LOSER')
		        losses ++;
		        $('#loss').text(losses);
		        console.log(losses)
		        $('#crystals').empty();
		        newCrystals();
		        newGame();
		    }
		});
	}

});