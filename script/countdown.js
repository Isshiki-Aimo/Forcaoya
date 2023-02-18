var comingdate = new Date("Feb 23, 2023 00:00:00");
const input = document.querySelector("#password");

var d = document.getElementById("d");
var h = document.getElementById("h");
var m = document.getElementById("m");
var s = document.getElementById("s");
d.innerHTML = getTrueNumber(0);
h.innerHTML = getTrueNumber(0);
m.innerHTML = getTrueNumber(0);
s.innerHTML = getTrueNumber(0);

var x = setInterval(function () {
	var now = new Date();
	var des = comingdate.getTime() - now.getTime();
	if (des > 0) {
		var days = Math.floor(des / (1000 * 60 * 60 * 24));
		var hours = Math.floor((des % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var mins = Math.floor((des % (1000 * 60 * 60)) / (1000 * 60));
		var secs = Math.floor((des % (1000 * 60)) / 1000);

		d.innerHTML = getTrueNumber(days);
		h.innerHTML = getTrueNumber(hours);
		m.innerHTML = getTrueNumber(mins);
		s.innerHTML = getTrueNumber(secs);
	} else {
		d.innerHTML = getTrueNumber(0);
		h.innerHTML = getTrueNumber(0);
		m.innerHTML = getTrueNumber(0);
		s.innerHTML = getTrueNumber(0);
		clearInterval(x);
	}
}, 1000);

function getTrueNumber(x) {
	return x < 10 ? "0" + x : x;
}

function clickFun() {
	if (input.value.length === 0) {
		alert("请输入密码");
		return;
	}
	if (input.value == "123698") {
		input.value = "";
		setTimeout(() => {
			window.location.href = "https://isshiki-aimo.github.io/Forcaoya/loading";
		}, 2000);
	} else {
		alert("验证码错误");
	}
}
