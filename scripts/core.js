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
	var _this = this;
}

function Dealer() {
	this.hand = [];
	this.handVal = 0;
	this.handTotal = 0;
	this.handPos = 470; // [null, 450, 538, 626, 714, 802]
	this.delay = 400;
	this.canReq = true;
	this.temp = 0;
	var _this = this;

	this.drawCard = function() {

		if (_this.canReq) {
			_this.canReq = false;
			if (_this.handTotal < 5) {
				_this.handTotal += 1;

				_this.temp = deck.getCard();
				_this.hand.push(_this.temp);
				_this.handVal += _this.temp.val;

				$("#dealerHand"+_this.handTotal).css("display", "block");
				$("#dealerHand"+_this.handTotal).animate({
					left: _this.handPos
				}, _this.delay, function() {
					$("#dealerHand"+_this.handTotal).attr("src", "images/cards/"+_this.hand[_this.hand.length-1].ref+".png");
					$("#handValOutput").fadeOut(120, function() {
					  $("#handValOutput").text(_this.handVal).fadeIn(120);
					});
					_this.canReq = true;
				});

				_this.handPos += 88;
			}
		}

	}
}

var deck = new Deck();
var player = new Player();
var dealer = new Dealer();

function startRound() {
	$(".dealerHand").attr("src", "images/cards/b2fv.png");
	$(".dealerHand").animate({left: 944}, dealer.delay);
	deck = new Deck();
	dealer = new Dealer();
}