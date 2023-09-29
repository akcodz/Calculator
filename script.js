let str = "";
let display = document.querySelector(".pannel");

function handleButtonClick(button) {
  const value = button.value;
  if (value === "=") {
    try {
      str = eval(str);
      display.value = str;
    } catch (error) {
      display.value = "error";
      str = "";
    }
  } else if (value === "AC") {
    str = "";
    display.value = str;
  } else if (value === "DE") {
    str = str.slice(0, -1);
    display.value = str;
  } else {
    str += value;
    display.value = str;
  }
}
