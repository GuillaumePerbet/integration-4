//slider objects
class Slider{
    constructor(slider){      
        this.images=slider.querySelector('div');
        this.position=1;
        this.max=slider.querySelectorAll('img').length;
    }

    slideRight(){
        if (this.position<this.max){
            this.position++;
            this.resizer();
        }
        return;
    }

    slideLeft(){
        if (this.position>1){
            this.position--;
            this.resizer();
        }
        return;
    }

    resizer(){
        this.images.style.left=parseFloat(window.getComputedStyle(this.images).width,10)*(-this.position+1)+'px';
        return;
    }
}

//loop on slider sections
const sliders=Array.from(document.getElementsByClassName('slider'));

sliders.forEach((slider) =>{

    let sliderObject=new Slider(slider);

    //right button event
    const rightButton=slider.lastElementChild;
    rightButton.addEventListener('click', ()=>{
        sliderObject.slideRight();
        leftButton.style.display='block';
        if (sliderObject.position==sliderObject.max){
            rightButton.style.display='none';
        }
    });

    //left button event
    const leftButton=slider.lastElementChild.previousElementSibling;
    leftButton.addEventListener('click', ()=>{
        sliderObject.slideLeft();
        rightButton.style.display='block';
        if (sliderObject.position==1){
            leftButton.style.display='none';
        }
    });

    //resizing
    window.addEventListener('resize', ()=>{
        setTimeout(()=>{sliderObject.resizer();}, 300);
    });
});