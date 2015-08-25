/*
	
	This is the core JS file, it will run the game logic amongst other things

*/

// 288px

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
			_this.getVal = Math.floor((Math.random()*_this.list.length-1)+1);
			_this.getRef = Math.floor((Math.random()*_this.list[_this.getVal].length)+0);
			if (!_this.list[_this.getVal][_this.getRef].used) {
				_this.list[_this.getVal][_this.getRef].used = true;
				_this.foundCard = true;
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
	this.delay = 1000;
	this.temp = [];
	var _this = this;

	this.drawCard = function() {

		_this.handTotal += 1;

		_this.temp = deck.getCard();

		$("#dealerHand"+_this.handTotal).css("display", "block");
		$("#dealerHand"+_this.handTotal).animate({
			left: _this.handPos
		}, _this.delay, function() {
			$("#dealerHand"+_this.handTotal).attr("src", "images/cards/"+_this.temp.ref+".png");
		});

		_this.handPos += 88;

	}
}

var deck = new Deck();
var player = new Player();
var dealer = new Dealer();

function startRound() {
	deck = new Deck();
	dealer = new Dealer();
}