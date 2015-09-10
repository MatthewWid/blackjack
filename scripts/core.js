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

		console.log("getVal: "+_this.getVal);
		console.log(_this.list.length);

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
	this.delay = 400;
	this.canReq = true;
	this.temp = 0;
	var _this = this;

	this.drawCard = function(show) {

		if (_this.canReq) {
			_this.canReq = false;
			if (_this.hand.length < 5) {

				_this.temp = deck.getCard();
				_this.hand.push(_this.temp);
				_this.handVal += _this.hand[_this.hand.length-1].val;

				$("#playerHand"+_this.hand.length).css("display", "block");
				$("#playerHand"+_this.hand.length).animate({
					left: _this.handPosX,
					top: _this.handPosY
				}, _this.delay, function() {
					if (!show) { $("#playerHand"+_this.hand.length).attr("src", "images/cards/"+_this.hand[_this.hand.length-1].ref+".png"); }
					$("#handValOutputPlayer").fadeOut(120, function() {
					  $("#handValOutputPlayer").html(_this.handVal).fadeIn(120);
					});
					_this.canReq = true;
				});

				_this.handPosX += 15;
				_this.handPosY += 15;
			}
		}

		return true;

	}
}

function Dealer() {
	this.hand = [];
	this.handVal = 0;
	this.handPos = 470; // [null, 450, 538, 626, 714, 802]
	this.delay = 400;
	this.canReq = true;
	this.temp = 0;
	var _this = this;

	this.drawCard = function(show) {

		if (_this.canReq) {
			_this.canReq = false;
			if (_this.hand.length < 5) {

				_this.temp = deck.getCard();
				_this.hand.push(_this.temp);
				_this.handVal += _this.hand[_this.hand.length-1].val;

				$("#dealerHand"+_this.hand.length).css("display", "block");
				$("#dealerHand"+_this.hand.length).animate({
					left: _this.handPos
				}, _this.delay, function() {
					if (!show) { $("#dealerHand"+_this.hand.length).attr("src", "images/cards/"+_this.hand[_this.hand.length-1].ref+".png"); }
					$("#handValOutputDealer").fadeOut(120, function() {
					  $("#handValOutputDealer").html(_this.handVal).fadeIn(120);
					});
					_this.canReq = true;
				});

				_this.handPos += 88;
			}
		}

		return true;

	}

	this.reset = function() {

		$(".dealerHand").attr("src", "images/cards/b2fv.png");
		$(".dealerHand").animate({left: 944}, _this.delay, function() {
			$(".dealerHand").css("display", "none");
			$("#deckInner").html(deck.count);
			$("#handValOutputDealer").html(dealer.handVal).fadeIn(120);
		});

	}
}

var deck = new Deck();
var player = new Player();
var dealer = new Dealer();

function startRound() {
	dealer.drawCard();
	player.drawCard();
	setTimeout(function(){player.drawCard(); setTimeout(function(){$(".button").slideDown(200);}, 400)}, 400);
}

$("#hitButton").click(function() {
	player.drawCard();
});