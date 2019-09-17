        $('.pop .letters').each(function() {
            $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
        });

        anime.timeline({
                loop: true
            })
            .add({
                targets: '.pop .letter',
                translateY: ["1.1em", 0],
                translateZ: 0,
                duration: 750,
                delay: function(el, i) {
                    return 60 * i;
                }
            }).add({
                targets: '.pop',
                opacity: 0,
                duration: 4000,
                easing: "easeOutExpo",
                delay: 2000
            });

        var myIndex = 0;
        carousel();

        function carousel() {
            var i;
            var x =
                document.getElementsByClassName("mySlides");

            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            myIndex++;
            if (myIndex > x.length) {
                myIndex = 1;
            }
            x[myIndex - 1].style.display = "block";
            setTimeout(carousel, 4000);
        }