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

	this.getCard = function() {

		this.foundCard = false;
		while (!this.foundCard) {
			this.getVal = Math.floor((Math.random()*this.list.length)+1)
			this.getRef = Math.floor((Math.random()*this.list[this.getVal].length)+0)
			if (!this.list[this.getVal][this.getRef].used) {
				this.list[this.getVal][this.getRef].used = true;
				this.foundCard = true;
				return this.list[this.getVal][this.getRef];
			}
		}

	}
}

function Player() {
	this.hand = [];
	this.handVal = 0;
}

function Dealer() {
	this.hand = [];
	this.handVal = 0;
	this.handTotal = 1;
	this.handPos = [null, "-=494px", 538] // 538px
	this.delay = 1000;
	var _this = this

	this.drawCard = function() {

		$("#dealerHand1").css("display", "block");
		$("#dealerHand1").animate({
			left: _this.handPos[_this.handTotal]
		}, _this.delay, function() {
			$("#dealerHand1").attr("src", "images/cards/5.png");
			$("#dealerHand2").attr("src", "images/cards/b2fv.png");
			$("#dealerHand2").css("display", "block");
			$("#dealerHand2").animate({
				left: dealer.handPos[2]
			}, _this.delay, function() {
				$(".button").slideDown(250);
			});
		});

	}
}

var deck = new Deck();
var player = new Player();
var dealer = new Dealer();

function startRound() {
	deck = new Deck();
	dealer = new Dealer();
}