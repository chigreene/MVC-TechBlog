async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector("#title").value;
  const content = document.querySelector("#body").value;

  const response = await fetch(`/api/post/`, {
    method: "POST",
    body: JSON.stringify({
      title,
      content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("failed to post comment.");
  }
}

document
  .querySelector(".comment-form")
  .addEventListener("submit", newFormHandler);
