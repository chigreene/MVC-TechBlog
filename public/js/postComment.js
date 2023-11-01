async function newFormHandler(event) {
  event.preventDefault();

  const comment = document.querySelector("#body").value;

  const postId =
    window.location.pathname.split("/")[
      window.location.pathname.split("/").length - 1
    ];

  const response = await fetch(`/api/post/${postId}/comment`, {
    method: "POST",
    body: JSON.stringify({
      comment,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("failed to post comment.");
  }
}

document
  .querySelector(".comment-form")
  .addEventListener("submit", newFormHandler);
