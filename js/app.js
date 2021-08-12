//landing-div
const container = document.querySelector('.landing-asset');
const img = document.createElement('div');
img.classList.add('img-div');
const squareDotDiv = document.createElement('div');
for(var i = 0; i<64;i++){
    const dotDiv = document.createElement('div');
    dotDiv.classList.add('circle');
    squareDotDiv.appendChild(dotDiv);
}
const circle2 = document.createElement('div');
circle2.classList.add('circle-cont')
squareDotDiv.classList.add('row');
squareDotDiv.classList.add('square-dot-div');
container.appendChild(img);
container.appendChild(circle2);
container.appendChild(squareDotDiv);
//about div
const aboutContainer =  document.querySelector('.about-img');
const aboutImageDiv1 = document.createElement('div');
const aboutImageDiv2 = document.createElement('div');
aboutImageDiv1.classList.add('img-div-1');
aboutImageDiv2.classList.add('img-div-2');
const imgQuote1 = document.createElement('div');
const imgQuote2 = document.createElement('div');
imgQuote1.classList.add('img-quote-1');
imgQuote2.classList.add('img-quote-2');
imgQuote1.innerHTML = 
`
    <p> Lorem ipsum dolor <br> sit amet consectetur </p>
`;
imgQuote2.innerHTML = 
`
    <p> Lorem ipsum dolor <br> sit amet consectetur </p>
`;
aboutContainer.appendChild(imgQuote1);
aboutContainer.appendChild(imgQuote2);
const aboutImageContainer = document.createElement('div');
aboutImageContainer.classList.add('about-img-cont');
aboutImageContainer.appendChild(aboutImageDiv1);
aboutImageContainer.appendChild(aboutImageDiv2);
const circleAbout1 = document.createElement('div');
const circleAbout2 = document.createElement('div');
circleAbout1.classList.add('circle-about-1');
circleAbout2.classList.add('circle-about-2');
for (var j = 0; j < 49; j++){
    const circleDiv = document.createElement('div');
    circleDiv.classList.add('circle-1')
    circleAbout1.appendChild(circleDiv);
}
for (var j = 0; j < 36; j++){
    const circleDiv = document.createElement('div');
    circleDiv.classList.add('circle-2')
    circleAbout2.appendChild(circleDiv);
}
document.querySelector('.col-sm-5').appendChild(circleAbout1);
document.querySelector('.col-sm-5').appendChild(circleAbout2);
aboutContainer.appendChild(aboutImageContainer);
//mail div
const mailDiv = document.querySelector('.img-mail-div');
const mailImg = document.createElement('div');
mailImg.classList.add('mail-img-div');
mailDiv.appendChild(mailImg);
const circleMail = document.createElement('div');
const CircleMail = document.createElement('div');
circleMail.classList.add('circle-mail');
CircleMail.classList.add('circle-mail-1');
mailDiv.appendChild(circleMail);
mailDiv.appendChild(CircleMail);
const input = document.querySelector('.input');
input.addEventListener('click',()=>{
    input.value = '';
    input.style.paddingLeft = '2.5vw';
    input.style.color = '#12143F';
})
//slider
const sliderCircle = document.createElement('div');
sliderCircle.classList.add('circle-slide');
document.querySelector('.user-rate-div').appendChild(sliderCircle);
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',

    },
    slidesPerView:3,
    spaceBetween: 30,
    centeredSlides: true,

  });

  userData = [
    {
        name : 'Chris Jeffer',
        img  : 'https://cdn.dribbble.com/users/78251/screenshots/10841565/media/e02eae0abb3e327d5d0f57c6b349eb2b.png?compress=1&resize=400x300',
        review :      
        `
        Lorem ipsum dolor sit amet consectetur adipisicing <br>
        elit. Perferendis impedit dolores natus hic, optio rem
        `,
        star : `<i class="fas fa-star"></i><i class="fas fa-star"></i> <i class="fas fa-star"></i>  <i class="fas fa-star-half-alt"></i><i class="far fa-star"></i>`,
        occupation : 'Shopkeeper'
    },
    {
        name : 'Pauline Blue',
        img  : ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLsfK-_d3VshB0F2H_pOgJYPGHfvrVXAKZXKUtJLNQR-KOrDvJQ2eBmaHdgRbrOSCttHk&usqp=CAU',
        review :      
        `
        Lorem ipsum dolor sit amet consectetur adipisicing <br>
        elit. Perferendis impedit dolores natus hic, optio rem
        `,
        star : `<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>`,
        occupation : 'Scientist'
    },
    {
        name : 'Tom Andrews',
        img  : 'https://i.pinimg.com/736x/68/16/3e/68163efb3c2201721d8e681cde6aef2b.jpg',
        review :      
        `
        Lorem ipsum dolor sit amet consectetur adipisicing <br>
        elit. Perferendis impedit dolores natus hic, optio rem
        `,
        star : `<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>`,
        occupation: 'Writer'
    },
    {
        name : 'Sasha Blouse',
        img  : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn22JI-p42tWtr24yyGfRxA1E2lDY_yihhEQ&usqp=CAU',
        review :      
        `
        Lorem ipsum dolor sit amet consectetur adipisicing <br>
        elit. Perferendis impedit dolores natus hic, optio rem
        `,
        star : `<i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="far fa-star"></i>`,
        occupation: 'Freelancer'
    }
]
for (var user = 0; user <userData.length; user++){
    const userSlide = document.createElement('div');
    userSlide.classList.add('swiper-slide');
    userSlide.innerHTML = `
    <div class='user-card card'>
        <div style="background: url('${userData[user].img}'); border-radius:100%; width: 5vw;height:5vw; background-size: cover; margin-left:3vw; margin-top:2.5vw; "></div>
        <h2>${userData[user].name}</h2>
        <h5>${userData[user].occupation}</h5>
        <p>${userData[user].review}</p>
        <div class='star-div'>
          <span> Rating : </span>  ${userData[user].star}
        </div>
    </div>
    `;
    document.querySelector('.swiper-wrapper').appendChild(userSlide);
}
const row = document.createElement('div');
row.classList.add('row');
for (var rowCard = 0; rowCard < userData.length; rowCard++){
    const rowCardElement = document.createElement('div');
    rowCardElement.classList.add('col-sm-4');
    rowCardElement.innerHTML = `
    <div class='user-card card'>
    <div class='user-img' style="background: url('${userData[rowCard].img}'); border-radius:100%; width: 5vw;height:5vw; background-size: cover; margin-left:3vw; margin-top:2.5vw; "></div>
    <h2>${userData[rowCard].name}</h2>
    <h5>${userData[rowCard].occupation}</h5>
    <p>${userData[rowCard].review}</p>
    <div class='star-div'>
      <span> Rating : </span>  ${userData[rowCard].star}
    </div>
</div>
    `;
    row.appendChild(rowCardElement);
}
document.querySelector('.slider-div').appendChild(row);
//footer
const circleCont = document.createElement('div');
circleCont.classList.add('circle-foot-container');
for (var foot = 0; foot < 64; foot++){
    const circleFoot = document.createElement('div');
    circleFoot.classList.add('circle-foot');
    circleCont.appendChild(circleFoot);
}
circleCont.classList.add('row');
document.querySelector('.footer-div').appendChild(circleCont);
const freeRide = document.querySelector('.ride');
const modal = document.createElement('div');
modal.classList.add('modal-cont');
const modalContent = document.createElement('div');
modalContent.innerHTML = `
    <div class="modal-div">
    <form>
        <label>Name : </label>
        <input></input>
        <label>Age : </label>
        <input></input>
        <label>Address : </label>
        <input></input>
        <label>License No. : </label>
        <input></input>
        <button class='btn'></button>
    </form>
    </div>
`;
modal.appendChild(modalContent);
document.querySelector('.footer-div').appendChild(modal);
freeRide.addEventListener('click', ()=>{

})