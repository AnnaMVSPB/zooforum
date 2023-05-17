const regForm = document.querySelector('.regForm');

if (regForm) {
  regForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      name, password, city, method, action,
    } = e.target;
    const res = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        password: password.value,
        city: city.value,
      }),
    });
    const data = await res.json();
    if (data.message === 'ok') {
      window.location.href = '/';
    } else {
      document.querySelector('.errReg').innerHTML = data.message;
    }
  });
}
