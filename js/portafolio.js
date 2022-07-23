
addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu')
    if (btn_menu){
        btn_menu.addEventListener('click', ()=>{
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }
})


// subpagina-1

function mostrar1(){
    var x = document.getElementById('batata');
    if(x.style.visibility=="hidden"){
        x.style.visibility="visible";
    }else{
        x.style.visibility="hidden";
    } 
};

function ocultar1(){
    x = document.getElementById('batata')
    x.style.visibility = "hidden";
}

// subpagina-2
function mostrar2(){
    var x = document.getElementById('gym');
    if(x.style.visibility=="hidden"){
        x.style.visibility="visible";
    }else{
        x.style.visibility="hidden";
    } 
};

function ocultar2(){
    x = document.getElementById('gym')
    x.style.visibility = "hidden";
}


// subpagina-3
function mostrar3(){
    var x = document.getElementById('prt');
    if(x.style.visibility=="hidden"){
        x.style.visibility="visible";
    }else{
        x.style.visibility="hidden";
    } 
};

function ocultar3(){
    x = document.getElementById('prt')
    x.style.visibility = "hidden";
}

// subpagina-4
function mostrar4(){
    var x = document.getElementById('google');
    if(x.style.visibility=="hidden"){
        x.style.visibility="visible";
    }else{
        x.style.visibility="hidden";
    } 
};

function ocultar4(){
    x = document.getElementById('google')
    x.style.visibility = "hidden";
}

// subpagina-5
function mostrar5(){
    var x = document.getElementById('port2');
    if(x.style.visibility=="hidden"){
        x.style.visibility="visible";
    }else{
        x.style.visibility="hidden";
    } 
};

function ocultar5(){
    x = document.getElementById('port2')
    x.style.visibility = "hidden";
}

// subpagina-6
function mostrar6(){
    var x = document.getElementById('blog');
    if(x.style.visibility=="hidden"){
        x.style.visibility="visible";
    }else{
        x.style.visibility="hidden";
    } 
};

function ocultar6(){
    x = document.getElementById('blog')
    x.style.visibility = "hidden";
}

/**boton certificado*/

function mostrarcertf(){
    var x = document.getElementById('certificado');
    if(x.style.visibility=="hidden"){
        x.style.visibility="visible";
    }else{
        x.style.visibility="hidden";
    } 
};

function ocultarcef(){
    x = document.getElementById('certificado')
    x.style.visibility = "hidden";
}
