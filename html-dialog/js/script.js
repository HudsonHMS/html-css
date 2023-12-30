
const btn = document.querySelector('#btnAbrir');
const modal = document.querySelector('#modal');

btn.addEventListener( 'click', btn => {
    if( modal.open ) {
        modal.close();
        modal.closeModal();
    } else {
        modal.showModal();
    }
    console.dir( modal )
} );