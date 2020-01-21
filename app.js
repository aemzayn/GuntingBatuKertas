/*
User memilih 3 pilihan yaitu : Gunting, Batu atau Kertas. Akan dibuat 3 tombol
Tersimpan data berupa array yang berisi [gunting, batu, kertas]
Computer akan mengambil data secara random dari array tersebut
Ketika user memencet tombol maka CPU pun akan me-return hasil dari pilihan random dari array yang telah disediakan
Pengondisian
Return hasil ke display
*/

var cpuChoices, gunting, batu, kertas, cpuPick;
// var reset;

cpuChoices = ['gunting', 'batu', 'kertas'];

//Action buttons
gunting = document.querySelector('.gunting');
batu = document.querySelector('.batu');
kertas = document.querySelector('.kertas');

//cpu
var cpuDisplay, cpu;
cpuDisplay = document.getElementById('cpu-display');
cpu = document.getElementById('cpu');

//player
var pDisplay, p;
pDisplay = document.getElementById('p-display');
p = document.getElementById('p');

//both
var display = document.querySelector('.display');


gunting.addEventListener('click', function () { //p1 gunting
    cpuPick();
    var i = cpuPick();
    pDisplay.textContent = 'Gunting';
    if (i == 'gunting') {
        cpuDisplay.textContent = 'Gunting'; //seri
        seri();

    } else if (i == 'batu') {
        cpuDisplay.textContent = 'Batu' //p kalah
        pLose();
    } else if (i == 'kertas') {
        cpuDisplay.textContent = 'Kertas' //p menang
        pWin();
    }
})

batu.addEventListener('click', function () {
    cpuPick();
    var i = cpuPick();
    pDisplay.textContent = 'Batu';
    if (i == 'gunting') {
        cpuDisplay.textContent = 'Gunting'; //p menang
        pWin();
    } else if (i == 'batu') {
        cpuDisplay.textContent = 'Batu'; //seri
        seri();
    } else {
        cpuDisplay.textContent = 'Kertas'; //p kalah
        pLose();
    }
})

kertas.addEventListener('click', function () {
    cpuPick();
    var i = cpuPick();
    pDisplay.textContent = 'Kertas';
    if (i == 'gunting') {
        cpuDisplay.textContent = 'Gunting'; //p kalah
        pLose();
    } else if (i == 'batu') {
        cpuDisplay.textContent = 'Batu'; //p menang
        pWin();
    } else {
        cpuDisplay.textContent = 'Kertas'; //seri
        seri();
    }
})


//CPU PICK
function cpuPick() {
    var cpuRand = Math.floor(Math.random() * 3); // returns a random integer from 0 to 2
    return cpuChoices[cpuRand];
}


//Kondisi
var pWin, pLose, cpuWin, cpuLose, tie;

function pWin() {
    //add score to p
    addScoreP();

    //add win class to p and lose class to cpu
    p.classList.add('menang');
    cpu.classList.add('kalah');

    //remove other classes
    p.classList.remove('kalah');
    p.classList.remove('seri');

    cpu.classList.remove('menang');
    cpu.classList.remove('seri');

}

function pLose() {
    //add score to cpu
    addScoreCpu();

    //add lose class to p and win class to cpu
    p.classList.add('kalah');
    cpu.classList.add('menang');

    //remove other classes
    p.classList.remove('menang');
    p.classList.remove('seri');

    cpu.classList.remove('kalah');
    cpu.classList.remove('seri');
}

function seri() {
    //add tie class to both p and cpu
    p.classList.add('seri');
    cpu.classList.add('seri');

    //remove other classes
    p.classList.remove('menang');
    p.classList.remove('kalah');

    cpu.classList.remove('menang');
    cpu.classList.remove('kalah');
}

//score
var pScore, cpuDisplay, pScoreDisplay, cpuScoreDisplay;
pScore = 0;
cpuScore = 0;

pScoreDisplay = document.getElementById('p-score');
cpuScoreDisplay = document.getElementById('cpu-score');

//pwin function

function addScoreP() {
    pScore++;
    pScoreDisplay.innerHTML = pScore;
    console.log("p score " + pScore);
}

//cpuwin function

function addScoreCpu() {
    cpuScore++;
    console.log("cpu score " + cpuScore);
    cpuScoreDisplay.innerHTML = cpuScore;
}