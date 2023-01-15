const qr = document.getElementById("qr");
const input = document.getElementById("input");

var qrcode = new QRCode(qr, {
    width: 100,
    height: 100
});

input.onchange = () => {
    qrcode.makeCode(input.value || 'EXAMPLE');
}