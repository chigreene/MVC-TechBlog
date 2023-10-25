const logout = async () => {
    console.log('log out clicked')
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
      document.location.replace("/");
      console.log('logged out')
  } else {
    alert("Failed to log out.");
  }
};

document.querySelector("#logout").addEventListener("click", logout);
