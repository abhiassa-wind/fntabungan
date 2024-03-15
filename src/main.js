const formName = document.getElementById('formName');
const nabung = document.getElementById('nabung');
const toggleMenu = document.getElementById('toggleMenu');
const jumlah = document.getElementById('jumlah');

const objectKonversi = document.getElementById('konversi');


var updateValue = localStorage.getItem('jumlahTabungan');
var tabungan = document.getElementById('tabungan');


function updateButton() {
    nabung.classList.toggle('hidden')
    nabung.classList.toggle('flex')
};

function start() {
    formName.classList.toggle('hidden')
};

function toggleButton() {
    toggleMenu.classList.toggle('hidden')
}

function closeNabung() {
    nabung.classList.toggle('hidden')
}

function closeMenu() {
    toggleMenu.classList.toggle('hidden')
}

function update() {
    localStorage.setItem('jumlahTabungan', jumlah.value);
    alert('Update tabungan berhasil...');
    location.reload()
};

if (updateValue) {
    tabungan.innerHTML = `IDR ${updateValue}`
};

function logoutButton() {
    localStorage.removeItem('userPhoto'); 
    localStorage.removeItem('userName'); 
    localStorage.removeItem('userEmail');
    localStorage.removeItem('jumlahTabungan');

    window.location.href = '../index.html';
    alert('Logout berhasil')
};

function konversi() {
    objectKonversi.classList.add('block')
    objectKonversi.classList.remove('hidden')

    setTimeout(() => {
        objectKonversi.classList.add('hidden')
    }, 5000)
};