const getButtonColorClass = () => {
  const colors = ["green", "blue", "red"];        
  const index = Math.floor(Math.random() * colors.length);  
 
  return `button--${colors[index]}`;
}

const changeButtonClass = (buttonElement) => {
  const colorClass = getButtonColorClass();
  const className = `button ${colorClass}`;
  buttonElement.className = className;
}

const handleClick = async (event) => {
  const color = getButtonColor();

  const buttonElement = event.target;
  changeButtonClass(buttonElement, color);

  try {
    const requestBody = new FormData();
    requestBody.set("color", color);

    const response = await fetch('/colors', {
      method: 'POST',
      body: requestBody,
    });

    console.log(response);
  } catch (error) {
    console.log(error)
  }
}

window.addEventListener('turbolinks:load', function () {
  const buttonElement = document.getElementById("click-me");
  if (buttonElement) {
    buttonElement.addEventListener("click", handleClick);
  }
})
