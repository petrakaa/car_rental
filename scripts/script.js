const filterItems = document.querySelectorAll('.cars-filter li');
const carItems = document.querySelectorAll('.car');
const carsContent = document.getElementById('cars-content');

filterItems.forEach((item) => {
  item.onclick = () => {
    filterItems.forEach((el) => el.classList.remove('active'));
    item.classList.add('active');

    const filterText = item.textContent.toLocaleLowerCase();

    carItems.forEach((car) => {
      if (
        filterText === 'все марки' ||
        car
          .querySelector('h4')
          .textContent.toLocaleLowerCase()
          .includes(filterText)
      ) {
        car.style.display = 'flex';
      } else {
        car.style.display = 'none';
      }
    });
    carsContent.scrollIntoView({ behavior: 'instant' });
  };
});

const carField = document.getElementById('car');
const nameField = document.getElementById('name');
const phoneField = document.getElementById('phone');

function validateField(field) {
  const value = field.value.trim();

  if (value === '') {
    field.style.borderColor = 'red';
    return false;
  }

  if (field === phoneField) {
    if (!/^\d+$/.test(value) || value.length < 10) {
      field.style.borderColor = 'red';
      return false;
    }
  }

  field.style.borderColor = 'white';
  return true;
}

document.getElementById('order-action').addEventListener('click', function () {
  const fields = [carField, nameField, phoneField];
  let hasError = false;

  fields.forEach((field) => {
    if (!validateField(field)) {
      hasError = true;
    }
  });

  if (!hasError) {
    alert('Спасибо за заявку! Мы скоро свяжемся с вами');
    fields.forEach((field) => (field.value = ''));
  }
});
