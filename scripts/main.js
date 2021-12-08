const elBird = document.querySelectorAll('.card__bird'),
    elCat = document.querySelectorAll('.card__cat'),
    cbBirds = document.getElementById('cbBirds'),
    cbCats = document.getElementById('cbCats');

function toggleBirds() {
    for (let i = 0; i < elBird.length; i++) {
        if (cbBirds.checked == true) {
            elBird[i].style.display = 'block';
        } else {
            elBird[i].style.display = 'none';
        }
    }
}

function toggleCats() {
    for (let i = 0; i < elCat.length; i++) {
        if (cbCats.checked == true) {
            elCat[i].style.display = 'block';
         } else {
             elCat[i].style.display = 'none'
         }
    }
}