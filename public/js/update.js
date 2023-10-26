async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector("#title").value;
  const content = document.querySelector("#body").value;
  const postId =
    window.location.pathname.split("/")[
      window.location.pathname.split("/").length - 1
    ];

  const response = await fetch(`/api/post/${postId}`, {
    method: "PUT",
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
    alert("failed to update comment.");
  }
}

document
  .querySelector(".update-form")
  .addEventListener("submit", newFormHandler);
