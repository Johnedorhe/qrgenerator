const button = document.getElementById('button');
const input = document.getElementById('input');
const qrcodeContainer = document.getElementById('qrcode');

button.addEventListener('click', () => {
    // Clear previous QR code
    qrcodeContainer.innerHTML = '';

    // Generate new QR code
    const qrCode = new QRCode(qrcodeContainer, {
        text: input.value,
        width: 128,
        height: 128,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
});

// Allow Enter key to generate QR code
input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        button.click();
    }
});