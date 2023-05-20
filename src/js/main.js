const footerYear = document.querySelector(".footer__year");

const navMobile = document.querySelector(".nav-mobile");
const navBtn = document.querySelector(".hamburger");
const allNavItems = document.querySelectorAll(".nav-link");

const cookieBox = document.querySelector(".cookie-box");
const cookieBtn = document.querySelector(".cookie-btn");

//====================================

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();

//====================================

const handleNav = () => {
	navMobile.classList.toggle("nav-mobile--active");

	navBtn.classList.toggle("is-active");

	allNavItems.forEach((item) => {
		item.addEventListener("click", () => {
			navBtn.classList.remove("is-active");
		});
	});
	allNavItems.forEach((item) => {
		item.addEventListener("click", () => {
			navMobile.classList.remove("nav-mobile--active");
		});
	});
};

navBtn.addEventListener("click", handleNav);


//============================================

window.onscroll = function () {
	scrollFunction();
	scrollBtn();
};

let navShow = document.querySelector(".menu");

function scrollFunction() {
	if (
		document.body.scrollTop > 750 ||
		document.documentElement.scrollTop > 750
	) {
		navShow.classList.add("menu_appear");
	} else {
		navShow.classList.remove("menu_appear");
	}
}

function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//====================================

let mybutton = document.querySelector(".goToTopBtn");

function scrollBtn() {
	if (
		document.body.scrollTop > 370 ||
		document.documentElement.scrollTop > 370
	) {
		mybutton.classList.add("top_btn_appear");
	} else {
		mybutton.classList.remove("top_btn_appear");
	}
}

//====================================

const showCookie = () => {
	const cookieEaten = localStorage.getItem("cookie");
	if (cookieEaten) {
		cookieBox.classList.add("hide");
	}
};

const handleCookieBox = () => {
	localStorage.setItem("cookie", "true");
	cookieBox.classList.add("hide");
};

cookieBtn.addEventListener("click", handleCookieBox);
showCookie();

//========================================
const buttoncheckbox = document.querySelector(".contact__form-btnbox");
let checkbox = document.getElementById("accept");
checkbox.addEventListener("change", () => {
	if (checkbox.checked) {
		buttoncheckbox.classList.remove("disabled");
	} else {
		buttoncheckbox.classList.add("disabled");
	}
});

const msgStatus = document.querySelector(".msg-status");

console.log(document.location.search);

if (document.location.search === "?mail_status=sent") {
	msgStatus.classList.add("success");
	msgStatus.textContent = "Wiadomość wysłana!";

	setTimeout(() => {
		msgStatus.classList.remove("success");
	}, 3000);
}

if (document.location.search === "?mail_status=error") {
	msgStatus.classList.add("error-msg");
	msgStatus.textContent = "Wystąpił błąd.";

	setTimeout(() => {
		msgStatus.classList.remove("error-msg");
	}, 3000);
}

