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
    <li class="menu_links2"><a class="menu_a2" href="buildingreviews.html">Building Reviews</a></li>
    <li class="menu_links2"><a class="menu_a2" href="community.html">Community Guides</a></li>
    <li class="menu_links2"><a class="menu_a2" href="blog.html">Property Blog</a></li>
    <li class="menu_links2"><a class="menu_a2" href="renters.html">Renter's Guide</a></li>
    <li class="menu_links2"><a class="menu_a2" href="buyers.html">Buyer's Guide</a></li>
    <li class="menu_links2 new"><a class="menu_a2" id="the_new" href="motrag.html">Mortgages</a>
    </li>
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
})

//! Revwies //
const vHedding = document.getElementById('hedding');
const vLeft = document.getElementById('left');
const vRight = document.getElementById('right');
const vContent = document.querySelector('.reviwes_content');
const vPointOne = document.getElementById('point1');
const vPointTwo = document.getElementById('point2');
const vPointThree = document.getElementById('point3');
const vPointFour = document.getElementById('point4');
let rightIsClicked = 2;
let leftIsClicked = 4;

let vNumber1 = {
    name: 'Dr. OBADA ARMANAZI',
    content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, qui tempora hic repellat officia nemo odit, at mollitia consectetur sunt veritatis dolorum quam ullam aliquid. Aut quidem aspernatur asperiores, similique sit perspiciatis rerum laborum a
    nihil fugit voluptatum. Laboriosam blanditiis nihil atque sed quo nobis, hic rerum similique! Sint quisquam, doloremque at facere in voluptate ea eligendi recusandae expedita neque? Omnis, ad! Dolore aut sint fuga, tempore labore corrupti
    nam eum est asperiores laboriosam incidunt consequatur atque ea. Consectetur voluptas eos necessitatibus, autem sequi aliquid ab suscipit at magnam quisquam! Beatae placeat consectetur quibusdam voluptatibus explicabo aut odio voluptates
    ex!`,

}

let vNumber2 = {
    name: 'Dr. MUHAMMED ABDULLAH',
    content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
    ue at facere in voluptate ea eligendi recusandae expedita neque? Omnis, ad! Dolore aut sint fuga, tempore labore corrupti`
}

let vNumber3 = {
    name: 'Dev. KHALED ',
    content: `
    ihil fugit voluptatum. Laboriosam blanditiis nihil atque sed quo nobis, hic rerum similique! Sint quisquam, doloremque at facere in voluptate ea eligendi recusandae expedita neque? Omnis, ad! Dolore aut sint fuga, tempore labore corrupti
    nam eum est asperiores laboriosam incidunt consequatur atque ea. Consectetur voluptas eos necessitatibus, autem sequi aliquid ab suscipit at magnam quisquam! Beatae placeat consectetur quibus
tor. Maecenas at dictum. `,
}

let vNumber4 = {
        name: "Dev.AHMAD RAZZAK",
        content: `I've good experience dealing with EasyLo. company, they are so professional including their services aI've good experience dealing with EasyLo. company, they are so professional including their services and customre care, they have so much expericnce in order to procide high quality services, I would recommend this company to all people that I know for sure, Thank you!.I've good experience dealing with EasyLo. company, they are so professional including their services and customre care, they have so much expericnce in order to procide high quality services, I would recommend this company to all people that I know for sure, Thank you!.I've good experience dealing with EasyLo. company, they are so professional including their services and customre care, th
r to procide high quality services, I would recommend this company to all people that I know for sure, Thank you!.`,
    }
    // ! The Right  //
