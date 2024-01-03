function includeHtml() {
    const tagsToInclude = document.querySelectorAll('[html-file]');
    if( tagsToInclude ) {
        Array.from( tagsToInclude ).forEach( async (tag) => {
            const file = tag.getAttribute('html-file');
            if( file ) {
                tag.innerHTML = await getHtmlFileContent( file );
            }
        } )
    }
}

async function getHtmlFileContent( file ) {
    const resposta = await fetch( file );
    const dados    = await resposta.text();
    return dados;
}

export { includeHtml }
