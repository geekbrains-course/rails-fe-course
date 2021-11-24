const changeLikeIconColor = (iconElement) => {
  iconElement.classList.add('like--red');
}

const handleLike = (event) => {
  const iconElement = event.target;
  changeLikeIconColor(iconElement);
}

document.addEventListener('DOMContentLoaded', function () {
  const iconElement = document.getElementById("like");
  iconElement.addEventListener("click", handleLike);
})
