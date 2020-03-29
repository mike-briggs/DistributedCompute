function openTab(tabName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	$(".tablinks").removeClass("selected");
	document.getElementById(tabName).style.display = "block";
	document.getElementById(tabName + "_li").className += " selected";
}

openTab('networking');
