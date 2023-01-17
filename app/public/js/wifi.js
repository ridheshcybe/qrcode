const enc = document.getElementById("enc");
const pwd = document.getElementById("pwd");
const ssid = document.getElementById("ssid");

var qrcode = new QRCode(document.getElementById("qr"), {
    width: 100,
    height: 100
});

document.getElementById("Gen").onclick = () => {
    qrcode.makeCode(`WIFI:S:${ssid.value};T:${enc.value};P:${pwd.value};;`)
}