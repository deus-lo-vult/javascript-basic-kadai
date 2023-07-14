const isBtn = document.getElementById('btn');
isBtn.addEventListener('click', () => {
    const targetText = document.getElementById('text');
    targetText.textContent = 'ボタンをクリックしました';
});