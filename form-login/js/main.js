var modal = document.getElementById('id01');
var closeSpan = document.querySelector('span.close');

window.onclick = (event) => {
    if ( ( event.target == modal && modal.style.display === 'flex' ) || event.target == closeSpan ) {
    modal.style.display = "none";
  } else {
    modal.style.display = "flex";
  }
}