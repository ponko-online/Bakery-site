// ハンバーガーメニュー
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// タブでメニュー切り替え
const tabs = document.querySelectorAll(".tab");
const menuGroups = document.querySelectorAll(".menu-group");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // タブのactiveをリセット
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    // メニューを全部隠す
    menuGroups.forEach((menu) => {
      menu.classList.remove("active");
    });

    // クリックしたタブのdata属性を取得
    const target = tab.dataset.tab;

    // 対応するメニューを表示
    document.querySelector("." + target).classList.add("active");
  });
});

// モーダル
const imgs = document.querySelectorAll(".gallery-img");
const modal = document.getElementById("modal");
const modalImg = document.querySelector(".modal-img");
const closeBtn = document.querySelector(".close");

imgs.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

closeBtn.addEventListener("click", () => (modal.style.display = "none"));
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
