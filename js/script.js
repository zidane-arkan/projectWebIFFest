onload = function () {
    setTimeout(() => {
    anime({
            targets: '.img-mountain',
            keyframes: [
                { translateY: 300 },
                { translateY: 250 },
                { translateY: 200 },
                { translateY: 150 },
                { translateY: 100 },
                { translateY: 50 },
                { translateY: 0 }
            ],
            opacity: 1,
            duration: 1000,
            easing: 'cubicBezier(.5, .05, .1, .3)'
        });
    }, 1300);

    let tl = anime.timeline({
        easing: 'cubicBezier(.5, .05, .1, .3)',
        duration: 800,
        direction: 'normal'
    });
    // Time Animation
    tl
        .add({
            targets: '.img-trees',
            keyframes: [
                { translateY: 90 },
                { translateY: 70 },
                { translateY: 50 },
                { translateY: 30 },
                { translateY: 10 },
                { translateY: 0 }
            ],
            opacity: 1,
        })
        .add({
            targets: '.header-title-box',
            opacity: 1,
        }, '+=2400')
        .add({
            targets: '.btn-more-box',
            opacity: 1,
        }, '+=400');
};
