function includeHtml() {
    const tagsToInclude = document.querySelectorAll('[html-file]');
    if( tagsToInclude ) {
        Array.from( tagsToInclude ).forEach( async (tag) => {
            const file = tag.getAttribute('html-file');
            if( file ) {
                //tag.innerHTML = await getHtmlFileContent( file, tag );
                await getHtmlFileContent( file, tag );
            }
        } )
    }
}

async function getHtmlFileContent( file, container ) {
    const resposta = await fetch( file );
    const dados    = await resposta.text();
    if( dados ) {
        const template = document.createElement('iframe');
        template.src = file;
        template.setAttribute('scrolling', 'no');
        template.style.border = 'none';
        template.style.position = 'relative';
        template.style.zIndex = 0;
        template.style.width = '40px';
        template.style.height = '40px';
        template.style.overflow = 'hidden';
        container.appendChild( template );
    }
    return dados;
}

export { includeHtml }
