const isBtn = document.getElementById('btn');
isBtn.addEventListener('click', () => {
    const targetText = document.getElementById('text');

    setTimeout(() => {
        targetText.textContent = 'ボタンをクリックしました';
    }, 2000);
});