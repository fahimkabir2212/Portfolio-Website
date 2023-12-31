const mainMenu = document.querySelector('.menu');

const closeMenu = document.querySelector('.close-menu');

const openMenu = document.querySelector('.open-menu');

const menu_items = document.querySelectorAll('nav .menu li a');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-150%';
}