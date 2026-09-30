# Hex Hex Hexcode

Ein Website-Generator, bei dem ChatGPT nicht nur die Texte schreibt, sondern auch das komplette Design selbst gestaltet: Layout, Farben, Typografie, alles live generiert. Jede erzeugte Seite ist einzigartig.

Dieses Projekt ist die Überarbeitung meine Machine Learning II Projekts. Dieses Dokument beschreibt beide Versionen: was das Originalprojekt war, welche Ziele ich mir für die Überarbeitung gesetzt habe, was davon umgesetzt wurde und was ich dabei gelernt habe.

## Das Originalprojekt

Die erste Version ist im Januar 2024 im Kurs Machine Learning II bei Alexander Walmsley entstanden.

Die Grundidee war einfach: bei jedem Neuladen der Seite wählt ChatGPT zufällig ein Thema aus seinem Wissen, schreibt dazu einen Text und gestaltet passendes HTML und CSS. Content und Design kamen also beide von derselben KI, ohne dass ich als Entwicklerin auf das konkrete Aussehen Einfluss genommen habe. Genau das war der eigentliche Untersuchungsgegenstand des Projekts: was passiert, wenn ChatGPT nicht nur Inhalte liefert, sondern auch die Gestaltung übernimmt?

Das Projekt hatte zwei klare Probleme. Erstens ließ es sich nicht kostenlos deployen, weil ein einzelner API-Request für Text und Design zu lange dauerte und dadurch die Zeitlimits von kostenlosen Hosting-Anbietern gesprengt hat. Zweitens gab es keinerlei Rückmeldung während der Wartezeit von 10 bis 20 Sekunden, die Besucher:innen sahen einfach nur eine leere, unreagierende Seite.

## Ziele für die Überarbeitung

Im Rahmen des Second Term Projects wollte ich den Generator gezielt weiterentwickeln. Ausgangspunkt waren die beiden offenen Punkte aus dem Originalprojekt:

- **Bessere Rückmeldung während der Wartezeit.** Eine Ladeanimation, die den Besucher:innen zeigt, dass im Hintergrund etwas passiert und wie lange es ungefähr noch dauert.
- **Weiterarbeit an den Prompts.** Ich hatte mich im Original schon lange mit den Prompts beschäftigt und wollte sehen, was mit mehr Erfahrung, neueren Modellen und gezielterer Steuerung noch alles möglich ist.

Während der Arbeit sind daraus noch weitere Ziele gewachsen:

- **Zwei klar getrennte Richtungen statt einem einzigen Zufallsmodus.** Ein verspielter, bunter Fun-Modus und ein aufgeräumter, professioneller Serious-Modus, die sich nicht nur inhaltlich, sondern auch gestalterisch unterscheiden.
- **Mehr Kontrolle für Besucher:innen.** Statt nur zuzusehen, sollte man ein Thema vorgeben, Zusatzinfos und Design-Wünsche in eigenen Worten mitgeben und grundlegende Stilentscheidungen treffen können, ohne dass der Zufall komplett verschwindet.
- **Zuverlässigere Layouts.** Im Original kam es öfter vor, dass eine generierte Seite schlecht aussah, zum Beispiel Text nur auf der linken Hälfte und der Rest der Seite leer. Das sollte seltener passieren.
- **Eine Galerie.** Ein Ort, um bereits generierte Seiten, die besonders gut gelungen sind, zu sammeln und durchzuklicken, statt sie nur einmalig zu sehen und zu verlieren.

### Grundaufbau

Die Seite ist weiterhin eine einzelne Express-Anwendung. Im Browser wechselt man zwischen drei Ansichten: einem Menü zum Einstellen und Starten einer Generierung, einer Ergebnisansicht mit der generierten Seite in einem eingebetteten Frame, und der Galerie. Für eine Seite werden nacheinander Titel, Textinhalt und Design bei ChatGPT angefragt. Diese drei Anfragen laufen gleichzeitig statt nacheinander, was die Wartezeit spürbar verkürzt.
Das Modell, das ich verwendet habe ist gpt-6-luna. Ursprünglich, also 2024, habe ich gpt-5.4-mini genutzt. Ich habe es auch mit teureren Modellen probiert, was die Ergebnisse verbessert hat. Aus Kostengründen bin ich aber bei dem günstigen Modell geblieben.

