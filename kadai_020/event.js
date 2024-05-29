const text = document.getElementById('text');
const btn = document.getElementById('btn');
btn.addEventListener('click',()=>{
  const textSecond = document.createElement('h2');
  textSecond.textContent = 'ボタンをクリックしました';
  document.body.appendChild(textSecond); // 新しい要素をbodyに追加
});