# De Zilveren Kogels — website

Website voor jeu-de-boules-vereniging **De Zilveren Kogels**.

- **Generator:** [Hugo](https://gohugo.io/) (extended) — statische site
- **CMS:** [Sveltia CMS](https://sveltiacms.app/) op `/admin` (login via GitHub Personal Access Token)
- **Hosting:** GitHub Pages, automatisch gebouwd via GitHub Actions
- **Domein:** https://zilverenkogels.nl

Voor de niet-technische beheerder (inhoud bijhouden): zie **[HANDLEIDING.md](HANDLEIDING.md)**.

---

## Structuur

```
content/
  _index.md            # welkomsttekst homepage
  agenda/              # activiteiten (1 .md per activiteit)
  nieuws/              # nieuwsberichten (map per bericht met index.md + foto)
  fotos/               # fotoalbums (map per album met index.md + foto's)
  contact.md           # tekst contactpagina
data/
  contact.yaml         # contactgegevens (via CMS bewerkbaar)
layouts/               # eigen, licht thema (geen externe theme-module)
assets/
  css/main.css         # stijl
  js/lightbox.js       # lichtbak voor fotoalbums
  images/hero.jpg      # hero-afbeelding homepage
static/
  admin/               # Sveltia CMS (index.html + config.yml)
  CNAME                # custom domein
  uploads/             # losse media via CMS
.github/workflows/deploy.yml  # build + deploy
```

De homepage toont automatisch de eerstvolgende activiteit, de komende activiteiten
en het laatste nieuws (op basis van de datum in de agenda-items; `buildFuture = true`
in `hugo.toml` zorgt dat toekomstige items meegebouwd worden).

## Lokaal draaien

Hugo extended installeren ([instructies](https://gohugo.io/installation/)), daarna:

```bash
hugo server
```

Open http://localhost:1313. Productie-build:

```bash
hugo --gc --minify
```

## Deploy

Elke push naar `main` triggert `.github/workflows/deploy.yml`: Hugo bouwt de site en
publiceert die naar GitHub Pages. Sveltia commit wijzigingen vanuit `/admin` ook naar
`main`, dus elke inhoudswijziging gaat vanzelf live.

**Eenmalige instellingen in GitHub:**

1. **Settings → Pages → Source = GitHub Actions**.
2. De beheerder (moeder) als collaborator met **write**-rechten toevoegen
   (Settings → Collaborators).
3. Custom domein: DNS instellen (zie hieronder), daarna **Enforce HTTPS** aanzetten.

## DNS voor `zilverenkogels.nl`

Bij de domeinregistrar instellen:

- Apex `@` → A-records:
  `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  (optioneel AAAA voor IPv6: `2606:50c0:8000::153` … `8003::153`)
- `www` → CNAME `harmful-alchemist.github.io`

Het bestand `static/CNAME` zorgt dat GitHub Pages het domein herkent.

## Onderhoudstips

- De Hugo-versie staat vastgepind in `deploy.yml` (`HUGO_VERSION`). Bij een upgrade:
  versie bumpen en lokaal `hugo` testen.
- Sveltia wordt in `static/admin/index.html` van een CDN geladen; pin desgewenst een
  vaste versie voor maximale stabiliteit.
- Alle inhoud is gewone Markdown + afbeeldingen in deze repo — geen vendor lock-in.
