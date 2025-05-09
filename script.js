const searchBar = document.getElementById('searchBar');
const subjectFilter = document.getElementById('subjectFilter');
const yearFilter = document.getElementById('yearFilter');
const paperCards = document.querySelectorAll('.paper-card');

function filterPapers() {
  const search = searchBar.value.toLowerCase();
  const subject = subjectFilter.value;
  const year = yearFilter.value;

  paperCards.forEach(card => {
    const cardSubject = card.dataset.subject;
    const cardYear = card.dataset.year;
    const matchSearch = card.innerText.toLowerCase().includes(search);
    const matchSubject = subject === "" || cardSubject === subject;
    const matchYear = year === "" || cardYear === year;

    card.style.display = matchSearch && matchSubject && matchYear ? "block" : "none";
  });
}

searchBar.addEventListener('input', filterPapers);
subjectFilter.addEventListener('change', filterPapers);
yearFilter.addEventListener('change', filterPapers);
