// 要素を取得
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンクリック時の処理
btn.addEventListener('click', () => {
  // 2秒後に文章を書き換える
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});
