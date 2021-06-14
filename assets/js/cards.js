class Cards {
    constructor(){
        this.posicaoSectionDicas = document.getElementById("section-dicas");
        this.cardEsq = document.querySelector(".card-esq");
        this.cardDir = document.querySelector(".card-dir");
    }

    scrollCard(){
        window.requestAnimationFrame(this.calculoScroll.bind(this));
    }

    calculoScroll(){
        const posicaoY = this.posicaoSectionDicas.getBoundingClientRect()['y'];
        const windowWidth = window.innerWidth;

        if(posicaoY >= 25 && windowWidth > 700){

            this.cardEsq.style.transform = `translate(${(-posicaoY + 25)/10}%)`;
            this.cardDir.style.transform = `translate(${(posicaoY - 25) / 10}%)`;
        }
    }
};

export { Cards };