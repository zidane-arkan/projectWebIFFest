onload = function () {
    let customAnimation = anime({
        targets: '.img-mountain',
        translateY: 0,
        opacity: 1,
        duration: 1500,
        easing: 'linear'
    });
};

// var tl = anime.timeline({
//     easing: 'easeOutExpo',
//     duration: 800,
//     direction: 'alternate'
// });
// // Add children
// tl
// .add({
//     targets: '.img-mountain',
//     translateY: 300,
// })
// .add({
//     targets: '.img-trees',
//     translateY: 250,
// })