vRight.addEventListener('click', () => {
    if (rightIsClicked == 2) {
        vHedding.style.opacity = 0;
        vContent.style.opacity = 0;
        setTimeout(() => {
            vHedding.innerHTML = vNumber2.name;
            vContent.innerHTML = vNumber2.content;
            setTimeout(() => {
                vHedding.style.opacity = 1;
                vContent.style.opacity = 1;
            }, 250);
        }, 100);
        rightIsClicked = 3
        leftIsClicked = 1
        vPointOne.style.backgroundColor = 'white'
        vPointTwo.style.backgroundColor = 'rgb(228, 50, 76)'
        vPointThree.style.backgroundColor = 'white'
        vPointFour.style.backgroundColor = 'white'
    } else if (rightIsClicked == 3) {
        vHedding.style.opacity = 0;
        vContent.style.opacity = 0;
        setTimeout(() => {
            vHedding.innerHTML = vNumber3.name;
            vContent.innerHTML = vNumber3.content;
            setTimeout(() => {
                vHedding.style.opacity = 1;
                vContent.style.opacity = 1;
            }, 250);
        }, 100);

        rightIsClicked = 4;
        leftIsClicked = 2
        vPointOne.style.backgroundColor = 'white'
        vPointTwo.style.backgroundColor = 'white'
        vPointThree.style.backgroundColor = 'rgb(228, 50, 76)'
        vPointFour.style.backgroundColor = 'white'
    } else if (rightIsClicked == 4) {
        vHedding.style.opacity = 0;
        vContent.style.opacity = 0;
        setTimeout(() => {
            vHedding.innerHTML = vNumber4.name;
            vContent.innerHTML = vNumber4.content;
            setTimeout(() => {
                vHedding.style.opacity = 1;
                vContent.style.opacity = 1;
            }, 250);
        }, 100);
        rightIsClicked = 1
        leftIsClicked = 3
        vPointOne.style.backgroundColor = 'white'
        vPointTwo.style.backgroundColor = 'white'
        vPointThree.style.backgroundColor = 'white'
        vPointFour.style.backgroundColor = 'rgb(228, 50, 76)'
    } else {
        vHedding.style.opacity = 0;
        vContent.style.opacity = 0;
        setTimeout(() => {
            vHedding.innerHTML = vNumber1.name;
            vContent.innerHTML = vNumber1.content;
            setTimeout(() => {
                vHedding.style.opacity = 1;
                vContent.style.opacity = 1;
            }, 250);
        }, 100);
        rightIsClicked = 2
        vPointOne.style.backgroundColor = 'rgb(228, 50, 76)'
        vPointTwo.style.backgroundColor = 'white'
        vPointThree.style.backgroundColor = 'white'
        vPointFour.style.backgroundColor = 'white'
        leftIsClicked = 1
    }
})

// ! The Left  //

vLeft.addEventListener('click', () => {
    if (leftIsClicked == 4) {
        rightIsClicked = 1
        vHedding.style.opacity = 0;
        vContent.style.opacity = 0;
        setTimeout(() => {
            vHedding.innerHTML = vNumber4.name;
            vContent.innerHTML = vNumber4.content;
            setTimeout(() => {
                vHedding.style.opacity = 1;
                vContent.style.opacity = 1;
            }, 250);
        }, 100);
        leftIsClicked = 3
        vPointOne.style.backgroundColor = 'white'
        vPointTwo.style.backgroundColor = 'white'
        vPointThree.style.backgroundColor = 'white'
        vPointFour.style.backgroundColor = 'rgb(228, 50, 76)'
    } else if (leftIsClicked == 3) {
        vHedding.style.opacity = 0;
        vContent.style.opacity = 0;
        setTimeout(() => {
            vHedding.innerHTML = vNumber3.name;
            vContent.innerHTML = vNumber3.content;
            setTimeout(() => {
                vHedding.style.opacity = 1;
                vContent.style.opacity = 1;
            }, 250);
        }, 100);
        leftIsClicked = 2;
        rightIsClicked = 4;
        vPointOne.style.backgroundColor = 'white'
        vPointTwo.style.backgroundColor = 'white'
        vPointThree.style.backgroundColor = 'rgb(228, 50, 76)'
        vPointFour.style.backgroundColor = 'white'
    } else if (leftIsClicked == 2) {
        vHedding.style.opacity = 0;
        vContent.style.opacity = 0;
        setTimeout(() => {
            vHedding.innerHTML = vNumber2.name;
            vContent.innerHTML = vNumber2.content;
            setTimeout(() => {
                vHedding.style.opacity = 1;
                vContent.style.opacity = 1;
            }, 250);
        }, 100);
        leftIsClicked = 1
        rightIsClicked = 3
        vPointOne.style.backgroundColor = 'white'
        vPointTwo.style.backgroundColor = 'rgb(228, 50, 76)'
        vPointThree.style.backgroundColor = 'white'
        vPointFour.style.backgroundColor = 'white'
    } else {
        vHedding.style.opacity = 0;
        vContent.style.opacity = 0;
        setTimeout(() => {
            vHedding.innerHTML = vNumber1.name;
            vContent.innerHTML = vNumber1.content;
            setTimeout(() => {
                vHedding.style.opacity = 1;
                vContent.style.opacity = 1;
            }, 250);
        }, 100);
        leftIsClicked = 4
        rightIsClicked = 2
        vPointOne.style.backgroundColor = 'rgb(228, 50, 76)'
        vPointTwo.style.backgroundColor = 'white'
        vPointThree.style.backgroundColor = 'white'
        vPointFour.style.backgroundColor = 'white'
    }

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