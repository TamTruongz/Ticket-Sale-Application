// Calendar
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const btnCalendar = document.querySelector(".btn-calendar");
const calendar = document.querySelector(".calendar-modal");
const monthYear = document.querySelector("#month-year");
const days = document.querySelector(".days");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const SelectedDay = document.querySelector(".selected");
const selectedDateInput = document.getElementById("selectedDate");

let currentDate = new Date();
console.log(currentDate);
function renderCalendar() {
  let firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  let lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );
  let lastDayOfPrevMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    0
  );
  let daysInMonth = lastDayOfMonth.getDate();
  let daysInPrevMonth = lastDayOfPrevMonth.getDate();
  let firstDayOfWeek = firstDayOfMonth.getDay();
  let lastDayOfWeek = lastDayOfMonth.getDay();

  monthYear.innerHTML = `${currentDate.toLocaleString("default", {
    month: "long",
  })} ${currentDate.getFullYear()}`;

  let daysHtml = "";

  for (let i = firstDayOfWeek; i > 0; i--) {
    daysHtml += `<div class="prev-month">${daysInPrevMonth - i + 1}</div>`;
  }

  for (let i = 1; i <= daysInMonth; i++) {
    let dayClass = "";
    if (
      i === new Date().getDate() &&
      currentDate.getMonth() === new Date().getMonth() &&
      currentDate.getFullYear() === new Date().getFullYear()
    ) {
      dayClass = "today";
    }
    if (i === parseInt(document.querySelector(".selected")?.textContent)) {
      dayClass = "selected";
    }
    daysHtml += `<div class="${dayClass}" onclick="selectDay(this)">${i}</div>`;
  }

  for (let i = 1; i < 7 - lastDayOfWeek; i++) {
    daysHtml += `<div class="next-month">${i}</div>`;
  }

  days.innerHTML = daysHtml;
}

function prevMonth() {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
}

function nextMonth() {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
}

function selectDay(day) {
  let selected = document.querySelector(".selected");
  if (selected) {
    selected.classList.remove("selected");
  }
  day.classList.add("selected");
}

btnCalendar.addEventListener("click", () => {
  calendar.style.display = "block";
  renderCalendar();
});

window.addEventListener("click", (event) => {
  if (event.target == calendar) {
    calendar.style.display = "none";
  }
});

function selectDay(day) {
  let selected = document.querySelector(".selected");
  if (selected) {
    selected.classList.remove("selected");
  }
  day.classList.add("selected");
  calendar.style.display = "none";
}

calendar.addEventListener("click", (event) => {
  if (event.target === calendar) {
    calendar.style.display = "none";
  }
});

days.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("prev-month") ||
    event.target.classList.contains("next-month")
  ) {
    return;
  }

  selectDay(event.target);
  updateSelectedDate();
  calendar.style.display = "none";
});

selectedDateInput.addEventListener("click", () => {
  calendar.style.display = "block";
});

function updateSelectedDate() {
  const selectedDateInput = document.getElementById("selectedDate");
  const selectedDay = document.querySelector(".selected").textContent;
  const [selectedMonth, selectedYear] = monthYear.innerHTML.split(" ");

  const selectedDate = new Date(
    `${selectedMonth} ${selectedDay}, ${selectedYear}`
  ).toLocaleDateString();
  selectedDateInput.value = selectedDate;
}

renderCalendar();
