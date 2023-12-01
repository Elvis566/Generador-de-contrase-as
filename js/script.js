 function generateP (base, longitud){
    let contraseña = '';

    for(let i =0; i< longitud; i++){
        let random = Math.floor(Math.random()*base.length);
        contraseña += base.charAt(random);
    }
    return contraseña;
}

const generar = () => {

    let longitud = parseInt(cantidad.value);
    let base ='abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    let numerico ='1234567890';
    let syb = '.,;-_¡!¿?%$#@/|(){}[]<>';
    
    if(numeros.checked) base += numerico;
    if(symbolos.checked) base += syb;
    if(solo.checked) base = numerico;
    contraseña.innerText = generateP(base, longitud);

}


window.addEventListener("DOMContentLoaded", ()=>{
    btnGenerar.addEventListener("click", () =>{
        generar();
    })
})