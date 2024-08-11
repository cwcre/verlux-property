const vSwitcher = document.querySelector('#flexSwitchCheckDefault');
const vSwitcherTwo = document.querySelector('.theSwitch');
let isChecked = true;
let isCheckedTwo = true;
vSwitcher.addEventListener('click', () => {
    if (isChecked) {
        vSwitcher.style.backgroundColor = 'rgb(228, 50, 76)'
        isChecked = false;
    } else {
        vSwitcher.style.backgroundColor = 'white'
        isChecked = true
    }
})
vSwitcherTwo.addEventListener('click', () => {
    if (isCheckedTwo) {
        vSwitcherTwo.style.backgroundColor = 'rgb(228, 50, 76)'
        isCheckedTwo = false;
    } else {
        vSwitcherTwo.style.backgroundColor = 'white'
        isCheckedTwo = true
    }
})
console.log(vSwitcherTwo);
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


const vLang = document.getElementById('english');
const vMenu = document.getElementById('menu');
const vMenuTwo = document.getElementById('menu2');
const vExplore = document.getElementById('explore');
const vPrice = document.getElementById('price');
const vSelect = document.getElementById('select');

//! MENU ONE //

vExplore.addEventListener("mouseover", function() {
    vMenu.style.display = 'flex';
    vMenu.style.left = '60.5%';
    vMenu.style.width = '200px'
    vMenu.style.height = '280px'
    vMenu.innerHTML = `
    <ul class ="menu_list">
    <li class="menu_links2"><a class="menu_a2"  href="buildingreviews.html">Building Reviews</a></li>
    <li class="menu_links2"><a class="menu_a2" href="community.html">Community Guides</a></li>
    <li class="menu_links2"><a class="menu_a2" href="blog.html">Property Blog</a></li>
    <li class="menu_links2"><a class="menu_a2" href="renters.html">Renter's Guide</a></li>
    <li class="menu_links2"><a class="menu_a2" href="buyers.html">Buyer's Guide</a></li>
    <li class="menu_links2"><a class="menu_a2" href="motrag.html">Mortgages</a></li>
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
    vMenu.style.left = '49%';
    vMenu.style.width = '270px'
    vMenu.style.height = '150px'

    vMenu.innerHTML = `
    <ul class ="menu_list">
    <li class="menu_links"><a class="menu_a" href="houseprice.html">House Prices</a></li>
    <li class="menu_links"><a class="menu_a" href="#">Rent Vs Buy Calculator</a></li>
    <li class="menu_links"><a class="menu_a" href="#">Mo'asher: Dubai Price Index</a></li>
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
});

const vBars = document.getElementById('bars');
const vBurger = document.getElementById('burgerMenu');
let isClickedTwo = 1
vBars.addEventListener('click', function() {
    if (isClickedTwo == 1) {
        vBurger.style.display = 'flex'
        setTimeout(() => {
            vBurger.style.opacity = 1
        }, 150);
        isClickedTwo = 2;
    } else {
        vBurger.style.opacity = 0
        setTimeout(() => {
            vBurger.style.display = 'none'
        }, 150);
        isClickedTwo = 1;
    }
});

const vExplore2 = document.getElementById('explore2');
const vPrice2 = document.getElementById('price2');
const vExploreMenu = document.getElementById('exploreMenu');
const vPriceMenu = document.getElementById('priceMenu');
let isClicked3 = true;
let isClicked4 = true;
vExplore2.addEventListener('click', () => {
    if (isClicked3) {
        vBurger.style.height = '600px'
        isClicked3 = false;
        vExploreMenu.style.height = '200px'
        vExploreMenu.style.display = 'flex'
        vPriceMenu.style.opacity = 0
        setTimeout(() => {
            vExploreMenu.style.opacity = '1'
            vPriceMenu.style.display = 'none'
        }, 500);
    } else {
        vBurger.style.height = '400px'
        vExploreMenu.style.height = '1px'
        vExploreMenu.style.opacity = '0'
        setTimeout(() => {
            vExploreMenu.style.display = 'none'
        }, 500);
        isClicked3 = true;
    }
})

vPrice2.addEventListener('click', () => {
    if (isClicked4) {
        vBurger.style.height = '500px';
        isClicked4 = false;
        vPriceMenu.style.height = '100px';
        vPriceMenu.style.display = 'flex';
        vExploreMenu.style.opacity = '0'
        setTimeout(() => {
            vPriceMenu.style.opacity = '1'
            vExploreMenu.style.display = 'none'
        }, 500);
    } else {
        vBurger.style.height = '400px'
        vPriceMenu.style.height = '1px'
        vPriceMenu.style.opacity = '0'
        setTimeout(() => {
            vPriceMenu.style.display = 'none'
        }, 500);
        isClicked4 = true;
    };
});