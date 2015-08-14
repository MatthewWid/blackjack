// Set shadow size of deck relative to the amount of cards in the deck, the less cards, the smaller the shadow, creating a 3D effect.
function setShadow() {
	$("#deck").css("box-shadow", deckHeight/13+"px "+deckHeight/26+"px 5px black");
}
setShadow();

var rulesSwitch = false;
$("#rulesHeader").click(function() {
	if (!rulesSwitch) {
		$("#arrow").toggleClass("down");
	}
	$("#rulesContent").slideToggle(400);
});