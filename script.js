let section = doctument.querySelectorALl('section');
let navlinks = doctument.querySelectorALl('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top= window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getattribute('id');

        if(top >= offset && top < offset + height)
        
    });
}