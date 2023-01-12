let toggelBar = document.querySelector(".custum-bar");
let hiddenNav =  document.querySelector(".hidden-nav");
let closeBtn = document.querySelector(".close-btn");
let btns = document.querySelectorAll(".overlay-content .btn");

toggelBar.onclick = function(){
    hiddenNav.style.cssText = "width:100%"
    btns.forEach(btn=>{
        btn.style.display = "block"
    })
}

closeBtn.onclick = function(){
    hiddenNav.style.width = "0";
    btns.forEach(btn=>{
        btn.style.display = "none"
    })
};

let landImg= document.querySelector(".text-landing .img-container img");
let imgArr = ["1","2","3"];
let changeImg = setInterval( ()=>{
    let randomnum = Math.floor(Math.random() * imgArr.length);
    // console.log(randomnum)
    landImg.src = `images/land-${randomnum}.png`

},3000)