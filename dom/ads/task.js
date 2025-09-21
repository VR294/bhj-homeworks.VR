const rotators = document.querySelectorAll('.rotator');

rotators.forEach(function(rotator) {
    const cases = rotator.querySelectorAll('.rotator__case');
    let index = 0;

    setInterval(function() {
        cases[index].classList.remove('rotator__case_active');
        index = (index + 1) % cases.length;
        cases[index].classList.add('rotator__case_active');
    }, 1000);
});
