function getImage (service) {
    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
    const img3 = document.createElement('img');

    img1.src = `./${service}/1.jpg`;
    img2.src = `./${service}/2.jpg`;
    img3.src = `./${service}/3.jpg`;

    const listImg = [img1, img2, img3];

    return listImg;

}