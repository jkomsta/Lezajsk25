# Lezajsk25
Hackathon 2025 

plik script.js:
1. Funkcja test()
Funkcja ta odpowiada za animację selektora (np. podkreślenia) dla aktywnego elementu menu. Oblicza pozycję, szerokość i wysokość aktywnego elementu, a następnie ustawia odpowiednie właściwości CSS dla selektora (.hori-selector).

Jak działa:
Pobiera aktywny element (.active) z nawigacji (#navbarSupportedContent).

Oblicza jego wymiary (wysokość i szerokość) oraz pozycję (górny i lewy margines).

Ustawia selektor (.hori-selector) w odpowiednim miejscu, dopasowując jego rozmiar do aktywnego elementu.

Dodatkowe funkcje:
Obsługa najechania myszką: Gdy użytkownik najedzie myszką na element menu, selektor przesuwa się do tego elementu, a poprzedni aktywny element traci klasę .active.

Dynamiczne dostosowanie: Po zmianie rozmiaru okna przeglądarki (resize) lub po kliknięciu przycisku rozwijania nawigacji (.navbar-toggler), funkcja test() jest ponownie wywoływana, aby dostosować selektor do nowych wymiarów.




plik finder_script.js:
1. Stałe i zmienne globalne
API_KEY: Klucz API Spoonacular, który jest wymagany do autoryzacji zapytań do API.

text: Tekst do animacji typu "typewriter" (efekt pisania na maszynie).

speed: Prędkość animacji tekstu "typewriter" (w milisekundach na znak).

i: Licznik używany w animacji tekstu.

2. Funkcja findRecipes()
Funkcja ta pobiera przepisy na podstawie składników wprowadzonych przez użytkownika.

Jak działa:
Pobiera składniki z pola tekstowego (#ingredients).

Sprawdza, czy użytkownik wprowadził składniki. Jeśli nie, wyświetla alert.

Wysyła zapytanie do API Spoonacular (recipes/findByIngredients), przekazując składniki jako parametr.

Wywołuje funkcję displayRecipes() w celu wyświetlenia wyników.

3. Funkcja displayRecipes(recipes)

Funkcja ta wyświetla listę przepisów w elemencie #recipe-list.

Jak działa:
Czyści poprzednie wyniki w elemencie #recipe-list.

Sprawdza, czy znaleziono przepisy. Jeśli nie, wyświetla komunikat "No recipes found."

Dla każdego przepisu tworzy element div z nazwą przepisu i dodaje go do listy.

Dodaje obsługę kliknięcia na każdy element listy, aby wyświetlić szczegóły przepisu (wywołuje funkcję getRecipeDetails()).

4. Funkcja getRecipeDetails(recipeId)
Funkcja ta pobiera szczegóły przepisu na podstawie jego identyfikatora (ID).

Jak działa:
Wysyła zapytanie do API Spoonacular (recipes/{id}/information), przekazując ID przepisu.

Wywołuje funkcję displayRecipeDetails() w celu wyświetlenia szczegółów przepisu.

5. Funkcja displayRecipeDetails(recipe)
Funkcja ta wyświetla szczegóły wybranego przepisu w elemencie #recipe-details.

Jak działa:
Tworzy strukturę HTML z informacjami o przepisie, w tym:

Tytuł przepisu.

Obrazek.

Czas przygotowania.

Lista składników.

Instrukcje przygotowania.

Wstawia tę strukturę do elementu #recipe-details.

6. Funkcja typeWriter()
Funkcja ta tworzy efekt animacji tekstu typu "typewriter" dla napisu "Recipe Finder".

Jak działa:
Dodaje kolejne znaki tekstu do elementu #text z opóźnieniem określonym przez zmienną speed.

Powtarza proces, aż cały tekst zostanie wyświetlony.

7. Zdarzenie window.onload
Po załadowaniu strony uruchamiana jest funkcja typeWriter(), aby rozpocząć animację tekstu.

8. Struktura HTML
Aby skrypt działał poprawnie, struktura HTML powinna zawierać następujące elementy:
<input type="text" id="ingredients" placeholder="Enter ingredients...">
<button onclick="findRecipes()">Find Recipes</button>

<div id="text"></div> <!-- Element dla animacji tekstu -->

<div id="recipe-list"></div> <!-- Lista przepisów -->
<div id="recipe-details"></div> <!-- Szczegóły przepisu -->
9. Przykład użycia API Spoonacular
Wyszukiwanie przepisów na podstawie składników
const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&apiKey=${API_KEY}`;
const url = `https://api.spoonacular.com/recipes/12345/information?apiKey=${API_KEY}`;

10. Obsługa błędów
Jeśli składniki nie zostaną wprowadzone, wyświetlany jest alert.

W przypadku błędu podczas pobierania danych z API, błąd jest logowany w konsoli.

11. Podsumowanie
Skrypt umożliwia:

Wyszukiwanie przepisów na podstawie składników.

Wyświetlanie listy przepisów.

Pobieranie i wyświetlanie szczegółów wybranego przepisu.

Animację tekstu "Recipe Finder" na stronie.

12. Wymagania
Klucz API Spoonacular (można uzyskać na stronie Spoonacular).

Połączenie z internetem (skrypt korzysta z zewnętrznego API).

13. Przykładowe rozszerzenia
Dodanie paginacji dla wyników wyszukiwania.

Obsługa błędów API (np. wyświetlanie komunikatów dla użytkownika).

Integracja z lokalnym storage do zapisywania ulubionych przepisów.


plik chatbot_script.js
1. Stałe i zmienne globalne
apiKey: Klucz API Spoonacular, wymagany do autoryzacji zapytań do API.

converseUrl: Endpoint do komunikacji z chatbotem Spoonacular (food/converse).

searchUrl: Endpoint do wyszukiwania przepisów (recipes/complexSearch).

2. Funkcja sendMessage()
Funkcja ta obsługuje wysyłanie wiadomości do chatbota oraz wyświetlanie odpowiedzi.

Jak działa:
Pobiera wiadomość użytkownika z pola tekstowego (#userInput).

Sprawdza, czy wiadomość nie jest pusta. Jeśli jest, funkcja kończy działanie.

Dodaje wiadomość użytkownika do okna rozmowy (#conversation).

Czyści pole tekstowe po wysłaniu wiadomości.

Wysyła wiadomość do chatbota Spoonacular (food/converse).

Wyświetla odpowiedź chatbota w oknie rozmowy.

Jeśli odpowiedź chatbota zawiera słowa kluczowe (np. "recipe" lub "food"), wyszukuje przepisy na podstawie wiadomości użytkownika i wyświetla je w oknie rozmowy.

3. Wyszukiwanie przepisów
Jeśli chatbot sugeruje przepisy, skrypt wysyła zapytanie do endpointu recipes/complexSearch, aby znaleźć przepisy związane z wiadomością użytkownika.

Jak działa:
Wysyła zapytanie do API Spoonacular, przekazując wiadomość użytkownika jako zapytanie (query).

Wyświetla do 3 przepisów w oknie rozmowy, w tym:

Zdjęcie przepisu.

Tytuł przepisu.

4. Obsługa błędów
Jeśli wystąpi błąd podczas komunikacji z API, skrypt wyświetla komunikat o błędzie w oknie rozmowy.

Błędy są również logowane w konsoli dla celów debugowania.

5. Obsługa klawisza Enter
Skrypt umożliwia wysyłanie wiadomości po naciśnięciu klawisza Enter.

Jak działa:
Nasłuchuje zdarzenia keypress na polu tekstowym (#userInput).

Jeśli naciśnięty klawisz to Enter (e.key === 'Enter'), wywołuje funkcję sendMessage().

6. Struktura HTML
Aby skrypt działał poprawnie, struktura HTML powinna zawierać następujące elementy:
<div id="conversation"></div> <!-- Okno rozmowy -->
<input type="text" id="userInput" placeholder="Type your message here..." /> <!-- Pole tekstowe -->


7. Przykładowe użycie
Użytkownik wpisuje: "I want to make pizza."

Chatbot odpowiada: "Here are some pizza recipes for you!"

Skrypt wyszukuje przepisy na pizzę i wyświetla je w oknie rozmowy.


8. Podsumowanie
Skrypt umożliwia:

Interakcję z chatbotem Spoonacular.

Wyszukiwanie przepisów na podstawie wiadomości użytkownika.

Wyświetlanie odpowiedzi chatbota oraz zdjęć i tytułów przepisów.

Obsługę klawisza Enter do wysyłania wiadomości.


9. Wymagania
Klucz API Spoonacular (można uzyskać na stronie Spoonacular).

Połączenie z internetem (skrypt korzysta z zewnętrznego API).


10. Przykładowe rozszerzenia
Dodanie paginacji dla wyników wyszukiwania.

Obsługa błędów API (np. wyświetlanie komunikatów dla użytkownika).

Integracja z lokalnym storage do zapisywania ulubionych przepisów.



plik shared_styles:

1.zawiera wspólne style dla footerów w plikach html oraz navbarów w plikach chatbot.html oraz finder.html