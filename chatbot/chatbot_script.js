const apiKey = '0259881f19404a89b4d30687846d8647'; // zamien swoim kluczem spoonacular API
const converseUrl = 'https://api.spoonacular.com/food/converse';
const searchUrl = 'https://api.spoonacular.com/recipes/complexSearch';

function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() === '') return;

    const conversation = document.getElementById('conversation');
    conversation.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

    document.getElementById('userInput').value = '';

    // Najpierw wyślij wiadomość do chatbota
    fetch(`${converseUrl}?apiKey=${apiKey}&text=${encodeURIComponent(userInput)}`)
        .then(response => response.json())
        .then(data => {
            conversation.innerHTML += `<p><strong>Chatbot:</strong> ${data.answerText}</p>`;

            // Jeśli chatbot sugeruje przepis, wyszukaj zdjęcia
            if (data.answerText.includes("recipe") || data.answerText.includes("food")) {
                fetch(`${searchUrl}?apiKey=${apiKey}&query=${encodeURIComponent(userInput)}&number=3`)
                    .then(response => response.json())
                    .then(recipes => {
                        recipes.results.forEach(recipe => {
                            conversation.innerHTML += `
                                <div class="recipe">
                                    <img src="${recipe.image}" alt="${recipe.title}" />
                                    <p><strong>${recipe.title}</strong></p>
                                </div>
                            `;
                        });
                    })
                    .catch(error => {
                        console.error('Error fetching recipes:', error);
                    });
            }

            conversation.scrollTop = conversation.scrollHeight;
        })
        .catch(error => {
            console.error('Error:', error);
            conversation.innerHTML += `<p><strong>Chatbot:</strong> Sorry, I encountered an error. Please try again.</p>`;
        });
}

// Obsługa klawisza Enter
document.getElementById('userInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});