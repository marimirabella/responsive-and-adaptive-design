// Slider
var item = document.querySelector(".gallery__item");

var length = document.getElementsByClassName("gallery__item").length;

var currentWidth = 0;

var gallery = document.querySelector(".gallery__items");


// Next slide
function moveRight() {
	currentWidth += item.clientWidth;
	if(currentWidth >= length*item.clientWidth){
		currentWidth = 0;
		gallery.style.left = 0 + 'px';
	}
	else {
		gallery.style.left = '-' + currentWidth + 'px';
		gallery.style.transition = 'left 0.6s linear';
	}
	console.log(currentWidth);
}

document.querySelector(".gallery__next").addEventListener("click", function(e){
		moveRight();
});


// Previous slide
function moveLeft() {
	if(currentWidth > 0){
		currentWidth -= item.clientWidth;
		gallery.style.left = '-' + currentWidth + 'px';
		gallery.style.transition = 'left 0.6s linear';
	}
}

document.querySelector(".gallery__previous").addEventListener("click", function(){
	moveLeft();
});


// Show Social Sharing
document.querySelector(".item__share-it").addEventListener("click", function(){
	document.querySelector(".share").style.opacity = "1";
});

// Close Social Sharing
document.querySelector(".share__close-btn").addEventListener("click", function(){
	document.querySelector(".share").style.opacity = "";
});
