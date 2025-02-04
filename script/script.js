let corFundoVisivel = true;
function alternarCorDeFundo() {
    const card = document.getElementById('card');
    if (corFundoVisivel) {
        card.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    } else {
        card.style.backgroundColor = '#2b2e33';
    }
    corFundoVisivel = !corFundoVisivel;
}
const btn = document.getElementById('btn');
        btn.addEventListener('click', alternarCorDeFundo);
        
    