const leftTextArea = document.querySelector("#leftTextArea");
const rightTextArea = document.querySelector("#rightTextArea");
const encode = document.querySelector("#encode");
const decode = document.querySelector("#decode");
const clearB = document.querySelector("#clear");

runEventListeners();

function runEventListeners() {
  encode.addEventListener("click", encoded);
  decode.addEventListener("click", decoded);
  clearB.addEventListener("click", clear);
}

function clear() {
  if (leftTextArea.value.trim() === "" && rightTextArea.value.trim() === "") {
    alert("Silinecek Bir Değer Bulunmamaktadır...");
  }
  leftTextArea.value = "";
  rightTextArea.value = "";
}

function decoded() {
  if (rightTextArea.value == "") {
    alert("Çözülecek Bir Değer bulunmamaktadır...");
  }
  leftTextArea.value = atob(rightTextArea.value);
  rightTextArea.value = "";
}

function encoded() {
  if (leftTextArea.value.trim() == "") {
    alert("Lütfen bir şifre giriniz!");
    return;
  }
  //   let password = leftTextArea.value;
  //   let encodedPassword = window.btoa(password);
  //   rightTextArea.value = encodedPassword;

  rightTextArea.value = btoa(leftTextArea.value);
  leftTextArea.value = "";
}
