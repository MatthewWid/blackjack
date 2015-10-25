/*
	
	This is the core JS file, it will run the game logic amongst other things

	By Matthew W.

*/

/*

TODO:

- Get favicon

- Betting logic:
	- Chips transition over when clicked
	- No amount of chips, they just add to bet when clicked
	- Remove chip if you don't have enough money to bet it

- Fix bug where infinite loop occurs when you spam hit (sometimes)

*/

function Deck() { // Constructor function for deck
	this.list = cardList; // Variable to hold list of cards
	this.count = 52; // Variable to hold the total amount of cards in the deck
	this.foundCard = false; // Boolean variable to be used later
	this.getVal = 0; // Int variable to be used later
	this.getRef = 0; // Another int variable to be used later
	var _this = this; // Hold the functions variables in another local variable to be easier accessed

	this.getCard = function() { // Constructor function method, when called, will get a card

		_this.foundCard = false; // Have we found a card to draw? no
		while (!_this.foundCard) { // If the card isn't found yet run this code
			_this.getVal = Math.floor((Math.random()*10)+1); // Get a value of a card from 1-10
			_this.getRef = Math.floor((Math.random()*_this.list[_this.getVal].length)+0); // Get a referal for a card image (aesthetic) to change the face of the value
			if (!_this.list[_this.getVal][_this.getRef].used) { // If the card that has been draw hasn't been used yet
				_this.list[_this.getVal][_this.getRef].used = true; // Mark the card as used
				_this.count -= 1; // Reduce the length of the deck
				_this.foundCard = true; // Mark the loop as having found a card to draw
				$("#deckInner").html(_this.count); // Set the number in the deck to the total amount of cards left
				return _this.list[_this.getVal][_this.getRef]; // Return the card that we drew
			}
		}

	}
}

function Player() { // Constructor function for player
	this.hand = []; // An array (list) for cards in the players hand
	this.handVal = 0; // The total value of cards in the players hand
	this.handPosX = 643; // The x position to place the hand cards in
	this.handPosY = 305; // The y position to place the hand cards in 
	this.handMax = 5; // Maximum amount of cards in hand that are allowed
	this.delay = 400; // The delay between animations
	this.canReq = true; // If a card can be requested
	this.temp = 0; // A temporary var to store a cards value (ease of use)
	var _this = this; // Store constructor functions variables in temporary local variable for easier reference

	this.drawCard = function(repeat) { // Function method to draw a card that takes one parameter

		if (_this.canReq) { // If we can request a card run this code
			_this.canReq = false; // Make it so we cannot request a card until the block ends
			if (_this.hand.length < _this.handMax) { // If the player has less than the maximum amount of cards, run this code

				_this.hand.push(deck.getCard()); // Get a card from the deck (using the deck functions .getCard() method)
				_this.handVal += _this.hand[_this.hand.length-1].val; // Increase the value of the handval variable depending on what card is drawn

				$("#playerHand"+_this.hand.length).css("display", "block"); // Make a card non-invisible so it can be placed in the players hand
				$("#playerHand"+_this.hand.length).animate({ // Begin animating a card to go into the players hand
					left: _this.handPosX, // Animate its x position to the players constructor function's x pos variable
					top: _this.handPosY // Animate its y to the players constructor function's y pos variable
				}, _this.delay, function() { // The amount of time the animation takes | When the animation ends run this code
					$("#playerHand"+_this.hand.length).attr("src", "images/cards/"+_this.hand[_this.hand.length-1].ref+".png"); // Set the cards face to the image of the card drawn
					$("#handValOutputPlayer").html(_this.handVal); // Change the number next to the players hand to equal the total value of all the players cards
					_this.canReq = true; // Make it so we can request another card, if we want
				});

				_this.handPosX += 15; // Increment the next cards x position so it doesn't go directly ontop
				_this.handPosY += 15; // Increment the next cards y position so it doesn't go directly ontop
			} else { // If the player has reached the hand limit, let them beat the dealer from a 5-card-trick
				$("#dealerBeatScreen").animate({ // Animate dealer beat screen
					opacity: 0.8 // Fade in dealer beat screen
				}, function() { // When the animation has finished
					$("#dealerBeatScreen").css("pointer-events", "auto"); // Make the screen clickable
					$("#dealerBeatInner").animate({ // Animate the screen text
						top: 150 // Make the text fly in from the top
					});
				});
			}
		}

	}

	this.reset = function() { // Functions method to reset the players hand
		$(".playerHand").attr("src", "images/cards/b2fv.png"); // Change all the players cards in hand images to the backface of a card
		$(".playerHand").animate({left: 944, top: 20}, _this.delay, function() { // Animate all the players card to go back in the deck
			$(".playerHand").css("display", "none"); // Make all the cards that have gone to the deck invisible (as if they've been shuffled back into the deck)
			$("#handValOutputPlayer").html(player.handVal).fadeIn(120); // Reset the number next to the players hands with a fade animation
		});
	}
}
function PlayerPerm() { // A constructor function I had that I planned to use to store the players money offline, not being used
	this.money = 500;
	var _this = this;

	this.save = function() {
		localStorage.setItem("blackjack_totalMoney", _this.money);
	}
}

