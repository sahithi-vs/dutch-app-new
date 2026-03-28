// data/grammarLessons.js
export const grammarLessons = {
  dehet: {
    id: 'dehet',
    title: 'De/Het Rules',
    icon: '📚',
    level: 'A1',
    difficulty: 'beginner',
    estimatedTime: '20 minutes',
    description: 'Learn when to use "de" or "het" with Dutch nouns',
    tags: ['articles', 'grammar', 'nouns', 'gender'],
    content: {
      explanation: `Dutch has two definite articles: "de" (common gender) and "het" (neuter gender). About 2/3 of Dutch nouns use "de" and 1/3 use "het".

**General Rules:**

1. **Use "de" for:**
   - All plural nouns (de huizen, de boeken, de kinderen)
   - People and professions (de man, de vrouw, de leraar, de dokter)
   - Vegetables and fruits (de appel, de tomaat, de banaan, de wortel)
   - Trees and plants (de boom, de roos, de tulp, de eik)
   - Numbers and letters (de drie, de A, de vijf)
   - Rivers and mountains (de Rijn, de Alpen)
   - Most words ending in: -ie, -ij, -heid, -teit, -schap, -tie

2. **Use "het" for:**
   - Diminutives ending in -je, -tje, -pje, -kje (het kindje, het boompje, het huisje)
   - Infinitives used as nouns (het eten, het slapen, het zwemmen)
   - Languages (het Nederlands, het Engels, het Spaans)
   - Compass directions (het noorden, het zuiden, het oosten, het westen)
   - Names of sports and games (het voetbal, het schaken, het tennis)
   - Colors used as nouns (het rood, het blauw, het groen)
   - Metals (het goud, het zilver, het ijzer)
   - Most words ending in: -isme, -ment, -um
   - Two-syllable words starting with be-, ge-, ver-, ont-: het begin, het gevoel, het verstand
   
3. **Memory tricks:**
   - If it's alive and you can have a conversation with it → "de"
   - If you can make it smaller (diminutive) → remember it with "het" (het kindje)
   - Fruits and vegetables → think of a market with "de" signs
   
⚠️ **Important:** There are many exceptions! The best way is to memorize the article with each noun. Native speakers learn these naturally, so don't worry about making mistakes - they'll understand you!`,
      
      tips: [
        'Always learn new nouns with their article: not just "huis" but "het huis"',
        'Use flashcards with different colors: blue for "de" words, red for "het" words',
        'Practice with diminutives - they\'re always "het" and make the pattern clearer',
        'When you hear a new word, immediately ask: "de of het?"',
        'Read Dutch children\'s books - they often emphasize articles'
      ],

      commonPatterns: [
        { pattern: 'Words ending in -ie', article: 'de', examples: ['de vakantie', 'de reactie', 'de relatie'] },
        { pattern: 'Words ending in -heid', article: 'de', examples: ['de vrijheid', 'de waarheid', 'de schoonheid'] },
        { pattern: 'Words ending in -isme', article: 'het', examples: ['het toerisme', 'het optimisme', 'het realisme'] },
        { pattern: 'Words ending in -ment', article: 'het', examples: ['het moment', 'het document', 'het instrument'] },
        { pattern: 'All diminutives (-je)', article: 'het', examples: ['het katje', 'het tafeltje', 'het bloempje'] },
        { pattern: 'Professions', article: 'de', examples: ['de leraar', 'de dokter', 'de verpleger'] }
      ],
      
      examples: [
        { dutch: 'de man', english: 'the man', rule: 'People use "de"', category: 'people' },
        { dutch: 'de vrouw', english: 'the woman', rule: 'People use "de"', category: 'people' },
        { dutch: 'het kind', english: 'the child', rule: 'Exception - must memorize', category: 'exception' },
        { dutch: 'de appel', english: 'the apple', rule: 'Fruits use "de"', category: 'food' },
        { dutch: 'de banaan', english: 'the banana', rule: 'Fruits use "de"', category: 'food' },
        { dutch: 'het boek', english: 'the book', rule: 'Exception - must memorize', category: 'exception' },
        { dutch: 'de huizen', english: 'the houses', rule: 'All plurals use "de"', category: 'plural' },
        { dutch: 'de kinderen', english: 'the children', rule: 'All plurals use "de"', category: 'plural' },
        { dutch: 'het kindje', english: 'the little child', rule: 'Diminutives (-je) use "het"', category: 'diminutive' },
        { dutch: 'het huisje', english: 'the little house', rule: 'Diminutives (-je) use "het"', category: 'diminutive' },
        { dutch: 'de leraar', english: 'the teacher', rule: 'Professions use "de"', category: 'people' },
        { dutch: 'de dokter', english: 'the doctor', rule: 'Professions use "de"', category: 'people' },
        { dutch: 'het eten', english: 'the eating/food', rule: 'Infinitives as nouns use "het"', category: 'infinitive' },
        { dutch: 'het slapen', english: 'the sleeping', rule: 'Infinitives as nouns use "het"', category: 'infinitive' },
        { dutch: 'het Nederlands', english: 'the Dutch language', rule: 'Languages use "het"', category: 'language' },
        { dutch: 'de vrijheid', english: 'the freedom', rule: 'Words ending in -heid use "de"', category: 'pattern' }
      ],
      
      quiz: [
        {
          question: 'What article goes with "boek" (book)?',
          options: ['de', 'het', 'een', 'no article'],
          correct: 'het',
          explanation: '"Het boek" - Books take "het". This is an exception you need to memorize!',
          difficulty: 'easy'
        },
        {
          question: 'What article goes with "man" (man)?',
          options: ['de', 'het', 'een', 'no article'],
          correct: 'de',
          explanation: '"De man" - People always use "de".',
          difficulty: 'easy'
        },
        {
          question: 'What article goes with "kindje" (little child)?',
          options: ['de', 'het', 'een', 'no article'],
          correct: 'het',
          explanation: '"Het kindje" - All diminutives ending in -je use "het".',
          difficulty: 'easy'
        },
        {
          question: 'What article goes with "huizen" (houses - plural)?',
          options: ['de', 'het', 'een', 'no article'],
          correct: 'de',
          explanation: '"De huizen" - ALL plural nouns use "de", always!',
          difficulty: 'easy'
        },
        {
          question: 'What article goes with "appel" (apple)?',
          options: ['de', 'het', 'een', 'no article'],
          correct: 'de',
          explanation: '"De appel" - Fruits use "de".',
          difficulty: 'easy'
        },
        {
          question: 'What article goes with "Nederlands" (Dutch language)?',
          options: ['de', 'het', 'een', 'no article'],
          correct: 'het',
          explanation: '"Het Nederlands" - Languages use "het".',
          difficulty: 'medium'
        },
        {
          question: 'What article goes with "vrouw" (woman)?',
          options: ['de', 'het', 'een', 'no article'],
          correct: 'de',
          explanation: '"De vrouw" - People always use "de".',
          difficulty: 'easy'
        },
        {
          question: 'What article goes with "water" (water)?',
          options: ['de', 'het', 'een', 'no article'],
          correct: 'het',
          explanation: '"Het water" - This is an exception you need to memorize.',
          difficulty: 'medium'
        },
        {
          question: 'What article goes with "vrijheid" (freedom)?',
          options: ['de', 'het', 'een', 'no article'],
          correct: 'de',
          explanation: '"De vrijheid" - Words ending in -heid always use "de".',
          difficulty: 'medium'
        },
        {
          question: 'What article goes with "moment" (moment)?',
          options: ['de', 'het', 'een', 'no article'],
          correct: 'het',
          explanation: '"Het moment" - Words ending in -ment usually use "het".',
          difficulty: 'medium'
        }
      ]
    }
  },
  
wordorder: {
    id: 'wordorder',
    title: 'Word Order',
    icon: '🔄',
    level: 'A2',
    difficulty: 'intermediate',
    estimatedTime: '30 minutes',
    description: 'Master Dutch sentence structure and word order rules',
    tags: ['syntax', 'grammar', 'sentence structure', 'verb position'],
    content: {
      explanation: `Dutch word order follows specific patterns that differ from English. Understanding these rules is crucial for speaking natural Dutch.

**THE GOLDEN RULE: V2 (Verb Second)**
The conjugated verb ALWAYS occupies the second position in main clauses. This is the most important rule in Dutch grammar!

---

**1. MAIN CLAUSES (Simple Sentences):**

Basic structure: Subject + Verb + Object (SVO)
- "Ik eet een appel" (I eat an apple)
- "Hij leest een boek" (He reads a book)
- "Wij wonen in Amsterdam" (We live in Amsterdam)

The conjugated verb is ALWAYS in position 2:
Position 1: Subject (Ik)
Position 2: Verb (eet) ← ALWAYS HERE!
Position 3+: Everything else (een appel)

---

**2. INVERSION (V2 Rule in Action):**

When you start with ANYTHING other than the subject, the verb MUST still be in position 2, so the subject moves after the verb.

**Starting with TIME:**
- Normal: "Ik ga morgen naar school" (I go tomorrow to school)
- Inverted: "Morgen ga ik naar school" (Tomorrow go I to school)
  * Position 1: Morgen (time)
  * Position 2: ga (verb) ← Still position 2!
  * Position 3: ik (subject moves here)

**Starting with PLACE:**
- Normal: "Ik woon in Amsterdam"
- Inverted: "In Amsterdam woon ik"
  * Position 1: In Amsterdam (place)
  * Position 2: woon (verb)
  * Position 3: ik (subject)

**Starting with OBJECT:**
- Normal: "Ik vind dat boek interessant"
- Inverted: "Dat boek vind ik interessant" (That book find I interesting)
  * Position 1: Dat boek (object)
  * Position 2: vind (verb)
  * Position 3: ik (subject)

**Starting with ADVERB:**
- Normal: "Ik heb dat altijd geweten"
- Inverted: "Dat heb ik altijd geweten" (That have I always known)

🔑 **KEY POINT:** No matter what comes first, the verb is ALWAYS in position 2!

---

**3. TIME - MANNER - PLACE (TMP Rule):**

When you have multiple adverbial phrases, they follow this specific order:

**Structure:** Subject + Verb + TIME + MANNER + PLACE

**Examples:**

1. **All three elements:**
   "Ik ga morgen met de trein naar Amsterdam"
   - Ik ga (I go)
   - morgen (TIME - tomorrow)
   - met de trein (MANNER - by train)
   - naar Amsterdam (PLACE - to Amsterdam)
   Translation: "I go tomorrow by train to Amsterdam"

2. **Time + Place:**
   "Hij komt om 5 uur thuis"
   - om 5 uur (TIME - at 5 o'clock)
   - thuis (PLACE - home)

3. **Manner + Place:**
   "Zij gaat met de bus naar werk"
   - met de bus (MANNER - by bus)
   - naar werk (PLACE - to work)

4. **Complex example:**
   "Wij reizen volgende week met het vliegtuig naar Spanje"
   - volgende week (TIME)
   - met het vliegtuig (MANNER - by plane)
   - naar Spanje (PLACE - to Spain)

**With Inversion (starting with time):**
"Morgen ga ik met de trein naar Amsterdam"
- Position 1: Morgen (TIME moves to front)
- Position 2: ga (verb)
- Position 3: ik (subject)
- Position 4: met de trein (MANNER)
- Position 5: naar Amsterdam (PLACE)

📝 **Memory trick:** Think "TMP" = "Time, Method, Place"

---

**4. SUBORDINATE CLAUSES (Bijzinnen):**

In subordinate clauses, the verb moves to the END of the clause!

**Common subordinating conjunctions:**
- dat (that)
- omdat (because)
- als (if/when)
- toen (when - past)
- nadat (after)
- voordat (before)
- terwijl (while)
- hoewel (although)
- zodat (so that)

**Structure:** Conjunction + Subject + (TIME) + (MANNER) + (PLACE) + VERB

**Examples:**

1. **Simple subordinate clause:**
   Main clause: "Hij komt" (He comes)
   Subordinate: "Ik weet dat hij komt" (I know that he comes)
   - dat (conjunction)
   - hij (subject)
   - komt (verb at END)

2. **With time element:**
   "Ik weet dat hij morgen komt"
   - dat hij (conjunction + subject)
   - morgen (time)
   - komt (verb at END)

3. **With TMP elements:**
   "Ik weet dat hij morgen met de trein naar Amsterdam gaat"
   - dat hij (conjunction + subject)
   - morgen (TIME)
   - met de trein (MANNER)
   - naar Amsterdam (PLACE)
   - gaat (VERB at END)

4. **With "omdat" (because):**
   "Ik blijf thuis omdat ik ziek ben"
   (I stay home because I sick am)
   - omdat (conjunction)
   - ik (subject)
   - ziek (predicate)
   - ben (verb at END)

5. **Complex example:**
   "Hij zegt dat hij gisteren met zijn vrienden naar de film is geweest"
   (He says that he yesterday with his friends to the movie has been)
   - dat hij (that he)
   - gisteren (TIME - yesterday)
   - met zijn vrienden (MANNER - with his friends)
   - naar de film (PLACE - to the movie)
   - is geweest (VERB at END)

🔑 **KEY POINT:** Main clause = verb in position 2. Subordinate clause = verb at the END.

---

**5. SEPARABLE VERBS:**

Separable verbs split apart in main clauses, but stay together in subordinate clauses.

**Common separable verbs:**
- opstaan (to get up) = op + staan
- meekomen (to come along) = mee + komen
- terugkomen (to come back) = terug + komen
- uitnodigen (to invite) = uit + nodigen
- opbellen (to call) = op + bellen
- aankomen (to arrive) = aan + komen

**In MAIN clauses (verb splits):**
- "Ik sta om 7 uur op" (I get up at 7 o'clock)
  * sta (conjugated part in position 2)
  * om 7 uur (time)
  * op (prefix at END)

- "Hij komt morgen terug" (He comes back tomorrow)
  * komt (position 2)
  * morgen (time)
  * terug (prefix at END)

- "Zij nodigt haar vrienden uit" (She invites her friends)
  * nodigt (position 2)
  * haar vrienden (object)
  * uit (prefix at END)

**In SUBORDINATE clauses (verb stays together):**
- "Ik weet dat hij om 7 uur opstaat" (I know that he gets up at 7 o'clock)
  * opstaat (together at END)

- "Omdat hij morgen terugkomt..." (Because he comes back tomorrow...)
  * terugkomt (together at END)

**With inversion:**
- "Morgen sta ik om 7 uur op"
  * Morgen (position 1)
  * sta (position 2)
  * ik (subject)
  * om 7 uur (time)
  * op (prefix at END)

---

**6. MODAL VERBS & PERFECT TENSE:**

When you have two verbs, the conjugated verb stays in position 2, and the other verb(s) go to the END.

**MODAL VERBS (kunnen, willen, moeten, mogen, zullen):**

Structure: Subject + Modal + (middle field) + Infinitive

Examples:
1. "Ik kan zwemmen" (I can swim)
   - kan (modal in position 2)
   - zwemmen (infinitive at END)

2. "Hij wil morgen naar Amsterdam gaan"
   - wil (modal in position 2)
   - morgen (time)
   - naar Amsterdam (place)
   - gaan (infinitive at END)

3. "Wij moeten hard werken" (We must work hard)
   - moeten (modal in position 2)
   - hard (adverb)
   - werken (infinitive at END)

**With inversion:**
"Morgen kan ik zwemmen"
- Morgen (position 1)
- kan (position 2)
- ik (subject)
- zwemmen (infinitive at END)

**PERFECT TENSE (hebben/zijn + past participle):**

Structure: Subject + hebben/zijn + (middle field) + Past Participle

Examples:
1. "Ik heb gegeten" (I have eaten)
   - heb (auxiliary in position 2)
   - gegeten (past participle at END)

2. "Hij heeft een boek gekocht" (He has bought a book)
   - heeft (position 2)
   - een boek (object)
   - gekocht (past participle at END)

3. "Wij zijn naar Amsterdam gegaan" (We have gone to Amsterdam)
   - zijn (position 2)
   - naar Amsterdam (place)
   - gegaan (past participle at END)

4. "Ik heb gisteren met mijn vrienden in de stad gewandeld"
   - heb (position 2)
   - gisteren (TIME)
   - met mijn vrienden (MANNER)
   - in de stad (PLACE)
   - gewandeld (past participle at END)

**In subordinate clauses:**
"Ik weet dat hij een boek gekocht heeft"
- dat hij (conjunction + subject)
- een boek (object)
- gekocht heeft (both verbs at END, participle before auxiliary)

---

**7. NEGATION (niet/geen):**

**"Niet" (not) placement:**

1. **Before the main verb (if it's at the end):**
   - "Ik kan niet zwemmen" (I cannot swim)
   - "Hij wil niet gaan" (He doesn't want to go)

2. **After the verb, but before:**
   - Adjectives: "Het is niet mooi" (It's not beautiful)
   - Adverbs: "Hij rent niet snel" (He doesn't run fast)
   - Prepositional phrases: "Ik ga niet naar school" (I don't go to school)

3. **With perfect tense:**
   - "Ik heb niet gegeten" (I haven't eaten)
   - "Hij is niet gekomen" (He hasn't come)

**"Geen" (no/not a) - replaces "een" or no article:**
- "Ik heb geen tijd" (I have no time)
- "Dat is geen probleem" (That's not a problem)
- "Hij heeft geen boek" (He doesn't have a book)

---

**8. MULTIPLE VERBS (Verb Clusters):**

When you have more than two verbs, they form a "verb cluster" at the end.

**General order at the end:**
Infinitive + Infinitive + Auxiliary (from general to specific)

Examples:
1. **Modal + Modal + Infinitive:**
   "Ik moet kunnen zwemmen"
   (I must be able to swim)
   - moet (position 2)
   - kunnen zwemmen (at END)

2. **Perfect + Modal:**
   "Ik heb kunnen zwemmen"
   (I have been able to swim)
   - heb (position 2)
   - kunnen zwemmen (at END)

3. **Want to start doing:**
   "Ik wil gaan zwemmen"
   (I want to go swimming)
   - wil (position 2)
   - gaan zwemmen (at END)

4. **In subordinate clauses:**
   "Ik weet dat ik morgen moet kunnen zwemmen"
   - dat ik morgen (that I tomorrow)
   - moet kunnen zwemmen (all verbs at END)

---

**9. QUESTIONS:**

**Yes/No questions (invert verb and subject):**
- Statement: "Jij gaat naar huis" (You go home)
- Question: "Ga jij naar huis?" (Do you go home?)
  * Verb in position 1
  * Subject in position 2
  * Note: -t disappears with "jij"! → "Werk jij?" not "Werkt jij?"

**Wh-Questions (question word + inversion):**
- "Waar woon jij?" (Where do you live?)
  * Position 1: Waar (question word)
  * Position 2: woon (verb)
  * Position 3: jij (subject)

- "Wanneer ga je naar huis?" (When do you go home?)
  * Wanneer (position 1)
  * ga (position 2)
  * je (subject)
  * naar huis (rest)

---

**10. PRACTICAL EXAMPLES - BUILDING COMPLEXITY:**

**Level 1 - Simple:**
"Ik eet een appel"
(Subject + Verb + Object)

**Level 2 - Add time:**
"Ik eet morgen een appel"
(Subject + Verb + TIME + Object)

**Level 3 - Add inversion:**
"Morgen eet ik een appel"
(TIME + Verb + Subject + Object)

**Level 4 - Add place:**
"Morgen eet ik in de keuken een appel"
(TIME + Verb + Subject + PLACE + Object)

**Level 5 - Add modal verb:**
"Morgen wil ik in de keuken een appel eten"
(TIME + Modal + Subject + PLACE + Object + Infinitive)

**Level 6 - Make it subordinate:**
"Ik weet dat ik morgen in de keuken een appel wil eten"
(Conjunction + Subject + TIME + PLACE + Object + Modal + Infinitive)

**Level 7 - Add negation:**
"Ik weet dat ik morgen in de keuken geen appel wil eten"
(Conjunction + Subject + TIME + PLACE + GEEN+Object + Modal + Infinitive)

---

**COMMON ERRORS TO AVOID:**

❌ "Morgen ik ga naar school" → ✅ "Morgen ga ik naar school"
(Verb must be in position 2 with inversion)

❌ "Ik ga naar Amsterdam met de trein" → ✅ "Ik ga met de trein naar Amsterdam"
(Manner before place - TMP rule)

❌ "Ik weet dat komt hij morgen" → ✅ "Ik weet dat hij morgen komt"
(Verb at end in subordinate clauses)

❌ "Ik opstaan om 7 uur" → ✅ "Ik sta om 7 uur op"
(Separable verbs must separate in main clauses)

❌ "Werkt jij morgen?" → ✅ "Werk jij morgen?"
(Drop -t with jij in questions)

❌ "Ik heb een boek niet gekocht" → ✅ "Ik heb geen boek gekocht"
(Use "geen" instead of "niet een")`,

      detailedRules: [
        {
          rule: 'V2 Rule (Verb Second)',
          description: 'The conjugated verb always occupies the second position in main clauses',
          examples: [
            { structure: 'Subject + Verb + Rest', example: 'Ik werk vandaag', translation: 'I work today' },
            { structure: 'Time + Verb + Subject', example: 'Vandaag werk ik', translation: 'Today I work' },
            { structure: 'Place + Verb + Subject', example: 'Hier woon ik', translation: 'Here I live' }
          ],
          keyPoints: [
            'Position 2 is for the conjugated verb only',
            'Whatever comes first counts as position 1',
            'Subject moves after verb if something else is in position 1'
          ]
        },
        {
          rule: 'TMP Order',
          description: 'Time - Manner - Place order for adverbial phrases',
          examples: [
            { structure: 'T + M + P', example: 'Ik ga morgen met de bus naar school', translation: 'I go tomorrow by bus to school' },
            { structure: 'T + P', example: 'Hij komt om 3 uur thuis', translation: 'He comes at 3 o\'clock home' },
            { structure: 'M + P', example: 'Zij gaat met de auto naar werk', translation: 'She goes by car to work' }
          ],
          keyPoints: [
            'This order is fixed - never change it',
            'Applies in both main and subordinate clauses',
            'Works with inverted sentences too'
          ]
        },
        {
          rule: 'Subordinate Clauses',
          description: 'Verb moves to the end in clauses introduced by conjunctions',
          examples: [
            { structure: 'dat + Subject + Verb', example: 'Ik weet dat hij komt', translation: 'I know that he comes' },
            { structure: 'omdat + S + TMP + V', example: 'omdat ik morgen met de trein naar Amsterdam ga', translation: 'because I tomorrow by train to Amsterdam go' },
            { structure: 'als + S + V', example: 'als je tijd hebt', translation: 'if you time have' }
          ],
          keyPoints: [
            'Main verb always at the end',
            'TMP order still applies before the verb',
            'Common conjunctions: dat, omdat, als, toen, nadat, voordat'
          ]
        },
        {
          rule: 'Separable Verbs',
          description: 'Prefix separates and goes to the end in main clauses',
          examples: [
            { structure: 'Main clause', example: 'Ik sta om 7 uur op', translation: 'I get up at 7 o\'clock' },
            { structure: 'Subordinate', example: 'dat ik om 7 uur opsta', translation: 'that I at 7 o\'clock get up' },
            { structure: 'With modal', example: 'Ik wil vroeg opstaan', translation: 'I want early to get up' }
          ],
          keyPoints: [
            'Prefix goes to end in main clauses',
            'Stays together in subordinate clauses',
            'Stays together with modal/auxiliary verbs'
          ]
        }
      ],

      visualGuide: [
        {
          type: 'Main Clause Structure',
          structure: '[Subject] [Verb] [Time] [Manner] [Place] [Other]',
          example: 'Ik ga morgen met de trein naar Amsterdam',
          breakdown: ['Ik', 'ga', 'morgen', 'met de trein', 'naar Amsterdam'],
          positions: ['1: Subject', '2: VERB', '3: TIME', '4: MANNER', '5: PLACE']
        },
        {
          type: 'Inverted Main Clause',
          structure: '[Time/Place/Other] [Verb] [Subject] [Manner] [Place] [Rest]',
          example: 'Morgen ga ik met de trein naar Amsterdam',
          breakdown: ['Morgen', 'ga', 'ik', 'met de trein', 'naar Amsterdam'],
          positions: ['1: TIME', '2: VERB', '3: Subject', '4: MANNER', '5: PLACE']
        },
        {
          type: 'Subordinate Clause',
          structure: '[Conjunction] [Subject] [Time] [Manner] [Place] [Verb]',
          example: '...dat ik morgen met de trein naar Amsterdam ga',
          breakdown: ['dat', 'ik', 'morgen', 'met de trein', 'naar Amsterdam', 'ga'],
          positions: ['Conjunction', 'Subject', 'TIME', 'MANNER', 'PLACE', 'VERB (END)']
        },
        {
          type: 'Separable Verb (Main)',
          structure: '[Subject] [Verb-stem] [Middle field] [Prefix]',
          example: 'Ik sta om 7 uur op',
          breakdown: ['Ik', 'sta', 'om 7 uur', 'op'],
          positions: ['Subject', 'Verb (position 2)', 'Time', 'Prefix (END)']
        },
        {
          type: 'Modal + Infinitive',
          structure: '[Subject] [Modal] [Middle field] [Infinitive]',
          example: 'Ik wil morgen naar Amsterdam gaan',
          breakdown: ['Ik', 'wil', 'morgen naar Amsterdam', 'gaan'],
          positions: ['Subject', 'Modal (position 2)', 'TIME + PLACE', 'Infinitive (END)']
        },
        {
          type: 'Perfect Tense',
          structure: '[Subject] [hebben/zijn] [Middle field] [Past Participle]',
          example: 'Ik heb gisteren een boek gekocht',
          breakdown: ['Ik', 'heb', 'gisteren een boek', 'gekocht'],
          positions: ['Subject', 'Auxiliary (position 2)', 'TIME + Object', 'Participle (END)']
        }
      ],

      tips: [
        'MASTER THE V2 RULE FIRST - it\'s the foundation of Dutch word order',
        'Think of position 2 as a "verb parking spot" - it must always be occupied by the conjugated verb',
        'Use TMP as a mnemonic: Time, Method (manner), Place',
        'In subordinate clauses, imagine the verb getting "pushed" to the end',
        'Practice inversion by starting sentences with different elements: time, place, object',
        'Listen to Dutch speakers and notice where verbs appear in their sentences',
        'When learning new verbs, always check if they\'re separable',
        'Remember: Questions are just inverted statements',
        'Create example sentences and break them down by position numbers'
      ],
      
      examples: [
        { dutch: 'Ik eet een appel', english: 'I eat an apple', rule: 'Normal SVO order', type: 'basic', positions: ['Ik (1)', 'eet (2)', 'een appel (3)'] },
        { dutch: 'Morgen eet ik een appel', english: 'Tomorrow I eat an apple', rule: 'Inversion - verb before subject', type: 'inversion', positions: ['Morgen (1)', 'eet (2)', 'ik (3)', 'een appel (4)'] },
        { dutch: 'Ik ga morgen naar school', english: 'I go tomorrow to school', rule: 'Time before place', type: 'tmp', positions: ['Ik (1)', 'ga (2)', 'morgen (T)', 'naar school (P)'] },
        { dutch: 'Ik ga morgen met de bus naar school', english: 'I go tomorrow by bus to school', rule: 'Time-Manner-Place', type: 'tmp', positions: ['Ik (1)', 'ga (2)', 'morgen (T)', 'met de bus (M)', 'naar school (P)'] },
        { dutch: 'Hij komt om 5 uur thuis', english: 'He comes at 5 o\'clock home', rule: 'Time - Place order', type: 'tmp' },
        { dutch: 'Ik weet dat hij komt', english: 'I know that he comes', rule: 'Subordinate clause - verb at end', type: 'subordinate' },
        { dutch: 'Ik weet dat hij morgen komt', english: 'I know that he tomorrow comes', rule: 'Subordinate with time before verb', type: 'subordinate' },
        { dutch: 'Ik sta om 7 uur op', english: 'I get up at 7 o\'clock', rule: 'Separable verb - prefix at end', type: 'separable' },
        { dutch: 'Vandaag ga ik niet werken', english: 'Today I don\'t go to work', rule: 'Inversion with time word', type: 'inversion' },
        { dutch: 'Zij gaat met de bus naar werk', english: 'She goes by bus to work', rule: 'Manner - Place order', type: 'tmp' },
        { dutch: 'Ik kan goed zwemmen', english: 'I can swim well', rule: 'Modal verb + infinitive', type: 'modal' },
        { dutch: 'Hij heeft een boek gekocht', english: 'He has bought a book', rule: 'Perfect tense - past participle at end', type: 'perfect' },
        { dutch: 'In Amsterdam woon ik', english: 'In Amsterdam I live', rule: 'Place at start causes inversion', type: 'inversion' },
        { dutch: 'Omdat ik ziek ben, blijf ik thuis', english: 'Because I am sick, I stay home', rule: 'Subordinate clause first, then main clause', type: 'complex' },
        { dutch: 'Dat boek vind ik interessant', english: 'That book I find interesting', rule: 'Object fronting with inversion', type: 'inversion' },
        { dutch: 'Morgen wil ik vroeg opstaan', english: 'Tomorrow I want to get up early', rule: 'Inversion + modal + separable verb', type: 'complex' },
        { dutch: 'Hij zegt dat hij gisteren met zijn vrienden naar de bioscoop is geweest', english: 'He says that he yesterday with his friends to the cinema has been', rule: 'Complex subordinate with TMP and perfect tense', type: 'complex' }
      ],
      
      quiz: [
        {
          question: 'Correct word order: "I eat tomorrow an apple"',
          options: [
            'Ik eet morgen een appel',
            'Ik morgen eet een appel',
            'Morgen ik eet een appel',
            'Eet ik morgen een appel'
          ],
          correct: 'Ik eet morgen een appel',
          explanation: 'Time word (morgen) goes after the verb in normal sentences. Verb stays in position 2.',
          difficulty: 'easy'
        },
        {
          question: 'Correct word order: "Tomorrow go I to school"',
          options: [
            'Morgen ga ik naar school',
            'Morgen ik ga naar school',
            'Ik ga morgen naar school',
            'Ga ik morgen naar school'
          ],
          correct: 'Morgen ga ik naar school',
          explanation: 'When starting with time, use inversion: Morgen + VERB + subject. Verb must stay in position 2!',
          difficulty: 'medium'
        },
        {
          question: 'Correct word order: "I know that he comes tomorrow"',
          options: [
            'Ik weet dat hij morgen komt',
            'Ik weet dat komt hij morgen',
            'Ik weet hij komt morgen',
            'Ik weet dat hij komt morgen'
          ],
          correct: 'Ik weet dat hij morgen komt',
          explanation: 'In subordinate clauses (after "dat"), verb goes to the END. Time word comes before verb.',
          difficulty: 'medium'
        },
        {
          question: 'Correct word order: "I get up at 7 o\'clock" (opstaan = to get up)',
          options: [
            'Ik sta om 7 uur op',
            'Ik opstaan om 7 uur',
            'Ik sta op om 7 uur',
            'Om 7 uur ik sta op'
          ],
          correct: 'Ik sta om 7 uur op',
          explanation: 'Separable verb "opstaan": conjugated part "sta" in position 2, prefix "op" goes to the END.',
          difficulty: 'medium'
        },
        {
          question: 'Correct word order: "She goes by train to Amsterdam"',
          options: [
            'Zij gaat met de trein naar Amsterdam',
            'Zij gaat naar Amsterdam met de trein',
            'Met de trein zij gaat naar Amsterdam',
            'Naar Amsterdam gaat zij met de trein'
          ],
          correct: 'Zij gaat met de trein naar Amsterdam',
          explanation: 'Time-Manner-Place rule: Manner (by train) comes before Place (Amsterdam).',
          difficulty: 'medium'
        },
        {
          question: 'Correct word order: "Today I don\'t work"',
          options: [
            'Vandaag werk ik niet',
            'Vandaag ik werk niet',
            'Ik werk vandaag niet',
            'Ik werk niet vandaag'
          ],
          correct: 'Vandaag werk ik niet',
          explanation: 'Starting with time word requires inversion: Vandaag + VERB + subject.',
          difficulty: 'medium'
        },
        {
          question: 'Correct word order: "I can swim well"',
          options: [
            'Ik kan goed zwemmen',
            'Ik zwemmen kan goed',
            'Ik kan zwemmen goed',
            'Goed kan ik zwemmen'
          ],
          correct: 'Ik kan goed zwemmen',
          explanation: 'Modal verb in position 2, adverb before infinitive at the end.',
          difficulty: 'hard'
        },
        {
          question: 'Correct word order: "In Amsterdam live I"',
          options: [
            'In Amsterdam woon ik',
            'In Amsterdam ik woon',
            'Ik woon in Amsterdam',
            'Woon ik in Amsterdam'
          ],
          correct: 'In Amsterdam woon ik',
          explanation: 'Starting with place requires inversion. Both this and "Ik woon in Amsterdam" are correct, but this emphasizes location.',
          difficulty: 'medium'
        },
        {
          question: 'What position must the conjugated verb occupy in main clauses?',
          options: ['Position 2', 'Position 1', 'The end', 'After the subject'],
          correct: 'Position 2',
          explanation: 'The V2 rule: conjugated verb always in position 2 in main clauses!',
          difficulty: 'easy'
        },
        {
          question: 'In "Ik ga morgen met de bus naar Amsterdam", what is the correct order?',
          options: ['Time - Manner - Place', 'Manner - Time - Place', 'Place - Time - Manner', 'Place - Manner - Time'],
          correct: 'Time - Manner - Place',
          explanation: 'TMP rule: morgen (TIME) - met de bus (MANNER) - naar Amsterdam (PLACE)',
          difficulty: 'medium'
        },
        {
          question: 'Where does the verb go in: "Ik weet dat hij morgen komt"?',
          options: ['At the end', 'In position 2', 'After dat', 'Before morgen'],
          correct: 'At the end',
          explanation: 'In subordinate clauses, the verb moves to the END of the clause.',
          difficulty: 'medium'
        },
        {
          question: 'Correct: "I want tomorrow early to get up" (opstaan)',
          options: ['Ik wil morgen vroeg opstaan', 'Ik wil opstaan morgen vroeg', 'Morgen wil ik opstaan vroeg', 'Ik opstaan wil morgen vroeg'],
          correct: 'Ik wil morgen vroeg opstaan',
          explanation: 'Modal in position 2, time and adverb in middle field, infinitive (opstaan together) at end.',
          difficulty: 'hard'
        },
        {
          question: 'Which element can be in position 1 to trigger inversion?',
          options: ['All of these', 'Time word', 'Place phrase', 'Object'],
          correct: 'All of these',
          explanation: 'Any element can be in position 1, which triggers verb-subject inversion.',
          difficulty: 'medium'
        },
        {
          question: 'Correct word order: "Because I am sick, stay I home"',
          options: ['Omdat ik ziek ben, blijf ik thuis', 'Omdat ben ik ziek, blijf ik thuis', 'Omdat ik ben ziek, ik blijf thuis', 'Omdat ik ziek ben, ik blijf thuis'],
          correct: 'Omdat ik ziek ben, blijf ik thuis',
          explanation: 'Subordinate clause: verb at end (ben). Main clause after comma: normal V2 (blijf in position 2).',
          difficulty: 'hard'
        },
        {
          question: 'Where does "niet" go in: "I can not swim"?',
          options: ['Ik kan niet zwemmen', 'Ik niet kan zwemmen', 'Ik kan zwemmen niet', 'Niet ik kan zwemmen'],
          correct: 'Ik kan niet zwemmen',
          explanation: '"Niet" goes before the infinitive at the end.',
          difficulty: 'medium'
        },
        {
          question: 'Correct: "Tomorrow stand I at 7 o\'clock up" (opstaan)',
          options: ['Morgen sta ik om 7 uur op', 'Morgen ik sta om 7 uur op', 'Morgen sta op ik om 7 uur', 'Morgen opstaan ik om 7 uur'],
          correct: 'Morgen sta ik om 7 uur op',
          explanation: 'Time first triggers inversion, "sta" in position 2, "op" at the end.',
          difficulty: 'hard'
        },
        {
          question: 'In subordinate clauses with separable verbs, does the verb split?',
          options: ['No, it stays together', 'Yes, it splits', 'Sometimes', 'Only with modals'],
          correct: 'No, it stays together',
          explanation: 'In subordinate clauses, separable verbs stay together at the end: "dat ik om 7 uur opstaa".',
          difficulty: 'medium'
        },
        {
          question: 'Correct: "That book find I interesting"',
          options: ['Dat boek vind ik interessant', 'Dat boek ik vind interessant', 'Dat vind boek ik interessant', 'Ik vind dat boek interessant'],
          correct: 'Dat boek vind ik interessant',
          explanation: 'Object in position 1 triggers inversion. "Ik vind dat boek interessant" is also correct but emphasizes differently.',
          difficulty: 'hard'
        },
        {
          question: 'What is the TMP rule?',
          options: ['Time - Manner - Place', 'Time - Method - Place', 'Today - Maybe - Perhaps', 'Time - Movement - Position'],
          correct: 'Time - Manner - Place',
          explanation: 'TMP stands for Time - Manner - Place, the fixed order for adverbial phrases.',
          difficulty: 'easy'
        }
      ],

      practiceExercises: [
        {
          instruction: 'Reorder these words into a correct sentence',
          scrambled: ['morgen', 'ik', 'ga', 'naar', 'school'],
          correct: 'Morgen ga ik naar school',
          explanation: 'Time first (Morgen), then verb (ga), then subject (ik), then place (naar school)',
          type: 'word-order'
        },
        {
          instruction: 'Add the verb in the correct position',
          sentence: 'Ik ___ een boek (lezen - read)',
          answer: 'Ik lees een boek',
          explanation: 'Verb goes in position 2 after the subject',
          type: 'fill-in'
        },
        {
          instruction: 'Make this inverted (start with "Vandaag")',
          original: 'Ik werk hard',
          answer: 'Vandaag werk ik hard',
          explanation: 'Time word first, verb in position 2, subject after verb',
          type: 'transformation'
        },
        {
          instruction: 'Complete the subordinate clause',
          sentence: 'Ik weet dat hij morgen ___ (komen)',
          answer: 'Ik weet dat hij morgen komt',
          explanation: 'In subordinate clauses, verb goes to the end',
          type: 'subordinate'
        },
        {
          instruction: 'Separate the verb correctly',
          infinitive: 'opstaan (to get up)',
          sentence: 'Ik ___ om 7 uur ___ (opstaan)',
          answer: 'Ik sta om 7 uur op',
          explanation: 'Conjugated part in position 2, prefix at the end',
          type: 'separable'
        },
        {
          instruction: 'Add TMP elements in correct order',
          base: 'Ik ga',
          elements: ['morgen (time)', 'met de trein (manner)', 'naar Amsterdam (place)'],
          answer: 'Ik ga morgen met de trein naar Amsterdam',
          explanation: 'Time - Manner - Place order must be followed',
          type: 'tmp'
        }
      ],

      commonMistakes: [
        {
          mistake: 'Morgen ik ga naar school',
          correct: 'Morgen ga ik naar school',
          explanation: 'When starting with time/place/object, you MUST invert verb and subject',
          category: 'inversion'
        },
        {
          mistake: 'Ik ga naar Amsterdam met de trein',
          correct: 'Ik ga met de trein naar Amsterdam',
          explanation: 'Manner (how) must come before Place (where) - TMP rule',
          category: 'tmp-order'
        },
        {
          mistake: 'Ik weet dat komt hij morgen',
          correct: 'Ik weet dat hij morgen komt',
          explanation: 'In subordinate clauses, verb goes to the END, not position 2',
          category: 'subordinate'
        },
        {
          mistake: 'Ik opstaan om 7 uur',
          correct: 'Ik sta om 7 uur op',
          explanation: 'Separable verbs must split in main clauses',
          category: 'separable'
        },
        {
          mistake: 'Werkt jij morgen?',
          correct: 'Werk jij morgen?',
          explanation: 'With "jij" in questions, the -t disappears',
          category: 'questions'
        },
        {
          mistake: 'Ik heb een boek niet gekocht',
          correct: 'Ik heb geen boek gekocht',
          explanation: 'Use "geen" instead of "niet een" with indefinite articles',
          category: 'negation'
        },
        {
          mistake: 'Hij kan zwemmen goed',
          correct: 'Hij kan goed zwemmen',
          explanation: 'Adverbs come before the infinitive at the end',
          category: 'modal-verbs'
        },
        {
          mistake: 'Omdat ik ziek ben, ik blijf thuis',
          correct: 'Omdat ik ziek ben, blijf ik thuis',
          explanation: 'After subordinate clause, main clause still needs V2 (verb in position 2)',
          category: 'complex'
        }
      ],

      mnemonics: [
        {
          concept: 'V2 Rule',
          mnemonic: 'Think "2 is for Verb" - no matter what comes first, the verb parks in spot #2',
          example: 'Ik werk / Morgen werk ik / Hier werk ik'
        },
        {
          concept: 'TMP Order',
          mnemonic: 'Think "Time to Meet at a Place" or "Time, Method, Place"',
          example: 'morgen (T) - met de trein (M) - naar Amsterdam (P)'
        },
        {
          concept: 'Subordinate Clauses',
          mnemonic: 'Subordinate = SUBMIT to the end. The verb submits and goes to the end.',
          example: 'Ik weet dat hij komt (comes at end)'
        },
        {
          concept: 'Separable Verbs',
          mnemonic: 'Main clauses = SPLIT. Subordinate = STICK TOGETHER',
          example: 'Ik sta op / dat ik opsta'
        },
        {
          concept: 'Inversion',
          mnemonic: 'If it\'s not the subject in position 1, FLIP the verb and subject',
          example: 'Morgen [flip] ga ik'
        }
      ]
    }
  },
  
  commonmistakes: {
    id: 'commonmistakes',
    title: 'Common Mistakes',
    icon: '⚠️',
    level: 'A1',
    difficulty: 'beginner',
    estimatedTime: '25 minutes',
    description: 'Avoid common errors that Dutch learners make',
    tags: ['errors', 'tips', 'false friends', 'pronunciation'],
    content: {
      explanation: `Learn to avoid the most common mistakes made by Dutch learners. These errors are natural - even advanced learners make them!

**Top Common Mistakes:**

1. **Mixing up "de" and "het"**
   ❌ "Het man" → ✅ "De man"
   ❌ "De kind" → ✅ "Het kind"
   💡 Always learn nouns with their article!

2. **Wrong word order after time words**
   ❌ "Morgen ik ga" → ✅ "Morgen ga ik"
   ❌ "Vandaag ik eet" → ✅ "Vandaag eet ik"
   💡 Remember: inversion is mandatory!

3. **Forgetting verb-subject inversion**
   ❌ "Hier ik woon" → ✅ "Hier woon ik"
   ❌ "Gisteren ik was" → ✅ "Gisteren was ik"

4. **Using "zijn" instead of "hebben" (or vice versa)**
   ❌ "Ik ben honger" → ✅ "Ik heb honger" (I am hungry)
   ❌ "Ik heb ziek" → ✅ "Ik ben ziek" (I am sick)
   ❌ "Ik ben 20 jaar" → ✅ "Ik ben 20 jaar oud" or "Ik ben 20"
   💡 Use "hebben" for: hunger, thirst, cold, warm, right, wrong

5. **False friends (words that look similar but mean different things)**
   - "Eventueel" ≠ Eventually (it means "possibly/perhaps")
   - "Sympathiek" ≠ Sympathetic (it means "nice/likeable")
   - "Actueel" ≠ Actual (it means "current/topical")
   - "Bekomen" ≠ Become (it means "to recover from")
   - "Gymnasium" ≠ Gym (it means "academic high school")

6. **Separable verbs - forgetting to separate**
   ❌ "Ik opstaan om 7 uur" → ✅ "Ik sta om 7 uur op"
   ❌ "Hij terugkomt morgen" → ✅ "Hij komt morgen terug"
   ❌ "Zij uitnodigt vrienden" → ✅ "Zij nodigt vrienden uit"

7. **Double negatives (unlike English, they're wrong in Dutch)**
   ❌ "Ik heb niks niet" → ✅ "Ik heb niks" (I have nothing)
   ❌ "Niemand komt niet" → ✅ "Niemand komt"
   💡 One negative word is enough!

8. **Wrong pronunciation of "g" and "ch"**
   - These are guttural sounds (from the throat), not like English!
   - "goed" is not pronounced like "good"
   - Practice: "gracht", "lachen", "zeggen"

9. **Confusing "er" constructions**
   ❌ "Daar zijn 3 appels" → ✅ "Er zijn 3 appels"
   💡 Use "er" for existence, not "daar" (which means "there" as a location)

10. **Using Dutch word order in English-style yes/no questions**
    ❌ "Jij gaat naar huis?" → ✅ "Ga jij naar huis?"
    💡 Invert verb and subject in questions!`,

      falseFreinds: [
        { dutch: 'eventueel', englishLooksLike: 'eventually', actualMeaning: 'possibly, perhaps', example: 'We kunnen eventueel morgen komen' },
        { dutch: 'sympathiek', englishLooksLike: 'sympathetic', actualMeaning: 'nice, likeable', example: 'Hij is een sympathieke man' },
        { dutch: 'actueel', englishLooksLike: 'actual', actualMeaning: 'current, topical', example: 'Een actueel probleem' },
        { dutch: 'bekomen', englishLooksLike: 'become', actualMeaning: 'to recover from', example: 'Van de schrik bekomen' },
        { dutch: 'gymnasium', englishLooksLike: 'gymnasium/gym', actualMeaning: 'academic high school', example: 'Hij zit op het gymnasium' },
        { dutch: 'groot', englishLooksLike: 'great', actualMeaning: 'big, large', example: 'Een groot huis' },
        { dutch: 'slim', englishLooksLike: 'slim', actualMeaning: 'smart, clever', example: 'Een slim kind' }
      ],

      tips: [
        'Don\'t be afraid to make mistakes - they\'re part of learning!',
        'Native speakers will understand you even with articles wrong',
        'Focus on verb position - it\'s more important for understanding than articles',
        'Listen to Dutch podcasts or radio to internalize word order',
        'Practice separable verbs daily - they\'re everywhere in Dutch!',
        'Keep a "mistake journal" to track your common errors'
      ],
      
      examples: [
        { wrong: 'Het man', correct: 'De man', explanation: 'People always use "de"', category: 'articles' },
        { wrong: 'Morgen ik ga', correct: 'Morgen ga ik', explanation: 'Inversion needed after time word', category: 'word order' },
        { wrong: 'Ik ben honger', correct: 'Ik heb honger', explanation: 'Use "hebben" for hunger/thirst', category: 'zijn/hebben' },
        { wrong: 'Ik opstaan vroeg', correct: 'Ik sta vroeg op', explanation: 'Separate the prefix "op"', category: 'separable verbs' },
        { wrong: 'Ik heb niks niet', correct: 'Ik heb niks', explanation: 'No double negatives', category: 'negation' },
        { wrong: 'Hij terugkomt', correct: 'Hij komt terug', explanation: 'Separate "terug" from "komen"', category: 'separable verbs' },
        { wrong: 'De kind speelt', correct: 'Het kind speelt', explanation: '"Kind" takes "het"', category: 'articles' },
        { wrong: 'Hier ik woon', correct: 'Hier woon ik', explanation: 'Inversion after place word', category: 'word order' },
        { wrong: 'Ik ben koud', correct: 'Ik heb het koud', explanation: 'Use "hebben het" for feeling cold', category: 'zijn/hebben' },
        { wrong: 'Ga jij naar huis?', correct: 'Ga jij naar huis?', explanation: 'This is actually correct! Inversion in questions', category: 'questions' },
        { wrong: 'Daar zijn 3 appels', correct: 'Er zijn 3 appels', explanation: 'Use "er" for existence, not location', category: 'er construction' },
        { wrong: 'Ik loop altijd naar huis op', correct: 'Ik loop altijd naar huis', explanation: '"Lopen" is not separable in this context', category: 'separable verbs' }
      ],
      
      quiz: [
        {
          question: 'Which is CORRECT?',
          options: [
            'De man eet',
            'Het man eet',
            'Man eet',
            'Een man eten'
          ],
          correct: 'De man eet',
          explanation: 'People always use "de", and singular verb is "eet".',
          difficulty: 'easy'
        },
        {
          question: 'Which is CORRECT?',
          options: [
            'Morgen ga ik naar school',
            'Morgen ik ga naar school',
            'Ik ga morgen school',
            'Morgen naar school ik ga'
          ],
          correct: 'Morgen ga ik naar school',
          explanation: 'After time word, use inversion: verb before subject.',
          difficulty: 'easy'
        },
        {
          question: 'How do you say "I am hungry" correctly?',
          options: [
            'Ik heb honger',
            'Ik ben honger',
            'Ik heb hongeren',
            'Ik ben hongeren'
          ],
          correct: 'Ik heb honger',
          explanation: 'Use "hebben" (not "zijn") for hunger, thirst, and similar states.',
          difficulty: 'easy'
        },
        {
          question: 'Which is CORRECT for "I get up early"?',
          options: [
            'Ik sta vroeg op',
            'Ik opstaan vroeg',
            'Ik sta op vroeg',
            'Ik vroeg sta op'
          ],
          correct: 'Ik sta vroeg op',
          explanation: 'Separable verb: "sta" conjugated in position 2, "op" goes to the end.',
          difficulty: 'medium'
        },
        {
          question: 'Which is CORRECT?',
          options: [
            'Both Het kind and Een kind',
            'Het kind',
            'De kind',
            'Een kind'
          ],
          correct: 'Both Het kind and Een kind',
          explanation: '"Het kind" (the child) or "Een kind" (a child) - "kind" takes "het".',
          difficulty: 'easy'
        },
        {
          question: 'How do you say "I have nothing" correctly?',
          options: [
            'Ik heb niks',
            'Ik heb niks niet',
            'Ik heb niet niks',
            'Ik niet heb niks'
          ],
          correct: 'Ik heb niks',
          explanation: 'No double negatives in Dutch. "Niks" alone is sufficient.',
          difficulty: 'medium'
        },
        {
          question: 'Which is CORRECT for "He comes back tomorrow"?',
          options: [
            'Hij komt morgen terug',
            'Hij terugkomt morgen',
            'Hij komt terug morgen',
            'Morgen hij terugkomt'
          ],
          correct: 'Hij komt morgen terug',
          explanation: 'Separable verb + time word goes between verb and prefix.',
          difficulty: 'medium'
        },
        {
          question: 'What does "eventueel" actually mean?',
          options: [
            'Possibly/perhaps',
            'Eventually',
            'Eventful',
            'Always'
          ],
          correct: 'Possibly/perhaps',
          explanation: 'False friend! "Eventueel" means "possibly" not "eventually" (which is "uiteindelijk").',
          difficulty: 'hard'
        },
        {
          question: 'How do you say "There are three apples"?',
          options: [
            'Er zijn drie appels',
            'Daar zijn drie appels',
            'Het zijn drie appels',
            'Die zijn drie appels'
          ],
          correct: 'Er zijn drie appels',
          explanation: 'Use "er" for existence/quantity, not "daar" (which means "there" as location).',
          difficulty: 'medium'
        },
        {
          question: 'Which is CORRECT for "I am cold" (feeling cold)?',
          options: [
            'Ik heb het koud',
            'Ik ben koud',
            'Ik heb koud',
            'Ik ben het koud'
          ],
          correct: 'Ik heb het koud',
          explanation: 'Use "hebben het" for feeling cold/warm. "Ik ben koud" means "I am cold" (personality/temperature of object).',
          difficulty: 'hard'
        }
      ]
    }
  },

  presenttense: {
    id: 'presenttense',
    title: 'Present Tense',
    icon: '⏰',
    level: 'A1',
    difficulty: 'beginner',
    estimatedTime: '25 minutes',
    description: 'Learn how to conjugate verbs in the present tense',
    tags: ['verbs', 'conjugation', 'tenses', 'present'],
    content: {
      explanation: `The Dutch present tense is relatively straightforward. Once you learn the pattern, you can conjugate most regular verbs.

**Regular Verb Conjugation:**

Take the infinitive (e.g., "werken" - to work):
1. Remove -en → "werk"
2. This is your stem

**Conjugation Pattern:**
- ik werk (I work)
- jij/je werkt (you work - informal)
- u werkt (you work - formal)
- hij/zij/het werkt (he/she/it works)
- wij/we werken (we work)
- jullie werken (you work - plural)
- zij/ze werken (they work)

**Important Rules:**

1. **Spelling Changes:**
   - Short vowel: double consonant before -en → single in stem
     * "zitten" → ik zit (not "zitt")
   - Long vowel: double vowel → single when adding -t
     * "maken" → jij maakt (not "maaakt")

2. **Inversion (questions):**
   - "Jij werkt" → "Werk jij?" (Do you work?)
   - The -t disappears after inversion with "jij"!
   - "Werk jij?" (not "Werkt jij?")

3. **Stem ending in -t:**
   - "zitten" → ik zit, jij zit (not "zitt")
   - Don't double the -t

4. **Irregular Verbs:**
   Some common verbs are irregular:
   - zijn (to be): ik ben, jij bent, hij is, wij zijn
   - hebben (to have): ik heb, jij hebt, hij heeft, wij hebben
   - gaan (to go): ik ga, jij gaat, hij gaat, wij gaan
   - doen (to do): ik doe, jij doet, hij doet, wij doen
   - kunnen (can): ik kan, jij kunt/kan, hij kan, wij kunnen
   - willen (to want): ik wil, jij wilt/wil, hij wil, wij willen
   - moeten (must): ik moet, jij moet, hij moet, wij moeten
   - mogen (may): ik mag, jij mag, hij mag, wij mogen`,

      conjugationTables: [
        {
          verb: 'werken (to work)',
          type: 'regular',
          conjugations: {
            'ik': 'werk',
            'jij/je': 'werkt',
            'u': 'werkt',
            'hij/zij/het': 'werkt',
            'wij/we': 'werken',
            'jullie': 'werken',
            'zij/ze': 'werken'
          }
        },
        {
          verb: 'zijn (to be)',
          type: 'irregular',
          conjugations: {
            'ik': 'ben',
            'jij/je': 'bent',
            'u': 'bent',
            'hij/zij/het': 'is',
            'wij/we': 'zijn',// Continue from where the file left off - adding more complete lessons

            'jullie': 'zijn',
            'zij/ze': 'zijn'
          }
        },
        {
          verb: 'hebben (to have)',
          type: 'irregular',
          conjugations: {
            'ik': 'heb',
            'jij/je': 'hebt',
            'u': 'hebt/heeft',
            'hij/zij/het': 'heeft',
            'wij/we': 'hebben',
            'jullie': 'hebben',
            'zij/ze': 'hebben'
          }
        },
        {
          verb: 'gaan (to go)',
          type: 'irregular',
          conjugations: {
            'ik': 'ga',
            'jij/je': 'gaat',
            'u': 'gaat',
            'hij/zij/het': 'gaat',
            'wij/we': 'gaan',
            'jullie': 'gaan',
            'zij/ze': 'gaan'
          }
        }
      ],

      tips: [
        'Always memorize verbs with their conjugation pattern',
        'Practice the irregular verbs daily - they\'re used constantly',
        'Remember: -t disappears in questions with "jij"',
        'Listen for patterns when native speakers talk',
        'Start with the most common verbs: zijn, hebben, gaan, doen'
      ],

      examples: [
        { dutch: 'Ik werk elke dag', english: 'I work every day', verb: 'werken', type: 'regular' },
        { dutch: 'Jij werkt hard', english: 'You work hard', verb: 'werken', type: 'regular' },
        { dutch: 'Werk jij morgen?', english: 'Do you work tomorrow?', verb: 'werken', type: 'inversion' },
        { dutch: 'Hij is leraar', english: 'He is a teacher', verb: 'zijn', type: 'irregular' },
        { dutch: 'Wij hebben een huis', english: 'We have a house', verb: 'hebben', type: 'irregular' },
        { dutch: 'Zij gaan naar school', english: 'They go to school', verb: 'gaan', type: 'irregular' },
        { dutch: 'Ik zit op de stoel', english: 'I sit on the chair', verb: 'zitten', type: 'spelling' },
        { dutch: 'Jij maakt het eten', english: 'You make the food', verb: 'maken', type: 'spelling' }
      ],

      quiz: [
        {
          question: 'Conjugate "werken" for "ik"',
          options: ['werk', 'werkt', 'werken', 'gewerkt'],
          correct: 'werk',
          explanation: 'Remove -en to get the stem: werk',
          difficulty: 'easy'
        },
        {
          question: 'Conjugate "werken" for "jij"',
          options: ['werkt', 'werk', 'werken', 'gewerkt'],
          correct: 'werkt',
          explanation: 'Add -t to the stem for jij/je: werkt',
          difficulty: 'easy'
        },
        {
          question: 'How do you ask "Do you work?" (informal)',
          options: ['Werk jij?', 'Werkt jij?', 'Jij werkt?', 'Jij werk?'],
          correct: 'Werk jij?',
          explanation: 'In questions with jij, the -t disappears: Werk jij?',
          difficulty: 'medium'
        },
        {
          question: 'Conjugate "zijn" for "hij"',
          options: ['is', 'ben', 'bent', 'zijn'],
          correct: 'is',
          explanation: 'Irregular verb: hij is',
          difficulty: 'easy'
        },
        {
          question: 'Conjugate "hebben" for "wij"',
          options: ['hebben', 'hebt', 'heeft', 'heb'],
          correct: 'hebben',
          explanation: 'Plural forms use the infinitive: wij hebben',
          difficulty: 'easy'
        },
        {
          question: 'Conjugate "zitten" for "ik"',
          options: ['zit', 'zitt', 'zitten', 'zitte'],
          correct: 'zit',
          explanation: 'Double consonant becomes single in stem: zit',
          difficulty: 'medium'
        },
        {
          question: 'Conjugate "maken" for "jij"',
          options: ['maakt', 'maaakt', 'maken', 'maak'],
          correct: 'maakt',
          explanation: 'Stem is maak, add -t: maakt (not three a\'s)',
          difficulty: 'medium'
        },
        {
          question: 'Which is correct?',
          options: ['Wij werken', 'Wij werkt', 'Wij werk', 'Wij gewerken'],
          correct: 'Wij werken',
          explanation: 'Plural pronouns (wij, jullie, zij) use the infinitive form',
          difficulty: 'easy'
        }
      ]
    }
  },

  perfecttense: {
    id: 'perfecttense',
    title: 'Perfect Tense',
    icon: '⏮️',
    level: 'A2',
    difficulty: 'intermediate',
    estimatedTime: '35 minutes',
    description: 'Learn the past perfect tense with hebben and zijn',
    tags: ['verbs', 'past tense', 'perfect', 'hebben', 'zijn'],
    content: {
      explanation: `The perfect tense (voltooid tegenwoordige tijd) is used to talk about completed actions in the past. It's similar to English "have done" or "has gone".

**Formation:**
hebben/zijn + past participle

**Past Participle Formation:**

1. **Regular verbs:**
   ge- + stem + -t (for soft verbs)
   ge- + stem + -d (for hard verbs)
   
   Examples:
   - werken → gewerkt (worked)
   - maken → gemaakt (made)
   - leven → geleefd (lived)

2. **Irregular verbs:**
   - Must be memorized
   - Often have vowel changes
   - Examples: lopen → gelopen, drinken → gedronken, zijn → geweest

3. **No ge- prefix for:**
   - Verbs starting with: be-, er-, ge-, her-, ont-, ver-
   - Examples: bezoeken → bezocht, vertellen → verteld
   - Separable verbs: insert ge- between prefix and verb
   - Example: opbellen → opgebeld

**When to use "hebben" vs "zijn":**

**Use HEBBEN (most verbs):**
- Transitive verbs (with direct object)
- Examples: Ik heb gegeten (I have eaten)

**Use ZIJN for:**
- Movement verbs: gaan (gegaan), komen (gekomen), lopen (gelopen)
- Change of state: worden (geworden), sterven (gestorven)
- blijven (gebleven) and zijn (geweest)

**Word Order:**
- Main clause: hebben/zijn in position 2, past participle at END
  * "Ik heb gisteren een boek gekocht"
- Subordinate clause: past participle stays at end
  * "Ik weet dat hij een boek gekocht heeft"`,

      auxiliaryRules: [
        { category: 'HEBBEN', rule: 'Most verbs', examples: ['eten → gegeten', 'werken → gewerkt', 'maken → gemaakt'] },
        { category: 'ZIJN', rule: 'Movement to/from', examples: ['gaan → gegaan', 'komen → gekomen', 'vliegen → gevlogen'] },
        { category: 'ZIJN', rule: 'Change of state', examples: ['worden → geworden', 'groeien → gegroeid'] },
        { category: 'ZIJN', rule: 'blijven & zijn', examples: ['blijven → gebleven', 'zijn → geweest'] }
      ],

      tips: [
        'Learn whether a verb takes hebben or zijn from the start',
        'Most verbs use hebben - only a small group uses zijn',
        'Think: "Did it move or change state?" → probably zijn',
        'Practice irregular past participles - they\'re very common',
        'Remember: past participle always goes to the end!'
      ],

      examples: [
        { dutch: 'Ik heb gewerkt', english: 'I have worked', auxiliary: 'hebben', type: 'regular' },
        { dutch: 'Hij heeft een boek gekocht', english: 'He has bought a book', auxiliary: 'hebben', type: 'irregular' },
        { dutch: 'Wij zijn naar Amsterdam gegaan', english: 'We have gone to Amsterdam', auxiliary: 'zijn', type: 'movement' },
        { dutch: 'Zij is leraar geworden', english: 'She has become a teacher', auxiliary: 'zijn', type: 'change' },
        { dutch: 'Ik heb gisteren televisie gekeken', english: 'I watched television yesterday', auxiliary: 'hebben', type: 'regular' },
        { dutch: 'Ben jij al geweest?', english: 'Have you been already?', auxiliary: 'zijn', type: 'irregular' },
        { dutch: 'Ze hebben goed geslapen', english: 'They have slept well', auxiliary: 'hebben', type: 'irregular' },
        { dutch: 'Hij is te laat gekomen', english: 'He has come too late', auxiliary: 'zijn', type: 'movement' },
        { dutch: 'Ik heb mijn moeder opgebeld', english: 'I have called my mother', auxiliary: 'hebben', type: 'separable' },
        { dutch: 'We hebben het huis bezocht', english: 'We have visited the house', auxiliary: 'hebben', type: 'no-ge' }
      ],

      quiz: [
        {
          question: 'What is the past participle of "werken"?',
          options: ['gewerkt', 'gewerken', 'werkte', 'gewerkd'],
          correct: 'gewerkt',
          explanation: 'Regular verb: ge- + werk + -t = gewerkt',
          difficulty: 'easy'
        },
        {
          question: 'Complete: "Ik ___ gegeten"',
          options: ['heb', 'ben', 'heeft', 'zijn'],
          correct: 'heb',
          explanation: 'Eten uses "hebben": Ik heb gegeten',
          difficulty: 'easy'
        },
        {
          question: 'Complete: "Wij ___ naar school gegaan"',
          options: ['zijn', 'hebben', 'bent', 'is'],
          correct: 'zijn',
          explanation: 'Gaan (movement) uses "zijn": Wij zijn gegaan',
          difficulty: 'medium'
        },
        {
          question: 'What is the past participle of "lopen"?',
          options: ['gelopen', 'geloopt', 'gelopd', 'gelopen'],
          correct: 'gelopen',
          explanation: 'Irregular verb: lopen → gelopen',
          difficulty: 'medium'
        },
        {
          question: 'Complete: "Hij ___ een boek gekocht"',
          options: ['heeft', 'heb', 'is', 'zijn'],
          correct: 'heeft',
          explanation: 'Kopen uses "hebben": Hij heeft gekocht',
          difficulty: 'easy'
        },
        {
          question: 'What is the past participle of "bezoeken"?',
          options: ['bezocht', 'gebezocht', 'bezoekt', 'gebezoeken'],
          correct: 'bezocht',
          explanation: 'Verbs starting with be- don\'t get ge-: bezocht',
          difficulty: 'hard'
        },
        {
          question: 'Complete: "Zij ___ leraar geworden"',
          options: ['is', 'heeft', 'ben', 'zijn'],
          correct: 'is',
          explanation: 'Worden (change of state) uses "zijn": Zij is geworden',
          difficulty: 'medium'
        },
        {
          question: 'What is the past participle of "opbellen" (to call)?',
          options: ['opgebeld', 'gebeld', 'opgbeeld', 'geopbeld'],
          correct: 'opgebeld',
          explanation: 'Separable verb: ge- goes between prefix and verb: opgebeld',
          difficulty: 'hard'
        }
      ]
    }
  },

  pronouns: {
    id: 'pronouns',
    title: 'Pronouns',
    icon: '👥',
    level: 'A1',
    difficulty: 'beginner',
    estimatedTime: '20 minutes',
    description: 'Learn Dutch personal, possessive, and object pronouns',
    tags: ['pronouns', 'grammar', 'personal', 'possessive'],
    content: {
      explanation: `Dutch pronouns change depending on their function in the sentence.

**Personal Pronouns (Subject):**

Singular:
- ik (I)
- jij/je (you - informal)
- u (you - formal)
- hij (he)
- zij/ze (she)
- het/'t (it)

Plural:
- wij/we (we)
- jullie (you - plural)
- zij/ze (they)

**Stressed vs Unstressed:**
- Stressed: ik, jij, wij, zij (when emphasized)
- Unstressed: je, we, ze (casual speech)
- Example: "Ik ga" vs "Ga je?" (Are you going?)

**Object Pronouns:**
- mij/me (me)
- jou/je (you)
- u (you - formal)
- hem/'m (him)
- haar/d'r (her)
- het/'t (it)
- ons (us)
- jullie (you - plural)
- hen/hun/ze (them)

**Possessive Pronouns:**
- mijn (my)
- jouw/je (your - informal)
- uw (your - formal)
- zijn (his/its)
- haar (her)
- ons/onze (our)
- jullie (your - plural)
- hun (their)

**Important Rules:**

1. **"U" is both subject and object**
   - U bent leraar (You are a teacher)
   - Ik zie u (I see you)

2. **"Ons" vs "onze"**
   - ons + het-words: ons huis (our house)
   - onze + de-words: onze auto (our car)

3. **Hen vs hun**
   - hen: object (I see them - Ik zie hen)
   - hun: indirect object (I give them - Ik geef hun)
   - In practice, many Dutch speakers use "ze" for both!`,

      pronounTables: [
        {
          type: 'Subject',
          singular: ['ik', 'jij/je', 'u', 'hij', 'zij/ze', 'het'],
          plural: ['wij/we', 'jullie', 'zij/ze']
        },
        {
          type: 'Object',
          singular: ['mij/me', 'jou/je', 'u', 'hem', 'haar', 'het'],
          plural: ['ons', 'jullie', 'hen/hun/ze']
        },
        {
          type: 'Possessive',
          singular: ['mijn', 'jouw/je', 'uw', 'zijn', 'haar', '-'],
          plural: ['ons/onze', 'jullie', 'hun']
        }
      ],

      tips: [
        'In spoken Dutch, people often use unstressed forms (je, we, ze)',
        '"U" is formal - use with strangers, elderly, or professional settings',
        'Young people usually use "jij/je" with everyone',
        'Don\'t worry about hen/hun distinction - most natives use "ze"',
        'Practice ons/onze with de/het words you already know'
      ],

      examples: [
        { dutch: 'Ik zie jou', english: 'I see you', type: 'object pronoun' },
        { dutch: 'Dat is mijn boek', english: 'That is my book', type: 'possessive' },
        { dutch: 'Wij gaan naar huis', english: 'We go home', type: 'subject pronoun' },
        { dutch: 'Ons huis is groot', english: 'Our house is big', type: 'possessive + het' },
        { dutch: 'Onze auto is rood', english: 'Our car is red', type: 'possessive + de' },
        { dutch: 'Hij geeft haar bloemen', english: 'He gives her flowers', type: 'object pronoun' },
        { dutch: 'Ga je mee?', english: 'Are you coming along?', type: 'unstressed' },
        { dutch: 'Zijn boek ligt daar', english: 'His book lies there', type: 'possessive' }
      ],

      quiz: [
        {
          question: 'Translate: "I see you" (informal)',
          options: ['Ik zie jou', 'Ik zie jij', 'Ik zie u', 'Mij zie jou'],
          correct: 'Ik zie jou',
          explanation: 'Object pronoun for "you" informal is "jou/je"',
          difficulty: 'easy'
        },
        {
          question: 'Complete: "___ boek" (my book)',
          options: ['mijn', 'mij', 'me', 'ik'],
          correct: 'mijn',
          explanation: 'Possessive pronoun for "my" is "mijn"',
          difficulty: 'easy'
        },
        {
          question: 'Complete: "___ huis" (our house - het-word)',
          options: ['ons', 'onze', 'wij', 'we'],
          correct: 'ons',
          explanation: 'Use "ons" before het-words: ons huis',
          difficulty: 'medium'
        },
        {
          question: 'Complete: "___ auto" (our car - de-word)',
          options: ['onze', 'ons', 'wij', 'we'],
          correct: 'onze',
          explanation: 'Use "onze" before de-words: onze auto',
          difficulty: 'medium'
        },
        {
          question: 'Which is the formal "you"?',
          options: ['u', 'jij', 'je', 'jullie'],
          correct: 'u',
          explanation: '"U" is the formal way to say "you" in Dutch',
          difficulty: 'easy'
        },
        {
          question: 'Complete: "Ik geef ___ bloemen" (I give her flowers)',
          options: ['haar', 'zij', 'ze', 'hem'],
          correct: 'haar',
          explanation: 'Object pronoun for "her" is "haar"',
          difficulty: 'medium'
        },
        {
          question: 'Complete: "___ boek" (his book)',
          options: ['zijn', 'hem', 'hij', 'zijne'],
          correct: 'zijn',
          explanation: 'Possessive for "his" is "zijn"',
          difficulty: 'easy'
        },
        {
          question: 'Which is correct for "Are you going?" (informal)',
          options: ['Ga je?', 'Ga jij?', 'Gaat je?', 'Both Ga je? and Ga jij?'],
          correct: 'Both Ga je? and Ga jij?',
          explanation: 'Both stressed (jij) and unstressed (je) forms are correct',
          difficulty: 'medium'
        }
      ]
    }
  },

  modaalverbs: {
    id: 'modaalverbs',
    title: 'Modal Verbs',
    icon: '🎯',
    level: 'A2',
    difficulty: 'intermediate',
    estimatedTime: '25 minutes',
    description: 'Master kunnen, willen, moeten, mogen, and zullen',
    tags: ['verbs', 'modals', 'auxiliary', 'grammar'],
    content: {
      explanation: `Modal verbs express ability, permission, necessity, or intention. They're always used with another verb in infinitive form.

**The Main Modal Verbs:**

1. **kunnen** (can, to be able to)
   - ik kan, jij kunt/kan, hij kan, wij kunnen
   - Example: "Ik kan zwemmen" (I can swim)

2. **willen** (to want)
   - ik wil, jij wilt/wil, hij wil, wij willen
   - Example: "Hij wil gaan" (He wants to go)

3. **moeten** (must, to have to)
   - ik moet, jij moet, hij moet, wij moeten
   - Example: "Wij moeten werken" (We must work)

4. **mogen** (may, to be allowed to)
   - ik mag, jij mag, hij mag, wij mogen
   - Example: "Mag ik gaan?" (May I go?)

5. **zullen** (shall, will - future)
   - ik zal, jij zult/zal, hij zal, wij zullen
   - Example: "Ik zal komen" (I will come)

**Word Order:**
- Modal verb in position 2, infinitive at the END
- "Ik kan morgen komen" (I can tomorrow come)
- "Wij willen Nederlands leren" (We want Dutch to learn)

**Negation:**
- Place "niet" before the infinitive
- "Ik kan niet zwemmen" (I cannot swim)
- "Hij wil niet gaan" (He doesn't want to go)

**In subordinate clauses:**
- Both verbs go to the end, infinitive before modal
- "Ik weet dat ik morgen kan komen" (I know that I tomorrow can come)`,

      conjugationTables: [
        {
          verb: 'kunnen (can)',
          conjugations: {
            'ik': 'kan',
            'jij': 'kunt/kan',
            'hij': 'kan',
            'wij': 'kunnen',
            'jullie': 'kunnen',
            'zij': 'kunnen'
          }
        },
        {
          verb: 'willen (want)',
          conjugations: {
            'ik': 'wil',
            'jij': 'wilt/wil',
            'hij': 'wil',
            'wij': 'willen',
            'jullie': 'willen',
            'zij': 'willen'
          }
        },
        {
          verb: 'moeten (must)',
          conjugations: {
            'ik': 'moet',
            'jij': 'moet',
            'hij': 'moet',
            'wij': 'moeten',
            'jullie': 'moeten',
            'zij': 'moeten'
          }
        },
        {
          verb: 'mogen (may)',
          conjugations: {
            'ik': 'mag',
            'jij': 'mag',
            'hij': 'mag',
            'wij': 'mogen',
            'jullie': 'mogen',
            'zij': 'mogen'
          }
        }
      ],

      tips: [
        'Modal verbs are irregular - memorize their conjugations',
        'The infinitive ALWAYS goes to the end',
        'In spoken Dutch, "kan" is more common than "kunt" for "jij"',
        'Don\'t forget: modal in position 2, infinitive at the end!',
        'Practice with common combinations: kan zwemmen, wil gaan, moet werken'
      ],

      examples: [
        { dutch: 'Ik kan zwemmen', english: 'I can swim', modal: 'kunnen', type: 'ability' },
        { dutch: 'Hij wil gaan', english: 'He wants to go', modal: 'willen', type: 'desire' },
        { dutch: 'Wij moeten werken', english: 'We must work', modal: 'moeten', type: 'necessity' },
        { dutch: 'Mag ik binnenkomen?', english: 'May I come in?', modal: 'mogen', type: 'permission' },
        { dutch: 'Ik zal morgen komen', english: 'I will come tomorrow', modal: 'zullen', type: 'future' },
        { dutch: 'Kun jij Nederlands spreken?', english: 'Can you speak Dutch?', modal: 'kunnen', type: 'question' },
        { dutch: 'Ze willen niet gaan', english: 'They don\'t want to go', modal: 'willen', type: 'negation' },
        { dutch: 'Jullie mogen hier zitten', english: 'You may sit here', modal: 'mogen', type: 'permission' }
      ],

      quiz: [
        {
          question: 'Complete: "Ik ___ zwemmen" (I can swim)',
          options: ['kan', 'kunnen', 'kunt', 'kans'],
          correct: 'kan',
          explanation: 'Kunnen for "ik" is "kan"',
          difficulty: 'easy'
        },
        {
          question: 'Complete: "Hij ___ gaan" (He wants to go)',
          options: ['wil', 'willen', 'wilt', 'wille'],
          correct: 'wil',
          explanation: 'Willen for "hij" is "wil"',
          difficulty: 'easy'
        },
        {
          question: 'Where does the infinitive go? "I can tomorrow come"',
          options: ['Ik kan morgen komen', 'Ik komen kan morgen', 'Ik morgen kan komen', 'Kan ik morgen komen'],
          correct: 'Ik kan morgen komen',
          explanation: 'Modal in position 2, infinitive at the END',
          difficulty: 'medium'
        },
        {
          question: 'Complete: "Wij ___ werken" (We must work)',
          options: ['moeten', 'moet', 'moette', 'moetens'],
          correct: 'moeten',
          explanation: 'Moeten for "wij" is "moeten" (plural)',
          difficulty: 'easy'
        },
        {
          question: 'Complete: "___ ik gaan?" (May I go?)',
          options: ['Mag', 'Mogen', 'Mag ik', 'Mog'],
          correct: 'Mag',
          explanation: 'Question form: Mag ik gaan?',
          difficulty: 'medium'
        },
        {
          question: 'Negate: "Ik kan zwemmen" → "I cannot swim"',
          options: ['Ik kan niet zwemmen', 'Ik niet kan zwemmen', 'Ik kan zwemmen niet', 'Niet ik kan zwemmen'],
          correct: 'Ik kan niet zwemmen',
          explanation: '"Niet" goes before the infinitive',
          difficulty: 'medium'
        },
        {
          question: 'Complete: "Ik ___ morgen komen" (I will come tomorrow)',
          options: ['zal', 'zullen', 'zult', 'zallen'],
          correct: 'zal',
          explanation: 'Zullen for "ik" is "zal" (future tense)',
          difficulty: 'medium'
        },
        {
          question: 'In "Ik weet dat ik morgen kan komen", where is "komen"?',
          options: ['At the end', 'After dat', 'After morgen', 'Before kan'],
          correct: 'At the end',
          explanation: 'In subordinate clauses, infinitive still goes to the end',
          difficulty: 'hard'
        }
      ]
    }
  },

  questions: {
    id: 'questions',
    title: 'Questions',
    icon: '❓',
    level: 'A1',
    difficulty: 'beginner',
    estimatedTime: '20 minutes',
    description: 'Learn how to form questions in Dutch',
    tags: ['questions', 'interrogatives', 'word order', 'grammar'],
    content: {
      explanation: `Dutch has two main types of questions: yes/no questions and question word (wh-) questions.

**Yes/No Questions:**
- Invert subject and verb
- Statement: "Jij gaat naar huis" (You go home)
- Question: "Ga jij naar huis?" (Do you go home?)
- Note: With "jij" the -t disappears!
  * "Jij werkt" → "Werk jij?" (not "Werkt jij?")

**Question Words (Vraagwoorden):**

Basic question words:
- **wie** (who) - Wie is dat? (Who is that?)
- **wat** (what) - Wat doe je? (What are you doing?)
- **waar** (where) - Waar woon je? (Where do you live?)
- **wanneer** (when) - Wanneer kom je? (When are you coming?)
- **waarom** (why) - Waarom ga je? (Why are you going?)
- **hoe** (how) - Hoe heet je? (What's your name?)
- **welke/welk** (which) - Welk boek? (Which book?)
- **hoeveel** (how much/many) - Hoeveel kost het? (How much does it cost?)

**Word Order with Question Words:**
- Question word + verb + subject + rest
- "Waar woon jij?" (Where live you?)
- "Wanneer ga je naar huis?" (When go you to home?)

**Common Question Patterns:**
- Hoe heet je? (What's your name?)
- Waar kom je vandaan? (Where are you from?)
- Hoe oud ben je? (How old are you?)
- Wat doe je? (What do you do?)`,

      questionWords: [
        { dutch: 'wie', english: 'who', example: 'Wie is dat?', translation: 'Who is that?' },
        { dutch: 'wat', english: 'what', example: 'Wat doe je?', translation: 'What are you doing?' },
        { dutch: 'waar', english: 'where', example: 'Waar woon je?', translation: 'Where do you live?' },
        { dutch: 'wanneer', english: 'when', example: 'Wanneer kom je?', translation: 'When are you coming?' },
        { dutch: 'waarom', english: 'why', example: 'Waarom niet?', translation: 'Why not?' },
        { dutch: 'hoe', english: 'how', example: 'Hoe gaat het?', translation: 'How are you?' },
        { dutch: 'welke/welk', english: 'which', example: 'Welk boek?', translation: 'Which book?' },
        { dutch: 'hoeveel', english: 'how much/many', example: 'Hoeveel kost het?', translation: 'How much does it cost?' }
      ],

      tips: [
        'Remember: verb-subject inversion in all questions',
        'The -t disappears with "jij" in yes/no questions',
        'Question words always come first in the sentence',
        'Practice common questions until they become automatic',
        'Listen to how Dutch speakers form questions naturally'
      ],

      examples: [
        { dutch: 'Ga jij naar huis?', english: 'Are you going home?', type: 'yes/no', rule: 'Inversion' },
        { dutch: 'Werk jij morgen?', english: 'Do you work tomorrow?', type: 'yes/no', rule: 'No -t with jij' },
        { dutch: 'Wie is dat?', english: 'Who is that?', type: 'wh-question', word: 'wie' },
        { dutch: 'Wat doe je?', english: 'What are you doing?', type: 'wh-question', word: 'wat' },
        { dutch: 'Waar woon je?', english: 'Where do you live?', type: 'wh-question', word: 'waar' },
        { dutch: 'Wanneer kom je?', english: 'When are you coming?', type: 'wh-question', word: 'wanneer' },
        { dutch: 'Waarom ga je?', english: 'Why are you going?', type: 'wh-question', word: 'waarom' },
        { dutch: 'Hoe heet je?', english: 'What is your name?', type: 'common phrase', word: 'hoe' },
        { dutch: 'Hoeveel kost het?', english: 'How much does it cost?', type: 'wh-question', word: 'hoeveel' }
      ],

      quiz: [
        {
          question: 'Turn into a question: "Jij gaat naar school"',
          options: ['Ga jij naar school?', 'Gaat jij naar school?', 'Jij ga naar school?', 'Jij gaat naar school?'],
          correct: 'Ga jij naar school?',
          explanation: 'Invert verb and subject, -t disappears with jij',
          difficulty: 'easy'
        },
        {
          question: 'Which question word means "who"?',
          options: ['wie', 'wat', 'waar', 'wanneer'],
          correct: 'wie',
          explanation: '"Wie" means "who" in Dutch',
          difficulty: 'easy'
        },
        {
          question: 'How do you ask "Where do you live?"',
          options: ['Waar woon je?', 'Waar je woon?', 'Woon waar je?', 'Je woon waar?'],
          correct: 'Waar woon je?',
          explanation: 'Question word + verb + subject: Waar woon je?',
          difficulty: 'medium'
        },
        {
          question: 'What does "Hoe heet je?" mean?',
          options: ['What is your name?', 'How are you?', 'How old are you?', 'What do you do?'],
          correct: 'What is your name?',
          explanation: '"Hoe heet je?" is the standard way to ask someone\'s name',
          difficulty: 'easy'
        },
        {
          question: 'Which is correct: "Do you work?" (informal)',
          options: ['Werk jij?', 'Werkt jij?', 'Jij werk?', 'Jij werkt?'],
          correct: 'Werk jij?',
          explanation: 'Inversion with jij: the -t disappears',
          difficulty: 'medium'
        },
        {
          question: 'How do you ask "Why not?"',
          options: ['Waarom niet?', 'Niet waarom?', 'Waarom geen?', 'Hoe niet?'],
          correct: 'Waarom niet?',
          explanation: '"Waarom niet?" means "Why not?"',
          difficulty: 'easy'
        },
        {
          question: 'Complete: "___ kom je?" (When are you coming?)',
          options: ['Wanneer', 'Waar', 'Wie', 'Wat'],
          correct: 'Wanneer',
          explanation: '"Wanneer" means "when"',
          difficulty: 'easy'
        },
        {
          question: 'How do you ask "How much does it cost?"',
          options: ['Hoeveel kost het?', 'Hoe kost het?', 'Wat kost hoeveel?', 'Kost het hoeveel?'],
          correct: 'Hoeveel kost het?',
          explanation: '"Hoeveel kost het?" is the correct structure',
          difficulty: 'medium'
        }
      ]
    }
  },

  adjectives: {
    id: 'adjectives',
    title: 'Adjectives',
    icon: '🎨',
    level: 'A2',
    difficulty: 'intermediate',
    estimatedTime: '25 minutes',
    description: 'Learn how to use and inflect Dutch adjectives',
    tags: ['adjectives', 'grammar', 'inflection', 'agreement'],
    content: {
      explanation: `Dutch adjectives change form depending on the noun they describe. This is called "inflection".

**Basic Rule:**
- Add -e to the adjective when it comes BEFORE a noun
- Exception: no -e with het-words + indefinite article (een)

**The Rules in Detail:**

1. **With "de" words:**
   - Always add -e
   - de grote man (the big man)
   - een grote man (a big man)

2. **With "het" words:**
   - Add -e with "het" (definite): het grote huis (the big house)
   - NO -e with "een" (indefinite): een groot huis (a big house)
   - Add -e with "deze/die": dit grote huis (this big house)

3. **After the noun (predicative):**
   - Never add -e
   - De man is groot (The man is big)
   - Het huis is groot (The house is big)

**Spelling Changes:**

When adding -e:
- Final consonant doubles after short vowel: wit → witte (white)
- Drop one vowel if there are two: groot → grote (big)
- f → v: lief → lieve (sweet)
- s → z: boos → boze (angry)

**Irregular Adjectives:**
Some adjectives never get -e:
- Material adjectives: gouden ring (golden ring)
- Colors in fixed expressions: een oranje shirt
- Some others must be memorized

**Comparatives and Superlatives:**
- Comparative: add -er (groot → groter)
- Superlative: add -st (groot → grootst)
- Irregular: goed → beter → best`,

      inflectionRules: [
        { situation: 'de + adjective + noun', rule: 'Always -e', example: 'de grote man' },
        { situation: 'een + adjective + de-noun', rule: 'Always -e', example: 'een grote man' },
        { situation: 'het + adjective + noun', rule: 'Add -e', example: 'het grote huis' },
        { situation: 'een + adjective + het-noun', rule: 'NO -e', example: 'een groot huis' },
        { situation: 'After noun (predicative)', rule: 'NO -e', example: 'Het huis is groot' }
      ],

      tips: [
        'The most important rule: een + het-word = NO -e',
        'If you forget the rules, adding -e is usually safer',
        'Adjectives after the noun NEVER get -e',
        'Practice with nouns you already know (is it de or het?)',
        'Listen for the -e sound in native speech'
      ],

      examples: [
        { dutch: 'de grote man', english: 'the big man', rule: 'de-word: always -e', type: 'definite' },
        { dutch: 'een grote man', english: 'a big man', rule: 'een + de-word: add -e', type: 'indefinite' },
        { dutch: 'het grote huis', english: 'the big house', rule: 'het-word definite: add -e', type: 'definite' },
        { dutch: 'een groot huis', english: 'a big house', rule: 'een + het-word: NO -e', type: 'indefinite' },
        { dutch: 'De man is groot', english: 'The man is big', rule: 'After noun: NO -e', type: 'predicative' },
        { dutch: 'een witte muur', english: 'a white wall', rule: 'Spelling: wit → witte', type: 'spelling' },
        { dutch: 'een lieve vrouw', english: 'a sweet woman', rule: 'Spelling: lief → lieve (f→v)', type: 'spelling' },
        { dutch: 'de grootste stad', english: 'the biggest city', rule: 'Superlative', type: 'comparison' },
        { dutch: 'een mooier huis', english: 'a more beautiful house', rule: 'Comparative', type: 'comparison' }
      ],

      quiz: [
        {
          question: 'Complete: "de ___ man" (big)',
          options: ['grote', 'groot', 'groote', 'groten'],
          correct: 'grote',
          explanation: 'de-word: always add -e → grote',
          difficulty: 'easy'
        },
        {
          question: 'Complete: "een ___ huis" (big) - het-word',
          options: ['groot', 'grote', 'groote', 'groten'],
          correct: 'groot',
          explanation: 'een + het-word: NO -e → groot',
          difficulty: 'medium'
        },
        {
          question: 'Complete: "het ___ huis" (big)',
          options: ['grote', 'groot', 'groote', 'groten'],
          correct: 'grote',
          explanation: 'het + het-word definite: add -e → grote',
          difficulty: 'medium'
        },
        {
          question: 'Complete: "De man is ___" (big)',
          options: ['groot', 'grote', 'groote', 'groten'],
          correct: 'groot',
          explanation: 'After noun (predicative): NO -e → groot',
          difficulty: 'easy'
        },
        {
          question: 'Complete: "een ___ muur" (white) - de-word',
          options: ['witte', 'wit', 'wite', 'witten'],
          correct: 'witte',
          explanation: 'een + de-word: add -e. Double consonant: wit → witte',
          difficulty: 'hard'
        },
        {
          question: 'Complete: "een ___ vrouw" (sweet: lief)',
          options: ['lieve', 'lief', 'liefe', 'lieven'],
          correct: 'lieve',
          explanation: 'f changes to v when adding -e: lief → lieve',
          difficulty: 'hard'
        },
        {
          question: 'Which is correct?',
          options: ['een groot huis', 'een grote huis', 'Both are correct', 'Neither is correct'],
          correct: 'een groot huis',
          explanation: 'een + het-word: NO -e',
          difficulty: 'medium'
        },
        {
          question: 'Comparative of "groot" (big)',
          options: ['groter', 'grootter', 'grote', 'grooter'],
          correct: 'groter',
          explanation: 'Add -er for comparative: groot → groter',
          difficulty: 'easy'
        }
      ]
    }
  },

  prepositions: {
    id: 'prepositions',
    title: 'Prepositions',
    icon: '📍',
    level: 'A2',
    difficulty: 'intermediate',
    estimatedTime: '30 minutes',
    description: 'Master Dutch prepositions for location, time, and direction',
    tags: ['prepositions', 'grammar', 'location', 'time'],
    content: {
      explanation: `Prepositions show relationships between words, especially location, time, and direction.

**Location Prepositions:**

- **in** (in, inside) - in de kamer (in the room)
- **op** (on, at) - op de tafel (on the table)
- **aan** (on, at) - aan de muur (on the wall)
- **bij** (at, near) - bij de deur (at the door)
- **naast** (next to) - naast het huis (next to the house)
- **tussen** (between) - tussen twee stoelen (between two chairs)
- **voor** (in front of) - voor de auto (in front of the car)
- **achter** (behind) - achter het huis (behind the house)
- **boven** (above) - boven de tafel (above the table)
- **onder** (under) - onder de tafel (under the table)

**Time Prepositions:**

- **om** (at - for clock time) - om 3 uur (at 3 o'clock)
- **in** (in - for months, years) - in januari (in January)
- **op** (on - for days, dates) - op maandag (on Monday)
- **voor** (before) - voor 5 uur (before 5 o'clock)
- **na** (after) - na het eten (after eating)
- **tijdens** (during) - tijdens de les (during the lesson)
- **tot** (until) - tot morgen (until tomorrow)

**Direction Prepositions:**

- **naar** (to - for places/people) - naar school (to school)
- **van** (from) - van Amsterdam (from Amsterdam)
- **uit** (out of, from) - uit Nederland (from the Netherlands)
- **door** (through) - door de stad (through the city)

**Special Cases:**

1. **op vs aan:**
   - op: on horizontal surfaces (op de grond - on the ground)
   - aan: on vertical surfaces (aan de muur - on the wall)

2. **naar vs tot:**
   - naar: direction/destination (naar huis - to home)
   - tot: up to a limit (tot hier - up to here)

3. **Contractions:**
   - in + het = in't (rarely used)
   - te + de = ter (formal)`,

      categories: [
        {
          category: 'Location',
          prepositions: [
            { dutch: 'in', english: 'in', example: 'in de kamer' },
            { dutch: 'op', english: 'on', example: 'op de tafel' },
            { dutch: 'bij', english: 'at, near', example: 'bij de deur' },
            { dutch: 'naast', english: 'next to', example: 'naast het huis' }
          ]
        },
        {
          category: 'Time',
          prepositions: [
            { dutch: 'om', english: 'at (clock)', example: 'om 3 uur' },
            { dutch: 'in', english: 'in (month/year)', example: 'in januari' },
            { dutch: 'op', english: 'on (day/date)', example: 'op maandag' },
            { dutch: 'voor', english: 'before', example: 'voor 5 uur' }
          ]
        },
        {
          category: 'Direction',
          prepositions: [
            { dutch: 'naar', english: 'to', example: 'naar school' },
            { dutch: 'van', english: 'from', example: 'van Amsterdam' },
            { dutch: 'uit', english: 'out of, from', example: 'uit Nederland' },
            { dutch: 'door', english: 'through', example: 'door de stad' }
          ]
        }
      ],

      tips: [
        'Learn prepositions in context with common phrases',
        'Time prepositions: om (clock), in (month/year), op (day/date)',
        'naar for destinations, van for origins',
        'op for horizontal surfaces, aan for vertical surfaces',
        'Practice with physical objects to remember location prepositions'
      ],

      examples: [
        { dutch: 'Het boek ligt op de tafel', english: 'The book lies on the table', prep: 'op', type: 'location' },
        { dutch: 'Ik kom om 3 uur', english: 'I come at 3 o\'clock', prep: 'om', type: 'time' },
        { dutch: 'Wij gaan naar Amsterdam', english: 'We go to Amsterdam', prep: 'naar', type: 'direction' },
        { dutch: 'De foto hangt aan de muur', english: 'The photo hangs on the wall', prep: 'aan', type: 'location' },
        { dutch: 'Op maandag werk ik', english: 'On Monday I work', prep: 'op', type: 'time' },
        { dutch: 'Hij komt uit Nederland', english: 'He comes from the Netherlands', prep: 'uit', type: 'direction' },
        { dutch: 'De kat zit onder de tafel', english: 'The cat sits under the table', prep: 'onder', type: 'location' },
        { dutch: 'Voor het eten douche ik', english: 'Before eating I shower', prep: 'voor', type: 'time' },
        { dutch: 'Ik woon bij de school', english: 'I live near the school', prep: 'bij', type: 'location' }
      ],

      quiz: [
        {
          question: 'Complete: "Het boek ligt ___ de tafel" (on the table)',
          options: ['op', 'aan', 'in', 'bij'],
          correct: 'op',
          explanation: 'Use "op" for horizontal surfaces',
          difficulty: 'easy'
        },
        {
          question: 'Complete: "Ik kom ___ 3 uur" (at 3 o\'clock)',
          options: ['om', 'in', 'op', 'aan'],
          correct: 'om',
          explanation: 'Use "om" for clock times',
          difficulty: 'easy'
        },
        {
          question: 'Complete: "Ik ga ___ school" (to school)',
          options: ['naar', 'tot', 'aan', 'in'],
          correct: 'naar',
          explanation: 'Use "naar" for destinations',
          difficulty: 'easy'
        },
        {
          question: 'Complete: "De foto hangt ___ de muur" (on the wall)',
          options: ['aan', 'op', 'in', 'bij'],
          correct: 'aan',
          explanation: 'Use "aan" for vertical surfaces',
          difficulty: 'medium'
        },
        {
          question: 'Complete: "___ maandag werk ik" (On Monday)',
          options: ['Op', 'In', 'Om', 'Aan'],
          correct: 'Op',
          explanation: 'Use "op" for days of the week',
          difficulty: 'medium'
        },
        {
          question: 'Complete: "Hij komt ___ Nederland" (from the Netherlands)',
          options: ['uit', 'van', 'naar', 'in'],
          correct: 'uit',
          explanation: 'Use "uit" for countries/regions',
          difficulty: 'medium'
        },
        {
          question: 'Complete: "___ januari ga ik" (In January)',
          options: ['In', 'Op', 'Om', 'Aan'],
          correct: 'In',
          explanation: 'Use "in" for months',
          difficulty: 'easy'
        },
        {
          question: 'Complete: "De kat zit ___ de tafel" (under the table)',
          options: ['onder', 'boven', 'op', 'in'],
          correct: 'onder',
          explanation: '"Onder" means "under"',
          difficulty: 'easy'
        }
      ]
    }
  }
};

export default grammarLessons;