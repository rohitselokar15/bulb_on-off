document.addEventListener("DOMContentLoaded", () => {
  const onbulb = document.querySelector(".div_1 img");
  const offbulb = document.querySelector(".div_2 img");
  const div3 = document.querySelector(".div_3");

  onbulb.addEventListener("click", () => {
    onbulb.style.visibility = "hidden";
  });

  offbulb.addEventListener("click", () => {
    const newBulb = document.createElement("img");
    newBulb.src = "off.gif";
    newBulb.width = 80;
    newBulb.style.backgroundColor = "white";
    newBulb.style.marginLeft = "40px";
    newBulb.style.padding = "70px";

    div3.appendChild(newBulb);
  });
});
