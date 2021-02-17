function text(){
    document.body.innerHTML = '<p>Si ves este texto por 100 segundos pasan cosas</p>';
}

if (module.hot) {
    module.hot.accept('./test.js', function(){
        text()
        console.log('he recargado en caliente :)')
    })
}

export default text