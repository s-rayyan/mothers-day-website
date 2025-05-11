$(window).on('load', function () {
    $("#page-5").hide();
    $('#loader').fadeOut(400, function () {
        setTimeout(() => $('#page-1').addClass('show'), 10);
        setTimeout(() => {
            $("#page-1").slideUp(1000);
            setTimeout(() => {
                $("#page-2").slideUp(1000);
                setTimeout(() => {
                    $("#page-3").slideUp(1000);
                    setTimeout(() => {
                        let u = 0;
                        let interval = setInterval(() => {
                            let elem = document.createElement("img");
                            elem.src = "flower.svg";
                            elem.className = "flower";

                            let x = getNonOverlappingX();
                            elem.style.left = x + "px";
                            elem.style.top = "-10px";
                            elem.style.animationDuration = (1 + Math.random() * 2).toFixed(2) + "s";

                            $("#flower-parent").append(elem);
                            $(elem).hide().fadeIn();

                            if (u === 99) {
                                clearInterval(interval);
                                setTimeout(() => {
                                    $("#page-5").show();
                                    $("#page-4").slideUp(1000);
                                    setTimeout(() => {
                                        const el = document.getElementById("author");
                                        el.innerHTML = el.textContent.split('').map((letter, i) =>
                                            `<span class="bouncy" style="animation-delay:${i * 0.1}s">${letter.replace(" ", "&nbsp;")}</span>`
                                        ).join('');


                                    }, 3000);
                                }, 3000);
                            }
                            u++;
                        }, 30);
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 2000);
    });
});

let usedPositionsX = [];

function getNonOverlappingX(width = 60) {
    let x, maxAttempts = 1000, attempts = 0;
    do {
        x = Math.floor(Math.random() * (window.innerWidth - width));
        attempts++;
    } while (usedPositionsX.some(pos => Math.abs(pos - x) < width + 10) && attempts < maxAttempts);
    usedPositionsX.push(x);
    return x;
}

