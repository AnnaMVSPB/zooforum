const formAdd = document.getElementById('formAdd');
const animallist = document.querySelector('.animalList');

if (formAdd) {
  formAdd.addEventListener('submit', async (e) => {
    e.preventDefault();

    const {
      name, url, description, method, action,
    } = e.target;
    const res = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        url: url.value,
        description: description.value,
      }),
    });
    const data = await res.json();

    animallist.insertAdjacentHTML('beforeend', data.html);
  });
}

if (animallist) {
  animallist.addEventListener('click', async (e) => {
    if (e.target.classList.contains('deleteAnimal')) {
      const res = await fetch(`/animals/${e.target.closest('.animalCard').dataset.id}`, {
        method: 'DELETE',
      });

      const data = await res.json();
      if (data.message === 'ok') {
        e.target.closest('.animalCard').remove();
      }
    }
    if (e.target.classList.contains('bi')) {
      const res = await fetch(`/api/likes/${e.target.closest('.animalCard').dataset.id}`, {
        method: 'post',

      });
      const data = await res.json();
      if (data.message === 'ok') {
        document.querySelector(`.quantityLikes${e.target.closest('.animalCard').dataset.id}`).innerHTML = data.quantityLikes;
        if (data.quantityLikes === 1 || data.quantityLikes === 0) {
          e.target.classList.toggle('bi-star-fill');
          e.target.classList.toggle('bi-star');
        }
      }
    }
  });
}
