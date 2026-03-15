// --- 1. Sistema de Likes ---
document.querySelectorAll(".like").forEach(btn => {
    btn.addEventListener("click", () => {
        let counter = btn.parentElement.nextElementSibling.querySelector(".count");
        let value = parseInt(counter.innerText);

        if (!btn.classList.contains("liked")) {
            value++;
            btn.classList.add("liked");
            btn.innerText = "❤️";
        } else {
            value--;
            btn.classList.remove("liked");
            btn.innerText = "♡";
        }
        counter.innerText = value;
    });
});

// --- 2. Drag con Mouse para PC ---
const slider = document.getElementById("carousel");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.style.cursor = "grabbing";
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.style.cursor = "grab";
});

slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.style.cursor = "grab";
});

slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; 
    slider.scrollLeft = scrollLeft - walk;
});

// --- 3. Cronómetro ---
const targetDate = new Date(2026, 5, 15, 16, 0).getTime();

function updateTimer() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) return;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('days').innerText = d < 10 ? '0' + d : d;
    document.getElementById('hours').innerText = h < 10 ? '0' + h : h;
    document.getElementById('mins').innerText = m < 10 ? '0' + m : m;
}

setInterval(updateTimer, 1000);
updateTimer();