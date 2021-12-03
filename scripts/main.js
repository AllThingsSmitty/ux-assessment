const elBird = document.querySelectorAll('.card__bird'),
    elCat = document.querySelectorAll('.card__cat'),
    cbBirds = document.getElementById('cb-birds'),
    cbCats = document.getElementById('cb-cats');

function toggleBirds() {
    for (let i = 0; i < elBird.length; i++) {
        if (cbBirds.checked == true) {
            elBird[i].style.display = 'flex';
            elCat[i].classList.remove('col-1-2');
        } else {
            elBird[i].style.display = 'none';
            elCat[i].classList.add('col-1-2');
        }
    }
}

function toggleCats() {
    for (let i = 0; i < elCat.length; i++) {
        if (cbCats.checked == true) {
            elCat[i].style.display = 'flex';
            elBird[i].classList.remove('col-1-2');
         } else {
             elCat[i].style.display = 'none'
             elBird[i].classList.add('col-1-2');
         }
    }
}