/*
	
	This is the core JS file, it will run the game logic amongst other things

	By Matthew W.

*/

function Deck() {
	this.list = cardList;
	this.count = 52;
	this.foundCard = false;
	this.getVal = 0;
	this.getRef = 0;
	var _this = this;

	this.getCard = function() {

		_this.foundCard = false;
		while (!_this.foundCard) {
			_this.getVal = Math.floor((Math.random()*10)+1);
			_this.getRef = Math.floor((Math.random()*_this.list[_this.getVal].length)+0);
			if (!_this.list[_this.getVal][_this.getRef].used) {
				_this.list[_this.getVal][_this.getRef].used = true;
				_this.count -= 1;
				_this.foundCard = true;
				$("#deckInner").html(_this.count);
				return _this.list[_this.getVal][_this.getRef];
			}
		}

	}
}

function Player() {
	this.hand = [];
	this.handVal = 0;
	this.handPosX = 643;
	this.handPosY = 305;
	this.handMax = 5;
	this.delay = 400;
	this.canReq = true;
	this.temp = 0;
	var _this = this;

	this.drawCard = function(repeat) {

		if (_this.canReq) {
			_this.canReq = false;
			if (_this.hand.length < _this.handMax) {

				_this.hand.push(deck.getCard());
				_this.handVal += _this.hand[_this.hand.length-1].val;

				$("#playerHand"+_this.hand.length).css("display", "block");
				$("#playerHand"+_this.hand.length).animate({
					left: _this.handPosX,
					top: _this.handPosY
				}, _this.delay, function() {
					$("#playerHand"+_this.hand.length).attr("src", "images/cards/"+_this.hand[_this.hand.length-1].ref+".png");
					$("#handValOutputPlayer").html(_this.handVal);
					_this.canReq = true;
				});

				_this.handPosX += 15;
				_this.handPosY += 15;
			}
		}

	}

	this.reset = function() {
		$(".playerHand").attr("src", "images/cards/b2fv.png");
		$(".playerHand").animate({left: 944, top: 20}, _this.delay, function() {
			$(".playerHand").css("display", "none");
			$("#handValOutputPlayer").html(player.handVal).fadeIn(120);
		});
	}
}
function PlayerPerm() {
	this.money = 500;
	this.bet = 500;
}

function Dealer() {
	this.hand = [];
	this.handVal = 0;
	this.handPosX = 470;
	this.delay = 400;
	this.canReq = true;
	this.temp = 0;
	var _this = this;

	this.drawCard = function(show) {

		if (_this.canReq) {
			_this.canReq = false;

			_this.temp = deck.getCard();
			_this.hand.push(_this.temp);
			_this.handVal += _this.hand[_this.hand.length-1].val;
			$("#dealerHand"+_this.hand.length).css("display", "block");
			$("#dealerHand"+_this.hand.length).animate({
				left: _this.handPosX,
				//top: _this.handPosY
			}, _this.delay, function() {
				if (!show) { $("#dealerHand"+_this.hand.length).attr("src", "images/cards/"+_this.hand[_this.hand.length-1].ref+".png"); }
				$("#handValOutputDealer").fadeOut(120, function() {
				  $("#handValOutputDealer").html(_this.handVal).fadeIn(120);
				});
				_this.canReq = true;
			});

			_this.handPosX += 88;
		}

	}

	this.reset = function() {

		$(".dealerHand").attr("src", "images/cards/b2fv.png");
		$(".dealerHand").animate({left: 944}, _this.delay, function() {
			$(".dealerHand").css("display", "none");
			$("#deckInner").html(deck.count);
			$("#handValOutputDealer").html(dealer.handVal).fadeIn(120);
		});

	}

	this.loop = function() {
		if (dealer.handVal > 21) {
			$("#bustScreenDealer").animate({
				opacity: 0.8
			}, function() {
				$("#bustScreenDealer").css("pointer-events", "auto");
				$("#bustInnerDealer").animate({
					top: 150
				});
			});
		} else if (dealer.handVal >= 17) {
			
			if (dealer.handVal > player.handVal) {

				$("#dealerWinScreen").animate({
					opacity: 0.8
				}, function() {
					$("#dealerWinScreen").css("pointer-events", "auto");
					$("#dealerWinInner").animate({
						top: 150
					});
				});

			} else if (player.handVal > dealer.handVal) {

				$("#dealerBeatScreen").animate({
					opacity: 0.8
				}, function() {
					$("#dealerBeatScreen").css("pointer-events", "auto");
					$("#dealerBeatInner").animate({
						top: 150
					});
				});

			} else if (player.handVal == dealer.handVal) {

				$("#dealerTieScreen").animate({
					opacity: 0.8
				}, function() {
					$("#dealerTieScreen").css("pointer-events", "auto");
					$("#dealerTieInner").animate({
						top: 150
					});
				});
			}

		} else {
			dealer.drawCard();
			setTimeout(dealer.loop, 420);
		}
	}
}

var deck = new Deck();
var player = new Player();
var dealer = new Dealer();

function startRound() {
	dealer.drawCard();
	player.drawCard();
	setTimeout(function() {
		player.drawCard();
	}, 420);
	setTimeout(function() {
		$(".button").slideDown();
	}, 820);
}

function resetAll() {

	$("#bustInner").animate({
		top: -250
	}, function() {
		$("#bustScreen").animate({
			opacity: 0
		});
	});
	$("#bustScreen").css("pointer-events", "none");

	$("#bustInnerDealer").animate({
		top: -250
	}, function() {
		$("#bustScreenDealer").animate({
			opacity: 0
		});
	});
	$("#bustScreenDealer").css("pointer-events", "none");

	$("#dealerBeatInner").animate({
		top: -250
	}, function() {
		$("#dealerBeatScreen").animate({
			opacity: 0
		});
	});
	$("#dealerBeatScreen").css("pointer-events", "none");

	$("#dealerWinInner").animate({
		top: -250
	}, function() {
		$("#dealerWinScreen").animate({
			opacity: 0
		});
	});
	$("#dealerWinScreen").css("pointer-events", "none");

	$("#dealerTieInner").animate({
		top: -250
	}, function() {
		$("#dealerTieScreen").animate({
			opacity: 0
		});
	});
	$("#dealerTieScreen").css("pointer-events", "none");

	dealer.reset();
	player.reset();

	deck = new Deck();
	player = new Player();
	dealer = new Dealer();

	setTimeout(function() {
		$(".button").slideUp();
		setTimeout(function() {
			startRound();
		}, 420)
	}, 420);
}



$("#hitButton").click(function() {
	player.drawCard();
	setTimeout(function() {
		if (player.handVal > 21) {
			$("#bustScreen").animate({
				opacity: 0.8
			}, function() {
				$("#bustScreen").css("pointer-events", "auto");
				$("#bustInner").animate({
					top: 150
				});
			});
		}
	}, 420);
});

$("#standButton").click(function() {
	$(".button").slideUp();
	dealer.loop();
});

$(".coverScreen").click(function() {
	resetAll();
});

$(document).ready(function() {
	startRound();
});