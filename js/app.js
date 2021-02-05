(() => {
    const images = document.querySelectorAll(".slider__li");
    const buttons = document.querySelectorAll(".slider__button");
    const sliderBlock = document.querySelector(".slider");

    const slider = new Slider(
        images, 
        buttons
    );

    sliderBlock.addEventListener("click", slider.controllerClick.bind(slider));
})();