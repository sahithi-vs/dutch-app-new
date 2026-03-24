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
  },

  {
    id: 7,
    title: "Een Dag bij de Kapper",
    text: `Anna heeft al drie maanden haar haar niet laten knippen. Ze vindt dat het te lang is geworden. Op maandag belt ze naar de kapper om een afspraak te maken. "Kan ik donderdagmiddag om drie uur komen?" vraagt ze.  
"Ja hoor," zegt de kapster. "Wat wilt u laten doen?"  
"Alleen knippen, alstublieft."  

Op donderdag gaat Anna op tijd naar de kapper. Ze wacht even in de stoel en pakt een tijdschrift. De kapster knipt tien centimeter van haar haar. "Zo, wat vind je?" vraagt ze.  
"Mooi, dank je wel!" zegt Anna. Ze betaalt 25 euro en maakt meteen een nieuwe afspraak over zes weken.`,
    questions: [
      { question: "Waarom gaat Anna naar de kapper?", options: ["Ze wil haar haar verven", "Haar haar is te lang", "Ze wil een nieuwe baan", "Ze gaat naar een feest"], correct: "Haar haar is te lang" },
      { question: "Hoeveel betaalt Anna?", options: ["15 euro", "20 euro", "25 euro", "30 euro"], correct: "25 euro" },
      { question: "Wanneer maakt Anna een nieuwe afspraak?", options: ["Over zes weken", "Volgende week", "Over drie maanden", "Over zes maanden"], correct: "Over zes weken" }
    ]
  },
  {
    id: 8,
    title: "Een Nieuwe Fiets",
    text: `Ali woont in Utrecht en gaat elke dag met de fiets naar zijn werk. Gisteren brak zijn ketting en hij kon niet verder fietsen. Daarom ging hij naar de fietsenwinkel.  

"Kan ik de fiets vandaag laten repareren?" vroeg Ali.  
"Dat lukt niet meer vandaag," zei de monteur. "Maar morgen om elf uur is hij klaar."  

De volgende dag haalt Ali zijn fiets op. De monteur heeft de ketting vervangen en de banden opgepompt. "Dat is dan 35 euro," zegt de monteur. Ali betaalt met zijn pinpas en fietst blij naar huis.`,
    questions: [
      { question: "Waarom gaat Ali naar de fietsenwinkel?", options: ["Hij wil een nieuwe fiets kopen", "Zijn ketting is kapot", "Hij wil de banden oppompen", "Hij zoekt werk"], correct: "Zijn ketting is kapot" },
      { question: "Wanneer is de fiets klaar?", options: ["Vandaag", "Morgen", "Volgende week", "Vanavond"], correct: "Morgen" },
      { question: "Hoe betaalt Ali?", options: ["Met contant geld", "Met pinpas", "Met creditcard", "Met een cadeaubon"], correct: "Met pinpas" }
    ]
  },
  {
    id: 9,
    title: "De Verjaardag van Noor",
    text: `Noor is op 12 mei jarig. Ze wordt dertig jaar. Ze nodigt haar vrienden uit voor een klein feestje in haar tuin.  
Ze koopt taart, bloemen en ballonnen. Haar moeder helpt met de koffie en thee.  

Om drie uur komen de gasten. Iedereen feliciteert haar. "Gefeliciteerd, Noor!"  
Ze krijgt cadeaus: een boek, een sjaal en een plant. ’s Avonds eten ze pizza en luisteren naar muziek.  

Noor vindt het een gezellige dag en bedankt iedereen voor het komen.`,
    questions: [
      { question: "Hoe oud wordt Noor?", options: ["25", "28", "30", "35"], correct: "30" },
      { question: "Wat krijgt Noor cadeau?", options: ["Een fiets", "Een boek, een sjaal en een plant", "Een taart", "Een ring"], correct: "Een boek, een sjaal en een plant" },
      { question: "Waar viert Noor haar verjaardag?", options: ["In het park", "In haar tuin", "In een restaurant", "Bij haar moeder"], correct: "In haar tuin" }
    ]
  },
  {
    id: 10,
    title: "De Nieuwe Werkdag",
    text: `Milan begint vandaag bij zijn nieuwe baan in een kantoor in Den Haag. Hij is een beetje zenuwachtig.  
Hij neemt de trein om 8:00 en komt op tijd aan. Zijn nieuwe collega’s zijn vriendelijk.  

"Welkom bij het team!" zegt zijn baas. "Vandaag krijg je uitleg over het werk."  
Milan krijgt een laptop en een badge. In de middag eet hij in de kantine met andere collega's.  

Aan het eind van de dag zegt hij: "Het was een goede eerste dag!"`,
    questions: [
      { question: "Waar werkt Milan?", options: ["In Rotterdam", "In Amsterdam", "In Den Haag", "In Utrecht"], correct: "In Den Haag" },
      { question: "Hoe reist Milan naar zijn werk?", options: ["Met de auto", "Met de trein", "Met de bus", "Met de fiets"], correct: "Met de trein" },
      { question: "Wat krijgt Milan op zijn eerste dag?", options: ["Een telefoon en pen", "Een laptop en badge", "Een jas", "Een kop koffie"], correct: "Een laptop en badge" }
    ]
  },
  {
    id: 11,
    title: "Een Bezoek aan de Bibliotheek",
    text: `Sara leest graag boeken, maar ze wil geen nieuwe kopen. Daarom gaat ze op zaterdag naar de bibliotheek.  
Ze maakt een lidmaatschapspas. Dat kost 10 euro per jaar.  

Ze mag drie boeken tegelijk lenen en moet ze binnen vier weken terugbrengen.  
Ze kiest twee romans en één kookboek.  

Thuis begint ze meteen met lezen. Ze is blij met haar nieuwe boeken.`,
    questions: [
      { question: "Waarom gaat Sara naar de bibliotheek?", options: ["Ze wil werken", "Ze wil boeken lenen", "Ze wil koffie drinken", "Ze zoekt een baan"], correct: "Ze wil boeken lenen" },
      { question: "Hoeveel boeken mag Sara lenen?", options: ["Eén", "Twee", "Drie", "Vier"], correct: "Drie" },
      { question: "Hoeveel kost de pas per jaar?", options: ["Gratis", "5 euro", "10 euro", "15 euro"], correct: "10 euro" }
    ]
  },
  {
    id: 12,
    title: "De Markt op Zaterdag",
    text: `Elke zaterdag gaat Pieter naar de markt in het centrum. Hij koopt altijd groente, fruit en kaas.  
Vandaag koopt hij appels, aardappels en jonge kaas.  

"Hoeveel kost dit?" vraagt hij.  
"Dat is acht euro in totaal," zegt de verkoper. Pieter betaalt contant en krijgt een tasje cadeau.  

Daarna drinkt hij koffie bij een kraampje. Hij vindt de sfeer op de markt gezellig.`,
    questions: [
      { question: "Wat koopt Pieter op de markt?", options: ["Vis en brood", "Groente, fruit en kaas", "Bloemen en vlees", "Snoep"], correct: "Groente, fruit en kaas" },
      { question: "Hoeveel betaalt Pieter?", options: ["6 euro", "8 euro", "10 euro", "12 euro"], correct: "8 euro" },
      { question: "Wat doet Pieter na het winkelen?", options: ["Hij gaat naar huis", "Hij drinkt koffie", "Hij gaat naar de supermarkt", "Hij koopt bloemen"], correct: "Hij drinkt koffie" }
    ]
  },
  {
    id: 13,
    title: "Een Ongeluk met de Bus",
    text: `Op weg naar zijn werk zit Tom in de bus. Plotseling remt de bus hard. Iedereen schrikt, maar niemand is gewond.  
Een auto reed te snel en de chauffeur moest stoppen.  

De politie komt om de situatie te controleren. Na twintig minuten mogen ze verder rijden.  
Tom komt een beetje te laat op zijn werk, maar zijn baas begrijpt het.`,
    questions: [
      { question: "Waarom remt de bus plotseling?", options: ["De chauffeur had pauze", "Een auto reed te snel", "Er was file", "Er was een stoplicht"], correct: "Een auto reed te snel" },
      { question: "Wat doet de politie?", options: ["Ze helpt de chauffeur", "Ze controleert de situatie", "Ze schrijft een boete", "Ze rijdt weg"], correct: "Ze controleert de situatie" },
      { question: "Wat vindt de baas van Tom?", options: ["Hij is boos", "Hij begrijpt het", "Hij zegt niets", "Hij geeft straf"], correct: "Hij begrijpt het" }
    ]
  },
  {
    id: 14,
    title: "De Doktersafspraak",
    text: `Fatima voelt zich al twee dagen niet goed. Ze heeft keelpijn en een beetje koorts.  
Ze belt de huisarts en krijgt een afspraak om 10:00 uur.  

In de praktijk onderzoekt de dokter haar keel. "Het is een kleine infectie," zegt hij.  
Ze krijgt medicijnen en moet veel water drinken. Na drie dagen voelt Fatima zich beter.`,
    questions: [
      { question: "Waarom gaat Fatima naar de dokter?", options: ["Ze heeft buikpijn", "Ze heeft keelpijn", "Ze heeft hoofdpijn", "Ze wil medicijnen"], correct: "Ze heeft keelpijn" },
      { question: "Wat zegt de dokter?", options: ["Ze moet naar het ziekenhuis", "Het is een kleine infectie", "Ze is gezond", "Ze heeft griep"], correct: "Het is een kleine infectie" },
      { question: "Wat moet Fatima doen?", options: ["Veel water drinken", "Sporten", "Rust nemen", "Werken"], correct: "Veel water drinken" }
    ]
  },
  {
    id: 15,
    title: "Een Weekend aan Zee",
    text: `Bas en zijn vriendin Emma gaan in het weekend naar Scheveningen. Ze slapen in een klein hotel dicht bij het strand.  
Zaterdag maken ze een lange wandeling en eten ze vis in een restaurant.  

’s Avonds kijken ze de zonsondergang. Op zondag regent het een beetje, maar ze drinken koffie in een café.  
Ze vinden het een leuk en ontspannen weekend.`,
    questions: [
      { question: "Waar gaan Bas en Emma naartoe?", options: ["Naar Amsterdam", "Naar Scheveningen", "Naar Utrecht", "Naar Rotterdam"], correct: "Naar Scheveningen" },
      { question: "Wat doen ze op zaterdagavond?", options: ["Ze kijken televisie", "Ze wandelen", "Ze kijken de zonsondergang", "Ze gaan winkelen"], correct: "Ze kijken de zonsondergang" },
      { question: "Wat doen ze op zondag?", options: ["Ze zwemmen", "Ze drinken koffie", "Ze gaan winkelen", "Ze rijden naar huis"], correct: "Ze drinken koffie" }
    ]
  },
  {
    id: 16,
    title: "De Eerste Nederlandse Les",
    text: `Maria is nieuw in Nederland en wil Nederlands leren. Ze schrijft zich in voor een taalcursus bij het buurthuis.  
De lessen zijn elke dinsdag en donderdag van 19:00 tot 21:00.  

De docent heet meneer de Vries. Hij legt de woorden rustig uit.  
Maria vindt het leuk om nieuwe mensen te ontmoeten en ze oefent elke dag thuis.  
Na vier weken kan ze al kleine gesprekken voeren in het Nederlands.`,
    questions: [
      { question: "Waarom schrijft Maria zich in voor een cursus?", options: ["Ze wil Engels leren", "Ze wil Nederlands leren", "Ze zoekt werk", "Ze wil vrienden maken"], correct: "Ze wil Nederlands leren" },
      { question: "Wanneer zijn de lessen?", options: ["Elke dag", "Elke dinsdag en donderdag", "Alleen op zaterdag", "Op maandag en woensdag"], correct: "Elke dinsdag en donderdag" },
      { question: "Wie geeft de lessen?", options: ["Meneer de Jong", "Meneer de Vries", "Mevrouw Jansen", "Mevrouw Pieters"], correct: "Meneer de Vries" }
    ]
  },
  
  {
    id: 1,
    title: 'De Nieuwe Buurman',
    text: `Jan woont in een klein huis in Amsterdam. Hij heeft een tuin vol bloemen en een kleine schuur. Op maandag krijgt hij een nieuwe buurman. De buurman heet Piet. Hij is jong en vriendelijk.

"Hallo, ik ben Piet," zegt de man. "Welkom in de buurt!" zegt Jan. "Wil je koffie of thee?"  
"Ja, graag een kopje koffie," antwoordt Piet. Ze gaan in de keuken zitten en praten.

"Waar kom je vandaan?" vraagt Jan. "Ik kom uit Rotterdam," zegt Piet. "Ik werk nu in Amsterdam. Ik ben leraar op een school."  
"Leuk!" zegt Jan. "Ik werk op een kantoor in het centrum."

Piet heeft nog geen meubels in zijn nieuwe flat. "Kun je me helpen?" vraagt hij.  
"Natuurlijk!" zegt Jan. Ze gaan samen naar de winkel. Ze kopen een bed, een bank, een tafel en vier stoelen. Er is een goede aanbieding, dus alles is niet te duur.

De volgende dag helpt Jan met verhuizen. De flat is op de derde verdieping. Er is geen lift, dus ze moeten de trap nemen. Het is zwaar werk, maar na twee uur zijn ze klaar. Piet is erg blij.

"Dank je wel voor je hulp," zegt Piet. "Graag gedaan," zegt Jan. "Kom vanavond bij ons eten. Mijn vrouw kookt lekker!"  
Die avond eten ze samen aardappels, groente en vlees. Het is gezellig. Ze praten over werk, familie en hobby’s.

Vanaf die dag zijn Jan en Piet goede vrienden. Ze drinken vaak samen koffie. Soms gaan ze naar het park of kijken ze voetbal op televisie. Jan is blij met zo’n aardige buurman.`,
    questions: [
      { question: "Waar woont Jan?", options: ["Rotterdam", "Amsterdam", "Utrecht", "Den Haag"], correct: "Amsterdam" },
      { question: "Wat is het beroep van Piet?", options: ["Dokter", "Leraar", "Kok", "Advocaat"], correct: "Leraar" },
      { question: "Op welke verdieping woont Piet?", options: ["Eerste", "Tweede", "Derde", "Vierde"], correct: "Derde" },
      { question: "Wat eten Jan en Piet samen?", options: ["Pizza", "Pasta", "Aardappels met groente en vlees", "Rijst"], correct: "Aardappels met groente en vlees" }
    ]
  },
  {
    id: 2,
    title: 'Een Dagje naar het Strand',
    text: `Het is zaterdag en het weer is prachtig. De zon schijnt en het is warm. Lisa wil naar het strand. Ze belt haar vriendin Sophie.  
"Heb je zin om naar zee te gaan?" vraagt Lisa.  
"Ja, leuk!" zegt Sophie. "Om hoe laat?"  
"Om tien uur," zegt Lisa. "Tot straks!"

Lisa pakt haar tas. Ze neemt een handdoek, een boek, water en fruit mee. Ze trekt haar blauwe rok aan en zet haar zonnebril op.  
Om kwart voor tien staat Sophie voor de deur. "Ben je klaar?" vraagt ze. "Ja, laten we gaan!" zegt Lisa.

Ze nemen de trein naar de kust. In de trein is het druk. Veel mensen gaan ook naar het strand. Lisa en Sophie vinden twee plaatsen bij het raam. Ze kijken naar buiten en zien huizen, weilanden met koeien en schapen, en kleine dorpen.

Na een uur komen ze aan. Het strand is groot en mooi. Kinderen spelen met een bal, en sommige mensen zwemmen. Lisa en Sophie zoeken een rustige plek en leggen hun handdoeken neer.  
"Het water lijkt koud," zegt Sophie. "Zullen we eerst zonnen?"  
"Goed idee," zegt Lisa.

Ze liggen in de zon, lezen en eten fruit. Later, om drie uur, gaan ze zwemmen. Het water is fris, maar lekker. Daarna wandelen ze langs het water en zoeken schelpen.  
Om vijf uur nemen ze de trein terug naar huis. "Wat een fijne dag!" zegt Sophie. "Ja, dat moeten we vaker doen!" zegt Lisa. Thuis is Lisa moe maar gelukkig.`,
    questions: [
      { question: "Welke dag gaan Lisa en Sophie naar het strand?", options: ["Vrijdag", "Zaterdag", "Zondag", "Maandag"], correct: "Zaterdag" },
      { question: "Hoe laat vertrekt de trein?", options: ["Half tien", "Tien uur", "Kwart voor tien", "Kwart over tien"], correct: "Tien uur" },
      { question: "Wat zien ze vanuit de trein?", options: ["Bergen", "Weiden met koeien en schapen", "De zee", "Alleen huizen"], correct: "Weiden met koeien en schapen" },
      { question: "Hoe laat gaan ze zwemmen?", options: ["Tien uur", "Twaalf uur", "Drie uur", "Vijf uur"], correct: "Drie uur" }
    ]
  },
  {
    id: 3,
    title: 'De Eerste Dag op School',
    text: `Mohammed is nieuw in Nederland. Hij komt uit Syrië en woont nu met zijn familie in Utrecht. Vandaag is zijn eerste dag op de Nederlandse school. Hij is een beetje zenuwachtig, maar ook blij.

Om acht uur vertrekt hij naar school. De school is niet ver, hij loopt tien minuten. Bij de ingang staat een vrouw. "Goedemorgen!" zegt ze. "Ik ben mevrouw De Vries, je docent Nederlands. Jij bent Mohammed, toch?"  
"Ja, dat klopt," zegt Mohammed.

Ze gaan samen naar het lokaal. In de klas zitten twaalf cursisten uit verschillende landen: Polen, Turkije, Marokko, China en Roemenië. Iedereen zegt "hallo" tegen Mohammed. Hij voelt zich welkom.

"Vandaag leren we over familie," zegt mevrouw De Vries. Ze schrijft woorden op het bord: vader, moeder, broer, zus, opa, oma. "Wie kan een zin maken?" vraagt ze.  
Een meisje zegt: "Ik heb twee broers en één zus." "Heel goed!" zegt de docent.

Na een uur is het pauze. Mohammed praat met een jongen die Ahmed heet. Ahmed komt ook uit Syrië. "Hoe vind je de les?" vraagt Ahmed. "Moeilijk, maar interessant," zegt Mohammed. "Ja, Nederlands is niet makkelijk, maar de docent helpt goed," zegt Ahmed.

Na de pauze oefenen ze met luisteren en spreken. Mohammed maakt opdrachten met andere cursisten. Om twaalf uur is de les voorbij. Mohammed is moe maar tevreden. Thuis vertelt hij zijn vrouw alles over zijn eerste dag. "Morgen ga ik weer!" zegt hij met een glimlach.`,
    questions: [
      { question: "Uit welk land komt Mohammed?", options: ["Turkije", "Marokko", "Syrië", "Egypte"], correct: "Syrië" },
      { question: "Hoe heet de docent Nederlands?", options: ["Mevrouw De Vries", "Mevrouw Jansen", "Mevrouw Bakker", "Mevrouw Peters"], correct: "Mevrouw De Vries" },
      { question: "Hoeveel cursisten zitten er in de klas?", options: ["Tien", "Twaalf", "Vijftien", "Acht"], correct: "Twaalf" },
      { question: "Over welk onderwerp gaat de eerste les?", options: ["Eten", "Familie", "Werk", "Huisdieren"], correct: "Familie" }
    ]
  },
  {
    id: 4,
    title: 'Boodschappen Doen',
    text: `Fatima kijkt in de koelkast. Er is bijna niets meer: geen melk, geen kaas en geen groente. "Ik ga naar de supermarkt," zegt ze tegen haar man Hassan.

De supermarkt is groot en druk. Fatima pakt een winkelwagentje. Eerst gaat ze naar de groenteafdeling. Ze koopt tomaten, komkommers, uien en aardappels. Daarna haalt ze brood, melk, yoghurt en kaas. Hassan houdt van kaas op zijn boterham!

Bij het vlees ziet ze dat kip in de aanbieding is. "Perfect!" denkt ze. "Vanavond maak ik kip met rijst."  
Ze koopt ook fruit: appels en bananen. De kinderen eten dat graag. Appels kosten twee euro per kilo, bananen maar één euro vijftig.

In de gang ziet ze drop. Hassan vindt dat lekker, maar Fatima niet. Toch koopt ze het voor hem. Ze neemt ook koekjes en een taart voor zondag, als de familie op bezoek komt.  
Bij de dranken pakt ze water, thee en sap. Het wagentje is vol!

Bij de kassa zegt de verkoper: "Dat is zestig euro en vijftig cent." Fatima betaalt met haar pinpas en krijgt de bon. Met vier volle tassen loopt ze naar huis. Het is zwaar, maar ze is tevreden.  
Thuis zet ze alles in de kasten. Hassan komt binnen. "Voor mij?" vraagt hij als hij de drop ziet. Fatima lacht. "Ja, voor jou!" Ze is moe maar blij dat het klaar is.`,
    questions: [
      { question: "Wat is er bijna niet meer in de koelkast?", options: ["Alleen brood", "Melk, kaas en groente", "Alleen vlees", "Alleen fruit"], correct: "Melk, kaas en groente" },
      { question: "Wat is er in de aanbieding?", options: ["Vis", "Kip", "Kaas", "Brood"], correct: "Kip" },
      { question: "Hoeveel kosten de bananen per kilo?", options: ["Eén euro", "Één euro vijftig", "Twee euro", "Drie euro"], correct: "Één euro vijftig" },
      { question: "Hoeveel betaalt Fatima in totaal?", options: ["Vijftig euro", "Zestig euro en vijftig cent", "Zeventig euro", "Vijftig euro en vijftig cent"], correct: "Zestig euro en vijftig cent" }
    ]
  },
  {
    id: 5,
    title: 'Bij de Dokter',
    text: `Tom voelt zich niet goed. Hij heeft keelpijn, hoest veel en heeft koorts. Zijn vrouw zegt: "Je moet naar de huisarts gaan."  
Tom belt de praktijk. "Goedemiddag, met de praktijk van dokter Jansen," zegt de assistente.  
"Hallo, ik ben Tom Bakker. Ik voel me ziek. Kan ik vandaag nog komen?"  
"Ja, u kunt om drie uur komen," zegt ze.

Om kwart voor drie gaat Tom naar de praktijk. Hij wacht twintig minuten in de wachtkamer. Dan roept de assistente zijn naam.  
Dokter Jansen onderzoekt hem. "Wat zijn uw klachten?" vraagt hij. Tom vertelt alles.  
De dokter kijkt in zijn keel en luistert naar zijn longen. "U heeft griep," zegt hij. "Blijf thuis, rust goed uit en drink veel water en thee."

"Heb ik medicijnen nodig?" vraagt Tom. "Ja," zegt de dokter. "Ik schrijf een recept voor pijn en koorts. Neem drie keer per dag één pil na het eten."  
Tom haalt het recept op bij de apotheek naast de praktijk. De apotheker geeft hem de medicijnen. "Beterschap!" zegt hij.  
Thuis gaat Tom meteen naar bed. Zijn vrouw maakt thee voor hem. Na vier dagen voelt hij zich beter. De koorts is weg. Hij is blij dat hij naar de dokter is gegaan.`,
    questions: [
      { question: "Wat zijn Tom's klachten?", options: ["Hoofdpijn", "Buikpijn", "Keelpijn en hoesten", "Rugpijn"], correct: "Keelpijn en hoesten" },
      { question: "Hoe laat kan Tom naar de dokter komen?", options: ["Twee uur", "Drie uur", "Vier uur", "Vijf uur"], correct: "Drie uur" },
      { question: "Wat heeft Tom volgens de dokter?", options: ["Verkoudheid", "Griep", "Longontsteking", "Allergie"], correct: "Griep" },
      { question: "Hoe vaak moet Tom de pillen innemen?", options: ["Eén keer per dag", "Twee keer per dag", "Drie keer per dag", "Vier keer per dag"], correct: "Drie keer per dag" }
    ]
  },
  {
    id: 6,
    title: 'Een Nieuwe Baan',
    text: `Sarah werkt in een kledingwinkel. Het werk is leuk, maar het salaris is laag. Ze wil graag een andere baan.  
Op internet ziet ze een vacature bij een groot bedrijf. Ze zoeken een verkoopmedewerker. Sarah besluit te solliciteren. Ze schrijft een nette brief en stuurt haar cv.

Twee weken later krijgt ze een telefoontje. "Wij willen graag een sollicitatiegesprek met u," zegt een vrouw. Sarah is blij! Het gesprek is volgende week dinsdag om twee uur.

Sarah bereidt zich goed voor. Ze leest over het bedrijf en oefent haar antwoorden. Op dinsdag draagt ze haar mooiste pak. Ze wil er professioneel uitzien.  
Ze gaat met de trein naar het centrum. Het kantoor ligt naast het station. Om kwart voor twee is ze er al.

In de wachtkamer wacht ze zenuwachtig. Dan komt de heer Van Dijk, de directeur. "Goedemiddag," zegt hij vriendelijk. Ze praten over haar ervaring en haar motivatie. Sarah vertelt rustig over haar werk in de winkel en hoe ze klanten helpt.  
"Wat vindt u belangrijk in een baan?" vraagt hij. "Dat ik kan leren en groeien," zegt Sarah.

Na een uur is het gesprek klaar. "Binnen een week hoort u van ons," zegt de heer Van Dijk. Vijf dagen later krijgt Sarah een e-mail: ze heeft de baan!  
Ze is dolblij. Het salaris is hoger en het werk is interessant. Over drie weken begint ze aan haar nieuwe baan.`,
    questions: [
      { question: "Waar werkt Sarah nu?", options: ["In een restaurant", "In een winkel", "Op kantoor", "In een school"], correct: "In een winkel" },
      { question: "Hoeveel jaar ervaring heeft Sarah?", options: ["Drie jaar", "Vijf jaar", "Zeven jaar", "Tien jaar"], correct: "Vijf jaar" },
      { question: "Wie is de heer Van Dijk?", options: ["De receptionist", "De directeur", "De collega", "De assistent"], correct: "De directeur" },
      { question: "Wanneer hoort Sarah of ze de baan heeft?", options: ["De volgende dag", "Binnen drie dagen", "Binnen een week", "Binnen twee weken"], correct: "Binnen een week" }
    ]
  },
  {
    id: 7,
    title: 'De Trein Missen',
    text: `Het is maandagochtend. Peter moet om negen uur op zijn werk zijn. Maar hij wordt te laat wakker. Zijn telefoon heeft geen alarm gegeven! Het is al half acht.  
"O nee!" roept hij. Hij springt uit bed, doucht snel en kleedt zich aan. Geen tijd voor ontbijt!

Hij rent naar het station. Normaal duurt dat tien minuten, maar nu doet hij er vijf over. De trein vertrekt om kwart voor acht. Peter ziet de trein staan, maar net als hij bij het perron komt, sluiten de deuren.  
"Nee, wacht!" roept hij. Te laat — de trein vertrekt.

Peter is boos op zichzelf. De volgende trein gaat om acht uur. Hij belt zijn baas. "Sorry, ik kom te laat. Ik heb mijn trein gemist."  
"Geen probleem," zegt zijn baas. "Tot straks."

Peter koopt koffie en wacht. In de trein moet hij staan; het is druk. Na veertig minuten komt hij aan. Op kantoor zegt hij: "Sorry dat ik te laat ben."  
"Geen zorgen," zegt zijn collega Anna. "Dat overkomt iedereen wel eens."

De rest van de dag gaat goed. ’s Avonds zet Peter drie alarmen op zijn telefoon. "Dit gebeurt niet nog een keer!" denkt hij.`,
    questions: [
      { question: "Waarom wordt Peter laat wakker?", options: ["Hij is ziek", "Zijn telefoon heeft geen alarm gegeven", "Hij vergeet de tijd", "Hij slaapt door"], correct: "Zijn telefoon heeft geen alarm gegeven" },
      { question: "Hoe laat vertrekt Peters trein?", options: ["Half acht", "Kwart voor acht", "Acht uur", "Kwart over acht"], correct: "Kwart voor acht" },
      { question: "Hoe laat komt Peter op zijn werk aan?", options: ["Negen uur", "Half tien", "Tien uur", "Half elf"], correct: "Half tien" },
      { question: "Hoeveel alarmen zet Peter 's avonds?", options: ["Eén", "Twee", "Drie", "Vier"], correct: "Drie" }
    ]
  },
  {
    id: 8,
    title: 'Op Vakantie',
    text: `Maria en Carlos wonen in Den Haag. Ze hebben twee kinderen: Rosa en Miguel. Het is juli en tijd voor vakantie. De familie gaat kamperen in Frankrijk.

Ze pakken kleding, eten, een tent, slaapzakken en speelgoed in. De auto zit helemaal vol. Op zaterdag vertrekken ze om zes uur ’s ochtends. Het is nog donker, maar de kinderen zijn al wakker en blij.

"Hoe lang rijden we?" vraagt Rosa. "Ongeveer negen uur," zegt Carlos. "Dat is lang!" zegt Miguel.  
Daarom hebben ze spelletjes en snacks meegenomen.

Ze rijden via België naar Frankrijk. Onderweg stoppen ze twee keer: bij een tankstation voor koffie en bij een picknickplaats om te lunchen.  
Om vier uur komen ze aan op de camping bij een groot meer. Er zijn veel bomen en het is rustig. Carlos en Maria zetten de tent op, met hulp van de kinderen.

Daarna gaan ze zwemmen. Het water is koel en schoon. Ze spelen tot zes uur. ’s Avonds kookt Maria spaghetti met tomatensaus. Ze eten buiten en kijken daarna naar de sterren bij het kampvuur.

De volgende dagen wandelen ze, zwemmen en spelen. Twee weken later rijden ze terug naar Nederland. "Wanneer gaan we weer op vakantie?" vraagt Rosa. "Volgend jaar!" zegt Maria. Iedereen is blij. Het was een perfecte vakantie.`,
    questions: [
      { question: "Waar gaat de familie kamperen?", options: ["In België", "In Duitsland", "In Frankrijk", "In Spanje"], correct: "In Frankrijk" },
      { question: "Hoe laat vertrekken ze?", options: ["Vier uur", "Zes uur", "Acht uur", "Tien uur"], correct: "Zes uur" },
      { question: "Wat eten ze op de camping?", options: ["Rijst", "Spaghetti met tomatensaus", "Pizza", "Soep"], correct: "Spaghetti met tomatensaus" },
      { question: "Hoe lang duurt hun vakantie?", options: ["Eén week", "Twee weken", "Drie weken", "Vier weken"], correct: "Twee weken" }
    ]
  },
  {
    id: 9,
    title: 'Een Cadeau voor de Verjaardag',
    text: `Anna’s broer Max is morgen jarig. Hij wordt dertig jaar. Anna wil een cadeau voor hem kopen, maar ze weet niet wat.  
Max houdt van muziek en koken. "Misschien een kookboek?" denkt ze. Maar hij heeft er al veel. "Of een koptelefoon?" Ja, dat is een goed idee!

Na haar werk gaat Anna naar de winkel. Ze bekijkt verschillende koptelefoons. Eén is zwart, één wit en één blauw. De blauwe is het mooist en niet te duur. Ze koopt die en laat hem mooi inpakken.

Thuis schrijft ze een kaart: "Lieve Max, gefeliciteerd met je verjaardag! Veel plezier met je cadeau. Groetjes, Anna." Ze legt het cadeau op tafel.

De volgende dag gaat ze naar Max’ huis. Er zijn veel vrienden en familie. Op tafel staan taart en koffie.  
"Gefeliciteerd!" zegt Anna. "Dank je!" zegt Max blij. Hij pakt haar cadeau uit.  
"Wauw, een koptelefoon! Precies wat ik wilde!" zegt hij.  
Anna glimlacht. Het feest is gezellig en iedereen danst later op muziek. Het was een leuke dag.`,
    questions: [
      { question: "Hoe oud wordt Max?", options: ["25", "28", "30", "32"], correct: "30" },
      { question: "Wat koopt Anna voor Max?", options: ["Een kookboek", "Een koptelefoon", "Een boek", "Een horloge"], correct: "Een koptelefoon" },
      { question: "Welke kleur kiest Anna?", options: ["Zwart", "Wit", "Blauw", "Rood"], correct: "Blauw" },
      { question: "Wat staat er op de kaart?", options: ["Gefeliciteerd!", "Veel succes!", "Fijne vakantie!", "Beterschap!"], correct: "Gefeliciteerd!" }
    ]
  },
  {
    id: 10,
    title: 'De Kapotte Fiets',
    text: `Lisa fietst elke dag naar haar werk. Het is goed voor haar gezondheid en ze vindt het fijn om buiten te zijn.  
Op een ochtend hoort ze onderweg een raar geluid. "Wat is dat?" denkt ze. De ketting van haar fiets valt eraf. Ze stapt af en probeert hem zelf terug te leggen, maar dat lukt niet.

Een man die voorbijloopt vraagt: "Gaat het?"  
"Nee, mijn ketting is kapot," zegt Lisa.  
"Ik kan wel even helpen," zegt hij vriendelijk. Na vijf minuten is de ketting weer goed.  
"Dank u wel!" zegt Lisa. "Geen probleem, fijne dag!" zegt de man.

Lisa komt iets te laat op haar werk, maar haar baas begrijpt het. "Dat kan gebeuren," zegt hij.  
’s Middags gaat Lisa naar de fietsenmaker. "Kunt u mijn fiets nakijken?" vraagt ze.  
"Ja, natuurlijk," zegt de fietsenmaker. "Uw ketting is oud. Ik vervang hem vandaag nog."  
Om vijf uur haalt ze haar fiets op. Hij rijdt weer perfect.

’s Avonds vertelt ze haar vriend over de man die haar hielp. "Wat aardig van hem," zegt hij. Lisa knikt. "Ja, zulke mensen maken je dag beter."`,
    questions: [
      { question: "Wat is er kapot aan Lisa’s fiets?", options: ["Het wiel", "De bel", "De ketting", "Het zadel"], correct: "De ketting" },
      { question: "Wie helpt Lisa op straat?", options: ["Een vrouw", "Een man", "Een kind", "Een politieman"], correct: "Een man" },
      { question: "Wat doet Lisa na haar werk?", options: ["Ze gaat naar de fietsenmaker", "Ze gaat winkelen", "Ze gaat eten", "Ze gaat slapen"], correct: "Ze gaat naar de fietsenmaker" },
      { question: "Wat zegt Lisa aan het einde van de dag?", options: ["Ik ben moe", "Zulke mensen maken je dag beter", "Ik wil een nieuwe fiets", "Het was een slechte dag"], correct: "Zulke mensen maken je dag beter" }
    ]
  

},
{
  id: 14,
  title: 'De Sportclub',
  text: `Hassan wil fitter worden. Hij zit de hele dag op kantoor en beweegt weinig. Zijn arts zegt: "U moet meer sporten. Dat is goed voor uw gezondheid." Hassan besluit zich aan te melden bij een sportclub.

Hij zoekt op internet naar een club in zijn buurt. Hij vindt een voetbalclub die twee keer per week traint: op dinsdag en donderdag om zeven uur. Hassan belt de club. "Kan ik nog lid worden?" vraagt hij.

"Ja, natuurlijk!" zegt de man aan de telefoon. "Kom dinsdagavond langs. We beginnen met een warming-up en daarna spelen we een wedstrijd." Hassan is blij. Hij koopt nieuwe sportschoenen en een trainingspak.

Op dinsdag gaat Hassan naar de sporthal. In de kleedkamer ontmoet hij de andere spelers. Ze stellen zich voor. "Welkom bij het team!" zegt Peter, de trainer. Hij is vriendelijk en heeft geduld.

Ze gaan naar het veld. Eerst doen ze oefeningen om op te warmen. Hassan vindt het zwaar. Hij is niet gewend om te rennen. Na tien minuten doet zijn hoofd pijn en zijn benen zijn moe. Maar hij geeft niet op.

Dan spelen ze een wedstrijd: vijf tegen vijf. Hassan is niet goed in voetballen. Hij mist de bal vaak en valt zelfs een keer. De andere spelers lachen niet. Ze helpen hem. "Niet erg," zegt een collega. "Je wordt beter met oefenen!"

Na een uur is de training afgelopen. Hassan is uitgeput. Zijn hele lichaam doet zeer. Maar hij voelt zich ook goed! Hij heeft hard gewerkt en had plezier. "Kom je donderdag weer?" vraagt Peter. "Ja, zeker!" zegt Hassan.

Thuis vertelt hij zijn vrouw over de training. "Het was moeilijk maar leuk," zegt hij. "Ik ga volgende week weer." Zijn vrouw is trots op hem. "Goed zo! Sporten is gezond."

Hassan traint twee keer per week. Na een maand is hij al fitter. Hij kan langer rennen en speelt beter voetbal. Ook voelt hij zich gezonder. Hij heeft meer energie en slaapt beter.

Na drie maanden heeft zijn team een wedstrijd tegen een ander team. Hassan is zenuwachtig maar opgewonden. Het wordt een spannende wedstrijd. Hassan's team wint met drie tegen twee! Hassan scoort zelfs een doelpunt. Alle spelers zijn blij.

Na de wedstrijd gaan ze samen naar een cafÃ© om te vieren. Hassan heeft nieuwe vrienden gemaakt. "Ik ben blij dat ik ben begonnen met voetballen," denkt hij. "Het was de beste beslissing!"`,
  questions: [
    {
      question: "Waarom wil Hassan sporten?",
      options: ["Hij verveelt zich", "Zijn arts adviseert het", "Hij wil afvallen", "Hij houdt van voetbal"],
      correct: "Zijn arts adviseert het"
    },
    {
      question: "Hoe vaak traint de club per week?",
      options: ["Eén keer", "Twee keer", "Drie keer", "Vier keer"],
      correct: "Twee keer"
    },
    {
      question: "Hoe voelt Hassan zich na de eerste training?",
      options: ["Alleen moe", "Uitgeput maar goed", "Verdrietig", "Boos"],
      correct: "Uitgeput maar goed"
    },
    {
      question: "Wat gebeurt er na drie maanden?",
      options: ["Hassan stopt met sporten", "Ze winnen een wedstrijd en Hassan scoort", "Hassan wordt geblesseerd", "De club stopt"],
      correct: "Ze winnen een wedstrijd en Hassan scoort"
    }
  ]
},
{
  id: 15,
  title: 'Verloren op het Station',
  text: `Fatima en haar dochter Layla zijn op het station. Ze wachten op de trein naar Amsterdam. Layla is zes jaar oud. Ze is nieuwsgierig en wil alles zien. "Blijf bij me," zegt Fatima tegen Layla.

Het station is druk. Overal zijn mensen. Fatima koopt twee kaartjes bij de automaat. Ze stopt haar pinpas erin en typt de pincode in. Dan drukt ze op het scherm om de kaartjes te printen.

Plotseling merkt Fatima dat Layla weg is. Ze kijkt om zich heen. "Layla! Waar ben je?" roept ze. Maar er is geen antwoord. Fatima raakt in paniek. Haar hart klopt snel.

Ze loopt door het station en zoekt overal. Ze vraagt aan mensen: "Heeft u een klein meisje gezien? Ze draagt een rode jas en heeft blond haar." Niemand heeft Layla gezien.

Fatima rent naar de balie. "Help alstublieft!" zegt ze tegen de medewerker. "Mijn dochter is verdwenen!" De medewerker blijft kalm. "Maak u geen zorgen. Dit gebeurt vaak. We vinden haar. Hoe ziet uw dochter eruit?"

Fatima beschrijft Layla: "Ze is zes jaar, heeft blond haar, en draagt een rode jas en een spijkerbroek." De medewerker maakt een melding via de luidspreker: "Layla, kom alsjeblieft naar de balie. Je moeder zoekt je."

Fatima wacht bij de balie. Ze is ontzettend bezorgd. Haar handen trillen. Na vijf minuten hoort ze een stem: "Mama!" Layla komt aanrennen. Een vriendelijke meneer loopt achter haar.

"Ik heb haar gevonden bij de speelhoek," zegt de man. "Ze was aan het spelen en was de weg kwijt." Fatima knielt neer en omhelst Layla stevig. "O, Layla! Ik was zo bang! Je moet altijd bij me blijven!"

Layla huilt een beetje. "Sorry mama. Ik zag een mooi speelgoed en wilde het bekijken." Fatima veegt Layla's tranen weg. "Het is goed. Maar beloof me dat je nooit meer wegloopt."

Fatima bedankt de man hartelijk. "Dank u wel voor uw hulp!" zegt ze. "Graag gedaan," zegt de man. "Pas goed op haar." Hij glimlacht en loopt weg.

De medewerker geeft Fatima een folder over veiligheid op het station. "Hier staan tips in," zegt hij. "Als u met kinderen reist, is het handig om toestemming te vragen voor een speciale band met uw telefoonnummer erop."

Fatima en Layla lopen hand in hand naar het perron. De trein komt eraan. Ze stappen in en zoeken een zitplaats. "Vergeet niet: blijf altijd bij mama," zegt Fatima nog een keer. Layla knikt. "Ja, mama. Ik beloof het."`,
  questions: [
    {
      question: "Hoe oud is Layla?",
      options: ["Vier jaar", "Vijf jaar", "Zes jaar", "Zeven jaar"],
      correct: "Zes jaar"
    },
    {
      question: "Wat draagt Layla?",
      options: ["Een blauwe jurk", "Een rode jas en spijkerbroek", "Een groene trui", "Een zwarte jas"],
      correct: "Een rode jas en spijkerbroek"
    },
    {
      question: "Waar vinden ze Layla?",
      options: ["Op het perron", "Bij de speelhoek", "In de trein", "Bij de uitgang"],
      correct: "Bij de speelhoek"
    },
    {
      question: "Wat krijgt Fatima van de medewerker?",
      options: ["Geld", "Een folder over veiligheid", "Een cadeau voor Layla", "Een nieuw kaartje"],
      correct: "Een folder over veiligheid"
    }
  ]
},
{
  id: 16,
  title: 'De Afspraak bij de Dokter',
  text: `Mehmet voelt zich niet lekker. Hij heeft al drie dagen hoofdpijn en koorts. Ook heeft hij last van zijn keel. Zijn vrouw zegt: "Je moet naar de huisarts gaan. Dit is niet normaal."

Mehmet belt de praktijk. De assistente neemt op. "Goedemiddag, met dokter Jansen. Waarmee kan ik u helpen?" "Ik voel me ziek," zegt Mehmet. "Ik heb hoofdpijn, koorts en keelpijn. Kan ik vandaag nog komen?"

De assistente kijkt in het rooster. "Een momentje alstublieft." Na een paar seconden zegt ze: "U kunt om vier uur komen. Past dat?" "Ja, perfect," zegt Mehmet. "Dank u wel."

Om kwart voor vier gaat Mehmet naar de praktijk. Hij zit in de wachtkamer. Er zijn meer patiÃ«nten: een vrouw met een baby, een oude man en een jong meisje. Mehmet wacht twintig minuten. Dan roept de assistente zijn naam.

Hij gaat naar de spreekkamer. Dokter Jansen zit achter zijn bureau. "Dag meneer," zegt hij vriendelijk. "Wat zijn uw klachten?" Mehmet vertelt over zijn hoofdpijn, koorts en keelpijn. "Het is al drie dagen zo," zegt hij.

De dokter onderzoekt hem. Hij meet zijn temperatuur met een thermometer. "U heeft 38,5 graden koorts," zegt hij. Dan kijkt hij in Mehmets keel met een lampje. "Uw keel is erg rood. U heeft een infectie."

"Is het ernstig?" vraagt Mehmet bezorgd. "Nee, maak u geen zorgen," zegt de dokter rustig. "Het is een gewone keelinfectie. Veel mensen hebben dit in de winter. U heeft medicijnen nodig."

Dokter Jansen schrijft een recept. "Neem deze pillen drie keer per dag," zegt hij. "Na het eten, met water. Ook moet u veel rusten en veel drinken. Thee met honing is goed voor uw keel."

"Hoelang duurt het voor ik beter ben?" vraagt Mehmet. "Ongeveer vijf tot zeven dagen," antwoordt de dokter. "Als het na een week niet beter is, bel me dan opnieuw. Dan kom ik bij u kijken."

Mehmet bedankt de dokter en gaat naar de apotheek. De apotheek is naast de praktijk. Hij geeft het recept aan de apotheker. De apotheker leest het recept en pakt de medicijnen uit de kast.

"Hier zijn uw pillen," zegt de apotheker. "Neem drie keer per dag Ã©Ã©n pil in. Lees de folder voor meer informatie. En beterschap!" "Dank u wel," zegt Mehmet.

Thuis vertelt Mehmet alles aan zijn vrouw. Hij neemt direct een pil en drinkt een kop hete thee. Dan gaat hij naar bed om te rusten. Na vijf dagen voelt Mehmet zich veel beter. De koorts is weg en zijn keel doet geen pijn meer. "Gelukkig ben ik naar de dokter gegaan," denkt hij.`,
  questions: [
    {
      question: "Wat zijn de klachten van Mehmet?",
      options: ["Alleen hoofdpijn", "Hoofdpijn, koorts en keelpijn", "Buikpijn", "Rugpijn"],
      correct: "Hoofdpijn, koorts en keelpijn"
    },
    {
      question: "Hoeveel graden koorts heeft Mehmet?",
      options: ["37,5 graden", "38,5 graden", "39,5 graden", "40 graden"],
      correct: "38,5 graden"
    },
    {
      question: "Hoe vaak moet Mehmet de pillen innemen?",
      options: ["Eén keer per dag", "Twee keer per dag", "Drie keer per dag", "Vier keer per dag"],
      correct: "Drie keer per dag"
    },
    {
      question: "Hoelang duurt het voor Mehmet beter is?",
      options: ["Twee dagen", "Vijf tot zeven dagen", "Tien dagen", "Twee weken"],
      correct: "Vijf tot zeven dagen"
    }
  ]
},
{
  id: 17,
  title: 'Een Dag in de Stad',
  text: `Lisa heeft een vrije dag. Ze besluit naar de stad te gaan om te winkelen en te genieten van het mooie weer. Om negen uur stapt ze op de trein. Het station is dichtbij haar huis. Het is maar tien minuten lopen.

De trein is vol. Lisa vindt een zitplaats naast het raam. Ze kijkt naar buiten. De zon schijnt en de lucht is blauw. "Wat een prachtige dag!" denkt ze. Na dertig minuten komt de trein aan in de stad.

Lisa loopt naar het centrum. Overal zijn winkels, cafÃ©s en restaurants. Ze gaat eerst naar een kledingwinkel. Ze zoekt een nieuwe jas. De verkoopster helpt haar. "Wat voor jas zoekt u?" vraagt ze.

"Iets warms voor de winter," zegt Lisa. De verkoopster laat haar verschillende jassen zien. Lisa past een zwarte jas. Hij staat haar goed en is niet te duur. "Deze neem ik," zegt ze. Ze betaalt met haar pinpas.

Daarna gaat Lisa naar een boekenwinkel. Ze houdt van lezen. Ze koopt een roman van een bekende schrijver. "Dit boek gaat over liefde en avontuur," zegt de verkoper. "Het is heel populair."

Om twaalf uur heeft Lisa honger. Ze zoekt een restaurant. Ze vindt een leuk terras bij een plein. Lisa bestelt de menukaart. Ze kiest een salade met kip en een glas water. Het eten smaakt heerlijk.

Terwijl ze eet, kijkt ze naar de mensen om haar heen. Er zijn gezinnen met kinderen, jonge stelletjes en oudere mensen. Iedereen geniet van het mooie weer. Een man speelt gitaar op het plein. Lisa luistert naar de muziek.

Na de lunch gaat Lisa naar het museum. Ze heeft interesse in kunst. Het museum heeft een tentoonstelling van moderne schilderijen. Lisa loopt rustig door de zalen. Ze bewondert de kunstwerken. Sommige schilderijen zijn heel bijzonder.

Om drie uur is Lisa moe. Ze gaat naar een cafÃ© en bestelt een kopje thee. Ze zit bij het raam en leest in haar nieuwe boek. Het verhaal is spannend. Ze kan niet stoppen met lezen!

Om vijf uur neemt Lisa de trein terug naar huis. Ze is tevreden over haar dag. Ze heeft nieuwe kleding, een mooi boek en heeft genoten van de stad. Thuis vertelt ze haar man alles. "Het was een geweldige dag," zegt ze. "We moeten dit vaker doen!"

Die avond zit Lisa op de bank met haar boek. Ze leest verder en drinkt een kopje thee. Het is een perfecte afsluiting van een mooie dag. "Ik hou van mijn vrije dagen," denkt ze glimlachend.`,
  questions: [
    {
      question: "Hoe laat vertrekt Lisa naar de stad?",
      options: ["Acht uur", "Negen uur", "Tien uur", "Elf uur"],
      correct: "Negen uur"
    },
    {
      question: "Wat koopt Lisa in de kledingwinkel?",
      options: ["Een rode jurk", "Een zwarte jas", "Een groene trui", "Schoenen"],
      correct: "Een zwarte jas"
    },
    {
      question: "Wat eet Lisa voor lunch?",
      options: ["Pizza", "Pasta", "Salade met kip", "Vis"],
      correct: "Salade met kip"
    },
    {
      question: "Waar gaat Lisa na de lunch naartoe?",
      options: ["Naar huis", "Naar het museum", "Naar de bioscoop", "Naar het park"],
      correct: "Naar het museum"
    }
  ]
}

];


