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

const vBlogs = document.getElementById('blogs')
const PriceEnd = document.getElementById('priceEnd')
const priceOne = document.getElementById('price1')
const priceTwo = document.getElementById('price2')
const priceThree = document.getElementById('price3')
const priceFour = document.getElementById('price4')
const vBtnOne = document.getElementById('btn1');
const vBtnTwo = document.getElementById('btn2');
const vHedding = document.getElementById('hed')
vBtnOne.addEventListener('click', function() {
    vBtnTwo.style.backgroundColor = 'rgba(0, 0, 0, 0)'
    vBtnOne.style.backgroundColor = 'rgb(228, 50, 76)'
    priceFour.style.opacity = '0'
    priceThree.style.opacity = '0'
    priceTwo.style.opacity = '0'
    priceOne.style.opacity = '0'
    PriceEnd.style.opacity = '0'
    vBlogs.style.opacity = '0'
    vHedding.style.opacity = 0

    setTimeout(() => {
        priceOne.innerHTML = '1,500,000 AED'
        priceTwo.innerHTML = '1,180,000 AED'
        priceThree.innerHTML = '105,000 AED'
        priceFour.innerHTML = '7.00%'
        PriceEnd.innerHTML = 'Starting from 15,284 AED'
        vHedding.innerHTML = 'House Prices in Dubai Marina'

        setTimeout(() => {
            PriceEnd.style.opacity = '1'
            priceFour.style.opacity = '1'
            priceThree.style.opacity = '1'
            priceTwo.style.opacity = '1'
            priceOne.style.opacity = '1'
            vHedding.style.opacity = 1
            vBlogs.style.display = 'flex'
            setTimeout(() => {
                vBlogs.style.opacity = '1'
            }, 90);
        }, 100);
    }, 200);


})
vBtnTwo.addEventListener('click', function() {
    vBtnOne.style.backgroundColor = 'rgba(0, 0, 0, 0)'
    vBtnTwo.style.backgroundColor = 'rgb(228, 50, 76)'
    priceFour.style.opacity = 0
    priceThree.style.opacity = 0
    priceTwo.style.opacity = 0
    priceOne.style.opacity = 0
    PriceEnd.style.opacity = 0
    vHedding.style.opacity = 0
    vBlogs.style.opacity = 0
    setTimeout(() => {
        vBlogs.style.display = 'none'
    }, 330);
    setTimeout(() => {
        priceOne.innerHTML = '838,500 AED'
        priceTwo.innerHTML = '– –'
        priceThree.innerHTML = '58,000 AED'
        priceFour.innerHTML = '6.90%'
        vHedding.innerHTML = 'House Prices in Al Reem Island'
        setTimeout(() => {
            priceFour.style.opacity = '1'
            priceThree.style.opacity = '1'
            priceTwo.style.opacity = '1'
            priceOne.style.opacity = '1'
            vHedding.style.opacity = 1
        }, 100);
    }, 200);
})



const vLang = document.getElementById('english');
const vMenu = document.getElementById('menu');
const vMenuTwo = document.getElementById('menu2');
const vExplore = document.getElementById('explore');
const vPrice = document.getElementById('price');
const vSelect = document.getElementById('select');

//! MENU ONE //