function Dealer() { // Constructor function for the dealer
	this.hand = []; // Array (list) to hold the dealers hand cards
	this.handVal = 0; // Variable to hold the dealers total hand value
	this.handPosX = 470; // Dealers hand x position. We don't need a y position because the dealers hand is all in one line.
	this.delay = 400; // The animation time for the dealers animations
	this.canReq = true; // If we can request a card, default true
	this.temp = 0; // Temporary variable to store card values
	var _this = this; // Store constructor functions variables in a local variable to reference easier

	this.drawCard = function(show) { // Constructor function method to draw a card for the dealer, takes one parametre

		if (_this.canReq) { // If we can request a card
			_this.canReq = false; // Set it so we cannot request a card until the code has finished executing
			if (_this.hand.length < _this.handMax) {

				_this.temp = deck.getCard(); // Assign the temporary variable to be a card that we'll draw from the deck
				_this.hand.push(_this.temp); // Add the drawn card to the dealers hand array (list)
				_this.handVal += _this.hand[_this.hand.length-1].val; // Increase the dealers hand value based on the card drawn
				$("#dealerHand"+_this.hand.length).css("display", "block"); // Make one card from the deck visible
				$("#dealerHand"+_this.hand.length).animate({ // Animate the card made visible
					left: _this.handPosX, // Animate the card made visibile to go to the constructors x position var
					//top: _this.handPosY
				}, _this.delay, function() { // Set the time the animation takes | When the animation has completed run this code
					if (!show) { $("#dealerHand"+_this.hand.length).attr("src", "images/cards/"+_this.hand[_this.hand.length-1].ref+".png"); } // If the parametre is false, don't flip over the card. This is so at the start of the round the dealer draws one faceup card, and one facedown card. This was, however, never utilised.
					$("#handValOutputDealer").fadeOut(120, function() { // Update the number next to the deck to be the dealers total hand value
					  $("#handValOutputDealer").html(_this.handVal).fadeIn(120); // Update the number next to the deck to be the dealers total hand value
					});
					_this.canReq = true; // Make it so we can request another card, if we want to
				});
			} else { // If the dealer gets a 5 card trick
				$("#dealerWinScreen").animate({ // Animate the dealer win screen
					opacity: 0.8 // Fade in the win screen
				}, function() {
					$("#dealerWinScreen").css("pointer-events", "auto"); // Make the screen clickable
					$("#dealerWinInner").animate({ // Animate the text
						top: 150 // Make the text fly in from the top
					});
				});
			}

			_this.handPosX += 88; // Increment the x hand position for the next card, so it moves up
		}

	}

	this.reset = function() { // Method to reset the dealers hand

		$(".dealerHand").attr("src", "images/cards/b2fv.png"); // Change the dealers hand cards to backface (flipping them over again)
		$(".dealerHand").animate({left: 944}, _this.delay, function() { // Move all the dealers hand back to the deck
			$(".dealerHand").css("display", "none"); // Make all the dealers cards invisible, so it looks like you're shuffling them back in
			$("#deckInner").html(deck.count); // Reset the decks number that shows the total cards back to default: 52
			$("#handValOutputDealer").html(dealer.handVal).fadeIn(120); // Reset the number next to the deck to be 0 (showing the dealers hand value as 0)
		});

	}

	this.loop = function() { // Method for the dealers logic, the most complicated function in the program
		if (dealer.handVal > 21) { // If the dealer bust
			$("#bustScreenDealer").animate({ // Animate the bust screen
				opacity: 0.8 // Animate the dealer bust screen to fade in
			}, function() { // When the animation is finished, run this code
				$("#bustScreenDealer").css("pointer-events", "auto"); // Make the screen clickable, so you can't still click hit and stand buttons through the screen
				$("#bustInnerDealer").animate({ // Animate the text on the bust screen
					top: 150 // Animate the text so it flies in from the top
				});
			});
		} else if (dealer.handVal >= 17) { // If the dealers hasn't bust and the dealers hand value is more than 17 see if the dealer has beat the player or visa versa
			
			if (dealer.handVal > player.handVal) { // If the dealer beat the player

				$("#dealerWinScreen").animate({ // Animate the dealers win screen
					opacity: 0.8 // Make win scren fade in
				}, function() { // When the animation is finished call this code
					$("#dealerWinScreen").css("pointer-events", "auto"); // Make the screen clickable
					$("#dealerWinInner").animate({ // Animate the text
						top: 150 // Animate text to fly in from top
					});
				});

			} else if (player.handVal > dealer.handVal) { // If the player beat the dealer

				$("#dealerBeatScreen").animate({ // Animate in player win screen
					opacity: 0.8 // Make win screen fade in
				}, function() { // When the animation finishes run this code
					$("#dealerBeatScreen").css("pointer-events", "auto"); // Make the screen clickable
					$("#dealerBeatInner").animate({ // Animate the win screen text
						top: 150 // Make the text fly in from the top
					});
				});

			} else if (player.handVal == dealer.handVal) { // If it is a tie between the dealer and player

				$("#dealerTieScreen").animate({ // Animate the dealer tie screen
					opacity: 0.8 // Fade in the tie screen
				}, function() { // When the animation is finished, run this code
					$("#dealerTieScreen").css("pointer-events", "auto"); // Make the screen clickable so you can't click through it
					$("#dealerTieInner").animate({ // Animate the text
						top: 150 // Make the text fly in from the top
					});
				});
			}

		} else { // If the dealers hand is less than 17
			dealer.drawCard(); // Make the dealer draw a card
			setTimeout(dealer.loop, 420); // After 420 milliseconds call the dealers loop again
		}
	}
}

