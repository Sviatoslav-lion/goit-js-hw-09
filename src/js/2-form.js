// Оголошуємо об'єкт для зберігання даних
const formData = { email: "", message: "" };

// Отримуємо елементи форми
const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector("[name=email]");
const messageInput = form.querySelector("[name=message]");

// Відстежуємо зміни у формі через делегування подій
form.addEventListener("input", (event) => {
  // Оновлюємо об'єкт formData
  if (event.target.name === "email") {
    formData.email = event.target.value.trim();
  } else if (event.target.name === "message") {
    formData.message = event.target.value.trim();
  }

  // Зберігаємо дані у локальне сховище
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

// Завантажуємо дані з локального сховища, якщо вони є
document.addEventListener("DOMContentLoaded", () => {
  const savedData = localStorage.getItem("feedback-form-state");
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    formData.email = email;
    formData.message = message;

    // Заповнюємо поля форми
    emailInput.value = email;
    messageInput.value = message;
  }
});

// Відправлення форми
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Перевірка, чи заповнені всі поля
  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  // Виводимо дані у консоль
  console.log(formData);

  // Очищаємо локальне сховище і форму
  localStorage.removeItem("feedback-form-state");
  formData.email = "";
  formData.message = "";
  emailInput.value = "";
  messageInput.value = "";
});