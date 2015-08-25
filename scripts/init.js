/*
	
	This is the file for initializing,
	it includes DOM functions and variables to pre-define

*/

/* Make a 2D array that holds the cards as references - This array will be used to select cards on draws */
var cardList = [
	[], // Placeholder
	[ // Aces
		{
			used: false,
			ref: 1
		},
		{
			used: false,
			ref: 2
		},
		{
			used: false,
			ref: 3
		},
		{
			used: false,
			ref: 4
		}
	],
	[ // 2s
		{
			used: false,
			ref: 49
		},
		{
			used: false,
			ref: 50
		},
		{
			used: false,
			ref: 51
		},
		{
			used: false,
			ref: 52
		}
	],
	[ // 3s
		{
			used: false,
			ref: 45
		},
		{
			used: false,
			ref: 46
		},
		{
			used: false,
			ref: 47
		},
		{
			used: false,
			ref: 48
		}
	],
	[ // 4s
		{
			used: false,
			ref: 41
		},
		{
			used: false,
			ref: 42
		},
		{
			used: false,
			ref: 43
		},
		{
			used: false,
			ref: 44
		}
	],
	[ // 5s
		{
			used: false,
			ref: 37
		},
		{
			used: false,
			ref: 38
		},
		{
			used: false,
			ref: 39
		},
		{
			used: false,
			ref: 40
		}
	],
	[ // 6s
		{
			used: false,
			ref: 33
		},
		{
			used: false,
			ref: 34
		},
		{
			used: false,
			ref: 35
		},
		{
			used: false,
			ref: 36
		}
	],
	[ // 7s
		{
			used: false,
			ref: 29
		},
		{
			used: false,
			ref: 30
		},
		{
			used: false,
			ref: 31
		},
		{
			used: false,
			ref: 32
		}
	],
	[ // 8s
		{
			used: false,
			ref: 25
		},
		{
			used: false,
			ref: 26
		},
		{
			used: false,
			ref: 27
		},
		{
			used: false,
			ref: 28
		}
	],
	[ // 9s
		{
			used: false,
			ref: 21
		},
		{
			used: false,
			ref: 22
		},
		{
			used: false,
			ref: 23
		},
		{
			used: false,
			ref: 24
		}
	],
	[ // 10s, Kings, Queens
		{
			used: false,
			ref: 5
		},
		{
			used: false,
			ref: 6
		},
		{
			used: false,
			ref: 7
		},
		{
			used: false,
			ref: 8
		},
		{
			used: false,
			ref: 9
		},
		{
			used: false,
			ref: 10
		},
		{
			used: false,
			ref: 11
		},
		{
			used: false,
			ref: 12
		},
		{
			used: false,
			ref: 13
		},
		{
			used: false,
			ref: 14
		},
		{
			used: false,
			ref: 15
		},
		{
			used: false,
			ref: 16
		},
		{
			used: false,
			ref: 17
		},
		{
			used: false,
			ref: 18
		},
		{
			used: false,
			ref: 19
		},
		{
			used: false,
			ref: 20
		}
	]
];

// When the user clicks on the rules, it will toggle a CSS class on/off that hides/displays the rules
var rulesSwitch = false;
$("#rulesHeader").click(function() {
	if (!rulesSwitch) {
		$("#arrow").toggleClass("down");
	}
	$("#rulesContent").slideToggle(400);
});