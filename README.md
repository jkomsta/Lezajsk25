# Aplikacja Fit Bite

Projekt zawiera dwie główne funkcjonalności:
1. **Recipe Finder** - Wyszukiwanie przepisów na podstawie składników.
2. **Food Assistant** - Chatbot sugeruje przepisy związane z podaną rzeczą. Może też przedstawiać ciekawostki o jedzeniu (food trivia).

---

## Spis treści
1. [Plik `script.js`](#plik-script.js)
2. [Plik `finder_script.js`](#plik-finder_script.js)
3. [Plik `chatbot_script.js`](#plik-chatbot_script.js)
4. [Plik `shared_styles.css`](#plik-shared_styles.css)
5. [Wymagania](#wymagania)
6. [Przykładowe rozszerzenia](#przykładowe-rozszerzenia)
7. [Jak Używać](#Jak-używać)

---

## Plik `script.js`

### Funkcja `test()`
- **Opis**: Animacja selektora dla aktywnego elementu menu.
- **Działanie**:
  - Pobiera aktywny element (`.active`) z nawigacji (`#navbarSupportedContent`).
  - Oblicza wymiary i pozycję aktywnego elementu.
  - Ustawia selektor (`.hori-selector`) w odpowiednim miejscu.
- **Dodatkowe funkcje**:
  - Obsługa najechania myszką na elementy menu.
  - Dynamiczne dostosowanie selektora po zmianie rozmiaru okna lub rozwinięciu nawigacji.

---

## Plik `finder_script.js`

### Stałe i zmienne globalne
- `API_KEY`: Klucz API Spoonacular.
- `text`: Tekst do animacji typu "typewriter".
- `speed`: Prędkość animacji tekstu.
- `i`: Licznik używany w animacji.

### Funkcje
1. **`findRecipes()`**:
   - Pobiera składniki od użytkownika i wyszukuje przepisy za pomocą API Spoonacular.
2. **`displayRecipes(recipes)`**:
   - Wyświetla listę przepisów w elemencie `#recipe-list`.
3. **`getRecipeDetails(recipeId)`**:
   - Pobiera szczegóły przepisu na podstawie ID.
4. **`displayRecipeDetails(recipe)`**:
   - Wyświetla szczegóły przepisu w elemencie `#recipe-details`.
5. **`typeWriter()`**:
   - Animacja tekstu "Recipe Finder".

### Zdarzenie `window.onload`
- Uruchamia animację tekstu po załadowaniu strony.

---

## Plik `chatbot_script.js`

### Stałe i zmienne globalne
- `apiKey`: Klucz API Spoonacular.
- `converseUrl`: Endpoint do komunikacji z chatbotem.
- `searchUrl`: Endpoint do wyszukiwania przepisów.

### Funkcja `sendMessage()`
- **Opis**: Obsługuje wysyłanie wiadomości do chatbota i wyświetlanie odpowiedzi.
- **Działanie**:
  - Pobiera wiadomość użytkownika.
  - Wysyła wiadomość do chatbota i wyświetla odpowiedź.
  - Jeśli chatbot sugeruje przepisy, wyszukuje i wyświetla je.

### Obsługa klawisza Enter
- Umożliwia wysyłanie wiadomości po naciśnięciu klawisza Enter.

---

## Plik `shared_styles.css`

### Zawartość
- Wspólne style dla:
  - **Footerów** we wszystkich plikach HTML.
  - **Navbarów** w plikach `chatbot.html` oraz `finder.html`.

---

## Wymagania
- Klucz API Spoonacular (można uzyskać na stronie [Spoonacular](https://spoonacular.com/food-api)).(aktualnie podany jest klucz w celach testowych, nie trzeba go zmieniać)
- Połączenie z internetem (skrypt korzysta z zewnętrznego API).

---

## Przykładowe rozszerzenia
1. **Dodanie paginacji** dla wyników wyszukiwania.
2. **Obsługa błędów API** (np. wyświetlanie komunikatów dla użytkownika).
3. **Integracja z lokalnym storage** do zapisywania ulubionych przepisów.
4. **Rozbudowa chatbota** o dodatkowe funkcje, takie jak sugerowanie restauracji lub planowanie posiłków.
5. **Zabezpieczenie klucza api** przechowywanie klucza api w miejscu, w którym nie wycieknie on w trybie produkcji.

---

## Jak używać
1. Sklonuj repozytorium.
2. Wprowadź swój klucz API Spoonacular w odpowiednich miejscach w plikach `finder_script.js` i `chatbot_script.js`. (aktualnie podany jest klucz w celach testowych, nie trzeba go zmieniać)
3. Otwórz plik `index.html` w przeglądarce, aby korzystać z funkcjonalności.

---

## Autorzy
[buffadtwitch123] [jkomsta]
