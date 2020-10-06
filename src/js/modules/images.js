const images = () => {
    const imagePopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImage = document.querySelector('img');

    imagePopup.classList.add('popup');
    workSection.appendChild(imagePopup);

    imagePopup.style.justifyContent = 'center';
    imagePopup.style.alignItems = 'center';
    imagePopup.style.display = 'none';
    // imagePopup.style.width = '300px';
    // imagePopup.style.height = '300px';

    imagePopup.appendChild(bigImage);
    bigImage.style.width = '600px';
    bigImage.style.height = '600px';
    bigImage.style.objectFit = 'cover';



    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imagePopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
            document.body.classList.add('modal-open');
        }

        if (target && target.matches('div.popup')) {
            imagePopup.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    });
};

export default images;