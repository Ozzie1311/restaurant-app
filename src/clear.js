
const clearDiv = () => {
    const content = document.querySelector('#content');
    const contentPage = document.querySelector('.content-page');

    if(contentPage) {
        content.removeChild(contentPage);
    }
}

export default clearDiv;