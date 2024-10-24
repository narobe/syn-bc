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

const saveBtn = document.querySelector(".save-contact");
saveBtn.addEventListener("click", function () {
  var vcard =
    "BEGIN:VCARD\nVERSION:2.1\nN:website developers;SYNDICAT;;;\nFN:SYNDICAT website developers\nTEL;CELL:094-429-1235\nTEL;CELL:096-453-4544\n\nTEL;CELL:098-877-7273\nEMAIL;WORK:narobekenea@gmail.com\nADR;HOME:;;Addis Ababa, Ethiopia;;;;\nORG:Syndicat\nURL:syndicat.com.et\nPHOTO;ENCODING=BASE64;JPEG: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\nNOTE;CHARSET=UTF-8;ENCODING=QUOTED-PRINTABLE:=57=65=20=44=6F=3A=0A=0A=E2=80=A2=20=4E=46=43=20=42=75=73=69=6E=65=73=\n=73=20=63=61=72=64=0A=E2=80=A2=20=57=65=62=73=69=74=65=20=64=65=76=65=\n=6C=6F=70=6D=65=6E=74=20=0A=E2=80=A2=20=55=49=2F=55=58=20=64=65=73=69=\n=67=6E\nEND:VCARD";
  var blob = new Blob([vcard], { type: "text/vcard" });
  var url = URL.createObjectURL(blob);
  const newLink = document.createElement("a");
  newLink.download = "Syndicat web developers" + ".vcf";
  newLink.textContent = "Syndicat";
  newLink.href = url;
  newLink.click();
});

const btx = document.querySelector(".share-container");

btx.addEventListener("click", () => {
  navigator.share({
    title: document.title,
    img: "./img/syn-vcj-banner.jpg",
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
  // const data = await response.json();
  // console.log(data)
  if (response.ok) {
    form.reset();
    alert("form sent!");
  } else {
    alert("form not sent!");
  }
}
