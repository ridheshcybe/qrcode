const result = document.getElementById("result");
const emailSubmit = document.getElementById("email");
const subjectSubmit = document.getElementById("subject");
const messageSubmit = document.getElementById("message");

let message = ""
var qrcode = new QRCode(result, {
    width: 100,
    height: 100
});

document.getElementById("Gen").onclick = () => {
    if (emailSubmit.value && !subjectSubmit.value && !messageSubmit.value)
        return qrcode.makeCode("MAILTO:" + emailSubmit.value);
    qrcode.makeCode(`MATMSG:TO:${emailSubmit.value};SUB:${subjectSubmit.value};BODY:${messageSubmit.value};;` || 'MAILTO:');
}