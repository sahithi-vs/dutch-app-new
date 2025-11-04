// data/conversations.js - All female version (complete with all dialogues and updated questions)

export const conversations1 = [
  {
    id: 1,
    title: "At the Restaurant - Food Conversation",
    level: "A1",
    duration: "1:00",
    category: "food",
    dialogue: [
      { speaker: "Emma", gender: "female", text: "Hallo! Wat wil je eten vandaag?", translation: "Hello! What do you want to eat today?" },
      { speaker: "Lotte", gender: "female", text: "Ik heb honger! Ik wil een broodje met kaas.", translation: "I'm hungry! I want a sandwich with cheese." },
      { speaker: "Emma", gender: "female", text: "Dat klinkt lekker! Ik neem een salade met tomaten en komkommer.", translation: "That sounds delicious! I'll have a salad with tomatoes and cucumber." },
      { speaker: "Lotte", gender: "female", text: "Wil je ook iets drinken? Ik drink koffie met melk.", translation: "Do you also want something to drink? I'm drinking coffee with milk." },
      { speaker: "Emma", gender: "female", text: "Ja, graag! Ik drink thee met citroen. Wat eten we als toetje?", translation: "Yes, please! I'm drinking tea with lemon. What are we eating for dessert?" },
      { speaker: "Lotte", gender: "female", text: "Misschien een appeltaart? Of chocolade-ijs?", translation: "Maybe an apple pie? Or chocolate ice cream?" },
      { speaker: "Emma", gender: "female", text: "Chocolade-ijs! Dat is mijn favoriet. Smakelijk eten!", translation: "Chocolate ice cream! That's my favorite. Enjoy your meal!" },
      { speaker: "Lotte", gender: "female", text: "Dank je wel! Eet smakelijk!", translation: "Thank you! Bon appétit!" }
    ],
    questions: [
      { question: "Wat wil Lotte eten?", options: ["Een broodje met kaas", "Een salade", "Chocolade-ijs", "Appeltaart"], correct: "Een broodje met kaas", translation: "What does Lotte want to eat?" },
      { question: "Wat drinkt Emma?", options: ["Koffie met melk", "Thee met citroen", "Water", "Sap"], correct: "Thee met citroen", translation: "What does Emma drink?" },
      { question: "Wat is Emma's favoriet toetje?", options: ["Appeltaart", "Vanille-ijs", "Chocolade-ijs", "Cake"], correct: "Chocolade-ijs", translation: "What is Emma's favorite dessert?" },
      { question: "Wat zit er in Emma's salade?", options: ["Tomaten en komkommer", "Kaas en brood", "Appels en citroen", "Chocolade en melk"], correct: "Tomaten en komkommer", translation: "What's in Emma's salad?" }
    ]
  },
  {
    id: 2,
    title: "Meeting Old Friends",
    level: "A1",
    duration: "1:00",
    category: "friends",
    dialogue: [
      { speaker: "Sophie", gender: "female", text: "Hé! Lange tijd niet gezien! Hoe gaat het met je?", translation: "Hey! Long time no see! How are you?" },
      { speaker: "Sanne", gender: "female", text: "Goed, dank je! En met jou? Je ziet er goed uit!", translation: "Good, thanks! And you? You look good!" },
      { speaker: "Sophie", gender: "female", text: "Met mij gaat het prima! Ik werk nu in Amsterdam. En jij?", translation: "I'm doing great! I work in Amsterdam now. And you?" },
      { speaker: "Sanne", gender: "female", text: "Ik studeer nog steeds in Utrecht. Ik studeer Nederlands en Engels.", translation: "I'm still studying in Utrecht. I'm studying Dutch and English." },
      { speaker: "Sophie", gender: "female", text: "Dat is leuk! Woon je nog bij je ouders?", translation: "That's nice! Do you still live with your parents?" },
      { speaker: "Sanne", gender: "female", text: "Nee, ik heb een klein appartement met een vriendin. En jij?", translation: "No, I have a small apartment with a friend. And you?" },
      { speaker: "Sophie", gender: "female", text: "Ik woon alleen in een studio in het centrum. Het is klein maar gezellig.", translation: "I live alone in a studio in the center. It's small but cozy." },
      { speaker: "Sanne", gender: "female", text: "Zullen we binnenkort afspreken? We kunnen samen koffie drinken!", translation: "Shall we meet up soon? We can have coffee together!" },
      { speaker: "Sophie", gender: "female", text: "Ja, goed idee! Zaterdag misschien? Om twee uur?", translation: "Yes, good idea! Saturday maybe? At two o'clock?" },
      { speaker: "Sanne", gender: "female", text: "Perfect! Tot zaterdag dan. Dag!", translation: "Perfect! See you Saturday then. Bye!" }
    ],
    questions: [
      { question: "Waar werkt Sophie nu?", options: ["In Amsterdam", "In Utrecht", "In Rotterdam", "In Den Haag"], correct: "In Amsterdam", translation: "Where does Sophie work now?" },
      { question: "Wat studeert Sanne?", options: ["Geschiedenis", "Nederlands en Engels", "Wiskunde", "Kunst"], correct: "Nederlands en Engels", translation: "What does Sanne study?" },
      { question: "Waar woont Sophie?", options: ["Bij haar ouders", "In een groot huis", "In een studio in het centrum", "Met vrienden"], correct: "In een studio in het centrum", translation: "Where does Sophie live?" },
      { question: "Wanneer spreken ze af?", options: ["Vrijdag om drie uur", "Zaterdag om twee uur", "Zondag om vier uur", "Maandag om één uur"], correct: "Zaterdag om twee uur", translation: "When are they meeting?" }
    ]
  },
  {
    id: 3,
    title: "Shopping for Groceries",
    level: "A2",
    duration: "1:00",
    category: "food",
     dialogue: [
      { speaker: "Maria", gender: "female", text: "We moeten boodschappen doen. Wat hebben we nodig?", translation: "We need to go grocery shopping. What do we need?" },
      { speaker: "Noa", gender: "female", text: "Kijk op de lijst. We hebben brood, melk, en eieren nodig.", translation: "Look at the list. We need bread, milk, and eggs." },
      { speaker: "Maria", gender: "female", text: "En groenten? We hebben geen aardappelen en wortelen meer.", translation: "And vegetables? We don't have any more potatoes and carrots." },
      { speaker: "Noa", gender: "female", text: "Goed idee. En fruit ook. Appels en bananen zijn gezond.", translation: "Good idea. And fruit too. Apples and bananas are healthy." },
      { speaker: "Maria", gender: "female", text: "Moeten we ook vlees kopen? Misschien kip of vis?", translation: "Should we also buy meat? Maybe chicken or fish?" },
      { speaker: "Noa", gender: "female", text: "Ja, vis is lekker. En kaas vergeten we altijd!", translation: "Yes, fish is delicious. And we always forget cheese!" },
      { speaker: "Maria", gender: "female", text: "Ha! Dat is waar. Nederlandse kaas is de beste. Hoeveel kost alles?", translation: "Ha! That's true. Dutch cheese is the best. How much does everything cost?" },
      { speaker: "Noa", gender: "female", text: "Ongeveer vijftig euro, denk ik. We hebben genoeg geld.", translation: "About fifty euros, I think. We have enough money." }
    ],
    questions: [
      { question: "Wat staat er NIET op hun boodschappenlijst?", options: ["Brood en melk", "Appels en bananen", "Pizza en friet", "Aardappelen en wortelen"], correct: "Pizza en friet", translation: "What is NOT on their shopping list?" },
      { question: "Welk vlees willen ze kopen?", options: ["Kip", "Vis", "Varkensvlees", "Rundvlees"], correct: "Vis", translation: "What meat do they want to buy?" },
      { question: "Hoeveel geld denkt Noa dat het kost?", options: ["Twintig euro", "Dertig euro", "Vijftig euro", "Honderd euro"], correct: "Vijftig euro", translation: "How much money does Noa think it will cost?" },
      { question: "Wat vergeten ze altijd?", options: ["Eieren", "Melk", "Kaas", "Brood"], correct: "Kaas", translation: "What do they always forget?" }
    ]
  },
  {
    id: 4,
    title: "At the Train Station",
    level: "A1",
    duration: "1:00",
    category: "travel",
     dialogue: [
      { speaker: "Fleur", gender: "female", text: "Goedemorgen! Gaat deze trein naar Rotterdam?", translation: "Good morning! Does this train go to Rotterdam?" },
      { speaker: "Lisa", gender: "female", text: "Nee, deze gaat naar Utrecht. De trein naar Rotterdam vertrekt van spoor 5.", translation: "No, this one goes to Utrecht. The train to Rotterdam leaves from platform 5." },
      { speaker: "Fleur", gender: "female", text: "Dank je wel! Hoe laat vertrekt die trein?", translation: "Thank you! What time does that train leave?" },
      { speaker: "Lisa", gender: "female", text: "Over tien minuten, om half negen.", translation: "In ten minutes, at half past eight." },
      { speaker: "Fleur", gender: "female", text: "Perfect! Dan heb ik nog tijd voor koffie.", translation: "Perfect! Then I still have time for coffee." },
      { speaker: "Lisa", gender: "female", text: "Ja, er is een café naast de ingang.", translation: "Yes, there’s a café next to the entrance." }
    ],
    questions: [
      { question: "Waar gaat de trein van Fleur naartoe?", options: ["Rotterdam", "Utrecht", "Den Haag", "Leiden"], correct: "Rotterdam", translation: "Where is Fleur’s train going?" },
      { question: "Vanaf welk spoor vertrekt de trein?", options: ["Spoor 1", "Spoor 5", "Spoor 3", "Spoor 7"], correct: "Spoor 5", translation: "From which platform does the train leave?" },
      { question: "Hoe laat vertrekt de trein?", options: ["Om acht uur", "Om half negen", "Om negen uur", "Om kwart voor negen"], correct: "Om half negen", translation: "What time does the train leave?" }
    ]
  },
  {
    id: 5,
    title: "At the Supermarket",
    level: "A2",
    duration: "1:00",
    category: "shopping",
     dialogue: [
      { speaker: "Eva", gender: "female", text: "Goedemiddag! Waar vind ik de melk?", translation: "Good afternoon! Where can I find the milk?" },
      { speaker: "Iris", gender: "female", text: "De melk staat achteraan, naast de yoghurt.", translation: "The milk is in the back, next to the yogurt." },
      { speaker: "Eva", gender: "female", text: "Dank je! En waar is de kassa?", translation: "Thanks! And where is the checkout?" },
      { speaker: "Iris", gender: "female", text: "Rechts van de ingang, bij de bloemenafdeling.", translation: "To the right of the entrance, near the flower section." },
      { speaker: "Eva", gender: "female", text: "Perfect, ik heb alles. Fijne dag nog!", translation: "Perfect, I have everything. Have a nice day!" },
      { speaker: "Iris", gender: "female", text: "Jij ook, tot ziens!", translation: "You too, goodbye!" }
    ],
    questions: [
      { question: "Waar staat de melk?", options: ["Bij de ingang", "Naast de yoghurt", "Bij de bloemenafdeling", "Bij de kassa"], correct: "Naast de yoghurt", translation: "Where is the milk?" },
      { question: "Waar is de kassa?", options: ["Links van de ingang", "Rechts van de ingang", "Achteraan in de winkel", "Naast de melk"], correct: "Rechts van de ingang", translation: "Where is the checkout?" }
    ]
  },
  {
    id: 6,
    title: "Making an Appointment",
    level: "A2",
    duration: "1:00",
    category: "daily life",
     dialogue: [
      { speaker: "Anna", gender: "female", text: "Hallo, met Anna. Ik wil graag een afspraak maken met de dokter.", translation: "Hello, this is Anna. I’d like to make an appointment with the doctor." },
      { speaker: "Emma", gender: "female", text: "Natuurlijk! Wanneer wilt u komen?", translation: "Of course! When would you like to come?" },
      { speaker: "Anna", gender: "female", text: "Kan het morgen in de ochtend?", translation: "Can it be tomorrow in the morning?" },
      { speaker: "Emma", gender: "female", text: "Morgen om tien uur is nog vrij. Past dat?", translation: "Tomorrow at ten o’clock is still free. Does that work?" },
      { speaker: "Anna", gender: "female", text: "Ja, dat is goed. Bedankt!", translation: "Yes, that’s fine. Thank you!" },
      { speaker: "Emma", gender: "female", text: "Graag gedaan. Tot morgen!", translation: "You’re welcome. See you tomorrow!" }
    ],
    questions: [
      { question: "Wie belt de dokter?", options: ["Anna", "Emma", "Lotte", "Eva"], correct: "Anna", translation: "Who is calling the doctor?" },
      { question: "Wanneer is de afspraak?", options: ["Vandaag", "Morgen om tien uur", "Vanmiddag", "Volgende week"], correct: "Morgen om tien uur", translation: "When is the appointment?" },
      { question: "Met wie spreekt Anna?", options: ["Met de dokter", "Met Emma", "Met de assistent", "Met Eva"], correct: "Met Emma", translation: "Who is Anna talking to?" }
    ]
  },
  {
    id: 7,
    title: "At Work – Discussing a Project",
    level: "B1",
    duration: "1:20",
    category: "work",
     dialogue: [
      { speaker: "Mila", gender: "female", text: "Goedemorgen, Lisa. Heb je de nieuwe projectplanning al bekeken?", translation: "Good morning, Lisa. Have you already looked at the new project schedule?" },
      { speaker: "Lisa", gender: "female", text: "Ja, ik heb het gisteren doorgenomen. We moeten waarschijnlijk de deadline verplaatsen.", translation: "Yes, I reviewed it yesterday. We probably need to move the deadline." },
      { speaker: "Mila", gender: "female", text: "Mee eens. Het team heeft meer tijd nodig voor de testfase.", translation: "I agree. The team needs more time for the testing phase." },
      { speaker: "Lisa", gender: "female", text: "Zal ik een nieuw schema maken en het met de manager bespreken?", translation: "Shall I make a new schedule and discuss it with the manager?" },
      { speaker: "Mila", gender: "female", text: "Ja, graag. En voeg ook de feedback van de klant toe.", translation: "Yes, please. And include the client’s feedback as well." },
      { speaker: "Lisa", gender: "female", text: "Komt goed! Ik stuur vanmiddag de update.", translation: "Will do! I’ll send the update this afternoon." }
    ],
    questions: [
      { question: "Wat wil Lisa doen met de planning?", options: ["Ze wil het verwijderen", "Ze wil het aanpassen en bespreken met de manager", "Ze wil het project stoppen", "Ze wil een vakantie plannen"], correct: "Ze wil het aanpassen en bespreken met de manager", translation: "What does Lisa want to do with the schedule?" },
      { question: "Waarom moet de deadline verplaatst worden?", options: ["Omdat het team meer tijd nodig heeft", "Omdat de klant het vroeg", "Omdat Mila op vakantie gaat", "Omdat er geen budget is"], correct: "Omdat het team meer tijd nodig heeft", translation: "Why does the deadline need to be moved?" }
    ]
  },
  {
    id: 8,
    title: "At the Doctor’s Office",
    level: "B1",
    duration: "1:15",
    category: "health",
    dialogue: [
      { speaker: "Nina", gender: "female", text: "Goedemiddag, dokter. Ik heb al drie dagen hoofdpijn en ben erg moe.", translation: "Good afternoon, doctor. I’ve had a headache for three days and feel very tired." },
      { speaker: "Dokter De Vries", gender: "female", text: "Begrijpelijk. Heeft u ook koorts of keelpijn?", translation: "I see. Do you also have a fever or a sore throat?" },
      { speaker: "Nina", gender: "female", text: "Een beetje keelpijn, maar geen koorts.", translation: "A bit of a sore throat, but no fever." },
      { speaker: "Dokter De Vries", gender: "female", text: "Waarschijnlijk is het een verkoudheid. Rust goed uit en drink veel water.", translation: "It’s probably a cold. Get some rest and drink plenty of water." },
      { speaker: "Nina", gender: "female", text: "Dank u, dokter. Moet ik medicijnen nemen?", translation: "Thank you, doctor. Should I take any medicine?" },
      { speaker: "Dokter De Vries", gender: "female", text: "Alleen paracetamol als de pijn blijft. Als u zich erger voelt, kom dan terug.", translation: "Only paracetamol if the pain continues. If you feel worse, come back." }
    ],
    questions: [
      { question: "Wat zijn Nina’s klachten?", options: ["Hoofdpijn en vermoeidheid", "Buikpijn en koorts", "Keelpijn en hoest", "Rugpijn en verkoudheid"], correct: "Hoofdpijn en vermoeidheid", translation: "What symptoms does Nina have?" },
      { question: "Wat raadt dokter De Vries aan?", options: ["Rust en water drinken", "Veel sporten", "Medicijnen nemen zonder recept", "Een ziekenhuisbezoek"], correct: "Rust en water drinken", translation: "What does doctor De Vries recommend?" }
    ]
  },
  {
    id: 9,
    title: "Renting an Apartment",
    level: "B1",
    duration: "1:30",
    category: "housing",
    dialogue: [
      { speaker: "Sophie", gender: "female", text: "Goedemiddag, ik bel over het appartement in het centrum. Is het nog beschikbaar?", translation: "Good afternoon, I’m calling about the apartment in the city center. Is it still available?" },
      { speaker: "Mevrouw Jansen", gender: "female", text: "Ja, het is nog vrij. Wilt u het komen bezichtigen?", translation: "Yes, it’s still available. Would you like to come see it?" },
      { speaker: "Sophie", gender: "female", text: "Graag! Wanneer kan ik langskomen?", translation: "Gladly! When can I come by?" },
      { speaker: "Mevrouw Jansen", gender: "female", text: "Morgen om elf uur zou goed zijn. Past dat voor u?", translation: "Tomorrow at eleven o’clock would be good. Does that suit you?" },
      { speaker: "Sophie", gender: "female", text: "Ja, dat past prima. Hoeveel is de huur per maand?", translation: "Yes, that works perfectly. How much is the rent per month?" },
      { speaker: "Mevrouw Jansen", gender: "female", text: "De huur is negenhonderd euro inclusief gas en water.", translation: "The rent is nine hundred euros, including gas and water." },
      { speaker: "Sophie", gender: "female", text: "Dat klinkt goed. Tot morgen!", translation: "That sounds good. See you tomorrow!" },
      { speaker: "Mevrouw Jansen", gender: "female", text: "Tot morgen, mevrouw!", translation: "See you tomorrow, ma’am!" }
    ],
    questions: [
      { question: "Waar ligt het appartement?", options: ["In het centrum", "In de buitenwijk", "In Rotterdam", "Bij het station"], correct: "In het centrum", translation: "Where is the apartment located?" },
      { question: "Hoeveel kost de huur per maand?", options: ["700 euro", "800 euro", "900 euro", "1000 euro"], correct: "900 euro", translation: "How much is the rent per month?" },
      { question: "Wanneer gaat Sophie het appartement bekijken?", options: ["Vandaag", "Morgen om elf uur", "Vanavond", "Volgende week"], correct: "Morgen om elf uur", translation: "When will Sophie view the apartment?" }
    ]
  },
  {
    id: 10,
    title: "Ordering at a Café",
    level: "A1",
    duration: "1:00",
    category: "food",
    dialogue: [
      { speaker: "Laura", gender: "female", text: "Goedemiddag! Mag ik een cappuccino alstublieft?", translation: "Good afternoon! May I have a cappuccino, please?" },
      { speaker: "Fleur", gender: "female", text: "Natuurlijk! Wilt u er iets bij, misschien een koekje of taart?", translation: "Of course! Would you like something with it, maybe a cookie or cake?" },
      { speaker: "Laura", gender: "female", text: "Ja, graag. Een stuk appeltaart alstublieft.", translation: "Yes, please. A piece of apple pie, please." },
      { speaker: "Fleur", gender: "female", text: "Prima. Dat is vijf euro vijftig. Wilt u contant betalen of met pin?", translation: "Great. That’s five euros fifty. Will you pay cash or by card?" },
      { speaker: "Laura", gender: "female", text: "Met pin, alsjeblieft.", translation: "By card, please." },
      { speaker: "Fleur", gender: "female", text: "Dank u! Uw cappuccino komt zo.", translation: "Thank you! Your cappuccino is coming right up." }
    ],
    questions: [
      { question: "Wat bestelt Laura?", options: ["Koffie", "Cappuccino", "Thee", "Warme chocolademelk"], correct: "Cappuccino", translation: "What does Laura order?" },
      { question: "Wat wil Laura erbij?", options: ["Koekje", "Appeltaart", "Sandwich", "Niets"], correct: "Appeltaart", translation: "What does Laura want with it?" },
      { question: "Hoe betaalt Laura?", options: ["Contant", "Met pin", "Met kaart", "Ze betaalt niet"], correct: "Met pin", translation: "How does Laura pay?" }
    ]
  },
  {
  id: 11,
  title: "At the Bakery",
  level: "A1",
  duration: "1:00",
  category: "food",
  dialogue: [
    { speaker: "Nora", gender: "female", text: "Goedemorgen! Ik wil graag twee croissantjes en een brood.", translation: "Good morning! I’d like two croissants and a loaf of bread." },
    { speaker: "Lina", gender: "female", text: "Wit of bruin brood?", translation: "White or brown bread?" },
    { speaker: "Nora", gender: "female", text: "Bruin, alstublieft. En heeft u ook taart?", translation: "Brown, please. And do you also have cake?" },
    { speaker: "Lina", gender: "female", text: "Ja, we hebben appel- en chocoladetaart.", translation: "Yes, we have apple and chocolate cake." },
    { speaker: "Nora", gender: "female", text: "Dan neem ik een stuk appeltaart. Hoeveel kost het totaal?", translation: "Then I’ll take a piece of apple pie. How much is it in total?" },
    { speaker: "Lina", gender: "female", text: "Dat is zeven euro vijftig.", translation: "That’s seven euros fifty." }
  ],
  questions: [
    { question: "Wat wil Nora kopen?", options: ["Twee croissantjes en een brood", "Alleen taart", "Koffie en brood", "Chocolade"], correct: "Twee croissantjes en een brood", translation: "What does Nora want to buy?" },
    { question: "Welk brood kiest ze?", options: ["Wit brood", "Bruin brood", "Geen brood", "Zoet brood"], correct: "Bruin brood", translation: "Which bread does she choose?" },
    { question: "Welke taart neemt Nora?", options: ["Chocoladetaart", "Appeltaart", "Citroentaart", "Geen taart"], correct: "Appeltaart", translation: "Which cake does Nora take?" }
  ]
},
{
  id: 12,
  title: "Buying Clothes",
  level: "A2",
  duration: "1:15",
  category: "shopping",
  dialogue: [
    { speaker: "Iris", gender: "female", text: "Hallo! Ik zoek een blauwe jurk voor een feest.", translation: "Hello! I'm looking for a blue dress for a party." },
    { speaker: "Naomi", gender: "female", text: "We hebben nieuwe jurken achteraan in de winkel.", translation: "We have new dresses in the back of the store." },
    { speaker: "Iris", gender: "female", text: "Dank je! Mag ik deze passen?", translation: "Thanks! May I try this one on?" },
    { speaker: "Naomi", gender: "female", text: "Natuurlijk. De paskamers zijn rechts.", translation: "Of course. The fitting rooms are on the right." },
    { speaker: "Iris", gender: "female", text: "Hij past goed! Hoeveel kost hij?", translation: "It fits well! How much does it cost?" },
    { speaker: "Naomi", gender: "female", text: "Die jurk kost vijfenzeventig euro.", translation: "That dress costs seventy-five euros." }
  ],
  questions: [
    { question: "Wat zoekt Iris?", options: ["Een blauwe jurk", "Een rode rok", "Een jas", "Een trui"], correct: "Een blauwe jurk", translation: "What is Iris looking for?" },
    { question: "Waar zijn de paskamers?", options: ["Links", "Rechts", "Achteraan", "Voorin"], correct: "Rechts", translation: "Where are the fitting rooms?" },
    { question: "Hoeveel kost de jurk?", options: ["Vijftig euro", "Zeventig euro", "Vijfenzeventig euro", "Honderd euro"], correct: "Vijfenzeventig euro", translation: "How much does the dress cost?" }
  ]
},

{
  id: 13,
  title: "At the Library",
  level: "A1",
  duration: "1:05",
  category: "daily life",
  dialogue: [
    { speaker: "Mila", gender: "female", text: "Goedemiddag! Waar kan ik boeken lenen?", translation: "Good afternoon! Where can I borrow books?" },
    { speaker: "Ella", gender: "female", text: "Bij de balie hier vooraan. Heb je een bibliotheekpas?", translation: "At the counter up front. Do you have a library card?" },
    { speaker: "Mila", gender: "female", text: "Ja, hier is mijn pas.", translation: "Yes, here is my card." },
    { speaker: "Ella", gender: "female", text: "Prima! Je mag drie boeken meenemen voor drie weken.", translation: "Great! You can take three books for three weeks." },
    { speaker: "Mila", gender: "female", text: "Dank je! Waar is de afdeling Nederlands?", translation: "Thank you! Where is the Dutch section?" },
    { speaker: "Ella", gender: "female", text: "Links naast de trap.", translation: "To the left of the stairs." }
  ],
  questions: [
    { question: "Waar kan Mila boeken lenen?", options: ["Bij de trap", "Bij de balie", "Buiten", "In het café"], correct: "Bij de balie", translation: "Where can Mila borrow books?" },
    { question: "Hoeveel boeken mag Mila meenemen?", options: ["Eén", "Twee", "Drie", "Vier"], correct: "Drie", translation: "How many books can Mila take?" },
    { question: "Waar is de afdeling Nederlands?", options: ["Rechts naast de trap", "Links naast de trap", "Boven", "Beneden"], correct: "Links naast de trap", translation: "Where is the Dutch section?" }
  ]
},
{
  id: 16,
  title: "Planning a Trip",
  level: "A2",
  duration: "1:15",
  category: "travel",
  dialogue: [
    { speaker: "Eva", gender: "female", text: "Zullen we dit weekend naar het strand gaan?", translation: "Shall we go to the beach this weekend?" },
    { speaker: "Nina", gender: "female", text: "Leuk idee! Welk strand bedoel je?", translation: "Nice idea! Which beach do you mean?" },
    { speaker: "Eva", gender: "female", text: "Zandvoort misschien. Het is niet ver met de trein.", translation: "Maybe Zandvoort. It's not far by train." },
    { speaker: "Nina", gender: "female", text: "Goed plan! Neem jij de handdoeken mee?", translation: "Good plan! Will you bring the towels?" },
    { speaker: "Eva", gender: "female", text: "Ja, en jij brengt het eten.", translation: "Yes, and you bring the food." },
    { speaker: "Nina", gender: "female", text: "Afgesproken! We vertrekken om tien uur.", translation: "Deal! We’ll leave at ten o’clock." }
  ],
  questions: [
    { question: "Waar willen Eva en Nina naartoe?", options: ["Naar het park", "Naar het strand", "Naar de stad", "Naar het bos"], correct: "Naar het strand", translation: "Where do Eva and Nina want to go?" },
    { question: "Hoe reizen ze?", options: ["Met de auto", "Met de trein", "Met de bus", "Met de fiets"], correct: "Met de trein", translation: "How are they traveling?" },
    { question: "Wie neemt het eten mee?", options: ["Eva", "Nina", "Beiden", "Niemand"], correct: "Nina", translation: "Who brings the food?" }
  ]
},
{
  id: 17,
  title: "Calling a Friend",
  level: "A1",
  duration: "1:00",
  category: "friends",
  dialogue: [
    { speaker: "Sara", gender: "female", text: "Hoi Emma! Wat doe je vanavond?", translation: "Hi Emma! What are you doing tonight?" },
    { speaker: "Emma", gender: "female", text: "Hoi Sara! Niet veel. Waarom vraag je dat?", translation: "Hi Sara! Not much. Why do you ask?" },
    { speaker: "Sara", gender: "female", text: "Zullen we samen een film kijken?", translation: "Shall we watch a movie together?" },
    { speaker: "Emma", gender: "female", text: "Leuk! Bij jou of bij mij?", translation: "Nice! At your place or mine?" },
    { speaker: "Sara", gender: "female", text: "Bij mij. Ik maak popcorn!", translation: "At my place. I'll make popcorn!" },
    { speaker: "Emma", gender: "female", text: "Perfect! Tot vanavond!", translation: "Perfect! See you tonight!" }
  ],
  questions: [
    { question: "Wat wil Sara doen?", options: ["Een boek lezen", "Een film kijken", "Koken", "Naar buiten gaan"], correct: "Een film kijken", translation: "What does Sara want to do?" },
    { question: "Waar kijken ze de film?", options: ["Bij Emma", "Bij Sara", "In de bioscoop", "In het park"], correct: "Bij Sara", translation: "Where do they watch the movie?" },
    { question: "Wat maakt Sara?", options: ["Koekjes", "Popcorn", "Pizza", "Thee"], correct: "Popcorn", translation: "What does Sara make?" }
  ]
}


];

export const conversations = conversations1;
