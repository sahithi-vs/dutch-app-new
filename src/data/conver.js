// data/conversations.js - Realistic Inburgering Exam Format (A1-A2)
// Based on official DUO Inburgering exam patterns with male/female voices

export const conversations1 = [
  {
    id: 1,
    title: "Bij de Dokter - Afspraak Maken",
    level: "A1",
    duration: "2:15",
    category: "health",
    dialogue: [
      { speaker: "Receptionist", gender: "female", text: "Goedemiddag, huisartsenpraktijk Van Dijk.", translation: "Good afternoon, GP practice Van Dijk." },
      { speaker: "Patiënt", gender: "male", text: "Goedemiddag. Ik wil graag een afspraak maken. Ik heb keelpijn en koorts.", translation: "Good afternoon. I'd like to make an appointment. I have a sore throat and fever." },
      { speaker: "Receptionist", gender: "female", text: "Aha, dat klinkt niet goed. Hoe lang heeft u al klachten?", translation: "Oh, that doesn't sound good. How long have you had symptoms?" },
      { speaker: "Patiënt", gender: "male", text: "Sinds gisteren. Vannacht had ik ook hoofdpijn.", translation: "Since yesterday. Last night I also had a headache." },
      { speaker: "Receptionist", gender: "female", text: "Oké. Vandaag om drie uur kan de dokter u zien. Past dat?", translation: "Okay. Today at three o'clock the doctor can see you. Does that work?" },
      { speaker: "Patiënt", gender: "male", text: "Ja, dat is prima. Moet ik mijn zorgpas meenemen?", translation: "Yes, that's fine. Should I bring my health insurance card?" },
      { speaker: "Receptionist", gender: "female", text: "Ja, graag. En kom tien minuten eerder voor de administratie.", translation: "Yes, please. And come ten minutes earlier for the administration." },
      { speaker: "Patiënt", gender: "male", text: "Goed, dank u wel. Tot vanmiddag.", translation: "Alright, thank you. See you this afternoon." },
      { speaker: "Receptionist", gender: "female", text: "Tot vanmiddag. Beterschap!", translation: "See you this afternoon. Get well soon!" }
    ],
    questions: [
      { 
        question: "Wat is het probleem van de patiënt?", 
        options: ["Hoofdpijn", "Keelpijn en koorts", "Buikpijn", "Rugpijn"], 
        correct: "Keelpijn en koorts", 
        translation: "What is the patient's problem?" 
      },
      { 
        question: "Wanneer is de afspraak?", 
        options: ["Morgen om twee uur", "Vandaag om drie uur", "Overmorgen", "Volgende week"], 
        correct: "Vandaag om drie uur", 
        translation: "When is the appointment?" 
      },
      { 
        question: "Wat moet de patiënt meenemen?", 
        options: ["Zijn paspoort", "Zijn zorgpas", "Geld", "Medicijnen"], 
        correct: "Zijn zorgpas", 
        translation: "What should the patient bring?" 
      },
      { 
        question: "Hoe lang heeft de patiënt al klachten?", 
        options: ["Drie dagen", "Sinds gisteren", "Een week", "Vandaag"], 
        correct: "Sinds gisteren", 
        translation: "How long has the patient had symptoms?" 
      }
    ]
  },

  {
    id: 2,
    title: "Op het Gemeentehuis - Inschrijven",
    level: "A2",
    duration: "2:30",
    category: "government",
    dialogue: [
      { speaker: "Medewerker", gender: "female", text: "Goedemorgen! Waarmee kan ik u helpen?", translation: "Good morning! How can I help you?" },
      { speaker: "Burger", gender: "male", text: "Goedemorgen. Ik ben net verhuisd en ik moet me inschrijven op mijn nieuwe adres.", translation: "Good morning. I just moved and I need to register at my new address." },
      { speaker: "Medewerker", gender: "female", text: "Prima! Heeft u uw legitimatiebewijs en huurcontract bij u?", translation: "Great! Do you have your ID and rental contract with you?" },
      { speaker: "Burger", gender: "male", text: "Ja, hier is mijn paspoort. En dit is het huurcontract.", translation: "Yes, here is my passport. And this is the rental contract." },
      { speaker: "Medewerker", gender: "female", text: "Mooi. Wat is uw nieuwe adres?", translation: "Good. What is your new address?" },
      { speaker: "Burger", gender: "male", text: "Kerkstraat 42, 3512 AB Utrecht.", translation: "Kerkstraat 42, 3512 AB Utrecht." },
      { speaker: "Medewerker", gender: "female", text: "En wanneer bent u daar komen wonen?", translation: "And when did you move there?" },
      { speaker: "Burger", gender: "male", text: "Op 1 november. Vorige week maandag.", translation: "On November 1st. Last Monday." },
      { speaker: "Medewerker", gender: "female", text: "Goed. U moet binnen vijf dagen na uw verhuizing inschrijven. U bent op tijd.", translation: "Good. You must register within five days of moving. You're on time." },
      { speaker: "Burger", gender: "male", text: "Mooi! Wanneer krijg ik de bevestiging?", translation: "Great! When will I get the confirmation?" },
      { speaker: "Medewerker", gender: "female", text: "Over ongeveer tien werkdagen ontvangt u de bevestiging per post.", translation: "In about ten working days you'll receive the confirmation by mail." },
      { speaker: "Burger", gender: "male", text: "Perfect. Moet ik nog iets betalen?", translation: "Perfect. Do I need to pay anything?" },
      { speaker: "Medewerker", gender: "female", text: "Nee, inschrijving is gratis. Hier is uw ontvangstbewijs.", translation: "No, registration is free. Here is your receipt." }
    ],
    questions: [
      { 
        question: "Waarom komt de man naar het gemeentehuis?", 
        options: ["Om zijn paspoort te verlengen", "Om zich in te schrijven", "Om te trouwen", "Om een rijbewijs aan te vragen"], 
        correct: "Om zich in te schrijven", 
        translation: "Why does the man come to the municipality?" 
      },
      { 
        question: "Wat moet hij meenemen?", 
        options: ["Legitimatie en huurcontract", "Alleen paspoort", "Geld en foto", "Niets"], 
        correct: "Legitimatie en huurcontract", 
        translation: "What does he need to bring?" 
      },
      { 
        question: "Binnen hoeveel dagen moet je je inschrijven na verhuizing?", 
        options: ["Twee dagen", "Vijf dagen", "Tien dagen", "Een maand"], 
        correct: "Vijf dagen", 
        translation: "Within how many days must you register after moving?" 
      },
      { 
        question: "Wanneer krijgt hij de bevestiging?", 
        options: ["Vandaag nog", "Morgen", "Over tien werkdagen", "Over een maand"], 
        correct: "Over tien werkdagen", 
        translation: "When will he get the confirmation?" 
      }
    ]
  },

  {
    id: 3,
    title: "In de Supermarkt - Vragen Stellen",
    level: "A1",
    duration: "1:45",
    category: "shopping",
    dialogue: [
      { speaker: "Klant", gender: "female", text: "Pardon, meneer. Waar kan ik brood vinden?", translation: "Excuse me, sir. Where can I find bread?" },
      { speaker: "Medewerker", gender: "male", text: "Brood vindt u helemaal achteraan, bij de bakkerij.", translation: "You'll find bread all the way in the back, at the bakery." },
      { speaker: "Klant", gender: "female", text: "Dank u. En waar is de melk?", translation: "Thank you. And where is the milk?" },
      { speaker: "Medewerker", gender: "male", text: "Melk staat in het koelvak, dat is gangpad 4. Links van u.", translation: "Milk is in the refrigerated section, that's aisle 4. To your left." },
      { speaker: "Klant", gender: "female", text: "Oké, dank u wel. Is er ook biologische melk?", translation: "Okay, thank you. Is there also organic milk?" },
      { speaker: "Medewerker", gender: "male", text: "Ja, die staat rechts in het koelvak. De groene pakken.", translation: "Yes, that's on the right in the refrigerated section. The green cartons." },
      { speaker: "Klant", gender: "female", text: "Perfect! En waar kan ik afrekenen?", translation: "Perfect! And where can I check out?" },
      { speaker: "Medewerker", gender: "male", text: "De kassa's zijn vooraan bij de uitgang. Kassa 3 en 4 zijn nu open.", translation: "The checkouts are in the front near the exit. Checkout 3 and 4 are open now." },
      { speaker: "Klant", gender: "female", text: "Hartelijk bedankt voor uw hulp!", translation: "Thank you very much for your help!" },
      { speaker: "Medewerker", gender: "male", text: "Graag gedaan! Fijne dag nog!", translation: "You're welcome! Have a nice day!" }
    ],
    questions: [
      { 
        question: "Wat zoekt de klant eerst?", 
        options: ["Melk", "Brood", "Kaas", "Groenten"], 
        correct: "Brood", 
        translation: "What does the customer look for first?" 
      },
      { 
        question: "Waar staat de melk?", 
        options: ["Achteraan", "Bij de bakkerij", "In gangpad 4", "Bij de kassa"], 
        correct: "In gangpad 4", 
        translation: "Where is the milk?" 
      },
      { 
        question: "Welke kassa's zijn open?", 
        options: ["1 en 2", "3 en 4", "5 en 6", "Alle kassa's"], 
        correct: "3 en 4", 
        translation: "Which checkouts are open?" 
      }
    ]
  },

  {
    id: 4,
    title: "Op het Station - Treinreis Plannen",
    level: "A2",
    duration: "2:20",
    category: "transport",
    dialogue: [
      { speaker: "Reiziger", gender: "male", text: "Goedemiddag. Ik wil graag naar Rotterdam Centraal. Hoe laat gaat de volgende trein?", translation: "Good afternoon. I'd like to go to Rotterdam Central. What time is the next train?" },
      { speaker: "Loketmedewerkster", gender: "female", text: "Even kijken... De volgende trein vertrekt om 14:23 van spoor 7.", translation: "Let me see... The next train departs at 14:23 from platform 7." },
      { speaker: "Reiziger", gender: "male", text: "Is dat een directe trein of moet ik overstappen?", translation: "Is that a direct train or do I need to transfer?" },
      { speaker: "Loketmedewerkster", gender: "female", text: "U moet overstappen in Den Haag Centraal. Daar heeft u 8 minuten om over te stappen.", translation: "You need to transfer in The Hague Central. There you have 8 minutes to transfer." },
      { speaker: "Reiziger", gender: "male", text: "Oké. En hoe laat kom ik dan aan in Rotterdam?", translation: "Okay. And what time do I arrive in Rotterdam?" },
      { speaker: "Loketmedewerkster", gender: "female", text: "Om 15:17. De hele reis duurt ongeveer 54 minuten.", translation: "At 15:17. The whole journey takes about 54 minutes." },
      { speaker: "Reiziger", gender: "male", text: "Prima. Mag ik een enkele reis, alstublieft? Tweede klas.", translation: "Fine. May I have a single ticket, please? Second class." },
      { speaker: "Loketmedewerkster", gender: "female", text: "Natuurlijk. Dat is 12 euro 40. Wilt u pinnen of contant betalen?", translation: "Of course. That's 12 euros 40. Would you like to pay by card or cash?" },
      { speaker: "Reiziger", gender: "male", text: "Ik pin. Alstublieft.", translation: "I'll pay by card. Here you go." },
      { speaker: "Loketmedewerkster", gender: "female", text: "Dank u. Hier is uw kaartje. Goede reis!", translation: "Thank you. Here is your ticket. Have a good trip!" },
      { speaker: "Reiziger", gender: "male", text: "Bedankt! Dag!", translation: "Thanks! Bye!" }
    ],
    questions: [
      { 
        question: "Hoe laat vertrekt de trein?", 
        options: ["14:17", "14:23", "15:17", "15:23"], 
        correct: "14:23", 
        translation: "What time does the train depart?" 
      },
      { 
        question: "Moet de reiziger overstappen?", 
        options: ["Nee, directe trein", "Ja, in Den Haag", "Ja, in Utrecht", "Ja, in Amsterdam"], 
        correct: "Ja, in Den Haag", 
        translation: "Does the traveler need to transfer?" 
      },
      { 
        question: "Hoeveel tijd heeft hij om over te stappen?", 
        options: ["5 minuten", "8 minuten", "10 minuten", "15 minuten"], 
        correct: "8 minuten", 
        translation: "How much time does he have to transfer?" 
      },
      { 
        question: "Hoeveel kost het kaartje?", 
        options: ["10 euro 40", "11 euro 40", "12 euro 40", "13 euro 40"], 
        correct: "12 euro 40", 
        translation: "How much does the ticket cost?" 
      },
      { 
        question: "Hoe betaalt de reiziger?", 
        options: ["Contant", "Met pin", "Met creditcard", "Met telefoon"], 
        correct: "Met pin", 
        translation: "How does the traveler pay?" 
      }
    ]
  },

  {
    id: 5,
    title: "Telefoongesprek - Werk Afzeggen",
    level: "A2",
    duration: "2:00",
    category: "work",
    dialogue: [
      { speaker: "Werkgever", gender: "male", text: "Bedrijf Jansen, met Thomas. Goedemorgen.", translation: "Company Jansen, this is Thomas. Good morning." },
      { speaker: "Werknemer", gender: "female", text: "Goedemorgen Thomas. Met Lisa van Beek. Ik bel om me ziek te melden.", translation: "Good morning Thomas. This is Lisa van Beek. I'm calling to report sick." },
      { speaker: "Werkgever", gender: "male", text: "Oh, wat vervelend! Wat heeft u?", translation: "Oh, that's annoying! What's wrong?" },
      { speaker: "Werknemer", gender: "female", text: "Ik heb griep. Ik heb koorts en veel pijn in mijn spieren.", translation: "I have the flu. I have a fever and a lot of muscle pain." },
      { speaker: "Werkgever", gender: "male", text: "Aha. Bent u al naar de dokter geweest?", translation: "I see. Have you been to the doctor yet?" },
      { speaker: "Werknemer", gender: "female", text: "Nog niet, maar ik heb vanmiddag een afspraak.", translation: "Not yet, but I have an appointment this afternoon." },
      { speaker: "Werkgever", gender: "male", text: "Oké. Denkt u dat u morgen wel kunt komen werken?", translation: "Okay. Do you think you can come to work tomorrow?" },
      { speaker: "Werknemer", gender: "female", text: "Dat weet ik nog niet. De dokter moet me eerst onderzoeken. Ik bel u morgenochtend weer.", translation: "I don't know yet. The doctor needs to examine me first. I'll call you tomorrow morning." },
      { speaker: "Werkgever", gender: "male", text: "Prima. Geen probleem. Rust goed uit en beterschap!", translation: "Fine. No problem. Get some rest and get well soon!" },
      { speaker: "Werknemer", gender: "female", text: "Dank u wel. Tot morgen. Dag.", translation: "Thank you. Until tomorrow. Bye." },
      { speaker: "Werkgever", gender: "male", text: "Dag Lisa. Sterkte!", translation: "Bye Lisa. Take care!" }
    ],
    questions: [
      { 
        question: "Waarom belt Lisa?", 
        options: ["Om te zeggen dat ze te laat komt", "Om zich ziek te melden", "Om vakantie aan te vragen", "Om een vraag te stellen"], 
        correct: "Om zich ziek te melden", 
        translation: "Why is Lisa calling?" },
      { 
        question: "Wat heeft Lisa?", 
        options: ["Verkoudheid", "Hoofdpijn", "Griep", "Buikpijn"], 
        correct: "Griep", 
        translation: "What does Lisa have?" 
      },
      { 
        question: "Wanneer heeft Lisa een afspraak met de dokter?", 
        options: ["Nu meteen", "Vanmiddag", "Morgenochtend", "Volgende week"], 
        correct: "Vanmiddag", 
        translation: "When does Lisa have an appointment with the doctor?" 
      },
      { 
        question: "Wanneer belt Lisa weer?", 
        options: ["Vanmiddag", "Vanavond", "Morgenochtend", "Overmorgen"], 
        correct: "Morgenochtend", 
        translation: "When will Lisa call again?" 
      }
    ]
  },

  {
    id: 6,
    title: "Appartement Bezichtigen",
    level: "A2",
    duration: "2:45",
    category: "housing",
    dialogue: [
      { speaker: "Makelaar", gender: "female", text: "Goedemiddag! U bent meneer De Vries? Welkom!", translation: "Good afternoon! You are Mr. De Vries? Welcome!" },
      { speaker: "Huurder", gender: "male", text: "Ja, klopt. Aangenaam. Ik kom het appartement bekijken.", translation: "Yes, correct. Pleased to meet you. I've come to view the apartment." },
      { speaker: "Makelaar", gender: "female", text: "Prima! Kom binnen. Dit is de woonkamer. Die is ongeveer 25 vierkante meter.", translation: "Great! Come in. This is the living room. It's about 25 square meters." },
      { speaker: "Huurder", gender: "male", text: "Mooi! En hoeveel slaapkamers heeft het appartement?", translation: "Nice! And how many bedrooms does the apartment have?" },
      { speaker: "Makelaar", gender: "female", text: "Het heeft twee slaapkamers. Allebei aan de achterkant, dus rustig.", translation: "It has two bedrooms. Both at the back, so quiet." },
      { speaker: "Huurder", gender: "male", text: "Dat is fijn. Is de keuken volledig uitgerust?", translation: "That's good. Is the kitchen fully equipped?" },
      { speaker: "Makelaar", gender: "female", text: "Ja, er is een fornuis, een koelkast en een vaatwasser. En hier is de badkamer met douche.", translation: "Yes, there's a stove, a refrigerator and a dishwasher. And here is the bathroom with shower." },
      { speaker: "Huurder", gender: "male", text: "Mooi. En hoeveel is de huur per maand?", translation: "Nice. And how much is the rent per month?" },
      { speaker: "Makelaar", gender: "female", text: "950 euro per maand, inclusief gas, water en licht. Internetis niet inbegrepen.", translation: "950 euros per month, including gas, water and electricity. Internet is not included." },
      { speaker: "Huurder", gender: "male", text: "Zijn huisdieren toegestaan? Ik heb een kat.", translation: "Are pets allowed? I have a cat." },
      { speaker: "Makelaar", gender: "female", text: "Ja, huisdieren zijn welkom. De verhuurder heeft geen bezwaar.", translation: "Yes, pets are welcome. The landlord has no objection." },
      { speaker: "Huurder", gender: "male", text: "Perfect! Wanneer kan ik erin?", translation: "Perfect! When can I move in?" },
      { speaker: "Makelaar", gender: "female", text: "Per 1 december. Over drie weken dus.", translation: "From December 1st. So in three weeks." },
      { speaker: "Huurder", gender: "male", text: "Uitstekend. Ik wil het graag huren. Wat zijn de volgende stappen?", translation: "Excellent. I'd like to rent it. What are the next steps?" },
      { speaker: "Makelaar", gender: "female", text: "U moet het huurcontract ondertekenen en twee maanden borg betalen. Dan is het van u.", translation: "You need to sign the rental contract and pay two months' deposit. Then it's yours." }
    ],
    questions: [
      { 
        question: "Hoeveel slaapkamers heeft het appartement?", 
        options: ["Een", "Twee", "Drie", "Vier"], 
        correct: "Twee", 
        translation: "How many bedrooms does the apartment have?" 
      },
      { 
        question: "Wat is de huur per maand?", 
        options: ["850 euro", "900 euro", "950 euro", "1000 euro"], 
        correct: "950 euro", 
        translation: "What is the rent per month?" 
      },
      { 
        question: "Wat is NIET inbegrepen in de huur?", 
        options: ["Gas", "Water", "Elektriciteit", "Internet"], 
        correct: "Internet", 
        translation: "What is NOT included in the rent?" 
      },
      { 
        question: "Zijn huisdieren toegestaan?", 
        options: ["Nee", "Ja", "Alleen honden", "Alleen katten"], 
        correct: "Ja", 
        translation: "Are pets allowed?" 
      },
      { 
        question: "Wanneer kan de huurder erin?", 
        options: ["Direct", "1 november", "1 december", "1 januari"], 
        correct: "1 december", 
        translation: "When can the tenant move in?" 
      },
      { 
        question: "Hoeveel borg moet hij betalen?", 
        options: ["Een maand", "Twee maanden", "Drie maanden", "Geen borg"], 
        correct: "Twee maanden", 
        translation: "How much deposit must he pay?" 
      }
    ]
  },

  {
    id: 7,
    title: "Bij de Apotheek - Medicijnen Ophalen",
    level: "A1",
    duration: "1:50",
    category: "health",
    dialogue: [
      { speaker: "Apotheker", gender: "male", text: "Goedemiddag! Wat kan ik voor u doen?", translation: "Good afternoon! What can I do for you?" },
      { speaker: "Klant", gender: "female", text: "Goedemiddag. Ik kom mijn medicijnen ophalen. Ik heb een recept van de dokter.", translation: "Good afternoon. I'm here to pick up my medicine. I have a prescription from the doctor." },
      { speaker: "Apotheker", gender: "male", text: "Prima. Mag ik uw naam en geboortedatum?", translation: "Fine. May I have your name and date of birth?" },
      { speaker: "Klant", gender: "female", text: "Ja, ik heet Anna Smit. Geboren op 15 maart 1985.", translation: "Yes, my name is Anna Smit. Born on March 15, 1985." },
      { speaker: "Apotheker", gender: "male", text: "Even zoeken... Ah ja, hier is het. U krijgt antibiotica voor uw keelontsteking.", translation: "Let me search... Ah yes, here it is. You're getting antibiotics for your throat infection." },
      { speaker: "Klant", gender: "female", text: "Hoe moet ik die innemen?", translation: "How should I take them?" },
      { speaker: "Apotheker", gender: "male", text: "Drie keer per dag, één tablet. Een bij het ontbijt, een bij de lunch en een bij het avondeten. Altijd met water.", translation: "Three times a day, one tablet. One at breakfast, one at lunch and one at dinner. Always with water." },
      { speaker: "Klant", gender: "female", text: "Oké. En hoe lang moet ik ze gebruiken?", translation: "Okay. And how long should I use them?" },
      { speaker: "Apotheker", gender: "male", text: "Zeven dagen. Heel de doos opmaken, ook als u zich beter voelt.", translation: "Seven days. Finish the entire box, even if you feel better." },
      { speaker: "Klant", gender: "female", text: "Begrepen. Hoeveel moet ik betalen?", translation: "Understood. How much do I need to pay?" },
      { speaker: "Apotheker", gender: "male", text: "Dit valt onder uw eigen risico. Dat is 8 euro 50.", translation: "This falls under your deductible. That's 8 euros 50." },
      { speaker: "Klant", gender: "female", text: "Alstublieft. Dank u wel!", translation: "Here you go. Thank you!" },
      { speaker: "Apotheker", gender: "male", text: "Graag gedaan. Beterschap!", translation: "You're welcome. Get well soon!" }
    ],
    questions: [
      { 
        question: "Waarom komt Anna naar de apotheek?", 
        options: ["Voor advies", "Voor medicijnen", "Voor een recept", "Voor een controle"], 
        correct: "Voor medicijnen", 
        translation: "Why does Anna come to the pharmacy?" 
      },
      { 
        question: "Welke medicijnen krijgt ze?", 
        options: ["Pijnstillers", "Antibiotica", "Hoestdrank", "Vitamines"], 
        correct: "Antibiotica", 
        translation: "What medicine does she get?" 
      },
      { 
        question: "Hoe vaak moet ze de medicijnen innemen?", 
        options: ["Een keer per dag", "Twee keer per dag", "Drie keer per dag", "Vier keer per dag"], 
        correct: "Drie keer per dag", 
        translation: "How often should she take the medicine?" 
      },
      { 
        question: "Hoe lang moet ze de medicijnen gebruiken?", 
        options: ["Drie dagen", "Vijf dagen", "Zeven dagen", "Tien dagen"], 
        correct: "Zeven dagen", 
        translation: "How long should she use the medicine?" 
      }
    ]
  },
  {
    id: 8,
    title: "Schoolgesprek - Kind Inschrijven",
    level: "A2",
    duration: "2:25",
    category: "education",
    dialogue: [
      { speaker: "Directeur", gender: "female", text: "Goedemiddag. U komt voor de inschrijving van uw dochter?", translation: "Good afternoon. You're here for your daughter's registration?" },
      { speaker: "Ouder", gender: "male", text: "Ja, dat klopt. Mijn dochter is vijf jaar en ze moet naar de basisschool.", translation: "Yes, that's right. My daughter is five years old and she needs to go to primary school." },
      { speaker: "Directeur", gender: "female", text: "Mooi. Wanneer is ze jarig?", translation: "Good. When is her birthday?" },
      { speaker: "Ouder", gender: "male", text: "Op 12 april 2019. Ze wordt in april zes jaar.", translation: "On April 12, 2019. She'll turn six in April." },
      { speaker: "Directeur", gender: "female", text: "Dan kan ze na de kerstvakantie beginnen, in januari. Spreekt ze al Nederlands?", translation: "Then she can start after the Christmas holiday, in January. Does she already speak Dutch?" },
      { speaker: "Ouder", gender: "male", text: "Een beetje. Ze heeft een jaar op de peuterspeelzaal gezeten.", translation: "A little. She attended playgroup for a year." },
      { speaker: "Directeur", gender: "female", text: "Dat is goed. We hebben ook extra taalles voor kinderen die nog niet goed Nederlands spreken.", translation: "That's good. We also have extra language lessons for children who don't speak Dutch well yet." },
      { speaker: "Ouder", gender: "male", text: "Fijn! Hoe laat begint de school?", translation: "Great! What time does school start?" },
      { speaker: "Directeur", gender: "female", text: "Om kwart voor negen. De kinderen moeten voor negen uur binnen zijn.", translation: "At quarter to nine. The children must be inside before nine o'clock." },
      { speaker: "Ouder", gender: "male", text: "En hoe laat zijn ze klaar?", translation: "And what time do they finish?" },
      { speaker: "Directeur", gender: "female", text: "Op maandag, dinsdag en donderdag om kwart over drie. Op woensdag om half één en op vrijdag om half twaalf.", translation: "On Monday, Tuesday and Thursday at quarter past three. On Wednesday at half past twelve and on Friday at half past eleven." },
      { speaker: "Ouder", gender: "male", text: "Is er ook opvang na schooltijd?", translation: "Is there also after-school care?" },
      { speaker: "Directeur", gender: "female", text: "Ja, de buitenschoolse opvang is in hetzelfde gebouw. U kunt zich daar apart voor aanmelden.", translation: "Yes, the after-school care is in the same building. You can register for that separately." },
      { speaker: "Ouder", gender: "male", text: "Perfect. Welke documenten moet ik meenemen?", translation: "Perfect. Which documents do I need to bring?" },
      { speaker: "Directeur", gender: "female", text: "De geboorteakte van uw dochter, een identiteitsbewijs en een bewijs van uw adres.", translation: "Your daughter's birth certificate, an ID and proof of your address." }
    ],
    questions: [
    {
        question: "Wat is het probleem van de patiënt?",
        options: ["Kiespijn", "Tandvlees bloedt", "Gebroken tand", "Geen probleem"], 
        correct: "Kiespijn", 
        translation: "What is the patient's problem?" 
      },
      { 
        question: "Wat heeft de patiënt?", 
        options: ["Een gaatje", "Een gebroken kies", "Tandvleesontsteking", "Niets"], 
        correct: "Een gaatje", 
        translation: "What does the patient have?" 
      },
      { 
        question: "Hoe lang duurt de behandeling?", 
        options: ["Drie minuten", "Vijf minuten", "Tien minuten", "Een kwartier"], 
        correct: "Vijf minuten", 
        translation: "How long does the treatment take?" 
      },
      { 
        question: "Hoe lang mag hij niet eten?", 
        options: ["Een half uur", "Een uur", "Twee uur", "Drie uur"], 
        correct: "Een uur", 
        translation: "How long may he not eat?" 
      }
    ]
  },

  {
    id: 21,
    title: "Restaurant - Eten Bestellen",
    level: "A1",
    duration: "2:00",
    category: "leisure",
    dialogue: [
      { speaker: "Ober", gender: "male", text: "Goedenavond! Welkom. Heeft u gereserveerd?", translation: "Good evening! Welcome. Do you have a reservation?" },
      { speaker: "Gast", gender: "female", text: "Nee, is er nog een tafel vrij voor twee personen?", translation: "No, is there still a table available for two people?" },
      { speaker: "Ober", gender: "male", text: "Ja hoor, komt u maar mee. Deze tafel bij het raam, is dat goed?", translation: "Yes sure, please follow me. This table by the window, is that okay?" },
      { speaker: "Gast", gender: "female", text: "Perfect! Mag ik de menukaart?", translation: "Perfect! May I have the menu?" },
      { speaker: "Ober", gender: "male", text: "Natuurlijk. Hier is de kaart. Wilt u iets drinken?", translation: "Of course. Here's the menu. Would you like something to drink?" },
      { speaker: "Gast", gender: "female", text: "Ja, twee glazen water en een fles witte wijn, alstublieft.", translation: "Yes, two glasses of water and a bottle of white wine, please." },
      { speaker: "Ober", gender: "male", text: "Komt eraan. Ik kom zo terug voor uw bestelling.", translation: "Coming right up. I'll be back for your order in a moment." },
      { speaker: "Gast", gender: "female", text: "Dank u.", translation: "Thank you." },
      { speaker: "Ober", gender: "male", text: "Alstublieft, de drankjes. Heeft u al een keuze gemaakt?", translation: "Here you are, the drinks. Have you made a choice?" },
      { speaker: "Gast", gender: "female", text: "Ja. Ik neem de pasta carbonara. En mijn vriend wil de biefstuk.", translation: "Yes. I'll have the pasta carbonara. And my friend wants the steak." },
      { speaker: "Ober", gender: "male", text: "Hoe wilt u de biefstuk? Rood, medium of doorbakken?", translation: "How would you like the steak? Rare, medium or well done?" },
      { speaker: "Gast", gender: "female", text: "Medium, graag.", translation: "Medium, please." },
      { speaker: "Ober", gender: "male", text: "Prima. Het duurt ongeveer 20 minuten. Eet smakelijk straks!", translation: "Fine. It takes about 20 minutes. Enjoy your meal later!" }
    ],
    questions: [
      { 
        question: "Voor hoeveel personen wil ze een tafel?", 
        options: ["Eén persoon", "Twee personen", "Drie personen", "Vier personen"], 
        correct: "Twee personen", 
        translation: "For how many people does she want a table?" 
      },
      { 
        question: "Waar zit de tafel?", 
        options: ["Bij de deur", "Bij het raam", "In de hoek", "Buiten"], 
        correct: "Bij het raam", 
        translation: "Where is the table?" 
      },
      { 
        question: "Wat bestelt ze om te drinken?", 
        options: ["Bier", "Water en rode wijn", "Water en witte wijn", "Alleen water"], 
        correct: "Water en witte wijn", 
        translation: "What does she order to drink?" 
      },
      { 
        question: "Wat eet ze?", 
        options: ["Biefstuk", "Pasta", "Pizza", "Salade"], 
        correct: "Pasta", 
        translation: "What does she eat?" 
      }
    ]
  },

  {
    id: 22,
    title: "Taxichauffeur - Naar het Vliegveld",
    level: "A2",
    duration: "2:20",
    category: "transport",
    dialogue: [
      { speaker: "Chauffeur", gender: "male", text: "Goedemorgen. Waar gaat de reis naartoe?", translation: "Good morning. Where are you going?" },
      { speaker: "Passagier", gender: "female", text: "Naar Schiphol graag. Naar terminal 3.", translation: "To Schiphol please. To terminal 3." },
      { speaker: "Chauffeur", gender: "male", text: "Geen probleem. Hoe laat vertrekt uw vliegtuig?", translation: "No problem. What time does your flight depart?" },
      { speaker: "Passagier", gender: "female", text: "Om half tien. Hoe lang duurt de rit?", translation: "At half past nine. How long does the journey take?" },
      { speaker: "Chauffeur", gender: "male", text: "Ongeveer 40 minuten, als het verkeer meezit.", translation: "About 40 minutes, if the traffic cooperates." },
      { speaker: "Passagier", gender: "female", text: "Mooi, dan heb ik genoeg tijd. Hoeveel kost de rit ongeveer?", translation: "Good, then I have enough time. How much does the journey cost approximately?" },
      { speaker: "Chauffeur", gender: "male", text: "Naar Schiphol is het een vast tarief: 45 euro.", translation: "To Schiphol it's a fixed rate: 45 euros." },
      { speaker: "Passagier", gender: "female", text: "Dat is prima. Kan ik pinnen?", translation: "That's fine. Can I pay by card?" },
      { speaker: "Chauffeur", gender: "male", text: "Ja, pinnen kan. Ook contant betalen is mogelijk.", translation: "Yes, card payment is possible. Cash payment is also possible." },
      { speaker: "Passagier", gender: "female", text: "Ik pin. Zet mijn koffer maar in de kofferbak.", translation: "I'll pay by card. Just put my suitcase in the trunk." },
      { speaker: "Chauffeur", gender: "male", text: "Doe ik. Alles zit erin. Gaat u maar zitten, dan vertrekken we.", translation: "I will. Everything's in. Please sit down, then we'll leave." },
      { speaker: "Passagier", gender: "female", text: "Dank u. Naar welk land gaat u op vakantie?", translation: "Thank you. To which country are you going on vacation?" },
      { speaker: "Chauffeur", gender: "male", text: "Ik ga naar Spanje, naar Barcelona.", translation: "I'm going to Spain, to Barcelona." },
      { speaker: "Passagier", gender: "female", text: "Wat leuk! Ik ga ook naar Spanje, maar naar Málaga.", translation: "How nice! I'm also going to Spain, but to Málaga." },
      { speaker: "Chauffeur", gender: "male", text: "Mooi! Zo, we zijn er. Terminal 3. Alstublieft.", translation: "Great! Well, we're here. Terminal 3. Here you are." },
      { speaker: "Passagier", gender: "female", text: "Perfect. Hier is mijn pinpas. Goede reis!", translation: "Perfect. Here's my debit card. Have a good trip!" }
    ],
    questions: [
      { 
        question: "Waar wil de passagier naartoe?", 
        options: ["Naar het station", "Naar Schiphol", "Naar het hotel", "Naar de haven"], 
        correct: "Naar Schiphol", 
        translation: "Where does the passenger want to go?" 
      },
      { 
        question: "Hoe laat vertrekt het vliegtuig?", 
        options: ["Om negen uur", "Om half tien", "Om tien uur", "Om half elf"], 
        correct: "Om half tien", 
        translation: "What time does the plane depart?" 
      },
      { 
        question: "Hoe lang duurt de rit?", 
        options: ["30 minuten", "40 minuten", "50 minuten", "60 minuten"], 
        correct: "40 minuten", 
        translation: "How long does the journey take?" 
      },
      { 
        question: "Hoeveel kost de taxi?", 
        options: ["35 euro", "40 euro", "45 euro", "50 euro"], 
        correct: "45 euro", 
        translation: "How much does the taxi cost?" 
      },
      { 
        question: "Naar welk land gaat de passagier?", 
        options: ["Frankrijk", "Italië", "Spanje", "Portugal"], 
        correct: "Spanje", 
        translation: "To which country is the passenger going?" 
      }
    ]
  },

  {
    id: 23,
    title: "Bij de Slager - Vlees Kopen",
    level: "A1",
    duration: "1:35",
    category: "shopping",
    dialogue: [
      { speaker: "Slager", gender: "male", text: "Goedemiddag mevrouw! Wat mag het zijn?", translation: "Good afternoon madam! What would you like?" },
      { speaker: "Klant", gender: "female", text: "Goedemiddag. Ik wil graag kip. Heeft u kipfilet?", translation: "Good afternoon. I'd like chicken. Do you have chicken breast?" },
      { speaker: "Slager", gender: "male", text: "Ja, natuurlijk. Hoeveel gram wilt u?", translation: "Yes, of course. How many grams would you like?" },
      { speaker: "Klant", gender: "female", text: "500 gram graag.", translation: "500 grams please." },
      { speaker: "Slager", gender: "male", text: "Alstublieft. Dit is 520 gram. Is dat goed?", translation: "Here you are. This is 520 grams. Is that okay?" },
      { speaker: "Klant", gender: "female", text: "Ja, prima. En ik wil ook gehakt. Voor vier personen.", translation: "Yes, fine. And I also want minced meat. For four people." },
      { speaker: "Slager", gender: "male", text: "Dan heeft u ongeveer 600 gram nodig. Runder- of varkengehakt?", translation: "Then you need about 600 grams. Beef or pork mince?" },
      { speaker: "Klant", gender: "female", text: "Half om half, alstublieft.", translation: "Half and half, please." },
      { speaker: "Slager", gender: "male", text: "Komt eraan... Alstublieft. Verder nog iets?", translation: "Coming up... Here you are. Anything else?" },
      { speaker: "Klant", gender: "female", text: "Nee, dit is alles. Hoeveel is het totaal?", translation: "No, that's everything. How much is the total?" },
      { speaker: "Slager", gender: "male", text: "Dat is 14 euro 75 bij elkaar.", translation: "That's 14 euros 75 altogether." },
      { speaker: "Klant", gender: "female", text: "Alstublieft. Dank u wel!", translation: "Here you are. Thank you!" },
      { speaker: "Slager", gender: "male", text: "Graag gedaan. Eet smakelijk!", translation: "You're welcome. Enjoy your meal!" }
    ],
    questions: [
      { 
        question: "Wat koopt de klant eerst?", 
        options: ["Gehakt", "Kip", "Biefstuk", "Worst"], 
        correct: "Kip", 
        translation: "What does the customer buy first?" 
      },
      { 
        question: "Hoeveel gram kipfilet koopt ze?", 
        options: ["400 gram", "500 gram", "520 gram", "600 gram"], 
        correct: "520 gram", 
        translation: "How many grams of chicken breast does she buy?" 
      },
      { 
        question: "Voor hoeveel personen koopt ze gehakt?", 
        options: ["Twee", "Drie", "Vier", "Vijf"], 
        correct: "Vier", 
        translation: "For how many people does she buy minced meat?" 
      },
      { 
        question: "Wat kost het totaal?", 
        options: ["12 euro 75", "13 euro 75", "14 euro 75", "15 euro 75"], 
        correct: "14 euro 75", 
        translation: "What's the total cost?" 
      }
    ]
  },

  {
    id: 24,
    title: "Fietsenmaker - Fiets Laten Repareren",
    level: "A2",
    duration: "2:15",
    category: "services",
    dialogue: [
      { speaker: "Monteur", gender: "male", text: "Goedemiddag! Wat kan ik voor u doen?", translation: "Good afternoon! What can I do for you?" },
      { speaker: "Klant", gender: "female", text: "Hallo. Mijn fiets is kapot. De band is lek.", translation: "Hello. My bike is broken. The tire is flat." },
      { speaker: "Monteur", gender: "male", text: "Welke band? Voor of achter?", translation: "Which tire? Front or back?" },
      { speaker: "Klant", gender: "female", text: "De achterband. En mijn rem maakt ook een raar geluid.", translation: "The rear tire. And my brake also makes a strange noise." },
      { speaker: "Monteur", gender: "male", text: "Oké, laat maar eens kijken... Ja, er zit een spijker in de band. En de remblokjes zijn versleten.", translation: "Okay, let me take a look... Yes, there's a nail in the tire. And the brake pads are worn." },
      { speaker: "Klant", gender: "female", text: "Kunt u het vandaag nog maken?", translation: "Can you fix it today?" },
      { speaker: "Monteur", gender: "male", text: "Ja, dat kan. Het duurt ongeveer een uur.", translation: "Yes, I can. It takes about an hour." },
      { speaker: "Klant", gender: "female", text: "Perfect! Hoeveel gaat het kosten?", translation: "Perfect! How much is it going to cost?" },
      { speaker: "Monteur", gender: "male", text: "De band plakken kost 8 euro. Nieuwe remblokjes zijn 15 euro. En het werk is 12 euro. Totaal 35 euro.", translation: "Patching the tire costs 8 euros. New brake pads are 15 euros. And the labor is 12 euros. Total 35 euros." },
      { speaker: "Klant", gender: "female", text: "Dat is goed. Hoe laat kan ik de fiets ophalen?", translation: "That's fine. What time can I pick up the bike?" },
      { speaker: "Monteur", gender: "male", text: "Om vijf uur is hij klaar. Laat u uw telefoonnummer achter? Dan bel ik als hij klaar is.", translation: "At five o'clock it will be ready. Will you leave your phone number? Then I'll call when it's ready." },
      { speaker: "Klant", gender: "female", text: "Ja, mijn nummer is 06-12345678.", translation: "Yes, my number is 06-12345678." },
      { speaker: "Monteur", gender: "male", text: "Prima. U hoort van mij. Tot straks!", translation: "Fine. You'll hear from me. See you later!" },
      { speaker: "Klant", gender: "female", text: "Dank u wel! Tot vanmiddag.", translation: "Thank you! See you this afternoon." }
    ],
    questions: [
      { 
        question: "Wat is het probleem met de fiets?", 
        options: ["De ketting is kapot", "De band is lek", "Het stuur is los", "Het licht werkt niet"], 
        correct: "De band is lek", 
        translation: "What's the problem with the bike?" 
      },
      { 
        question: "Welke band is lek?", 
        options: ["De voorband", "De achterband", "Beide banden", "Geen band"], 
        correct: "De achterband", 
        translation: "Which tire is flat?" 
      },
      { 
        question: "Wat is er nog meer kapot?", 
        options: ["De bel", "De rem", "Het slot", "Het zadel"], 
        correct: "De rem", 
        translation: "What else is broken?" 
      },
      { 
        question: "Hoeveel kost de reparatie?", 
        options: ["25 euro", "30 euro", "35 euro", "40 euro"], 
        correct: "35 euro", 
        translation: "How much does the repair cost?" 
      },
      { 
        question: "Hoe laat is de fiets klaar?", 
        options: ["Om vier uur", "Om vijf uur", "Om zes uur", "Om zeven uur"], 
        correct: "Om vijf uur", 
        translation: "What time will the bike be ready?" 
      }
    ]
  },

  {
    id: 25,
    title: "Buurtcentrum - Cursus Nederlands",
    level: "A2",
    duration: "2:30",
    category: "education",
    dialogue: [
      { speaker: "Docent", gender: "female", text: "Goedemorgen allemaal! Welkom bij de Nederlandse cursus. Mijn naam is Petra.", translation: "Good morning everyone! Welcome to the Dutch course. My name is Petra." },
      { speaker: "Cursist", gender: "male", text: "Goedemorgen. Ik ben Hassan. Hoeveel lessen zijn er per week?", translation: "Good morning. I'm Hassan. How many lessons are there per week?" },
      { speaker: "Docent", gender: "female", text: "We hebben twee lessen per week. Op dinsdag en donderdag van 9 tot 12 uur.", translation: "We have two lessons per week. On Tuesday and Thursday from 9 to 12 o'clock." },
      { speaker: "Cursist", gender: "male", text: "Hoelang duurt de hele cursus?", translation: "How long does the entire course last?" },
      { speaker: "Docent", gender: "female", text: "De cursus duurt 10 weken. Daarna is er een examen.", translation: "The course lasts 10 weeks. After that there's an exam." },
      { speaker: "Cursist", gender: "male", text: "Wat voor examen is dat?", translation: "What kind of exam is that?" },
      { speaker: "Docent", gender: "female", text: "Een luister- en spreekexamen. Ook moeten jullie een tekst lezen en vragen beantwoorden.", translation: "A listening and speaking exam. You also have to read a text and answer questions." },
      { speaker: "Cursist", gender: "male", text: "Is het examen moeilijk?", translation: "Is the exam difficult?" },
      { speaker: "Docent", gender: "female", text: "Als je goed oefent, niet. We gaan veel oefenen in de lessen.", translation: "If you practice well, no. We're going to practice a lot in the lessons." },
      { speaker: "Cursist", gender: "male", text: "Krijgen we ook huiswerk?", translation: "Do we also get homework?" },
      { speaker: "Docent", gender: "female", text: "Ja, elke les krijgen jullie huiswerk. Ongeveer twee uur per week.", translation: "Yes, you get homework every lesson. About two hours per week." },
      { speaker: "Cursist", gender: "male", text: "Moeten we een boek kopen?", translation: "Do we need to buy a book?" },
      { speaker: "Docent", gender: "female", text: "Nee, alle materialen krijgen jullie van mij. Dat is gratis.", translation: "No, you get all materials from me. That's free." },
      { speaker: "Cursist", gender: "male", text: "Mooi! En wat kost de cursus?", translation: "Great! And what does the course cost?" },
      { speaker: "Docent", gender: "female", text: "Voor de hele cursus betaalt u 150 euro. Het examen is daar niet bij inbegrepen. Dat kost apart 75 euro.", translation: "For the entire course you pay 150 euros. The exam is not included. That costs 75 euros separately." },
      { speaker: "Cursist", gender: "male", text: "Oké, begrijp ik. Dank u wel voor de informatie.", translation: "Okay, I understand. Thank you for the information." }
    ],
    questions: [
      { 
        question: "Hoe vaak is er les per week?", 
        options: ["Eén keer", "Twee keer", "Drie keer", "Vier keer"], 
        correct: "Twee keer", 
        translation: "How often is there class per week?" 
      },
      { 
        question: "Hoelang duurt de cursus?", 
        options: ["5 weken", "8 weken", "10 weken", "12 weken"], 
        correct: "10 weken", 
        translation: "How long does the course last?" 
      },
      { 
        question: "Wat is er na de cursus?", 
        options: ["Niets", "Een feest", "Een examen", "Een nieuwe cursus"], 
        correct: "Een examen", 
        translation: "What is there after the course?" 
      },
      { 
        question: "Hoeveel huiswerk krijgen ze per week?", 
        options: ["Een uur", "Twee uur", "Drie uur", "Vier uur"], 
        correct: "Twee uur", 
        translation: "How much homework do they get per week?" 
      },
      { 
        question: "Wat kost de cursus?", 
        options: ["100 euro", "125 euro", "150 euro", "175 euro"], 
        correct: "150 euro", 
        translation: "What does the course cost?" 
      },
      { 
        question: "Wat kost het examen?", 
        options: ["50 euro", "60 euro", "75 euro", "100 euro"], 
        correct: "75 euro", 
        translation: "What does the exam cost?" 
      }
    ]
  },

  {
    id: 26,
    title: "Bij de Kapper - Afspraak",
    level: "A1",
    duration: "1:40",
    category: "services",
    dialogue: [
      { speaker: "Kapper", gender: "female", text: "Goedemiddag! Wat kan ik voor u doen?", translation: "Good afternoon! What can I do for you?" },
      { speaker: "Klant", gender: "male", text: "Goedemiddag. Ik wil graag mijn haar laten knippen.", translation: "Good afternoon. I'd like to have my hair cut." },
      { speaker: "Kapper", gender: "female", text: "Heeft u een afspraak?", translation: "Do you have an appointment?" },
      { speaker: "Klant", gender: "male", text: "Nee, kan het vandaag nog?", translation: "No, is it possible today?" },
      { speaker: "Kapper", gender: "female", text: "Even kijken... Om vier uur kan. Schikt dat?", translation: "Let me see... Four o'clock is possible. Does that suit you?" },
      { speaker: "Klant", gender: "male", text: "Ja, prima. Hoe lang duurt het ongeveer?", translation: "Yes, fine. How long does it take approximately?" },
      { speaker: "Kapper", gender: "female", text: "Een knipbeurt duurt ongeveer een half uur.", translation: "A haircut takes about half an hour." },
      { speaker: "Klant", gender: "male", text: "Goed. En wat kost het?", translation: "Good. And what does it cost?" },
      { speaker: "Kapper", gender: "female", text: "Voor heren knippen is 25 euro. Wassen is inbegrepen.", translation: "Men's haircut is 25 euros. Washing is included." },
      { speaker: "Klant", gender: "male", text: "Oké, dat is goed. Tot vier uur dan.", translation: "Okay, that's fine. See you at four then." },
      { speaker: "Kapper", gender: "female", text: "Tot straks! Mag ik uw naam voor de afspraak?", translation: "See you later! May I have your name for the appointment?" },
      { speaker: "Klant", gender: "male", text: "Ja, Peter Jansen.", translation: "Yes, Peter Jansen." },
      { speaker: "Kapper", gender: "female", text: "Dank u, meneer Jansen. Tot vanmiddag!", translation: "Thank you, Mr. Jansen. See you this afternoon!" }
    ],
    questions: [
      { 
        question: "Wat wil de klant?", 
        options: ["Zijn haar wassen", "Zijn haar knippen", "Zijn haar verven", "Zijn baard scheren"], 
        correct: "Zijn haar knippen", 
        translation: "What does the customer want?" 
      },
      { 
        question: "Wanneer kan hij terecht?", 
        options: ["Om twee uur", "Om drie uur", "Om vier uur", "Om vijf uur"], 
        correct: "Om vier uur", 
        translation: "When can he come?" 
      },
      { 
        question: "Hoeveel kost een knipbeurt?", 
        options: ["20 euro", "25 euro", "30 euro", "35 euro"], 
        correct: "25 euro", 
        translation: "How much does a haircut cost?" 
      },
      { 
        question: "Hoe lang duurt het?", 
        options: ["Een kwartier", "Een half uur", "Een uur", "Twee uur"], 
        correct: "Een half uur", 
        translation: "How long does it take?" 
      }
    ]
  },

  {
    id: 27,
    title: "In de Bibliotheek - Lidmaatschap",
    level: "A1",
    duration: "2:10",
    category: "services",
    dialogue: [
      { speaker: "Medewerker", gender: "male", text: "Goedemorgen! Kan ik u helpen?", translation: "Good morning! Can I help you?" },
      { speaker: "Bezoeker", gender: "female", text: "Ja, graag. Ik wil lid worden van de bibliotheek.", translation: "Yes, please. I'd like to become a member of the library." },
      { speaker: "Medewerker", gender: "male", text: "Leuk! Woont u in deze gemeente?", translation: "Great! Do you live in this municipality?" },
      { speaker: "Bezoeker", gender: "female", text: "Ja, ik woon hier sinds vorige maand.", translation: "Yes, I've lived here since last month." },
      { speaker: "Medewerker", gender: "male", text: "Prima. Mag ik uw identiteitsbewijs zien?", translation: "Fine. May I see your ID?" },
      { speaker: "Bezoeker", gender: "female", text: "Alstublieft, hier is mijn paspoort.", translation: "Here you are, here is my passport." },
      { speaker: "Medewerker", gender: "male", text: "Dank u. Het lidmaatschap kost 55 euro per jaar. Dan mag u 4 boeken tegelijk lenen.", translation: "Thank you. Membership costs 55 euros per year. Then you may borrow 4 books at a time." },
      { speaker: "Bezoeker", gender: "female", text: "Hoe lang mag ik de boeken houden?", translation: "How long may I keep the books?" },
      { speaker: "Medewerker", gender: "male", text: "Drie weken. U kunt ze ook één keer verlengen via de website.", translation: "Three weeks. You can also extend them once via the website." },
      { speaker: "Bezoeker", gender: "female", text: "En als ik een boek te laat inlever?", translation: "And if I return a book too late?" },
      { speaker: "Medewerker", gender: "male", text: "Dan betaalt u 15 cent per dag voor elk boek.", translation: "Then you pay 15 cents per day for each book." },
      { speaker: "Bezoeker", gender: "female", text: "Begrepen. Kan ik ook e-books lenen?", translation: "Understood. Can I also borrow e-books?" },
      { speaker: "Medewerker", gender: "male", text: "Ja, dat kan. Die zijn gratis en die hoeft u niet terug te brengen. Ze verdwijnen automatisch.", translation: "Yes, you can. Those are free and you don't need to return them. They disappear automatically." },
      { speaker: "Bezoeker", gender: "female", text: "Perfect! Ik wil graag lid worden.", translation: "Perfect! I'd like to become a member." },
      { speaker: "Medewerker", gender: "male", text: "Goed. Wilt u pinnen of contant betalen?", translation: "Good. Would you like to pay by card or cash?" }
    ],
    questions: [
      { 
        question: "Waarom komt de vrouw naar de bibliotheek?", 
        options: ["Om een boek te lenen", "Om lid te worden", "Om een boek terug te brengen", "Om te studeren"], 
        correct: "Om lid te worden", 
        translation: "Why does the woman come to the library?" 
      },
      { 
        question: "Hoeveel kost het lidmaatschap?", 
        options: ["45 euro", "50 euro", "55 euro", "60 euro"], 
        correct: "55 euro", 
        translation: "How much does membership cost?" 
      },
      { 
        question: "Hoeveel boeken mag ze tegelijk lenen?", 
        options: ["Twee", "Drie", "Vier", "Vijf"], 
        correct: "Vier", 
        translation: "How many books may she borrow at a time?" 
      },
      { 
        question: "Hoe lang mag ze de boeken houden?", 
        options: ["Een week", "Twee weken", "Drie weken", "Vier weken"], 
        correct: "Drie weken", 
        translation: "How long may she keep the books?" 
      }
    ]
  },

  {
    id: 28,
    title: "Telefoongesprek - Reparatie Afspraak",
    level: "A2",
    duration: "2:15",
    category: "housing",
    dialogue: [
      { speaker: "Verhuurder", gender: "male", text: "Met Woningbeheer Utrecht, Jan Bakker.", translation: "Woningbeheer Utrecht, Jan Bakker speaking." },
      { speaker: "Huurder", gender: "female", text: "Goedemiddag, met mevrouw Vermeer. Ik bel over een probleem in mijn appartement.", translation: "Good afternoon, this is Mrs. Vermeer. I'm calling about a problem in my apartment." },
      { speaker: "Verhuurder", gender: "male", text: "Goedemiddag mevrouw Vermeer. Wat is het probleem?", translation: "Good afternoon Mrs. Vermeer. What is the problem?" },
      { speaker: "Huurder", gender: "female", text: "De verwarming doet het niet. Het is nu erg koud in huis.", translation: "The heating doesn't work. It's very cold in the house now." },
      { speaker: "Verhuurder", gender: "male", text: "Dat is vervelend. Sinds wanneer werkt de verwarming niet?", translation: "That's annoying. Since when hasn't the heating been working?" },
      { speaker: "Huurder", gender: "female", text: "Sinds gisteravond. Ik heb al geprobeerd om de thermostaat hoger te zetten, maar dat helpt niet.", translation: "Since last night. I already tried turning the thermostat up, but that doesn't help." },
      { speaker: "Verhuurder", gender: "male", text: "Oké. Dan moet er een monteur komen kijken. Bent u morgenochtend thuis?", translation: "Okay. Then a technician needs to come look. Are you home tomorrow morning?" },
      { speaker: "Huurder", gender: "female", text: "Ja, ik ben de hele ochtend thuis. Hoe laat kan hij komen?", translation: "Yes, I'm home all morning. What time can he come?" },
      { speaker: "Verhuurder", gender: "male", text: "Tussen negen en twaalf uur. Hij belt u een half uur van tevoren.", translation: "Between nine and twelve o'clock. He'll call you half an hour in advance." },
      { speaker: "Huurder", gender: "female", text: "Prima. Moet ik iets betalen voor de reparatie?", translation: "Fine. Do I need to pay anything for the repair?" },
      { speaker: "Verhuurder", gender: "male", text: "Nee, dit valt onder het onderhoud. U hoeft niets te betalen.", translation: "No, this falls under maintenance. You don't need to pay anything." },
      { speaker: "Huurder", gender: "female", text: "Gelukkig. Dank u wel voor uw hulp.", translation: "Fortunately. Thank you for your help." },
      { speaker: "Verhuurder", gender: "male", text: "Graag gedaan. De monteur komt morgen. Nog een fijne dag!", translation: "You're welcome. The technician will come tomorrow. Have a nice day!" }
    ],
    questions: [
      { 
        question: "Wat is het probleem?", 
        options: ["De kraan lekt", "De verwarming werkt niet", "Het toilet is kapot", "De deur gaat niet dicht"], 
        correct: "De verwarming werkt niet", 
        translation: "What is the problem?" 
      },
      { 
        question: "Sinds wanneer is er een probleem?", 
        options: ["Sinds vanochtend", "Sinds gisteravond", "Sinds vorige week", "Sinds gisteren"], 
        correct: "Sinds gisteravond", 
        translation: "Since when has there been a problem?" 
      },
      { 
        question: "Wanneer komt de monteur?", 
        options: ["Vandaag", "Morgenochtend", "Morgenmiddag", "Overmorgen"], 
        correct: "Morgenochtend", 
        translation: "When is the technician coming?" 
      },
      { 
        question: "Tussen hoe laat kan de monteur komen?", 
        options: ["8 en 11 uur", "9 en 12 uur", "10 en 13 uur", "11 en 14 uur"], 
        correct: "9 en 12 uur", 
        translation: "Between what times can the technician come?" 
      },
      { 
        question: "Moet de huurder betalen?", 
        options: ["Ja, 50 euro", "Ja, 100 euro", "Nee, het is gratis", "Dat is nog niet bekend"], 
        correct: "Nee, het is gratis", 
        translation: "Does the tenant need to pay?" 
      }
    ]
  },

  {
    id: 29,
    title: "Op het Postkantoor - Pakket Versturen",
    level: "A1",
    duration: "1:55",
    category: "services",
    dialogue: [
      { speaker: "Baliemedewerker", gender: "female", text: "Goedemiddag! Wat kan ik voor u doen?", translation: "Good afternoon! What can I do for you?" },
      { speaker: "Klant", gender: "male", text: "Ik wil dit pakket naar Duitsland sturen.", translation: "I want to send this package to Germany." },
      { speaker: "Baliemedewerker", gender: "female", text: "Even wegen... Het weegt 2 kilo. Wilt u het gewoon versturen of aangetekend?", translation: "Let me weigh it... It weighs 2 kilos. Do you want to send it regular or registered?" },
      { speaker: "Klant", gender: "male", text: "Wat is het verschil?", translation: "What's the difference?" },
      { speaker: "Baliemedewerker", gender: "female", text: "Bij aangetekend krijgt u een track & trace code. Dan kunt u zien waar het pakket is.", translation: "With registered mail you get a track and trace code. Then you can see where the package is." },
      { speaker: "Klant", gender: "male", text: "Oké, dan aangetekend graag. Hoeveel kost dat?", translation: "Okay, registered then please. How much does that cost?" },
      { speaker: "Baliemedewerker", gender: "female", text: "Dat is 18 euro 50.", translation: "That's 18 euros 50." },
      { speaker: "Klant", gender: "male", text: "Prima. Hoe lang duurt de verzending?", translation: "Fine. How long does shipping take?" },
      { speaker: "Baliemedewerker", gender: "female", text: "Naar Duitsland duurt het ongeveer 3 tot 5 werkdagen.", translation: "To Germany it takes about 3 to 5 working days." },
      { speaker: "Klant", gender: "male", text: "Goed. Alstublieft, mijn pinpas.", translation: "Good. Here you are, my debit card." },
      { speaker: "Baliemedewerker", gender: "female", text: "Dank u. Hier is uw bonnetje met de track & trace code.", translation: "Thank you. Here is your receipt with the track and trace code." },
      { speaker: "Klant", gender: "male", text: "Bedankt! Fijne dag nog.", translation: "Thanks! Have a nice day." },
      { speaker: "Baliemedewerker", gender: "female", text: "U ook! Tot ziens!", translation: "You too! Goodbye!" }
    ],
    questions: [
      { 
        question: "Waar wil de klant het pakket naartoe sturen?", 
        options: ["Nederland", "België", "Duitsland", "Frankrijk"], 
        correct: "Duitsland", 
        translation: "Where does the customer want to send the package?" 
      },
      { 
        question: "Hoeveel weegt het pakket?", 
        options: ["1 kilo", "2 kilo", "3 kilo", "4 kilo"], 
        correct: "2 kilo", 
        translation: "How much does the package weigh?" 
      },
      { 
        question: "Hoeveel kost het versturen?", 
        options: ["15 euro 50", "16 euro 50", "17 euro 50", "18 euro 50"], 
        correct: "18 euro 50", 
        translation: "How much does shipping cost?" 
      },
      { 
        question: "Hoe lang duurt de verzending?", 
        options: ["1-2 dagen", "3-5 dagen", "5-7 dagen", "7-10 dagen"], 
        correct: "3-5 dagen", 
        translation: "How long does shipping take?" 
      }
    ]
  },

  {
    id: 30,
    title: "In het Ziekenhuis - Specialist Bezoeken",
    level: "A2",
    duration: "2:35",
    category: "health",
    dialogue: [
      { speaker: "Specialist", gender: "male", text: "Goedemiddag mevrouw De Jong. Gaat u zitten.", translation: "Good afternoon Mrs. De Jong. Please sit down." },
      { speaker: "Patiënt", gender: "female", text: "Goedemiddag dokter.", translation: "Good afternoon doctor." },
      { speaker: "Specialist", gender: "male", text: "Uw huisarts heeft u doorverwezen. U heeft last van uw knie?", translation: "Your GP has referred you. You have trouble with your knee?" },
      { speaker: "Patiënt", gender: "female", text: "Ja, vooral als ik de trap op loop. Dan doet het erg pijn.", translation: "Yes, especially when I walk up stairs. Then it hurts a lot." },
      { speaker: "Specialist", gender: "male", text: "Sinds wanneer heeft u deze klachten?", translation: "Since when have you had these complaints?" },
      { speaker: "Patiënt", gender: "female", text: "Ongeveer drie maanden. Het werd steeds erger.", translation: "About three months. It kept getting worse." },
      { speaker: "Specialist", gender: "male", text: "Heeft u een ongeluk gehad? Bent u gevallen?", translation: "Did you have an accident? Did you fall?" },
      { speaker: "Patiënt", gender: "female", text: "Nee, niet dat ik weet. Ik sport wel veel. Ik loop drie keer per week.", translation: "No, not that I know of. I do exercise a lot. I run three times a week." },
      { speaker: "Specialist", gender: "male", text: "Aha, dat kan de oorzaak zijn. Ik wil graag een foto maken van uw knie. Een röntgenfoto.", translation: "Aha, that could be the cause. I'd like to take a picture of your knee. An X-ray." },
      { speaker: "Patiënt", gender: "female", text: "Wanneer kan dat?", translation: "When can that be done?" },
      { speaker: "Specialist", gender: "male", text: "Vandaag direct, op de afdeling radiologie. U moet wel even wachten.", translation: "Today immediately, at the radiology department. You do have to wait a bit." },
      { speaker: "Patiënt", gender: "female", text: "Dat is geen probleem. En daarna?", translation: "That's no problem. And after that?" },
      { speaker: "Specialist", gender: "male", text: "Over twee weken krijgt u de uitslag. Dan maakt u een nieuwe afspraak bij de receptie.", translation: "In two weeks you'll get the results. Then you make a new appointment at reception." },
      { speaker: "Patiënt", gender: "female", text: "Moet ik in de tussentijd iets doen?", translation: "Do I need to do anything in the meantime?" },
      { speaker: "Specialist", gender: "male", text: "Ja, rust uw knie. Stop met hardlopen voor nu. U mag wel fietsen of zwemmen.", translation: "Yes, rest your knee. Stop running for now. You may cycle or swim." },
      { speaker: "Patiënt", gender: "female", text: "Goed, ik zal het doen. Dank u wel dokter.", translation: "Alright, I'll do that. Thank you doctor." }
    ],
    questions: [
      { 
        question: "Wat is het probleem van mevrouw De Jong?", 
        options: ["Haar rug doet pijn", "Haar knie doet pijn", "Haar voet doet pijn", "Haar hand doet pijn"], 
        correct: "Haar knie doet pijn", 
        translation: "What is Mrs. De Jong's problem?" 
      },
      { 
        question: "Hoe lang heeft ze al klachten?", 
        options: ["Een maand", "Twee maanden", "Drie maanden", "Vier maanden"], 
        correct: "Drie maanden", 
        translation: "How long has she had complaints?" 
      },
      { 
        question: "Hoe vaak sport ze per week?", 
        options: ["Eén keer", "Twee keer", "Drie keer", "Vier keer"], 
        correct: "Drie keer", 
        translation: "How often does she exercise per week?" 
      },
      { 
        question: "Wat moet de dokter doen?", 
        options: ["Bloedonderzoek", "Een röntgenfoto", "Een operatie", "Medicijnen voorschrijven"], 
        correct: "Een röntgenfoto", 
        translation: "What does the doctor need to do?" 
      },
      { 
        question: "Wanneer krijgt ze de uitslag?", 
        options: ["Vandaag", "Morgen", "Over een week", "Over twee weken"], 
        correct: "Over twee weken", 
        translation: "When will she get the results?" 
      },
      { 
        question: "Wat mag ze NIET doen?", 
        options: ["Fietsen", "Zwemmen", "Hardlopen", "Wandelen"], 
        correct: "Hardlopen", 
        translation: "What may she NOT do?" 
      }
    ]
  },

  {
    id: 31,
    title: "Bij de Bank - Bankrekening Openen",
    level: "A2",
    duration: "2:20",
    category: "services",
    dialogue: [
      { speaker: "Bankmedewerker", gender: "female", text: "Goedemorgen! Neemt u plaats. Waarmee kan ik u helpen?", translation: "Good morning! Please take a seat. How can I help you?" },
      { speaker: "Klant", gender: "male", text: "Goedemorgen. Ik wil graag een bankrekening openen.", translation: "Good morning. I'd like to open a bank account." },
      { speaker: "Bankmedewerker", gender: "female", text: "Natuurlijk. Woont u in Nederland?", translation: "Of course. Do you live in the Netherlands?" },
      { speaker: "Klant", gender: "male", text: "Ja, ik ben drie weken geleden verhuisd naar Amsterdam. Ik werk hier.", translation: "Yes, I moved to Amsterdam three weeks ago. I work here." },
      { speaker: "Bankmedewerker", gender: "female", text: "Mooi. Heeft u een verblijfsvergunning en BSN-nummer?", translation: "Good. Do you have a residence permit and BSN number?" },
      { speaker: "Klant", gender: "male", text: "Ja, allebei. Hier zijn de documenten.", translation: "Yes, both. Here are the documents." },
      { speaker: "Bankmedewerker", gender: "female", text: "Perfect. Wilt u een betaalrekening of ook een spaarrekening?", translation: "Perfect. Would you like a checking account or also a savings account?" },
      { speaker: "Klant", gender: "male", text: "Alleen een betaalrekening. Wat zijn de kosten?", translation: "Just a checking account. What are the costs?" },
      { speaker: "Bankmedewerker", gender: "female", text: "Voor een gewone betaalrekening betaalt u 2 euro 50 per maand. U krijgt gratis een betaalpas.", translation: "For a regular checking account you pay 2 euros 50 per month. You get a free debit card." },
      { speaker: "Klant", gender: "male", text: "Krijg ik ook internetbankieren?", translation: "Do I also get online banking?" },
      { speaker: "Bankmedewerker", gender: "female", text: "Ja, dat is gratis. U krijgt vandaag nog de inlogcodes per post.", translation: "Yes, that's free. You'll receive the login codes by mail today." },
      { speaker: "Klant", gender: "male", text: "En wanneer kan ik de bankpas gebruiken?", translation: "And when can I use the bank card?" },
      { speaker: "Bankmedewerker", gender: "female", text: "De pas komt over 5 werkdagen. De pincode krijgt u apart, een dag later.", translation: "The card arrives in 5 working days. You'll receive the PIN code separately, one day later." },
      { speaker: "Klant", gender: "male", text: "Uitstekend. Ik wil graag de rekening openen.", translation: "Excellent. I'd like to open the account." },
      { speaker: "Bankmedewerker", gender: "female", text: "Goed. Dan moet u hier tekenen. Uw rekeningnummer krijgt u direct.", translation: "Good. Then you need to sign here. You'll get your account number immediately." }
    ],
    questions: [
      { 
        question: "Waarom komt de man naar de bank?", 
        options: ["Om geld op te nemen", "Om een rekening te openen", "Om een lening aan te vragen", "Om geld te wisselen"], 
        correct: "Om een rekening te openen", 
        translation: "Why does the man come to the bank?" 
      },
      { 
        question: "Wat voor rekening wil hij?", 
        options: ["Alleen spaarrekening", "Alleen betaalrekening", "Beide rekeningen", "Een zakelijke rekening"], 
        correct: "Alleen betaalrekening", 
        translation: "What kind of account does he want?" 
      },
      { 
        question: "Hoeveel kost de rekening per maand?", 
        options: ["1 euro 50", "2 euro", "2 euro 50", "3 euro"], 
        correct: "2 euro 50", 
        translation: "How much does the account cost per month?" 
      },
      { 
        question: "Wanneer krijgt hij de bankpas?", 
        options: ["Vandaag", "Morgen", "Over 5 werkdagen", "Over een week"], 
        correct: "Over 5 werkdagen", 
        translation: "When will he receive the bank card?" 
      },
      { 
        question: "Wanneer krijgt hij de pincode?", 
        options: ["Tegelijk met de pas", "Een dag na de pas", "Een week later", "Direct"], 
        correct: "Een dag na de pas", 
        translation: "When will he receive the PIN code?" 
      }
    ]
  },

  {
    id: 32,
    title: "Op de Sportschool - Abonnement Afsluiten",
    level: "A1",
    duration: "2:05",
    category: "leisure",
    dialogue: [
      { speaker: "Medewerker", gender: "male", text: "Goedemiddag! Welkom bij FitZone. Kan ik u helpen?", translation: "Good afternoon! Welcome to FitZone. Can I help you?" },
      { speaker: "Bezoeker", gender: "female", text: "Ja, ik wil graag informatie over een lidmaatschap.", translation: "Yes, I'd like information about membership." },
      { speaker: "Medewerker", gender: "male", text: "Natuurlijk. Wilt u alleen fitness of ook groepslessen?", translation: "Of course. Do you want just fitness or also group classes?" },
      { speaker: "Bezoeker", gender: "female", text: "Allebei graag. Welke lessen zijn er?", translation: "Both please. What classes are there?" },
      { speaker: "Medewerker", gender: "male", text: "We hebben yoga, spinning, aerobics en zumba. Elke dag verschillende lessen.", translation: "We have yoga, spinning, aerobics and zumba. Different classes every day." },
      { speaker: "Bezoeker", gender: "female", text: "Dat klinkt goed. Wat kost een abonnement?", translation: "That sounds good. What does a membership cost?" },
      { speaker: "Medewerker", gender: "male", text: "Voor fitness en lessen samen is het 39 euro per maand.", translation: "For fitness and classes together it's 39 euros per month." },
      { speaker: "Bezoeker", gender: "female", text: "En wanneer is de sportschool open?", translation: "And when is the gym open?" },
      { speaker: "Medewerker", gender: "male", text: "Maandag tot vrijdag van 6 uur 's ochtends tot 11 uur 's avonds. In het weekend van 8 tot 8.", translation: "Monday to Friday from 6 in the morning until 11 at night. On weekends from 8 to 8." },
      { speaker: "Bezoeker", gender: "female", text: "Perfect. Kan ik vandaag al beginnen?", translation: "Perfect. Can I start today?" },
      { speaker: "Medewerker", gender: "male", text: "Ja hoor. U moet alleen dit formulier invullen en uw legitimatie laten zien.", translation: "Yes sure. You just need to fill in this form and show your ID." },
      { speaker: "Bezoeker", gender: "female", text: "Goed. Krijg ik ook een persoonlijke trainer?", translation: "Good. Do I also get a personal trainer?" },
      { speaker: "Medewerker", gender: "male", text: "Eén keer gratis, voor een trainingsschema. Daarna kunt u extra sessies bijkopen.", translation: "Once for free, for a training schedule. After that you can buy extra sessions." }
    ],
    questions: [
      { 
        question: "Wat wil de vrouw?", 
        options: ["Alleen fitness", "Alleen groepslessen", "Fitness en groepslessen", "Een personal trainer"], 
        correct: "Fitness en groepslessen", 
        translation: "What does the woman want?" 
      },
      { 
        question: "Hoeveel kost het abonnement?", 
        options: ["29 euro", "35 euro", "39 euro", "45 euro"], 
        correct: "39 euro", 
        translation: "How much does the membership cost?" 
      },
      { 
        question: "Hoe laat is de sportschool open op woensdag?", 
        options: ["Van 6 tot 11", "Van 7 tot 10", "Van 8 tot 8", "Van 8 tot 10"], 
        correct: "Van 6 tot 11", 
        translation: "What time is the gym open on Wednesday?" 
      },
      { 
        question: "Wat moet ze laten zien?", 
        options: ["Haar paspoort", "Haar legitimatie", "Haar zorgpas", "Haar rijbewijs"], 
        correct: "Haar legitimatie", 
        translation: "What does she need to show?" 
      }
    ]
  },

  {
    id: 33,
    title: "In de Winkel - Kleding Ruilen",
    level: "A2",
    duration: "2:10",
    category: "shopping",
    dialogue: [
      { speaker: "Klant", gender: "male", text: "Goedemiddag. Ik wil deze broek graag ruilen.", translation: "Good afternoon. I'd like to exchange these pants." },
      { speaker: "Verkoopster", gender: "female", text: "Goedemiddag. Wat is het probleem met de broek?", translation: "Good afternoon. What's the problem with the pants?" },
      { speaker: "Klant", gender: "male", text: "Hij is te klein. Ik heb maat 32 gekocht, maar ik heb maat 34 nodig.", translation: "They're too small. I bought size 32, but I need size 34." },
      { speaker: "Verkoopster", gender: "female", text: "Heeft u de kassabon nog?", translation: "Do you still have the receipt?" },
      { speaker: "Klant", gender: "male", text: "Ja, alstublieft. Ik heb hem vorige week gekocht.", translation: "Yes, here you are. I bought them last week." },
      { speaker: "Verkoopster", gender: "female", text: "Prima. Is het label er nog aan? En heeft u hem al gedragen?", translation: "Fine. Is the label still on it? And have you already worn them?" },
      { speaker: "Klant", gender: "male", text: "Nee, ik heb hem thuis gepast. Het label zit er nog aan.", translation: "No, I tried them on at home. The label is still on." },
      { speaker: "Verkoopster", gender: "female", text: "Goed. Even kijken... We hebben maat 34 op voorraad. Dezelfde kleur?", translation: "Good. Let me see... We have size 34 in stock. Same color?" },
      { speaker: "Klant", gender: "male", text: "Ja graag, zwart.", translation: "Yes please, black." },
      { speaker: "Verkoopster", gender: "female", text: "Alstublieft. Wilt u hem passen in de paskamer?", translation: "Here you are. Would you like to try them on in the fitting room?" },
      { speaker: "Klant", gender: "male", text: "Ja, dat is goed.", translation: "Yes, that's good." },
      { speaker: "Verkoopster", gender: "female", text: "De paskamers zijn rechts achterin de winkel.", translation: "The fitting rooms are on the right at the back of the store." },
      { speaker: "Klant", gender: "male", text: "Deze past perfect! Ik neem hem.", translation: "These fit perfectly! I'll take them." },
      { speaker: "Verkoopster", gender: "female", text: "Mooi! Hier is uw nieuwe kassabon. Fijne dag nog!", translation: "Great! Here's your new receipt. Have a nice day!" }
    ],
    questions: [
      { 
        question: "Waarom wil de klant de broek ruilen?", 
        options: ["Hij is te groot", "Hij is te klein", "De kleur bevalt niet", "Er zit een gat in"], 
        correct: "Hij is te klein", 
        translation: "Why does the customer want to exchange the pants?" 
      },
      { 
        question: "Wanneer heeft hij de broek gekocht?", 
        options: ["Gisteren", "Vorige week", "Vorige maand", "Twee weken geleden"], 
        correct: "Vorige week", 
        translation: "When did he buy the pants?" 
      },
      { 
        question: "Wat moet hij laten zien?", 
        options: ["Zijn paspoort", "De kassabon", "Zijn lidmaatschap", "Zijn pinpas"], 
        correct: "De kassabon", 
        translation: "What does he need to show?" 
      },
      { 
        question: "Heeft de winkel de juiste maat?", 
        options: ["Nee", "Ja", "Alleen in een andere kleur", "Dat weet niemand"], 
        correct: "Ja", 
        translation: "Does the store have the right size?" 
      },
      { 
        question: "Waar zijn de paskamers?", 
        options: ["Links voorin", "Rechts voorin", "Links achterin", "Rechts achterin"], 
        correct: "Rechts achterin", 
        translation: "Where are the fitting rooms?" 
      }
    ]
  },

  {
    id: 34,
    title: "Telefoongesprek - Internet Storing",
    level: "A2",
    duration: "2:30",
    category: "services",
    dialogue: [
      { speaker: "Medewerker", gender: "female", text: "KPN klantenservice, met Sandra. Waarmee kan ik u helpen?", translation: "KPN customer service, this is Sandra. How can I help you?" },
      { speaker: "Klant", gender: "male", text: "Goedemiddag. Ik bel omdat mijn internet het niet doet.", translation: "Good afternoon. I'm calling because my internet isn't working." },
      { speaker: "Medewerker", gender: "female", text: "Dat is vervelend. Sinds wanneer heeft u geen internet?", translation: "That's annoying. Since when haven't you had internet?" },
      { speaker: "Klant", gender: "male", text: "Sinds vanochtend. Het werkte gisteren nog prima.", translation: "Since this morning. It was still working fine yesterday." },
      { speaker: "Medewerker", gender: "female", text: "Oké. Branden er lampjes op uw modem?", translation: "Okay. Are there lights on your modem?" },
      { speaker: "Klant", gender: "male", text: "Ja, er brandt een groen en een rood lampje.", translation: "Yes, there's a green and a red light." },
      { speaker: "Medewerker", gender: "female", text: "Het rode lampje betekent dat er een storing is. Heeft u de modem al uit en aan gezet?", translation: "The red light means there's a malfunction. Have you already turned the modem off and on?" },
      { speaker: "Klant", gender: "male", text: "Nee, dat heb ik nog niet geprobeerd.", translation: "No, I haven't tried that yet." },
      { speaker: "Medewerker", gender: "female", text: "Wilt u dat nu doen? Haal de stekker eruit, wacht 10 seconden en steek hem er weer in.", translation: "Would you like to do that now? Unplug it, wait 10 seconds and plug it back in." },
      { speaker: "Klant", gender: "male", text: "Oké, moment... Ja, ik heb het gedaan. Nu branden alle lampjes groen!", translation: "Okay, one moment... Yes, I've done it. Now all the lights are green!" },
      { speaker: "Medewerker", gender: "female", text: "Perfect! Kunt u nu op internet?", translation: "Perfect! Can you access the internet now?" },
      { speaker: "Klant", gender: "male", text: "Ja, het werkt weer! Dank u wel voor uw hulp.", translation: "Yes, it's working again! Thank you for your help." },
      { speaker: "Medewerker", gender: "female", text: "Graag gedaan. Als het weer gebeurt, weet u wat u moet doen. Fijne dag!", translation: "You're welcome. If it happens again, you know what to do. Have a nice day!" },
      { speaker: "Klant", gender: "male", text: "Ja, dank u. Dag!", translation: "Yes, thank you. Bye!" }
    ],
    questions: [
      { 
        question: "Wat is het probleem?", 
        options: ["De telefoon doet het niet", "Het internet werkt niet", "De televisie is kapot", "De modem is weg"], 
        correct: "Het internet werkt niet", 
        translation: "What is the problem?" 
      },
      { 
        question: "Sinds wanneer is er een probleem?", 
        options: ["Sinds gisteren", "Sinds vanochtend", "Sinds vorige week", "Sinds een uur"], 
        correct: "Sinds vanochtend", 
        translation: "Since when has there been a problem?" 
      },
      { 
        question: "Welke lampjes branden eerst op de modem?", 
        options: ["Twee groene", "Twee rode", "Groen en rood", "Alleen rood"], 
        correct: "Groen en rood", 
        translation: "Which lights are on the modem first?" 
      },
      { 
        question: "Wat moet de klant doen?", 
        options: ["Een monteur bellen", "De modem uit en aan zetten", "Een nieuwe modem kopen", "Wachten tot morgen"], 
        correct: "De modem uit en aan zetten", 
        translation: "What should the customer do?" 
      },
      { 
        question: "Werkt het internet weer?", 
        options: ["Nee", "Ja", "Soms", "Nog niet bekend"], 
        correct: "Ja", 
        translation: "Does the internet work again?" 
      }
    ]
  },

  {
    id: 35,
    title: "Bij de Kinderopvang - Kind Aanmelden",
    level: "A2",
    duration: "2:40",
    category: "education",
    dialogue: [
      { speaker: "Leidster", gender: "female", text: "Goedemiddag! U komt voor de rondleiding?", translation: "Good afternoon! You're here for the tour?" },
      { speaker: "Ouder", gender: "male", text: "Ja, klopt. Ik wil mijn zoon hier aanmelden voor de kinderopvang.", translation: "Yes, correct. I want to register my son here for childcare." },
      { speaker: "Leidster", gender: "female", text: "Leuk! Hoe oud is uw zoon?", translation: "Nice! How old is your son?" },
      { speaker: "Ouder", gender: "male", text: "Hij is anderhalf jaar. Hij heet Max.", translation: "He's one and a half years old. His name is Max." },
      { speaker: "Leidster", gender: "female", text: "Welkom Max! Hoeveel dagen per week wilt u kinderopvang?", translation: "Welcome Max! How many days per week do you want childcare?" },
      { speaker: "Ouder", gender: "male", text: "Drie dagen: maandag, woensdag en vrijdag. Hele dagen.", translation: "Three days: Monday, Wednesday and Friday. Full days." },
      { speaker: "Leidster", gender: "female", text: "Dat kan. We zijn open van 7 uur 's ochtends tot 6 uur 's avonds.", translation: "That's possible. We're open from 7 in the morning until 6 in the evening." },
      { speaker: "Ouder", gender: "male", text: "Perfect. Hoeveel kinderen zitten er in een groep?", translation: "Perfect. How many children are in a group?" },
      { speaker: "Leidster", gender: "female", text: "Bij de peuters maximaal 12 kinderen. Er zijn altijd drie leidsters aanwezig.", translation: "With the toddlers maximum 12 children. There are always three caregivers present." },
      { speaker: "Ouder", gender: "male", text: "Mooi. Krijgen de kinderen ook eten?", translation: "Good. Do the children also get food?" },
      { speaker: "Leidster", gender: "female", text: "Ja, we hebben ontbijt, lunch en een tussendoortje. Alles is biologisch.", translation: "Yes, we have breakfast, lunch and a snack. Everything is organic." },
      { speaker: "Ouder", gender: "male", text: "Uitstekend. En wat kost de opvang per maand?", translation: "Excellent. And what does the childcare cost per month?" },
      { speaker: "Leidster", gender: "female", text: "Voor drie hele dagen is dat ongeveer 900 euro. Maar u krijgt kinderopvangtoeslag van de overheid.", translation: "For three full days that's about 900 euros. But you get childcare allowance from the government." },
      { speaker: "Ouder", gender: "male", text: "Hoeveel krijg ik terug?", translation: "How much do I get back?" },
      { speaker: "Leidster", gender: "female", text: "Dat hangt van uw inkomen af. Vaak tussen de 70 en 95 procent.", translation: "That depends on your income. Often between 70 and 95 percent." },
      { speaker: "Ouder", gender: "male", text: "Dat is goed nieuws. Wanneer kan Max beginnen?", translation: "That's good news. When can Max start?" },
      { speaker: "Leidster", gender: "female", text: "Als u het contract volgende week tekent, kan hij over twee weken starten.", translation: "If you sign the contract next week, he can start in two weeks." }
    ],
    questions: [
      { 
        question: "Hoe oud is Max?", 
        options: ["Een jaar", "Anderhalf jaar", "Twee jaar", "Drie jaar"], 
        correct: "Anderhalf jaar", 
        translation: "How old is Max?" 
      },
      { 
        question: "Hoeveel dagen per week wil de vader opvang?", 
        options: ["Twee dagen", "Drie dagen", "Vier dagen", "Vijf dagen"], 
        correct: "Drie dagen", 
        translation: "How many days per week does the father want childcare?" 
      },
      { 
        question: "Hoeveel kinderen zitten in een groep?", 
        options: ["Maximaal 8", "Maximaal 10", "Maximaal 12", "Maximaal 15"], 
        correct: "Maximaal 12", 
        translation: "How many children are in a group?" 
      },
      { 
        question: "Wat kost de opvang per maand?", 
        options: ["700 euro", "800 euro", "900 euro", "1000 euro"], 
        correct: "900 euro", 
        translation: "What does childcare cost per month?" 
      },
      { 
        question: "Hoeveel procent krijgt hij terug?", 
        options: ["50-70%", "60-80%", "70-95%", "80-100%"], 
        correct: "70-95%", 
        translation: "What percentage does he get back?" 
      },
      { 
        question: "Wanneer kan Max beginnen?", 
        options: ["Direct", "Volgende week", "Over twee weken", "Over een maand"], 
        correct: "Over twee weken", 
        translation: "When can Max start?" 
      }
    ]
  },

  {
    id: 36,
    title: "Op het Werk - Sollicitatiegesprek",
    level: "A2",
    duration: "2:50",
    category: "work",
    dialogue: [
      { speaker: "Werkgever", gender: "male", text: "Goedemiddag mevrouw Bakker. Welkom! Gaat u zitten.", translation: "Good afternoon Mrs. Bakker. Welcome! Please sit down." },
      { speaker: "Sollicitant", gender: "female", text: "Dank u wel. Aangenaam.", translation: "Thank you. Pleased to meet you." },
      { speaker: "Werkgever", gender: "male", text: "U heeft gesolliciteerd voor de functie van verkoopmedewerker. Vertel eens iets over uzelf.", translation: "You've applied for the position of sales assistant. Tell me something about yourself." },
      { speaker: "Sollicitant", gender: "female", text: "Ik ben 28 jaar en ik woon in Rotterdam. Ik heb drie jaar ervaring in de verkoop.", translation: "I'm 28 years old and I live in Rotterdam. I have three years of experience in sales." },
      { speaker: "Werkgever", gender: "male", text: "Waar heeft u eerder gewerkt?", translation: "Where did you work before?" },
      { speaker: "Sollicitant", gender: "female", text: "Bij een kledingwinkel in het centrum. Ik werkte daar in het weekend en twee avonden per week.", translation: "At a clothing store in the center. I worked there on weekends and two evenings a week." },
      { speaker: "Werkgever", gender: "male", text: "En waarom wilt u bij ons werken?", translation: "And why do you want to work for us?" },
      { speaker: "Sollicitant", gender: "female", text: "Ik vind uw winkel erg professioneel. En ik woon dichtbij, dus dat is handig.", translation: "I find your store very professional. And I live nearby, so that's convenient." },
      { speaker: "Werkgever", gender: "male", text: "Kunt u ook op zaterdag werken?", translation: "Can you also work on Saturdays?" },
      { speaker: "Sollicitant", gender: "female", text: "Ja, geen probleem. Ik kan alle dagen.", translation: "Yes, no problem. I'm available all days." },
      { speaker: "Werkgever", gender: "male", text: "Mooi. Spreekt u ook Engels?", translation: "Good. Do you also speak English?" },
      { speaker: "Sollicitant", gender: "female", text: "Ja, ik spreek goed Engels. En een beetje Duits.", translation: "Yes, I speak English well. And a little German." },
      { speaker: "Werkgever", gender: "male", text: "Uitstekend. We hebben veel internationale klanten. Wanneer kunt u beginnen?", translation: "Excellent. We have many international customers. When can you start?" },
      { speaker: "Sollicitant", gender: "female", text: "Ik moet twee weken opzegtermijn geven bij mijn huidige baan. Dus over drie weken.", translation: "I need to give two weeks notice at my current job. So in three weeks." },
      { speaker: "Werkgever", gender: "male", text: "Dat is prima. We nemen deze week een beslissing. U hoort van ons.", translation: "That's fine. We'll make a decision this week. You'll hear from us." },
      { speaker: "Sollicitant", gender: "female", text: "Dank u wel voor het gesprek. Tot ziens.", translation: "Thank you for the interview. Goodbye." }
    ],
    questions: [
      { 
        question: "Voor welke functie solliciteert ze?", 
        options: ["Magazijnmedewerker", "Verkoopmedewerker", "Schoonmaker", "Kassière"], 
        correct: "Verkoopmedewerker", 
        translation: "What position is she applying for?" 
      },
      { 
        question: "Hoeveel jaar ervaring heeft ze?", 
        options: ["Een jaar", "Twee jaar", "Drie jaar", "Vier jaar"], 
        correct: "Drie jaar", 
        translation: "How many years of experience does she have?" 
      },
      { 
        question: "Waar heeft ze eerder gewerkt?", 
        options: ["Bij een supermarkt", "Bij een kledingwinkel", "Bij een restaurant", "Bij een school"], 
        correct: "Bij een kledingwinkel", 
        translation: "Where did she work before?" 
      },
      { 
        question: "Welke talen spreekt ze?", 
        options: ["Alleen Nederlands", "Nederlands en Engels", "Nederlands, Engels en Duits", "Alleen Engels"], 
        correct: "Nederlands, Engels en Duits", 
        translation: "Which languages does she speak?" 
      },
      { 
        question: "Wanneer kan ze beginnen?", 
        options: ["Direct", "Over een week", "Over twee weken", "Over drie weken"], 
        correct: "Over drie weken", 
        translation: "When can she start?" 
      }
    ]
  },
]

export const conversations = conversations1;