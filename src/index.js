const WEEKS_IN_YEAR = 52;
const EXPECTED_LIFESPAN = 90;

const birthday = new Date(1997, 8, 15).getTime();
const today = new Date().getTime();
const lifetime = today - birthday;
const ageInDays = Math.ceil(lifetime / (1000 * 60 * 60 * 24));
const ageInWeeks = ageInDays / 7;

const createHTMLElement = (tagName, className) => {
  const element = document.createElement(tagName);
  element.className = className;
  return element;
};

const container = document.getElementById("container");
for (let i = 0; i < EXPECTED_LIFESPAN; i++) {
  const row = createHTMLElement("div", "row");
  const rowNumber = createHTMLElement("span", "row-number");
  rowNumber.innerText = i + 1;
  row.appendChild(rowNumber);
  for (let j = 0; j < WEEKS_IN_YEAR; j++) {
    const isWeekPast = i * WEEKS_IN_YEAR + j <= ageInWeeks;
    const className = isWeekPast ? "cell past" : "cell";
    const cell = createHTMLElement("div", className);
    row.appendChild(cell);
  }
  container.appendChild(row);
}
