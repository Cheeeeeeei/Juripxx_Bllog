document.addEventListener("DOMContentLoaded", () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    };

    prev.addEventListener("click", () => {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
        showSlide(currentSlide);
    });

    next.addEventListener("click", () => {
        currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);

    document.getElementById("registerForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const password = document.getElementById("password").value;
        if (password !== "1234") { // Simulamos una verificación simple
            alert("Contraseña incorrecta");
        } else {
            alert("Registrado con éxito");
        }
    });
});
document.getElementById("recoverForm").addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Contraseña recuperada");
});