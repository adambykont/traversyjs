const form = document.getElementById("my-form");
const submit = document.querySelector("#my-submit");
const clickme = document.getElementById("clickme");

function onUserSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");


    const valueV = name.value;
    const emailV = email.value;
    const message = `${valueV}: ${emailV}`;
    console.log(message);

    const items = document.getElementById("items");
    const li = document.createElement("li");
    items.appendChild(li);
    li.innerHTML = message;
    name.value = '';
    email.value = '';
}

submit.addEventListener('click', onUserSubmit);

function onClickMe(event) {
    console.log(event.target.id);
    console.log(event.target);
}

clickme.addEventListener('click', onClickMe);
clickme.addEventListener('click', (e) => console.log("Clicked"));
