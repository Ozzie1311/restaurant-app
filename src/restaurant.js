import imagen from '../imgrestaurant.jpg'

const createRestaurant = () => {
    const content = document.querySelector('#content');
    const contentPage = document.createElement('div');
    contentPage.classList.add('content-page');

    //Create heading and append
    const heading = document.createElement('h1');
    heading.classList.add('title');
    heading.textContent = 'Bienvenido al mejor restaurante!!'
    contentPage.append(heading);

    //Create img and append
    const imgRestaurant = document.createElement('img');
    imgRestaurant.classList.add('img-restaurant');
    imgRestaurant.src = imagen;
    contentPage.append(imgRestaurant);

    //Create a paragraph and append
    const caption = document.createElement('p');
    caption.classList.add('caption');
    caption.textContent = 'El mejor restaurante de Maturin, vengan a probar su deliciosa comida, preparada por los mejores chef´s de la ciudad.'
    contentPage.append(caption);

    //Append to the DOM
    content.append(contentPage)
}

export default createRestaurant;