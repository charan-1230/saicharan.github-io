function myFunction() {
  document.body.classList.toggle("darkmain");
  document.getElementById("aboutyourself").classList.toggle("darkabout");
  var iconElement = document.getElementById("togg");
  if (iconElement) {
    iconElement.classList.toggle("far");
    iconElement.classList.toggle("fas");
    iconElement.classList.toggle("fa-sun");
    iconElement.classList.toggle("fa-moon");
  }
}


function restopnav() {
  var x = document.getElementById("mynavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

function likePost(button) {
  var likeCount = button.nextElementSibling;
  var currentCount = parseInt(likeCount.textContent);
  var newCount = currentCount === 9 ? 10 : 9;
  likeCount.textContent = newCount;
  button.textContent = newCount === 10 ? "❤️" : "🤍";
}

function addComment(blogId) {
  const commentInput = document.getElementById(`commentInput_${blogId}`);
  const commentsContainer = document.getElementById(`comments_${blogId}`);
  const comment = commentInput.value.trim();

  if (comment !== "") {
    commentsContainer.innerHTML += `<p>${comment}</p>`;
    commentInput.value = "";
  }
}




