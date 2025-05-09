const subjects = [
  { name_en: "Mathematics", name_si: "ගණිතය", question: "assets/papers/math_question.pdf", answer: "assets/papers/math_answer.pdf" },
  { name_en: "Science", name_si: "විද්‍යාව", question: "assets/papers/science_question.pdf", answer: "assets/papers/science_answer.pdf" },
  { name_en: "Sinhala", name_si: "සිංහල", question: "assets/papers/sinhala_question.pdf", answer: "assets/papers/sinhala_answer.pdf" },
  { name_en: "English", name_si: "ඉංග්‍රීසි", question: "assets/papers/english_question.pdf", answer: "assets/papers/english_answer.pdf" },
  { name_en: "History", name_si: "ඉතිහාසය", question: "assets/papers/history_question.pdf", answer: "assets/papers/history_answer.pdf" },
  { name_en: "Buddhism", name_si: "බෞද්ධ ධර්මය", question: "assets/papers/buddhism_question.pdf", answer: "assets/papers/buddhism_answer.pdf" },
  { name_en: "Catholicism", name_si: "ක්‍රිස්තු / කතෝලික ධර්මය", question: "assets/papers/catholicism_question.pdf", answer: "assets/papers/catholicism_answer.pdf" },
  { name_en: "Hinduism", name_si: "හින්දු ධර්මය", question: "assets/papers/hinduism_question.pdf", answer: "assets/papers/hinduism_answer.pdf" },
  { name_en: "Islam", name_si: "ඉස්ලාම් ධර්මය", question: "assets/papers/islam_question.pdf", answer: "assets/papers/islam_answer.pdf" },
  { name_en: "Geography", name_si: "භූගෝල විද්‍යාව", question: "assets/papers/geography_question.pdf", answer: "assets/papers/geography_answer.pdf" },
  { name_en: "Civics", name_si: "පුරවැසි අධ්‍යයනය", question: "assets/papers/civics_question.pdf", answer: "assets/papers/civics_answer.pdf" },
  { name_en: "Agriculture", name_si: "ගොවිතැන", question: "assets/papers/agriculture_question.pdf", answer: "assets/papers/agriculture_answer.pdf" },
  { name_en: "Business & Accounting", name_si: "ව්‍යාපාරය හා ගිණුම්කරණය", question: "assets/papers/business_question.pdf", answer: "assets/papers/business_answer.pdf" },
  { name_en: "ICT", name_si: "තොරතුරු හා සන්නිවේදන තාක්ෂණය", question: "assets/papers/ict_question.pdf", answer: "assets/papers/ict_answer.pdf" },
  { name_en: "Art", name_si: "කලා", question: "assets/papers/art_question.pdf", answer: "assets/papers/art_answer.pdf" },
  { name_en: "Dancing", name_si: "නර්තන", question: "assets/papers/dancing_question.pdf", answer: "assets/papers/dancing_answer.pdf" },
  { name_en: "Music", name_si: "සංගීතය", question: "assets/papers/music_question.pdf", answer: "assets/papers/music_answer.pdf" },
  { name_en: "Drama", name_si: "නාට්‍ය", question: "assets/papers/drama_question.pdf", answer: "assets/papers/drama_answer.pdf" },
  { name_en: "Health", name_si: "සෞඛ්‍යය", question: "assets/papers/health_question.pdf", answer: "assets/papers/health_answer.pdf" },
  { name_en: "Home Science", name_si: "ගෘහ විද්‍යාව", question: "assets/papers/home_question.pdf", answer: "assets/papers/home_answer.pdf" },
  { name_en: "Second Language - Tamil", name_si: "දෙවන භාෂාව - දෙමළ", question: "assets/papers/tamil_question.pdf", answer: "assets/papers/tamil_answer.pdf" },
  { name_en: "Second Language - Japanese", name_si: "දෙවන භාෂාව - ජපන්", question: "assets/papers/japanese_question.pdf", answer: "assets/papers/japanese_answer.pdf" },
  { name_en: "Second Language - French", name_si: "දෙවන භාෂාව - ප්‍රංශ", question: "assets/papers/french_question.pdf", answer: "assets/papers/french_answer.pdf" },
  { name_en: "Design & Technology", name_si: "නිර්මාණ හා තාක්ෂණය", question: "assets/papers/tech_question.pdf", answer: "assets/papers/tech_answer.pdf" }
];

let currentLang = "en";

function toggleLanguage() {
  currentLang = currentLang === "en" ? "si" : "en";
  renderSubjects();
  document.getElementById("subtitle").innerText = currentLang === "en"
    ? "Select a subject to download past papers and answers."
    : "විෂයයක් තෝරන්න ප්‍රශ්න පත්‍ර සහ පිළිතුරු බාගැනීම සඳහා.";
}

function renderSubjects() {
  const container = document.getElementById("subjects");
  container.innerHTML = "";
  subjects.forEach(subject => {
    const card = document.createElement("div");
    card.className = "subject-card";
    card.innerHTML = `
      <h2>${currentLang === "en" ? subject.name_en : subject.name_si}</h2>
      <a href="${subject.question}" target="_blank">Question</a>
      <a href="${subject.answer}" target="_blank">Answer</a>
    `;
    container.appendChild(card);
  });
}

renderSubjects();
