const menuIcon = document.getElementById('menu-icon');
const menuSlider = document.getElementById('menu-slider');
const searchIcon = document.getElementById('search-icon');
const searchSlider = document.getElementById('search-slider')
const searchInput = document.getElementById('search-input');
const searchResult = document.getElementById('search-result')
const audio = new Audio("/audio/digit.mp4");

const content = [
    "contenuto letteratura e filosofia",
    "contenuto informatica e matematica",
    "contenuto informatica e altro"
];

searchIcon.addEventListener('click', toggleSearch);
searchInput.addEventListener('keyup', searchAction);


function toggleSearch() {
    searchSlider.classList.toggle('chiudi')
    searchSlider.classList.toggle('apri')
    if (searchSlider.classList.contains('apri')) {
        searchInput.focus();
    }
}

function searchAction(e) {
    if (e.keyCode === 13) {
        search(searchInput.value)
        searchInput.value = ""

    }
    if (e.keyCode === 27) {
        if (searchSlider.classList.contains('apri')) {
            searchSlider.classList.add('chiudi')
            searchSlider.classList.remove('apri')
        }
    }
}

function search(str) {
    let result = [];
    searchResult.textContent = ""
    content.forEach(element => {
        if (element.indexOf(str) !== -1) {
            result.push(element)
        }

    });
    if (result.length === 0) {
        return setResultElement("Nessun Risultato")
    }

    result.forEach(risultato => setResultElement(risultato))
}

function setResultElement(risultato) {
    let newResult = document.createElement('p');
    newResult.appendChild(document.createTextNode(risultato));
    searchResult.appendChild(newResult);
    audio.play()
}



menuIcon.addEventListener('click', toggleMenu);

function toggleMenu() {
    menuIcon.classList.toggle('transform')
    menuSlider.classList.toggle('chiudi')
    menuSlider.classList.toggle('apri')
}

