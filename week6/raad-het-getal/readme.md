HTML:
<section class="container">
 <h1 class="title">Raad het getal</h1>
 <div class="game-area">
  <p class="instruction">Raad het getal tussen de 1 en 100:</p>
  <input type="text" id="guessField" class="guess-input">
  <button id="guessSubmit" class="guess-button">Proberen!</button>
  <p class="message" id="message"></p>
 </div>
</section>

Stap 1: Variabelen initialiseren en elementen selecteren
Maak variabelen guessField, guessSubmit en message  aan.
Gebruik document.querySelector of document.getElementById om de HTML-elementen te selecteren op basis van hun ID of klasse en wijs ze toe aan de juiste variabelen.

Stap 2: Een willekeurig getal genereren
Gebruik de Math.random() functie om een willekeurig getal te genereren tussen 1 en 100.
Gebruik Math.floor() om het willekeurige getal af te ronden naar het dichtstbijzijnde geheel getal.
Sla het random getal op in een variabel randomNumber.
Maak een variabel attempts om de aantal pogingen op te slaan. Zet het als default op 0;

Stap 3: Het click event listener toevoegen aan de knop
Voeg een click event listener toe aan de guessSubmit knop.
Schrijf een functie genaamd checkGuess die wordt uitgevoerd wanneer de knop wordt geklikt.

Stap 4: Het ingevoerde getal controleren
Je gaat nu verder in de functie checkGuess
Maak een variabele userGuess aan om het ingevoerde getal op te slaan. Gebruik de functie parseInt om een getal te maken van de input die je ophaalt ipv een string.
const userGuess = parsInt(.......)
Gebruik een if-statement om te controleren of het ingevoerde getal tussen 1 en 100 ligt. Als dat zo is komt daar de code van stap 5.
Anders laat je op het scherm zien 'Vul een getal in tussen de 1 en 100'.

Stap 5: Het ingevoerde getal vergelijken met het willekeurige getal
Als het getal dat is ingevoerd is tussen de 1 en 100 ligt dan:

Verhoog dan de variabele attempts met één.
Vergelijk het ingevoerde getal met het willekeurige getal. (In welke variabel zit het ingevoerde getal en in welke variabel zit het willekeurige getal)
Geef feedback aan de gebruiker op basis van hun gok (te laag, te hoog of correct).
Als de input hetzelfde is als het random getal, dan laat je op het scherm zien dat het goed geraden is, en in hoeveel pogingen.
Als het getal lager is dan de gebruiker invoert, laat je op het scherm zien 'Te laag! Probeer het nog eens!
Anders laat je zien 'Te hoog! Probeer het nog eens.

Stap 6: Invoerveld leegmaken en focus terugzetten
Maak het invoerveld leeg na elke gok.
Zet de focus terug naar het invoerveld zodat de gebruiker direct weer kan raden. Gebruik hiervoor de functie focus().