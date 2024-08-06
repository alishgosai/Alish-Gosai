//contact form
//function to handle form submission
function handleFormSubmission(event) {
  event.preventDefault(); //this will prevent default form submission

  const formData = new FormData(event.target); //

  fetch("https://formspree.io/f/mnnanevv", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        //hide form and show thank you message
        document.getElementById("contact-form").style.display = "none";
        document.getElementById("thank-you").style.display = "block";
      } else {
        //Handle errors otherwise
        alert("There was a problem with the form submission.");
      }
    })

    .catch((error) => {
      //handling errors
      console.error("Error:", error);
      alert("There was a problem with form submission.");
    });
}

//adding event listener for form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", handleFormSubmission);
