
const papers = [
  { subject: "Math", year: "2022", language: "English", link: "https://www.doenets.lk/pastpapers/papers/A/L/2022%20O%20L%20Mathematics%20I%20English.pdf" },
  { subject: "Math", year: "2022", language: "Sinhala", link: "https://www.doenets.lk/pastpapers/papers/A/L/2022%20O%20L%20Mathematics%20I%20Sinhala.pdf" },
  { subject: "Science", year: "2021", language: "English", link: "https://www.doenets.lk/pastpapers/papers/A/L/2021%20O%20L%20Science%20II%20English.pdf" },
  { subject: "ICT", year: "2020", language: "Sinhala", link: "https://www.doenets.lk/pastpapers/papers/A/L/2020%20O%20L%20ICT%20I%20Sinhala.pdf" }
];

function displayPapers(list) {
  const container = document.getElementById("paperList");
  container.innerHTML = "";
  list.forEach(paper => {
    container.innerHTML += `
      <div class="paper-card">
        <h3>${paper.year} - ${paper.subject} (${paper.language})</h3>
        <a class="download-btn" href="${paper.link}" target="_blank">Download PDF</a>
      </div>
    `;
  });
}

function filterPapers() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const subject = document.getElementById("subjectFilter").value;
  const year = document.getElementById("yearFilter").value;

  const filtered = papers.filter(p =>
    (p.subject.toLowerCase().includes(search) || p.year.includes(search)) &&
    (subject === "" || p.subject === subject) &&
    (year === "" || p.year === year)
  );

  displayPapers(filtered);
}

document.getElementById("searchInput").addEventListener("input", filterPapers);
document.getElementById("subjectFilter").addEventListener("change", filterPapers);
document.getElementById("yearFilter").addEventListener("change", filterPapers);

window.onload = () => displayPapers(papers);
