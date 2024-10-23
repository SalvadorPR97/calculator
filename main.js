import "./style.css";

const body = document.querySelector("body");

const mainDiv = document.createElement("div");
mainDiv.className = "calculator";
const screenDiv = document.createElement("div");
screenDiv.className = "screen";
screenDiv.id = "screen";

const ulButtons = document.createElement("ul");
ulButtons.className = "buttons";
ulButtons.id = "buttons";

const mockData = [
    { "data-key": "clear", textContent: "C" },
    { "data-key": "-", textContent: "-" },
    { "data-key": "/", textContent: "/" },
    { "data-key": "*", textContent: "X" },
    { "data-key": "7", textContent: "7" },
    { "data-key": "8", textContent: "8" },
    { "data-key": "9", textContent: "9" },
    { "data-key": "-", textContent: "-" },
    { "data-key": "4", textContent: "4" },
    { "data-key": "5", textContent: "5" },
    { "data-key": "6", textContent: "6" },
    { "data-key": "+", textContent: "+" },
    { "data-key": "1", textContent: "1" },
    { "data-key": "2", textContent: "2" },
    { "data-key": "3", textContent: "3" },
    { "data-key": "equal", textContent: "=", class: "equal tall" },
    { "data-key": "0", textContent: "0", class: "wide shift" },
    { "data-key": ".", textContent: ".", class: "shift" },
];

const liList = mockData.map((data) => {
    const button = document.createElement("li");
    const aButton = document.createElement("a");
    aButton.href = "#";
    aButton.dataset.key = data["data-key"];
    aButton.textContent = data["textContent"];
    if (data.hasOwnProperty("class")) {
        aButton.className = data["class"];
    }
    //Con eventos en los li
    /*if (data["data-key"] == "equal") {
        button.addEventListener("click", getResult);
    } else if (data["data-key"] == "clear") {
      button.addEventListener("click", () => {
        screenDiv.textContent = "";
      });
    } else {
        button.addEventListener("click", () => {
          if (screenDiv.style.fontSize == "1rem") {
            screenDiv.textContent = "";
            screenDiv.style.fontSize = "3rem";
          }
          screenDiv.textContent += aButton.dataset.key;
        });
    }*/
    button.append(aButton);
    ulButtons.append(button);
});
//Eventos en la ul
ulButtons.addEventListener("click", e =>{
  let key = e.target.dataset.key;
  if (screenDiv.style.fontSize == "1rem") {
    clear();
    screenDiv.style.fontSize = "3rem";
  }
  if (key == "clear") {
    clear();
  } else if (key == "equal"){
    getResult();
  }else if (key != undefined) {
    screenDiv.textContent += key;
  }
  console.log(e.target.dataset.key);
})
mainDiv.append(screenDiv, ulButtons);
body.append(mainDiv);
//Funcionalidad
function clear() {
  screenDiv.textContent = "";
}
function getResult() {
    try {
        let result = eval(screenDiv.textContent);
        screenDiv.textContent = result;
    } catch (error) {
      screenDiv.style.fontSize = "1rem";
      screenDiv.textContent = error.message;
    }
}
