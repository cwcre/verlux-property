// const vSwitcher = document.querySelector('#flexSwitchCheckDefault');
// const vSwitcherTwo = document.querySelector('.theSwitch');
// let isChecked = true;
// let isCheckedTwo = true;
// vSwitcher.addEventListener('click', () => {
//     if (isChecked) {
//         vSwitcher.style.backgroundColor = 'rgb(228, 50, 76)'
//         isChecked = false;
//     } else {
//         vSwitcher.style.backgroundColor = 'white'
//         isChecked = true
//     }
// })
// vSwitcherTwo.addEventListener('click', () => {
//     if (isCheckedTwo) {
//         vSwitcherTwo.style.backgroundColor = 'rgb(228, 50, 76)'
//         isCheckedTwo = false;
//     } else {
//         vSwitcherTwo.style.backgroundColor = 'white'
//         isCheckedTwo = true
//     }
// })
// console.log(vSwitcherTwo);
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
    vMenu.style.left = '71%';
    vMenu.style.width = '200px'
    vMenu.style.height = '170px'

    vMenu.innerHTML = `
    <ul class ="menu_list">
    <li class="menu_links2"><a data-i18n ="buildingReviews" class="menu_a2 " href="buildingreviews.html">Building Reviews</a></li>
    <li class="menu_links2"><a data-i18n ="communityGuides" class="menu_a2" href="community.html">Community Guides</a></li>
    <li class="menu_links2"><a data-i18n ="prpBlog" class="menu_a2 on-page" href="blog.html">Property Blog</a></li>

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
    vMenu.style.left = '62%';
    vMenu.style.width = '210px'
    vMenu.style.height = '50px'
    vMenu.innerHTML = `
    <ul class ="menu_list">
        <li class="menu_links"><a data-i18n ="housePrice" class="menu_a" href="houseprice.html">House Prices</a></li>
    </ul>
    
    `
        // <li class="menu_links"><a class="menu_a" href="#">Rent Vs Buy Calculator</a></li>
        // <li class="menu_links"><a class="menu_a" href="#">Mo'asher: Dubai Price Index</a></li>

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
})

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
        vExploreMenu.style.height = '150px'
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
        vPriceMenu.style.height = '50px';
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
const translations = {
    en: {
        english: "English",
        arabic: "Arabic",
        buy: "Buy",
        rent: "Rent",
        commerical: "Commerical",
        newProjects: "New Projects",
        propertyPrice: "Property Price",
        explore: "Explore",
        pageHeading: "UAE Community Guides",
        pageSpan: "The UAE is a destination that has attracted people from all over the world; get to know what each emirate can offer you.",
        dubai: "Dubai",
        abuDahbi: "Abu Dahbi",
        sharjah: "Sharjah",
        ajman: "Ajman",
        rasAlKhaimah: "Ras Al Khaimah",
        footerLi1: "About us",
        footerLi2: "Terms & Conditions",
        footerLi3: "Privacy Policy",
        footerLi4: "Cookies Policy",
        footerLi5: "Client Login",
        footerLi6: "Careers",
        footerLi7: "Agent Hub",
        housePrice: "House Price",
        buildingreviews: "Building Reviews",
        communities: "Community Guides",
        blog: "Property Blog",
    },

    ar: {
        english: "الإنجليزية",
        arabic: "العربية",
        buy: "شراء",
        rent: "إيجار",
        commerical: "تجاري",
        newProjects: "مشاريع جديدة",
        propertyPrice: "أسعار العقارات",
        explore: "إكتشف",
        pageHeading: "دليل مجتمع دولة الإمارات العربية المتحدة",
        pageSpan: "تعتبر دولة الإمارات وجهة جذبت الناس من جميع أنحاء العالم؛ تعرف على ما يمكن أن تقدمه لك كل إمارة.",
        dubai: "دبي",
        abuDahbi: "أبو ظبي",
        sharjah: "الشارقة",
        ajman: "عجمان",
        rasAlKhaimah: "رأس الخيمة",
        footerLi1: "معلومات عنا",
        footerLi2: "البنود و الظروف",
        footerLi3: "سياسة الخصوصية",
        footerLi4: "اتفاقية ملفات تعريف الارتباط",
        footerLi5: "تسجيل دخول العميل",
        footerLi6: "وظائف",
        footerLi7: "مركز الوكيل",
        housePrice: "أسعار المنازل",
        buildingreviews: "مراجعات البناء",
        communities: "أدلة المجتمع",
        blog: "مدونة الملكية",
    }
}


const languageSelector = document.querySelector(".dropdown-select");
const languageSelector2 = document.querySelector(".dropdown-select2");


languageSelector.addEventListener('change', (event) => {
    setLanguage(event.target.value)
});

const setLanguage = (language) => {
    const elements = document.querySelectorAll('[data-i18n]');
    console.log(elements);
    elements.forEach((element) => {
        const translationsKey = element.getAttribute('data-i18n');
        element.textContent = translations[language][translationsKey]
    });


    if (language === 'ar') {
        document.dir = 'rtl'
        vPrice.addEventListener("mouseover", function() {
            vMenu.style.display = 'flex'
            vMenu.style.right = '58%';
            vMenu.style.width = '210px'
            vMenu.style.height = '50px'
            vMenu.innerHTML = `
            <ul class ="menu_list">
                <li class="menu_links"><a data-i18n ="housePrice" class="menu_a" href="houseprice.html">أسعار المنزل</a></li>

            </ul>
            
            `
                //  <li class="menu_links"><a class="menu_a" href="#">الإيجار مقابل شراء الآلة الحاسبة</a></li>
                //  <li class="menu_links"><a class="menu_a" href="#">مؤشر أسعار دبي</a></li>

            setTimeout(() => {
                vMenu.style.opacity = 1
            }, 300);

        });

        vExplore.addEventListener("mouseover", function() {

            vMenu.style.display = 'flex';
            vMenu.style.right = '68%';
            vMenu.style.width = '200px'
            vMenu.style.height = '170px'
            vMenu.innerHTML = `
            <ul class ="menu_list">
            <li class="menu_links2"><a data-i18n ="buildingReviews" class="menu_a2 " href="buildingreviews.html">تقييمات البناء</a></li>
            <li class="menu_links2"><a data-i18n ="communityGuides" class="menu_a2 on-page" href="community.html">أدلة المجتمع</a></li>
            <li class="menu_links2"><a data-i18n ="prpBlog" class="menu_a2" href="blog.html">مدونة الملكية</a></li>
            </ul>
            
            `
                //<li class="menu_links2"><a data-i18n ="rentersGuide" class="menu_a2" href="../HTML/renters.html">دليل المستأجر</a></li>
                //<li class="menu_links2"><a data-i18n ="buyersGuide" class="menu_a2" href="../HTML/buyers.html">دليل المشترين</a></li>
                //<li class="menu_links2"><a data-i18n ="mortgages" class="menu_a2" href="HTML/motrag.html">الرهون العقارية</a></li>

            setTimeout(() => {
                vMenu.style.opacity = 1
            }, 300);

        });



    } else {
        document.dir = 'ltr'

        vPrice.addEventListener("mouseover", function() {

            vMenu.style.display = 'flex'
            vMenu.style.left = '62%';
            vMenu.style.width = '210px'
            vMenu.style.height = '50px'
            vMenu.innerHTML = `
            <ul class ="menu_list">
                <li class="menu_links"><a data-i18n ="housePrice" class="menu_a" href="houseprice.html">House Prices</a></li>
            </ul>
            
            `
                // <li class="menu_links"><a class="menu_a" href="#">Rent Vs Buy Calculator</a></li>
                // <li class="menu_links"><a class="menu_a" href="#">Mo'asher: Dubai Price Index</a></li>

            setTimeout(() => {
                vMenu.style.opacity = 1
            }, 300);

        });
        vExplore.addEventListener("mouseover", function() {
            vMenu.style.display = 'flex';
            vMenu.style.left = '71%';
            vMenu.style.width = '200px'
            vMenu.style.height = '170px'

            vMenu.innerHTML = `
            <ul class ="menu_list">
            <li class="menu_links2"><a data-i18n ="buildingReviews" class="menu_a2" href="buildingreviews.html">Building Reviews</a></li>
            <li class="menu_links2"><a data-i18n ="communityGuides" class="menu_a2 on-page" href="community.html">Community Guides</a></li>
            <li class="menu_links2"><a data-i18n ="prpBlog" class="menu_a2" href="blog.html">Property Blog</a></li>
        
            </ul>
            
            `
            setTimeout(() => {
                vMenu.style.opacity = 1
            }, 300);

        });


    }
}


languageSelector2.addEventListener('change', (event) => {
    setLanguage2(event.target.value)
});

const setLanguage2 = (language) => {
    const elements = document.querySelectorAll('[data-i18n]');
    console.log(elements);
    elements.forEach((element) => {
        const translationsKey = element.getAttribute('data-i18n');
        element.textContent = translations[language][translationsKey]
    });


    if (language === 'ar') {
        document.dir = 'rtl'
        vPrice.addEventListener("mouseover", function() {
            vMenu.style.display = 'flex'
            vMenu.style.right = '58%';
            vMenu.style.width = '210px'
            vMenu.style.height = '50px'
            vMenu.innerHTML = `
            <ul class ="menu_list">
                <li class="menu_links"><a data-i18n ="housePrice" class="menu_a" href="houseprice.html">أسعار المنزل</a></li>

            </ul>
            
            `
                //  <li class="menu_links"><a class="menu_a" href="#">الإيجار مقابل شراء الآلة الحاسبة</a></li>
                //  <li class="menu_links"><a class="menu_a" href="#">مؤشر أسعار دبي</a></li>

            setTimeout(() => {
                vMenu.style.opacity = 1
            }, 300);

        });

        vExplore.addEventListener("mouseover", function() {

            vMenu.style.display = 'flex';
            vMenu.style.right = '68%';
            vMenu.style.width = '200px'
            vMenu.style.height = '170px'
            vMenu.innerHTML = `
            <ul class ="menu_list">
            <li class="menu_links2"><a data-i18n ="buildingReviews" class="menu_a2" href="buildingreviews.html">تقييمات البناء</a></li>
            <li class="menu_links2"><a data-i18n ="communityGuides" class="menu_a2 on-page" href="community.html">أدلة المجتمع</a></li>
            <li class="menu_links2"><a data-i18n ="prpBlog" class="menu_a2" href="blog.html">مدونة الملكية</a></li>
            </ul>
            
            `
                //<li class="menu_links2"><a data-i18n ="rentersGuide" class="menu_a2" href="../HTML/renters.html">دليل المستأجر</a></li>
                //<li class="menu_links2"><a data-i18n ="buyersGuide" class="menu_a2" href="../HTML/buyers.html">دليل المشترين</a></li>
                //<li class="menu_links2"><a data-i18n ="mortgages" class="menu_a2" href="HTML/motrag.html">الرهون العقارية</a></li>

            setTimeout(() => {
                vMenu.style.opacity = 1
            }, 300);

        });



    } else {
        document.dir = 'ltr'

        vPrice.addEventListener("mouseover", function() {

            vMenu.style.display = 'flex'
            vMenu.style.left = '62%';
            vMenu.style.width = '210px'
            vMenu.style.height = '50px'
            vMenu.innerHTML = `
            <ul class ="menu_list">
                <li class="menu_links"><a data-i18n ="housePrice" class="menu_a" href="houseprice.html">House Prices</a></li>
            </ul>
            
            `
                // <li class="menu_links"><a class="menu_a" href="#">Rent Vs Buy Calculator</a></li>
                // <li class="menu_links"><a class="menu_a" href="#">Mo'asher: Dubai Price Index</a></li>

            setTimeout(() => {
                vMenu.style.opacity = 1
            }, 300);

        });
        vExplore.addEventListener("mouseover", function() {
            vMenu.style.display = 'flex';
            vMenu.style.left = '71%';
            vMenu.style.width = '200px'
            vMenu.style.height = '170px'

            vMenu.innerHTML = `
            <ul class ="menu_list">
            <li class="menu_links2"><a data-i18n ="buildingReviews" class="menu_a2" href="buildingreviews.html">Building Reviews</a></li>
            <li class="menu_links2"><a data-i18n ="communityGuides" class="menu_a2 on-page" href="community.html">Community Guides</a></li>
            <li class="menu_links2"><a data-i18n ="prpBlog" class="menu_a2" href="blog.html">Property Blog</a></li>
        
            </ul>
            
            `
            setTimeout(() => {
                vMenu.style.opacity = 1
            }, 300);

        });


    }
}