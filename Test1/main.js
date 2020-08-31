// const menu = document.querySelectorAll('#menu-drop > li');
// for(let i = 0 ; i < menu.length ; i++ ) {
//     menu[i].addEventListener("click", () => {
//
//         var menuItems = document.querySelectorAll('#menu-drop > li > ul');
//         for (let j = 0; j< menuItems.length ; j ++) {
//             menuItems[j].style.display = "none";
//         }
//         menuItems[i].style.display = "block";
//     });
// }

$( document ).ready(() => {
    $('.menu-item>.link').bind('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).siblings('.sub-menu').slideToggle(400, 'swing');
    });
});
