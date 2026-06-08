# Handleiding — website De Zilveren Kogels

Deze handleiding legt in eenvoudige stappen uit hoe je de website bijhoudt.
Je hoeft niets te installeren: alles gaat via je internetbrowser.

---

## 1. Inloggen

1. Ga naar **https://zilverenkogels.nl/admin**
2. Klik op **Inloggen met GitHub** en kies de optie met een
   **persoonlijke toegangstoken** (personal access token).
3. Plak je token (zie hieronder hoe je die eenmalig aanmaakt) en je bent binnen.

Je hoeft dit token maar één keer in te vullen; de browser onthoudt het.
Als je later opnieuw moet inloggen, plak je hetzelfde token weer.

### Eenmalig: een token aanmaken

> Dit hoef je maar één keer te doen. Vraag eventueel je zoon om te helpen.

1. Log in op **github.com** met het account dat toegang heeft tot de website.
2. Ga naar **Settings → Developer settings → Personal access tokens →
   Tokens (classic)**.
3. Klik **Generate new token (classic)**.
4. Geef het een naam (bijv. "Website beheer"), zet **Expiration** op **No expiration**,
   en vink onder **scopes** het vakje **repo** aan.
5. Klik **Generate token** en **kopieer** het token meteen (je ziet het maar één keer).
6. Bewaar het ergens veilig. Dit token gebruik je om in te loggen op `/admin`.

---

## 2. Wat kun je beheren?

In het menu links zie je vier onderdelen:

| Onderdeel | Wat het is |
|-----------|------------|
| **Agenda** | Speelmiddagen, toernooien en activiteiten |
| **Nieuws** | Nieuwsberichten |
| **Fotoalbums** | Fotoalbums met foto's |
| **Instellingen → Contactgegevens** | Adres, telefoon, e-mail, speeltijden |

> De rest van de website (vormgeving, indeling) staat bewust niet in dit menu,
> zodat er niets per ongeluk stuk kan gaan.

---

## 3. Een activiteit toevoegen (Agenda)

1. Klik op **Agenda** → **Nieuwe Activiteit**.
2. Vul in: **Titel**, **Datum en tijd**, eventueel **Locatie**, en een **Beschrijving**.
3. Klik rechtsboven op **Publiceren**.

De activiteit verschijnt automatisch in de agenda én op de homepagina onder
"Volgende activiteit" / "Komende activiteiten". Activiteiten die voorbij zijn,
schuiven vanzelf naar "Eerdere activiteiten".

---

## 4. Een nieuwsbericht plaatsen (Nieuws)

1. Klik op **Nieuws** → **Nieuw Nieuwsbericht**.
2. Vul **Titel** en **Datum** in.
3. Eventueel: voeg een **Foto** toe (sleep een afbeelding erin).
4. Schrijf je **Tekst**.
5. Klik op **Publiceren**.

---

## 5. Een fotoalbum maken (Fotoalbums)

1. Klik op **Fotoalbums** → **Nieuw Fotoalbum**.
2. Vul **Titel** en **Datum** in.
3. Kies een **Omslagfoto** (de foto die op de albumpagina als voorkant getoond wordt).
4. Voeg onder **Foto's** zoveel foto's toe als je wilt (telkens "Toevoegen").
5. Klik op **Publiceren**.

De foto's komen netjes in een raster te staan; bezoekers kunnen ze aanklikken
om groot te bekijken.

---

## 6. Contactgegevens aanpassen

1. Klik op **Instellingen → Contactgegevens**.
2. Pas aan wat je wilt (adres, telefoon, e-mail, speeltijden).
3. Klik op **Publiceren**.

Deze gegevens verschijnen op de contactpagina én onderaan elke pagina.

---

## 7. Goed om te weten

- Na **Publiceren** duurt het **1 à 2 minuten** voordat de wijziging op de
  echte website zichtbaar is (de site wordt automatisch opnieuw gebouwd).
- Alles wordt automatisch bewaard in GitHub. Er kan niets echt "kwijtraken".
- Werkt iets niet? Vraag je zoon — alle technische uitleg staat in `README.md`.
