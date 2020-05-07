//Constants
let MAX_TYPE = 0.25; //Min and max random type speed
let MIN_TYPE = 0.05;

let options = ["Bioinformatics", "Computational Neuroscience", "Deep Neural Networks", "Astrophysics", "Weather Mapping", "Fourier Transformations", "Differential Equations", "Markov Processes"]; //Text options

//Variables
let curOption = -1;
let	charIndex = 0;
let lastAnim = getTime();
let resumeTime = 0;
let t;
let interval = null;
let flag = true;

let text = document.getElementById("to_animate_1");

setInterval(checkUpdate, 10);

function checkUpdate() {
	if (flag == true){
		changeText();
		flag = false;
	}
}

function changeText() {
	if (interval != null)
		clearInterval(interval);
	curOption++;
	curOption = curOption % options.length;
	charIndex = 0;
	setupAnimation();
}

function setupAnimation() {
		t = Math.random() * (MAX_TYPE - MIN_TYPE) + MIN_TYPE;
		interval = setInterval(animateText, 1);
}

function animateText() {
	if (charIndex < options[curOption].length) {
		if (getTime() > lastAnim + t) {
			t = Math.random() * (MAX_TYPE - MIN_TYPE) + MIN_TYPE;
			lastAnim = getTime();
			charIndex++;
		}
	} else {
		if (getTime() > lastAnim + 1) {
			flag = true;
		}
	}
	setText(options[curOption].substring(0, charIndex));
}

function setText(str_in) {
	text.innerHTML = "Accelerate Your <span style=\"color: #00c58df3;\">"+str_in+"</span>";
}

function getTime() { //Returns the time since 1970 in seconds
	return Date.now()/1000;
}
