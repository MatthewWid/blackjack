/*
	
	This is the file for initializing,	
	it includes DOM functions and variables to pre-define

	By Matthew W.

*/

var betting = false; // Config var to turn betting on/off, default off because I gave up on the betting system, can turn on to see the cool visuals

/* Make a 2D array that holds the deck, if the card is used, the reference to the image, and the value of the card */
var cardList = [
	[], // Placeholder
	[ // Aces
		{
			used: false, // If the card is used, when set to true, it will not be drawn from the deck
			ref: 1, // The referal number to the cards image, located in images/cards/THECARD.png
			val: 1
		},
		{
			used: false,
			ref: 2,
			val: 1
		},
		{
			used: false,
			ref: 3,
			val: 1
		},
		{
			used: false,
			ref: 4,
			val: 1
		}
	],
	[ // 2s
		{
			used: false,
			ref: 49,
			val: 2
		},
		{
			used: false,
			ref: 50,
			val: 2
		},
		{
			used: false,
			ref: 51,
			val: 2
		},
		{
			used: false,
			ref: 52,
			val: 2
		}
	],
	[ // 3s
		{
			used: false,
			ref: 45,
			val: 3
		},
		{
			used: false,
			ref: 46,
			val: 3
		},
		{
			used: false,
			ref: 47,
			val: 3
		},
		{
			used: false,
			ref: 48,
			val: 3
		}
	],
	[ // 4s
		{
			used: false,
			ref: 41,
			val: 4
		},
		{
			used: false,
			ref: 42,
			val: 4
		},
		{
			used: false,
			ref: 43,
			val: 4
		},
		{
			used: false,
			ref: 44,
			val: 4
		}
	],
	[ // 5s
		{
			used: false,
			ref: 37,
			val: 5
		},
		{
			used: false,
			ref: 38,
			val: 5
		},
		{
			used: false,
			ref: 39,
			val: 5
		},
		{
			used: false,
			ref: 40,
			val: 5
		}
	],
	[ // 6s
		{
			used: false,
			ref: 33,
			val: 6
		},
		{
			used: false,
			ref: 34,
			val: 6
		},
		{
			used: false,
			ref: 35,
			val: 6
		},
		{
			used: false,
			ref: 36,
			val: 6
		}
	],
	[ // 7s
		{
			used: false,
			ref: 29,
			val: 7
		},
		{
			used: false,
			ref: 30,
			val: 7
		},
		{
			used: false,
			ref: 31,
			val: 7
		},
		{
			used: false,
			ref: 32,
			val: 7
		}
	],
	[ // 8s
		{
			used: false,
			ref: 25,
			val: 8
		},
		{
			used: false,
			ref: 26,
			val: 8
		},
		{
			used: false,
			ref: 27,
			val: 8
		},
		{
			used: false,
			ref: 28,
			val: 8
		}
	],
	[ // 9s
		{
			used: false,
			ref: 21,
			val: 9
		},
		{
			used: false,
			ref: 22,
			val: 9
		},
		{
			used: false,
			ref: 23,
			val: 9
		},
		{
			used: false,
			ref: 24,
			val: 9
		}
	],
	[ // 10s, Kings, Queens
		{
			used: false,
			ref: 5,
			val: 10
		},
		{
			used: false,
			ref: 6,
			val: 10
		},
		{
			used: false,
			ref: 7,
			val: 10
		},
		{
			used: false,
			ref: 8,
			val: 10
		},
		{
			used: false,
			ref: 9,
			val: 10
		},
		{
			used: false,
			ref: 10,
			val: 10
		},
		{
			used: false,
			ref: 11,
			val: 10
		},
		{
			used: false,
			ref: 12,
			val: 10
		},
		{
			used: false,
			ref: 13,
			val: 10
		},
		{
			used: false,
			ref: 14,
			val: 10
		},
		{
			used: false,
			ref: 15,
			val: 10
		},
		{
			used: false,
			ref: 16,
			val: 10
		},
		{
			used: false,
			ref: 17,
			val: 10
		},
		{
			used: false,
			ref: 18,
			val: 10
		},
		{
			used: false,
			ref: 19,
			val: 10
		},
		{
			used: false,
			ref: 20,
			val: 10
		}
	]
];

if (!betting) { // If betting is off hide the betting area and money values
	$("#betArea").css("display", "none");
	$("#moneyBetPlayer").css("display", "none");
}

// When the user clicks on the rules, it will toggle a CSS class on/off that hides/displays the rules
var rulesSwitch = false;
$("#rulesHeader").click(function() {
	if (!rulesSwitch) {
		$("#arrow").toggleClass("down");
	}
	$("#rulesContent").slideToggle(400);
});