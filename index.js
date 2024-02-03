document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "./images/black-tshirt-exact-background.png",
        "./images/image2.png",
        "./images/image3.png",
    ];

    const sliderIcons = document.querySelectorAll(".sli");
    const imageTag = document.getElementById("img-1");

    sliderIcons.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            imageTag.src = images[index];

            sliderIcons.forEach(icon => {
                icon.classList.remove("active");
            });

            dot.classList.add("active");
        });
    });
});
