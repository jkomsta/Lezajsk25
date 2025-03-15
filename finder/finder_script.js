
        const API_KEY = '0259881f19404a89b4d30687846d8647'; // Zastąp swoim kluczem API Spoonacular
        const text = "Recipe finder";
        const speed = 60; // milisekundy na znak
        let i = 0; //uzywane w funkcji typewriter

        // Funkcja do pobierania przepisów na podstawie składników
        async function findRecipes() {
            const ingredients = document.getElementById('ingredients').value.trim();
            if (!ingredients) {
                alert("Please enter some ingredients.");
                return;
            }

            const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${API_KEY}`;
            try {
                const response = await fetch(url);
                const recipes = await response.json();
                displayRecipes(recipes);
            } catch (error) {
                console.error("Error fetching recipes:", error);
            }
        }

        // Funkcja do wyświetlania listy przepisów
        function displayRecipes(recipes) {
            const recipeList = document.getElementById('recipe-list');
            recipeList.innerHTML = ""; // Wyczyść poprzednie wyniki

            if (recipes.length === 0) {
                recipeList.innerHTML = "<p>No recipes found.</p>";
                return;
            }

            recipes.forEach(recipe => {
                const recipeItem = document.createElement('div');
                recipeItem.className = 'recipe-item list-group-item list-group-item-action';
                recipeItem.textContent = recipe.title;
                recipeItem.onclick = () => getRecipeDetails(recipe.id);
                recipeList.appendChild(recipeItem);
            });
        }

        // Funkcja do pobierania szczegółów przepisu
        async function getRecipeDetails(recipeId) {
            const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`;
            try {
                const response = await fetch(url);
                const recipeDetails = await response.json();
                displayRecipeDetails(recipeDetails);
            } catch (error) {
                console.error("Error fetching recipe details:", error);
            }
        }

        // Funkcja do wyświetlania szczegółów przepisu
        function displayRecipeDetails(recipe) {
            const recipeDetails = document.getElementById('recipe-details');
            recipeDetails.innerHTML = `
            <div class='container d-flex justify-content-center align-items-center flex-column'>
                <h1>${recipe.title}</h1>
                <div class='img-border'>
                    <img src="${recipe.image}" alt="${recipe.title}" style="max-width: 300px;">
                </div>
                <p><strong>Ready in:</strong> ${recipe.readyInMinutes} minutes</p>
                <div class='d-flex justify-content-center align-items-stretch flex-row'>
                    <div class='d-flex justify-content-center align-items-center flex-column ingredientlist'>
                        <h2>Ingredients:</h2> <hr>
                        <ul>
                            ${recipe.extendedIngredients.map(ing => `<li>${ing.original}</li>`).join('')}
                        </ul>
                    </div>

                    <div class='d-flex justify-content-center align-items-center flex-column ingredientlist'>
                        <h3>Instructions:</h3>
                        <p>${recipe.instructions || "No instructions available."}</p>
                    </div>
                </div>
            </div>
            `;
        }

        function typeWriter() {
            if (i < text.length) {
                document.getElementById("text").innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }

        window.onload = typeWriter;


        
        

