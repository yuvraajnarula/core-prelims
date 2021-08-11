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
    <p> Lorem ipsum dolor sit amet consectetur </p>
`;
imgQuote2.innerHTML = 
`
    <p> Lorem ipsum dolor sit amet consectetur </p>
`;
aboutContainer.appendChild(imgQuote1);
aboutContainer.appendChild(imgQuote2);
const aboutImageContainer = document.createElement('div');
aboutImageContainer.classList.add('about-img-cont');
aboutImageContainer.appendChild(aboutImageDiv1);
aboutImageContainer.appendChild(aboutImageDiv2);
const circleAbout1 = document.createElement('div');
const circleAbout2 = document.createElement('div');
for (var j = 0; j < 21; j++){
    const circleDiv = document.createElement('div');
    circleDiv.classList.add('circle-1')
    circleAbout1.appendChild(circleDiv);
}
for (var j = 0; j < 21; j++){
    const circleDiv = document.createElement('div');
    circleDiv.classList.add('circle-2')
    circleAbout2.appendChild(circleDiv);
}
circleAbout1.classList.add('circle-about-1');
circleAbout2.classList.add('circle-about-2');
aboutContainer.appendChild(circleAbout1);
aboutContainer.appendChild(circleAbout2);
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
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  userData = [
    {
        name : 'Jethalal Gada',
        img  : 'https://static.abplive.com/wp-content/uploads/sites/2/2020/07/27140156/jethalal.jpg?impolicy=abp_images&imwidth=720',
        review :      
        `
        Lorem ipsum dolor sit amet consectetur adipisicing <br>
        elit. Perferendis impedit dolores natus hic, optio rem
        `,
        star : `<i class="fas fa-star"></i> <i class="far fa-star"></i>`
    },
    {
        name : 'Krishnan Iyer',
        img  : 'https://biographymafia.com/wp-content/uploads/2021/04/YASH_22-1.jpg',
        review :      
        `
        Lorem ipsum dolor sit amet consectetur adipisicing <br>
        elit. Perferendis impedit dolores natus hic, optio rem
        `,
        star : `<i class="fas fa-star"></i> <i class="fas fa-star"></i><i class="fas fa-star"></i> <i class="far fa-star"></i>`
    },
    {
        name : 'Tarak Mehta',
        img  : 'https://images.jansatta.com/2020/09/Shailesh-Lodha.jpg',
        review :      
        `
        Lorem ipsum dolor sit amet consectetur adipisicing <br>
        elit. Perferendis impedit dolores natus hic, optio rem
        `,
        star : `<i class="fas fa-star"></i> <i class="far fa-star"></i>`
    },
    {
        name : 'Sundar Lal',
        img  : 'https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/taarak_mehta_ka_ooltah_chashmah_disha_vakanis_onscreen_real_brother_mayur_vakani_extends_rakhi_wishes.jpg',
        review :      
        `
        Lorem ipsum dolor sit amet consectetur adipisicing <br>
        elit. Perferendis impedit dolores natus hic, optio rem
        `,
        star : `<i class="fas fa-star"></i> <i class="far fa-star"></i>`
    }
]
for (var user = 0; user <userData.length; user++){
    const userSlide = document.createElement('div');
    userSlide.classList.add('swiper-slide');
    userSlide.innerHTML = `
    <img src='${userData[user].img}'>
    <h2>${userData[user].name}</h2>
    <p>${userData[user].review}</p>
    <div class='star-div'>
        ${userData[user].star}
    </div>
    `;
    document.querySelector('.swiper-wrapper').appendChild(userSlide);
}
