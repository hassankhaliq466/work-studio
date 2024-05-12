function loader(){
    
    var tl = gsap.timeline();
    
    tl.to(".yellow",{
        top: "-100%",
        delay:0.3,
        duration:0.5,
        expo:"ease.out"
    })
    
    
    
    tl.from(".intro .yellow2",{
        top:"100%",
        delay:0.5,
        duration:0.5,
        expo:"ease.out"
    },"anime")
    
    tl.to(".intro h1",{
        color:"black",
        delay:0.5,
    },"anime")
    
    tl.to(".intro",{
        opacity: 0,
    })
    
    tl.to(".intro",{
        display:"none"
    })
}
    
loader();


document.querySelectorAll('.options .hover_elem').forEach(elem => {
    elem.addEventListener('mouseenter', function() {
        let image = elem.getAttribute('data-image');
        document.querySelector('.image-overveiw')
        .style.backgroundImage = `url(${image})`
    });
    elem.addEventListener('mouseleave', function() {
        document.querySelector('.image-overveiw')
        .style.backgroundImage = ''
    });
});
