document.addEventListener("DOMContentLoaded", function(event) {

    //Un commentaire
    console.log("Ça fonctionne!!!");


    function scrollWaypointInit( items, trigger ) {
        items.each( function() {
            var element = $(this),
                osAnimationClass = element.data("animation"),
                osAnimationDelay = element.attr('data-animation-delay');

            element.css({
                '-webkit-animation-delay':  osAnimationDelay,
                '-moz-animation-delay':     osAnimationDelay,
                'animation-delay':          osAnimationDelay
            });

            var trigger = ( trigger ) ? trigger : element;

            trigger.waypoint(function() {
                element.addClass('animated').addClass(osAnimationClass);
            },{
                // triggerOnce: true,
                offset: '80%'
            });
        });
    }

    const menu = document.querySelector("#toggle");
    if(menu !== null) {
        menu.addEventListener("click", (e) => {
            menu.classList.toggle("active");
            document.querySelector("#overlay").classList.toggle("open");
        });
    }

    scrollWaypointInit( $('.animateMe') );






});