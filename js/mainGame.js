
let player = [
    'batu',
    'kertas',
    'gunting'
];

let comp = [
    'batu',
    'kertas',
    'gunting'
];

let playerWinTxt = 'PLAYER 1 WIN';
let playerLoseTxt = 'COM WIN';
let draWTxt = 'DRAW';

const btnHome = () =>{
    // console.log('Button Play');
    location.replace('/')
}


const pilihBatu = () => {
    // console.log('pilih Batu');
    pilihanPlayer('batu');
    hompimpa('batu');
}

const pilihKertas = () => {
    // console.log('pilih Kertas');
    pilihanPlayer('kertas');
    hompimpa('kertas');
}

const pilihGunting = () => {
    // console.log('pilih Gunting');
    pilihanPlayer('gunting');
    hompimpa('gunting');
}

const resetGame = () => {
    // console.log('Reset Game');
    pilihanPlayer('reset');
    pilihanCom('reset');
}

const hompimpa = (pilihanPlayer) => {
    // console.log('hompimpa');
    let number = Math.floor(Math.random() * 10)
    let idxPilihanCom = number % comp.length; 
    let pilihanComp = comp[idxPilihanCom];
    // console.log(number);
    // console.log(idxPilihanCom);
    // console.log(pilihanComp);
    if( pilihanPlayer == 'batu'){
        if( pilihanComp == 'batu' ){
            pilihanCom('batu');
            playerComDraw();
        }else if( pilihanComp == 'kertas' ){
            pilihanCom('kertas');
            comWin();
        }else if( pilihanComp == 'gunting' ){
            pilihanCom('gunting');
            playerWin();
        }
    }else if( pilihanPlayer == 'kertas' ){
        if( pilihanComp == 'batu' ){
            pilihanCom('batu');
            playerWin();
        }else if( pilihanComp == 'kertas' ){
            pilihanCom('kertas');
            playerComDraw();
        }else if( pilihanComp == 'gunting' ){
            pilihanCom('gunting');
            comWin();
        }
    }else if( pilihanPlayer == 'gunting' ) {
        if( pilihanComp == 'batu' ){
            pilihanCom('batu');
            comWin();
        }else if( pilihanComp == 'kertas' ){
            pilihanCom('kertas');
            playerWin();
        }else if( pilihanComp == 'gunting' ){
            pilihanCom('gunting');
            playerComDraw();
        }
    }
}

const playerWin = () => {
    document.getElementById("versusInfo").innerHTML = 'PLAYER 1 <br> WIN';
    document.getElementById("versusInfo").classList.remove('versus-state');
    document.getElementById("versusInfo").classList.remove('versus-state-comwin');
    document.getElementById("versusInfo").classList.remove('versus-state-draw');
    document.getElementById("versusInfo").classList.add('versus-state-playwin');
}

const comWin = () => {
    document.getElementById("versusInfo").innerHTML = 'COMPUTER <br> WIN';
    document.getElementById("versusInfo").classList.remove('versus-state');
    document.getElementById("versusInfo").classList.remove('versus-state-playwin');
    document.getElementById("versusInfo").classList.remove('versus-state-draw');
    document.getElementById("versusInfo").classList.add('versus-state-comwin');
}

const playerComDraw = () => {
    document.getElementById("versusInfo").innerHTML = '<span>D R A W</span>';
    document.getElementById("versusInfo").classList.remove('versus-state');
    document.getElementById("versusInfo").classList.remove('versus-state-playwin');
    document.getElementById("versusInfo").classList.remove('versus-state-comwin');
    document.getElementById("versusInfo").classList.add('versus-state-draw');
}

const resetResult = () => {
    document.getElementById("versusInfo").innerHTML = '<span>VS</span>';
    document.getElementById("versusInfo").classList.remove('versus-state-playwin');
    document.getElementById("versusInfo").classList.remove('versus-state-comwin');
    document.getElementById("versusInfo").classList.remove('versus-state-draw');
    document.getElementById("versusInfo").classList.add('versus-state');
}

