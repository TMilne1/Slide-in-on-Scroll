  window.onload = function(){
  function debounce(func, wait = 20, immediate = true) {
        var timeout;
        return function() {
          var context = this, args = arguments;
          var later = function() {
        timeout = null;
    if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
  }
  const sliderImages = document.querySelectorAll(`.slide-in`)
  function checkSlide(){
    sliderImages.forEach(image =>{
      //window.scrollY - gives us the how far we have scrolled down - using the top of the window  as the marker
      //window.innerHeight - gives us the the height of the window
      // when added together they give you how far you have scrolled down - using the bottom of the window as the marker
      const slideInAt = (window.scrollY + window.innerHeight) - image.height/2 // slide in when the bottom of the browser hits the middle of the image
      
      const bottomOfImage = image.offsetTop + image.height  
      const halfShown = slideInAt > image.offsetTop;
      const isNotscrolledPast = window.scrollY < bottomOfImage;
      if(halfShown && isNotscrolledPast){
        image.classList.add(`active`);
      }else{
        image.classList.remove(`active`);
      }
     })
  }

  window.addEventListener(`scroll`,debounce(checkSlide));
  }