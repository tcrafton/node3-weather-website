const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

const getWeather = (location) =>
  fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if (!data.error) {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      } else {
        messageOne.textContent = data.error;
      }
    });
  });

weatherForm.addEventListener("submit", (e, callback) => {
  e.preventDefault();

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";
  const location = search.value;

  getWeather(location);
});