// comWin();

const pilihanPlayer = (rps) =>{
    let batuPlayer = $("#batuPlayer")
    let kertasPlayer = $("#kertasPlayer")
    let guntingPlayer = $("#guntingPlayer");
    let batuCom = $("#batuCom")
    let kertasCom = $("#kertasCom")
    let guntingCom = $("#guntingCom");
    // console.log(rps);
    if(rps == 'batu'){
        batuPlayer.addClass( "start-state-selected" );
        batuPlayer.removeClass( "start-state" );
        kertasPlayer.removeClass( "start-state-selected" );
        kertasPlayer.addClass( "start-state" );
        guntingPlayer.removeClass( "start-state-selected" );
        guntingPlayer.addClass( "start-state" );
    }else if(rps == 'kertas'){
        batuPlayer.removeClass( "start-state-selected" );
        batuPlayer.addClass( "start-state" );
        kertasPlayer.addClass( "start-state-selected" );
        kertasPlayer.removeClass( "start-state" );
        guntingPlayer.removeClass( "start-state-selected" );
        guntingPlayer.addClass( "start-state" );
    }else if( rps == 'gunting' ){
        batuPlayer.removeClass( "start-state-selected" );
        batuPlayer.addClass( "start-state" );
        kertasPlayer.removeClass( "start-state-selected" );
        kertasPlayer.addClass( "start-state" );
        guntingPlayer.addClass( "start-state-selected" );
        guntingPlayer.removeClass( "start-state" );
    }else if(rps == 'reset'){
        batuPlayer.removeClass( "start-state-selected" );
        batuPlayer.addClass( "start-state" );
        kertasPlayer.removeClass( "start-state-selected" );
        kertasPlayer.addClass( "start-state" );
        guntingPlayer.removeClass( "start-state-selected" );
        guntingPlayer.addClass( "start-state" );
        batuCom.removeClass( "start-state-selected" );
        batuCom.removeClass( "start-state" );
        kertasCom.removeClass( "start-state-selected" );
        kertasCom.removeClass( "start-state" );
        guntingCom.removeClass( "start-state-selected" );
        guntingCom.removeClass( "start-state" );
        resetResult()
    }
}

const pilihanCom = (rpsCom) =>{
    let batuCom = $("#batuCom")
    let kertasCom = $("#kertasCom")
    let guntingCom = $("#guntingCom");
    // console.log(rpsCom);
    if(rpsCom == 'batu'){
        batuCom.addClass( "start-state-selected" );
        batuCom.removeClass( "start-state" );
        kertasCom.removeClass( "start-state-selected" );
        // kertasCom.addClass( "start-state" );
        guntingCom.removeClass( "start-state-selected" );
        // guntingCom.addClass( "start-state" );
    }else if(rpsCom == 'kertas'){
        batuCom.removeClass( "start-state-selected" );
        // batuCom.addClass( "start-state" );
        kertasCom.addClass( "start-state-selected" );
        kertasCom.removeClass( "start-state" );
        guntingCom.removeClass( "start-state-selected" );
        // guntingCom.addClass( "start-state" );
    }else if( rpsCom == 'gunting' ){
        batuCom.removeClass( "start-state-selected" );
        // batuCom.addClass( "start-state" );
        kertasCom.removeClass( "start-state-selected" );
        // kertasCom.addClass( "start-state" );
        guntingCom.addClass( "start-state-selected" );
        guntingCom.removeClass( "start-state" );
    }else if(rpsCom == 'reset'){
        batuCom.removeClass( "start-state-selected" );
        batuCom.removeClass( "start-state" );
        kertasCom.removeClass( "start-state-selected" );
        kertasCom.removeClass( "start-state" );
        guntingCom.removeClass( "start-state-selected" );
        guntingCom.removeClass( "start-state" );
    }
}