var deck = new Deck(); // Store the deck in a variable
var player = new Player(); // Store player data and functions in a variable
var dealer = new Dealer(); // Store dealer data and functions in a variable 
var playerStats = new PlayerPerm(); // Store player statistics (total money) and functions in a variable

function startRound() { // Function that gets called to begin a round
	dealer.drawCard(); // Make the dealer draw a card
	player.drawCard(); // Make the player draw a card
	setTimeout(function() { // After 420 milliseconds call this code, after the first players card is drawn
		player.drawCard(); // Make the player draw a card
	}, 420); // Setting delay to 420 milliseconds
	setTimeout(function() { // After 820 milliseconds call this code, after the player and dealer are finished drawing cards
		$(".button").slideDown(); // Animate the buttons in so they become visibile
	}, 820); // Setting delay to 820 milliseconds
}

function resetAll() { // Function to reset the round

	$("#bustInner").animate({
		top: -250 // Make the text fly out
	}, function() { // When the animation is finished run this code
		$("#bustScreen").animate({
			opacity: 0 // Animate the screen so it fades out
		});
	});
	$("#bustScreen").css("pointer-events", "none"); // Make the screen non-clickable anymore

	$("#bustInnerDealer").animate({
		top: -250 // Make the text fly out
	}, function() { // When the animation is finished run this code
		$("#bustScreenDealer").animate({
			opacity: 0 // Animate the screen so it fades out
		});
	});
	$("#bustScreenDealer").css("pointer-events", "none"); // Make the screen non-clickable anymore

	$("#dealerBeatInner").animate({
		top: -250 // Make the text fly out
	}, function() { // When the animation is finished run this code
		$("#dealerBeatScreen").animate({
			opacity: 0 // Animate the screen so it fades out
		});
	});
	$("#dealerBeatScreen").css("pointer-events", "none"); // Make the screen non-clickable anymore

	$("#dealerWinInner").animate({
		top: -250 // Make the text fly out
	}, function() { // When the animation is finished run this code
		$("#dealerWinScreen").animate({
			opacity: 0 // Animate the screen so it fades out
		});
	});
	$("#dealerWinScreen").css("pointer-events", "none"); // Make the screen non-clickable anymore

	$("#dealerTieInner").animate({
		top: -250 // Make the text fly out
	}, function() { // When the animation is finished run this code
		$("#dealerTieScreen").animate({
			opacity: 0 // Animate the screen so it fades out
		});
	});
	$("#dealerTieScreen").css("pointer-events", "none"); // Make the screen non-clickable anymore

	dealer.reset(); // Call the dealers reset function/method
	player.reset(); // Call the players reset function/method

	deck = new Deck(); // Create a new deck
	player = new Player(); // Create a new player
	dealer = new Dealer(); // Create a new dealer

	setTimeout(function() { // After 420 milliseconds run this code
		$(".button").slideUp(); // Animate the buttons to slide up and be invisible again
		setTimeout(function() { // Atfer 420 milliseconds run this code
			startRound(); // Start a new round
		}, 420); // Setting delay
	}, 420); // Setting delay
}



$("#hitButton").click(function() { // When the hitbutton is clicked
	player.drawCard(); // Draw the player a card
	setTimeout(function() { // After 420 milliseconds
		if (player.handVal > 21) { // If the player bust
			$("#bustScreen").animate({ // Animate a bust screen
				opacity: 0.8 // Make the bust screen fade in
			}, function() { // When the animation is finished, run this code
				$("#bustScreen").css("pointer-events", "auto"); // Make the bust screen visible
				$("#bustInner").animate({ // Animate the text
					top: 150 // Animate the text to fly in from the top
				});
			});
		}
	}, 420); // Setting delay of 420 milliseconds
});

$("#standButton").click(function() { // When the stand button is clicked
	$(".button").slideUp(); // Slide up the buttons so that they are invisible again
	dealer.loop(); // Start the dealer loop
});

$(".coverScreen").click(function() { // When a screen that appears (bust, dealer win, dealer beat, etc.) and is clicked, run this code
	resetAll(); // Call the reset function to start a new round
});

$(document).ready(function() { // When the page is finished loading
	startRound(); // Start a new round
});