### Fun- und Serious-Modus

Statt einer einzigen, immer zufälligen Gestaltung gibt es jetzt zwei komplett getrennte Prompt-Sammlungen für Themen-Ton, Design-Richtung, Farbstimmung und Inhaltsstruktur. Der Fun-Modus bleibt bunt und unvorhersehbar. Der Serious-Modus zielt bewusst auf professionelles, zurückhaltendes Webdesign ab, wie man es von echten Unternehmensseiten oder Portfolios kennt. Gewechselt wird über einen Toggle "unseriös", der by default eingeschaltet ist.

### Mehr Einstellungsmöglichkeiten

Besucher:innen können ein Thema vorgeben, zusätzliche Informationen dazu liefern und in eigenen Worten beschreiben, wie das Design aussehen soll. Im Serious-Modus lässt sich außerdem zwischen hellem und dunklem Design sowie zwischen verschiedenen Stilrichtungen wie Portfolio, Firmenwebsite oder Landingpage wählen. Im Fun-Modus gibt es stattdessen Checkboxen, um die generierte Seite noch bunter, trashiger oder chaotischer werden zu lassen. Wer das lieber komplett dem Zufall überlassen möchte, kann ohne Auswahl auf "Generieren" klicken.

### Prompt-Arbeit

Die Sammlung möglicher Themen-Twists (zum Beispiel "als Nachrichtensendung erzählt" oder "als wissenschaftliche Analyse aufgebaut") ist deutlich gewachsen, für den Fun-Modus wie für den Serious-Modus. Einen großen Teil davon habe ich per einmaligem KI-Durchlauf erzeugen lassen, mit den bestehenden Einträgen als Vorbild, und anschließend von Hand auf Wiederholungen und Qualität geprüft, bevor sie fest übernommen wurden. Dadurch wiederholen sich generierte Seiten seltener.

### Zuverlässigere Layouts

Das war der hartnäckigste Teil der Überarbeitung. Immer wieder kam es vor, dass eine generierte Seite nur auf einer Seite Inhalt hatte und der Rest leer blieb. Die Ursachen dafür waren unterschiedlich und mussten einzeln gefunden werden: manchmal erwartete das Design eine andere Verschachtelung des Inhalts, als der Text tatsächlich mitgebracht hat. Manchmal war die Spaltenanzahl eines Rasters fest vorgegeben, obwohl gar nicht genug Inhalt für so viele Spalten vorhanden war. Und selbst als das Raster flexibel gemacht wurde, konnte eine letzte, unvollständige Reihe trotzdem einzeln und verloren am linken Rand hängen bleiben. Die Lösung war am Ende eine Kombination mehrerer Maßnahmen: eine feste Regel, wie Inhalt strukturiert sein muss, damit das Design ihn zuverlässig findet, flexible statt starrer Spaltenzahlen, und an der richtigen Stelle eine andere Layout-Technik (Flexbox statt Grid), die mit einer ungeraden Anzahl an Elementen besser umgehen kann.

### Der Design-Critic

Nachdem Text und Design generiert wurden, prüft ein weiterer KI-Durchlauf das Ergebnis noch einmal gezielt auf bekannte Problemfälle wie zu schmale Textspalten, sich überlappende Elemente oder eben genau die oben beschriebenen leeren Flächen, und korrigiert bei Bedarf. Damit dieser Korrekturschritt nicht selbst neue Probleme schafft, zum Beispiel ein zu stark vereinfachtes Design, gibt es zusätzliche automatische Kontrollen, die eine fragwürdige Korrektur verwerfen und lieber beim ursprünglichen Ergebnis bleiben.

### Galerie

Ein eigener Ordner für handverlesene, besonders gelungene Ergebnisse, durch die man mit Pfeiltasten und einer Positionsanzeige blättern kann.

### Weitere Verbesserungen

Dazu kommen viele kleinere Anpassungen: Wiederholungsversuche, wenn eine Anfrage an ChatGPT fehlschlägt oder leer zurückkommt, damit ein einzelner Fehler nicht gleich zu einer leeren Seite führt. Eine Startseite mit klassischerer Navigation. Und die ursprünglich gewünschte Ladeanimation gibt es jetzt tatsächlich, inklusive wechselnder Statusmeldungen und Anzeige der bisherigen Durchschnittszeit.

