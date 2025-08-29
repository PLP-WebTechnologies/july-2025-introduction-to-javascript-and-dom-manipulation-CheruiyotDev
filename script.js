const btn = document.querySelector(".btn");
const jsContent = document.querySelector(".js-content");

btn.addEventListener("click", (e) => {
  alert("Successfully Subscribed");
  btn.innerHTML = "Subscribed";
  btn.classList.add("subscribed");
});

jsContent.innerHTML = `<p style="color: red; margin-top: 2rem; font-size: 1.5rem;">Hello this is javascript dom content</p>`;
