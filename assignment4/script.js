
function sendRequest(action, data, callback) {
  const formData = new URLSearchParams();
  formData.append('action', action);

  Object.keys(data).forEach(function (key) {
    formData.append(key, data[key]);
  });

  fetch('ajax.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formData.toString()
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      callback(result);
    })
    .catch(function (error) {
      console.log(error);
    });
}

document.getElementById('helloBtn').addEventListener('click', function () {
  sendRequest('hello', {}, function (result) {
    document.getElementById('helloResult').textContent = result.message;
  });
});

document.getElementById('gradeBtn').addEventListener('click', function () {
  const marks = document.getElementById('marksInput').value;

  sendRequest('grade', { marks: marks }, function (result) {
    document.getElementById('gradeResult').textContent = result.message;
  });
});



document.getElementById('oddBtn').addEventListener('click', function () {
  const n = document.getElementById('oddInput').value;

  sendRequest('oddNumbers', { n: n }, function (result) {
    document.getElementById('oddResult').textContent = result.oddNumbers.join(', ');
  });
});

document.getElementById('sortBtn').addEventListener('click', function () {
  const value = document.getElementById('sortInput').value;

  sendRequest('sortNumbers', { numbers: value }, function (result) {
    document.getElementById('sortResult').textContent = result.sortedNumbers.join(', ');
  });
});

document.getElementById('animalBtn').addEventListener('click', function () {
  const count = document.getElementById('animalCount').value;

  sendRequest('animalNames', { count: count }, function (result) {
    document.getElementById('animalResult').textContent = result.animalNames.join(', ');
  });
});

document.getElementById('feedbackForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  formData.append('action', 'feedback');

  fetch('ajax.php', {
    method: 'POST',
    body: formData
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      document.getElementById('formResult').textContent = result.message;
    })
    .catch(function (error) {
      console.log(error);
    });
});

document.getElementById('imageBtn').addEventListener('click', function () {
  const count = document.getElementById('imageCount').value;

  sendRequest('animalImages', { count: count }, function (result) {
    const imageBox = document.getElementById('imageResult');
    imageBox.innerHTML = '';

    result.images.forEach(function (url) {
      const img = document.createElement('img');
      img.src = url;
      img.alt = 'Animal image';
      imageBox.appendChild(img);
    });
  });
});