## Ausprobieren

Das Projekt lässt sich lokal mit einem eigenen API-Key starten:

```
npm install
npm start
```

Die Generierung ist durch die parallelen Anfragen spürbar schneller geworden als im Original, ein dauerhaftes, Live-Deployment habe ich im Rahmen dieser Überarbeitung aber aus Kostengründen nicht erneut verfolgt.

## Live-Galerie

Ich möchte eine Auswahl generierter Seiten zusätzlich live zur Verfügung stellen, damit man sich Ergebnisse ansehen kann, ohne das Projekt selbst zum Laufen bringen zu müssen. Da die Galerie nur bereits fertige, gespeicherte Seiten zeigt und keine neue Generierung braucht, lässt sie sich anders als der Rest des Projekts auch kostenlos hosten. [Hex Hex Hexcode Galerie](https://codejpg.github.io/hex-hex-hexcode-gallery/)

## Screenshots

_(folgt)_

## Video-Walkthrough

_(folgt)_

## Fazit

Im Originalprojekt ging es nach dem ersten Aufbau eigentlich fast nur noch um Prompt Engineering. Ich habe sehr viel Zeit damit verbracht, die Prompts anzupassen, um die Ergebnisse gezielter zu steuern. Dabei kamen immer mehr Ideen dazu, wie man die Ergebnisse noch vielfältiger machen könnte, aber vieles davon konnte ich im Rahmen des ursprünglichen Projekts nicht mehr umsetzen. Diese Weiterentwicklung hat mir die Möglichkeit gegeben, mit genau diesen liegen gebliebenen Ideen weiter zu experimentieren, dem ganzen Projekt mehr Struktur zu geben, und gleichzeitig aus Besucher:innenperspektive mehr Freiheit bei der Gestaltung der Website zu ermöglichen.

**Was ich gelernt habe:** Vor allem, wie unzuverlässig große Sprachmodelle bei scheinbar eindeutigen Vorgaben sein können. Eine Anweisung wie "Helligkeit: hell" wurde zum Beispiel trotzdem ignoriert, weil an anderer Stelle im Prompt eine weichere Formulierung Vorrang bekam, das ist mir erst nach genauem Hinschauen aufgefallen. Dadurch habe ich viel genauer verstanden, wie stark kleine Formulierungsänderungen, harte statt weiche Regeln und die Reihenfolge von Anweisungen das Ergebnis beeinflussen. Generell habe ich auch meine Programmierkenntnisse an diesem Projekt weiterentwickelt. Zwischen dem Originalprojekt 2024 und dieser Überarbeitung 2026 hatte ich zwischenzeitlich als Entwicklerin gearbeitet, und der Unterschied, den das gemacht hat, war beim Wiedereinstieg in dieses Projekt deutlich spürbar.

**Was ich besonders spannend fand:** Die Fehlersuche bei den hartnäckigen Layout-Bugs, bei denen generierte Seiten nur auf einer Seite Inhalt hatten und sonst leer blieben. Jede vermeintliche Lösung hat eine neue Variante desselben Problems aufgedeckt, bis am Ende klar wurde, dass es gar nicht eine einzelne Ursache war, sondern mehrere unabhängige. Genauso spannend war es, am Ende einfach selbst durch die eigenen generierten Seiten in der Galerie zu klicken und zu sehen, was tatsächlich alles dabei herausgekommen ist.

**Was ich im Rückblick anders machen würde:** Den Code früher in mehrere Dateien aufteilen. Alles blieb lange in einer einzigen, immer weiter wachsenden server.js, was es zunehmend unübersichtlicher gemacht hat.

**Was ich gerne noch umsetzen würde:** Die Galerie tatsächlich deployen, und noch mehr Stilrichtungen und Anpassungsmöglichkeiten für Besucher:innen ergänzen. Geplant war außerdem, dass man sich zu jeder generierten Seite per Button die Hintergrundinfos anzeigen lassen kann, also welche Zufallsentscheidungen und Prompts zu ihrem Aussehen geführt haben.
