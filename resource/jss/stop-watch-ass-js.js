let h2 = 0, h1 = 0, m2 = 0, m1 = 0, s2 = 0, s1 = 0; on = 0; var go;
const start_btn = document.getElementById("start");
const stop_btn = document.querySelector("#stop");
const reset_btn = document.querySelector("#reset");


start_btn.addEventListener("click", () => {
    ++on;
    if (on === 1) {
        go = setInterval(start, 1000);
    }
})

stop_btn.addEventListener("click", () => {
        on = 0;
        clearInterval(go);
})

reset_btn.addEventListener("click", () => {
    setTimeout(() => {
        history.go();
    }, 100);
})

function start() {
    document.getElementById("s1").innerHTML = s1;
    document.getElementById("s2").innerHTML = s2;
    document.getElementById("m1").innerHTML = m1;
    document.getElementById("m2").innerHTML = m2;
    document.getElementById("h1").innerHTML = h1;
    document.getElementById("h2").innerHTML = h2;
    ++s1;
    if (s1 === 10) {
        ++s2;
        s1 = 0;
    }
    if (s2 > 5) {
        ++m1;
        s2 = 0;
    }
    if (m1 > 9) {
        ++m2;
        m1 = 0;
    }
    if (m2 > 5) {
        ++h1;
        m2 = 0;
    }
    if (h1 > 9) {
        ++h2;
        h1 = 0;
    }
}
