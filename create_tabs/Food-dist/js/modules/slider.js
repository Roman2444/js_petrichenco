function slider({container, nextArrow, prevArrow, currentCounter, totalCounter, slide, wrapper, field}) {


    const nextSlid = document.querySelector(nextArrow),
          prevSlid = document.querySelector(prevArrow),
          numSlid = document.querySelector(currentCounter),
          totalSlid = document.querySelector(totalCounter),
          slides = document.querySelectorAll(slide),
          slider = document.querySelector(container),
          slidesWrapper = document.querySelector(wrapper),
          slidesField = document.querySelector(field),
          width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0;

    totalSlid.innerHTML=`${slides.length > 9 ? slides.length : '0' + slides.length}`;
   
    showNumSlid();

    function showNumSlid() {
        numSlid.innerHTML = `${slideIndex > 9 ? slideIndex : '0' + slideIndex}`;
    }

    function sliderTransform() {
        slidesField.style.transform = `translateX(-${offset}px)`;
    }

    function showActiveDot() {
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;
    }

    function onlyNumbers(str) {
       return +str.replace(/\D/g, '');
    }

    slidesField.style.width = 100 * slides.length + '%'; 
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => slide.style.width = width);

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
          dots = [];

    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
        }   
    `;
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }


    nextSlid.addEventListener('click', () => {
        if (offset == onlyNumbers(width) * (slides.length - 1)) {
            offset = 0;
            slideIndex = 1;
            
        } else {
            offset += onlyNumbers(width);
            slideIndex++;
        }

        sliderTransform();
        
        showNumSlid();

        showActiveDot();
    });

    prevSlid.addEventListener('click', () => {
        if (offset == 0) {
            offset = onlyNumbers(width) * (slides.length - 1);
            slideIndex = slides.length ;
            
        } else {
            offset -= onlyNumbers(width);
            slideIndex--;
        }

        sliderTransform();
        
        showNumSlid();

        showActiveDot();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
    
            slideIndex = slideTo;
            offset = onlyNumbers(width) * (slideTo - 1);

            sliderTransform();

            showActiveDot();

            showNumSlid();

        });

    });

}

export default slider;