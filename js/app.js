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
circleMail.classList.add('circle-mail');
mailDiv.appendChild(circleMail)