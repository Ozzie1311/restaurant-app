
const menuPage = () => {

    const menu = [
        {
            plato: 'Hamburguesa',
            tipo: 'carne',
            tipo1: 'pollo',
            tipo2: 'mixta'
        },
        {
            plato: 'Enrrollado',
            tipo: 'carne',
            tipo1: 'pollo',
            tipo2: 'mixto'
        },
        {
            plato: 'Pepito',
            tipo: 'carne',
            tipo1: 'pollo',
            tipo2: 'mixto'
        },
    ];

    const contentPage = document.createElement('div')
    content.append(contentPage);
    contentPage.classList.add('content-page')
   

    menu.forEach(plato => {
      //creacion de lo necesario
      const list = document.createElement('ul');
      const titulo = document.createElement('h4');
      const li = document.createElement('li')
      const li1 = document.createElement('li')
      const li2 = document.createElement('li')
      list.classList.add('list-item');

     //Contenido
     titulo.textContent = `${plato.plato}`;
     li.textContent = `${plato.tipo} --> 2.30$` ;
     li1.textContent = `${plato.tipo1} --> 2.50$`; 
     li2.textContent = `${plato.tipo2} --> 4$` ;
    
     //Append
     list.append(titulo, li, li1, li2);
     contentPage.append(list);
     content.append(contentPage);
    });
};

export default menuPage;