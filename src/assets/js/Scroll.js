
let hoverbtn = document.querySelector('#hoverbtn')
let imageslider = document.querySelector('#imageslider')

imageslider.addEventListener('mousemove',function(){
    hoverbtn.classList.remove('show')
})
imageslider.addEventListener('mouseout',function(){
    hoverbtn.classList.add('show')
})

let scrollPercentage = () => {
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round( pos * 100 / calcHeight);
    scrollProgress.style.background = `conic-gradient(#C96838 ${scrollValue}%, #fff ${scrollValue}%)`;
}
window.onscroll = scrollPercentage;

let bodyicon = document.querySelector('#bodyicon')
let hovertext = document.querySelector('#hovertext')
let main = document.querySelector('#main')
let box = document.querySelector('.box')

bodyicon.addEventListener('mousemove',function(){
    hovertext.classList.remove('add')
})

bodyicon.addEventListener('mouseout',function(){
    hovertext.classList.add('add')
})
