let header = $("#header")[0];
let lastScrollTop = 10;

let lastScroll = Date.now()/1000;

let moving = false;

// $(document).ready(function() {
// 	// header.style.cssText = "display:none;";
// });

$(document).scroll(function(event) {
	let st = $(this).scrollTop();

	if (moving == false) {
		if (st > lastScrollTop) {
			//Scroll down
			$(header).fadeTo(20, 0);
		} else {
			//Scroll up
			$(header).fadeTo(1, 1);
		}
		lastScroll = getTime();
		moving = true;
	} else if (getTime() - lastScroll > 20/1000) {
		moving = false;
	}

	lastScrollTop = st;
});

function getTime() { //Returns the time since 1970 in seconds
	return Date.now()/1000;
}
