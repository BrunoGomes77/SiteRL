document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.dataset.tab;

        // Remove a classe 'active' de todos os botões e containers
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.produtos-container').forEach(container => container.classList.remove('active'));

        // Adiciona a classe 'active' ao botão clicado e ao container correspondente
        button.classList.add('active');
        document.querySelector(`.${tabId}`).classList.add('active');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const leftButton = carousel.querySelector('.carousel-button.left');
        const rightButton = carousel.querySelector('.carousel-button.right');
        const produtoWrapper = carousel.querySelector('.produto-wrapper');
        const produtos = produtoWrapper.children;

        let currentIndex = 0;

        const updateCarousel = () => {
            const totalProducts = produtos.length;
            const offset = currentIndex * -100; // Move o carrossel para a esquerda

            produtoWrapper.style.transform = `translateX(${offset}%)`;
        };

        rightButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % produtos.length; // Incrementa o índice em loop
            updateCarousel();
        });

        leftButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + produtos.length) % produtos.length; // Decrementa o índice em loop
            updateCarousel();
        });
    });
});
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.dataset.tab;

        // Remove a classe 'active' de todos os botões e containers
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.produtos-container').forEach(container => container.classList.remove('active'));

        // Adiciona a classe 'active' ao botão clicado e ao container correspondente
        button.classList.add('active');
        document.querySelector(`.${tabId}`).classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Exibe apenas o primeiro container ao carregar
    document.querySelector('.notebooks').classList.add('active');

    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.dataset.tab;

            // Remove a classe 'active' de todos os botões e containers
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.produtos-container').forEach(container => container.classList.remove('active'));

            // Adiciona a classe 'active' ao botão clicado e ao container correspondente
            button.classList.add('active');
            document.querySelector(`.${tabId}`).classList.add('active');
        });
    });
});
