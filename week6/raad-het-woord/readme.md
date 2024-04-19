Branch
In je 'p3-javascript' maak een map aan genaamd 'opdracht_13'
Gebruik nog steeds de branch "guess".
Opdracht
In de vorige opdracht moest je een getal raden, voor deze opdracht ga je een woord raden.

Hiervoor krijg je weer de HTML en de stappen die je moet doorlopen. Je krijgt nu minder tips dan de vorige opdracht.

HTML:
<section class="container">
 <h1 class="title">Raad het Woord</h1>
 <div class="game-area">
  <p class="instruction">Raad het verborgen woord:</p>
  <input type="text" id="guessInput" class="guess-input">
  <button id="checkButton" class="guess-button">Proberen!</button>
  <p class="message" id="message"></p>
 </div>
</section>

Stap 1: Variabelen initialiseren en elementen selecteren
Maak variabelen guessInput, checkButton en message aan.
Gebruik document.getElementById of querySelector om de HTML-elementen te selecteren op basis van hun ID en wijs ze toe aan de juiste variabelen.
Maak een array words en plaats daarin een aantal woorden.

Stap 2: Een willekeurig woord selecteren
Gebruik de Math.random() functie om een willekeurig getal te genereren tussen 0 en de lengte van de array words.
Gebruik Math.floor() om het willekeurige getal af te ronden naar het dichtstbijzijnde geheel getal.
Sla het op in een variabel randomNumber
Gebruik het willekeurige getal om een woord uit de array words te selecteren als het doelwoord.
Maak een variabel attempts om daar de aantal pogingen in op te slaan. Zet het als default op 0;

Stap 3: Het click event listener toevoegen aan de knop
Voeg een click event listener toe aan de checkButton knop.
Schrijf een functie genaamd checkGuess die wordt uitgevoerd wanneer de knop wordt geklikt.

Stap 4: Het ingevoerde woord controleren
Maak een variabele guess aan om het ingevoerde woord op te slaan.
Gebruik trim() om eventuele lege spaties aan het begin en einde van het woord te verwijderen.
Gebruik toLowerCase() om het ingevoerde woord om te zetten naar kleine letters.
Verhoog het aantal pogingen (attempts) met één.
Als het ingevoerde woord hetzelfde is als het te raden woord, dan komt er op het scherm dat het goed geraden is en in hoeveel pogingen
Anders, geef feedback aan de gebruiker op basis van hun gok (correct of incorrect).

Stap 5: Invoerveld leegmaken en focus terugzetten
Maak het invoerveld leeg na elke poging.
Zet de focus terug naar het invoerveld zodat de gebruiker direct weer kan raden.

Stap 6: Bonus
Controleer of het ingevoerde woord alleen letters bevat. Gebruik hiervoor een reguliere expressie (/^[a-zA-Z]+$/) en test() methode.
Controleer of er niet 1 letter wordt geplaatst, geef dan als feedback 'vul een woord in'
Oplevering
Commit & Push de opdracht naar je repository
Merge de branch "guess" met main.
In je VSCode ga je terug naar de main en doe je een pull from
Lever de link van je repository van de map 'opdracht_13' in.