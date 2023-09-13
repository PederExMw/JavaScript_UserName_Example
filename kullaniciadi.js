let inputElement = document.getElementById('isimgir3');
let uyariElement = document.getElementById('girilenSatir');
let kabulEdilenUzunluk = inputElement.maxLength;

function uyariver(event) {
    let girilenYazi = event.target.value;
    let girilenYaziUzunlugu = girilenYazi.length;
    let uyari = kabulEdilenUzunluk - girilenYaziUzunlugu;
    uyariElement.textContent = uyari;
}

inputElement.addEventListener('input', uyariver);