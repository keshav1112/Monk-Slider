// Slider Variables
(function(){
    const preloader = document.querySelector('.preloader');
    const prevBtn = document.querySelector("#prev");
    const nextBtn = document.querySelector("#next");

    let topTextLayer  = document.querySelector('.top-text-layer');
    let slideImage  = document.querySelector('.slide__image');
    let slideNum = document.querySelector('#slideNum');
    let totalSlide = document.querySelector('#totalSlide');

    let pagerBtn = document.querySelectorAll('.pager__item');

    let slideElement = document.querySelector('.slide');
    let slideW = slideElement.clientWidth;

    let itemElement = document.querySelectorAll('.item');
    let itemL = document.querySelectorAll('.item').length;
    let counter = 0;
    let transFormWidth = parseInt(slideW) * parseInt(itemL) + 'px';




// Preloader Event
window.addEventListener('load', function() {
    preloader.classList.add('hide-preloader');
})

// Feature Slider for Banner
function scrollFeatureSlider(){
    slideElement.style.width = transFormWidth;
    slideElement.style.transition = 'transform';
    slideElement.style.transform = `translate3d(-${counter}px, 0px, 0px)`;
    slideElement.style.transitionDuration = "1s";

    slideImage.style.transform = `translate3d(-${counter}px, 0px, 0px)`;
    slideImage.style.transitionDuration = "1s";

    totalSlide.textContent = itemL - 1;
    prevBtn.style.display = 'none';
    sliderItemWidth()
}

function sliderItemWidth(){
    for (let [index, el] of itemElement.entries()){
        let calcWidth = parseInt(el.clientWidth) + 'px';
        el.style.width = calcWidth;
        slideNum.textContent = index;
    }
}


scrollFeatureSlider();

function pagerEvent(){
    removeActiveClass()
    this.querySelector('span').classList.add('active');
    slide(parseInt(this.getAttribute('page')) -1);
}

function removeActiveClass() {
    pagerBtn.forEach((item) => item.querySelector('span').classList.remove("active"));
  }


function slide(page){
    counter = parseInt(slideW * page);
    console.log(totalSlide);
    if(page === totalSlide - 1){
        nextBtn.style.display = 'none';
    } else{
        nextBtn.style.display = 'block';
    }

    if(page === 0){
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
    }
    
    slideElement.style.transform = `translate3d(-${counter}px, 0px, 0px)`;
    slideImage.style.transform = `translate3d(-${counter}px, 0px, 0px)`;

}

prevBtn.addEventListener('click', function(){
    let page = counter / slideW;
    slide(page - 1)
    removeActiveClass()
    document.querySelector(`[page="${page}"] > span`).classList.add('active')
})

nextBtn.addEventListener('click', function(){
    let page = counter / slideW;
    slide(page + 1)
    removeActiveClass()
    document.querySelector(`[page="${page + 2}"] > span`).classList.add('active')
})

pagerBtn.forEach((item) => item.addEventListener('click', pagerEvent) );

slideElement.addEventListener('transitionstart', function() {
    // topTextLayer.firstChild.remove()
})

slideElement.addEventListener('transitionend', function() {
    let page = counter / slideW;
    topTextLayer.innerHTML = textLayerHtml(page);
})

function textLayerHtml(page){
    switch(page){
        case 0:
        return `<div class="animate fade-in"><h2>we are breaking our vow of silence</h2>
        <p>
          In january 2011, after a decade of digital. we opened the doors to our
          temple. <br />Follow our noble eightfold path to digital enlightenment
          here.
        </p></div>`
        break;

        case 1:
        return `<div class="animate fade-in"><h2>talent is given true skill is earned</h2></div>`
        break;
        
        case 2:
        return `<div class="animate fade-in"><h2>be flexible to change and study in conviction</h2></div>`
        break;

        case 3:
        return `<div class="animate fade-in"><h2>use many skills yet work as one</h2></div>`
        break;

        case 4:
        return `<div class="animate fade-in"><h2>to master anything find interest in everything</h2></div>`
        break;

        case 5:
        return `<div class="animate fade-in"><h2>individuals flourish if culture and wisdom and shared</h2></div>`
        break;

        case 6:
        return `<div class="animate fade-in"><h2>train for perfection but aim for more</h2></div>`
        break;

        case 7:
        return `<div class="animate fade-in"><h2>take pride in your work but do not seek praise</h2></div>`
        break;
    }
}

})()