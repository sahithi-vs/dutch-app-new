export const stories = [

  

  // ─── GEMEENTE BRIEVEN ────────────────────────────────────────────────────
  {
    id: 1,
    title: '📄 Brief van de Gemeente',
    text: `Gemeente Amsterdam
Afdeling Burgerzaken
Postbus 202, 1000 AE Amsterdam

Datum: 3 maart 2024
Betreft: Verlenging verblijfsvergunning

Geachte mevrouw Yilmaz,

Uw verblijfsvergunning verloopt op 15 april 2024. U moet uw vergunning op tijd verlengen. Als u dit niet doet, mag u niet meer in Nederland blijven.

Wat moet u doen?
U moet een afspraak maken bij de IND (Immigratie- en Naturalisatiedienst). Bel naar 088 - 043 04 30 of maak een afspraak via www.ind.nl.

Neem de volgende documenten mee:
- Uw paspoort
- Uw huidige verblijfsvergunning
- Een recente pasfoto
- Bewijs van inkomen (loonstrook of uitkeringsbrief)

Let op: Maak uw afspraak minimaal 6 weken voor de vervaldatum.

Heeft u vragen? Bel dan naar de gemeente: 14 020, maandag tot en met vrijdag van 08:00 tot 18:00 uur.

Met vriendelijke groet,
Gemeente Amsterdam`,
    questions: [
      { question: "Wanneer verloopt de verblijfsvergunning van mevrouw Yilmaz?", options: ["15 maart", "3 april", "15 april", "3 mei"], correct: "15 april" },
      { question: "Wat moet mevrouw Yilmaz als eerste doen?", options: ["Naar de gemeente gaan", "Een afspraak maken bij de IND", "Haar paspoort verlengen", "Een brief sturen"], correct: "Een afspraak maken bij de IND" },
      { question: "Hoeveel weken voor de vervaldatum moet ze een afspraak maken?", options: ["2 weken", "4 weken", "6 weken", "8 weken"], correct: "6 weken" },
      { question: "Welk document moet ze NIET meenemen?", options: ["Paspoort", "Pasfoto", "Rijbewijs", "Verblijfsvergunning"], correct: "Rijbewijs" }
    ]
  },

  {
    id: 2,
    title: '📄 Brief: Inschrijving Gemeente',
    text: `Gemeente Rotterdam
Stadskantoor, Coolsingel 40
3011 AD Rotterdam

Datum: 10 januari 2024
Betreft: Bevestiging inschrijving Basisregistratie Personen (BRP)

Geachte heer Al-Hassan,

Wij bevestigen dat u bent ingeschreven in de Basisregistratie Personen (BRP) van de gemeente Rotterdam.

Uw gegevens:
Naam: Omar Al-Hassan
Geboortedatum: 12 augustus 1988
Adres: Bergselaan 45, 3037 EG Rotterdam
Inschrijfdatum: 10 januari 2024

Burgerservicenummer (BSN): 123 456 789

Wat kunt u nu doen?
Met uw BSN kunt u:
- Een DigiD aanvragen op www.digid.nl
- Zorgverzekering afsluiten
- Zich inschrijven bij een huisarts
- Uw kinderen inschrijven op school

Heeft u een DigiD nodig? Ga dan naar www.digid.nl. U heeft hiervoor uw BSN nodig.

Bewaar deze brief goed. U heeft uw BSN regelmatig nodig.

Met vriendelijke groet,
Afdeling Burgerzaken Rotterdam`,
    questions: [
      { question: "Waar is de heer Al-Hassan ingeschreven?", options: ["Amsterdam", "Den Haag", "Rotterdam", "Utrecht"], correct: "Rotterdam" },
      { question: "Wat is een BSN?", options: ["Een bankrekeningnummer", "Een burgerservicenummer", "Een belastingnummer", "Een bewijsnummer"], correct: "Een burgerservicenummer" },
      { question: "Wat kan hij NIET doen met zijn BSN?", options: ["DigiD aanvragen", "Zorgverzekering afsluiten", "Rijbewijs halen", "Huisarts zoeken"], correct: "Rijbewijs halen" },
      { question: "Waar kan hij een DigiD aanvragen?", options: ["Bij de gemeente", "Op www.digid.nl", "Bij de IND", "Op zijn werk"], correct: "Op www.digid.nl" }
    ]
  },

  // ─── VACATURES / WERK ────────────────────────────────────────────────────
  {
    id: 3,
    title: '💼 Vacature: Medewerker Supermarkt',
    text: `VACATURE
Albert Heijn – Filiaal Amstelveen

Wij zoeken: Medewerker supermarkt (parttime)

Uren: 16 tot 24 uur per week
Werktijden: Vroege dienst (07:00–13:00) of late dienst (16:00–22:00)
Salaris: €12,50 per uur
Startdatum: Per direct

Wat ga je doen?
• Producten in de schappen zetten
• Klanten helpen bij vragen
• Kassa bedienen
• De winkel schoon houden

Wat vragen wij?
• Je bent minimaal 16 jaar oud
• Je werkt graag in een team
• Je bent vriendelijk naar klanten
• Je kunt ook in het weekend werken
• Je spreekt Nederlands (niveau A2 is voldoende)

Wat bieden wij?
• Goed salaris met toeslagen in het weekend
• Reiskostenvergoeding
• Mogelijkheid om meer uren te werken
• Gezellige collega's

Interesse?
Stuur je cv en een korte motivatiebrief naar: werk@ah-amstelveen.nl
Of kom langs bij de winkel: Amstelveenseweg 88, Amstelveen.

Vragen? Bel: 020 – 456 78 90`,
    questions: [
      { question: "Hoeveel uur per week is de baan?", options: ["8 tot 12 uur", "12 tot 16 uur", "16 tot 24 uur", "24 tot 32 uur"], correct: "16 tot 24 uur" },
      { question: "Wat is het salaris per uur?", options: ["€10,50", "€11,50", "€12,50", "€13,50"], correct: "€12,50" },
      { question: "Wat is de minimumleeftijd voor deze baan?", options: ["14 jaar", "15 jaar", "16 jaar", "18 jaar"], correct: "16 jaar" },
      { question: "Hoe kun je solliciteren?", options: ["Alleen telefonisch", "Alleen via e-mail", "Via e-mail of langs de winkel komen", "Alleen op de website"], correct: "Via e-mail of langs de winkel komen" }
    ]
  },

  {
    id: 4,
    title: '💼 Vacature: Schoonmaker',
    text: `VACATURE – Schoonmaakbedrijf Sparkle

Functie: Schoonmaker / schoonmaakster
Locatie: Utrecht en omgeving
Uren: 20 uur per week (flexibel)

Over de functie:
U maakt kantoren, scholen en zorginstellingen schoon. U werkt vroeg in de ochtend (06:00–10:00) of 's avonds (18:00–22:00). U werkt zelfstandig of in een klein team.

Vereisten:
- U bent betrouwbaar en punctueel
- U heeft rijbewijs B (pré, maar niet verplicht)
- U spreekt een beetje Nederlands
- Ervaring is een voordeel, maar niet nodig

Arbeidsvoorwaarden:
- Salaris: €13,00 per uur
- Reiskosten worden vergoed
- Contract voor 6 maanden, daarna mogelijk vast contract
- Werken op zaterdag geeft 25% toeslag

Hoe solliciteren?
Bel of app naar: 06 – 12 34 56 78
Of stuur een e-mail naar: info@sparkle-schoonmaak.nl

Wij reageren binnen 2 werkdagen.`,
    questions: [
      { question: "Hoe laat begint de vroege dienst?", options: ["05:00", "06:00", "07:00", "08:00"], correct: "06:00" },
      { question: "Is ervaring verplicht?", options: ["Ja, altijd", "Ja, minimaal 1 jaar", "Nee, het is een voordeel", "Nee, alleen een rijbewijs is nodig"], correct: "Nee, het is een voordeel" },
      { question: "Hoeveel toeslag krijg je op zaterdag?", options: ["10%", "15%", "20%", "25%"], correct: "25%" },
      { question: "Hoe lang is het eerste contract?", options: ["3 maanden", "6 maanden", "1 jaar", "2 jaar"], correct: "6 maanden" }
    ]
  },

  // ─── HUURWONINGEN / ADVERTENTIES ─────────────────────────────────────────
  {
    id: 5,
    title: '🏠 Woningadvertentie',
    text: `TE HUUR – Appartement Utrecht

Adres: Kanaalstraat 12, 3531 CK Utrecht
Huurprijs: €950 per maand (exclusief gas, water en licht)
Beschikbaar vanaf: 1 februari 2024

Omschrijving:
Mooi en licht appartement op de tweede verdieping. Het appartement heeft een woonkamer, een slaapkamer, een moderne keuken en een badkamer. Er is een klein balkon aan de achterkant.

Kenmerken:
• Oppervlakte: 58 m²
• Bouwjaar: 2005
• Verwarming: Centrale verwarming (cv)
• Geen huisdieren toegestaan
• Niet geschikt voor studenten
• Minimale huurperiode: 12 maanden

Locatie:
Het appartement ligt dicht bij het centrum van Utrecht. Op loopafstand: supermarkt, apotheek en bushalte (lijn 7 en 12). Treinstation Utrecht Centraal is 15 minuten lopen.

Servicekosten: €75 per maand (inclusief internet en schoonmaak trappenhuis)

Interesse?
Neem contact op met:
Makelaardij De Vries
Tel: 030 – 234 56 78
E-mail: verhuur@devries-makelaars.nl

Bezichtiging mogelijk op afspraak.`,
    questions: [
      { question: "Hoeveel is de huurprijs per maand?", options: ["€875", "€950", "€1.025", "€1.100"], correct: "€950" },
      { question: "Op welke verdieping ligt het appartement?", options: ["Begane grond", "Eerste verdieping", "Tweede verdieping", "Derde verdieping"], correct: "Tweede verdieping" },
      { question: "Wat is NIET toegestaan in dit appartement?", options: ["Roken", "Huisdieren", "Kinderen", "Muziek"], correct: "Huisdieren" },
      { question: "Wat is de minimale huurperiode?", options: ["3 maanden", "6 maanden", "12 maanden", "24 maanden"], correct: "12 maanden" }
    ]
  },

  // ─── SCHOOL / KINDEROPVANG BRIEVEN ───────────────────────────────────────
  {
    id: 6,
    title: '🏫 Brief van de Basisschool',
    text: `Basisschool De Regenboog
Populierenlaan 5, 2613 AX Delft
Tel: 015 – 123 45 67
info@deregenboog-delft.nl

Datum: 14 februari 2024
Betreft: Informatie ouderavond groep 3

Beste ouders en verzorgers,

Wij nodigen u uit voor de ouderavond van groep 3.

Datum: donderdag 29 februari 2024
Tijd: 19:30 – 21:00 uur
Locatie: Aula van de school

Onderwerpen:
• Hoe gaat het met uw kind?
• De lesstof van dit schooljaar
• Huiswerk en lezen thuis
• Vragen en opmerkingen

Let op: Dit is een informatieve avond. Voor een persoonlijk gesprek over uw kind kunt u apart een afspraak maken met de leerkracht.

Aanmelden:
Wij vragen u om zich aan te melden voor 22 februari via de schoolapp of per e-mail. Dit helpt ons bij de voorbereiding.

Kunt u niet komen? Stuur dan een berichtje naar de leerkracht van uw kind.

Wij hopen u te zien op 29 februari!

Met vriendelijke groet,
Directie Basisschool De Regenboog`,
    questions: [
      { question: "Op welke dag is de ouderavond?", options: ["Maandag", "Dinsdag", "Donderdag", "Vrijdag"], correct: "Donderdag" },
      { question: "Hoe laat begint de ouderavond?", options: ["18:30", "19:00", "19:30", "20:00"], correct: "19:30" },
      { question: "Wat moet u doen als u niet kunt komen?", options: ["Niets", "Een berichtje sturen naar de leerkracht", "Bellen naar de directie", "Een brief schrijven"], correct: "Een berichtje sturen naar de leerkracht" },
      { question: "Voor welke datum moet u zich aanmelden?", options: ["14 februari", "22 februari", "29 februari", "1 maart"], correct: "22 februari" }
    ]
  },

  {
    id: 7,
    title: '🏫 Brief: Kinderopvang',
    text: `Kinderopvang Zonnetje
Dorpsstraat 22, 5611 BK Eindhoven

Datum: 5 maart 2024
Betreft: Nieuwe tarieven per 1 april 2024

Beste ouders,

Wij informeren u over de nieuwe tarieven per 1 april 2024.

Nieuwe tarieven:
• Dagopvang (hele dag): €9,20 per uur
• Buitenschoolse opvang (BSO): €7,85 per uur
• Flexibele opvang: €10,50 per uur

Kinderopvangtoeslag:
U kunt kinderopvangtoeslag aanvragen bij de Belastingdienst. Hoeveel toeslag u krijgt, hangt af van uw inkomen. Meer informatie vindt u op www.belastingdienst.nl.

Betaling:
Het maandbedrag wordt op de 1e van elke maand automatisch afgeschreven van uw rekening. Zorg ervoor dat er voldoende saldo op uw rekening staat.

Heeft u vragen over de nieuwe tarieven? Neem dan contact met ons op via info@kinderopvangzonnetje.nl of bel naar 040 – 321 09 87.

Wij danken u voor uw begrip.

Met vriendelijke groet,
Het team van Kinderopvang Zonnetje`,
    questions: [
      { question: "Wanneer gaan de nieuwe tarieven in?", options: ["1 maart", "5 maart", "1 april", "5 april"], correct: "1 april" },
      { question: "Hoeveel kost dagopvang per uur?", options: ["€7,85", "€9,20", "€10,50", "€11,00"], correct: "€9,20" },
      { question: "Waar vraagt u kinderopvangtoeslag aan?", options: ["Bij de gemeente", "Bij de kinderopvang", "Bij de Belastingdienst", "Bij uw werkgever"], correct: "Bij de Belastingdienst" },
      { question: "Wanneer wordt het maandbedrag afgeschreven?", options: ["Op de 1e van de maand", "Op de 15e van de maand", "Op de laatste dag van de maand", "Op de 5e van de maand"], correct: "Op de 1e van de maand" }
    ]
  },

  // ─── MEDISCHE / ZORGBRIEVEN ───────────────────────────────────────────────
  {
    id: 8,
    title: '🏥 Brief van de Huisarts',
    text: `Huisartsenpraktijk Van den Berg & Smit
Laan van Meerdervoort 110
2517 AT Den Haag
Tel: 070 – 456 78 90

Datum: 20 maart 2024
Betreft: Herinnering jaarlijkse controle

Geachte mevrouw Bouali,

Het is tijd voor uw jaarlijkse gezondheidscontrole. Wij nodigen u uit voor een afspraak.

Wat wordt er gecontroleerd?
• Bloeddruk
• Gewicht en lengte
• Bloedonderzoek (suiker en cholesterol)
• Algemene gezondheid

Hoe maakt u een afspraak?
• Online: www.huisartsvandenbergsmit.nl
• Telefonisch: 070 – 456 78 90 (maandag t/m vrijdag 08:00–12:00)
• Via de praktijkapp

Let op: Kom 's ochtends nuchter naar de praktijk als u bloedonderzoek heeft. Dit betekent: niet eten en alleen water drinken.

Wij vragen u om de afspraak minimaal 24 uur van tevoren af te bellen als u niet kunt komen.

Heeft u klachten of vragen voor de controle? Bel gerust naar de praktijk.

Met vriendelijke groet,
Doktersassistente Praktijk Van den Berg & Smit`,
    questions: [
      { question: "Waarvoor schrijft de huisarts deze brief?", options: ["Voor een zieke patiënt", "Voor een jaarlijkse controle", "Voor medicijnen", "Voor een doorverwijzing"], correct: "Voor een jaarlijkse controle" },
      { question: "Wat betekent 'nuchter' komen?", options: ["Vroeg komen", "Niet eten en alleen water drinken", "Rustig zijn", "Geen medicijnen nemen"], correct: "Niet eten en alleen water drinken" },
      { question: "Hoe laat kan mevrouw Bouali bellen voor een afspraak?", options: ["08:00–12:00", "08:00–17:00", "09:00–12:00", "10:00–16:00"], correct: "08:00–12:00" },
      { question: "Hoe lang van tevoren moet ze afbellen als ze niet kan?", options: ["12 uur", "24 uur", "48 uur", "72 uur"], correct: "24 uur" }
    ]
  },

  // ─── ZORGVERZEKERING ─────────────────────────────────────────────────────
  {
    id: 9,
    title: '💊 Brief: Zorgverzekering',
    text: `Zorgverzekeraar Menzis
Postbus 1234
9700 AA Groningen

Datum: 15 januari 2024
Betreft: Uw zorgverzekering 2024 – Eigen risico

Geachte heer Karim,

Welkom bij Menzis! In deze brief leest u belangrijke informatie over uw zorgverzekering in 2024.

Uw polis:
Polisnummer: MZ-2024-88741
Pakket: Basis + Aanvullend Tand
Maandpremie: €138,50

Eigen risico:
Het verplichte eigen risico in 2024 is €385 per jaar. Dit betekent: de eerste €385 aan zorgkosten betaalt u zelf. Daarna betaalt uw zorgverzekering.

Huisarts en verloskundige: Deze zorg valt niet onder het eigen risico. Die is altijd gratis.

Heeft u recht op zorgtoeslag?
Als uw inkomen niet te hoog is, kunt u zorgtoeslag krijgen van de Belastingdienst. Controleer dit op www.belastingdienst.nl.

Vergoedingen:
Uw basisverzekering vergoedt:
- Huisartsbezoek: volledig vergoed
- Ziekenhuis: vergoed na eigen risico
- Medicijnen: vergoed (afhankelijk van het medicijn)
- Tandarts: alleen voor kinderen tot 18 jaar

Vragen?
Bel onze klantenservice: 0800 – 356 47 48 (gratis, ma-vr 08:00–20:00)
Of kijk op www.menzis.nl

Met vriendelijke groet,
Menzis Zorgverzekering`,
    questions: [
      { question: "Hoeveel is de maandpremie?", options: ["€118,50", "€128,50", "€138,50", "€148,50"], correct: "€138,50" },
      { question: "Wat is het eigen risico in 2024?", options: ["€285", "€335", "€385", "€435"], correct: "€385" },
      { question: "Wat valt NIET onder het eigen risico?", options: ["Ziekenhuis", "Medicijnen", "Huisarts", "Specialist"], correct: "Huisarts" },
      { question: "Tot welke leeftijd vergoedt de basisverzekering de tandarts?", options: ["12 jaar", "16 jaar", "18 jaar", "21 jaar"], correct: "18 jaar" }
    ]
  },

  // ─── OPENBAAR VERVOER / AANKONDIGINGEN ───────────────────────────────────
  {
    id: 10,
    title: '🚌 Aankondiging NS – Stremming',
    text: `NS – Reisinformatie

WERKZAAMHEDEN – LET OP GEWIJZIGDE DIENSTREGELING

Wanneer: zaterdag 23 maart en zondag 24 maart 2024
Traject: Amsterdam Centraal – Utrecht Centraal
Reden: Onderhoud aan het spoor

Wat betekent dit voor u?

Zaterdag 23 maart:
• Geen treinen tussen Amsterdam Centraal en Utrecht Centraal
• Er rijden vervangende bussen (buslijn NS-a)
• Vertrektijden bussen: zie de NS-app of ns.nl
• Reistijd met de bus: ca. 55 minuten (normaal 28 minuten per trein)

Zondag 24 maart:
• 's Ochtends tot 12:00 geen treinen
• Vanaf 12:00 rijden de treinen weer normaal

Advies:
• Reken op extra reistijd
• Kijk voor actuele informatie in de NS-app
• U kunt ook reizen via Den Haag Centraal (omreizen)

Heeft u vragen? Bel NS Klantenservice: 030 – 751 51 55 (24 uur per dag)
Of chat via ns.nl

Excuses voor het ongemak.
NS`,
    questions: [
      { question: "Waarom rijden er geen treinen op dit traject?", options: ["Staking", "Slecht weer", "Onderhoud aan het spoor", "Te weinig reizigers"], correct: "Onderhoud aan het spoor" },
      { question: "Hoe lang duurt de reis met de vervangingsbus?", options: ["28 minuten", "40 minuten", "55 minuten", "70 minuten"], correct: "55 minuten" },
      { question: "Vanaf hoe laat rijden de treinen op zondag weer?", options: ["08:00", "10:00", "12:00", "14:00"], correct: "12:00" },
      { question: "Via welke stad kunt u omreizen?", options: ["Rotterdam", "Den Haag", "Leiden", "Haarlem"], correct: "Den Haag" }
    ]
  },

  // ─── UITKERING / WERK EN INKOMEN ─────────────────────────────────────────
  {
    id: 11,
    title: '📋 Brief: UWV – WW-uitkering',
    text: `UWV – Uitvoeringsinstituut Werknemersverzekeringen
Postbus 58285, 1040 HG Amsterdam

Datum: 1 februari 2024
Betreft: Beslissing op uw aanvraag WW-uitkering

Geachte mevrouw Özdemir,

Wij hebben uw aanvraag voor een WW-uitkering (werkloosheidsuitkering) ontvangen. Wij hebben uw aanvraag beoordeeld.

Beslissing: U heeft recht op een WW-uitkering.

Uw uitkering:
Ingangsdatum: 5 februari 2024
Hoogte uitkering: €1.456 per maand (bruto)
Duur: maximaal 12 maanden

Uw verplichtingen:
Om uw uitkering te houden, moet u:
1. Actief werk zoeken (minimaal 5 sollicitaties per maand)
2. Uw sollicitaties bijhouden in Mijn UWV
3. Beschikbaar zijn voor werk
4. Elke 4 weken uw werkbriefje invullen
5. Ons direct informeren als u werkt of gaat werken

Let op: Als u werk vindt, kan uw uitkering stoppen of lager worden. Geef dit altijd door!

Bezwaar:
Bent u het niet eens met deze beslissing? U kunt binnen 6 weken bezwaar maken. Stuur een brief naar bovenstaand adres.

Vragen? Bel: 0900 – 92 94 (ma-vr 08:00-18:00) of kijk op www.uwv.nl

Met vriendelijke groet,
UWV`,
    questions: [
      { question: "Heeft mevrouw Özdemir recht op een WW-uitkering?", options: ["Ja", "Nee", "Misschien", "Nog niet duidelijk"], correct: "Ja" },
      { question: "Hoeveel sollicitaties moet ze minimaal per maand doen?", options: ["2", "3", "4", "5"], correct: "5" },
      { question: "Hoe lang is de maximale duur van de uitkering?", options: ["6 maanden", "9 maanden", "12 maanden", "18 maanden"], correct: "12 maanden" },
      { question: "Binnen hoeveel weken kan ze bezwaar maken?", options: ["2 weken", "4 weken", "6 weken", "8 weken"], correct: "6 weken" }
    ]
  },

  // ─── CURSUS / INBURGERING ─────────────────────────────────────────────────
  {
    id: 12,
    title: '📚 Informatie: Inburgeringscursus',
    text: `ROC Midden Nederland
Afdeling Inburgering en Taal
Gyroscoopweg 1, 3543 AD Utrecht
Tel: 030 – 265 75 00
info@rocmn.nl

Informatie over de inburgeringscursus

Bent u nieuw in Nederland en wilt u het inburgeringsexamen halen? Wij bieden een cursus aan die u helpt.

Wat leert u?
• Nederlands lezen, schrijven, spreken en luisteren
• Kennis over Nederland (KNM)
• Oriëntatie op de Nederlandse arbeidsmarkt (ONA)

Niveaus: A1, A2, B1, B2

Tijden:
Ochtendgroep: maandag, woensdag, vrijdag van 09:00 – 12:30
Avondgroep: dinsdag en donderdag van 18:30 – 21:00

Kosten:
De cursus is gratis als u een inburgeringsplicht heeft. De DUO (Dienst Uitvoering Onderwijs) betaalt dan de kosten. Vraag dit na bij uw gemeente.

Inschrijven:
• Kom langs op het ROC
• Bel naar 030 – 265 75 00
• Stuur een e-mail met uw naam, geboortedatum en telefoonnummer

Neem mee bij inschrijving:
- Paspoort of verblijfsvergunning
- BSN-nummer
- Beschikking van de gemeente over uw inburgeringsplicht`,
    questions: [
      { question: "Op welke dagen is de ochtendgroep?", options: ["Maandag, dinsdag, woensdag", "Maandag, woensdag, vrijdag", "Dinsdag, donderdag, vrijdag", "Elke dag"], correct: "Maandag, woensdag, vrijdag" },
      { question: "Wie betaalt de cursus als u inburgeringsplicht heeft?", options: ["Uzelf", "De gemeente", "DUO", "Het ROC"], correct: "DUO" },
      { question: "Tot welk niveau kunt u leren bij dit ROC?", options: ["Alleen A1 en A2", "A1 tot en met B1", "A1 tot en met B2", "Alleen B1 en B2"], correct: "A1 tot en met B2" },
      { question: "Wat moet u NIET meenemen bij inschrijving?", options: ["Paspoort", "BSN-nummer", "Rijbewijs", "Beschikking van de gemeente"], correct: "Rijbewijs" }
    ]
  },

  // ─── NIEUWS / KORTE ARTIKELEN ─────────────────────────────────────────────
  {
    id: 13,
    title: '📰 Nieuwsartikel: Minimum Loon Omhoog',
    text: `Het Nieuws – Economie

Minimumloon stijgt per 1 juli 2024

Den Haag, 15 maart 2024

Het wettelijk minimumloon in Nederland gaat omhoog per 1 juli 2024. Dit heeft de minister van Sociale Zaken bekendgemaakt.

Nieuwe bedragen:
• 21 jaar en ouder: €13,27 per uur (was €13,02)
• 20 jaar: €10,62 per uur
• 18 jaar: €7,96 per uur

Wat verandert er?
Werknemers die het minimumloon verdienen, krijgen automatisch meer salaris. Werkgevers moeten dit aanpassen in de salarisadministratie voor 1 juli 2024.

Ook de uitkeringen stijgen:
De bijstand, de AOW en de WW gaan ook omhoog. Dit is altijd gekoppeld aan het minimumloon.

Vakbond FNV reageert:
"Wij zijn blij met deze verhoging, maar het is nog niet genoeg," zegt een woordvoerder van vakbond FNV. "Mensen met een laag inkomen hebben het nog steeds moeilijk door de hoge prijzen."

Controleer uw salaris:
Verdient u het minimumloon? Controleer uw loonstrook na 1 juli. Klopt er iets niet? Neem contact op met uw werkgever of bel de FNV-helpdesk: 0900 – 368 36 83.`,
    questions: [
      { question: "Wanneer stijgt het minimumloon?", options: ["1 januari 2024", "1 april 2024", "1 juli 2024", "1 oktober 2024"], correct: "1 juli 2024" },
      { question: "Hoeveel verdient iemand van 21 jaar na de verhoging per uur?", options: ["€13,02", "€13,27", "€13,52", "€13,77"], correct: "€13,27" },
      { question: "Wat stijgt mee met het minimumloon?", options: ["Alleen de bijstand", "Alleen de AOW", "De bijstand, AOW en WW", "Niets"], correct: "De bijstand, AOW en WW" },
      { question: "Wat vindt vakbond FNV van de verhoging?", options: ["Ze zijn er heel blij mee", "Ze zijn blij maar vinden het nog niet genoeg", "Ze zijn tegen de verhoging", "Ze zeggen niets"], correct: "Ze zijn blij maar vinden het nog niet genoeg" }
    ]
  },

  // ─── GEMEENTELIJKE DIENSTEN / AANVRAGEN ───────────────────────────────────
  {
    id: 14,
    title: '📋 Aanvraag: Bijzondere Bijstand',
    text: `Gemeente Den Haag
Dienst Sociale Zaken
Spui 70, 2511 BT Den Haag

INFORMATIE – Bijzondere bijstand

Wat is bijzondere bijstand?
Bijzondere bijstand is extra geld van de gemeente als u een noodzakelijke uitgave niet kunt betalen. Het is bedoeld voor mensen met een laag inkomen.

Waarvoor kunt u bijzondere bijstand aanvragen?
• Kosten voor de tandarts
• Schoolkosten voor kinderen
• Kosten voor een bril
• Inrichtingskosten (meubels, koelkast, wasmachine)
• Medische kosten die niet vergoed worden

Wie kan aanvragen?
U kunt bijzondere bijstand aanvragen als:
- Uw inkomen niet te hoog is
- De kosten noodzakelijk zijn
- U de kosten niet zelf kunt betalen

Hoe vraagt u het aan?
1. Maak een afspraak via www.denhaag.nl/bijstand
2. Of bel: 14 070
3. Neem mee: ID-bewijs, bewijs van inkomen en bewijs van de kosten (rekening/bon)

Hoe lang duurt de aanvraag?
De gemeente beslist binnen 8 weken. In spoedeisende gevallen binnen 24 uur.

Let op: Bijzondere bijstand is geen lening. U hoeft het geld niet terug te betalen.`,
    questions: [
      { question: "Voor wie is bijzondere bijstand bedoeld?", options: ["Voor iedereen", "Voor mensen met een laag inkomen", "Alleen voor werklozen", "Alleen voor ouderen"], correct: "Voor mensen met een laag inkomen" },
      { question: "Waarvoor kunt u GEEN bijzondere bijstand aanvragen?", options: ["Tandarts", "Bril", "Vakantie", "Schoolkosten"], correct: "Vakantie" },
      { question: "Binnen hoeveel weken beslist de gemeente normaal?", options: ["2 weken", "4 weken", "8 weken", "12 weken"], correct: "8 weken" },
      { question: "Moet u bijzondere bijstand terugbetalen?", options: ["Ja, altijd", "Ja, de helft", "Nee, nooit", "Soms"], correct: "Nee, nooit" }
    ]
  },

  // ─── FLYER / EVENEMENT ───────────────────────────────────────────────────
  {
    id: 15,
    title: '📣 Flyer: Gratis Taalcafé',
    text: `GRATIS TAALCAFÉ AMSTERDAM WEST

Wilt u uw Nederlands oefenen in een gezellige sfeer?
Kom dan naar het Taalcafé!

Waar: Buurtcentrum De Kern, Jan van Galenstraat 323, Amsterdam
Wanneer: Elke woensdag van 10:00 – 12:00 uur
Kosten: GRATIS
Aanmelden: Niet nodig, kom gewoon langs!

Wat is het Taalcafé?
In het Taalcafé praat u met Nederlanders en andere mensen uit de buurt. Er zijn vrijwilligers die u helpen. U oefent uw spreek- en luistervaardigheid. Iedereen is welkom, ook beginners!

Activiteiten:
• Gezellig praten over alledaagse onderwerpen
• Oefenen met uitspraken en zinnen
• Soms een thema: werk, gezondheid, winkelen
• Koffie en thee gratis!

Ook aanwezig:
Medewerkers van Vluchtelingenwerk en Sociale Dienst zijn soms aanwezig voor vragen.

Voor wie?
• Iedereen die Nederlands oefent
• Nieuwe inwoners van Amsterdam
• Alle niveaus welkom (A1 t/m B2)

Meer informatie?
Bel: 020 – 612 34 56
Of stuur een app naar: 06 – 23 45 67 89
Website: www.taalcafe-amsterdamwest.nl`,
    questions: [
      { question: "Op welke dag is het Taalcafé?", options: ["Maandag", "Dinsdag", "Woensdag", "Donderdag"], correct: "Woensdag" },
      { question: "Hoeveel kost het Taalcafé?", options: ["€2,50", "€5,00", "€10,00", "Gratis"], correct: "Gratis" },
      { question: "Moet u zich van tevoren aanmelden?", options: ["Ja, altijd", "Ja, per e-mail", "Nee, gewoon langskomen", "Nee, maar bellen is handig"], correct: "Nee, gewoon langskomen" },
      { question: "Voor welke niveaus is het Taalcafé?", options: ["Alleen voor beginners", "Alleen A2 en hoger", "Alle niveaus A1 t/m B2", "Alleen gevorderden"], correct: "Alle niveaus A1 t/m B2" }
    ]
  },

  // ─── REGELS / INSTRUCTIES ─────────────────────────────────────────────────
  {
    id: 16,
    title: '📋 Huisregels Appartementencomplex',
    text: `HUISREGELS – Appartementencomplex "De Merenhoek"
Beheer: VvE De Merenhoek, Meerweg 1-48, Almere

Beste bewoners,

Om prettig samen te wonen, vragen wij u de volgende regels te volgen:

Geluid:
• Tussen 22:00 en 07:00 uur geen lawaai
• Muziek en televisie zacht houden na 22:00 uur
• Boren en timmeren alleen op werkdagen van 08:00 – 18:00 uur

Vuilnis:
• Gebruik de containers achter het gebouw
• Papier en karton in de blauwe container
• Glas in de glasbak op de parkeerplaats
• Grof vuil? Maak een afspraak met de gemeente

Lift en trappenhuis:
• Houd de lift en het trappenhuis schoon
• Fietsen mogen niet in de hal of het trappenhuis staan
• De fietsenstalling is gratis voor alle bewoners

Bezoekers en parkeren:
• Bezoekers mogen maximaal 2 uur gratis parkeren
• Daarna geldt betaald parkeren

Problemen of klachten?
• Bel de beheerder: 036 – 544 32 10
• E-mail: info@merenhoek-vve.nl
• Spoedeisend (waterlekkage, brand): bel 112

De VvE vergadert elk kwartaal. Alle bewoners zijn welkom.`,
    questions: [
      { question: "Tot hoe laat mag u boren op werkdagen?", options: ["16:00 uur", "17:00 uur", "18:00 uur", "20:00 uur"], correct: "18:00 uur" },
      { question: "In welke container gooit u papier en karton?", options: ["Groene container", "Blauwe container", "Grijze container", "Oranje container"], correct: "Blauwe container" },
      { question: "Hoe lang mogen bezoekers gratis parkeren?", options: ["30 minuten", "1 uur", "2 uur", "3 uur"], correct: "2 uur" },
      { question: "Waar mogen fietsen NIET staan?", options: ["In de fietsenstalling", "Achter het gebouw", "In de hal of het trappenhuis", "Op de parkeerplaats"], correct: "In de hal of het trappenhuis" }
    ]
  },

  // ─── BELASTING / TOESLAGEN ───────────────────────────────────────────────
  {
    id: 17,
    title: '💶 Brief: Belastingdienst – Toeslagen',
    text: `Belastingdienst / Toeslagen
Postbus 2690
6401 DD Heerlen

Datum: 8 februari 2024
Betreft: Uw toeslagen 2024

Geachte heer Demirci,

In deze brief leest u welke toeslagen u in 2024 ontvangt.

Uw toeslagen:

1. Huurtoeslag: €312 per maand
U ontvangt huurtoeslag omdat uw huur €875 per maand is en uw inkomen niet te hoog is.

2. Zorgtoeslag: €127 per maand
U ontvangt zorgtoeslag voor uw zorgverzekering.

3. Kinderbijslag: U ontvangt geen kinderbijslag. U heeft geen kinderen onder de 18 jaar ingeschreven op uw adres.

Uitbetaling:
De toeslagen worden elke maand op de 20e bijgeschreven op uw rekening: NL45 INGB 0006 7890 12.

Uw inkomen verandert?
Heeft u meer of minder gaan verdienen? Geef dit meteen door via Mijn Toeslagen (www.toeslagen.nl). Als u te veel toeslag ontvangt, moet u dit later terugbetalen.

Controleer uw gegevens:
Kijk op www.toeslagen.nl of uw gegevens (inkomen, huur, verzekering) kloppen. Log in met uw DigiD.

Vragen?
Bel: 0800 – 0543 (gratis, ma-do 08:00–20:00, vr 08:00–17:00)`,
    questions: [
      { question: "Hoeveel huurtoeslag ontvangt de heer Demirci per maand?", options: ["€127", "€232", "€312", "€439"], correct: "€312" },
      { question: "Op welke datum worden de toeslagen uitbetaald?", options: ["Op de 1e", "Op de 10e", "Op de 20e", "Op de laatste dag"], correct: "Op de 20e" },
      { question: "Waarom ontvangt hij geen kinderbijslag?", options: ["Zijn inkomen is te hoog", "Hij heeft geen kinderen onder 18 op zijn adres", "Hij heeft geen DigiD", "Hij heeft geen bankrekening"], correct: "Hij heeft geen kinderen onder 18 op zijn adres" },
      { question: "Wat moet hij doen als zijn inkomen verandert?", options: ["Niets", "Een brief sturen", "Het meteen doorgeven via Mijn Toeslagen", "Wachten tot het einde van het jaar"], correct: "Het meteen doorgeven via Mijn Toeslagen" }
    ]
  },

  // ─── APOTHEEK / MEDICIJNEN ────────────────────────────────────────────────
  {
    id: 18,
    title: '💊 Bijsluiter: Medicijnen',
    text: `BIJSLUITER – Amoxicilline 500 mg capsules

Wat is Amoxicilline?
Amoxicilline is een antibioticum. Het wordt gebruikt bij bacteriële infecties, zoals keel-, long- en blaasinfecties.

Dosering:
Volwassenen: 1 capsule, 3 keer per dag (elke 8 uur)
Kinderen tot 10 jaar: vraag uw arts of apotheker

Hoe gebruikt u dit medicijn?
• Slik de capsule in zijn geheel door met een glas water
• U kunt het met of zonder eten innemen
• Neem het medicijn op vaste tijden (bijv. 08:00, 16:00 en 24:00 uur)
• Maak de kuur altijd af, ook als u zich beter voelt

Wanneer NIET gebruiken?
• Als u allergisch bent voor penicilline of amoxicilline
• Als u nierproblemen heeft, overleg dan eerst met uw arts

Bijwerkingen (niet iedereen heeft dit):
• Misselijkheid of diarree
• Huiduitslag (stop dan meteen en bel uw huisarts!)
• Hoofdpijn

Bewaren:
• Bewaar op een droge, koele plaats (max. 25°C)
• Buiten bereik van kinderen bewaren
• Gebruik niet na de houdbaarheidsdatum

Heeft u vragen? Vraag uw apotheker.`,
    questions: [
      { question: "Hoe vaak per dag moet een volwassene de capsule innemen?", options: ["1 keer", "2 keer", "3 keer", "4 keer"], correct: "3 keer" },
      { question: "Wanneer moet u stoppen met het medicijn en de huisarts bellen?", options: ["Bij hoofdpijn", "Bij misselijkheid", "Bij huiduitslag", "Bij diarree"], correct: "Bij huiduitslag" },
      { question: "Wat moet u doen als u zich beter voelt?", options: ["Stoppen met het medicijn", "Minder innemen", "De kuur afmaken", "Aan uw arts vragen"], correct: "De kuur afmaken" },
      { question: "Bij welke temperatuur moet u het medicijn bewaren?", options: ["Max. 15°C", "Max. 20°C", "Max. 25°C", "Max. 30°C"], correct: "Max. 25°C" }
    ]
  },

  // ─── SOCIALE HUUR / WACHTLIJST ───────────────────────────────────────────
  {
    id: 19,
    title: '🏠 Brief: Sociale Huurwoning',
    text: `Woningstichting Portaal
Communicatielaan 2
3526 GL Utrecht

Datum: 25 februari 2024
Betreft: Uw inschrijving sociale huurwoning

Geachte mevrouw Özkan,

Wij bevestigen uw inschrijving als woningzoekende bij Woningstichting Portaal.

Uw gegevens:
Naam: Fatma Özkan
Inschrijfdatum: 1 maart 2022
Inschrijvingsduur: 2 jaar (per 1 maart 2024)
Uw woningpunten: 48

Hoe werkt het systeem?
U kunt reageren op beschikbare woningen via www.woningnet.nl. Wie het langst ingeschreven staat én de meeste punten heeft, krijgt de woning.

Wat zijn woningpunten?
U krijgt punten voor:
• Jaren inschrijving (1 punt per maand)
• Urgentie (bijv. door sloop, gezondheid, scheidng)
• Samenstelling huishouden

Reageren op een woning:
1. Kijk elke week op woningnet.nl voor nieuwe woningen
2. Controleer de huurprijs en voorwaarden
3. Reageer als de woning bij u past
4. U hoort van ons als u de hoogste positie heeft

Belangrijk:
• Uw inschrijving verloopt elke 2 jaar. Verleng op tijd via woningnet.nl
• Als u drie keer een woning weigert, kunt u tijdelijk niet meer reageren

Vragen? Bel: 030 – 287 00 00 (ma-vr 09:00-17:00)`,
    questions: [
      { question: "Wanneer is mevrouw Özkan ingeschreven?", options: ["1 maart 2020", "1 maart 2022", "25 februari 2024", "1 maart 2024"], correct: "1 maart 2022" },
      { question: "Hoeveel woningpunten heeft ze?", options: ["24 punten", "36 punten", "48 punten", "60 punten"], correct: "48 punten" },
      { question: "Hoe vaak verloopt de inschrijving?", options: ["Elk jaar", "Elke 2 jaar", "Elke 3 jaar", "Elke 5 jaar"], correct: "Elke 2 jaar" },
      { question: "Wat gebeurt er als u drie keer een woning weigert?", options: ["U verliest alle punten", "U wordt uitgeschreven", "U kunt tijdelijk niet meer reageren", "U moet een boete betalen"], correct: "U kunt tijdelijk niet meer reageren" }
    ]
  },

  // ─── RIJBEWIJS / PRAKTISCHE ZAKEN ─────────────────────────────────────────
  {
    id: 20,
    title: '🚗 Informatie: Rijbewijs Omwisselen',
    text: `Rijksdienst voor het Wegverkeer (RDW)
www.rdw.nl

Buitenlands rijbewijs omwisselen naar Nederlands rijbewijs

Heeft u een buitenlands rijbewijs? In sommige gevallen kunt u dit omwisselen voor een Nederlands rijbewijs zonder een examen te doen.

Wanneer kunt u omwisselen?
U kunt uw rijbewijs omwisselen als het land op de lijst van erkende landen staat. Bekijk de lijst op www.rdw.nl.

Landen waarvoor omwisseling mogelijk is (selectie):
Turkije, Marokko, Suriname, de VS, Canada, Australië en alle EU-landen.

Wat heeft u nodig?
• Geldig buitenlands rijbewijs
• Paspoort of verblijfsvergunning
• Bewijs van inschrijving gemeente (GBA-uittreksel)
• Foto (pasfoto, recente datum)
• Betaling: €41,10

Waar kunt u dit doen?
Bij het CBR (Centraal Bureau Rijvaardigheidsbewijzen) of bij uw gemeente. Maak eerst een afspraak.

Hoe lang duurt het?
Na uw aanvraag ontvangt u het rijbewijs binnen 10 werkdagen per post.

Let op:
• Uw buitenlands rijbewijs wordt ingenomen
• Is uw rijbewijs niet op de lijst? Dan moet u het Nederlandse rijexamen doen

Meer informatie:
Bel het RDW: 0900 – 073 90 39 (ma-vr 08:00-17:30)
Of kijk op www.rdw.nl`,
    questions: [
      { question: "Wanneer hoeft u geen examen te doen bij het omwisselen?", options: ["Nooit", "Als uw land op de lijst van erkende landen staat", "Altijd als u een rijbewijs heeft", "Als u meer dan 5 jaar rijbewijs heeft"], correct: "Als uw land op de lijst van erkende landen staat" },
      { question: "Hoeveel kost het omwisselen?", options: ["€25,50", "€31,10", "€41,10", "€51,10"], correct: "€41,10" },
      { question: "Binnen hoeveel werkdagen ontvangt u het nieuwe rijbewijs?", options: ["5 werkdagen", "10 werkdagen", "15 werkdagen", "20 werkdagen"], correct: "10 werkdagen" },
      { question: "Wat gebeurt er met uw buitenlands rijbewijs?", options: ["U houdt het zelf", "Het wordt terugestuurd naar het buitenland", "Het wordt ingenomen", "Het wordt gekopieerd"], correct: "Het wordt ingenomen" }
    ]
  }
  ,
  // ─── 20 NEW STORIES – DUTCH INBURGERING EXAM STYLE ──────────────────────────
// Add these inside the stories array in stories.js (continue from id: 20)

  // ─── ZORG / HUISARTS ──────────────────────────────────────────────────────
  {
    id: 21,
    title: '🏥 Informatie: Naar de Huisarts',
    text: `Huisartsenpraktijk De Linde
Lindenlaan 5, 2343 HK Oegstgeest
Tel: 071 – 515 22 33
www.huisartspraktijkdelinde.nl

Openingstijden:
Maandag t/m vrijdag: 08:00 – 17:00 uur
Zaterdag en zondag: gesloten

Hoe maakt u een afspraak?
U kunt op drie manieren een afspraak maken:
1. Bellen: tussen 08:00 en 10:00 uur
2. Online: via onze website, 24 uur per dag
3. Via de praktijkapp: download 'Huisarts Online'

Wat moet u weten?
• Bel altijd eerst de huisarts voordat u naar de praktijk komt
• Heeft u een spoedeisende klacht? Bel dan direct: 071 – 515 22 33
• Buiten openingstijden: bel de huisartsenpost: 0900 – 1010 (24 uur per dag)
• Bij levensgevaar: bel altijd 112

Recept aanvragen:
U kunt een herhaalrecept aanvragen via de website of de app. Dit duurt maximaal 2 werkdagen. Haal uw medicijnen op bij de apotheek naast de praktijk.

Eerste afspraak – wat neemt u mee?
• Uw identiteitsbewijs (paspoort of ID-kaart)
• Uw zorgpas (verzekeringspas)
• Een overzicht van uw medicijnen (als u die gebruikt)

Tolkenservice:
Spreekt u geen of weinig Nederlands? Wij regelen een tolk voor u. Geef dit door bij het maken van de afspraak.`,
    questions: [
      { question: "Tussen welke tijden kunt u telefonisch een afspraak maken?", options: ["07:00–09:00", "08:00–10:00", "09:00–11:00", "08:00–17:00"], correct: "08:00–10:00" },
      { question: "Wat doet u buiten openingstijden bij een spoedeisende klacht?", options: ["Naar de spoedeisende hulp gaan", "Wachten tot de volgende dag", "De huisartsenpost bellen: 0900–1010", "112 bellen"], correct: "De huisartsenpost bellen: 0900–1010" },
      { question: "Hoe lang duurt het aanvragen van een herhaalrecept?", options: ["Dezelfde dag", "Maximaal 1 werkdag", "Maximaal 2 werkdagen", "Maximaal 5 werkdagen"], correct: "Maximaal 2 werkdagen" },
      { question: "Wat kunt u doen als u geen Nederlands spreekt?", options: ["U kunt niet naar deze huisarts", "U moet zelf een tolk meenemen", "De praktijk regelt een tolk voor u", "U krijgt een brief in uw eigen taal"], correct: "De praktijk regelt een tolk voor u" }
    ]
  },

  // ─── ONDERWIJS / SCHOOL ───────────────────────────────────────────────────
  {
    id: 22,
    title: '🎓 Brief: Inschrijving Basisschool',
    text: `Obs De Regenboog
Tulpstraat 14, 3521 VK Utrecht
Tel: 030 – 234 56 78
info@deregenboog-utrecht.nl

Datum: 15 januari 2024
Betreft: Inschrijving van uw kind

Geachte ouder / verzorger,

Hartelijk dank voor uw interesse in onze school. Wij hebben uw aanmelding ontvangen voor:

Kind: Youssef El Amrani
Geboortedatum: 4 april 2019
Gewenste startdatum: 1 september 2024

Wat zijn de volgende stappen?

Stap 1 – Kennismakingsgesprek:
Wij nodigen u uit voor een gesprek op school. Hierin bespreken we de behoeften van uw kind. U ontvangt een uitnodiging per e-mail.

Stap 2 – Rondleiding:
U kunt de school bekijken en vragen stellen. Dit duurt ongeveer 45 minuten.

Stap 3 – Definitieve inschrijving:
Na het gesprek ontvangt u een inschrijfformulier. Lever dit binnen 2 weken ingevuld in.

Wat neemt u mee naar het gesprek?
• Paspoort of geboorteakte van uw kind
• Bewijs van adres (bijv. een rekening op uw naam)
• Vaccinatieboekje (als u dat heeft)

Heeft u vragen? Bel ons of stuur een e-mail.

Met vriendelijke groet,
Directie Obs De Regenboog`,
    questions: [
      { question: "Voor welk kind is de aanmelding?", options: ["Fatima El Amrani", "Youssef El Amrani", "Omar El Amrani", "Layla El Amrani"], correct: "Youssef El Amrani" },
      { question: "Wat is stap 2 in het inschrijfproces?", options: ["Het invullen van het formulier", "Het kennismakingsgesprek", "De rondleiding", "Het betalen van schoolgeld"], correct: "De rondleiding" },
      { question: "Binnen hoeveel tijd moet u het inschrijfformulier inleveren?", options: ["1 week", "2 weken", "1 maand", "2 maanden"], correct: "2 weken" },
      { question: "Wat neemt u NIET mee naar het gesprek?", options: ["Paspoort van het kind", "Bewijs van adres", "Vaccinatieboekje", "Schoolrapport"], correct: "Schoolrapport" }
    ]
  },

  // ─── INBURGERING / CURSUS ──────────────────────────────────────────────────
  {
    id: 23,
    title: '📚 Informatiebrief: Inburgeringscursus',
    text: `ROC Midden Nederland
Afdeling Inburgering & Taal
Vondellaan 174, 3521 GH Utrecht
Tel: 030 – 265 70 00

Datum: 20 februari 2024
Betreft: Start van uw inburgeringscursus

Geachte mevrouw Boualem,

Wij zijn blij u te informeren dat uw inburgeringstraject officieel begint op 4 maart 2024.

Uw programma:
• Cursus: Nederlands als tweede taal (NT2) – niveau A2 naar B1
• Lesdagen: maandag, woensdag en vrijdag
• Tijden: 09:00 – 12:30 uur
• Locatie: Lokaal 3.12, gebouw B, Vondellaan 174 Utrecht
• Duur: 18 maanden

Wat leert u?
U leert Nederlands spreken, lezen en schrijven. U oefent ook met situaties uit het dagelijks leven, zoals werken, winkelen en contact met de gemeente.

Aanwezigheid:
U bent verplicht aanwezig. Als u ziek bent of een dringende afspraak heeft, moet u dit vóór 08:30 uur melden via: 030 – 265 70 00.

Let op: Als u meer dan 20% afwezig bent zonder goede reden, kan uw toeslag worden stopgezet door DUO.

Wat heeft u nodig?
• Schriften en pennen (u krijgt hierover nog een lijst)
• Een laptop of tablet (niet verplicht, maar handig)

Vragen? Neem contact op met uw trajectbegeleider: mevrouw Van der Berg, k.vanderberg@rocmn.nl`,
    questions: [
      { question: "Op welke dagen heeft mevrouw Boualem les?", options: ["Dinsdag, donderdag, zaterdag", "Maandag, dinsdag, woensdag", "Maandag, woensdag, vrijdag", "Maandag t/m vrijdag"], correct: "Maandag, woensdag, vrijdag" },
      { question: "Hoe lang duurt de cursus?", options: ["6 maanden", "12 maanden", "18 maanden", "24 maanden"], correct: "18 maanden" },
      { question: "Wat kan er gebeuren als u te vaak afwezig bent?", options: ["U moet een boete betalen", "U wordt van de cursus gestuurd", "Uw toeslag kan worden stopgezet", "U moet het jaar overdoen"], correct: "Uw toeslag kan worden stopgezet" },
      { question: "Hoe laat moet u ziekmelden?", options: ["Vóór 08:00 uur", "Vóór 08:30 uur", "Vóór 09:00 uur", "Vóór 09:30 uur"], correct: "Vóór 08:30 uur" }
    ]
  },

  // ─── WERK / UWV ───────────────────────────────────────────────────────────
  {
    id: 24,
    title: '💼 Brief: UWV – WW-uitkering',
    text: `UWV – Uitvoeringsinstituut Werknemersverzekeringen
Postbus 58285, 1040 HG Amsterdam
www.uwv.nl

Datum: 5 maart 2024
Betreft: Beslissing op uw aanvraag WW-uitkering

Geachte heer Kaya,

U heeft een WW-uitkering (werkloosheidsuitkering) aangevraagd. Wij hebben uw aanvraag beoordeeld.

Beslissing: U heeft recht op een WW-uitkering.

Uw uitkering:
• Startdatum: 1 maart 2024
• Hoogte: 75% van uw laatste dagloon de eerste twee maanden, daarna 70%
• Duur: maximaal 12 maanden
• Uitbetaling: elke 4 weken, achteraf

Uw verplichtingen:
U moet elke 4 weken een werkbriefje invullen op uwv.nl. Hierin geeft u aan:
- Hoeveel uur u heeft gewerkt
- Of u ziek bent geweest
- Welke sollicitaties u heeft gedaan

U bent verplicht om te solliciteren: minimaal 4 keer per 4 weken.

Werk gevonden?
Heeft u werk gevonden? Geef dit meteen door via Mijn UWV. Als u dit niet doet, moet u mogelijk geld terugbetalen.

Vragen?
Bel het UWV: 0900 – 92 94 (ma-vr 08:00–18:00)
Of log in op uwv.nl met uw DigiD.`,
    questions: [
      { question: "Hoeveel procent van het dagloon ontvangt de heer Kaya na de eerste twee maanden?", options: ["60%", "65%", "70%", "75%"], correct: "70%" },
      { question: "Hoe lang duurt de WW-uitkering maximaal?", options: ["6 maanden", "9 maanden", "12 maanden", "24 maanden"], correct: "12 maanden" },
      { question: "Hoe vaak moet hij minimaal solliciteren per 4 weken?", options: ["1 keer", "2 keer", "3 keer", "4 keer"], correct: "4 keer" },
      { question: "Wanneer moet hij werk melden bij het UWV?", options: ["Aan het einde van de maand", "Meteen", "Na 4 weken", "Aan het einde van zijn uitkering"], correct: "Meteen" }
    ]
  },

  // ─── ZORGVERZEKERING ──────────────────────────────────────────────────────
  {
    id: 25,
    title: '🏥 Informatie: Zorgverzekering in Nederland',
    text: `Zorgverzekering – wat moet u weten?

In Nederland is iedereen verplicht een zorgverzekering te hebben. Dit geldt voor iedereen die in Nederland woont en werkt, ook voor mensen met een verblijfsvergunning.

De basisverzekering:
Elke zorgverzekering heeft een basispakket. Dit betaalt voor:
• Bezoek aan de huisarts
• Ziekenhuisopname
• Medicijnen op recept
• Specialistische zorg (bijv. bij een cardioloog of gynaecoloog)

Het eigen risico:
U betaalt altijd eerst €385 per jaar zelf (dit heet het eigen risico). Daarna betaalt de verzekering de rest. Het eigen risico geldt niet voor de huisarts.

De premie:
U betaalt elke maand een bedrag aan uw verzekeraar (de premie). Dit is gemiddeld €140 per maand. Heeft u een laag inkomen? Dan kunt u zorgtoeslag aanvragen via de Belastingdienst.

Aanvullende verzekering:
Naast de basisverzekering kunt u een aanvullende verzekering nemen. Dit dekt extra's zoals:
• Tandarts
• Fysiotherapie
• Brillen en contactlenzen

Wanneer afsluiten?
U heeft 4 maanden de tijd na aankomst in Nederland om een verzekering af te sluiten. Daarna kunt u een boete krijgen.

Verzekeraar kiezen?
Vergelijk verzekeraars op: www.zorgwijzer.nl of www.independer.nl`,
    questions: [
      { question: "Wie is verplicht een zorgverzekering te nemen in Nederland?", options: ["Alleen Nederlanders", "Alleen mensen met een baan", "Iedereen die in Nederland woont en werkt", "Alleen mensen ouder dan 18"], correct: "Iedereen die in Nederland woont en werkt" },
      { question: "Hoeveel is het eigen risico per jaar?", options: ["€185", "€285", "€385", "€485"], correct: "€385" },
      { question: "Waarvoor geldt het eigen risico NIET?", options: ["Ziekenhuisopname", "Medicijnen", "De huisarts", "Specialistische zorg"], correct: "De huisarts" },
      { question: "Hoeveel tijd heeft u na aankomst om een verzekering af te sluiten?", options: ["1 maand", "2 maanden", "4 maanden", "6 maanden"], correct: "4 maanden" }
    ]
  },

  // ─── OPENBAAR VERVOER ──────────────────────────────────────────────────────
  {
    id: 26,
    title: '🚌 Informatie: Reizen met de OV-chipkaart',
    text: `NS & HTM – Reizen met de OV-chipkaart

De OV-chipkaart is de betaalkaart voor het openbaar vervoer in Nederland. U gebruikt hem in de bus, tram, metro en trein.

Soorten OV-chipkaarten:
1. Persoonlijke OV-chipkaart – staat op uw naam. Als u hem verliest, kunt u het geld terugkrijgen.
2. Anonieme OV-chipkaart – staat niet op uw naam. Als u hem verliest, bent u ook uw geld kwijt.
3. Wegwerpkaart – voor eenmalig gebruik.

Hoe gebruikt u de kaart?
• IN-checken: houd de kaart voor de kaartlezer als u instapt (piepje = goed)
• UIT-checken: houd de kaart voor de kaartlezer als u uitstapt
• Let op: vergeet u uit te checken? Dan betaalt u het maximale tarief!

Saldo ophogen:
U kunt saldo laden bij:
• NS-automaten op stations
• Servicekantoren van vervoersbedrijven
• Online via ov-chipkaart.nl (duurt 30 minuten voor het actief is)
• Albert Heijn kassa's

Minimum saldo:
U moet altijd minimaal €20 op uw kaart hebben om in te checken voor de trein.

Abonnement:
Reist u vaak? Dan is een abonnement misschien goedkoper. Kijk op ns.nl voor de mogelijkheden. Met een Dal Vrij abonnement reist u buiten de spits voor een vaste prijs.`,
    questions: [
      { question: "Wat is het verschil tussen een persoonlijke en anonieme OV-chipkaart?", options: ["De prijs is anders", "Bij verlies van de persoonlijke kaart kunt u het geld terugkrijgen", "De anonieme kaart werkt ook in het buitenland", "De persoonlijke kaart is alleen voor de trein"], correct: "Bij verlies van de persoonlijke kaart kunt u het geld terugkrijgen" },
      { question: "Wat gebeurt er als u vergeet uit te checken?", options: ["U krijgt een boete", "Er gebeurt niets", "U betaalt het maximale tarief", "Uw kaart wordt geblokkeerd"], correct: "U betaalt het maximale tarief" },
      { question: "Hoeveel saldo heeft u minimaal nodig om in te checken voor de trein?", options: ["€5", "€10", "€20", "€30"], correct: "€20" },
      { question: "Hoe lang duurt het voordat online opgeladen saldo actief is?", options: ["Direct", "10 minuten", "30 minuten", "1 uur"], correct: "30 minuten" }
    ]
  },

  // ─── GEMEENTE / UITKERING ──────────────────────────────────────────────────
  {
    id: 27,
    title: '📄 Brief: Bijstandsuitkering (Participatiewet)',
    text: `Gemeente Den Haag
Afdeling Werk & Inkomen
Spui 70, 2511 BT Den Haag

Datum: 12 maart 2024
Betreft: Toekenning bijstandsuitkering

Geachte mevrouw Ndiaye,

Wij hebben uw aanvraag voor een bijstandsuitkering (op grond van de Participatiewet) beoordeeld.

Beslissing: U heeft recht op een bijstandsuitkering.

Uw uitkering:
• Bedrag: €1.068 per maand (netto, alleenstaande)
• Ingangsdatum: 1 maart 2024
• Uitbetaling: op de laatste werkdag van de maand

Uw verplichtingen:
U moet actief werk zoeken. Dit betekent:
1. Elke maand een overzicht van uw sollicitaties inleveren
2. Meewerken aan re-integratieactiviteiten (bijv. vrijwilligerswerk of cursussen)
3. Elke wijziging in uw situatie direct melden (bijv. als u werk vindt, samenwoont of verhuist)

Controle:
De gemeente controleert uw situatie. Als blijkt dat u onjuiste informatie heeft gegeven, moet u de uitkering terugbetalen.

Heeft u een vraag?
U kunt contact opnemen met uw contactpersoon:
Naam: de heer Janssen
Tel: 070 – 353 22 00
E-mail: p.janssen@denhaag.nl

Bezwaar:
Bent u het niet eens met deze beslissing? U kunt binnen 6 weken bezwaar maken.`,
    questions: [
      { question: "Hoeveel bijstand ontvangt mevrouw Ndiaye per maand?", options: ["€868", "€968", "€1.068", "€1.168"], correct: "€1.068" },
      { question: "Wanneer wordt de uitkering uitbetaald?", options: ["Op de 1e van de maand", "Op de 15e van de maand", "Op de laatste werkdag van de maand", "Elke twee weken"], correct: "Op de laatste werkdag van de maand" },
      { question: "Wat moet ze direct melden bij de gemeente?", options: ["Elke sollicitatie", "Alleen als ze werk vindt", "Elke wijziging in haar situatie", "Alleen als ze verhuist"], correct: "Elke wijziging in haar situatie" },
      { question: "Binnen hoeveel weken kan ze bezwaar maken?", options: ["2 weken", "4 weken", "6 weken", "8 weken"], correct: "6 weken" }
    ]
  },

  // ─── BANK / FINANCIËN ─────────────────────────────────────────────────────
  {
    id: 28,
    title: '🏦 Informatie: Bankrekening Openen',
    text: `ING Bank – Bankrekening openen

Een bankrekening is belangrijk in Nederland. U heeft hem nodig voor uw salaris, huur, en toeslagen.

Welke rekening heeft u nodig?
• Betaalrekening: voor dagelijks gebruik (pinnen, overboekingen)
• Spaarrekening: om geld te sparen (apart van uw betaalrekening)

Wat heeft u nodig om een rekening te openen?
• Geldig identiteitsbewijs (paspoort, ID-kaart of verblijfsvergunning)
• Burgerservicenummer (BSN)
• Nederlands adres (inschrijving BRP)
• Telefoonnummer en e-mailadres

Hoe opent u een rekening bij ING?
1. Ga naar ing.nl/particulier/rekening-openen
2. Vul het formulier in
3. Identificeer uzelf via de ING-app of ga naar een ING-kantoor
4. U ontvangt uw bankpas binnen 5 werkdagen

Kosten:
• Betaalrekening: €2,95 per maand
• Bankpas: gratis
• Creditcard: €2,25 per maand extra

Geen BSN?
Als u nog geen BSN heeft, kunt u soms een basisrekening openen. Dit is een rekening met beperkte mogelijkheden. Informeer hiernaar bij de bank.

Let op bij pinnen:
• Onthoud uw pincode goed
• Geef uw pincode nooit aan anderen
• Kijk uit voor oplichting (fraude)

Meer informatie: www.ing.nl of bel 020 – 22 888 00`,
    questions: [
      { question: "Wat heeft u NIET nodig om een rekening te openen?", options: ["BSN", "Identiteitsbewijs", "Nederlands adres", "Werkgeversverklaring"], correct: "Werkgeversverklaring" },
      { question: "Binnen hoeveel werkdagen ontvangt u uw bankpas?", options: ["2 werkdagen", "3 werkdagen", "5 werkdagen", "10 werkdagen"], correct: "5 werkdagen" },
      { question: "Hoeveel kost een betaalrekening per maand?", options: ["Gratis", "€1,95", "€2,95", "€4,95"], correct: "€2,95" },
      { question: "Wat kunt u doen als u nog geen BSN heeft?", options: ["U kunt helemaal geen rekening openen", "U moet wachten totdat u een BSN heeft", "U kunt soms een basisrekening openen", "U moet naar een andere bank"], correct: "U kunt soms een basisrekening openen" }
    ]
  },

  // ─── KINDEROPVANG ─────────────────────────────────────────────────────────
  {
    id: 29,
    title: '👶 Informatie: Kinderopvangtoeslag',
    text: `Belastingdienst / Toeslagen
Kinderopvangtoeslag – informatie voor ouders

Heeft u kinderen en werkt u? Dan heeft u misschien recht op kinderopvangtoeslag. De overheid helpt u mee te betalen voor de opvang.

Voor wie?
U heeft recht op kinderopvangtoeslag als:
• Uw kind jonger is dan 13 jaar
• U werkt, studeert of een re-integratietraject volgt
• Uw kind naar een geregistreerde opvang gaat (zie LRKP-register)

Soorten opvang:
1. Dagopvang – voor kinderen van 0 tot 4 jaar
2. Buitenschoolse opvang (BSO) – voor kinderen van 4 tot 13 jaar, voor en na school
3. Gastouderopvang – opvang bij een gastouder thuis

Hoe vraagt u het aan?
Via Mijn Toeslagen op toeslagen.nl (inloggen met DigiD). Vraag het aan zodra uw kind naar de opvang gaat. U kunt maximaal 3 maanden terugvragen.

Hoeveel krijgt u?
De hoogte hangt af van uw inkomen. Hoe lager uw inkomen, hoe meer toeslag u ontvangt. Het maximale uurtarief dat vergoed wordt is €9,65 (dagopvang) of €8,30 (BSO).

Let op:
Controleer elk jaar of uw gegevens kloppen via toeslagen.nl. Als uw inkomen of uren veranderen, geef dit dan meteen door. Anders moet u mogelijk geld terugbetalen.`,
    questions: [
      { question: "Tot welke leeftijd heeft uw kind recht op kinderopvangtoeslag?", options: ["4 jaar", "8 jaar", "13 jaar", "18 jaar"], correct: "13 jaar" },
      { question: "Hoe ver kunt u de toeslag terugvragen?", options: ["1 maand", "2 maanden", "3 maanden", "6 maanden"], correct: "3 maanden" },
      { question: "Wat is het maximale uurtarief voor dagopvang?", options: ["€7,50", "€8,30", "€9,65", "€10,50"], correct: "€9,65" },
      { question: "Voor welk type opvang is BSO bedoeld?", options: ["Kinderen van 0 tot 4 jaar", "Kinderen van 4 tot 13 jaar, voor en na school", "Kinderen bij een gastouder thuis", "Kinderen op de basisschool overdag"], correct: "Kinderen van 4 tot 13 jaar, voor en na school" }
    ]
  },

  // ─── NATURALISATIE ────────────────────────────────────────────────────────
  {
    id: 30,
    title: '🇳🇱 Informatie: Nederlands Staatsburgerschap',
    text: `IND – Immigratie- en Naturalisatiedienst
www.ind.nl

Nederlander worden – naturalisatie

Wilt u de Nederlandse nationaliteit? Dan kunt u naturalisatie aanvragen.

Voorwaarden:
U kunt naturaliseren als u:
• Minimaal 5 jaar legaal in Nederland woont
• Een geldige verblijfsvergunning heeft
• Voldoende Nederlands spreekt (niveau B1 of inburgeringsdiploma)
• Het inburgeringsexamen heeft gehaald
• Niet meer dan 4 jaar in de gevangenis heeft gezeten (in de afgelopen 5 jaar)
• Uw huidige nationaliteit opgeeft (in de meeste gevallen)

Procedure:
1. Aanvraag indienen bij de gemeente
2. Betalen: €988 (2024)
3. Uitnodiging voor gesprek bij de gemeente
4. Wachten op beslissing van de IND (maximaal 12 maanden)
5. Naturalisatieceremonie bijwonen – verplicht!

De naturalisatieceremonie:
U wordt uitgenodigd door uw gemeente. Tijdens de ceremonie zweert of belooft u trouw aan Nederland. Daarna ontvangt u een bewijs van Nederlanderschap.

Dubbele nationaliteit:
In de meeste gevallen moet u uw oude nationaliteit opgeven. Er zijn uitzonderingen, bijvoorbeeld als uw land van herkomst u niet laat uitschrijven.

Meer informatie:
Kijk op www.ind.nl of bel de IND-informatielijin: 088 – 043 04 30`,
    questions: [
      { question: "Hoe lang moet u minimaal legaal in Nederland wonen?", options: ["3 jaar", "4 jaar", "5 jaar", "7 jaar"], correct: "5 jaar" },
      { question: "Hoeveel kost de naturalisatieaanvraag in 2024?", options: ["€488", "€688", "€888", "€988"], correct: "€988" },
      { question: "Wat is verplicht na de beslissing van de IND?", options: ["Een taaltest doen", "Een interview met een ambtenaar", "De naturalisatieceremonie bijwonen", "Uw paspoort inleveren"], correct: "De naturalisatieceremonie bijwonen" },
      { question: "Welk taalniveau is vereist voor naturalisatie?", options: ["A1", "A2", "B1", "B2"], correct: "B1" }
    ]
  },

  // ─── HUUR / WONINGCORPORATIE ──────────────────────────────────────────────
  {
    id: 31,
    title: '🏠 Brief: Huurverhoging',
    text: `Woningcorporatie Mitros
Reactorweg 100, 3542 AD Utrecht
Tel: 030 – 290 00 00
www.mitros.nl

Datum: 1 april 2024
Betreft: Huurverhoging per 1 juli 2024

Geachte huurder,

Wij informeren u over de jaarlijkse huurverhoging van uw woning.

Uw nieuwe huurprijs:
• Huidige huurprijs: €724 per maand
• Verhoging: 5,3%
• Nieuwe huurprijs: €762 per maand (per 1 juli 2024)

Waarom een huurverhoging?
Elk jaar mogen woningcorporaties de huur verhogen. De maximale verhoging wordt bepaald door de overheid. Dit jaar is het maximum 5,3% voor sociale huurwoningen.

Bezwaar maken:
Bent u het niet eens met de verhoging? U kunt bezwaar maken bij de Huurcommissie via www.huurcommissie.nl. Dit moet vóór 1 juli 2024. De Huurcommissie beslist dan of de verhoging terecht is.

Huurtoeslag:
Als u huurtoeslag ontvangt, wordt dit automatisch aangepast door de Belastingdienst. U hoeft hier niets voor te doen.

Service en onderhoud:
Voor reparaties kunt u bellen naar: 030 – 290 00 00 (24 uur per dag voor spoed).
Niet-spoedreparaties kunt u melden via Mijn Mitros op www.mitros.nl.

Heeft u vragen over uw huur? Stuur een e-mail naar: huurzaken@mitros.nl`,
    questions: [
      { question: "Wat is de nieuwe huurprijs per 1 juli 2024?", options: ["€724", "€738", "€762", "€785"], correct: "€762" },
      { question: "Hoeveel procent gaat de huur omhoog?", options: ["3,2%", "4,1%", "5,3%", "6,5%"], correct: "5,3%" },
      { question: "Waar kunt u bezwaar maken tegen de huurverhoging?", options: ["Bij de gemeente", "Bij de woningcorporatie", "Bij de Huurcommissie", "Bij de Belastingdienst"], correct: "Bij de Huurcommissie" },
      { question: "Wat moet u doen voor uw huurtoeslag na de huurverhoging?", options: ["Het zelf doorgeven aan de Belastingdienst", "Een nieuw formulier invullen", "Niets, het wordt automatisch aangepast", "Contact opnemen met Mitros"], correct: "Niets, het wordt automatisch aangepast" }
    ]
  },

  // ─── WERK / SOLLICITATIEBRIEF ──────────────────────────────────────────────
  {
    id: 32,
    title: '💼 Vacature: Medewerker Logistiek',
    text: `VACATURE – PostNL Distributiecentrum Almere

Functie: Sorteermedewerker pakketpost (fulltime/parttime)
Locatie: Distributiecentrum Almere, Transistorstraat 9
Uren: 24–40 uur per week
Salaris: €13,27 per uur + toeslagen

Diensten:
• Vroege dienst: 06:00 – 14:00
• Late dienst: 14:00 – 22:00
• Nachtdienst: 22:00 – 06:00 (30% toeslag)

Wat doet u?
• U sorteert en verwerkt pakketten op transportbanden
• U scant pakketten met een scanner
• U laadt en lost bestelwagens
• U werkt samen in een team

Wat vragen wij?
• U bent fysiek fit (tillen tot 20 kg)
• U bent bereid in wisselende diensten te werken
• U bent betrouwbaar en punctueel
• Geen specifieke opleiding nodig
• Taaleis: A1 Nederlands is voldoende

Wat bieden wij?
• Salaris met toeslagen voor onregelmatige werktijden
• Gratis vervoer vanuit Almere Centraal
• Mogelijkheid vast contract na 3 maanden
• Pensioenopbouw vanaf dag 1

Solliciteren:
Via www.postnl.nl/werken-bij of stuur uw CV naar: werving@postnl.nl
Geen CV? Bel dan: 036 – 548 00 00. We helpen u graag.`,
    questions: [
      { question: "Hoeveel toeslag krijgt u voor de nachtdienst?", options: ["10%", "20%", "25%", "30%"], correct: "30%" },
      { question: "Wat is de maximum tilgewicht in deze functie?", options: ["10 kg", "15 kg", "20 kg", "25 kg"], correct: "20 kg" },
      { question: "Wanneer kunt u een vast contract krijgen?", options: ["Na 1 maand", "Na 3 maanden", "Na 6 maanden", "Na 1 jaar"], correct: "Na 3 maanden" },
      { question: "Wat kunt u doen als u geen CV heeft?", options: ["U kunt niet solliciteren", "Een formulier invullen op de website", "Bellen naar 036–548 00 00", "Persoonlijk langsgaan"], correct: "Bellen naar 036–548 00 00" }
    ]
  },

  // ─── GEZONDHEID / GGZ ─────────────────────────────────────────────────────
  {
    id: 33,
    title: '🧠 Informatie: Geestelijke Gezondheidszorg (GGZ)',
    text: `GGZ Nederland – Informatie voor patiënten

Wat is de GGZ?
GGZ staat voor Geestelijke GezondheidsZorg. De GGZ helpt mensen met psychische klachten, zoals angst, depressie, burn-out of trauma.

Wanneer kunt u hulp zoeken?
U kunt hulp zoeken als u:
• Zich lang verdrietig, angstig of leeg voelt
• Niet kunt slapen of eten
• Problemen heeft op uw werk of in uw relatie door psychische klachten
• Gedachten heeft aan zelfbeschadiging

Hoe vraagt u hulp aan?
Stap 1: Bespreek uw klachten met uw huisarts. De huisarts kan u doorverwijzen naar de GGZ.
Stap 2: U ontvangt een verwijsbrief van de huisarts.
Stap 3: U neemt contact op met een GGZ-instelling in uw buurt.
Stap 4: U krijgt een intakegesprek om uw klachten te bespreken.

Kosten:
GGZ-zorg valt onder de basisverzekering. U betaalt het eigen risico (€385). Daarna vergoedt uw verzekeraar de kosten.

Wacht op een plek:
Er is soms een wachtlijst. In nood hoeft u niet te wachten. Bel dan de crisislijn: 0900 – 0113.

Taal:
Spreekt u geen of weinig Nederlands? Vraag naar een tolk of behandeling in uw eigen taal. Veel GGZ-instellingen bieden dit aan.`,
    questions: [
      { question: "Wat is de eerste stap om GGZ-hulp te krijgen?", options: ["Direct contact opnemen met een GGZ-instelling", "Uw klachten bespreken met uw huisarts", "Een verwijsbrief online aanvragen", "Bellen naar 0900–0113"], correct: "Uw klachten bespreken met uw huisarts" },
      { question: "Hoeveel eigen risico betaalt u voor GGZ-zorg?", options: ["€185", "€285", "€385", "€485"], correct: "€385" },
      { question: "Wat doet u als u dringend hulp nodig heeft en er een wachtlijst is?", options: ["Wachten op de lijst", "Naar de spoedeisende hulp gaan", "De crisislijn bellen: 0900–0113", "Naar uw werkgever gaan"], correct: "De crisislijn bellen: 0900–0113" },
      { question: "Wat kunt u vragen als u geen Nederlands spreekt?", options: ["Een vertaalapp gebruiken", "Een tolk of behandeling in uw eigen taal", "Alleen schriftelijke behandeling", "Telefonische behandeling"], correct: "Een tolk of behandeling in uw eigen taal" }
    ]
  },

  // ─── GEMEENTE / PASPOORT ──────────────────────────────────────────────────
  {
    id: 34,
    title: '📄 Informatie: Paspoort of ID-kaart Aanvragen',
    text: `Gemeente Leiden – Burgerzaken
Stadhuisplein 1, 2311 EZ Leiden
Tel: 14 071
www.leiden.nl

Paspoort of Nederlandse ID-kaart aanvragen

Bent u Nederlander? Dan kunt u een paspoort of een ID-kaart aanvragen bij uw gemeente.

Wanneer heeft u een paspoort of ID-kaart nodig?
• Voor reizen naar het buitenland
• Als identiteitsbewijs in Nederland

Verschil paspoort en ID-kaart:
• Paspoort: geldig voor alle landen, ook buiten de EU
• ID-kaart: geldig voor reizen binnen de EU en een aantal andere landen

Kosten (2024):
• Paspoort voor volwassenen (18+): €73,60
• Paspoort voor kinderen (onder 18): €43,60
• ID-kaart voor volwassenen: €64,95
• ID-kaart voor kinderen: €34,95

Hoe vraagt u het aan?
1. Maak een afspraak via leiden.nl of bel 14 071
2. Kom naar het gemeentehuis met:
   • Uw huidige (verlopen) paspoort of ID-kaart
   • Een recente pasfoto
3. U betaalt bij de balie
4. U ontvangt het document binnen 5 werkdagen (thuisbezorgd of ophalen)

Geldigheid:
• Paspoort volwassenen: 10 jaar
• Paspoort kinderen: 5 jaar
• ID-kaart: 10 jaar (ook voor kinderen)`,
    questions: [
      { question: "Hoeveel kost een paspoort voor een volwassene in 2024?", options: ["€43,60", "€64,95", "€73,60", "€84,95"], correct: "€73,60" },
      { question: "Hoe lang is een ID-kaart geldig?", options: ["5 jaar", "7 jaar", "10 jaar", "15 jaar"], correct: "10 jaar" },
      { question: "Waarvoor is een ID-kaart NIET geldig?", options: ["Reizen binnen de EU", "Reizen naar een aantal landen buiten de EU", "Als identiteitsbewijs in Nederland", "Reizen naar alle landen buiten de EU"], correct: "Reizen naar alle landen buiten de EU" },
      { question: "Binnen hoeveel werkdagen ontvangt u het document?", options: ["2 werkdagen", "3 werkdagen", "5 werkdagen", "10 werkdagen"], correct: "5 werkdagen" }
    ]
  },

  // ─── ENERGIE / NUTSVOORZIENINGEN ───────────────────────────────────────────
  {
    id: 35,
    title: '⚡ Brief: Energieleverancier',
    text: `Vattenfall Energie
Postbus 95250, 1090 HG Amsterdam
www.vattenfall.nl

Datum: 1 maart 2024
Betreft: Uw energiecontract – jaaroverzicht en nieuwe termijnbedragen

Geachte mevrouw Santos,

Hierbij ontvangt u uw jaaroverzicht over de periode 1 maart 2023 tot 1 maart 2024.

Uw verbruik afgelopen jaar:
• Gas: 1.340 m³
• Elektriciteit: 2.680 kWh

Afrekening:
U heeft te weinig betaald. U ontvangt een naheffing van €87,40. Dit bedrag wordt op 15 april 2024 van uw rekening afgeschreven.

Uw nieuwe maandelijkse termijnbedrag:
Vanaf 1 april 2024 betaalt u €148 per maand (was: €132 per maand).

Energie besparen?
Tips om uw energierekening te verlagen:
• Zet uw thermostaat 1 graad lager (bespaart ±7%)
• Douche maximaal 5 minuten
• Gebruik energiezuinige LED-lampen
• Schakel apparaten volledig uit in plaats van stand-by

Vragen of bezwaar?
Neem contact op via: 0800 – 9800 (gratis) of kijk op vattenfall.nl.
U kunt ook inloggen op Mijn Vattenfall voor een overzicht van uw verbruik.`,
    questions: [
      { question: "Hoeveel gas heeft mevrouw Santos het afgelopen jaar verbruikt?", options: ["1.340 m³", "2.680 m³", "1.680 m³", "2.340 m³"], correct: "1.340 m³" },
      { question: "Wat is de naheffing die zij moet betalen?", options: ["€48,70", "€87,40", "€132,00", "€148,00"], correct: "€87,40" },
      { question: "Wat is het nieuwe maandelijkse termijnbedrag?", options: ["€132", "€140", "€148", "€155"], correct: "€148" },
      { question: "Hoeveel energie bespaart u door de thermostaat 1 graad lager te zetten?", options: ["Circa 3%", "Circa 5%", "Circa 7%", "Circa 10%"], correct: "Circa 7%" }
    ]
  },

  // ─── SPORT / VERENIGING ───────────────────────────────────────────────────
  {
    id: 36,
    title: '⚽ Informatiebrief: Sportvereniging',
    text: `Voetbalvereniging Haaglandia
Sportpark De Duinrand, Laan van Meerdervoort 900, Den Haag
Tel: 070 – 322 44 55
secretariaat@haaglandia.nl

Welkom bij VV Haaglandia!

Wij zijn een gezellige voetbalvereniging met meer dan 600 leden, van 5 tot 70 jaar. Wij spelen in de zaterdagcompetitie en zondagcompetitie.

Lid worden – hoe werkt het?
1. Vul het aanmeldformulier in via haaglandia.nl
2. Betaal de contributie (zie hieronder)
3. U ontvangt een welkomstmail met uw trainingsinformatie

Contributie 2024 (per jaar):
• Senioren (18+): €175 per jaar
• Junioren (12–17 jaar): €130 per jaar
• Pupillen (6–11 jaar): €95 per jaar
• Mini's (4–5 jaar): €65 per jaar

U kunt de contributie in één keer betalen of in 3 termijnen.

Trainingstijden:
• Senioren: dinsdag en donderdag, 20:00–22:00 uur
• Junioren: maandag en woensdag, 18:30–20:00 uur
• Pupillen: zaterdag, 10:00–11:30 uur

Materiaal:
U krijgt een clubshirt en sokken. Voetbalschoenen en scheenbeschermers regelt u zelf.

Jeugdfonds:
Heeft u moeite de contributie te betalen? Vraag dan naar het Jeugdsportfonds. Kinderen tot 18 jaar kunnen soms gratis lid worden.`,
    questions: [
      { question: "Hoeveel betaalt een senior (18+) per jaar aan contributie?", options: ["€95", "€130", "€175", "€225"], correct: "€175" },
      { question: "Op welke dagen trainen de junioren?", options: ["Dinsdag en donderdag", "Maandag en woensdag", "Zaterdag en zondag", "Vrijdag en zaterdag"], correct: "Maandag en woensdag" },
      { question: "Wat krijgt u bij het lid worden?", options: ["Voetbalschoenen en een shirt", "Een clubshirt en sokken", "Scheenbeschermers en sokken", "Alleen een clubpas"], correct: "Een clubshirt en sokken" },
      { question: "Wat is het Jeugdsportfonds?", options: ["Een spaarfonds voor sportmaterialen", "Een regeling waarmee kinderen soms gratis lid kunnen worden", "Een fonds voor sportreizen", "Een subsidie voor de club"], correct: "Een regeling waarmee kinderen soms gratis lid kunnen worden" }
    ]
  },

  // ─── VEILIGHEID / BRANDWEER ───────────────────────────────────────────────
  {
    id: 37,
    title: '🚒 Informatie: Brandveiligheid Thuis',
    text: `Brandweer Nederland
www.brandweer.nl

Brandveilig leven – tips voor thuis

Brand is gevaarlijk, maar veel branden zijn te voorkomen. De brandweer geeft u de volgende tips:

In de keuken:
• Laat nooit eten onbeheerd op het vuur staan
• Zet een pan met brandend vet nooit onder de kraan – gebruik een deksel of een blusdeken
• Zorg dat de afzuigkap schoon is

Roken:
• Rook nooit in bed of op de bank
• Gebruik altijd een asbak

Elektrische apparaten:
• Laad uw telefoon en laptop niet op tijdens het slapen
• Gebruik geen verlengsnoer als vaste oplossing
• Stel de wasdroger in op de juiste stand en laat hem niet draaien als u slaapt

Rookmelders:
• Elke woonruimte heeft een rookmelder nodig
• Test uw rookmelder elke maand (druk op de testknop)
• Vervang de batterij elk jaar

Wat doet u bij brand?
1. Redden – breng uzelf en anderen in veiligheid
2. Alarmeren – bel 112
3. Blussen – alleen als het veilig is en de brand klein is

Vluchtroute:
• Zorg dat u altijd weet hoe u het gebouw kunt verlaten
• Gebruik nooit de lift bij brand – neem de trap

Meer informatie: www.brandweer.nl`,
    questions: [
      { question: "Wat doet u als er een pan met brandend vet op het vuur staat?", options: ["Water erover gooien", "De kraan gebruiken", "Een deksel of blusdeken gebruiken", "De pan naar buiten brengen"], correct: "Een deksel of blusdeken gebruiken" },
      { question: "Hoe vaak moet u de rookmelder testen?", options: ["Elke week", "Elke maand", "Elk jaar", "Elke 5 jaar"], correct: "Elke maand" },
      { question: "Wat is de eerste stap bij brand?", options: ["Bellen naar 112", "Blussen", "Redden – uzelf en anderen in veiligheid brengen", "De lift nemen"], correct: "Redden – uzelf en anderen in veiligheid brengen" },
      { question: "Waarom mag u de lift niet gebruiken bij brand?", options: ["De lift is te langzaam", "De lift kan uitvallen en u vastzetten", "De lift gaat automatisch naar de begane grond", "De lift is altijd bezet"], correct: "De lift kan uitvallen en u vastzetten" }
    ]
  },

  // ─── WERK / ARBEIDSRECHT ──────────────────────────────────────────────────
  {
    id: 38,
    title: '⚖️ Informatie: Uw Rechten als Werknemer',
    text: `FNV Vakbond – Informatie voor werknemers
www.fnv.nl

Uw rechten als werknemer in Nederland

Als u in Nederland werkt, heeft u rechten. Dit geldt voor alle werknemers, ook voor mensen met een tijdelijk contract of een verblijfsvergunning.

Minimumloon:
Iedereen van 21 jaar en ouder heeft recht op het wettelijk minimumloon. In 2024 is dit:
• €13,27 bruto per uur (fulltime)
• Jongeren (15–20 jaar) krijgen een percentage hiervan

Vakantiedagen:
U heeft recht op minimaal 4 keer uw werkweek aan vakantiedagen per jaar. Werkt u 5 dagen per week? Dan heeft u recht op minimaal 20 vakantiedagen.

Ziek op het werk:
Als u ziek bent, heeft u recht op minimaal 70% van uw loon. De eerste 2 jaar betaalt uw werkgever dit. Daarna kunt u een WIA-uitkering aanvragen bij het UWV.

Ontslag:
Uw werkgever mag u niet zomaar ontslaan. Er zijn regels:
• Uw werkgever moet een reden opgeven
• Bij ontslag heeft u recht op een transitievergoeding (ontslagvergoeding)
• U kunt bezwaar maken bij het UWV of de kantonrechter

Zwangerschap:
Vrouwen hebben recht op 16 weken betaald zwangerschapsverlof.

Klachten?
• Bel FNV: 0900 – 9690
• Of ga naar fnv.nl voor juridisch advies`,
    questions: [
      { question: "Hoeveel is het minimumloon per uur voor iemand van 21 jaar in 2024?", options: ["€11,27", "€12,27", "€13,27", "€14,27"], correct: "€13,27" },
      { question: "Hoeveel vakantiedagen heeft u minimaal als u 5 dagen per week werkt?", options: ["10 dagen", "15 dagen", "20 dagen", "25 dagen"], correct: "20 dagen" },
      { question: "Hoeveel weken zwangerschapsverlof heeft een vrouw recht op?", options: ["10 weken", "12 weken", "14 weken", "16 weken"], correct: "16 weken" },
      { question: "Wat heeft u recht op bij ontslag?", options: ["Alleen uw laatste salaris", "Een transitievergoeding", "Automatisch een WW-uitkering", "Niets, ontslag is altijd toegestaan"], correct: "Een transitievergoeding" }
    ]
  },

  // ─── BIBLIOTHEEK / VRIJE TIJD ──────────────────────────────────────────────
  {
    id: 39,
    title: '📚 Informatie: De Bibliotheek',
    text: `Bibliotheek Utrecht
Neude 11, 3512 AE Utrecht
Tel: 030 – 286 14 00
www.bibliotheekutrecht.nl

De Bibliotheek – voor iedereen!

De bibliotheek is een openbare voorziening. Iedereen is welkom, ook zonder lidmaatschap. Als u lid bent, kunt u boeken, tijdschriften en films lenen.

Openingstijden hoofdlocatie (Neude):
• Maandag: 10:00–20:00
• Dinsdag t/m vrijdag: 10:00–20:00
• Zaterdag: 10:00–17:00
• Zondag: 12:00–17:00

Lid worden:
• Volwassenen (18+): €47 per jaar
• Jongeren (t/m 17 jaar): GRATIS
• 65+: €32 per jaar
• Studenten: €32 per jaar

Wat kunt u lenen?
• Boeken (max. 10 tegelijk, 3 weken)
• Films en series (max. 5, 1 week)
• E-books en luisterboeken (via de app)
• Tijdschriften

Te laat terugbrengen?
U betaalt €0,15 per dag per item.

Gratis diensten (ook zonder lidmaatschap):
• Internettoegang en computers gebruiken
• Kranten en tijdschriften lezen in de bibliotheek
• Taallessen volgen (voor mensen die NT2 leren)
• Hulp bij digitale vaardigheden (bijv. DigiD aanvragen)

Bibliotheekpas kwijt?
Meld dit direct en vraag een nieuwe pas aan voor €5.`,
    questions: [
      { question: "Hoeveel kost een lidmaatschap voor een 65-plusser per jaar?", options: ["Gratis", "€32", "€47", "€55"], correct: "€32" },
      { question: "Hoeveel boeken mag u tegelijk lenen?", options: ["5 boeken", "8 boeken", "10 boeken", "15 boeken"], correct: "10 boeken" },
      { question: "Wat betaalt u als u een boek te laat terugbrengt?", options: ["€0,10 per dag", "€0,15 per dag", "€0,25 per dag", "€0,50 per dag"], correct: "€0,15 per dag" },
      { question: "Wat kunt u GRATIS doen zonder lidmaatschap?", options: ["Boeken lenen", "Films lenen", "Internettoegang gebruiken", "E-books downloaden"], correct: "Internettoegang gebruiken" }
    ]
  },

  // ─── MILIEU / AFVAL ───────────────────────────────────────────────────────
  {
    id: 40,
    title: '♻️ Informatie: Afval Scheiden in Nederland',
    text: `Gemeente Amsterdam – Dienst Afval en Grondstoffen
www.amsterdam.nl/afval

Afval scheiden – zo doet u het

In Nederland scheiden we afval. Dit is goed voor het milieu. Hieronder leest u welk afval u waar gooit.

GFT-afval (groene container of bak):
Groente-, fruit- en tuinafval. Bijvoorbeeld:
• Groente- en fruitschillen
• Koffiefilters en theezakjes
• Gemaaid gras en bladeren

Papier en karton (blauwe container):
• Kranten, tijdschriften, folders
• Dozen en karton (plat vouwen)
• Niet: pizza dozen met vetplekken

Plastic, metaal en drinkpakken – PMD (gele zak of container):
• Plastic flessen en bakjes
• Blikjes
• Pak melk, vruchtensap etc.

Restafval (grijze container):
Alles wat niet gescheiden kan worden.

Glas:
Breng glas naar de glasbak in de buurt. Gooi glas niet in de grijze container.

Groot afval / grofvuil:
Grote spullen (meubels, witgoed) kunt u:
• Gratis laten ophalen via amsterdam.nl
• Zelf brengen naar het afvalpunt (milieuperron)

Gevaarlijk afval:
Batterijen, verf en medicijnen horen niet bij het restafval. Breng ze naar de apotheek (medicijnen) of het afvalpunt.

Boete:
Als u afval verkeerd weggooidt, kunt u een boete krijgen van €140.`,
    questions: [
      { question: "Waar gooit u een lege melkpak?", options: ["Bij het GFT-afval", "Bij het papier en karton", "Bij het PMD (gele zak)", "Bij het restafval"], correct: "Bij het PMD (gele zak)" },
      { question: "Waar brengt u lege medicijnen naartoe?", options: ["Bij het restafval", "Naar de glasbak", "Naar de apotheek", "Naar het GFT-bak"], correct: "Naar de apotheek" },
      { question: "Hoeveel boete krijgt u als u afval verkeerd weggooit?", options: ["€50", "€85", "€140", "€200"], correct: "€140" },
      { question: "Waar gooit u pizzadozen met vetplekken?", options: ["Bij papier en karton", "Bij PMD", "Bij GFT", "Bij het restafval"], correct: "Bij het restafval" }
    ]
  }

];


