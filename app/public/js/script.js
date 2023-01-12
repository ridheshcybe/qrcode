const btc = document.getElementById("btc");
const wifi = document.getElementById("wifi");
const vcard = document.getElementById("vcard");
const email = document.getElementById("email");
const result = document.getElementById("text");
const notice = document.querySelector("notice");

function inputgen(label, required = false) {
  const div = document.createElement("div");
  const span = document.createElement("span");
  const input = document.createElement("input");
  div.classList.add("input-group");
  input.classList.add("form-control");
  span.classList.add("input-group-text");
  span.innerHTML = label;
  input.required = required || false;
  div.appendChild(span);
  div.appendChild(input);
  div.appendChild(document.createElement("br"));
  div.appendChild(document.createElement("br"));
  return div;
}

vcard.onclick = () => {
  notice.innerHTML = "";
  const div = document.createElement("div");
  div.appendChild(inputgen("First name", true));
  div.appendChild(inputgen("Last name", true));
  div.appendChild(inputgen("Phone Number", true));
  div.appendChild(inputgen("Work number (optional)"));
  div.appendChild(inputgen("Email (optional)"));
  result.innerHTML = "";
  result.appendChild(div);
};
