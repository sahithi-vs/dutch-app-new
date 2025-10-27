import React, { useState, useEffect } from 'react';
import { Volume2, Check, X, Trophy, RefreshCw, Home, BookOpen, GraduationCap, ChevronRight, ChevronLeft } from 'lucide-react';

// Complete Dutch Word Bank - 1000 Most Common Words (Lessons 1-20)
const dutchWordBank = {
   'thema_1_hallo_part1': [
    { dutch: 'getrouwd', english: 'married', level: 'A1' },
    { dutch: 'hallo', english: 'hello', level: 'A1' },
    { dutch: 'het jaar', english: 'year', level: 'A1' },
    { dutch: 'het kind', english: 'child', level: 'A1' },
    { dutch: 'komen uit', english: 'come from', level: 'A1' },
    { dutch: 'de man', english: 'man', level: 'A1' },
    { dutch: 'de naam', english: 'name', level: 'A1' },
    { dutch: 'Nederland', english: 'Netherlands', level: 'A1' },
    { dutch: 'de vrouw', english: 'woman', level: 'A1' },
    { dutch: 'wonen', english: 'to live in', level: 'A1' },
    { dutch: 'dag', english: 'hello, bye', level: 'A1' },
    { dutch: 'doei', english: 'bye', level: 'A1' },
    { dutch: 'goedemiddag', english: 'good afternoon', level: 'A1' },
    { dutch: 'goedemorgen', english: 'good morning', level: 'A1' },
    { dutch: 'goedenavond', english: 'good evening', level: 'A1' },
    { dutch: 'groeten', english: 'to greet', level: 'A1' },
    { dutch: 'hoi', english: 'hi', level: 'A1' },
    { dutch: 'de meneer', english: 'Mr.', level: 'A1' },
    { dutch: 'de mevrouw', english: 'Mrs.', level: 'A1' },
    { dutch: 'het Nederlands', english: 'Dutch', level: 'A1' },
    { dutch: 'tot ziens', english: 'bye', level: 'A1' },
    { dutch: 'de broer', english: 'brother', level: 'A1' },
    { dutch: 'de dochter', english: 'daughter', level: 'A1' },
    { dutch: 'en', english: 'and', level: 'A1' },
    { dutch: 'de familie', english: 'family', level: 'A1' },
    { dutch: 'heten', english: 'to be called', level: 'A1' },
    { dutch: 'de moeder', english: 'mother', level: 'A1' },
    { dutch: 'de oma', english: 'grandmother', level: 'A1' },
    { dutch: 'de opa', english: 'grandfather', level: 'A1' },
    { dutch: 'de ouder', english: 'parent', level: 'A1' },
    { dutch: 'de vader', english: 'father', level: 'A1' },
    { dutch: 'de zoon', english: 'son', level: 'A1' },
    { dutch: 'de zus', english: 'sister', level: 'A1' },
    { dutch: 'ik', english: 'I', level: 'A1' },
    { dutch: 'jij', english: 'you (singular)', level: 'A1' },
    { dutch: 'je', english: 'you (singular)', level: 'A1' },
    { dutch: 'u', english: 'you (polite)', level: 'A1' },
    { dutch: 'hij', english: 'he', level: 'A1' },
    { dutch: 'zij', english: 'she', level: 'A1' },
    { dutch: 'ze', english: 'she', level: 'A1' },
    { dutch: 'wij', english: 'we', level: 'A1' },
    { dutch: 'we', english: 'we', level: 'A1' },
    { dutch: 'jullie', english: 'you (plural)', level: 'A1' },
    { dutch: 'goed', english: 'good', level: 'A1' },
    { dutch: 'Het gaat wel', english: "It's okay", level: 'A1' },
    { dutch: 'Hoe gaat het?', english: 'How are you?', level: 'A1' }
  ],
  'thema_1_hallo_part2': [
    { dutch: 'Hoe is het?', english: 'How is it going?', level: 'A1' },
    { dutch: 'ook', english: 'also', level: 'A1' },
    { dutch: 'niet', english: 'not', level: 'A1' },
    { dutch: 'het kleinkind', english: 'grandchild', level: 'A1' },
    { dutch: 'mijn', english: 'my', level: 'A1' },
    { dutch: 'de neef', english: 'cousin (male), nephew', level: 'A1' },
    { dutch: 'de nicht', english: 'cousin (female), niece', level: 'A1' },
    { dutch: 'de oom', english: 'uncle', level: 'A1' },
    { dutch: 'de schoonzus', english: 'sister in law', level: 'A1' },
    { dutch: 'de tante', english: 'aunt', level: 'A1' },
    { dutch: 'de zwager', english: 'brother in law', level: 'A1' },
    { dutch: 'zijn', english: 'to be', level: 'A1' },
    { dutch: 'ik ben', english: 'I am', level: 'A1' },
    { dutch: 'jij bent', english: 'you are', level: 'A1' },
    { dutch: 'ben jij?', english: 'are you?', level: 'A1' },
    { dutch: 'u bent', english: 'you are', level: 'A1' },
    { dutch: 'hij is', english: 'he is', level: 'A1' },
    { dutch: 'zij is', english: 'she is', level: 'A1' },
    { dutch: 'het is', english: 'it is', level: 'A1' },
    { dutch: 'wij zijn', english: 'we are', level: 'A1' },
    { dutch: 'jullie zijn', english: 'you are', level: 'A1' },
    { dutch: 'zij zijn', english: 'they are', level: 'A1' },
    { dutch: 'de baby', english: 'baby', level: 'A1' },
    { dutch: 'geen', english: 'no', level: 'A1' },
    { dutch: 'het gezin', english: 'family (in one household)', level: 'A1' },
    { dutch: 'groot', english: 'big', level: 'A1' },
    { dutch: 'hier', english: 'here', level: 'A1' },
    { dutch: 'horen', english: 'to hear', level: 'A1' },
    { dutch: 'ja', english: 'yes', level: 'A1' },
    { dutch: 'de jongen', english: 'boy', level: 'A1' },
    { dutch: 'klein', english: 'small', level: 'A1' },
    { dutch: 'leuk', english: 'nice', level: 'A1' },
    { dutch: 'het meisje', english: 'girl', level: 'A1' },
    { dutch: 'nee', english: 'no', level: 'A1' },
    { dutch: 'praten', english: 'to talk', level: 'A1' },
    { dutch: 'Waar kom je vandaan?', english: 'Where are you from?', level: 'A1' },
    { dutch: 'het antwoord', english: 'answer', level: 'A1' },
    { dutch: 'de vraag', english: 'question', level: 'A1' },
    { dutch: 'waar', english: 'where', level: 'A1' },
    { dutch: 'wat', english: 'what', level: 'A1' },
    { dutch: 'wie', english: 'who', level: 'A1' },
    { dutch: 'hebben', english: 'to have', level: 'A1' },
    { dutch: 'ik heb', english: 'I have', level: 'A1' },
    { dutch: 'jij hebt', english: 'you have', level: 'A1' },
    { dutch: 'heb jij?', english: 'do you have?', level: 'A1' }
  ],
  'thema_2_school_part1': [
    { dutch: 'binnen', english: 'inside', level: 'A1' },
    { dutch: 'buiten', english: 'outside, outdoors', level: 'A1' },
    { dutch: 'de cursist', english: 'student, pupil', level: 'A1' },
    { dutch: 'de docent', english: 'teacher', level: 'A1' },
    { dutch: 'gaan', english: 'to go', level: 'A1' },
    { dutch: 'lopen', english: 'to walk', level: 'A1' },
    { dutch: 'naar', english: 'to, towards', level: 'A1' },
    { dutch: 'de pauze', english: 'pause', level: 'A1' },
    { dutch: 'samen', english: 'together', level: 'A1' },
    { dutch: 'de school', english: 'school', level: 'A1' },
    { dutch: 'welkom', english: 'welcome', level: 'A1' },
    { dutch: 'zeggen', english: 'to say', level: 'A1' },
    { dutch: 'nul', english: '0', level: 'A1' },
    { dutch: 'één', english: '1', level: 'A1' },
    { dutch: 'twee', english: '2', level: 'A1' },
    { dutch: 'drie', english: '3', level: 'A1' },
    { dutch: 'vier', english: '4', level: 'A1' },
    { dutch: 'vijf', english: '5', level: 'A1' },
    { dutch: 'zes', english: '6', level: 'A1' },
    { dutch: 'zeven', english: '7', level: 'A1' },
    { dutch: 'acht', english: '8', level: 'A1' },
    { dutch: 'negen', english: '9', level: 'A1' },
    { dutch: 'tien', english: '10', level: 'A1' },
    { dutch: 'elf', english: '11', level: 'A1' },
    { dutch: 'twaalf', english: '12', level: 'A1' },
    { dutch: 'dertien', english: '13', level: 'A1' },
    { dutch: 'veertien', english: '14', level: 'A1' },
    { dutch: 'vijftien', english: '15', level: 'A1' },
    { dutch: 'zestien', english: '16', level: 'A1' },
    { dutch: 'zeventien', english: '17', level: 'A1' },
    { dutch: 'achttien', english: '18', level: 'A1' },
    { dutch: 'negentien', english: '19', level: 'A1' },
    { dutch: 'twintig', english: '20', level: 'A1' },
    { dutch: 'het boek', english: 'book', level: 'A1' },
    { dutch: 'het bord', english: 'blackboard', level: 'A1' },
    { dutch: 'de computer', english: 'computer', level: 'A1' },
    { dutch: 'leren', english: 'to learn', level: 'A1' },
    { dutch: 'lezen', english: 'to read', level: 'A1' },
    { dutch: 'luisteren', english: 'to listen', level: 'A1' },
    { dutch: 'maken', english: 'to make', level: 'A1' },
    { dutch: 'de opdracht', english: 'assignment', level: 'A1' },
    { dutch: 'de pen', english: 'pen', level: 'A1' },
    { dutch: 'schrijven', english: 'to write', level: 'A1' },
    { dutch: 'spreken', english: 'to speak', level: 'A1' },
    { dutch: 'de tekst', english: 'text', level: 'A1' },
    { dutch: 'de dag', english: 'day', level: 'A1' },
    { dutch: 'morgen', english: 'tomorrow', level: 'A1' },
    { dutch: 'vandaag', english: 'today', level: 'A1' },
    { dutch: 'de week', english: 'week', level: 'A1' },
  ],
  'thema_2_school_part2': [
    { dutch: 'het weekend', english: 'weekend', level: 'A1' },
    { dutch: 'maandag', english: 'Monday', level: 'A1' },
    { dutch: 'dinsdag', english: 'Tuesday', level: 'A1' },
    { dutch: 'woensdag', english: 'Wednesday', level: 'A1' },
    { dutch: 'donderdag', english: 'Thursday', level: 'A1' },
    { dutch: 'vrijdag', english: 'Friday', level: 'A1' },
    { dutch: 'zaterdag', english: 'Saturday', level: 'A1' },
    { dutch: 'zondag', english: 'Sunday', level: 'A1' },
    { dutch: 'hoeveel', english: 'how much', level: 'A1' },
    { dutch: 'wanneer', english: 'when', level: 'A1' },
    { dutch: 'dertig', english: '30', level: 'A1' },
    { dutch: 'veertig', english: '40', level: 'A1' },
    { dutch: 'vijftig', english: '50', level: 'A1' },
    { dutch: 'zestig', english: '60', level: 'A1' },
    { dutch: 'zeventig', english: '70', level: 'A1' },
    { dutch: 'tachtig', english: '80', level: 'A1' },
    { dutch: 'negentig', english: '90', level: 'A1' },
    { dutch: 'honderd', english: '100', level: 'A1' },
    { dutch: 'begrijpen', english: 'to understand', level: 'A1' },
    { dutch: 'Hoe schrijf je dat?', english: 'How do you write that?', level: 'A1' },
    { dutch: 'de mensen', english: 'people', level: 'A1' },
    { dutch: 'moeilijk', english: 'difficult', level: 'A1' },
    { dutch: 'snel', english: 'fast, quick', level: 'A1' },
    { dutch: 'sorry', english: 'sorry', level: 'A1' },
    { dutch: 'veel', english: 'many, much', level: 'A1' },
    { dutch: 'Wat betekent dat?', english: 'What does that mean?', level: 'A1' },
    { dutch: 'Wat is dat?', english: 'What is that?', level: 'A1' },
    { dutch: 'Wat zeg je?', english: 'What do you say?', level: 'A1' },
    { dutch: 'Wat zegt u?', english: 'What did you say? (polite)', level: 'A1' },
    { dutch: 'beginnen', english: 'to begin', level: 'A1' },
    { dutch: 'het ding', english: 'thing', level: 'A1' },
    { dutch: 'de gum', english: 'eraser', level: 'A1' },
    { dutch: 'Hoe spel je dat?', english: 'How do you spell that?', level: 'A1' },
    { dutch: 'de klas', english: 'classroom', level: 'A1' },
    { dutch: 'makkelijk', english: 'easy', level: 'A1' },
    { dutch: 'het papier', english: 'paper', level: 'A1' },
    { dutch: 'het potlood', english: 'pencil', level: 'A1' },
    { dutch: 'staan', english: 'to stand', level: 'A1' },
    { dutch: 'zien', english: 'to see', level: 'A1' },
    { dutch: 'zitten', english: 'to sit', level: 'A1' },
    { dutch: 'kiezen', english: 'to choose', level: 'A1' },
    { dutch: 'moeten', english: 'to have to, to must', level: 'A1' },
    { dutch: 'typen', english: 'to type', level: 'A1' },
    { dutch: 'de datum', english: 'date', level: 'A1' },
    { dutch: 'eerste', english: 'first', level: 'A1' },
    { dutch: 'het jaar', english: 'year', level: 'A1' },
    { dutch: 'laatste', english: 'last', level: 'A1' },
    { dutch: 'de maand', english: 'month', level: 'A1' },
  ],
  'thema_2_school_part3': [
    { dutch: 'januari', english: 'January', level: 'A1' },
    { dutch: 'februari', english: 'February', level: 'A1' },
    { dutch: 'maart', english: 'March', level: 'A1' },
    { dutch: 'april', english: 'April', level: 'A1' },
    { dutch: 'mei', english: 'May', level: 'A1' },
    { dutch: 'juni', english: 'June', level: 'A1' },
    { dutch: 'juli', english: 'July', level: 'A1' },
    { dutch: 'augustus', english: 'August', level: 'A1' },
    { dutch: 'september', english: 'September', level: 'A1' },
    { dutch: 'oktober', english: 'October', level: 'A1' },
    { dutch: 'november', english: 'November', level: 'A1' },
    { dutch: 'december', english: 'December', level: 'A1' },
    { dutch: 'alsjeblieft', english: 'here you go, please', level: 'A1' },
    { dutch: 'dank je wel', english: 'thank you', level: 'A1' },
    { dutch: 'drinken', english: 'to drink', level: 'A1' },
    { dutch: 'graag', english: 'please, gladly', level: 'A1' },
    { dutch: 'de koffie', english: 'coffee', level: 'A1' },
    { dutch: 'de melk', english: 'milk', level: 'A1' },
    { dutch: 'Nee, dank je.', english: 'No thanks.', level: 'A1' },
    { dutch: 'op school', english: 'at school', level: 'A1' },
    { dutch: 'de suiker', english: 'sugar', level: 'A1' },
    { dutch: 'de thee', english: 'tea', level: 'A1' },
    { dutch: 'willen', english: 'to want', level: 'A1' },
    { dutch: 'de bladzijde', english: 'page', level: 'A1' },
    { dutch: 'fout', english: 'error, mistake', level: 'A1' },
    { dutch: 'Ik weet het niet.', english: 'I do not know.', level: 'A1' },
    { dutch: 'kijken', english: 'to look', level: 'A1' },
    { dutch: 'de les', english: 'lesson', level: 'A1' },
    { dutch: 'de puzzel', english: 'puzzle', level: 'A1' },
    { dutch: 'de titel', english: 'title', level: 'A1' },
    { dutch: 'weten', english: 'to know', level: 'A1' },
    { dutch: 'weg', english: 'missing', level: 'A1' },
    { dutch: 'welk', english: 'which', level: 'A1' },
    { dutch: 'bedankt', english: 'thanks', level: 'A1' },
    { dutch: 'geven', english: 'to give', level: 'A1' },
    { dutch: 'graag gedaan', english: "you're welcome", level: 'A1' },
    { dutch: 'helpen', english: 'to help', level: 'A1' },
    { dutch: 'iemand', english: 'someone', level: 'A1' },
    { dutch: 'krijgen', english: 'to get, to receive', level: 'A1' },
    { dutch: 'vragen', english: 'to ask', level: 'A1' }
  ],
  'thema_3_wonen_part1': [
    { dutch: 'het balkon', english: 'balcony', level: 'A1' },
    { dutch: 'het dak', english: 'roof', level: 'A1' },
    { dutch: 'de deur', english: 'door', level: 'A1' },
    { dutch: 'de flat', english: 'flat', level: 'A1' },
    { dutch: 'de garage', english: 'garage', level: 'A1' },
    { dutch: 'het huis', english: 'house', level: 'A1' },
    { dutch: 'de muur', english: 'wall', level: 'A1' },
    { dutch: 'het raam', english: 'window', level: 'A1' },
    { dutch: 'de schuur', english: 'shed, shack', level: 'A1' },
    { dutch: 'de tuin', english: 'garden', level: 'A1' },
    { dutch: 'de badkamer', english: 'bathroom', level: 'A1' },
    { dutch: 'beneden', english: 'downstairs', level: 'A1' },
    { dutch: 'boven', english: 'upstairs', level: 'A1' },
    { dutch: 'de gang', english: 'corridor', level: 'A1' },
    { dutch: 'de kamer', english: 'room', level: 'A1' },
    { dutch: 'de keuken', english: 'kitchen', level: 'A1' },
    { dutch: 'de slaapkamer', english: 'bedroom', level: 'A1' },
    { dutch: 'de wc', english: 'toilet', level: 'A1' },
    { dutch: 'de woonkamer', english: 'living room', level: 'A1' },
    { dutch: 'de zolder', english: 'attic', level: 'A1' },
    { dutch: 'alleen', english: 'alone', level: 'A1' },
    { dutch: 'de buurman', english: 'neighbour (male)', level: 'A1' },
    { dutch: 'de buurvrouw', english: 'neighbour (female)', level: 'A1' },
    { dutch: 'een beetje', english: 'bit', level: 'A1' },
    { dutch: 'gezellig', english: 'cosy', level: 'A1' },
    { dutch: 'het koekje', english: 'cookie', level: 'A1' },
    { dutch: 'komen', english: 'to come', level: 'A1' },
    { dutch: 'het kopje', english: 'cup', level: 'A1' },
    { dutch: 'nieuw', english: 'new', level: 'A1' },
    { dutch: 'de straat', english: 'street', level: 'A1' },
    { dutch: 'thuis', english: 'at home', level: 'A1' },
    { dutch: 'zich voorstellen', english: 'to propose', level: 'A1' },
    { dutch: 'het bad', english: 'bath, bathtub', level: 'A1' },
    { dutch: 'de bank', english: 'couch, sofa', level: 'A1' },
    { dutch: 'het bed', english: 'bed', level: 'A1' },
    { dutch: 'de douche', english: 'shower', level: 'A1' },
    { dutch: 'de kast', english: 'cupboard, cabinet', level: 'A1' },
    { dutch: 'de lamp', english: 'lamp', level: 'A1' },
    { dutch: 'het meubel', english: 'piece of furniture', level: 'A1' },
    { dutch: 'de stoel', english: 'chair', level: 'A1' },
    { dutch: 'de tafel', english: 'table', level: 'A1' },
    { dutch: 'de televisie', english: 'television', level: 'A1' },
    { dutch: 'blauw', english: 'blue', level: 'A1' },
    { dutch: 'bruin', english: 'brown', level: 'A1' },
    { dutch: 'geel', english: 'yellow', level: 'A1' }
  ],
  'thema_3_wonen_part2': [
    { dutch: 'grijs', english: 'gray', level: 'A1' },
    { dutch: 'groen', english: 'green', level: 'A1' },
    { dutch: 'de kleur', english: 'color', level: 'A1' },
    { dutch: 'oranje', english: 'orange', level: 'A1' },
    { dutch: 'paars', english: 'purple', level: 'A1' },
    { dutch: 'rood', english: 'red', level: 'A1' },
    { dutch: 'roze', english: 'pink', level: 'A1' },
    { dutch: 'wit', english: 'white', level: 'A1' },
    { dutch: 'zwart', english: 'black', level: 'A1' },
    { dutch: 'aardig', english: 'nice', level: 'A1' },
    { dutch: 'de buurt', english: 'neighbourhood', level: 'A1' },
    { dutch: 'het dorp', english: 'village', level: 'A1' },
    { dutch: 'hoog', english: 'high', level: 'A1' },
    { dutch: 'de lift', english: 'lift, elevator', level: 'A1' },
    { dutch: 'mooi', english: 'beautiful', level: 'A1' },
    { dutch: 'het park', english: 'park', level: 'A1' },
    { dutch: 'de stad', english: 'city', level: 'A1' },
    { dutch: 'de trap', english: 'stairway', level: 'A1' },
    { dutch: 'de verdieping', english: 'floor', level: 'A1' },
    { dutch: 'weinig', english: 'few, little', level: 'A1' },
    { dutch: 'de winkel', english: 'shop', level: 'A1' },
    { dutch: 'tweede', english: 'second', level: 'A1' },
    { dutch: 'derde', english: 'third', level: 'A1' },
    { dutch: 'vierde', english: 'fourth', level: 'A1' },
    { dutch: 'vijfde', english: 'fifth', level: 'A1' },
    { dutch: 'zesde', english: 'sixth', level: 'A1' },
    { dutch: 'zevende', english: 'seventh', level: 'A1' },
    { dutch: 'achtste', english: 'eighth', level: 'A1' },
    { dutch: 'negende', english: 'ninth', level: 'A1' },
    { dutch: 'tiende', english: 'tenth', level: 'A1' },
    { dutch: 'het aantal', english: 'number, amount', level: 'A1' },
    { dutch: 'druk', english: 'busy', level: 'A1' },
    { dutch: 'huren', english: 'to rent', level: 'A1' },
    { dutch: 'het internet', english: 'internet', level: 'A1' },
    { dutch: 'nu', english: 'now', level: 'A1' },
    { dutch: 'per', english: 'per', level: 'A1' },
    { dutch: 'de plaats', english: 'place', level: 'A1' },
    { dutch: 'de prijs', english: 'price', level: 'A1' },
    { dutch: 'rustig', english: 'quiet, calm', level: 'A1' },
    { dutch: 'te huur', english: 'for rent', level: 'A1' },
    { dutch: 'zoeken', english: 'to search', level: 'A1' },
    { dutch: 'zonder', english: 'without', level: 'A1' },
    { dutch: 'kunnen', english: 'to be able, to can', level: 'A1' },
    { dutch: 'lachen', english: 'to laugh', level: 'A1' },
    { dutch: 'liggen', english: 'to lie, to lie down', level: 'A1' },
    { dutch: 'op slot', english: 'locked', level: 'A1' },
    { dutch: 'pakken', english: 'to get, to grab', level: 'A1' },
    { dutch: 'de sleutel', english: 'key', level: 'A1' },
    { dutch: 'vaak', english: 'often', level: 'A1' },
    { dutch: 'van', english: 'from, of', level: 'A1' },
    { dutch: 'vergeten', english: 'to forget', level: 'A1' },
    { dutch: 'vinden', english: 'to find', level: 'A1' }
  ],
  'thema_4_eten_drinken_part1': [
    { dutch: 'de appel', english: 'apple', level: 'A1' },
    { dutch: 'de bakker', english: 'baker, bakery', level: 'A1' },
    { dutch: 'boodschappen doen', english: 'to shop, to buy groceries', level: 'A1' },
    { dutch: 'de boter', english: 'butter', level: 'A1' },
    { dutch: 'het brood', english: 'bread', level: 'A1' },
    { dutch: 'de groente', english: 'vegetable', level: 'A1' },
    { dutch: 'kopen', english: 'to buy', level: 'A1' },
    { dutch: 'de markt', english: 'market, marketplace', level: 'A1' },
    { dutch: 'de slager', english: 'butcher, butchery', level: 'A1' },
    { dutch: 'de supermarkt', english: 'supermarket', level: 'A1' },
    { dutch: 'het vlees', english: 'meat', level: 'A1' },
    { dutch: 'de aardappel', english: 'potato', level: 'A1' },
    { dutch: 'het avondeten', english: 'supper', level: 'A1' },
    { dutch: "s avonds", english: 'in the evening', level: 'A1' },
    { dutch: 'dan', english: 'then', level: 'A1' },
    { dutch: 'eten', english: 'to eat', level: 'A1' },
    { dutch: 'de lunch', english: 'lunch', level: 'A1' },
    { dutch: "s middags", english: 'in the afternoon', level: 'A1' },
    { dutch: "s ochtends", english: 'in the morning', level: 'A1' },
    { dutch: 'of', english: 'or', level: 'A1' },
    { dutch: 'het ontbijt', english: 'breakfast', level: 'A1' },
    { dutch: 'het water', english: 'water', level: 'A1' },
    { dutch: 'de wijn', english: 'wine', level: 'A1' },
    { dutch: 'doen', english: 'to do', level: 'A1' },
    { dutch: 'nodig hebben', english: 'to need', level: 'A1' },
    { dutch: 'klaar', english: 'ready', level: 'A1' },
    { dutch: 'koken', english: 'to cook, to boil', level: 'A1' },
    { dutch: 'de liter', english: 'liter', level: 'A1' },
    { dutch: 'de minuut', english: 'minute', level: 'A1' },
    { dutch: 'de pan', english: 'cooking pot', level: 'A1' },
    { dutch: 'snijden', english: 'to cut', level: 'A1' },
    { dutch: 'de soep', english: 'soup', level: 'A1' },
    { dutch: 'de tomaat', english: 'tomato', level: 'A1' },
    { dutch: 'de ui', english: 'onion', level: 'A1' },
    { dutch: 'het zout', english: 'salt', level: 'A1' },
    { dutch: 'allemaal', english: 'all', level: 'A1' },
    { dutch: 'het bord', english: 'plate', level: 'A1' },
    { dutch: 'eet smakelijk', english: 'enjoy your meal', level: 'A1' },
    { dutch: 'het eten', english: 'food', level: 'A1' },
    { dutch: 'het glas', english: 'glass', level: 'A1' },
    { dutch: 'het ijs', english: 'ice, ice cream', level: 'A1' },
    { dutch: 'de lepel', english: 'spoon', level: 'A1' },
    { dutch: 'het mes', english: 'knife', level: 'A1' },
    { dutch: 'op', english: 'used up', level: 'A1' },
    { dutch: 'roepen', english: 'to call, to call somebody', level: 'A1' },
    { dutch: 'de vork', english: 'fork', level: 'A1' },
    { dutch: 'de citroen', english: 'lemon', level: 'A1' },
    { dutch: 'het fruit', english: 'fruit', level: 'A1' },
    { dutch: 'gratis', english: 'free', level: 'A1' },
    { dutch: 'de peer', english: 'pear', level: 'A1' },
    { dutch: 'de sinaasappel', english: 'orange', level: 'A1' },
    { dutch: 'de sla', english: 'lettuce', level: 'A1' },
    { dutch: 'het soort', english: 'kind, type', level: 'A1' },
    { dutch: 'de wortel', english: 'carrot', level: 'A1' },
  ],
  'thema_4_eten_drinken_part2': [
    { dutch: 'zetten', english: 'to put, to place', level: 'A1' },
    { dutch: 'altijd', english: 'always', level: 'A1' },
    { dutch: 'de bloemkool', english: 'cauliflower', level: 'A1' },
    { dutch: 'de boterham', english: 'sandwich', level: 'A1' },
    { dutch: 'de kaas', english: 'cheese', level: 'A1' },
    { dutch: 'de kip', english: 'chicken', level: 'A1' },
    { dutch: 'lekker', english: 'delicious', level: 'A1' },
    { dutch: 'meestal', english: 'mostly', level: 'A1' },
    { dutch: 'nooit', english: 'never', level: 'A1' },
    { dutch: 'de rijst', english: 'rice', level: 'A1' },
    { dutch: 'de vis', english: 'fish', level: 'A1' },
    { dutch: 'de worst', english: 'sausage', level: 'A1' },
    { dutch: 'aan', english: 'switched on', level: 'A1' },
    { dutch: 'dom', english: 'stupid', level: 'A1' },
    { dutch: 'het ei', english: 'egg', level: 'A1' },
    { dutch: 'genoeg', english: 'enough', level: 'A1' },
    { dutch: 'de gram', english: 'gram', level: 'A1' },
    { dutch: 'koud', english: 'cold', level: 'A1' },
    { dutch: 'meer', english: 'more', level: 'A1' },
    { dutch: 'minder', english: 'less', level: 'A1' },
    { dutch: 'oké', english: 'okay', level: 'A1' },
    { dutch: 'de oven', english: 'oven', level: 'A1' },
    { dutch: 'de taart', english: 'pie, cake', level: 'A1' },
    { dutch: 'uit', english: 'switched off', level: 'A1' },
    { dutch: 'het bedrag', english: 'amount', level: 'A1' },
    { dutch: 'betalen', english: 'to pay', level: 'A1' },
    { dutch: 'bijna', english: 'almost', level: 'A1' },
    { dutch: 'de cent', english: 'cent', level: 'A1' },
    { dutch: 'de euro', english: 'euro', level: 'A1' },
    { dutch: 'gebruiken', english: 'to use', level: 'A1' },
    { dutch: 'kosten', english: 'to cost', level: 'A1' },
    { dutch: 'verschillend', english: 'different', level: 'A1' },
    { dutch: 'alstublieft', english: 'Please', level: 'A1' },
    { dutch: 'Anders nog iets?', english: 'Anything else?', level: 'A1' },
    { dutch: 'de druif', english: 'grape', level: 'A1' },
    { dutch: 'duur', english: 'expensive', level: 'A1' },
    { dutch: 'fijn', english: 'nice', level: 'A1' },
    { dutch: 'de helft', english: 'half', level: 'A1' },
    { dutch: 'de kilo', english: 'kilo', level: 'A1' },
    { dutch: 'de komkommer', english: 'cucumber', level: 'A1' },
    { dutch: 'het ons', english: '100 gram', level: 'A1' },
    { dutch: 'het pond', english: '500 gram', level: 'A1' },
    { dutch: 'terug', english: 'back', level: 'A1' },
    { dutch: 'de verkoper', english: 'seller', level: 'A1' },
    { dutch: 'alle', english: 'all', level: 'A1' },
    { dutch: 'de banaan', english: 'banana', level: 'A1' },
    { dutch: 'de boon', english: 'bean', level: 'A1' },
    { dutch: 'de zak', english: 'bag', level: 'A1' },
    { dutch: 'daarna', english: 'thereafter', level: 'A1' },
    { dutch: 'het geld', english: 'money', level: 'A1' },
    { dutch: 'goedkoop', english: 'cheap', level: 'A1' },
    { dutch: 'iets', english: 'something', level: 'A1' },
    { dutch: 'in de aanbieding', english: 'on sale', level: 'A1' },
    { dutch: 'de kassa', english: 'cash register', level: 'A1' },
    { dutch: 'mee', english: 'along', level: 'A1' },
    { dutch: 'het pak', english: 'packet', level: 'A1' },
    { dutch: 'pinnen', english: 'to pay with a debit card', level: 'A1' },
    { dutch: 'want', english: 'because', level: 'A1' }
  ],
  'thema_5_dokter_part1': [
    { dutch: 'de arm', english: 'arm', level: 'A1' },
    { dutch: 'het been', english: 'leg', level: 'A1' },
    { dutch: 'de bil', english: 'buttock', level: 'A1' },
    { dutch: 'de buik', english: 'belly', level: 'A1' },
    { dutch: 'de hand', english: 'hand', level: 'A1' },
    { dutch: 'het hoofd', english: 'head', level: 'A1' },
    { dutch: 'het lichaam', english: 'body', level: 'A1' },
    { dutch: 'de knie', english: 'knee', level: 'A1' },
    { dutch: 'de rug', english: 'back', level: 'A1' },
    { dutch: 'de schouder', english: 'shoulder', level: 'A1' },
    { dutch: 'de teen', english: 'toe', level: 'A1' },
    { dutch: 'de vinger', english: 'finger', level: 'A1' },
    { dutch: 'de voet', english: 'foot', level: 'A1' },
    { dutch: 'de baard', english: 'beard', level: 'A1' },
    { dutch: 'het gezicht', english: 'face', level: 'A1' },
    { dutch: 'het haar', english: 'hair', level: 'A1' },
    { dutch: 'de kin', english: 'chin', level: 'A1' },
    { dutch: 'de lip', english: 'lip', level: 'A1' },
    { dutch: 'de mond', english: 'mouth', level: 'A1' },
    { dutch: 'de nek', english: 'neck', level: 'A1' },
    { dutch: 'de neus', english: 'nose', level: 'A1' },
    { dutch: 'het oog', english: 'eye', level: 'A1' },
    { dutch: 'het oor', english: 'ear', level: 'A1' },
    { dutch: 'de snor', english: 'mustache', level: 'A1' },
    { dutch: 'de tand', english: 'tooth', level: 'A1' },
    { dutch: 'de wang', english: 'cheek', level: 'A1' },
    { dutch: 'de afspraak', english: 'appointment', level: 'A1' },
    { dutch: 'de assistente', english: 'assistant (female)', level: 'A1' },
    { dutch: 'bellen', english: 'to dial, to call by phone', level: 'A1' },
    { dutch: 'de controle', english: 'control, check', level: 'A1' },
    { dutch: 'eerder', english: 'previously', level: 'A1' },
    { dutch: 'de huisarts', english: 'general practitioner', level: 'A1' },
    { dutch: 'de koorts', english: 'fever', level: 'A1' },
    { dutch: 'later', english: 'later', level: 'A1' },
    { dutch: 'maar', english: 'but', level: 'A1' },
    { dutch: 'de pijn', english: 'ache, pain', level: 'A1' },
    { dutch: 'de tandarts', english: 'dentist', level: 'A1' },
    { dutch: 'waarom', english: 'why', level: 'A1' },
    { dutch: 'ander', english: 'other', level: 'A1' },
    { dutch: 'de apotheek', english: 'pharmacy', level: 'A1' },
    { dutch: 'bijvoorbeeld', english: 'for example', level: 'A1' },
    { dutch: 'de dokter', english: 'doctor', level: 'A1' },
    { dutch: 'halen', english: 'to get, to fetch', level: 'A1' },
    { dutch: 'Ik heb last van', english: 'I suffer from', level: 'A1' },
    { dutch: 'de apotheek', english: 'pharmacy', level: 'A1' },
  ],
  'thema_5_dokter_part2': [
    { dutch: 'het medicijn', english: 'medicine', level: 'A1' },
    { dutch: 'het probleem', english: 'problem', level: 'A1' },
    { dutch: 'soms', english: 'sometimes', level: 'A1' },
    { dutch: 'ziek', english: 'ill', level: 'A1' },
    { dutch: 'het ziekenhuis', english: 'hospital', level: 'A1' },
    { dutch: 'de achternaam', english: 'surname', level: 'A1' },
    { dutch: 'jong', english: 'young', level: 'A1' },
    { dutch: 'kennen', english: 'to know', level: 'A1' },
    { dutch: 'oud', english: 'old', level: 'A1' },
    { dutch: 'de voornaam', english: 'first name', level: 'A1' },
    { dutch: 'zeggen tegen', english: 'to say to somebody', level: 'A1' },
    { dutch: 'beterschap', english: 'get well soon', level: 'A1' },
    { dutch: 'erg', english: 'very', level: 'A1' },
    { dutch: 'de griep', english: 'flu', level: 'A1' },
    { dutch: 'hoesten', english: 'to cough', level: 'A1' },
    { dutch: 'de keel', english: 'throat', level: 'A1' },
    { dutch: 'de klacht', english: 'complaint', level: 'A1' },
    { dutch: 'natuurlijk', english: 'of course', level: 'A1' },
    { dutch: 'nog', english: 'still, yet', level: 'A1' },
    { dutch: 'het recept', english: 'recipe', level: 'A1' },
    { dutch: 'sinds', english: 'since', level: 'A1' },
    { dutch: 'de spier', english: 'muscle', level: 'A1' },
    { dutch: 'waarschijnlijk', english: 'probably', level: 'A1' },
    { dutch: 'daar', english: 'there, over there', level: 'A1' },
    { dutch: 'dagelijks', english: 'daily', level: 'A1' },
    { dutch: 'het doosje', english: 'box', level: 'A1' },
    { dutch: 'de drogist', english: 'drug store', level: 'A1' },
    { dutch: 'de druppel', english: 'drop', level: 'A1' },
    { dutch: 'de huid', english: 'skin', level: 'A1' },
    { dutch: 'innemen', english: 'to take, to swallow', level: 'A1' },
    { dutch: 'de keer', english: 'time', level: 'A1' },
    { dutch: 'de pil', english: 'pill', level: 'A1' },
    { dutch: 'smeren', english: 'to grease, to spread', level: 'A1' },
    { dutch: 'sommige', english: 'some', level: 'A1' },
    { dutch: 'de zalf', english: 'ointment, salve', level: 'A1' },
    { dutch: 'elk', english: 'each', level: 'A1' },
    { dutch: 'de foto', english: 'photo', level: 'A1' },
    { dutch: 'het gebit', english: 'teeth, denture', level: 'A1' },
    { dutch: 'helaas', english: 'unfortunately', level: 'A1' },
    { dutch: 'helemaal', english: 'altogether, completely', level: 'A1' },
    { dutch: 'in orde', english: 'alright', level: 'A1' },
    { dutch: 'de kies', english: 'molar, back tooth', level: 'A1' },
    { dutch: 'misschien', english: 'maybe', level: 'A1' },
    { dutch: 'poetsen', english: 'to brush', level: 'A1' },
    { dutch: 'vervelend', english: 'tedious, annoying', level: 'A1' },
  ],
  'thema_6_kleding_part1': [
    { dutch: 'het hemd', english: 'shirt', level: 'A1' },
    { dutch: 'vullen', english: 'to fill', level: 'A1' },
    { dutch: 'de broek', english: 'pants', level: 'A1' },
    { dutch: 'de jas', english: 'jacket', level: 'A1' },
    { dutch: 'de onderbroek', english: 'underpants', level: 'A1' },
    { dutch: 'het overhemd', english: 'shirt', level: 'A1' },
    { dutch: 'de rok', english: 'skirt', level: 'A1' },
    { dutch: 'de schoen', english: 'shoe', level: 'A1' },
    { dutch: 'de sok', english: 'sock', level: 'A1' },
    { dutch: 'de tas', english: 'bag', level: 'A1' },
    { dutch: 'de trui', english: 'sweater', level: 'A1' },
    { dutch: 'het T-shirt', english: 'T-shirt', level: 'A1' },
    { dutch: 'het vest', english: 'vest', level: 'A1' },
    { dutch: 'de bloes', english: 'blouse', level: 'A1' },
    { dutch: 'Een moment alstublieft', english: 'A moment please', level: 'A1' },
    { dutch: 'het feest', english: 'feast, party', level: 'A1' },
    { dutch: 'de kleding', english: 'clothing', level: 'A1' },
    { dutch: 'de knoop', english: 'button', level: 'A1' },
    { dutch: 'de maat', english: 'size', level: 'A1' },
    { dutch: 'mogen', english: 'to may, to be allowed', level: 'A1' },
    { dutch: 'de medewerker', english: 'employee', level: 'A1' },
    { dutch: 'de paskamer', english: 'fitting room', level: 'A1' },
    { dutch: 'passen', english: 'to fit', level: 'A1' },
    { dutch: 'te', english: 'too', level: 'A1' },
    { dutch: 'trouwen', english: 'to marry', level: 'A1' },
    { dutch: 'allebei', english: 'both', level: 'A1' },
    { dutch: 'dragen', english: 'to wear (clothing)', level: 'A1' },
    { dutch: 'aanhebben', english: 'to wear (clothing)', level: 'A1' },
    { dutch: 'de jurk', english: 'dress', level: 'A1' },
    { dutch: 'de kleren', english: 'clothes', level: 'A1' },
    { dutch: 'kort', english: 'short', level: 'A1' },
    { dutch: 'de laars', english: 'boot', level: 'A1' },
    { dutch: 'lang', english: 'long', level: 'A1' },
    { dutch: 'net', english: 'neat, well taken care of', level: 'A1' },
    { dutch: 'het pak', english: 'suit', level: 'A1' },
    { dutch: 'vrij', english: 'free', level: 'A1' },
    { dutch: 'het werk', english: 'work', level: 'A1' },
    { dutch: 'de armband', english: 'bracelet', level: 'A1' },
    { dutch: 'de bril', english: 'glasses', level: 'A1' },
    { dutch: 'de handschoen', english: 'glove', level: 'A1' },
    { dutch: 'de hoed', english: 'hat', level: 'A1' },
    { dutch: 'de hoofddoek', english: 'head-scarf', level: 'A1' },
    { dutch: 'het horloge', english: 'watch', level: 'A1' },
    { dutch: 'de ketting', english: 'chain, necklace', level: 'A1' },
    { dutch: 'de muts', english: 'cap, hat', level: 'A1' },
    { dutch: 'dezelfde', english: 'the same', level: 'A1' },
    { dutch: 'Een ogenblik alstublieft', english: 'One moment please', level: 'A1' },
    { dutch: 'even', english: 'just, just a moment', level: 'A1' },
    { dutch: 'het gat', english: 'hole', level: 'A1' },
    { dutch: 'heel', english: 'very', level: 'A1' },
    { dutch: 'jammer', english: 'pity, shame', level: 'A1' },
  ],
  'thema_6_kleding_part2': [
    { dutch: 'de oorbel', english: 'earring', level: 'A1' },
    { dutch: 'de ring', english: 'ring', level: 'A1' },
    { dutch: 'het sieraad', english: 'ornament', level: 'A1' },
    { dutch: 'de sjaal', english: 'scarf', level: 'A1' },
    { dutch: 'kapot', english: 'broken', level: 'A1' },
    { dutch: 'meenemen', english: 'to take along', level: 'A1' },
    { dutch: 'ruilen', english: 'to exchange, to swap', level: 'A1' },
    { dutch: 'sturen', english: 'to send', level: 'A1' },
    { dutch: 'wel', english: 'for sure, indeed', level: 'A1' },
    { dutch: 'werken', english: 'to work', level: 'A1' },
    { dutch: 'de avond', english: 'evening', level: 'A1' },
    { dutch: 'duren', english: 'to last', level: 'A1' },
    { dutch: 'een half uur', english: 'half an hour', level: 'A1' },
    { dutch: 'Hoe laat is het?', english: 'What time is it?', level: 'A1' },
    { dutch: 'de klok', english: 'clock', level: 'A1' },
    { dutch: 'een kwartier', english: 'quarter', level: 'A1' },
    { dutch: 'de middag', english: 'afternoon', level: 'A1' },
    { dutch: 'de nacht', english: 'night', level: 'A1' },
    { dutch: "s nachts", english: 'at night', level: 'A1' },
    { dutch: 'de ochtend', english: 'morning', level: 'A1' },
    { dutch: 'een seconde', english: 'second', level: 'A1' },
    { dutch: 'de tijd', english: 'time', level: 'A1' },
    { dutch: 'een uur', english: 'hour', level: 'A1' },
    { dutch: 'behalve', english: 'except', level: 'A1' },
    { dutch: 'bestellen', english: 'to order', level: 'A1' },
    { dutch: 'brengen', english: 'to bring', level: 'A1' },
    { dutch: 'dicht', english: 'closed', level: 'A1' },
    { dutch: 'de feestdag', english: 'holiday', level: 'A1' },
    { dutch: 'gesloten', english: 'closed', level: 'A1' },
    { dutch: 'online', english: 'online', level: 'A1' },
    { dutch: 'open', english: 'open', level: 'A1' },
    { dutch: 'de openingstijd', english: 'opening hours', level: 'A1' },
    { dutch: 'ophalen', english: 'to pick up, to fetch', level: 'A1' },
    { dutch: 'de spullen', english: 'stuff, things', level: 'A1' },
    { dutch: 'toch', english: 'nevertheless', level: 'A1' },
    { dutch: 'duizend', english: 'thousand', level: 'A1' },
    { dutch: 'miljard', english: 'billion', level: 'A1' },
    { dutch: 'miljoen', english: 'million', level: 'A1' },
    { dutch: 'ongeveer', english: 'about', level: 'A1' },
    { dutch: 'precies', english: 'exactly', level: 'A1' },
    { dutch: 'alles', english: 'all, everything', level: 'A1' },
    { dutch: 'apart', english: 'separate', level: 'A1' },
    { dutch: 'donker', english: 'dark', level: 'A1' },
    { dutch: 'droog', english: 'dry', level: 'A1' },
    { dutch: 'de graad', english: 'degree', level: 'A1' },
    { dutch: 'meteen', english: 'right away', level: 'A1' },
    { dutch: 'ophangen', english: 'to hang up (clothing)', level: 'A1' },
    { dutch: 'schoon', english: 'clean', level: 'A1' },
    { dutch: 'vies', english: 'dirty', level: 'A1' },
    { dutch: 'warm', english: 'hot', level: 'A1' },
    { dutch: 'wassen', english: 'to wash', level: 'A1' },
    { dutch: 'zelf', english: 'self, myself', level: 'A1' }
  ],
  'thema_7_reizen_part1': [
    { dutch: 'de auto', english: 'car', level: 'A1' },
    { dutch: 'de boot', english: 'boat', level: 'A1' },
    { dutch: 'de bus', english: 'bus, coach', level: 'A1' },
    { dutch: 'de fiets', english: 'bicycle', level: 'A1' },
    { dutch: 'laat', english: 'late', level: 'A1' },
    { dutch: 'de metro', english: 'subway', level: 'A1' },
    { dutch: 'nemen', english: 'to take', level: 'A1' },
    { dutch: 'reizen', english: 'to travel', level: 'A1' },
    { dutch: 'het station', english: 'station', level: 'A1' },
    { dutch: 'de tram', english: 'tram', level: 'A1' },
    { dutch: 'de trein', english: 'train', level: 'A1' },
    { dutch: 'het vliegtuig', english: 'plane', level: 'A1' },
    { dutch: 'hoe', english: 'how', level: 'A1' },
    { dutch: 'het bord', english: 'traffic sign', level: 'A1' },
    { dutch: 'het fietspad', english: 'bike path', level: 'A1' },
    { dutch: 'de kilometer', english: 'kilometer', level: 'A1' },
    { dutch: 'Let op!', english: 'Pay attention!', level: 'A1' },
    { dutch: 'de regel', english: 'rule', level: 'A1' },
    { dutch: 'rijden', english: 'to drive, to ride', level: 'A1' },
    { dutch: 'de snelweg', english: 'highway', level: 'A1' },
    { dutch: 'het stoplicht', english: 'traffic light', level: 'A1' },
    { dutch: 'stoppen', english: 'to stop', level: 'A1' },
    { dutch: 'het verkeer', english: 'traffic', level: 'A1' },
    { dutch: 'de weg', english: 'road, way', level: 'A1' },
    { dutch: 'het zebrapad', english: 'pedestrian crossing', level: 'A1' },
    { dutch: 'belangrijk', english: 'important', level: 'A1' },
    { dutch: 'het eiland', english: 'island', level: 'A1' },
    { dutch: 'de hoofdstad', english: 'capital', level: 'A1' },
    { dutch: 'de kaart', english: 'map', level: 'A1' },
    { dutch: 'het land', english: 'country', level: 'A1' },
    { dutch: 'het midden', english: 'middle', level: 'A1' },
    { dutch: 'het noorden', english: 'north', level: 'A1' },
    { dutch: 'naartoe', english: 'to, towards', level: 'A1' },
    { dutch: 'het oosten', english: 'east', level: 'A1' },
    { dutch: 'de provincie', english: 'province', level: 'A1' },
    { dutch: 'het westen', english: 'west', level: 'A1' },
    { dutch: 'het zuiden', english: 'south', level: 'A1' },
    { dutch: 'aan', english: 'on', level: 'A1' },
    { dutch: 'achter', english: 'behind', level: 'A1' },
    { dutch: 'in', english: 'in', level: 'A1' },
    { dutch: 'naast', english: 'next to', level: 'A1' },
    { dutch: 'onder', english: 'below', level: 'A1' },
    { dutch: 'op', english: 'on, on top', level: 'A1' },
    { dutch: 'over', english: 'about', level: 'A1' },
    { dutch: 'tegenover', english: 'opposite', level: 'A1' },
    { dutch: 'tussen', english: 'between', level: 'A1' },
    { dutch: 'uit', english: 'out of', level: 'A1' },
    { dutch: 'voor', english: 'in front of', level: 'A1' },
  ],
  'thema_7_reizen_part2': [
    { dutch: 'alvast', english: 'already', level: 'A1' },
    { dutch: 'de collega', english: 'colleague', level: 'A1' },
    { dutch: 'denken', english: 'to think', level: 'A1' },
    { dutch: 'doorgeven', english: 'to pass on', level: 'A1' },
    { dutch: 'dus', english: 'so', level: 'A1' },
    { dutch: 'de file', english: 'traffic jam', level: 'A1' },
    { dutch: 'onderweg', english: 'on the way', level: 'A1' },
    { dutch: 'de plek', english: 'place', level: 'A1' },
    { dutch: 'prima', english: 'fine', level: 'A1' },
    { dutch: 'snappen', english: 'to understand', level: 'A1' },
    { dutch: 'te laat', english: 'too late', level: 'A1' },
    { dutch: 'tot straks', english: 'see you later', level: 'A1' },
    { dutch: 'bij', english: 'at', level: 'A1' },
    { dutch: 'dichtbij', english: 'near', level: 'A1' },
    { dutch: 'eerst', english: 'first', level: 'A1' },
    { dutch: 'het kruispunt', english: 'intersection', level: 'A1' },
    { dutch: 'linksaf', english: 'turn left', level: 'A1' },
    { dutch: 'links', english: 'left', level: 'A1' },
    { dutch: 'oversteken', english: 'to cross', level: 'A1' },
    { dutch: 'rechtdoor', english: 'straight', level: 'A1' },
    { dutch: 'rechtsaf', english: 'turn right', level: 'A1' },
    { dutch: 'rechts', english: 'right', level: 'A1' },
    { dutch: 'ver', english: 'far', level: 'A1' },
    { dutch: 'na', english: 'after', level: 'A1' },
    { dutch: 'om', english: 'at', level: 'A1' },
    { dutch: 'tijdens', english: 'during', level: 'A1' },
    { dutch: 'tot', english: 'until', level: 'A1' },
    { dutch: 'gelukkig', english: 'happy, fortunate', level: 'A1' },
    { dutch: 'de kant', english: 'side', level: 'A1' },
    { dutch: 'aankomen', english: 'to arrive', level: 'A1' },
    { dutch: 'missen', english: 'to miss', level: 'A1' },
    { dutch: 'rennen', english: 'to run', level: 'A1' },
    { dutch: 'het spoor', english: 'track', level: 'A1' },
    { dutch: 'vertrekken', english: 'to leave', level: 'A1' },
    { dutch: 'de vertrektijd', english: 'departure time', level: 'A1' },
    { dutch: 'via', english: 'through', level: 'A1' },
    { dutch: 'wachten', english: 'to wait', level: 'A1' },
    { dutch: 'jouw', english: 'your (singular)', level: 'A1' },
    { dutch: 'uw', english: 'your (polite)', level: 'A1' },
    { dutch: 'zijn', english: 'his', level: 'A1' },
    { dutch: 'haar', english: 'her', level: 'A1' },
    { dutch: 'ons', english: 'us', level: 'A1' },
    { dutch: 'onze', english: 'our', level: 'A1' },
    { dutch: 'hun', english: 'their', level: 'A1' },
    { dutch: 'blijven', english: 'to stay', level: 'A1' },
    { dutch: 'de chauffeur', english: 'driver', level: 'A1' },
    { dutch: 'eindelijk', english: 'finally', level: 'A1' },
    { dutch: 'de halte', english: 'stop', level: 'A1' },
    { dutch: 'hangen', english: 'to hang', level: 'A1' },
    { dutch: 'instappen', english: 'to get in', level: 'A1' },
    { dutch: 'net', english: 'just', level: 'A1' },
    { dutch: 'slapen', english: 'to sleep', level: 'A1' },
    { dutch: 'uitstappen', english: 'to get out', level: 'A1' },
    { dutch: 'vanavond', english: 'tonight', level: 'A1' },
    { dutch: 'volgend', english: 'next', level: 'A1' }
  ],
  'thema_8_vrije_tijd': [
    { dutch: 'de boerderij', english: 'farm', level: 'A1' },
    { dutch: 'het dier', english: 'animal', level: 'A1' },
    { dutch: 'dik', english: 'fat', level: 'A1' },
    { dutch: 'de hond', english: 'dog', level: 'A1' },
    { dutch: 'de kat', english: 'cat', level: 'A1' },
    { dutch: 'de koe', english: 'cow', level: 'A1' },
    { dutch: 'kwijt', english: 'lost', level: 'A1' },
    { dutch: 'leven', english: 'to live', level: 'A1' },
    { dutch: 'overal', english: 'everywhere', level: 'A1' },
    { dutch: 'het paard', english: 'horse', level: 'A1' },
    { dutch: 'het schaap', english: 'sheep', level: 'A1' },
    { dutch: 'het varken', english: 'pig', level: 'A1' },
    { dutch: 'de club', english: 'club', level: 'A1' },
    { dutch: 'de dame', english: 'lady', level: 'A1' },
    { dutch: 'de heer', english: 'gentleman', level: 'A1' },
    { dutch: 'iedereen', english: 'everybody', level: 'A1' },
    { dutch: 'de informatie', english: 'information', level: 'A1' },
    { dutch: 'spelen', english: 'to play', level: 'A1' },
    { dutch: 'sporten', english: 'to play, to exercise', level: 'A1' },
    { dutch: 'het team', english: 'team', level: 'A1' },
    { dutch: 'trainen', english: 'to train', level: 'A1' },
    { dutch: 'vanaf', english: 'since', level: 'A1' },
    { dutch: 'voetballen', english: 'to play football (soccer)', level: 'A1' },
    { dutch: 'de wedstrijd', english: 'match, game', level: 'A1' },
    { dutch: 'de bal', english: 'ball', level: 'A1' },
    { dutch: 'bewegen', english: 'to move', level: 'A1' },
    { dutch: 'dansen', english: 'to dance', level: 'A1' },
    { dutch: 'gezond', english: 'healthy', level: 'A1' },
    { dutch: 'de hobby', english: 'hobby', level: 'A1' },
    { dutch: 'houden van', english: 'to love', level: 'A1' },
    { dutch: 'de muziek', english: 'music', level: 'A1' },
    { dutch: 'tekenen', english: 'to draw', level: 'A1' },
    { dutch: 'vertellen', english: 'to tell', level: 'A1' },
    { dutch: 'de vriend', english: 'friend', level: 'A1' },
    { dutch: 'weer', english: 'again', level: 'A1' },
    { dutch: 'zwemmen', english: 'to swim', level: 'A1' },
    { dutch: 'het adres', english: 'address', level: 'A1' },
    { dutch: 'de cursus', english: 'course, class', level: 'A1' },
    { dutch: 'daarom', english: 'therefore', level: 'A1' },
    { dutch: 'het e-mailadres', english: 'e-mail address', level: 'A1' },
    { dutch: 'het formulier', english: 'form', level: 'A1' },
    { dutch: 'de geboortedatum', english: 'date of birth', level: 'A1' },
    { dutch: 'inschrijven', english: 'to register, to sign up', level: 'A1' },
    { dutch: 'invullen', english: 'to fill in', level: 'A1' },
    { dutch: 'het nummer', english: 'number', level: 'A1' },
  ],
  'thema_8_vrije_tijd_part2': [
    { dutch: 'starten', english: 'to start', level: 'A1' },
    { dutch: 'de postcode', english: 'zip code', level: 'A1' },
    { dutch: 'de telefoon', english: 'phone', level: 'A1' },
    { dutch: 'als', english: 'if', level: 'A1' },
    { dutch: 'het concert', english: 'concert', level: 'A1' },
    { dutch: 'een dagje weg', english: 'a day out', level: 'A1' },
    { dutch: 'het liedje', english: 'song, tune', level: 'A1' },
    { dutch: 'het museum', english: 'museum', level: 'A1' },
    { dutch: 'op bezoek', english: 'visiting', level: 'A1' },
    { dutch: 'de radio', english: 'radio', level: 'A1' },
    { dutch: 'het restaurant', english: 'restaurant', level: 'A1' },
    { dutch: 'het strand', english: 'beach', level: 'A1' },
    { dutch: 'uit eten', english: 'dining out', level: 'A1' },
    { dutch: 'de zee', english: 'sea', level: 'A1' },
    { dutch: 'zingen', english: 'to sing', level: 'A1' },
    { dutch: 'de bloem', english: 'flower', level: 'A1' },
    { dutch: 'fietsen', english: 'to ride a bicycle', level: 'A1' },
    { dutch: 'groetjes', english: 'greetings', level: 'A1' },
    { dutch: 'ieder', english: 'each', level: 'A1' },
    { dutch: 'de natuur', english: 'nature', level: 'A1' },
    { dutch: 'op vakantie gaan', english: 'go on holiday', level: 'A1' },
    { dutch: 'de tent', english: 'tent', level: 'A1' },
    { dutch: 'de vakantie', english: 'holiday', level: 'A1' },
    { dutch: 'de vogel', english: 'bird', level: 'A1' },
    { dutch: 'wandelen', english: 'to walk', level: 'A1' },
    { dutch: 'het weer', english: 'weather', level: 'A1' },
    { dutch: 'het zwembad', english: 'swimming pool', level: 'A1' },
    { dutch: 'bedoelen', english: 'to mean', level: 'A1' },
    { dutch: 'herhalen', english: 'to repeat', level: 'A1' },
    { dutch: 'langzaam', english: 'slow', level: 'A1' },
    { dutch: 'nog een keer', english: 'again', level: 'A1' },
    { dutch: 'verstaan', english: 'to understand, to hear', level: 'A1' },
    { dutch: 'uitleggen', english: 'to explain', level: 'A1' },
    { dutch: 'het bier', english: 'beer', level: 'A1' },
    { dutch: 'het café', english: 'cafe, pub', level: 'A1' },
    { dutch: 'elkaar', english: 'each other', level: 'A1' },
    { dutch: 'de film', english: 'film', level: 'A1' },
    { dutch: 'inderdaad', english: 'indeed', level: 'A1' },
    { dutch: 'jawel', english: 'yes', level: 'A1' },
    { dutch: 'kletsen', english: 'to chat, to gossip', level: 'A1' },
    { dutch: 'schoonmaken', english: 'to clean', level: 'A1' },
    { dutch: 'veel plezier', english: 'lots of fun', level: 'A1' },
    { dutch: 'de vriendin', english: 'girlfriend', level: 'A1' },
    { dutch: 'weleens', english: 'sometimes', level: 'A1' },
    { dutch: 'zin hebben in', english: 'to feel like', level: 'A1' }
  ],
  'lesson_1_basics': [
    { dutch: 'een', english: 'a', level: 'A1' },
    { dutch: 'de', english: 'the', level: 'A1' },
    { dutch: 'het', english: 'the', level: 'A1' },
    { dutch: 'slecht', english: 'bad', level: 'A1' },
    { dutch: 'goedendag', english: 'good day', level: 'A1' }
  ],
  'lesson_2_pronouns': [
    { dutch: 'a.u.b.', english: 'please', level: 'A1' },
    { dutch: 'roken', english: 'to smoke', level: 'A1' },
    { dutch: 'wel', english: 'confirmative', level: 'A1' }
  ],
  'lesson_3_professions': [
    { dutch: 'zijn', english: 'to be', level: 'A1' },
    { dutch: 'de leraar', english: 'the teacher', level: 'A1' },
    { dutch: 'blij', english: 'happy', level: 'A1' },
    { dutch: 'leuk', english: 'funny', level: 'A1' },
    { dutch: 'mooi', english: 'pretty', level: 'A1' },
    { dutch: 'oud', english: 'old', level: 'A1' },
    { dutch: 'jong', english: 'young', level: 'A1' },
    { dutch: 'de voetballer', english: 'the football player', level: 'A1' },
    { dutch: 'de premier', english: 'the prime minister', level: 'A2' },
    { dutch: 'de student', english: 'the student', level: 'A1' },
    { dutch: 'de leerling', english: 'the scholar', level: 'A1' },
    { dutch: 'de baas', english: 'the boss', level: 'A2' },
    { dutch: 'de bakker', english: 'the baker', level: 'A1' },
    { dutch: 'de slager', english: 'the butcher', level: 'A1' },
    { dutch: 'de boer', english: 'the farmer', level: 'A1' },
    { dutch: 'de visser', english: 'the fisherman', level: 'A1' },
    { dutch: 'de advocaat', english: 'the lawyer', level: 'A2' },
    { dutch: 'de dokter', english: 'the doctor', level: 'A1' },
    { dutch: 'de ober', english: 'the waiter', level: 'A1' },
    { dutch: 'de politieman', english: 'the police officer', level: 'A1' },
    { dutch: 'de agent', english: 'the police officer', level: 'A1' },
    { dutch: 'de kapper', english: 'the hairdresser', level: 'A1' },
    { dutch: 'de directeur', english: 'the director', level: 'A2' },
    { dutch: 'de boekhouder', english: 'the accountant', level: 'A2' },
    { dutch: 'de verkoper', english: 'the salesman', level: 'A1' },
    { dutch: 'de vertegenwoordiger', english: 'the representative', level: 'A2' }
  ],
  'lesson_4_food_drinks': [
    { dutch: 'de hagelslag', english: 'the chocolate sprinkles', level: 'A1' },
    { dutch: 'de pindakaas', english: 'the peanut butter', level: 'A1' },
    { dutch: 'de aardappeleter', english: 'the potato-eater', level: 'A2' },
    { dutch: 'de friet', english: 'the French fries', level: 'A1' },
    { dutch: 'frietje met', english: 'French fries with mayonnaise', level: 'A1' },
    { dutch: 'de frikadel', english: 'Dutch meat sausage', level: 'A1' },
    { dutch: 'de kroket', english: 'Dutch fried ragout bar', level: 'A1' },
    { dutch: 'de pannenkoek', english: 'the pancake', level: 'A1' },
    { dutch: 'de stroopwafel', english: 'the syrup waffle', level: 'A1' },
    { dutch: 'drop', english: 'liquorice', level: 'A1' },
    { dutch: 'de snoep', english: 'the sweets', level: 'A1' }
  ],
  'lesson_5_questions': [
    { dutch: 'wie', english: 'who', level: 'A1' },
    { dutch: 'wat', english: 'what', level: 'A1' },
    { dutch: 'dat', english: 'that', level: 'A1' },
    { dutch: 'dit', english: 'this', level: 'A1' },
    { dutch: 'welke', english: 'which', level: 'A1' },
    { dutch: 'deze', english: 'these, this', level: 'A1' },
    { dutch: 'die', english: 'that, those', level: 'A1' },
    { dutch: 'waar', english: 'where', level: 'A1' },
    { dutch: 'hier', english: 'here', level: 'A1' },
    { dutch: 'daar', english: 'there', level: 'A1' },
    { dutch: 'wanneer', english: 'when', level: 'A1' },
    { dutch: 'dan', english: 'then', level: 'A1' },
    { dutch: 'toen', english: 'at that time (past)', level: 'A2' },
    { dutch: 'terwijl', english: 'while', level: 'A2' },
    { dutch: 'hoe', english: 'how', level: 'A1' },
    { dutch: 'zo', english: 'like this', level: 'A1' },
    { dutch: 'hoeveel', english: 'how much', level: 'A1' },
    { dutch: 'de bloem', english: 'the flower', level: 'A1' },
    { dutch: 'waarom', english: 'why', level: 'A1' },
    { dutch: 'daarom', english: "that's why", level: 'A1' },
    { dutch: 'want', english: 'because', level: 'A1' },
    { dutch: 'omdat', english: 'because', level: 'A1' },
    { dutch: 'maar', english: 'but', level: 'A1' },
    { dutch: 'behalve', english: 'except', level: 'A2' },
    { dutch: 'de fiets', english: 'the bike', level: 'A1' }
  ],
  'lesson_6_transport_places': [
    { dutch: 'het vliegveld', english: 'the airport', level: 'A1' },
    { dutch: 'de haven', english: 'the port', level: 'A1' },
    { dutch: 'het kantoor', english: 'the office', level: 'A1' },
    { dutch: 'de sporthal', english: 'the sports hall', level: 'A1' },
    { dutch: 'het politiebureau', english: 'the police station', level: 'A1' },
    { dutch: 'de bibliotheek', english: 'the library', level: 'A1' },
    { dutch: 'de universiteit', english: 'the university', level: 'A1' }
  ],
  'lesson_7_numbers': [
    { dutch: 'nul', english: 'zero', level: 'A1' },
    { dutch: 'een', english: 'one', level: 'A1' },
    { dutch: 'twee', english: 'two', level: 'A1' },
    { dutch: 'drie', english: 'three', level: 'A1' },
    { dutch: 'vier', english: 'four', level: 'A1' },
    { dutch: 'vijf', english: 'five', level: 'A1' },
    { dutch: 'zes', english: 'six', level: 'A1' },
    { dutch: 'zeven', english: 'seven', level: 'A1' },
    { dutch: 'acht', english: 'eight', level: 'A1' },
    { dutch: 'negen', english: 'nine', level: 'A1' },
    { dutch: 'tien', english: 'ten', level: 'A1' },
    { dutch: 'elf', english: 'eleven', level: 'A1' },
    { dutch: 'twaalf', english: 'twelve', level: 'A1' },
    { dutch: 'dertien', english: 'thirteen', level: 'A1' },
    { dutch: 'veertien', english: 'fourteen', level: 'A1' },
    { dutch: 'vijftien', english: 'fifteen', level: 'A1' },
    { dutch: 'twintig', english: 'twenty', level: 'A1' },
    { dutch: 'eenentwintig', english: 'twenty one', level: 'A1' },
    { dutch: 'dertig', english: 'thirty', level: 'A1' },
    { dutch: 'veertig', english: 'forty', level: 'A1' },
    { dutch: 'vijftig', english: 'fifty', level: 'A1' },
    { dutch: 'honderd', english: 'hundred', level: 'A1' },
    { dutch: 'tweehonderd', english: 'two hundred', level: 'A1' },
    { dutch: 'duizend', english: 'thousand', level: 'A1' },
    { dutch: 'miljoen', english: 'million', level: 'A1' }
  ],
  'lesson_8_verbs_essential': [
    { dutch: 'lopen', english: 'to walk', level: 'A1' },
    { dutch: 'hebben', english: 'to have', level: 'A1' },
    { dutch: 'worden', english: 'to become', level: 'A1' },
    { dutch: 'gaan', english: 'to go', level: 'A1' },
    { dutch: 'vragen', english: 'to ask', level: 'A1' },
    { dutch: 'antwoorden', english: 'to answer', level: 'A1' },
    { dutch: 'kopen', english: 'to buy', level: 'A1' },
    { dutch: 'krijgen', english: 'to get', level: 'A1' },
    { dutch: 'eten', english: 'to eat', level: 'A1' },
    { dutch: 'drinken', english: 'to drink', level: 'A1' },
    { dutch: 'rijden', english: 'to drive', level: 'A1' },
    { dutch: 'vergeten', english: 'to forget', level: 'A1' },
    { dutch: 'horen', english: 'to hear', level: 'A1' },
    { dutch: 'luisteren', english: 'to listen', level: 'A1' },
    { dutch: 'zien', english: 'to see', level: 'A1' },
    { dutch: 'kijken', english: 'to look', level: 'A1' },
    { dutch: 'weten', english: 'to know', level: 'A1' },
    { dutch: 'leren', english: 'to learn', level: 'A1' },
    { dutch: 'slapen', english: 'to sleep', level: 'A1' },
    { dutch: 'lezen', english: 'to read', level: 'A1' },
    { dutch: 'schrijven', english: 'to write', level: 'A1' },
    { dutch: 'spreken', english: 'to speak', level: 'A1' },
    { dutch: 'zeggen', english: 'to say', level: 'A1' },
    { dutch: 'denken', english: 'to think', level: 'A1' },
    { dutch: 'werken', english: 'to work', level: 'A1' },
    { dutch: 'wachten', english: 'to wait', level: 'A1' }
  ],
  'lesson_9_adjectives': [
    { dutch: 'groot', english: 'big', level: 'A1' },
    { dutch: 'klein', english: 'small', level: 'A1' },
    { dutch: 'lekker', english: 'tasty', level: 'A1' },
    { dutch: 'vies', english: 'dirty, disgusting', level: 'A1' },
    { dutch: 'schoon', english: 'clean', level: 'A1' },
    { dutch: 'mooi', english: 'beautiful', level: 'A1' },
    { dutch: 'de tulp', english: 'the tulip', level: 'A1' },
    { dutch: 'lelijk', english: 'ugly', level: 'A1' },
    { dutch: 'interessant', english: 'interesting', level: 'A1' },
    { dutch: 'saai', english: 'boring', level: 'A1' },
    { dutch: 'arm', english: 'poor', level: 'A1' },
    { dutch: 'rijk', english: 'rich', level: 'A1' },
    { dutch: 'donker', english: 'dark', level: 'A1' },
    { dutch: 'licht', english: 'light', level: 'A1' },
    { dutch: 'zwaar', english: 'heavy', level: 'A1' },
    { dutch: 'hard', english: 'hard, fast', level: 'A1' },
    { dutch: 'zacht', english: 'soft, slow', level: 'A1' },
    { dutch: 'snel', english: 'fast', level: 'A1' },
    { dutch: 'lief', english: 'lovely, sweet', level: 'A1' },
    { dutch: 'stout', english: 'naughty', level: 'A1' },
    { dutch: 'koud', english: 'cold', level: 'A1' },
    { dutch: 'warm', english: 'warm', level: 'A1' },
    { dutch: 'duur', english: 'expensive', level: 'A1' },
    { dutch: 'goedkoop', english: 'cheap', level: 'A1' },
    { dutch: 'hoog', english: 'high, tall', level: 'A1' },
    { dutch: 'laag', english: 'low', level: 'A1' }
  ],
  'lesson_10_time': [
    { dutch: 'week', english: 'week', level: 'A1' },
    { dutch: 'maandag', english: 'Monday', level: 'A1' },
    { dutch: 'dinsdag', english: 'Tuesday', level: 'A1' },
    { dutch: 'woensdag', english: 'Wednesday', level: 'A1' },
    { dutch: 'donderdag', english: 'Thursday', level: 'A1' },
    { dutch: 'vrijdag', english: 'Friday', level: 'A1' },
    { dutch: 'zaterdag', english: 'Saturday', level: 'A1' },
    { dutch: 'zondag', english: 'Sunday', level: 'A1' },
    { dutch: 'de maand', english: 'the month', level: 'A1' },
    { dutch: 'de maan', english: 'the moon', level: 'A1' },
    { dutch: 'januari', english: 'January', level: 'A1' },
    { dutch: 'februari', english: 'February', level: 'A1' },
    { dutch: 'maart', english: 'March', level: 'A1' },
    { dutch: 'april', english: 'April', level: 'A1' },
    { dutch: 'mei', english: 'May', level: 'A1' },
    { dutch: 'juni', english: 'June', level: 'A1' },
    { dutch: 'juli', english: 'July', level: 'A1' },
    { dutch: 'augustus', english: 'August', level: 'A1' },
    { dutch: 'september', english: 'September', level: 'A1' },
    { dutch: 'oktober', english: 'October', level: 'A1' },
    { dutch: 'november', english: 'November', level: 'A1' },
    { dutch: 'december', english: 'December', level: 'A1' },
    { dutch: 'winter', english: 'winter', level: 'A1' },
    { dutch: 'lente', english: 'spring', level: 'A1' },
    { dutch: 'zomer', english: 'summer', level: 'A1' },
    { dutch: 'herfst', english: 'autumn', level: 'A1' }
  ],
  'lesson_11_prepositions': [
    { dutch: 'met', english: 'with', level: 'A1' },
    { dutch: 'van', english: 'from', level: 'A1' },
    { dutch: 'naar', english: 'to', level: 'A1' },
    { dutch: 'in', english: 'in', level: 'A1' },
    { dutch: 'voor', english: 'in front of', level: 'A1' },
    { dutch: 'achter', english: 'behind', level: 'A1' },
    { dutch: 'naast', english: 'next to', level: 'A1' },
    { dutch: 'beneden', english: 'down, downstairs', level: 'A1' },
    { dutch: 'boven', english: 'above, up, upstairs', level: 'A1' },
    { dutch: 'onder', english: 'below', level: 'A1' },
    { dutch: 'op', english: 'at, on top', level: 'A1' },
    { dutch: 'tussen', english: 'between', level: 'A1' },
    { dutch: 'het midden', english: 'the middle', level: 'A1' },
    { dutch: 'over', english: 'about', level: 'A1' },
    { dutch: 'over', english: 'over', level: 'A1' },
    { dutch: 'bij', english: 'at, near', level: 'A1' },
    { dutch: 'binnen', english: 'inside', level: 'A1' },
    { dutch: 'buiten', english: 'outside', level: 'A1' },
    { dutch: 'tegen', english: 'against', level: 'A1' },
    { dutch: 'rond', english: 'around', level: 'A1' },
    { dutch: 'sinds', english: 'since', level: 'A2' },
    { dutch: 'zonder', english: 'without', level: 'A1' },
    { dutch: 'voor', english: 'before', level: 'A1' },
    { dutch: 'na', english: 'after', level: 'A1' },
    { dutch: 'om', english: 'at', level: 'A1' }
  ],
  'lesson_12_clock': [
    { dutch: 'hoe laat?', english: 'what time?', level: 'A1' },
    { dutch: 'hoe laat is het?', english: 'what time is it?', level: 'A1' },
    { dutch: 'de klok', english: 'the clock', level: 'A1' },
    { dutch: 'het uur', english: 'the hour', level: 'A1' },
    { dutch: 'twee uur', english: 'two o\'clock', level: 'A1' },
    { dutch: 'om tien uur', english: 'at ten o\'clock', level: 'A1' },
    { dutch: 'half vier', english: 'half past three', level: 'A1' },
    { dutch: 'half een', english: 'half past twelve', level: 'A1' },
    { dutch: 'het kwartier', english: 'the quarter', level: 'A1' },
    { dutch: 'kwart over drie', english: 'quarter past three', level: 'A1' },
    { dutch: 'kwart voor zeven', english: 'quarter to seven', level: 'A1' },
    { dutch: 'de minuut', english: 'the minute', level: 'A1' },
    { dutch: 'tien over zes', english: 'ten past six', level: 'A1' },
    { dutch: 'vijf voor acht', english: 'five to eight', level: 'A1' },
    { dutch: 'de nacht', english: 'the night', level: 'A1' },
    { dutch: 'de ochtend', english: 'the morning', level: 'A1' },
    { dutch: 'de morgen', english: 'the morning', level: 'A1' },
    { dutch: 'de middag', english: 'the afternoon', level: 'A1' },
    { dutch: 'de avond', english: 'the evening', level: 'A1' },
    { dutch: 'middernacht', english: 'midnight', level: 'A1' }
  ],
  'lesson_13_leisure': [
    { dutch: 'vrije tijd', english: 'leisure time', level: 'A1' },
    { dutch: 'de hobby', english: 'the hobby', level: 'A1' },
    { dutch: 'reizen', english: 'to travel', level: 'A1' },
    { dutch: 'de vakantie', english: 'the holiday', level: 'A1' },
    { dutch: 'kamperen', english: 'to camp out', level: 'A1' },
    { dutch: 'het strand', english: 'the beach', level: 'A1' },
    { dutch: 'zonnen', english: 'to sunbathe', level: 'A1' },
    { dutch: 'het pretpark', english: 'the theme park', level: 'A1' },
    { dutch: 'tuinieren', english: 'gardening', level: 'A1' },
    { dutch: 'de taal', english: 'the language', level: 'A1' },
    { dutch: 'een taal leren', english: 'to learn a language', level: 'A1' },
    { dutch: 'sporten', english: 'to exercise', level: 'A1' },
    { dutch: 'hardlopen', english: 'to run', level: 'A1' },
    { dutch: 'wandelen', english: 'to go for a walk', level: 'A1' },
    { dutch: 'tennissen', english: 'to play tennis', level: 'A1' },
    { dutch: 'hockeyen', english: 'to play hockey', level: 'A1' },
    { dutch: 'borrelen', english: 'to have a drink', level: 'A2' },
    { dutch: 'uit eten gaan', english: 'to go out for dinner', level: 'A1' },
    { dutch: 'uitgaan', english: 'to go out', level: 'A1' },
    { dutch: 'stappen', english: 'to go out (and drink)', level: 'A2' },
    { dutch: 'dronken zijn', english: 'being drunk', level: 'A2' },
    { dutch: 'koken', english: 'to cook', level: 'A1' },
    { dutch: 'kunst', english: 'art', level: 'A1' },
    { dutch: 'verjaardag', english: 'the birthday', level: 'A1' },
    { dutch: 'hij is jarig', english: "it's his birthday", level: 'A1' },
    { dutch: 'zingen', english: 'to sing', level: 'A1' },
    { dutch: 'dansen', english: 'to dance', level: 'A1' },
    { dutch: 'winkelen', english: 'to go shopping', level: 'A1' }
  ],
  'lesson_14_amsterdam': [
    { dutch: 'Amsterdam', english: 'Amsterdam', level: 'A1' },
    { dutch: 'de gracht', english: 'the canal', level: 'A1' },
    { dutch: 'het grachtenpand', english: 'the canal house', level: 'A2' },
    { dutch: 'de woonboot', english: 'the house boat', level: 'A1' },
    { dutch: 'wonen', english: 'to live', level: 'A1' },
    { dutch: 'het paleis', english: 'the palace', level: 'A1' },
    { dutch: 'pont', english: 'the ferry', level: 'A1' },
    { dutch: 'de rondvaart', english: 'the canal cruise', level: 'A2' },
    { dutch: 'het museum', english: 'the museum', level: 'A1' },
    { dutch: 'het concert', english: 'the concert', level: 'A1' },
    { dutch: 'het gebouw', english: 'the building', level: 'A1' },
    { dutch: 'het concertgebouw', english: 'the Concertgebouw', level: 'A2' },
    { dutch: 'het plein', english: 'the square', level: 'A1' },
    { dutch: 'het fietspad', english: 'the bicycle track', level: 'A1' },
    { dutch: 'de brug', english: 'the bridge', level: 'A1' },
    { dutch: 'het eiland', english: 'the island', level: 'A1' },
    { dutch: 'de ring', english: 'the ring, the ring road', level: 'A1' },
    { dutch: 'de coffeeshop', english: 'bar where soft drugs is sold', level: 'A2' },
    { dutch: 'het stadion', english: 'the stadium', level: 'A1' },
    { dutch: 'het hoofdkantoor', english: 'the head office', level: 'A2' },
    { dutch: 'de wallen', english: 'the red light district', level: 'A2' },
    { dutch: 'de hoer', english: 'the prostitute', level: 'A2' },
    { dutch: 'het park', english: 'the park', level: 'A1' },
    { dutch: 'het bos', english: 'the forest', level: 'A1' }
  ],
  'lesson_15_house': [
    { dutch: 'de woning', english: 'the house', level: 'A1' },
    { dutch: 'de kruk', english: 'the stool', level: 'A1' },
    { dutch: 'het fornuis', english: 'the cooker', level: 'A1' },
    { dutch: 'de koelkast', english: 'the fridge', level: 'A1' },
    { dutch: 'de bijkeuken', english: 'the scullery', level: 'A2' }
  ],
  'lesson_16_body': [
    { dutch: 'het lijf', english: 'the body', level: 'A1' },
    { dutch: 'de kop', english: 'the head', level: 'A1' },
    { dutch: 'de zonnebril', english: 'the sunglasses', level: 'A1' },
    { dutch: 'de elleboog', english: 'the elbow', level: 'A1' },
    { dutch: 'de kont', english: 'the ass', level: 'A2' },
    { dutch: 'de borst', english: 'the chest, the breast', level: 'A1' },
    { dutch: 'het hart', english: 'the heart', level: 'A1' }
  ],
  'lesson_17_clothes': [
    { dutch: 'de kledingwinkel', english: 'the clothes shop', level: 'A1' },
    { dutch: 'de spijkerbroek', english: 'the jeans', level: 'A1' },
    { dutch: 'de kous', english: 'the sock (long)', level: 'A1' },
    { dutch: 'de klomp', english: 'the wooden shoe', level: 'A1' },
    { dutch: 'de riem', english: 'the belt', level: 'A1' },
    { dutch: 'de colbert', english: 'the suit jacket', level: 'A1' },
    { dutch: 'de stropdas', english: 'the tie', level: 'A1' },
    { dutch: 'de strik', english: 'the bow', level: 'A1' },
    { dutch: 'de pyjama', english: 'the pyjamas', level: 'A1' },
    { dutch: 'de bh', english: 'the bra', level: 'A1' }
  ],
  'lesson_18_verbs_more': [
    { dutch: 'doen', english: 'to do', level: 'A1' },
    { dutch: 'beginnen', english: 'to begin', level: 'A1' },
    { dutch: 'geloven', english: 'to believe', level: 'A1' },
    { dutch: 'brengen', english: 'to bring', level: 'A1' },
    { dutch: 'halen', english: 'to pick up', level: 'A1' },
    { dutch: 'lenen', english: 'to borrow', level: 'A1' },
    { dutch: 'bellen', english: 'to call', level: 'A1' },
    { dutch: 'kunnen', english: 'to can', level: 'A1' },
    { dutch: 'sluiten', english: 'to close', level: 'A1' },
    { dutch: 'snijden', english: 'to cut', level: 'A1' },
    { dutch: 'beslissen', english: 'to decide', level: 'A2' },
    { dutch: 'vallen', english: 'to fall', level: 'A1' },
    { dutch: 'voelen', english: 'to feel, to touch', level: 'A1' },
    { dutch: 'volgen', english: 'to follow', level: 'A1' },
    { dutch: 'gebeuren', english: 'to happen', level: 'A1' },
    { dutch: 'iets', english: 'something', level: 'A1' },
    { dutch: 'helpen', english: 'to help', level: 'A1' },
    { dutch: 'houden', english: 'to hold, to keep', level: 'A1' },
    { dutch: 'houden van', english: 'to love', level: 'A1' },
    { dutch: 'weten', english: 'to know', level: 'A1' },
    { dutch: 'kennen', english: 'to know', level: 'A1' },
    { dutch: 'leuk vinden', english: 'to like', level: 'A1' },
    { dutch: 'laten', english: 'to leave', level: 'A1' },
    { dutch: 'verliezen', english: 'to lose', level: 'A1' },
    { dutch: 'winnen', english: 'to win', level: 'A1' },
    { dutch: 'maken', english: 'to make', level: 'A1' }
  ],
  'lesson_19_work': [
    { dutch: 'solliciteren', english: 'to apply for', level: 'A2' },
    { dutch: 'de sollicitatie', english: 'the application', level: 'A2' },
    { dutch: 'de vacature', english: 'the vacancy', level: 'A2' },
    { dutch: 'de advertentie', english: 'the advertisement', level: 'A2' },
    { dutch: 'het werk', english: 'the work', level: 'A1' },
    { dutch: 'de baan', english: 'the job', level: 'A1' },
    { dutch: 'veranderen', english: 'to change', level: 'A1' },
    { dutch: 'de brief', english: 'the letter', level: 'A1' },
    { dutch: 'de sollicitatiebrief', english: 'the application letter', level: 'A2' },
    { dutch: 'het cv', english: 'the resume', level: 'A2' },
    { dutch: 'de opleiding', english: 'the education', level: 'A2' },
    { dutch: 'de ervaring', english: 'the experience', level: 'A2' },
    { dutch: 'het gesprek', english: 'the conversation, the interview', level: 'A1' },
    { dutch: 'het sollicitatiegesprek', english: 'the job interview', level: 'A2' },
    { dutch: 'het bedrijf', english: 'the company', level: 'A1' },
    { dutch: 'de zaak', english: 'the company', level: 'A2' },
    { dutch: 'het salaris', english: 'the salary', level: 'A2' },
    { dutch: 'bruto', english: 'gross', level: 'A2' },
    { dutch: 'netto', english: 'net', level: 'A2' },
    { dutch: 'de belasting', english: 'the tax', level: 'A2' },
    { dutch: 'het vakantiegeld', english: 'the vacation bonus', level: 'A2' },
    { dutch: 'de auto van de zaak', english: 'the company car', level: 'A2' },
    { dutch: 'het pensioen', english: 'the pension', level: 'A2' },
    { dutch: 'de reiskosten', english: 'the travel expenses', level: 'A2' },
    { dutch: 'de vergoeding', english: 'the compensation', level: 'A2' },
    { dutch: 'de reiskostenvergoeding', english: 'the compensation for travel expenses', level: 'A2' },
    { dutch: 'de collega', english: 'the colleague', level: 'A1' },
    { dutch: 'aannemen', english: 'to hire', level: 'A2' },
    { dutch: 'ontslaan', english: 'to fire', level: 'A2' }
  ],
  'lesson_20_family': [
    { dutch: 'papa', english: 'dad', level: 'A1' },
    { dutch: 'mama', english: 'mom', level: 'A1' },
    { dutch: 'de kennis', english: 'the acquaintance', level: 'A1' },
    { dutch: 'de bekende', english: 'the acquaintance', level: 'A1' },
    { dutch: 'de klasgenoot', english: 'the classmate', level: 'A1' },
    { dutch: 'de verkering', english: 'the relationship (love)', level: 'A2' },
    { dutch: 'verloofd', english: 'to be engaged', level: 'A2' },
    { dutch: 'scheiden', english: 'to divorce', level: 'A2' },
    { dutch: 'gescheiden zijn', english: 'to be divorced', level: 'A2' }
  ]
};

