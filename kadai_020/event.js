// <h2>の要素を取得
const text = document.getElementById("text");

// <button>の要素を取得
const button = document.getElementById("btn");

// ボタンクリック時の処理
button.addEventListener("click", function() {
  text.textContent = "ボタンをクリックしました";
});
