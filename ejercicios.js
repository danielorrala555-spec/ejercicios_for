function ejecutar(ejercicioNumeros){
    if( ejercicioNumeros === 1){
        listarNumeros();
    }
    else if( ejercicioNumeros === 2){
        listarNumerosReversa();
    }
    else if( ejercicioNumeros === 3){
        listarPares();
    }
    else if( ejercicioNumeros === 4){
        listarImpares();
    }

}

function listarNumeros(){
    for(let i =0; i<3; i++ ){
        console.log(i);
    }

}

function listarNumerosReversa(){
    for(let i =3; i>0; i-- ){
        console.log(i);
    }
    
}

function listarPares(){
    for(let i =0; i<10; i+=2 ){
        console.log(i);
    }
    
}

function listarImpares(){
    for(let i =1; i<10; i+=2 ){
        console.log(i);
    }
    
}