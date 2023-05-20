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
//====================================================
window.onscroll = function () {
	scrollBtn();
};
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

function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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


//======================================
let galleryImages = document.querySelectorAll(".gallery-img");
let getLastestOpenedImg;
let windowWidth = window.innerWidth;
if (galleryImages) {
	galleryImages.forEach(function (image) {
		image.onclick = function () {
			let getElementCss = window.getComputedStyle(image);
			let getFullImgUrl = get.getElementCss.getPropertyValue("background-image");
			let getImgUrlPos = getFullImgUrl.split("");
			alert(getFullImgUrl);
			// let setNewImgUrl = getImgUrlPos[1].replace()
			// alert(getImgUrlPos[1])
		};
	});
}

jQuery("#animated-thumbnails-gallery")
  .justifiedGallery({
    captions: false,
    // lastRow: "hide",
    rowHeight: 180,
    margins: 10
  })
  .on("jg.complete", function () {
    window.lightGallery(
      document.getElementById("animated-thumbnails-gallery"),
      {
		getCaptionFromTitleOrAlt:false,
        autoplayFirstVideo: false,
        pager: false,
        galleryId: "furnitures",
        plugins: [lgZoom, lgThumbnail],
        mobileSettings: {
          controls: false,
          showCloseIcon: false,
          download: false,
          rotate: false
        }
      }
    );
  });

  //==========================================
  
  function showMore() {
	let dots = document.getElementById("dots");
	let moreText = document.getElementById("more");
	let btnText = document.getElementById("myBtn");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "Czytaj więcej"; 
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "Ukryj"; 
	  moreText.style.display = "inline";
	}
  }