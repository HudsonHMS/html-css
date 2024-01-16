
const form = document.querySelector('form');
const ul   = document.querySelector('ul');
const liMemory = ul.firstElementChild.cloneNode( true );

form.addEventListener( 'submit', (evt) => {
    evt.preventDefault();
    const input = form.querySelector('input');
    
    if( input.value ) {
        const li = liMemory.cloneNode( true );
        li.querySelector('span').textContent = input.value;
        ul.appendChild( li );
    
        input.value = "";
        input.focus();
    }
} ); 

ul.addEventListener( 'click', ({target}) => {
    if( target.tagName === "BUTTON" ) {
        if( confirm('deseja deletar este item') ) {
            target.parentElement.remove();
        }
    }
} );

