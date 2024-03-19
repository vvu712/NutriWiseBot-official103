function navigate() {
    let navPage = document.getElementById("navBarPhone");
    if (navPage.style.display == "none") {
      navPage.style.display = "block";
    } else {
      navPage.style.display = "none";
    }
  }
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      // Insert the loaded content into the container section
      document.getElementById("footer").innerHTML = data;
    })

    .catch((error) => console.error("Error loading content:", error));