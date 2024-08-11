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

// const vHeader = document.querySelector("#header");
// const vNavLinks = document.querySelector("#ul");
// const vNav = document.querySelector("#nav");
// window.addEventListener("scroll", () => {
//     if (window.scrollY >= 100) {
//         vHeader.classList.add("trans-header");
//         setTimeout(() => {
//             vHeader.classList.add("pos-header");
//             vMain.classList.add("mar");
//         }, 150);
//     } else {
//         vHeader.classList.remove("trans-header");
//         setTimeout(() => {
//             vHeader.classList.remove("pos-header");
//             vMain.classList.remove("mar");
//         }, 150);
//     }
// });


//! MENUS START //


const vLang = document.getElementById('english');
const vMenu = document.getElementById('menu');
const vMenuTwo = document.getElementById('menu2');
const vExplore = document.getElementById('explore');
const vPrice = document.getElementById('price');
const vSelect = document.getElementById('select');

// ! MENU TWO //

vExplore.addEventListener("mouseover", function() {
    vMenu.style.display = 'flex';
    vMenu.style.left = '69%';
    vMenu.style.width = '200px'
    vMenu.style.height = '170px'
    vMenu.style.display = 'flex'
    vMenu.style.top = '75px'

    vMenu.innerHTML = `
    <ul class ="menu_list">
    <li class="menu_links2"><a data-i18n ="buildingReviews" class="menu_a2 " href="HTML/buildingreviews.html">Building Reviews</a></li>
    <li class="menu_links2"><a data-i18n ="communityGuides" class="menu_a2" href="../HTML/community.html">Community Guides</a></li>
    <li class="menu_links2"><a data-i18n ="prpBlog" class="menu_a2" href="HTML/blog.html">Property Blog</a></li>

    </ul>
    
    `
        // <li class="menu_links2"><a data-i18n ="rentersGuide" class="menu_a2" href="../HTML/renters.html">Renter's Guide</a></li>
        // <li class="menu_links2"><a data-i18n ="buyersGuide" class="menu_a2" href="../HTML/buyers.html">Buyer's Guide</a></li>
        // <li class="menu_links2"><a data-i18n ="mortgages" class="menu_a2" href="HTML/motrag.html">Mortgages</a></li>

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
    vMenu.style.left = '59%';
    vMenu.style.width = '220px'
    vMenu.style.height = '50px'
    vMenu.style.top = '75px'

    vMenu.innerHTML = `
    <ul class ="menu_list">
        <li class="menu_links"><a data-i18n ="housePrice" class="menu_a" href="HTML/houseprice.html">House Prices</a></li>

    </ul>
    
    `
        //  <li class="menu_links"><a class="menu_a" href="#">Rent Vs Buy Calculator</a></li>
        //  <li class="menu_links"><a class="menu_a" href="#">Mo'asher: Dubai Price Index</a></li>

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




//! BUY & RENT START //


let vBuy = document.getElementById('buy');
let vRent = document.getElementById('rent');
let vCommerical = document.getElementById('commerical');
let vNewPrj = document.getElementById('newPrj');

vBuy.addEventListener('click', () => {
    vBuy.style.backgroundColor = 'rgb(62 114 255)'
    vRent.style.backgroundColor = 'rgba(212, 203, 203, 0.247)'
    vRent.style.border = 'none'
    vCommerical.style.backgroundColor = 'rgba(212, 203, 203, 0.247)'
    vCommerical.style.border = 'none'
    vNewPrj.style.backgroundColor = 'rgba(212, 203, 203, 0.247)'
    vNewPrj.style.border = 'none'
})

vRent.addEventListener('click', () => {
    vRent.style.backgroundColor = 'rgb(62 114 255)'
    vBuy.style.backgroundColor = 'rgba(212, 203, 203, 0.247)'
    vBuy.style.border = 'none'
    vCommerical.style.backgroundColor = 'rgba(212, 203, 203, 0.247)'
    vCommerical.style.border = 'none'
    vNewPrj.style.backgroundColor = 'rgba(212, 203, 203, 0.247)'
    vNewPrj.style.border = 'none'
})

vCommerical.addEventListener('click', () => {
    vCommerical.style.backgroundColor = 'rgb(62 114 255)'
    vBuy.style.backgroundColor = 'rgba(212, 203, 203, 0.247)'
    vBuy.style.border = 'none'
    vRent.style.backgroundColor = 'rgba(212, 203, 203, 0.247)'
    vRent.style.border = 'none'
    vNewPrj.style.backgroundColor = 'rgba(212, 203, 203, 0.247)'
    vNewPrj.style.border = 'none'
})

vNewPrj.addEventListener('click', () => {
    vNewPrj.style.backgroundColor = 'rgb(62 114 255)'
    vBuy.style.backgroundColor = 'rgba(212, 203, 203, 0.247)'
    vBuy.style.border = 'none'
    vRent.style.backgroundColor = 'rgba(212, 203, 203, 0.247)'
    vRent.style.border = 'none'
    vCommerical.style.backgroundColor = 'rgba(212, 203, 203, 0.247)'
    vCommerical.style.border = 'none'
})

//! BUY & RENT END //




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

//! Translate


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
        mainHead: "We Open Doors",
        typeH: "Property Type",
        typeLi1: "Apartment",
        typeLi2: "Villa",
        typeLi3: "Twon House",
        typeLi4: "Pent House",
        typeLi5: "Compound",
        typeLi6: "Duplex",
        typeLi7: "Full Flor",
        typeLi8: "Half Flor",
        typeLi9: "Whole Building",
        typeLi10: "Bulk Rent Unit",
        typeLi11: "Bungalow",
        typeLi12: "Hotel & Hotel Apartment",
        bedH: "Bedrooms",
        bedLi: "Studio",
        bathH: "Baths",
        priceH: "Price",
        main2Head: "Home search made easy",
        spn4: "Discover how we can help you find your dream home",
        blog1Head: "Find your SuperAgent",
        p1: "The most responsive agents with up-to-date and improved accuracy on the properties you are searching for.",
        blog2Head: "Verified Listings",
        p2: "Explore Property listings that have passed our verification process",
        newsHeading: "Something New Everyday",
        newsHeading2: "New properties for rent",
        newsHeading3: "New properties for sale",
        city1: "Dubai",
        type1: "The Palm Jumeirah",
        discription1: "108 new properties for rent",
        newsHeading4: "Meet the SuperAgents",
        fr1H: "Agent Hub: Grow your audience, boost your brand",
        fr1P: "For real estate agents who want to make the most out of their presence on verlux property",
        fr1Btn: "Go to Agent Hub",
        fr2H: "Agent Hub:",
        fr2P: "List your property with us",
        fr2Btn: "Get Started",
        blogH1: "Your Guide to Healthy Eating in Dubai",
        blogP1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, asperiores! Quod nobis pariatur aliquid doloremque? Est delectus quasi ad, vel reprehenderit sit eveniet, quas fugit doloremque consequuntur rerum facere officiis?",
        blogH2: "Your Guide to Healthy Eating in Dubai",
        blogP2: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, asperiores! Quod nobis pariatur aliquid doloremque? Est delectus quasi ad, vel reprehenderit sit eveniet, quas fugit doloremque consequuntur rerum facere officiis?",
        blogH3: "Your Guide to Healthy Eating in Dubai",
        blogP3: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, asperiores! Quod nobis pariatur aliquid doloremque? Est delectus quasi ad, vel reprehenderit sit eveniet, quas fugit doloremque consequuntur rerum facere officiis?",
        blogMoreBtn: "More Blogs",
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
        mainHead: "نحن نفتح الأبواب",
        typeH: "نوع الملكية",
        typeLi1: "شقة",
        typeLi2: "فيلا",
        typeLi3: "تاون هاوس",
        typeLi4: "بنت هاوس",
        typeLi5: "مُجَمَّع",
        typeLi6: "دوبلكس",
        typeLi7: "فلور كامل",
        typeLi8: "نصف فلور",
        typeLi9: "المبنى كله",
        typeLi10: "وحدة الإيجار بالجملة",
        typeLi11: "بيت من طابق واحد",
        typeLi12: "فندق وشقة فندقية",
        bedH: "غرف نوم",
        bedLi: "استوديو",
        bathH: "الحمامات",
        priceH: "السعر",
        main2Head: "أصبح البحث عن المنزل سهلاً",
        spn4: "اكتشف كيف يمكننا مساعدتك في العثور على منزل أحلامك",
        blog1Head: "ابحث عن الوكيل الفائق الخاص بك",
        p1: "الوكلاء الأكثر استجابة ودقة محدثة ومحسنة فيما يتعلق بالعقارات التي تبحث عنها.",
        blog2Head: "القوائم التي تم التحقق منها",
        p2: "استكشف قوائم العقارات التي اجتازت عملية التحقق لدينا",
        newsHeading: "شيء جديد كل يوم",
        newsHeading2: "عقارات جديدة للإيجار",
        newsHeading3: "عقارات جديدة للبيع",
        city1: "دبي",
        type1: "نخلة جميرا",
        discription1: "108 عقارات جديدة للإيجار",
        newsHeading4: "تعرف على الوكلاء الخارقين",
        fr1H: "مركز الوكيل: قم بزيادة جمهورك وتعزيز علامتك التجارية",
        fr1P: "لوكلاء العقارات الذين يرغبون في تحقيق أقصى استفادة من وجودهم على فيرلوكس بروبيرتي ",
        fr1Btn: "انتقل إلى مركز الوكيل",
        fr2H: "مركز الوكيل:",
        fr2P: "قم بإدراج الممتلكات الخاصة بك معنا",
        fr2Btn: "البدء",
        blogH1: "دليلك للأكل الصحي في دبي",
        blogP1: "العميل نفسه، سيكون العميل قادرا على متابعة للشركة. عظيم، أقسى! أننا بمنأى عن بعض الألم؟ فهل يتم اختياره كأنه، أم أنه سينتقد، سيحدث ما يهرب وينتج من الآلام من واجبات فعل الأشياء؟",
        blogH2: "دليلك للأكل الصحي في دبي",
        blogP2: "العميل نفسه، سيكون العميل قادرا على متابعة للشركة. عظيم، أقسى! أننا بمنأى عن بعض الألم؟ فهل يتم اختياره كأنه، أم أنه سينتقد، سيحدث ما يهرب وينتج من الآلام من واجبات فعل الأشياء؟",
        blogH3: "دليلك للأكل الصحي في دبي",
        blogP3: "العميل نفسه، سيكون العميل قادرا على متابعة للشركة. عظيم، أقسى! أننا بمنأى عن بعض الألم؟ فهل يتم اختياره كأنه، أم أنه سينتقد، سيحدث ما يهرب وينتج من الآلام من واجبات فعل الأشياء؟",
        blogMoreBtn: "المزيد من المدونات",
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
        vPrice.addEventListener("mouseover", function() {
            vMenu.style.display = 'flex'
            vMenu.style.right = '59%';
            vMenu.style.width = '220px'
            vMenu.style.height = '50px'
            vMenu.style.top = '75px'

            vMenu.innerHTML = `
            <ul class ="menu_list">
                <li class="menu_links"><a data-i18n ="housePrice" class="menu_a" href="HTML/houseprice.html">أسعار المنزل</a></li>

            </ul>
            
            `
                //  <li class="menu_links"><a class="menu_a" href="#">الإيجار مقابل شراء الآلة الحاسبة</a></li>
                //  <li class="menu_links"><a class="menu_a" href="#">مؤشر أسعار دبي</a></li>

            setTimeout(() => {
                vMenu.style.opacity = 1
            }, 300);

        });

        vNewPrj.style.borderRadius = "15px 0 0 15px";
        vRent.style.borderRadius = "0 15px 15px 0";
        vfinder2btn.style.borderRadius = "25px 0 0 25px"
        vFinder2Inp1.style.borderRadius = " 0 25px 25px 0"
        vFinder2Inp1.style.borderLeft = "none"
        vFinder2Inp1.style.padding = "0px 50px 0px 7px"
        vSearchGlass.style.right = "21px"
        vSearchGlass.style.left = "0"

        vExplore.addEventListener("mouseover", function() {

            vMenu.style.display = 'flex';
            vMenu.style.right = '68%';
            vMenu.style.width = '200px'
            vMenu.style.height = '170px'
            vMenu.style.top = '75px'

            vMenu.innerHTML = `
            <ul class ="menu_list">
            <li class="menu_links2"><a data-i18n ="buildingReviews" class="menu_a2 " href="HTML/buildingreviews.html">تقييمات البناء</a></li>
            <li class="menu_links2"><a data-i18n ="communityGuides" class="menu_a2" href="../HTML/community.html">أدلة المجتمع</a></li>
            <li class="menu_links2"><a data-i18n ="prpBlog" class="menu_a2" href="HTML/blog.html">مدونة الملكية</a></li>
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
        vNewPrj.style.borderRadius = "0 15px 15px 0";
        vRent.style.borderRadius = "15px 0 0 15px";
        vFinder2Inp1.style.borderRadius = "25px 0 0 25px"
        vfinder2btn.style.borderRadius = " 0 25px 25px 0"
        vFinder2Inp1.style.borderRight = "none"
        vFinder2Inp1.style.padding = "0 7px 0 50px"
        vSearchGlass.style.left = "21px"
        vSearchGlass.style.right = "0"
        vPrice.addEventListener("mouseover", function() {

            vMenu.style.display = 'flex'
            vMenu.style.left = '59%';
            vMenu.style.width = '220px'
            vMenu.style.height = '50px'
            vMenu.style.top = '75px'
            vMenu.innerHTML = `
            <ul class ="menu_list">
                <li class="menu_links"><a data-i18n ="housePrice" class="menu_a" href="HTML/houseprice.html">House Prices</a></li>
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
            vMenu.style.top = '75px'


            vMenu.innerHTML = `
            <ul class ="menu_list">
            <li class="menu_links2"><a data-i18n ="buildingReviews" class="menu_a2 " href="HTML/buildingreviews.html">Building Reviews</a></li>
            <li class="menu_links2"><a data-i18n ="communityGuides" class="menu_a2" href="../HTML/community.html">Community Guides</a></li>
            <li class="menu_links2"><a data-i18n ="prpBlog" class="menu_a2" href="HTML/blog.html">Property Blog</a></li>

            </ul>
            
            `
            setTimeout(() => {
                vMenu.style.opacity = 1
            }, 300);

        });

        // <li class="menu_links2"><a data-i18n ="rentersGuide" class="menu_a2" href="../HTML/renters.html">Renter's Guide</a></li>
        // <li class="menu_links2"><a data-i18n ="buyersGuide" class="menu_a2" href="../HTML/buyers.html">Buyer's Guide</a></li>
        // <li class="menu_links2"><a data-i18n ="mortgages" class="menu_a2" href="HTML/motrag.html">Mortgages</a></li>

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
            vMenu.style.right = '55%';
            vMenu.style.width = '270px'
            vMenu.style.height = '50px'
            vMenu.innerHTML = `
            <ul class ="menu_list">
                <li class="menu_links"><a data-i18n ="housePrice" class="menu_a" href="HTML/houseprice.html">أسعار المنزل</a></li>

            </ul>
            
            `
                //  <li class="menu_links"><a class="menu_a" href="#">الإيجار مقابل شراء الآلة الحاسبة</a></li>
                //  <li class="menu_links"><a class="menu_a" href="#">مؤشر أسعار دبي</a></li>

            setTimeout(() => {
                vMenu.style.opacity = 1
            }, 300);

        });

        vNewPrj.style.borderRadius = "15px 0 0 15px";
        vRent.style.borderRadius = "0 15px 15px 0";
        vfinder2btn.style.borderRadius = "25px 0 0 25px"
        vFinder2Inp1.style.borderRadius = " 0 25px 25px 0"
        vFinder2Inp1.style.borderLeft = "none"
        vFinder2Inp1.style.padding = "0px 50px 0px 7px"
        vSearchGlass.style.right = "21px"
        vSearchGlass.style.left = "0"

        vExplore.addEventListener("mouseover", function() {

            vMenu.style.display = 'flex';
            vMenu.style.right = '68%';
            vMenu.style.width = '200px'
            vMenu.style.height = '170px'
            vMenu.innerHTML = `
            <ul class ="menu_list">
            <li class="menu_links2"><a data-i18n ="buildingReviews" class="menu_a2 " href="HTML/buildingreviews.html">تقييمات البناء</a></li>
            <li class="menu_links2"><a data-i18n ="communityGuides" class="menu_a2" href="../HTML/community.html">أدلة المجتمع</a></li>
            <li class="menu_links2"><a data-i18n ="prpBlog" class="menu_a2" href="HTML/blog.html">مدونة الملكية</a></li>
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
        vNewPrj.style.borderRadius = "0 15px 15px 0";
        vRent.style.borderRadius = "15px 0 0 15px";
        vFinder2Inp1.style.borderRadius = "25px 0 0 25px"
        vfinder2btn.style.borderRadius = " 0 25px 25px 0"
        vFinder2Inp1.style.borderRight = "none"
        vFinder2Inp1.style.padding = "0 7px 0 50px"
        vSearchGlass.style.left = "21px"
        vSearchGlass.style.right = "0"
        vPrice.addEventListener("mouseover", function() {

            vMenu.style.display = 'flex'
            vMenu.style.left = '60%';
            vMenu.style.width = '270px'
            vMenu.style.height = '50px'
            vMenu.innerHTML = `
            <ul class ="menu_list">
                <li class="menu_links"><a data-i18n ="housePrice" class="menu_a" href="HTML/houseprice.html">House Prices</a></li>
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
            <li class="menu_links2"><a data-i18n ="buildingReviews" class="menu_a2 " href="HTML/buildingreviews.html">Building Reviews</a></li>
            <li class="menu_links2"><a data-i18n ="communityGuides" class="menu_a2" href="../HTML/community.html">Community Guides</a></li>
            <li class="menu_links2"><a data-i18n ="prpBlog" class="menu_a2" href="HTML/blog.html">Property Blog</a></li>

            </ul>
            
            `
            setTimeout(() => {
                vMenu.style.opacity = 1
            }, 300);

        });

        // <li class="menu_links2"><a data-i18n ="rentersGuide" class="menu_a2" href="../HTML/renters.html">Renter's Guide</a></li>
        // <li class="menu_links2"><a data-i18n ="buyersGuide" class="menu_a2" href="../HTML/buyers.html">Buyer's Guide</a></li>
        // <li class="menu_links2"><a data-i18n ="mortgages" class="menu_a2" href="HTML/motrag.html">Mortgages</a></li>

    }
}


console.log(languageSelector)
console.log(languageSelector2)












// const vHeader = document.querySelector("#header");
// const vNavLinks = document.querySelector("#ul");
// const vNav = document.querySelector("#nav");
// window.addEventListener("scroll", () => {
//     if (window.scrollY >= 100) {
//         vHeader.classList.add("trans-header");
//         setTimeout(() => {
//             vHeader.classList.add("pos-header");
//             vMain.classList.add("mar");
//         }, 150);
//     } else {
//         vHeader.classList.remove("trans-header");
//         setTimeout(() => {
//             vHeader.classList.remove("pos-header");
//             vMain.classList.remove("mar");
//         }, 150);
//     }
// });