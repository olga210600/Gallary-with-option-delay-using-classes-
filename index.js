class slideShow {
    currentSlide = 0;
    interval = null;

    slideInterval(isPlaying) {
        if (isPlaying) {
            this.interval = setInterval(() => this.nextSlide(),2000);
        } else {
            clearInterval(this.interval)
        }
    }

    next() {
        for (let i = 0; i < Dom.controls.length; i++) {
            Dom.controls[i].style.display = 'inline-block';
        }

    }

    nextSlide() {

        this.goToSlide(this.currentSlide + 1);
    }

    previousSlide() {
        this.goToSlide(this.currentSlide - 1);
    }

    goToSlide(n) {
        console.log('here', n)

        Dom.slides[this.currentSlide].className = 'slide';
        this.currentSlide = (n + Dom.slides.length) % Dom.slides.length;
        Dom.slides[this.currentSlide].className = 'slide showing';
        this.next()
    }


    pauseSlideshow() {
        // debugger
        // console.log('here')
        Dom.pauseButton.innerHTML = '&#9658;'; // play character
        Dom.playing = false;
        this.slideInterval(Dom.playing)
        // clearInterval(this.slideInterval);
    }

    playSlideshow() {
        Dom.pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
        Dom.playing = true;
        this.slideInterval(Dom.playing)
        // this.slideInterval = setInterval(this.nextSlide, 2000);
        // this.slideInterval = setInterval(this.nextSlide, 2000);
    }
}


const gallery = new slideShow()


Dom.pauseButton.addEventListener('click', () => {
    if (Dom.playing) {
        gallery.pauseSlideshow();
    } else {
        gallery.playSlideshow();
    }
})


Dom.next.addEventListener('click', () => {
    gallery.pauseSlideshow()
    gallery.nextSlide();
})


Dom.previous.addEventListener('click', () => {
    gallery.pauseSlideshow();
    gallery.previousSlide();
})

addEventListener('DOMContentLoaded', () => gallery.playSlideshow())















//
// // // const controls = document.querySelectorAll('.controls');
// for(let i=0; i<Dom.controls.length; i++){
//     Dom.controls[i].style.display = 'inline-block';
// }
//
// // const slides = document.querySelectorAll('#slides .slide');
// let currentSlide = 0;
// let slideInterval = setInterval(nextSlide,2000);
//
// function nextSlide(){
//     goToSlide(currentSlide+1);
// }
//
// function previousSlide(){
//     goToSlide(currentSlide-1);
// }
//
// function goToSlide(n){
//     Dom.slides[currentSlide].className = 'slide';
//     currentSlide = (n+Dom.slides.length)%Dom.slides.length;
//     Dom.slides[currentSlide].className = 'slide showing';
// }
//
//
// // let playing = true;
// // let pauseButton = document.getElementById('pause');
//
// function pauseSlideshow(){
//     Dom.pauseButton.innerHTML = '&#9658;'; // play character
//     Dom.playing = false;
//     clearInterval(slideInterval);
// }
//
// function playSlideshow(){
//     Dom.pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
//     Dom.playing = true;
//     slideInterval = setInterval(nextSlide,2000);
// }
//
// Dom.pauseButton.addEventListener('click', () =>{
//     if(Dom.playing){ pauseSlideshow(); }
//     else{ playSlideshow(); }
// });
//
// // let next = document.getElementById('next');
// // let previous = document.getElementById('previous');
//
// Dom.next.addEventListener('click', () =>{
//     pauseSlideshow();
//     nextSlide();
// });
//
//
//
// Dom.previous.addEventListener('click', () =>{
//     pauseSlideshow();
//     previousSlide();
// });