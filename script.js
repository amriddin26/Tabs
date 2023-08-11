const btns = document.querySelectorAll('.tab-nav__btn');
const content = document.querySelectorAll('.tab-body__content');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        for (let i = 0; i < btns.length; i++) {
            btns[i].classList.remove('active');
            content[i].classList.remove('active');
        }

        btn.classList.add('active');
        const index = btn.getAttribute('data-num');
        content[index].classList.add('active');
    });
});