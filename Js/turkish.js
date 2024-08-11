const vIcon = document.getElementById("icon");
let vUpBtn = document.getElementsByClassName('up_btn')[0]
const vMain = document.querySelector("#main");

// ! UpBtn //
window.addEventListener("scroll", function() {
    if (window.scrollY > 449) {
        vUpBtn.style.opacity = 0.9;
        vUpBtn.style.cursor = "pointer";
        vIcon.style.cursor = "pointer";
    } else {
        vUpBtn.style.opacity = 0;
        vUpBtn.style.cursor = "context-menu";
        vIcon.style.cursor = "context-menu";
    }
});

vUpBtn.addEventListener('click', () => {
    window.scrollTo(0, 0);
    vUpBtn.classList.add("isClicked");
    setTimeout(() => {
        vUpBtn.classList.remove("isClicked");
    }, 500);
});

// ! Sticky Navigation: Intersection Observer API //

const vHeader = document.querySelector("#header");
const vNavLinks = document.querySelector("#ul");
const vNav = document.querySelector("#nav");
window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
        vHeader.classList.add("trans-header");
        setTimeout(() => {
            vHeader.classList.add("pos-header");
            vMain.classList.add("mar");
        }, 150);
    } else {
        vHeader.classList.remove("trans-header");
        setTimeout(() => {
            vHeader.classList.remove("pos-header");
            vMain.classList.remove("mar");
        }, 150);
    }
});


//! MENUS START //


const vLang = document.getElementById('english');
const vMenu = document.getElementById('menu');
const vMenuTwo = document.getElementById('menu2');
const vExplore = document.getElementById('explore');
const vPrice = document.getElementById('price');
const vSelect = document.getElementById('select');

//! MENU ONE //

vLang.addEventListener("mouseover", function() {
    vMenu.style.display = 'flex'
    vMenu.style.opacity = 1
    vMenu.style.left = '67%';
    vMenu.style.width = '135px'
    vMenu.style.height = '180px'

    vMenu.innerHTML = `
    <ul class ="menu_list">
    <li class="menu_links"><a class="menu_a arabic" href="#"><img src="../Images/Arabic.svg.png" alt="Arabic">عربي</a></li>
    <li class="menu_links"><a class="menu_a" href="index.html"><img class ="turkish_img" src="../Images/english.svg.png" alt="english">English</a></li>
    </ul>
    `



});
vLang.addEventListener('mouseleave', function() {
    vMenu.style.opacity = '0'
    vMenu.style.display = 'none'

})
vMenu.addEventListener("mouseover", function() {
    vMenu.style.display = 'flex'
    vMenu.style.opacity = 1


});
vMenu.addEventListener('mouseleave', function() {
    vMenu.style.opacity = '0'
    vMenu.style.display = 'none'


});


// ! MENU TWO //

vExplore.addEventListener("mouseover", function() {
    vMenu.style.display = 'flex';
    vMenu.style.left = '55.5%';
    vMenu.style.width = '200px'
    vMenu.style.height = '280px'
    vMenu.innerHTML = `
    <ul class ="menu_list">
    <li class="menu_links2"><a class="menu_a2 " href="#">Yapı İncelemeleri</a></li>
    <li class="menu_links2"><a class="menu_a2" href="#">Topluluk Rehberis</a></li>
    <li class="menu_links2"><a class="menu_a2" href="#">Emlak Blogu</a></li>
    <li class="menu_links2"><a class="menu_a2" href="#">Kiracı Rehberi</a></li>
    <li class="menu_links2"><a class="menu_a2" href="#">Alıcı Rehberi</a></li>
    <li class="menu_links2"><a class="menu_a2" href="#">ipotekler</a></li>
    </ul>
    
    `
    setTimeout(() => {
        vMenu.style.opacity = 1
    }, 300);

});
vExplore.addEventListener('mouseleave', function() {
    vMenu.style.opacity = '0'
    vMenu.style.display = 'none'

})
vMenu.addEventListener("mouseover", function() {
    vMenu.style.display = 'flex'
    vMenu.style.opacity = 1


});
vMenu.addEventListener('mouseleave', function() {
    vMenu.style.opacity = '0'
    setTimeout(() => {
        vMenu.style.display = 'none'
    }, 400);


});

