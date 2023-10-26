document
  .getElementById("showPartialButton")
    .addEventListener("click", function () {
        console.log('hello')
    
    const partialContainer = document.getElementById("partialContainer");

    // Toggle display of the partialContainer
    if (
      partialContainer.style.display === "none" || partialContainer.style.display === ""
    ) {
      partialContainer.style.display = "block";
    } else {
      partialContainer.style.display = "none";
    }
  });
