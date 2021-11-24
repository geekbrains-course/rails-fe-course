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

const handleClick = (event) => {
  const buttonElement = event.target;
  changeButtonClass(buttonElement);
}

document.addEventListener('DOMContentLoaded', function () {
  const buttonElement = document.getElementById("click-me");
  buttonElement.addEventListener("click", handleClick);
})
