const year = document.getElementById("currentYear");

function getYear() {
    let date = new Date();
    let currentYear = date.getFullYear();

    year.textContent = currentYear;
}

getYear();
