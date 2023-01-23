
const getText = document.querySelector('textarea');
const btnEncriptar =document.querySelector('.btn-encriptar')
const btnDesencriptar =document.querySelector('.btn-desencriptar')
const btnCopiar = document.querySelector('.btn-copiar')
const mostrarImagen=document.querySelector('.anuncio-desencriptar')
const mostrarMensaje=document.querySelector('.texto-desencriptar')
const advertencia = document.querySelector('.restriccion p')
const pantalla=document.querySelector('.container-desencriptar')



getText.focus()

let evaluar = (text)=>{ 
    let flag=false
    const reg=/[A-Z\áéíóú]/ //expresion regular analiza si hay mayusculas y vocales acentuadas
    if(text!=''){  
        if(!reg.test(text)){
            flag=true
            advertencia.style.scale='1'
            advertencia.style.color='rgba(73, 80, 87, 1)'

        }else{
           advertencia.style.scale='1.03'
           advertencia.style.color='red'
        }
    }else{

        alert('Ingrese texto para encriptar')

    }
    return flag
}

let encriptar = (texto)=>{
    let frase=''
    for (let i = 0; i < texto.length; i++) {
        let letra = texto.charAt(i)
        switch (letra) {
                case 'a':letra='ai';break;
                case 'e':letra='enter';;break;
                case 'i':letra='imes';break;
                case 'o':letra='ober';break;
                case 'u':letra='ufat';break;
            default:
                break;
        }
        frase=frase+letra
    }
   
 return frase
}
let desencriptar = (texto)=>{
    let desencritado=texto.replaceAll('ai','a')
      desencritado=desencritado.replaceAll('enter','e')
      desencritado=desencritado.replaceAll('imes','i')
      desencritado=desencritado.replaceAll('ober','o')
      desencritado=desencritado.replaceAll('ufat','u')
      return desencritado
}
let insertarTexto=(texto)=>{
    mostrarMensaje.childNodes[1].textContent=texto  
}
btnEncriptar.addEventListener('click',()=>{
    if(evaluar(getText.value)){
        let miImagen = window.getComputedStyle(mostrarImagen.childNodes[1])
        let display= miImagen.getPropertyValue('display')
        console.log(mostrarImagen.childNodes[1]);

        
        if(display==='none'){
            mostrarImagen.style.display='none'
        
            mostrarMensaje.style.display='inline-block'
            pantalla.style.height='40vh'
            insertarTexto(encriptar(getText.value))
            

        }else{
            mostrarImagen.style.display='none'
        
            mostrarMensaje.style.display='inline-block'
            
            insertarTexto(encriptar(getText.value))
        }

        

    }
})
btnDesencriptar.addEventListener('click',()=>{
   
    if( getText.value != ''){
        // textoDesencriptado=desencriptar(textoAdesencriptar);
        mostrarImagen.style.display='none'
        console.log(mostrarImagen);
        mostrarMensaje.style.display='inline-block'
        insertarTexto(desencriptar(getText.value))
    

    }else{
       alert('No hay texto para desencriptar')
    }
    
})
btnCopiar.addEventListener('click',()=>{
    getText.value=""

    let text=mostrarMensaje.childNodes[1].textContent
    
    navigator.clipboard.writeText(text)
        .then(()=>{
                    console.log('texto copiado al portapapeles');
                })
        .catch(()=>{
                    console.log('error al copiar');
                })

    navigator.clipboard.readText()
        .then((texto)=>{
                    getText.value=texto
                })
        .catch((s)=>{
                    console.log(s,'error al pegar desde el portapapeles');
                })
                
            btnDesencriptar.disabled=false
    
})

const textoGuardado = async()=>{
   const data = await navigator.clipboard.readText(); 
   return data

}