//! MENU THREE //

vPrice.addEventListener("mouseover", function() {
    vMenu.style.display = 'flex'
    vMenu.style.left = '44%';
    vMenu.style.width = '270px'
    vMenu.style.height = '150px'

    vMenu.innerHTML = `
    <ul class ="menu_list">
    <li class="menu_links"><a class="menu_a" href="#">Ev fiyatları</a></li>
    <li class="menu_links"><a class="menu_a" href="#">Kiralama ve Satın Alma Hesaplayıcısı</a></li>
    <li class="menu_links"><a class="menu_a" href="#">Mo'asher: Dubai Fiyat Endeksi</a></li>
    </ul>
    
    `
    setTimeout(() => {
        vMenu.style.opacity = 1
    }, 300);

});
vPrice.addEventListener('mouseleave', function() {
    vMenu.style.opacity = '0'
    vMenu.style.display = 'none'

})
vMenu.addEventListener("mouseover", function() {
    vMenu.style.display = 'flex'
    vMenu.style.opacity = 1


});
vMenu.addEventListener('mouseleave', function() {
    vMenu.style.opacity = '0'
    setTimeout(() => {
        vMenu.style.display = 'none'
    }, 400);


})

// ! MENU FOUR //

var menuIsClicked = true;
const vBody = document.querySelector('body')
vSelect.addEventListener('click', () => {
    if (menuIsClicked) {
        vMenuTwo.style.display = 'flex';
        vMenuTwo.style.opacity = 1;
        vMenuTwo.style.left = '50.6%'
        vMenuTwo.style.top = '59%'
        vMenuTwo.style.width = '250px'
        vMenuTwo.style.height = '450px'
        vMenuTwo.innerHTML = `
        <span class="select1_spn">Apartment</span>
        <span class="select1_spn">Villa</span>
        <span class="select1_spn">Twon House</span>
        <span class="select1_spn">Pent House</span>
        <span class="select1_spn">Compound</span>
        <span class="select1_spn">Duplex</span>
        <span class="select1_spn">Full Flor</span>
        <span class="select1_spn">Half Flor</span>
        <span class="select1_spn">Whole Building</span>
        <span class="select1_spn">Bulk Rent Unit</span>
        <span class="select1_spn">Bungalow</span>
        <span class="select1_spn">Hotel & Hotel Appertment</span>
        
        
        `
        menuIsClicked = false;
    } else {
        vMenuTwo.style.display = 'none';
        vMenuTwo.style.opacity = 0;
        menuIsClicked = true;
    }
})




//!   SLIDER START //


//! Slider One //

let vArrow = document.getElementById('arrow');
let vContainer = document.getElementById('container');
var arrowIsClicked = 1;


vArrow.addEventListener('click', () => {


    if (arrowIsClicked == 1) {
        arrowIsClicked = 2
        vContainer.scrollTo(10000, 0)
        vArrow.style.transform = 'rotate(0deg)'
        vArrow.style.left = '2%'

    } else {

        vContainer.scrollTo(0, 0)
        vArrow.style.transform = 'rotate(180deg)'
        vArrow.style.left = '93%'
        arrowIsClicked = true;
    }


})

//! SLIDER TWO //

let vArrow2 = document.getElementById('arrow2');
let vContainer2 = document.getElementById('container2');
var arrowIsClicked = 1;


vArrow2.addEventListener('click', () => {


    if (arrowIsClicked == 1) {
        arrowIsClicked = 2
        vContainer2.scrollTo(10000, 0)
        vArrow2.style.transform = 'rotate(0deg)'
        vArrow2.style.left = '2%'

    } else {

        vContainer2.scrollTo(0, 0)
        vArrow2.style.transform = 'rotate(180deg)'
        vArrow2.style.left = '93%'
        arrowIsClicked = true;
    }


})

//! SLIDER THREE //

