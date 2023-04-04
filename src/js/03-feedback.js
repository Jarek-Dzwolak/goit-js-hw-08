import throttle from 'lodash.throttle';

const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const form = document.querySelector('.feedback-form');

const storageKey = 'feedback-form';

const updateStorage = throttle(() => {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(state));
}, 500);

// funkcja wczytująca stan formularza z localStorage i uzupełniająca pola formularza

const loadFromStorage = () => {
  const state = JSON.parse(localStorage.getItem(storageKey));
  if (state) {
    emailInput.value = state.email;
    messageInput.value = state.message;
  } else {
    emailInput.value = '';
    messageInput.value = '';
  }
};

// dodajemy nasłuchiwacze na zdarzenie input dla pól email i message

emailInput.addEventListener('input', () => {
  updateStorage();
});

messageInput.addEventListener('input', () => {
  updateStorage();
});

// wczytujemy stan formularza z localStorage podczas ładowania strony

loadFromStorage();

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log('Email:', emailInput.value);
  console.log('Message:', messageInput.value);

  emailInput.value = '';
  messageInput.value = '';
});
console.log(localStorage);
console.log(storageKey);
