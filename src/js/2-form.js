"use strict";

const form = document.querySelector(".feedback-form");

const formData = {
  email: "",
  message: "",
};

const STORAGE_KEY = "feedback-form-state";

formData.email = "";
formData.message = "";


const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  const parsedData = JSON.parse(savedData);

  formData.email = parsedData.email || "";
  formData.message = parsedData.message || "";

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}
form.addEventListener("input", handleInput);

form.addEventListener("submit", handleSubmit);

function handleInput(event) {
  const userName = event.target.name;
  const userValue = event.target.value.trim();

  formData[userName] = userValue;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function handleSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);

  form.reset();
}