vExplore.addEventListener("mouseover", function() {
    vMenu.style.display = 'flex';
    vMenu.style.left = '69%';
    vMenu.style.width = '200px'
    vMenu.style.height = '170px'

    vMenu.innerHTML = `
    <ul class ="menu_list">
    <li class="menu_links2"><a data-i18n ="buildingReviews" class="menu_a2 " href="buildingreviews.html">Building Reviews</a></li>
    <li class="menu_links2"><a data-i18n ="communityGuides" class="menu_a2" href="community.html">Community Guides</a></li>
    <li class="menu_links2"><a data-i18n ="prpBlog" class="menu_a2" href="blog.html">Property Blog</a></li>

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
    vMenu.style.left = '58%';
    vMenu.style.width = '270px'
    vMenu.style.height = '50px'
    vMenu.innerHTML = `
    <ul class ="menu_list">
        <li class="menu_links"><a data-i18n ="housePrice" class="menu_a on-page" href="houseprice.html">House Prices</a></li>
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
        typeH: "Property Type",
        typeLi1: "Apartment",
        typeLi2: "Villa / Twonhouse",
        typeLi12: "Hotel & Hotel Apartment",
        bedH: "Number of the Bedrooms",
        bedLi: "Studio",
        bathH: "Baths",
        priceH: "Price",
        findBtn: "Find",
        helpToolResult: "13 results",
        helpToolheading: "Properties for sale in UAE",
        pageHeading: "House Price",
        pageSpan: "See house values in different communities and compare asking prices, actual transaction prices and rental yields.",
        dubai: "Dubai",
        abuDahbi: "Abu Dahbi",
        mainHeading: "House Prices in Dubai Marina",
        completionH: "Completion Status",
        completionLi1: "Completed Properties",
        completionli2: "off-plan",
        serachBtn: "Show Trends",
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
        typeH: "نوع الملكية",
        typeLi1: "شقة",
        typeLi2: "تاون هاوس / فيلا",
        bedH: "عدد غرف النوم",
        bedLi: "استوديو",
        pageHeading: "سعر المنزل",
        pageSpan: "اطلع على قيم المنازل في المجتمعات المختلفة وقارن الأسعار المطلوبة وأسعار المعاملات الفعلية وعوائد الإيجار.",
        dubai: "دبي",
        abuDahbi: "أبوظبي",
        mainHeading: "أسعار المنازل في دبي مارينا",
        completionH: "حالة إكمال",
        completionli1: "خصائص مكتملة",
        completionli2: "على الخارطة",
        serachBtn: "اظهر النتائج",
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

const languageSelector2 = document.querySelector(".dropdown-select2");

const languageSelector = document.querySelector(".dropdown-select");
const vFinder2Inp1 = document.getElementById("finder2Inp1");
const vfinder2btn = document.getElementById("finder2btn");
const vSearchGlass = document.getElementById("searchGlass");




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



        vFinder2Inp1.style.borderLeft = "none"
        vFinder2Inp1.style.padding = "0px 50px 0px 7px"
        vSearchGlass.style.right = "35px"
        vSearchGlass.style.left = "0"
        vPrice.addEventListener("mouseover", function() {
            vMenu.style.display = 'flex'
            vMenu.style.right = '55%';
            vMenu.style.width = '270px'
            vMenu.style.height = '50px'
            vMenu.innerHTML = `
            <ul class ="menu_list">
                <li class="menu_links"><a data-i18n ="housePrice" class="menu_a on-page" href="houseprice.html">أسعار المنزل</a></li>

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
            <li class="menu_links2"><a data-i18n ="communityGuides" class="menu_a2" href="community.html">أدلة المجتمع</a></li>
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



        vBtnOne.addEventListener('click', function() {
            vBtnTwo.style.backgroundColor = 'rgba(0, 0, 0, 0)'
            vBtnOne.style.backgroundColor = 'rgb(228, 50, 76)'
            priceFour.style.opacity = '0'
            priceThree.style.opacity = '0'
            priceTwo.style.opacity = '0'
            priceOne.style.opacity = '0'
            PriceEnd.style.opacity = '0'
            vBlogs.style.opacity = '0'
            vHedding.style.opacity = 0

            setTimeout(() => {
                priceOne.innerHTML = '1,500,000 AED'
                priceTwo.innerHTML = '1,180,000 AED'
                priceThree.innerHTML = '105,000 AED'
                priceFour.innerHTML = '7.00%'
                PriceEnd.innerHTML = 'تبد من  AED 15,284 '
                vHedding.innerHTML = 'أسعار المنازل في دبي مارينا'

                setTimeout(() => {
                    PriceEnd.style.opacity = '1'
                    priceFour.style.opacity = '1'
                    priceThree.style.opacity = '1'
                    priceTwo.style.opacity = '1'
                    priceOne.style.opacity = '1'
                    vHedding.style.opacity = 1
                    vBlogs.style.display = 'flex'
                    setTimeout(() => {
                        vBlogs.style.opacity = '1'
                    }, 90);
                }, 100);
            }, 200);


        })
        vBtnTwo.addEventListener('click', function() {
            vBtnOne.style.backgroundColor = 'rgba(0, 0, 0, 0)'
            vBtnTwo.style.backgroundColor = 'rgb(228, 50, 76)'
            priceFour.style.opacity = 0
            priceThree.style.opacity = 0
            priceTwo.style.opacity = 0
            priceOne.style.opacity = 0
            PriceEnd.style.opacity = 0
            vHedding.style.opacity = 0
            vBlogs.style.opacity = 0
            setTimeout(() => {
                vBlogs.style.display = 'none'
            }, 330);
            setTimeout(() => {
                priceOne.innerHTML = '838,500 AED'
                priceTwo.innerHTML = '– –'
                priceThree.innerHTML = '58,000 AED'
                priceFour.innerHTML = '6.90%'
                vHedding.innerHTML = 'أسعار المنازل في جزيرة الريم'
                setTimeout(() => {
                    priceFour.style.opacity = '1'
                    priceThree.style.opacity = '1'
                    priceTwo.style.opacity = '1'
                    priceOne.style.opacity = '1'
                    vHedding.style.opacity = 1
                }, 100);
            }, 200);
        })



    } else {
        document.dir = 'ltr'




        vFinder2Inp1.style.borderRight = "none"
        vFinder2Inp1.style.padding = "0 7px 0 50px"
        vSearchGlass.style.left = "35px"
        vSearchGlass.style.right = "0"
        vPrice.addEventListener("mouseover", function() {

            vMenu.style.display = 'flex'
            vMenu.style.left = '58%';
            vMenu.style.width = '270px'
            vMenu.style.height = '50px'
            vMenu.innerHTML = `
            <ul class ="menu_list">
                <li class="menu_links"><a data-i18n ="housePrice" class="menu_a on-page" href="houseprice.html">House Prices</a></li>
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
            vMenu.style.left = '69%';
            vMenu.style.width = '200px'
            vMenu.style.height = '170px'

            vMenu.innerHTML = `
            <ul class ="menu_list">
            <li class="menu_links2"><a data-i18n ="buildingReviews" class="menu_a2 " href="buildingreviews.html">Building Reviews</a></li>
            <li class="menu_links2"><a data-i18n ="communityGuides" class="menu_a2" href="community.html">Community Guides</a></li>
            <li class="menu_links2"><a data-i18n ="prpBlog" class="menu_a2" href="blog.html">Property Blog</a></li>
        
            </ul>
            
            `
            setTimeout(() => {
                vMenu.style.opacity = 1
            }, 300);

        });



        vBtnOne.addEventListener('click', function() {
            vBtnTwo.style.backgroundColor = 'rgba(0, 0, 0, 0)'
            vBtnOne.style.backgroundColor = 'rgb(228, 50, 76)'
            priceFour.style.opacity = '0'
            priceThree.style.opacity = '0'
            priceTwo.style.opacity = '0'
            priceOne.style.opacity = '0'
            PriceEnd.style.opacity = '0'
            vBlogs.style.opacity = '0'
            vHedding.style.opacity = 0

            setTimeout(() => {
                priceOne.innerHTML = '1,500,000 AED'
                priceTwo.innerHTML = '1,180,000 AED'
                priceThree.innerHTML = '105,000 AED'
                priceFour.innerHTML = '7.00%'
                PriceEnd.innerHTML = 'Starting from 15,284 AED'
                vHedding.innerHTML = 'House Prices in Dubai Marina'

                setTimeout(() => {
                    PriceEnd.style.opacity = '1'
                    priceFour.style.opacity = '1'
                    priceThree.style.opacity = '1'
                    priceTwo.style.opacity = '1'
                    priceOne.style.opacity = '1'
                    vHedding.style.opacity = 1
                    vBlogs.style.display = 'flex'
                    setTimeout(() => {
                        vBlogs.style.opacity = '1'
                    }, 90);
                }, 100);
            }, 200);


        })
        vBtnTwo.addEventListener('click', function() {
            vBtnOne.style.backgroundColor = 'rgba(0, 0, 0, 0)'
            vBtnTwo.style.backgroundColor = 'rgb(228, 50, 76)'
            priceFour.style.opacity = 0
            priceThree.style.opacity = 0
            priceTwo.style.opacity = 0
            priceOne.style.opacity = 0
            PriceEnd.style.opacity = 0
            vHedding.style.opacity = 0
            vBlogs.style.opacity = 0
            setTimeout(() => {
                vBlogs.style.display = 'none'
            }, 330);
            setTimeout(() => {
                priceOne.innerHTML = '838,500 AED'
                priceTwo.innerHTML = '– –'
                priceThree.innerHTML = '58,000 AED'
                priceFour.innerHTML = '6.90%'
                vHedding.innerHTML = 'House Prices in Al Reem Island'
                setTimeout(() => {
                    priceFour.style.opacity = '1'
                    priceThree.style.opacity = '1'
                    priceTwo.style.opacity = '1'
                    priceOne.style.opacity = '1'
                    vHedding.style.opacity = 1
                }, 100);
            }, 200);
        })



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

        vfinder2btn.style.borderRadius = "15px 0 0 15px"
        vFinder2Inp1.style.borderRadius = " 0 15px 15px 0"


        vFinder2Inp1.style.borderLeft = "none"
        vFinder2Inp1.style.padding = "0px 50px 0px 7px"
        vSearchGlass.style.right = "35px"
        vSearchGlass.style.left = "0"
        vPrice.addEventListener("mouseover", function() {
            vMenu.style.display = 'flex'
            vMenu.style.right = '55%';
            vMenu.style.width = '270px'
            vMenu.style.height = '50px'
            vMenu.innerHTML = `
            <ul class ="menu_list">
                <li class="menu_links"><a data-i18n ="housePrice" class="menu_a on-page" href="houseprice.html">أسعار المنزل</a></li>

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
            <li class="menu_links2"><a data-i18n ="communityGuides" class="menu_a2" href="community.html">أدلة المجتمع</a></li>
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



        vBtnOne.addEventListener('click', function() {
            vBtnTwo.style.backgroundColor = 'rgba(0, 0, 0, 0)'
            vBtnOne.style.backgroundColor = 'rgb(228, 50, 76)'
            priceFour.style.opacity = '0'
            priceThree.style.opacity = '0'
            priceTwo.style.opacity = '0'
            priceOne.style.opacity = '0'
            PriceEnd.style.opacity = '0'
            vBlogs.style.opacity = '0'
            vHedding.style.opacity = 0

            setTimeout(() => {
                priceOne.innerHTML = '1,500,000 AED'
                priceTwo.innerHTML = '1,180,000 AED'
                priceThree.innerHTML = '105,000 AED'
                priceFour.innerHTML = '7.00%'
                PriceEnd.innerHTML = 'تبد من  AED 15,284 '
                vHedding.innerHTML = 'أسعار المنازل في دبي مارينا'

                setTimeout(() => {
                    PriceEnd.style.opacity = '1'
                    priceFour.style.opacity = '1'
                    priceThree.style.opacity = '1'
                    priceTwo.style.opacity = '1'
                    priceOne.style.opacity = '1'
                    vHedding.style.opacity = 1
                    vBlogs.style.display = 'flex'
                    setTimeout(() => {
                        vBlogs.style.opacity = '1'
                    }, 90);
                }, 100);
            }, 200);


        })
        vBtnTwo.addEventListener('click', function() {
            vBtnOne.style.backgroundColor = 'rgba(0, 0, 0, 0)'
            vBtnTwo.style.backgroundColor = 'rgb(228, 50, 76)'
            priceFour.style.opacity = 0
            priceThree.style.opacity = 0
            priceTwo.style.opacity = 0
            priceOne.style.opacity = 0
            PriceEnd.style.opacity = 0
            vHedding.style.opacity = 0
            vBlogs.style.opacity = 0
            setTimeout(() => {
                vBlogs.style.display = 'none'
            }, 330);
            setTimeout(() => {
                priceOne.innerHTML = '838,500 AED'
                priceTwo.innerHTML = '– –'
                priceThree.innerHTML = '58,000 AED'
                priceFour.innerHTML = '6.90%'
                vHedding.innerHTML = 'أسعار المنازل في جزيرة الريم'
                setTimeout(() => {
                    priceFour.style.opacity = '1'
                    priceThree.style.opacity = '1'
                    priceTwo.style.opacity = '1'
                    priceOne.style.opacity = '1'
                    vHedding.style.opacity = 1
                }, 100);
            }, 200);
        })



    } else {
        document.dir = 'ltr'

        vFinder2Inp1.style.borderRadius = "15px 0 0 15px"
        vfinder2btn.style.borderRadius = " 0 15px 15px 0"


        vFinder2Inp1.style.borderRight = "none"
        vFinder2Inp1.style.padding = "0 7px 0 50px"
        vSearchGlass.style.left = "35px"
        vSearchGlass.style.right = "0"
        vPrice.addEventListener("mouseover", function() {

            vMenu.style.display = 'flex'
            vMenu.style.left = '58%';
            vMenu.style.width = '270px'
            vMenu.style.height = '50px'
            vMenu.innerHTML = `
            <ul class ="menu_list">
                <li class="menu_links"><a data-i18n ="housePrice" class="menu_a on-page" href="houseprice.html">House Prices</a></li>
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
            vMenu.style.left = '69%';
            vMenu.style.width = '200px'
            vMenu.style.height = '170px'

            vMenu.innerHTML = `
            <ul class ="menu_list">
            <li class="menu_links2"><a data-i18n ="buildingReviews" class="menu_a2 " href="buildingreviews.html">Building Reviews</a></li>
            <li class="menu_links2"><a data-i18n ="communityGuides" class="menu_a2" href="community.html">Community Guides</a></li>
            <li class="menu_links2"><a data-i18n ="prpBlog" class="menu_a2" href="blog.html">Property Blog</a></li>
        
            </ul>
            
            `
            setTimeout(() => {
                vMenu.style.opacity = 1
            }, 300);

        });



        vBtnOne.addEventListener('click', function() {
            vBtnTwo.style.backgroundColor = 'rgba(0, 0, 0, 0)'
            vBtnOne.style.backgroundColor = 'rgb(228, 50, 76)'
            priceFour.style.opacity = '0'
            priceThree.style.opacity = '0'
            priceTwo.style.opacity = '0'
            priceOne.style.opacity = '0'
            PriceEnd.style.opacity = '0'
            vBlogs.style.opacity = '0'
            vHedding.style.opacity = 0

            setTimeout(() => {
                priceOne.innerHTML = '1,500,000 AED'
                priceTwo.innerHTML = '1,180,000 AED'
                priceThree.innerHTML = '105,000 AED'
                priceFour.innerHTML = '7.00%'
                PriceEnd.innerHTML = 'Starting from 15,284 AED'
                vHedding.innerHTML = 'House Prices in Dubai Marina'

                setTimeout(() => {
                    PriceEnd.style.opacity = '1'
                    priceFour.style.opacity = '1'
                    priceThree.style.opacity = '1'
                    priceTwo.style.opacity = '1'
                    priceOne.style.opacity = '1'
                    vHedding.style.opacity = 1
                    vBlogs.style.display = 'flex'
                    setTimeout(() => {
                        vBlogs.style.opacity = '1'
                    }, 90);
                }, 100);
            }, 200);


        })
        vBtnTwo.addEventListener('click', function() {
            vBtnOne.style.backgroundColor = 'rgba(0, 0, 0, 0)'
            vBtnTwo.style.backgroundColor = 'rgb(228, 50, 76)'
            priceFour.style.opacity = 0
            priceThree.style.opacity = 0
            priceTwo.style.opacity = 0
            priceOne.style.opacity = 0
            PriceEnd.style.opacity = 0
            vHedding.style.opacity = 0
            vBlogs.style.opacity = 0
            setTimeout(() => {
                vBlogs.style.display = 'none'
            }, 330);
            setTimeout(() => {
                priceOne.innerHTML = '838,500 AED'
                priceTwo.innerHTML = '– –'
                priceThree.innerHTML = '58,000 AED'
                priceFour.innerHTML = '6.90%'
                vHedding.innerHTML = 'House Prices in Al Reem Island'
                setTimeout(() => {
                    priceFour.style.opacity = '1'
                    priceThree.style.opacity = '1'
                    priceTwo.style.opacity = '1'
                    priceOne.style.opacity = '1'
                    vHedding.style.opacity = 1
                }, 100);
            }, 200);
        })



    }
}