let header = $("#header")[0];
let lastScrollTop = 10;

// $(document).ready(function() {
// 	// header.style.cssText = "display:none;";
// });

$(document).scroll(function(event) {
	let st = $(this).scrollTop();

	if (st > lastScrollTop) {
		//Scroll down
		$(header).fadeTo(20, 0);
	} else {
		//Scroll up
		$(header).fadeTo(1, 1);
	}

	lastScrollTop = st;
});
