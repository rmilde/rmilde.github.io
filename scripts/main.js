
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/mesnowshoeing.JPG") {
    myImage.setAttribute("src", "images/me_falling.JPG");
  } else {
    myImage.setAttribute("src", "images/me_falling.JPG");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Hello ${myName}`;
    }
  }

  myButton.onclick = () => {
    setUserName();
  };