const navItem = document.querySelectorAll(".nav-item");
const screenContainer = document.querySelectorAll(".screen-container");
function activeLink() {
  navItem.forEach((item) => {
    item.classList.remove("active");
    this.classList.add("active");
    const cur = this.dataset.index;
    screenContainer.forEach((sc) => {
      sc.classList.remove("active");
    });
    const toSee = document.querySelector(
      `.screen-container[data-index='${cur}']`
    );
    toSee.classList.add("active");
  });
}
navItem.forEach((item) => item.addEventListener("click", activeLink));

const btx = document.querySelector(".share-container");

btx.addEventListener("click", () => {
  navigator.share({
    title: document.title,
    text: "Syndicat Wed development",
    url: window.location.href,
  });
});

const form = document.querySelector("form");
const name_ = document.querySelector("input[name='name']");
const phone = document.querySelector("input[name='phone']");
const message = document.querySelector("textarea[name='message']");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log(name_, phone, message);
  // console.log(name_.value, phone.value, message.value);
  sendMessage();
});
async function sendMessage() {
  const url = `https://api.telegram.org/bot7256933927:AAFy19j4RNhJ_xsnOypGdafRqWMAY6LNX3Q/sendMessage?chat_id=-4550494994&text=<b>Name:</b>%20${name_.value}%0A<b>Phone:</b>%20${phone.value}%0A<b>Message:</b>%20${message.value}&parse_mode=HTML`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  if (response.ok) {
    form.reset();
    alert("form sent!");
  } else {
    alert("form not sent!");
  }
}