let vArrow3 = document.getElementById('arrow3');
let vContainer3 = document.getElementById('container3');
var arrowIsClicked = 1;


vArrow3.addEventListener('click', () => {


    if (arrowIsClicked == 1) {
        arrowIsClicked = 2
        vContainer3.scrollTo(10000, 0)
        vArrow3.style.transform = 'rotate(0deg)'
        vArrow3.style.left = '2%'

    } else {

        vContainer3.scrollTo(0, 0)
        vArrow3.style.transform = 'rotate(180deg)'
        vArrow3.style.left = '93%'
        arrowIsClicked = true;
    }


})


//!   SLIDER END //

//! BUY & RENT START //


let vBuy = document.getElementById('buy');
let vRent = document.getElementById('rent');


vBuy.addEventListener('click', () => {
    vBuy.style.color = 'rgb(17, 36, 66)'
    vBuy.style.backgroundColor = 'rgba(174, 194, 248, 0.616)'
    vBuy.style.border = '1px solid rgb(35, 35, 247)'
    vRent.style.backgroundColor = 'rgba(212, 203, 203, 0.247)'
    vRent.style.border = 'none'
})
vRent.addEventListener('click', () => {
    vRent.style.color = 'rgb(17, 36, 66)'
    vRent.style.backgroundColor = 'rgba(174, 194, 248, 0.616)'
    vRent.style.border = '1px solid rgb(35, 35, 247)'
    vBuy.style.backgroundColor = 'rgba(212, 203, 203, 0.247)'
    vBuy.style.border = 'none'
})

//! BUY & RENT END //

//! FINDER START //

const vPlus = document.getElementById('plus');
const vFinder = document.getElementById('finder')
const vFinderTwo = document.getElementById("finder2");



var plusIsClicked = true
vPlus.addEventListener('click', () => {
    if (plusIsClicked == true) {
        vFinder.style.height = '200px';
        vFinderTwo.style.height = '125px'
        vFinderTwo.innerHTML = `
        <div class="finder2" id="finder2">
        <div class="half1">
            <input type="search" class="inp1" placeholder=" şehir, topluluk veya Bina">
            <div class="select1" id= "select">
                 <span value="type">Emlak Tipi</span>
                 <i class="fa-solid fa-plus"></i>
                 </div>
            <select class="select2">
          <option value="type2" disabled selected hidden>Yataklar ve Banyolar</option>
       </select>
            <select class="select3">
            <option value="price" selected disabled hidden>Fiyat</option>
      </select>
            <button class="btn2"><i class="fa-solid fa-magnifying-glass "></i></button>
        </div>
    </div>
    <div class="half2">
    <select class="select4">
        <option value="furnishings" selected disabled hidden>All Furnishings</option>
        <option value="yes">Furnished</option>
        <option value="no">Unfurnished</option>
        <option value="half">Partly Furnished</option>
    </select>
    <select class="select5">
        <option value="area" selected disabled hidden>Area(Sqft)</option>
    </select>
    <select class="select6">
        <option value="amenities" selected disabled hidden>Amenities</option>
    </select>
    <input type="search" class="inp2" placeholder="Keywords :e.g. beach , chiller free">
    </div>
        `
        plusIsClicked = false
    } else {
        vFinder.style.height = '150px';
        vFinderTwo.style.height = '75px'
        vFinderTwo.innerHTML = `
        <div class="finder2" id="finder2">
        <div class="half1">
            <input type="search" class="inp1" placeholder=" şehir, topluluk veya Bina">
            <div class="select1" id="select">
                <span value="type">Emlak Tipi</span>
                <i class="fa-solid fa-plus"></i>
            </div>
            <select class="select2">
          <option value="type2" disabled selected hidden>Yataklar ve Banyolar</option>
       </select>
            <select class="select3">
            <option value="price" selected disabled hidden>Fiyat</option>
      </select>
            <button class="btn2"><i class="fa-solid fa-magnifying-glass "></i></button>
        </div>
    </div>
        `
        plusIsClicked = true;
    }



})