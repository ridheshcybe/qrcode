const qrcode = new QRCode(document.getElementById("qr"), {
    width: 100,
    height: 100
});

document.getElementById("input").onchange = () => qrcode.makeCode(input.value || 'EXAMPLE');