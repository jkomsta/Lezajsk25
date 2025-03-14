
        const API_KEY = '7e8e6d73f0c14664aa2b62fae033dd84'; // Zastąp swoim kluczem API Spoonacular

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
                recipeItem.className = 'recipe-item';
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
                <h2>${recipe.title}</h2>
                <img src="${recipe.image}" alt="${recipe.title}" style="max-width: 300px;">
                <p><strong>Servings:</strong> ${recipe.servings}</p>
                <p><strong>Ready in:</strong> ${recipe.readyInMinutes} minutes</p>
                <h3>Ingredients:</h3>
                <ul>
                    ${recipe.extendedIngredients.map(ing => `<li>${ing.original}</li>`).join('')}
                </ul>
                <h3>Instructions:</h3>
                <p>${recipe.instructions || "No instructions available."}</p>
            `;
        }



// ---------Responsive-navbar-active-animation-----------
function test(){
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top":itemPosNewAnimTop.top + "px",
		"left":itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click","li",function(e){
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top":itemPosNewAnimTop.top + "px",
			"left":itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}
$(document).ready(function(){
	setTimeout(function(){ test(); });
});
$(window).on('resize', function(){
	setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function(){ test(); });
});



// --------------add active class-on another-page move----------
jQuery(document).ready(function($){
	// Get current path and find target link
	var path = window.location.pathname.split("/").pop();

	// Account for home page with empty path
	if ( path == '' ) {
		path = 'index.html';
	}

	var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
	// Add active class to target link
	target.parent().addClass('active');
});




// Add active class on another page linked
// ==========================================
// $(window).on('load',function () {
//     var current = location.pathname;
//     console.log(current);
//     $('#navbarSupportedContent ul li a').each(function(){
//         var $this = $(this);
//         // if the current path is like this link, make it active
//         if($this.attr('href').indexOf(current) !== -1){
//             $this.parent().addClass('active');
//             $this.parents('.menu-submenu').addClass('show-dropdown');
//             $this.parents('.menu-submenu').parent().addClass('active');
//         }else{
//             $this.parent().removeClass('active');
//         }
//     })
// });