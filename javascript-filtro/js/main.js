
const filterInput = document.querySelector('input');
let timeout = null;
filterInput.addEventListener('input', ({target}) => {
    filterCards( target.value );
});

function filterCards ( search ) {
    clearTimeout( timeout );
    timeout = setTimeout( () => {
        const cards = Array.from(document.querySelectorAll('li'));
        cards.forEach( element => {
            const title = element.querySelector('h2');
            if( !title.innerHTML.toLowerCase().includes( search.toLowerCase() ) ) {
                element.style.display = 'none'
            }else {
                element.style.display = 'block'
            }
        });
    }, 500 );
}