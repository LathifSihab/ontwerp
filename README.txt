WEBSITE — PLAIN HTML
====================

Openen: dubbelklik op index.html. Er is geen server of CMS nodig.

Pagina's
  index.html                      Home (foto + tekstveld, tekstveld, aanbod, tekstveld)
  teamontwikkeling.html           \
  leiderschapsontwikkeling.html    | dienstpagina's, identieke lay-out (foto + tekstveld)
  organisatieontwikkeling.html     |
  academy.html                    /
  over-mij.html                   Tekstveld met foto ernaast
  contact.html                    Contactformulier

Mappen
  assets/css/style.css   Alle opmaak. Kleuren en lettertypes staan bovenaan (:root).
  assets/js/main.js      Mobiel menu, animaties bij scrollen en controle van het contactformulier.
  assets/img/            Stockfoto's (Unsplash). Vervang ze door eigen foto's met DEZELFDE bestandsnaam:
                            home-hero.jpg            1920x900  (liggend)
                            <dienst>.jpg             1920x720  (liggend, bovenaan dienstpagina)
                            <dienst>-tegel.jpg       800x600   (tegel op homepage)
                            over-mij.jpg             800x1000  (staand portret — vervang door je eigen foto)
                         Logo en iconen:
                            logo-mark.svg            beeldmerk in de header
                            favicon.svg, favicon-32.png, apple-touch-icon.png, icon-512.png
                            (en favicon.ico in de hoofdmap)

Foto's — licentie
  Alle foto's komen van Unsplash (unsplash.com/license): gratis te gebruiken, ook commercieel,
  naamsvermelding niet verplicht. Bron per bestand (https://images.unsplash.com/photo-<code>):
    home-hero.jpg                       1522071820081-009f0129c71c
    teamontwikkeling(-tegel).jpg        1552664730-d307ca884978
    leiderschapsontwikkeling(-tegel)    1557804506-669a67965ba0
    organisatieontwikkeling(-tegel)     1556761175-b413da4baf72
    academy(-tegel).jpg                 1524178232363-1fb2b075b655
    over-mij.jpg                        1434030216411-0b793f4b4173

Animaties
  Elementen met data-reveal in de HTML verschijnen zodra ze in beeld scrollen
  (style="--d:1" geeft een kleine vertraging). Bezoekers die in hun systeem "minder beweging"
  hebben ingesteld, zien alles direct en zonder animatie.

Teksten aanpassen
  Zoek in de .html-bestanden naar [Bedrijfsnaam], [Tekstveld], [Jouw naam], [Plaats] enz.
  Bedrijfsgegevens (KvK, BTW, adres) staan in de footer van ELKE pagina; pas ze overal aan
  (zoeken & vervangen in alle bestanden).

Contactformulier laten versturen
  Een HTML-site kan zelf geen e-mail versturen. Kies een van deze opties:
  1. Formulierdienst (makkelijkst): maak een gratis formulier aan bij bv. Formspree,
     Basin of Web3Forms en zet het adres in contact.html bij action="...".
  2. Hosting met PHP: een klein mail-script op de server (kan ik leveren).
  Zolang action leeg is, controleert het formulier de velden maar verstuurt het niets.

Online zetten
  Upload de hele map (alle .html-bestanden + de map assets) naar de webhosting,
  of gebruik Netlify / GitHub Pages / Cloudflare Pages.
