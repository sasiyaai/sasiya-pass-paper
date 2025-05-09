
const papers = [
  { subject: "sinhala", year: "2024", url: "https://drive.google.com/sinhala_2024.pdf" },
  { subject: "sinhala", year: "2023", url: "https://drive.google.com/sinhala_2023.pdf" },
  { subject: "sinhala", year: "2022", url: "https://drive.google.com/sinhala_2022.pdf" },
  { subject: "sinhala", year: "2021", url: "https://drive.google.com/sinhala_2021.pdf" },
  { subject: "sinhala", year: "2020", url: "https://drive.google.com/sinhala_2020.pdf" },

  { subject: "maths", year: "2024", url: "https://drive.google.com/maths_2024.pdf" },
  { subject: "maths", year: "2023", url: "https://drive.google.com/maths_2023.pdf" },
  { subject: "maths", year: "2022", url: "https://drive.google.com/maths_2022.pdf" },
  { subject: "maths", year: "2021", url: "https://drive.google.com/maths_2021.pdf" },
  { subject: "maths", year: "2020", url: "https://drive.google.com/maths_2020.pdf" },

  { subject: "english", year: "2024", url: "https://www.paceinstitute.lk/past-papers/ordinary-level/2023/english-1.pdf" },
  { subject: "english", year: "2023", url: "https://drive.google.com/english_2023.pdf" },
  { subject: "english", year: "2022", url: "https://drive.google.com/english_2022.pdf" },
  { subject: "english", year: "2021", url: "https://drive.google.com/english_2021.pdf" },
  { subject: "english", year: "2020", url: "https://drive.google.com/english_2020.pdf" },

  { subject: "science", year: "2024", url: "https://drive.google.com/science_2024.pdf" },
  { subject: "science", year: "2023", url: "https://drive.google.com/science_2023.pdf" },
  { subject: "science", year: "2022", url: "https://drive.google.com/science_2022.pdf" },
  { subject: "science", year: "2021", url: "https://drive.google.com/science_2021.pdf" },
  { subject: "science", year: "2020", url: "https://drive.google.com/science_2020.pdf" },

  { subject: "history", year: "2024", url: "https://drive.google.com/history_2024.pdf" },
  { subject: "history", year: "2023", url: "https://drive.google.com/history_2023.pdf" },
  { subject: "history", year: "2022", url: "https://drive.google.com/history_2022.pdf" },
  { subject: "history", year: "2021", url: "https://drive.google.com/history_2021.pdf" },
  { subject: "history", year: "2020", url: "https://drive.google.com/history_2020.pdf" }
];

const paperContainer = document.getElementById("papers");
const subjectFilter = document.getElementById("subjectFilter");
const yearFilter = document.getElementById("yearFilter");

function displayPapers() {
  paperContainer.innerHTML = '';
  const subject = subjectFilter.value;
  const year = yearFilter.value;

  const filtered = papers.filter(p =>
    (subject === "all" || p.subject === subject) &&
    (year === "all" || p.year === year)
  );

  filtered.forEach(p => {
    const btn = document.createElement("a");
    btn.href = p.url;
    btn.textContent = `${capitalize(p.subject)} - ${p.year}`;
    btn.className = "paper-btn";
    btn.target = "_blank";
    paperContainer.appendChild(btn);
  });
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

subjectFilter.addEventListener("change", displayPapers);
yearFilter.addEventListener("change", displayPapers);

displayPapers();
