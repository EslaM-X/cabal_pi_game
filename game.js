
let lang = "en";

const texts = {
  en: {
    gameTitle: "Cabal Pi Game",
    profileTitle: "Player Profile",
    storeTitle: "NFT Weapon Store",
    connect: "🔗 Connect Pi Wallet",
    wallet: "Wallet: ",
    switch: "العربية"
  },
  ar: {
    gameTitle: "لعبة كابال باي",
    profileTitle: "الملف الشخصي",
    storeTitle: "متجر الأسلحة NFT",
    connect: "🔗 ربط محفظة Pi",
    wallet: "المحفظة: ",
    switch: "English"
  }
};

function switchLanguage() {
  lang = lang === "en" ? "ar" : "en";
  const t = texts[lang];
  document.getElementById("game-title").textContent = t.gameTitle;
  document.getElementById("profile-title").textContent = t.profileTitle;
  document.getElementById("store-title").textContent = t.storeTitle;
  document.getElementById("wallet").childNodes[0].nodeValue = t.wallet;
  document.querySelector("button[onclick='connectWallet()']").textContent = t.connect;
  document.getElementById("lang-switch").textContent = t.switch;
}

function connectWallet() {
  const wallet = window.Pi && Pi.Auth ? "pi_user_0x123456789" : "[Pi SDK not loaded]";
  document.getElementById("wallet-address").textContent = wallet;
}

function buyNFT(itemId) {
  alert("Purchasing " + itemId + " with Pi...");
}
