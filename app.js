/*
User memilih 3 pilihan yaitu : Gunting, Batu atau Kertas. Akan dibuat 3 tombol
Tersimpan data berupa array yang berisi [gunting, batu, kertas]
Computer akan mengambil data secara random dari array tersebut
Ketika user memencet tombol maka CPU pun akan me-return hasil dari pilihan random dari array yang telah disediakan
Pengondisian
Return hasil ke display
*/

var cpu, cpuDisplay, gunting, batu, kertas, cpuPick, result, reset;

cpu = ['gunting', 'batu', 'kertas'];

gunting = document.querySelector('.gunting');
batu = document.querySelector('.batu');
kertas = document.querySelector('.kertas');
cpuDisplay = document.querySelector('.cpu-display');
result = document.querySelector('.result');
reset = document.querySelector('.reset');

gunting.addEventListener('click', function () {
    cpuPick();
    var i = cpuPick();
    if (cpuPick() == 'gunting') {
        cpuDisplay.textContent = 'Gunting'
        result.textContent = 'Seri';
    } else if (i == 'batu') {
        cpuDisplay.textContent = 'Batu'
        result.textContent = 'Kalah';
    } else {
        cpuDisplay.textContent = 'Kertas'
        result.textContent = 'Menang';
    }
})

batu.addEventListener('click', function () {
    cpuPick();
    var i = cpuPick();
    if (cpuPick() == 'gunting') {
        cpuDisplay.textContent = 'Gunting'
        result.textContent = 'Menang';
    } else if (i == 'batu') {
        cpuDisplay.textContent = 'Batu'
        result.textContent = 'Seri';
    } else {
        cpuDisplay.textContent = 'Kertas'
        result.textContent = 'Kalah';
    }
})

kertas.addEventListener('click', function () {
    cpuPick();
    var i = cpuPick();
    if (cpuPick() == 'gunting') {
        cpuDisplay.textContent = 'Kalah'
        result.textContent = 'Seri';
    } else if (i == 'batu') {
        cpuDisplay.textContent = 'Menang'
        result.textContent = 'Kalah';
    } else {
        cpuDisplay.textContent = 'Kertas'
        result.textContent = 'Seri';
    }
})


//CPU PICK
function cpuPick() {
    cpuRand = Math.floor(Math.random() * 3);
    return cpu[cpuRand];
}

//RANDOM
reset.addEventListener('click', function () {
    cpuDisplay.textContent = '';
    result.textContent = '';
    result.style.background = '#fff';
})