export const grammarLessons = {
  deHet: {
    id: 'deHet',
    title: 'De vs Het Rules',
    icon: '📚',
    level: 'A1',
    description: 'Learn when to use "de" or "het" with Dutch nouns',
    sections: [
      {
        title: 'Basic Rule',
        content: 'Dutch has two definite articles: "de" and "het". About 2/3 of Dutch nouns use "de" and 1/3 use "het".',
        examples: [
          { dutch: 'de man', english: 'the man', explanation: 'Masculine nouns use "de"' },
          { dutch: 'de vrouw', english: 'the woman', explanation: 'Feminine nouns use "de"' },
          { dutch: 'het kind', english: 'the child', explanation: 'Neuter nouns use "het"' }
        ]
      },
      {
        title: 'DE-words (Definite)',
        content: 'Most nouns use "de". Here are the main categories:',
        examples: [
          { dutch: 'de tafel', english: 'the table', explanation: 'Most common nouns' },
          { dutch: 'de bloem', english: 'the flower', explanation: 'Living things (plants)' },
          { dutch: 'de dag', english: 'the day', explanation: 'Days, months, seasons' },
          { dutch: 'de computer', english: 'the computer', explanation: 'Modern technology words' }
        ]
      },
      {
        title: 'HET-words (Neuter)',
        content: 'About 1/3 of nouns use "het". Common patterns:',
        examples: [
          { dutch: 'het huis', english: 'the house', explanation: 'Buildings and places' },
          { dutch: 'het boek', english: 'the book', explanation: 'Diminutives always use "het"' },
          { dutch: 'het meisje', english: 'the girl', explanation: 'Words ending in -je (diminutive)' },
          { dutch: 'het zwemmen', english: 'swimming', explanation: 'Verbs used as nouns' }
        ]
      },
      {
        title: 'Plural Rule',
        content: 'ALL plural nouns use "de", regardless of their singular article!',
        examples: [
          { dutch: 'het huis → de huizen', english: 'the house → the houses', explanation: 'Plural always takes "de"' },
          { dutch: 'het kind → de kinderen', english: 'the child → the children', explanation: 'Even neuter nouns become "de"' }
        ]
      },
      {
        title: 'Tip for Learning',
        content: 'Always learn the article WITH the noun! Think "de tafel" as one word, not "tafel" separately.',
        examples: [
          { dutch: 'de kat', english: 'the cat', explanation: 'Learn as "de-kat"' },
          { dutch: 'het water', english: 'the water', explanation: 'Learn as "het-water"' }
        ]
      }
    ],
    quiz: [
      { question: 'Which article? ___ huis', options: ['de', 'het'], correct: 'het', explanation: 'Buildings use "het"' },
      { question: 'Which article? ___ man', options: ['de', 'het'], correct: 'de', explanation: 'People use "de"' },
      { question: 'Which article? ___ boekje (little book)', options: ['de', 'het'], correct: 'het', explanation: 'Diminutives (-je) always use "het"' }
    ]
  },
  
  wordOrder: {
    id: 'wordOrder',
    title: 'Dutch Word Order',
    icon: '🔄',
    level: 'A1-A2',
    description: 'Master Dutch sentence structure and word placement',
    sections: [
      {
        title: 'Basic Word Order (Main Clause)',
        content: 'Standard Dutch follows Subject-Verb-Object (SVO) order in main clauses.',
        examples: [
          { dutch: 'Ik eet een appel', english: 'I eat an apple', explanation: 'Subject (Ik) + Verb (eet) + Object (appel)' },
          { dutch: 'Hij leest een boek', english: 'He reads a book', explanation: 'Simple SVO structure' },
          { dutch: 'Wij wonen in Amsterdam', english: 'We live in Amsterdam', explanation: 'Subject + Verb + Location' }
        ]
      },
      {
        title: 'Verb Second Position (V2)',
        content: 'The conjugated verb ALWAYS goes in the 2nd position in Dutch main clauses!',
        examples: [
          { dutch: 'Vandaag ga ik naar school', english: 'Today I go to school', explanation: 'Time first → verb 2nd position' },
          { dutch: 'In Amsterdam woon ik', english: 'In Amsterdam I live', explanation: 'Place first → verb still 2nd!' },
          { dutch: 'Morgen eet ik pizza', english: 'Tomorrow I eat pizza', explanation: 'Whatever comes first, verb is 2nd' }
        ]
      },
      {
        title: 'Questions',
        content: 'In yes/no questions, the verb comes FIRST. In wh-questions, question word is first, verb is second.',
        examples: [
          { dutch: 'Eet jij een appel?', english: 'Do you eat an apple?', explanation: 'Yes/no question: Verb first' },
          { dutch: 'Wat eet jij?', english: 'What do you eat?', explanation: 'Wh-question: Question word + verb' },
          { dutch: 'Waar woon je?', english: 'Where do you live?', explanation: 'Question word → verb → subject' }
        ]
      },
      {
        title: 'Time-Manner-Place',
        content: 'When you have multiple adverbs, follow this order: Time → Manner → Place',
        examples: [
          { dutch: 'Ik ga morgen met de trein naar Utrecht', english: 'I go tomorrow by train to Utrecht', explanation: 'TIME (morgen) → MANNER (met de trein) → PLACE (Utrecht)' },
          { dutch: 'Hij werkt vandaag hard thuis', english: 'He works today hard at home', explanation: 'TIME → MANNER → PLACE' },
          { dutch: 'Ze komt vanavond snel hier', english: 'She comes tonight quickly here', explanation: 'Time-Manner-Place order' }
        ]
      },
      {
        title: 'Verb at the End (Subordinate Clauses)',
        content: 'In subordinate clauses (with omdat, dat, als, etc.), the verb goes to the END!',
        examples: [
          { dutch: 'Ik weet dat hij Nederlands spreekt', english: 'I know that he speaks Dutch', explanation: 'Subordinate clause: verb (spreekt) at the end' },
          { dutch: 'omdat ik moe ben', english: 'because I am tired', explanation: 'After "omdat": verb at the end' },
          { dutch: 'als je tijd hebt', english: 'if you have time', explanation: 'After "als": verb at the end' }
        ]
      }
    ],
    quiz: [
      { question: 'Correct word order? I go today to school', options: ['Ik ga vandaag naar school', 'Ik vandaag ga naar school'], correct: 'Ik ga vandaag naar school', explanation: 'Verb stays in 2nd position' },
      { question: 'Correct question? Do you eat?', options: ['Eet jij?', 'Jij eet?'], correct: 'Eet jij?', explanation: 'Questions: verb first' }
    ]
  },
  
  commonMistakes: {
    id: 'commonMistakes',
    title: 'Common Dutch Mistakes',
    icon: '⚠️',
    level: 'A1-A2',
    description: 'Avoid the most common errors made by Dutch learners',
    sections: [
      {
        title: 'False Friends',
        content: 'Words that look similar to English but mean something different!',
        examples: [
          { dutch: 'duur', english: 'expensive (NOT duration!)', explanation: 'Common mistake: "duur" ≠ duration, it means expensive' },
          { dutch: 'slim', english: 'smart (NOT thin!)', explanation: '"slim" means smart/clever in Dutch' },
          { dutch: 'bellen', english: 'to call/phone (NOT to ring a bell!)', explanation: 'You "bel" someone on the phone' },
          { dutch: 'braaf', english: 'well-behaved (NOT brave!)', explanation: '"braaf" = obedient, not brave' }
        ]
      },
      {
        title: 'ER Construction',
        content: 'Dutch uses "er" in ways that don\'t translate directly to English.',
        examples: [
          { dutch: 'Er zijn twee mensen', english: 'There are two people', explanation: 'Use "er" for "there is/are"' },
          { dutch: 'Ik heb er twee', english: 'I have two (of them)', explanation: '"er" replaces the noun' },
          { dutch: 'Ik kom er vandaan', english: 'I come from there', explanation: '"er" = there (place)' }
        ]
      },
      {
        title: 'Verb Splitting (Separable Verbs)',
        content: 'Many Dutch verbs split into two parts!',
        examples: [
          { dutch: 'Ik sta om 7 uur op', english: 'I get up at 7 o\'clock', explanation: 'opstaan → splits: sta ... op' },
          { dutch: 'Hij belt zijn moeder op', english: 'He calls his mother', explanation: 'opbellen → splits: belt ... op' },
          { dutch: 'We gaan morgen uit', english: 'We go out tomorrow', explanation: 'uitgaan → splits: gaan ... uit' }
        ]
      },
      {
        title: 'Dutch Double Negatives',
        content: 'Unlike English, Dutch uses double negatives that stay negative!',
        examples: [
          { dutch: 'Ik heb nooit niemand gezien', english: 'I have never seen anyone', explanation: 'Double negative = still negative!' },
          { dutch: 'Er is niemand nergens', english: 'There is nobody nowhere', explanation: 'Both words stay negative' }
        ]
      },
      {
        title: 'JIJ vs JE',
        content: 'Both mean "you", but there\'s a subtle difference in verb forms.',
        examples: [
          { dutch: 'Jij bent', english: 'You are', explanation: 'Stressed form: jij' },
          { dutch: 'Bent jij?', english: 'Are you?', explanation: 'In questions: verb first' },
          { dutch: 'Je bent', english: 'You are', explanation: 'Unstressed form: je (more common)' }
        ]
      },
      {
        title: 'ER vs DAAR vs HIER',
        content: 'English "there" can be multiple words in Dutch.',
        examples: [
          { dutch: 'Daar is het huis', english: 'There is the house (pointing)', explanation: 'DAAR = there (visible/specific place)' },
          { dutch: 'Hier ben ik', english: 'Here I am', explanation: 'HIER = here (close)' },
          { dutch: 'Er is een probleem', english: 'There is a problem', explanation: 'ER = there (existential)' }
        ]
      }
    ],
    quiz: [
      { question: 'What does "slim" mean?', options: ['smart', 'thin'], correct: 'smart', explanation: 'False friend: slim = smart!' },
      { question: 'Correct? "I get up at 7"', options: ['Ik sta om 7 uur op', 'Ik opstaan om 7 uur'], correct: 'Ik sta om 7 uur op', explanation: 'Separable verb: sta ... op' }
    ]
  },
  
  pronouns: {
    id: 'pronouns',
    title: 'Dutch Pronouns',
    icon: '👤',
    level: 'A1',
    description: 'Subject, object, and possessive pronouns',
    sections: [
      {
        title: 'Subject Pronouns',
        content: 'Use these when the pronoun is doing the action.',
        examples: [
          { dutch: 'ik', english: 'I', explanation: 'Subject form' },
          { dutch: 'jij/je', english: 'you (informal)', explanation: 'jij = stressed, je = unstressed' },
          { dutch: 'u', english: 'you (formal)', explanation: 'Polite form for strangers/elderly' },
          { dutch: 'hij', english: 'he', explanation: 'Masculine' },
          { dutch: 'zij/ze', english: 'she', explanation: 'zij = stressed, ze = unstressed' },
          { dutch: 'wij/we', english: 'we', explanation: 'wij = stressed, we = unstressed' },
          { dutch: 'jullie', english: 'you (plural)', explanation: 'Multiple people' },
          { dutch: 'zij/ze', english: 'they', explanation: 'Group of people' }
        ]
      },
      {
        title: 'Object Pronouns',
        content: 'Use these when the pronoun receives the action.',
        examples: [
          { dutch: 'mij/me', english: 'me', explanation: 'mij = stressed, me = unstressed' },
          { dutch: 'jou/je', english: 'you', explanation: 'jou = stressed, je = unstressed' },
          { dutch: 'hem', english: 'him', explanation: 'Masculine object' },
          { dutch: 'haar', english: 'her', explanation: 'Feminine object' },
          { dutch: 'ons', english: 'us', explanation: 'Object of "we"' }
        ]
      },
      {
        title: 'Example Sentences',
        content: 'See how pronouns change based on their role.',
        examples: [
          { dutch: 'Ik zie jou', english: 'I see you', explanation: 'ik (subject) + jou (object)' },
          { dutch: 'Hij helpt mij', english: 'He helps me', explanation: 'hij (subject) + mij (object)' },
          { dutch: 'Wij kennen hem', english: 'We know him', explanation: 'wij (subject) + hem (object)' }
        ]
      }
    ],
    quiz: [
      { question: 'I see ___ (him)', options: ['hij', 'hem'], correct: 'hem', explanation: 'Object form of "hij"' },
      { question: 'She helps ___ (me)', options: ['ik', 'mij'], correct: 'mij', explanation: 'Object form of "ik"' }
    ]
  },
  
  dutchNumbers: {
    id: 'dutchNumbers',
    title: 'Dutch Numbers',
    icon: '🔢',
    level: 'A1',
    description: 'Learn how to count and use numbers in Dutch',
    sections: [
      {
        title: 'Numbers 0-20',
        content: 'Basic counting in Dutch.',
        examples: [
          { dutch: 'nul', english: '0', explanation: 'Zero' },
          { dutch: 'een', english: '1', explanation: 'One' },
          { dutch: 'twee', english: '2', explanation: 'Two' },
          { dutch: 'drie', english: '3', explanation: 'Three' },
          { dutch: 'tien', english: '10', explanation: 'Ten' },
          { dutch: 'elf', english: '11', explanation: 'Eleven' },
          { dutch: 'twintig', english: '20', explanation: 'Twenty' }
        ]
      },
      {
        title: 'Numbers 21-99 (Reversed!)',
        content: 'Dutch reverses the order: ones BEFORE tens!',
        examples: [
          { dutch: 'eenentwintig', english: '21', explanation: '"one-and-twenty" (literally!)' },
          { dutch: 'tweeëndertig', english: '32', explanation: '"two-and-thirty"' },
          { dutch: 'vijfenveertig', english: '45', explanation: '"five-and-forty"' },
          { dutch: 'zevenenzestig', english: '67', explanation: 'Always: ONES + en + TENS' }
        ]
      },
      {
        title: 'Large Numbers',
        content: 'Hundreds, thousands, and beyond.',
        examples: [
          { dutch: 'honderd', english: '100', explanation: 'One hundred' },
          { dutch: 'tweehonderd', english: '200', explanation: 'Two hundred' },
          { dutch: 'duizend', english: '1000', explanation: 'One thousand' },
          { dutch: 'een miljoen', english: '1,000,000', explanation: 'One million' }
        ]
      }
    ],
    quiz: [
      { question: 'How do you say 23?', options: ['drieëntwintig', 'twintendrie'], correct: 'drieëntwintig', explanation: 'Ones before tens!' },
      { question: 'What is "vijfenveertig"?', options: ['45', '54'], correct: '45', explanation: 'Five-and-forty = 45' }
    ]
  }
};