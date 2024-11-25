document.addEventListener('DOMContentLoaded', () => {
  const aspectContainer = document.getElementById('aspect-container');
  const addAspectButton = document.getElementById('add-aspect');
  const generateCodeButton = document.getElementById('generate-code');
  const output = document.getElementById('output');

  const titleInput = document.getElementById('title-input');
  const authorInput = document.getElementById('author-input');

  // Afegeix un aspecte nou
  addAspectButton.addEventListener('click', () => {
    const aspectDiv = document.createElement('div');
    aspectDiv.classList.add('aspect');
    aspectDiv.innerHTML = `
      <input type="text" placeholder="Pregunta" class="aspect-input">
      <input type="text" placeholder="Resposta" class="value-input">
    `;
    aspectContainer.appendChild(aspectDiv);
  });

  // Genera el codi HTML
  generateCodeButton.addEventListener('click', () => {
    const title = titleInput.value || '1r Trimestre';
    const author = authorInput.value || 'Autor desconegut';

    let aspectsHTML = '';
    document.querySelectorAll('.aspect').forEach((aspect) => {
      const question = aspect.querySelector('.aspect-input').value || 'Pregunta';
      const answer = aspect.querySelector('.value-input').value || 'Resposta';
      aspectsHTML += `
        <div class="question-answer">
          <h3>${question}</h3>
          <p>${answer}</p>
        </div>
      `;
    });

    output.value = `
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600&display=swap" rel="stylesheet">

<div id="loader-container">
  <div class="loader"></div>
  <p class="watermark">Made with Metacogni.cat</p>
</div>

<div id="metacogni-container" style="display: none;">
  <h1 class="title">${title}</h1>
  <p class="subtitle">Metacognició - By ${author}</p>
  <div class="qa-section">
    ${aspectsHTML}
  </div>
  <a class="footer-watermark" href="https://pbfedu.github.io/metacognicat">Made with Metacogni.cat</a>
</div>

<style>
body {
  margin: 0;
  font-family: 'Manrope', sans-serif;
  background: linear-gradient(180deg, #d6eaf8, #f8f9f9);
  color: #2c3e50;
}

#loader-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9f9;
  text-align: center;
}

.loader {
  border: 8px solid #ebf5fb;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
}

.watermark {
  margin-top: 15px;
  font-size: 0.8em;
  color: #566573;
  opacity: 0.7;
  font-family: Arial, sans-serif;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

#metacogni-container {
  padding: 20px;
  max-width: 800px;
  margin: auto;
}

.title {
  text-align: center;
  font-size: 2.5em;
  color: #34495e;
  margin-bottom: 10px;
}

.subtitle {
  text-align: center;
  font-size: 1.2em;
  color: #566573;
  margin-bottom: 20px;
}

.qa-section h2 {
  color: #2c3e50;
  margin-bottom: 15px;
  border-bottom: 2px solid #85c1e9;
  padding-bottom: 5px;
}

.question-answer {
  margin-bottom: 20px;
  padding: 10px 15px;
  background-color: #ebf5fb;
  border-left: 4px solid #5dade2;
  border-radius: 5px;
}

.question-answer h3 {
  color: #21618c;
  margin-bottom: 10px;
}

.question-answer p {
  color: #1c2833;
  margin: 0;
}

.footer-watermark {
  display: block;
  text-align: center;
  margin-top: 20px;
  font-size: 0.8em;
  color: #566573;
  opacity: 0.7;
  font-family: Arial, sans-serif;
  text-decoration: none;
}

.footer-watermark:hover {
  text-decoration: underline;
}
</style>

<script>
  window.addEventListener('load', function () {
    setTimeout(function () {
      document.getElementById('loader-container').style.display = 'none';
      document.getElementById('metacogni-container').style.display = 'block';
    }, 3000);
  });
</script>
    `;
  });
});
