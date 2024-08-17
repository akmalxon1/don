let random = document.getElementById("random-number");
let app = document.getElementById("app");
let randomNumber = Math.floor(Math.random() * 100 + 1);
random.innerText = randomNumber;
random.style.color = "red";
random.style.fontSize = "200px";
random.style.textAlign = "center";
random.style.marginTop = "200px";
app.appendChild(button);