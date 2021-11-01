const navbarMenu = document.querySelector('.navbar__menu');
const navbarItem = document.querySelectorAll('.navbar__item');

function toast(title,subtitle){
    const main = document.querySelector('.toast');
    if(main){
        const toast = document.createElement('div');
        toast.classList.add('toast__container','row');
        toast.onclick = function(e){
            const closeToast = e.target.closest('.toast__close');
            if(closeToast){
                main.removeChild(toast);
            }
        }
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="bi bi-bell-fill"></i>
            </div>
            <div class="toats__content">
                <h4 class="toast__title">${title}</h4>
                <p class="toast__subtitle">${subtitle}</p>
            </div>
            <div class="toast__close">
                <i class="bi bi-x-lg"></i>
            </div>
        `
        main.appendChild(toast);

        setTimeout(function(){
            main.removeChild(toast);
        },4500)
    }
}

navbarItem.forEach(function(e){
    e.onclick = function(){
        toast('notification',
        'The function is being completed, please wait!');
    }
})