const getAllWords = () => {
  const allWords = [];
  Object.entries(dutchWordBank).forEach(([category, words]) => {
    words.forEach(word => allWords.push({ ...word, category }));
  });
  return allWords;
};

const getTotalWordCount = () => getAllWords().length;

export default function DutchLearningGame() {
  const [gameMode, setGameMode] = useState('menu');
  const [currentWord, setCurrentWord] = useState(null);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [wordBank, setWordBank] = useState([]);
  const [usedWords, setUsedWords] = useState([]);
  const [learnIndex, setLearnIndex] = useState(0);
  const [learnWords, setLearnWords] = useState([]);
  const [spellingAnswer, setSpellingAnswer] = useState('');
  const [numQuestions, setNumQuestions] = useState(10);
  const [showQuestionSelector, setShowQuestionSelector] = useState(false);
  const [pendingGameMode, setPendingGameMode] = useState(null);

  const categories = ['all', ...Object.keys(dutchWordBank)];

  const loadWords = (category) => {
    let words = [];
    if (category === 'all') {
      words = getAllWords();
    } else {
      words = (dutchWordBank[category] || []).map(w => ({ ...w, category }));
    }
    return words.sort(() => Math.random() - 0.5);
  };

  const startLearnMode = () => {
    const words = loadWords(selectedCategory);
    if (words.length === 0) {
      alert('Not enough words in this category.');
      return;
    }
    if (words.length < numQuestions) {
      alert(`Not enough words in this category. Please select a category with at least ${numQuestions} words or reduce the number of questions.`);
      return;
    }
    setLearnWords(words.slice(0, numQuestions));
    setLearnIndex(0);
    setGameMode('learn');
    setShowQuestionSelector(false);
  };

  const startGame = (mode = 'play') => {
    const words = loadWords(selectedCategory);
    
    if (mode === 'play' && words.length < 4) {
      alert('Not enough words in this category.');
      return;
    }
    
    if (mode === 'spelling' && words.length < 1) {
      alert('Not enough words in this category.');
      return;
    }
    
    if (words.length < numQuestions) {
      alert(`Not enough words in this category. Please select a category with at least ${numQuestions} words or reduce the number of questions.`);
      return;
    }
    
    setWordBank(words);
    setUsedWords([]);
    setGameMode(mode);
    setScore(0);
    setStreak(0);
    setQuestionsAnswered(0);
    setFeedback(null);
    setSpellingAnswer('');
    setShowQuestionSelector(false);
    
    if (mode === 'spelling') {
      generateSpellingQuestion(words, []);
    } else {
      generateQuestion(words, []);
    }
  };

  const openQuestionSelector = (mode) => {
    setPendingGameMode(mode);
    setShowQuestionSelector(true);
  };

  const startGameWithQuestions = () => {
    if (numQuestions < 10 || numQuestions > 45) {
      alert('Please select between 10 and 45 questions.');
      return;
    }
    if (pendingGameMode === 'learn') {
      startLearnMode();
    } else {
      startGame(pendingGameMode);
    }
  };

  const generateQuestion = (words = wordBank, used = usedWords) => {
    if (words.length < 4) return;
    
    const availableWords = words.filter(w => 
      !used.some(u => u.dutch === w.dutch && u.english === w.english)
    );
    
    if (availableWords.length < 4) {
      setUsedWords([]);
      generateQuestion(words, []);
      return;
    }
    
    const correct = availableWords[Math.floor(Math.random() * availableWords.length)];
    const wrongOptions = availableWords
      .filter(w => w.english !== correct.english)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    
    const allOptions = [correct, ...wrongOptions].sort(() => Math.random() - 0.5);
    
    setCurrentWord(correct);
    setOptions(allOptions);
    setFeedback(null);
    setUsedWords([...used, correct]);
  };

  const generateSpellingQuestion = (words = wordBank, used = usedWords) => {
    if (words.length === 0) return;
    
    const availableWords = words.filter(w => 
      !used.some(u => u.dutch === w.dutch && u.english === w.english)
    );
    
    if (availableWords.length === 0) {
      setUsedWords([]);
      generateSpellingQuestion(words, []);
      return;
    }
    
    const correct = availableWords[Math.floor(Math.random() * availableWords.length)];
    
    setCurrentWord(correct);
    setSpellingAnswer('');
    setFeedback(null);
    setUsedWords([...used, correct]);
  };

  const handleAnswer = (selected) => {
    const isCorrect = selected.english === currentWord.english;
    
    if (isCorrect) {
      setScore(score + 1);
      setStreak(streak + 1);
      setFeedback({ correct: true, message: 'Goed gedaan! (Well done!)' });
      
      setTimeout(() => {
        if (questionsAnswered + 1 >= numQuestions) {
          setGameMode('results');
        } else {
          generateQuestion();
        }
      }, 1500);
    } else {
      setStreak(0);
      setFeedback({ 
        correct: false, 
        message: `Niet helemaal! The correct answer is "${currentWord.english}"` 
      });
      // Don't auto-advance on wrong answer - wait for user to click Next
    }
    
    setQuestionsAnswered(questionsAnswered + 1);
  };

  const handleNext = () => {
    setSpellingAnswer('');
    if (questionsAnswered >= numQuestions) {
      setGameMode('results');
    } else {
      if (gameMode === 'spelling') {
        generateSpellingQuestion();
      } else {
        generateQuestion();
      }
    }
  };

  const handleSpellingSubmit = (e) => {
    if (e) e.preventDefault();
    
    if (!spellingAnswer.trim()) {
      return;
    }
    
    const userAnswer = spellingAnswer.trim().toLowerCase();
    const correctAnswer = currentWord.dutch.toLowerCase();
    const isCorrect = userAnswer === correctAnswer;
    
    setQuestionsAnswered(questionsAnswered + 1);
    
    if (isCorrect) {
      setScore(score + 1);
      setStreak(streak + 1);
      setFeedback({ correct: true, message: 'Perfect! Goed gedaan! (Well done!)' });
      
      setTimeout(() => {
        if (questionsAnswered + 1  >= numQuestions) {
          setGameMode('results');
        } else {
          setSpellingAnswer('');
          generateSpellingQuestion();
        }
      }, 1500);
    } else {
      setStreak(0);
      setFeedback({ 
        correct: false, 
        message: `Not quite! The correct spelling is "${currentWord.dutch}"` 
      });
    }
  };

  const speakDutch = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'nl-NL';
    utterance.rate = 0.8;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  const goToMenu = () => {
    setGameMode('menu');
    setScore(0);
    setStreak(0);
    setQuestionsAnswered(0);
    setFeedback(null);
    setUsedWords([]);
    setLearnIndex(0);
    setLearnWords([]);
    setCurrentWord(null);
    setOptions([]);
    setWordBank([]);
    setSpellingAnswer('');
    setShowQuestionSelector(false);
    setPendingGameMode(null);
    setNumQuestions(10);
  };

  if (gameMode === 'menu') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl w-full">
          {!showQuestionSelector ? (
            <>
              <div className="text-center mb-8">
                <h1 className="text-5xl font-bold text-orange-600 mb-2">🇳🇱 Leer Nederlands</h1>
                <p className="text-gray-600 text-lg">1000 Most Common Dutch Words - Lessons 1-20</p>
                <div className="mt-4 inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                  <GraduationCap className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 font-bold">{getTotalWordCount()} Words Available!</span>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-3">Choose a lesson category:</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-96 overflow-y-auto p-2 bg-gray-50 rounded-xl">
                  {categories.map(cat => {
                    const wordCount = cat === 'all' ? getTotalWordCount() : (dutchWordBank[cat]?.length || 0);
                    const hasA1 = cat !== 'all' && dutchWordBank[cat]?.some(w => w.level === 'A1');
                    const hasA2 = cat !== 'all' && dutchWordBank[cat]?.some(w => w.level === 'A2');
                    
                    return (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`p-3 rounded-xl font-medium transition-all text-xs ${
                          selectedCategory === cat
                            ? 'bg-orange-500 text-white shadow-lg scale-105'
                            : 'bg-white text-gray-700 hover:bg-orange-50 border border-gray-200'
                        }`}
                      >
                        <div className="font-bold text-sm">{cat === 'all' ? 'All Lessons' : cat.replace(/_/g, ' ').replace(/lesson /g, 'L').toUpperCase()}</div>
                        <div className="opacity-75 mt-1">
                          {wordCount} words
                          {(hasA1 || hasA2) && (
                            <span className="ml-1">
                              {hasA1 && '🟢'} {hasA2 && '🔵'}
                            </span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => openQuestionSelector('learn')}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xl font-bold py-4 rounded-xl hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-6 h-6" />
                  Learn Mode - Study Vocabulary
                </button>
                
                <button
                  onClick={() => openQuestionSelector('play')}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-xl font-bold py-4 rounded-xl hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <GraduationCap className="w-6 h-6" />
                  Multiple Choice Quiz
                </button>
                
                <button
                  onClick={() => openQuestionSelector('spelling')}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl font-bold py-4 rounded-xl hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  ✍️ Spelling Challenge
                </button>
              </div>

              <div className="mt-6 p-4 bg-orange-50 rounded-xl">
                <div className="text-sm text-gray-600 space-y-2">
                  <p className="text-center font-bold text-orange-600 mb-2">Official "1000 Most Common Words in Dutch" Course</p>
                  <p><span className="font-bold">🟢 A1 Level:</span> Basic essential words for beginners</p>
                  <p><span className="font-bold">🔵 A2 Level:</span> Intermediate vocabulary</p>
                  <p className="mt-3 text-center font-semibold">📚 Learn Mode → ✅ Multiple Choice → ✍️ Spelling Challenge</p>
                  <p className="mt-2 text-center italic">Master Dutch vocabulary step by step!</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-orange-600 mb-2">
                  {pendingGameMode === 'play' ? '📝 Multiple Choice Quiz' : 
                   pendingGameMode === 'spelling' ? '✍️ Spelling Challenge' : 
                   '📚 Learn Mode - Study Vocabulary'}
                </h2>
                <p className="text-gray-600 text-lg">How many words would you like to study?</p>
              </div>

              <div className="mb-8">
                <label className="block text-gray-700 font-semibold mb-4 text-center">
                  Selected Category: <span className="text-orange-600">{selectedCategory === 'all' ? 'All Lessons' : selectedCategory.replace(/_/g, ' ').toUpperCase()}</span>
                </label>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <label className="block text-gray-700 font-semibold mb-3 text-center">
                    Number of Questions (10-45):
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="45"
                    value={numQuestions}
                    onChange={(e) => setNumQuestions(parseInt(e.target.value))}
                    className="w-full h-3 bg-orange-200 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #f97316 0%, #f97316 ${((numQuestions - 10) / 35) * 100}%, #fed7aa ${((numQuestions - 10) / 35) * 100}%, #fed7aa 100%)`
                    }}
                  />
                  <div className="text-center mt-4">
                    <span className="text-5xl font-bold text-orange-600">{numQuestions}</span>
                    <span className="text-2xl text-gray-600 ml-2">questions</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>Min: 10</span>
                    <span>Max: 45</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={startGameWithQuestions}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xl font-bold py-4 rounded-xl hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  {pendingGameMode === 'learn' ? 'Start Learning' : 'Starts quiz with'} {numQuestions} {pendingGameMode === 'learn' ? 'Words' : 'Questions'}
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                <button
                  onClick={() => setShowQuestionSelector(false)}
                  className="w-full bg-gray-200 text-gray-700 text-lg font-bold py-3 rounded-xl hover:bg-gray-300 transition-all flex items-center justify-center gap-2"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Back to Category Selection
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  if (gameMode === 'learn') {
    const currentLearnWord = learnWords[learnIndex];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500 p-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-4">
            <div className="flex justify-between items-center">
              <button
                onClick={goToMenu}
                className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-all flex items-center gap-2"
              >
                <Home className="w-5 h-5 text-gray-700" />
                <span className="font-semibold">Menu</span>
              </button>
              <div className="text-gray-600 font-semibold">
                {learnIndex + 1} / {learnWords.length}
              </div>
            </div>
            
            <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300"
                style={{ width: `${((learnIndex + 1) / learnWords.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            {currentLearnWord && (
              <div className="text-center">
                <div className="mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    currentLearnWord.level === 'A1' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {currentLearnWord.level} Level
                  </span>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <h2 className="text-6xl font-bold text-indigo-600">{currentLearnWord.dutch}</h2>
                    <button
                      onClick={() => speakDutch(currentLearnWord.dutch)}
                      className="bg-indigo-100 hover:bg-indigo-200 p-4 rounded-full transition-all"
                    >
                      <Volume2 className="w-8 h-8 text-indigo-600" />
                    </button>
                  </div>
                  
                  <div className="text-4xl font-semibold text-gray-700 mb-2">
                    {currentLearnWord.english}
                  </div>
                  
                  <div className="text-lg text-gray-500 capitalize">
                    {currentLearnWord.category.replace(/_/g, ' ')}
                  </div>
                </div>

                <div className="flex gap-4 justify-center mt-8">
                  <button
                    onClick={() => setLearnIndex(Math.max(0, learnIndex - 1))}
                    disabled={learnIndex === 0}
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Previous
                  </button>
                  
                  {learnIndex < learnWords.length - 1 ? (
                    <button
                      onClick={() => setLearnIndex(learnIndex + 1)}
                      className="px-6 py-3 bg-indigo-500 text-white rounded-xl font-bold hover:bg-indigo-600 transition-all flex items-center gap-2"
                    >
                      Next
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        if (confirm('Ready to test yourself?')) {
                          startGame();
                        }
                      }}
                      className="px-6 py-3 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 transition-all flex items-center gap-2"
                    >
                      Start Test
                      <GraduationCap className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (gameMode === 'results') {
    const percentage = Math.round((score / numQuestions) * 100);
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-lg w-full text-center">
          <Trophy className="w-24 h-24 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {percentage >= 80 ? 'Uitstekend! You\'re ready for the exam!' :
               percentage >= 60 ? 'Goed! Keep practicing!' :
               'Keep learning! Review the words and try again!'}
            </h2>
          <div className="mb-6">
            <div className="text-6xl font-bold text-orange-600 mb-2">{score}/{numQuestions}</div>
            <div className="text-2xl text-gray-600">{percentage}% Correct</div>
          </div>
          
          {/* <div className="bg-orange-50 rounded-xl p-4 mb-6">
            <p className="text-lg text-gray-700">
              {percentage >= 80 ? 'Uitstekend! You\'re ready for the exam!' :
               percentage >= 60 ? 'Goed! Keep practicing!' :
               'Keep learning! Review the words and try again!'}
            </p>
          </div> */}

          <div className="space-y-3">
            <button
              onClick={startGame}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold py-3 rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-5 h-5" />
              Test Again
            </button>
            <button
              onClick={startLearnMode}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-lg font-bold py-3 rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              Review Words
            </button>
            <button
              onClick={goToMenu}
              className="w-full bg-gray-200 text-gray-700 text-lg font-bold py-3 rounded-xl hover:bg-gray-300 transition-all flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Back to Menu
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-4 items-center">
              <button
                onClick={goToMenu}
                className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-all flex items-center gap-2"
                title="Back to Menu"
              >
                <Home className="w-5 h-5 text-gray-700" />
                <span className="font-semibold">Menu</span>
              </button>
              <div className="bg-green-100 px-4 py-2 rounded-lg">
                <span className="text-green-700 font-bold">Score: {score}</span>
              </div>
              <div className="bg-blue-100 px-4 py-2 rounded-lg">
                <span className="text-blue-700 font-bold">Streak: {streak} 🔥</span>
              </div>
            </div>
            <div className="text-gray-600 font-semibold">
              Question {questionsAnswered}/{numQuestions}
            </div>
          </div>
          
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300"
              style={{ width: `${((questionsAnswered) / numQuestions) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {currentWord && gameMode !== 'spelling' && (
            <>
              <div className="text-center mb-8">
                <div className="mb-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    currentWord.level === 'A1' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {currentWord.level} Level
                  </span>
                </div>
                <p className="text-gray-600 mb-2">What is the English translation of:</p>
                <div className="flex items-center justify-center gap-3">
                  <h2 className="text-5xl font-bold text-orange-600">{currentWord.dutch}</h2>
                  <button
                    onClick={() => speakDutch(currentWord.dutch)}
                    className="bg-orange-100 hover:bg-orange-200 p-3 rounded-full transition-all"
                    title="Hear pronunciation"
                  >
                    <Volume2 className="w-6 h-6 text-orange-600" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option)}
                    disabled={feedback !== null}
                    className={`p-4 text-lg font-semibold rounded-xl transition-all transform hover:scale-102 ${
                      feedback === null
                        ? 'bg-gray-100 hover:bg-orange-100 text-gray-800 hover:text-orange-600'
                        : feedback.correct && option.english === currentWord.english
                        ? 'bg-green-500 text-white'
                        : !feedback.correct && option.english === currentWord.english
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {option.english}
                  </button>
                ))}
              </div>

              {feedback && (
                <div className={`mt-6 p-4 rounded-xl ${
                  feedback.correct ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  <div className="flex items-center gap-3 mb-3">
                    {feedback.correct ? (
                      <Check className="w-6 h-6 text-green-600" />
                    ) : (
                      <X className="w-6 h-6 text-red-600" />
                    )}
                    <p className={`font-semibold ${
                      feedback.correct ? 'text-green-700' : 'text-red-700'
                    }`}>
                      {feedback.message}
                    </p>
                  </div>
                  
                  {!feedback.correct && (
                    <button
                      onClick={handleNext}
                      className="w-full mt-3 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
                    >
                      Next Question
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  )}
                </div>
              )}
            </>
          )}
          
          {currentWord && gameMode === 'spelling' && (
            <>
              <div className="text-center mb-8">
                <div className="mb-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    currentWord.level === 'A1' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {currentWord.level} Level - Spelling Challenge
                  </span>
                </div>
                <p className="text-gray-600 mb-2">Type the Dutch word for:</p>
                <div className="flex items-center justify-center gap-3 mb-6">
                  <h2 className="text-5xl font-bold text-purple-600">{currentWord.english}</h2>
                </div>
                
                <button
                  onClick={() => speakDutch(currentWord.dutch)}
                  className="bg-purple-100 hover:bg-purple-200 px-6 py-3 rounded-xl transition-all inline-flex items-center gap-2 mb-6"
                  title="Hear the pronunciation"
                >
                  <Volume2 className="w-5 h-5 text-purple-600" />
                  <span className="text-purple-600 font-semibold">Hear pronunciation</span>
                </button>
              </div>

              <form onSubmit={handleSpellingSubmit} className="space-y-4">
                <input
                  type="text"
                  value={spellingAnswer}
                  onChange={(e) => setSpellingAnswer(e.target.value)}
                  disabled={feedback !== null}
                  placeholder="Type the Dutch word here..."
                  className="w-full p-4 text-2xl text-center font-semibold border-4 border-purple-300 rounded-xl focus:border-purple-500 focus:outline-none disabled:bg-gray-100"
                  autoFocus
                />
                
                {feedback === null && (
                  <button
                    type="submit"
                    disabled={!spellingAnswer.trim()}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl font-bold py-4 rounded-xl hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Submit Answer
                  </button>
                )}
              </form>

              {feedback && (
                <div className={`mt-6 p-4 rounded-xl ${
                  feedback.correct ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  <div className="flex items-center gap-3 mb-3">
                    {feedback.correct ? (
                      <Check className="w-6 h-6 text-green-600" />
                    ) : (
                      <X className="w-6 h-6 text-red-600" />
                    )}
                    <p className={`font-semibold ${
                      feedback.correct ? 'text-green-700' : 'text-red-700'
                    }`}>
                      {feedback.message}
                    </p>
                  </div>
                  
                  {!feedback.correct && (
                    <div className="mb-3 p-3 bg-white rounded-lg">
                      <p className="text-gray-600 text-sm mb-1">You wrote:</p>
                      <p className="text-red-600 font-bold text-xl line-through">{spellingAnswer}</p>
                      <p className="text-gray-600 text-sm mt-2 mb-1">Correct answer:</p>
                      <p className="text-green-600 font-bold text-xl">{currentWord.dutch}</p>
                    </div>
                  )}
                  
                  <button
                    onClick={handleNext}
                    className="w-full mt-3 bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    Next Question
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}