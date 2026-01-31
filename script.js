function goYes() {
  showPage("yesPage");
  heartExplosion();
}

function goNo() {
  showPage("noPage");
  shakeScreen();
}

function goHome() {
  showPage("homePage");
}

function showPage(pageId) {
  document.getElementById("homePage").classList.add("hidden");
  document.getElementById("yesPage").classList.add("hidden");
  document.getElementById("noPage").classList.add("hidden");

  document.getElementById(pageId).classList.remove("hidden");
}

function heartExplosion() {
  for (let i = 0; i < 20; i++) {
    let heart = document.createElement("div");
    heart.innerText = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "70vh";
    heart.style.fontSize = "24px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }
}

function shakeScreen() {
  document.body.classList.add("shake");
  setTimeout(() => {
    document.body.classList.remove("shake");
  }, 400);
}
