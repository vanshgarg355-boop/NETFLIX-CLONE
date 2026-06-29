// NAVBAR EFFECT

window.addEventListener("scroll", () => {

    const navbar =
    document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.classList.add("active");

    } else {

        navbar.classList.remove("active");

    }

});

// EMAIL BUTTON

const buttons =
document.querySelectorAll(".email-box button");

buttons.forEach((btn) => {

    btn.addEventListener("click", () => {

        const input =
        btn.parentElement.querySelector("input");

        if(input.value === ""){

            alert("Please enter your email");

        } else {

            alert("Welcome to Netflix Clone 🎬");

            input.value = "";

        }

    });

});

// FAQ AUTO CLOSE

const details =
document.querySelectorAll("details");

details.forEach((item) => {

    item.addEventListener("toggle", () => {

        if(item.open){

            details.forEach((other) => {

                if(other !== item){

                    other.removeAttribute("open");

                }

            });

        }

    });

});

// MOVIE CLICK

const movies =
document.querySelectorAll(".Trending img");

movies.forEach((movie) => {

    movie.addEventListener("click", () => {

        movie.style.transform = "scale(1.12)";

        setTimeout(() => {

            movie.style.transform = "scale(1)";

        }, 300);

    });

});