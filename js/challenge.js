document.addEventListener("DOMContentLoaded", () => {
  const counter = document.getElementById("counter");
  const minus = document.getElementById("minus");
  const plus = document.getElementById("plus");
  const heart = document.getElementById("heart");
  const pause = document.getElementById("pause");
  const commentForm = document.getElementById("comment-form");
  const commentsList = document.getElementById("list");

  let counterValue = 0;
  let counterInterval;
  let isPaused = false;

  function startCounter() {
    counterInterval = setInterval(() => {
      if (!isPaused) {
        counterValue++;
        counter.innerText = counterValue;
      }
    }, 1000);
  }

  plus.addEventListener("click", () => {
    counterValue++;
    counter.innerText = counterValue;
  });

  minus.addEventListener("click", () => {
    counterValue--;
    counter.innerText = counterValue;
  });

  heart.addEventListener("click", () => {
    const like = document.createElement("li");
    like.innerText = `${counterValue} has been liked 1 time`;
    commentsList.appendChild(like);
  });

  pause.addEventListener("click", () => {
    isPaused = !isPaused;
    if (isPaused) {
      clearInterval(counterInterval);
      minus.disabled = true;
      plus.disabled = true;
      heart.disabled = true;
      pause.innerText = "resume";
    } else {
      startCounter();
      minus.disabled = false;
      plus.disabled = false;
      heart.disabled = false;
      pause.innerText = "pause";
    }
  });

  commentForm.addEventListener("submit", event => {
    event.preventDefault();
    const commentInput = document.getElementById("comment-input");
    const comment = commentInput.value;
    commentInput.value = "";

    const commentItem = document.createElement("p");
    commentItem.innerText = comment;
    commentsList.appendChild(commentItem);
  });

  startCounter();
});