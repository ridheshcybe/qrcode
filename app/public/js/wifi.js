const qr = document.getElementById("qr");
const enc = document.getElementById("enc");
const pwd = document.getElementById("pwd");
const btn = document.getElementById("Gen");
const ssid = document.getElementById("ssid");

var qrcode = new QRCode(qr, {
    width: 100,
    height: 100
});

btn.onclick = () => {
    qrcode.makeCode(`WIFI:S:${ssid.value};T:${enc.value};P:${pwd.value};;`)
}