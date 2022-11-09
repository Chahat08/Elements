$('#fullpage').fullpage({
    sectionsColor: ['#000000', '#0B1124', '#1B0300', '#110023', '#010d00', '#000000'],
    anchors: ['home', 'about', 'experience', 'technologies', 'projects', 'contact'],
    menu: '#myNavbar',
    navigation: true,
    navigationPosition: 'right',
    verticalCentered: true,
    controlArrows: true,
    scrollBar: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom'
});

$('.arrowDown').click(function () {
    $.fn.fullpage.moveSectionDown();
});

wow = new WOW();
wow.init();

new TypeIt("#element", {
    speed: 70,
    loop: true
})
    .type("2022 Summer Analyst at Goldman Sachs, Bangalore.", { delay: 2000 })
    .delete(null, { delay: 500 })
    .type("9 months research experience with Nottingham Trent University & Panjab University.", { delay: 2000 })
    .delete (null, { delay: 500 })
    .type("Computer Science undergraduate with current 8.93 CGPA.", { delay: 2000 })
    .delete(null, { delay: 500 })
    .type("Multiple personal projects ranging across various domains.", { delay: 2000 })
    .go();

new TypeIt("#expElement", {
    speed: 70,
    loop: true
})
    .type("2022 Summer Analyst at Goldman Sachs, Bangalore.", { delay: 2000 })
    .delete(null, { delay: 500 })
    .type("9 months research experience with Nottingham Trent University & Panjab University.", { delay: 2000 })
    .delete(null, { delay: 500 })
    .type("Computer Science undergraduate with current 8.93 CGPA.", { delay: 2000 })
    .delete(null, { delay: 500 })
    .type("Multiple personal projects ranging across various domains.", { delay: 2000 })
    .go();


new magicMouse();