class Slider { 
    constructor(images, buttons) {
        this.images = images;
        this.buttons = buttons;
        this.index = 0;
    }
    __addActiveClass(index) {
        this.images[index].classList.add("slider__li_active");
    }
    __removeActiveClass(index) {
        this.images[index].classList.remove("slider__li_active");
    }
    __setIndex(number) { 
        if(number >= this.images.length)
            this.index = 0;
        else if(number < 0)
            this.index = this.images.length - 1;
        else
            this.index = number;
    }
    nextSlide() {
        this.__removeActiveClass(this.index);
        this.__setIndex(this.index + 1);
        this.__addActiveClass(this.index);
    }
    prevSlide() {
        this.__removeActiveClass(this.index);
        this.__setIndex(this.index - 1);
        this.__addActiveClass(this.index);
    }
    controllerClick(event) {
        let target = event.target.dataset.target;
        if(target){
            event.preventDefault();
            if(target.toLowerCase() === "next") {
                this.nextSlide();
            } else if(target.toLowerCase() === "prev") {
                this.prevSlide();
            } else if(target >= "0" && target <= "9") {
                this.changePage(Number.parseInt(target));
            }
        }
    }
    
}