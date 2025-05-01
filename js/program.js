// === Календарь: запрет выходных ===
function initCalendar() {
  const dateInput = document.getElementById("date");
  if (dateInput) {
    dateInput.addEventListener("input", function () {
      const selectedDate = new Date(this.value);
      const day = selectedDate.getDay();

      if (day === 0 || day === 6) {
        this.setCustomValidity("Выберите будний день");
        this.reportValidity();
        this.value = "";
      } else {
        this.setCustomValidity("");
      }
    });
  }
}

// === DOMContentLoaded ===
document.addEventListener("DOMContentLoaded", function () {
  initCalendar();
  // scrollRestoration: не сохранять позицию при переходе
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
});
