let spanDead = document.getElementById("dead");
let dead = Number(spanDead.textContent);

let spanLost = document.getElementById("lost");
let lost = Number(spanLost.textContent);

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for (let i = 1; i <= 9; i++) {
    let hole = getHole(i);

    hole.onclick = function() {
        if (hole.classList.contains("hole_has-mole")) {
            dead++;
            spanDead.textContent = dead;
        } else {
            lost++;
            spanLost.textContent = lost;
        }

        if (dead === 10) {
            alert("Победа!");
            dead = 0;
            lost = 0;
            spanDead.textContent = dead;
            spanLost.textContent = lost;
        }

        if (lost === 5) {
            alert("Вы проиграли!");
            dead = 0;
            lost = 0;
            spanDead.textContent = dead;
            spanLost.textContent = lost;
        }
    };
}