// bitcoin:879878979789?amount=0&message=jij\

const cc = document.getElementById("cc");
const message = document.getElementById("msg");
const address = document.getElementById("addr");
const generate = document.getElementById("Gen");
const amount = document.getElementById("amount");

generate.onclick = () => {
    let msg = `${address.value}?amount=${amount.value}&message=${msg.value}`
    switch (cc.value) {
        case "btc":
        default:
            msg = `bitcoin:` + msg
            break;
        case "btcc":
            msg = 'bitcoincash:' + msg
            break;
        case "ether":
            msg = 'ethereum:' + msg
            break;
        case "lite":
            msg = 'litecoin:' + msg;
            break;
        case "dash":
            msg = 'dash:' + msg;
            break;
    }
}