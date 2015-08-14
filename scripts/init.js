/* Make a 2D array that holds the cards as references - This array will be used to select cards on draws */
var cardList = [
	[ // Card Backs
		"b2fv"
	],
	[ // Aces
		{
			used: 0,
			ref: 1
		},
		{
			used: 0,
			ref: 2
		},
		{
			used: 0,
			ref: 3
		},
		{
			used: 0,
			ref: 4
		}
	],
	[ // 2s
		{
			used: 0,
			ref: 49
		},
		{
			used: 0,
			ref: 50
		},
		{
			used: 0,
			ref: 51
		},
		{
			used: 0,
			ref: 52
		}
	],
	[ // 3s
		{
			used: 0,
			ref: 45
		},
		{
			used: 0,
			ref: 46
		},
		{
			used: 0,
			ref: 47
		},
		{
			used: 0,
			ref: 48
		}
	],
	[ // 4s
		{
			used: 0,
			ref: 41
		},
		{
			used: 0,
			ref: 42
		},
		{
			used: 0,
			ref: 43
		},
		{
			used: 0,
			ref: 44
		}
	],
	[ // 5s
		{
			used: 0,
			ref: 37
		},
		{
			used: 0,
			ref: 38
		},
		{
			used: 0,
			ref: 39
		},
		{
			used: 0,
			ref: 40
		}
	],
	[ // 6s
		{
			used: 0,
			ref: 33
		},
		{
			used: 0,
			ref: 34
		},
		{
			used: 0,
			ref: 35
		},
		{
			used: 0,
			ref: 36
		}
	],
	[ // 7s
		{
			used: 0,
			ref: 29
		},
		{
			used: 0,
			ref: 30
		},
		{
			used: 0,
			ref: 31
		},
		{
			used: 0,
			ref: 32
		}
	],
	[ // 8s
		{
			used: 0,
			ref: 25
		},
		{
			used: 0,
			ref: 26
		},
		{
			used: 0,
			ref: 27
		},
		{
			used: 0,
			ref: 28
		}
	],
	[ // 9s
		{
			used: 0,
			ref: 21
		},
		{
			used: 0,
			ref: 22
		},
		{
			used: 0,
			ref: 23
		},
		{
			used: 0,
			ref: 24
		}
	],
	[ // 10s, Kings, Queens
		{
			used: 0,
			ref: 5
		},
		{
			used: 0,
			ref: 6
		},
		{
			used: 0,
			ref: 7
		},
		{
			used: 0,
			ref: 8
		},
		{
			used: 0,
			ref: 9
		},
		{
			used: 0,
			ref: 10
		},
		{
			used: 0,
			ref: 11
		},
		{
			used: 0,
			ref: 12
		},
		{
			used: 0,
			ref: 13
		},
		{
			used: 0,
			ref: 14
		},
		{
			used: 0,
			ref: 15
		},
		{
			used: 0,
			ref: 16
		},
		{
			used: 0,
			ref: 17
		},
		{
			used: 0,
			ref: 18
		},
		{
			used: 0,
			ref: 19
		},
		{
			used: 0,
			ref: 20
		}
	]
];

var deckHeight = 52;

$(document).ready(function() {
	// Set deck x coordinate to three quarters of the way across the page
	$("#deck").css("left", $(window).width()-$(window).width()/4-$("#deck").width());
	$("#rulesWrapper").css("left", $(window).width()/4-$("#rulesWrapper").width());
	console.log("Rules Wrapper: "+$("#rulesWrapper").width()+"\nWindow Width: "+$(window).width());
});