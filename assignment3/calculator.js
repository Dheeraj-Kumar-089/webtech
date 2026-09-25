const gradeForm = document.querySelector("#grade-form");
const formError = document.querySelector("#form-error");
const resultPanel = document.querySelector("#result-panel");
const pageBody = document.querySelector("#page-body");

const getGrade = (marks) => {
  if (marks >= 90) return { letter: "A+", point: 10 };
  if (marks >= 80) return { letter: "A", point: 9 };
  if (marks >= 70) return { letter: "B", point: 8 };
  if (marks >= 60) return { letter: "C", point: 7 };
  if (marks >= 50) return { letter: "D", point: 6 };
  if (marks >= 40) return { letter: "E", point: 5 };
  return { letter: "F", point: 0 };
};

gradeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputs = [...gradeForm.querySelectorAll("input[type='number']")];
  const marks = inputs.map((input) => Number(input.value));

  if (marks.some((mark) => !Number.isFinite(mark) || mark < 0 || mark > 100)) {
    formError.textContent = "Please enter a mark between 0 and 100 for every subject.";
    formError.hidden = false;
    resultPanel.hidden = true;
    return;
  }

  formError.hidden = true;
  const grades = marks.map(getGrade);
  const total = marks.reduce((sum, mark) => sum + mark, 0);
  const percentage = total / inputs.length;
  const sgpa = grades.reduce((sum, grade) => sum + grade.point, 0) / grades.length;
  const passed = grades.every((grade) => grade.letter !== "F");
  const distinction = passed && percentage >= 75;

  grades.forEach((grade, index) => {
    document.querySelector(`#result-${index + 1}`).textContent = `${grade.letter} / ${grade.point}`;
  });
  document.querySelector("#total-marks").textContent = `${total} / ${inputs.length * 100}`;
  document.querySelector("#percentage").textContent = `${percentage.toFixed(2)}%`;
  document.querySelector("#sgpa").textContent = sgpa.toFixed(2);
  document.querySelector("#result-title").textContent = distinction ? "Distinction achieved" : passed ? "Semester passed" : "Needs improvement";
  document.querySelector("#result-message").textContent = distinction ? "Excellent work across all five subjects." : passed ? "You have cleared every subject. Keep going." : "One or more subjects need another attempt.";
  pageBody.className = `calculator-page result-${distinction ? "distinction" : passed ? "pass" : "fail"}`;
  resultPanel.hidden = false;
  resultPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
});
