let userName = prompt('Ismingizni kiriting:');
let userPrice = prompt("Yonizda necha so'm pul bor:")

let elTitle = document.querySelector('.title');

if (userPrice >= 12585600) {
    elTitle.textContent = `Oq yo'l, ${userName}`
}else{
    elTitle.textContent = `${userName}, ozgina sabr qilish kerak ekan`
}