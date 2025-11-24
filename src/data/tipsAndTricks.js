// Add this after your imports and before the component
const tipsAndTricksdata = {
    verbs: {
        title: "🔄 Verbs & Tenses",
        icon: "🔄",
        tips: [
            {
                title: "Past Participle with 'ge-'",
                dutch: "Voltooid Deelwoord",
                explanation: "Most verbs form past participle with 'ge-' prefix:\n\n• leren → geleerd (learned)\n• werken → gewerkt (worked)\n• maken → gemaakt (made)\n• spelen → gespeeld (played)",
                examples: [
                    { dutch: "Ik heb Nederlands geleerd", english: "I have learned Dutch" },
                    { dutch: "Hij heeft hard gewerkt", english: "He has worked hard" },
                    { dutch: "Zij heeft een cake gemaakt", english: "She has made a cake" }
                ]
            },
            {
                title: "When NOT to use 'ge-'",
                dutch: "Zonder 'ge-'",
                explanation: "Don't use 'ge-' with:\n\n1. Verbs starting with be-, ver-, ont-, her-, er-\n   • beginnen → begonnen\n   • vertellen → verteld\n   • ontmoeten → ontmoet\n\n2. Verbs ending in -eren\n   • studeren → gestudeerd ❌ → studeerde ✅\n   • fotograferen → gefotografeerd ❌ → gefotografeerd ✅",
                examples: [
                    { dutch: "Ik heb het verhaal verteld", english: "I told the story" },
                    { dutch: "We hebben gisteren begonnen", english: "We started yesterday" },
                    { dutch: "Hij heeft in Amsterdam gestudeerd", english: "He studied in Amsterdam" }
                ]
            },
            {
                title: "Present Perfect vs Simple Past",
                dutch: "Voltooid Tegenwoordige Tijd vs Verleden Tijd",
                explanation: "Use Present Perfect (hebben/zijn + ge-) for:\n• Recent actions\n• Actions with present relevance\n\nUse Simple Past for:\n• Stories and narratives\n• Historical events",
                examples: [
                    { dutch: "Ik heb gegeten (I have eaten - just now)", english: "Present Perfect" },
                    { dutch: "Ik at gisteren pizza (I ate pizza yesterday)", english: "Simple Past" },
                    { dutch: "Zij is naar huis gegaan (She has gone home)", english: "Present Perfect with movement" }
                ]
            },
            {
                title: "Hebben vs Zijn in Perfect Tense",
                explanation: "Use ZIJN with:\n• Movement verbs: gaan, komen, lopen, rijden\n• State changes: worden, blijven, groeien\n• zijn itself\n\nUse HEBBEN with:\n• Most other verbs",
                examples: [
                    { dutch: "Ik ben gegaan (I have gone)", english: "Movement - use ZIJN" },
                    { dutch: "Ik heb geleerd (I have learned)", english: "Regular verb - use HEBBEN" },
                    { dutch: "Hij is geweest (He has been)", english: "ZIJN - use ZIJN" }
                ]
            }
        ]
    },
    wordOrder: {
        title: "📝 Word Order",
        icon: "📝",
        tips: [
            {
                title: "Basic Sentence Structure",
                explanation: "Dutch follows SOV (Subject-Object-Verb) in subordinate clauses:\n\nMain clause: SVO\n• Ik eet een appel (I eat an apple)\n\nSubordinate: SOV\n• ...omdat ik een appel eet (...because I an apple eat)",
                examples: [
                    { dutch: "Ik weet dat hij Nederlands spreekt", english: "I know that he speaks Dutch" },
                    { dutch: "Zij zegt dat ze morgen komt", english: "She says that she comes tomorrow" }
                ]
            },
            {
                title: "Inversion After Time/Place",
                explanation: "When sentence starts with time/place, verb comes before subject:\n\nNormal: Ik ga morgen naar huis\nInversion: Morgen ga ik naar huis",
                examples: [
                    { dutch: "Gisteren heb ik Nederlands geleerd", english: "Yesterday I learned Dutch" },
                    { dutch: "In Amsterdam woon ik al 5 jaar", english: "In Amsterdam I have lived for 5 years" }
                ]
            }
        ]
    },
    articles: {
        title: "📰 Articles (de/het)",
        icon: "📰",
        tips: [
            {
                title: "De vs Het",
                explanation: "DE (common gender) - ~2/3 of words:\n• de man, de vrouw, de tafel\n\nHET (neuter gender) - ~1/3 of words:\n• het huis, het kind, het boek\n\nTIP: Plural always uses DE!",
                examples: [
                    { dutch: "de man → de mannen", english: "the man → the men" },
                    { dutch: "het huis → de huizen", english: "the house → the houses" },
                    { dutch: "het kind → de kinderen", english: "the child → the children" }
                ]
            },
            {
                title: "When to use HET",
                explanation: "Use HET with:\n• Diminutives (-je, -tje, -pje): het meisje\n• Verbs as nouns: het lopen (walking)\n• Languages: het Nederlands\n• Metals: het goud, het zilver",
                examples: [
                    { dutch: "het meisje (the little girl)", english: "Diminutive" },
                    { dutch: "het zwemmen (swimming)", english: "Verb as noun" },
                    { dutch: "het Engels (English)", english: "Language" }
                ]
            }
        ]
    },
    pronunciation: {
        title: "🗣️ Pronunciation Tips",
        icon: "🗣️",
        tips: [
            {
                title: "The 'G' Sound",
                explanation: "Dutch 'g' is guttural (from throat):\n• goed, gaan, zeggen\n\nSoft 'g' in southern Netherlands sounds like 'h'\n\nPractice: Start with 'h' and move back in throat",
                examples: [
                    { dutch: "goed (good)", english: "Like clearing throat gently" },
                    { dutch: "zeggen (to say)", english: "Two 'g' sounds" }
                ]
            },
            {
                title: "UI vs IJ",
                explanation: "UI: like 'ow' in 'how'\n• huis, bui, uit\n\nIJ: like 'ay' in 'day'\n• zijn, kijken, ijzer",
                examples: [
                    { dutch: "huis (house)", english: "UI = 'howss'" },
                    { dutch: "zijn (to be)", english: "IJ = 'zayn'" },
                    { dutch: "kijken (to look)", english: "IJ = 'kay-ken'" }
                ]
            },
            {
                title: "Double Vowels",
                explanation: "aa, ee, oo, uu = long sound\na, e, o, u = short sound\n\n• maan (moon) - long\n• man (man) - short",
                examples: [
                    { dutch: "maan vs man", english: "moon vs man" },
                    { dutch: "boom vs bom", english: "tree vs bomb" },
                    { dutch: "noot vs not", english: "nut vs note" }
                ]
            }
        ]
    },
    commonMistakes: {
        title: "⚠️ Common Mistakes",
        icon: "⚠️",
        tips: [
            {
                title: "Jij vs Je / Jou",
                explanation: "JIJ = stressed/emphasized\nJE = unstressed\n\n• Jij bent mooi (YOU are beautiful)\n• Ben je thuis? (Are you home?)\n\nJOU = object form\n• Ik zie jou (I see YOU)",
                examples: [
                    { dutch: "Jij bent aardig", english: "YOU are nice (emphasis)" },
                    { dutch: "Ben je moe?", english: "Are you tired? (no emphasis)" },
                    { dutch: "Ik hou van jou", english: "I love YOU (object)" }
                ]
            },
            {
                title: "Er Is vs Er Zijn",
                explanation: "ER IS = there is (singular)\nER ZIJN = there are (plural)\n\nDon't confuse with 'er' as location!",
                examples: [
                    { dutch: "Er is een boek", english: "There is a book" },
                    { dutch: "Er zijn twee boeken", english: "There are two books" },
                    { dutch: "Ik ben er (location)", english: "I am there" }
                ]
            },
            {
                title: "Niet vs Geen",
                explanation: "GEEN = no/not a (before nouns)\n• Ik heb geen tijd\n\nNIET = not (everything else)\n• Ik kan niet komen",
                examples: [
                    { dutch: "Ik heb geen geld", english: "I have no money" },
                    { dutch: "Dat is niet waar", english: "That is not true" },
                    { dutch: "Zij heeft geen auto", english: "She has no car" }
                ]
            }
        ]
    },
    separable: {
        title: "🔀 Separable Verbs",
        icon: "🔀",
        tips: [
            {
                title: "What are Separable Verbs?",
                explanation: "Many Dutch verbs split into two parts:\nPrefix goes to END of sentence\n\n• opstaan (to get up)\n  → Ik sta om 7 uur op\n\n• meekomen (to come along)\n  → Kom je mee?",
                examples: [
                    { dutch: "Ik sta om 7 uur op", english: "I get up at 7 o'clock (opstaan)" },
                    { dutch: "Kom je mee?", english: "Are you coming along? (meekomen)" },
                    { dutch: "Hij belt je morgen op", english: "He'll call you tomorrow (opbellen)" }
                ]
            },
            {
                title: "Common Separable Prefixes",
                explanation: "op-, aan-, uit-, mee-, af-, na-, bij-, in-, over-\n\n• aankomen (arrive)\n• uitgaan (go out)\n• meenemen (take along)\n• afspreken (agree/arrange)",
                examples: [
                    { dutch: "We komen om 5 uur aan", english: "We arrive at 5 o'clock" },
                    { dutch: "Ga je vanavond uit?", english: "Are you going out tonight?" },
                    { dutch: "Neem je een tas mee?", english: "Are you taking a bag along?" }
                ]
            },
            {
                title: "In Subordinate Clauses",
                explanation: "In subordinate clauses (omdat, dat, als):\nVerb stays TOGETHER at the end\n\n• Ik sta op → omdat ik opsta\n• Hij belt op → dat hij opbelt",
                examples: [
                    { dutch: "Ik ben moe omdat ik vroeg opsta", english: "I'm tired because I get up early" },
                    { dutch: "Hij zegt dat hij meegaat", english: "He says that he's coming along" }
                ]
            }
        ]
    },
    everyday: {
        title: "💬 Everyday Phrases",
        icon: "💬",
        tips: [
            {
                title: "Polite Phrases",
                explanation: "Essential polite expressions:\n\n• Alstublieft (formal) / Alsjeblieft (informal) = Please/Here you are\n• Graag gedaan = You're welcome\n• Pardon / Sorry = Excuse me\n• Tot ziens = Goodbye",
                examples: [
                    { dutch: "Mag ik alstublieft een koffie?", english: "May I have a coffee please?" },
                    { dutch: "Dank je wel! - Graag gedaan!", english: "Thank you! - You're welcome!" },
                    { dutch: "Pardon, waar is het station?", english: "Excuse me, where is the station?" }
                ]
            },
            {
                title: "Greeting & Small Talk",
                explanation: "Hoe gaat het? = How are it going?\nAnswers:\n• Goed, dank je = Good, thanks\n• Prima = Fine\n• Het gaat = It's going (okay)\n• Niet zo goed = Not so good",
                examples: [
                    { dutch: "Goedemorgen! Hoe gaat het?", english: "Good morning! How are you?" },
                    { dutch: "Het gaat prima, en met jou?", english: "I'm fine, and you?" },
                    { dutch: "Tot later!", english: "See you later!" }
                ]
            }
        ]
    },
    // New categories
    idioms: {
        title: "💡 Idioms & Expressions",
        icon: "💡",
        tips: [
            {
                title: "Het is geen kattenpis",
                explanation: "Literally 'it's not cat urine' – means something is not a joke or is serious.",
                examples: [
                    { dutch: "Dit is geen kattenpis, we moeten echt helpen.", english: "This is serious, we really need to help." }
                ]
            },
            {
                title: "Iets onder de knie hebben",
                explanation: "Literally 'to have something under the knee' – means to master something.",
                examples: [
                    { dutch: "Ik heb de grammatica onder de knie.", english: "I've mastered the grammar." }
                ]
            }
        ]
    },
    numbers: {
        title: "🔢 Numbers & Counting",
        icon: "🔢",
        tips: [
            {
                title: "Numbers 13-19",
                explanation: "Formed by 'tien' + unit: dertien, veertien, vijftien, zestien, zeventien, achttien, negentien.",
                examples: [
                    { dutch: "vijftien", english: "fifteen" },
                    { dutch: "zeventien", english: "seventeen" }
                ]
            },
            {
                title: "Ordinal numbers",
                explanation: "Add '-de' or '-ste' to the cardinal number. Exceptions: eerste, tweede, derde.",
                examples: [
                    { dutch: "de eerste", english: "the first" },
                    { dutch: "de twintigste", english: "the twentieth" }
                ]
            }
        ]
    },
    prepositions: {
        title: "📍 Prepositions",
        icon: "📍",
        tips: [
            {
                title: "In vs. Op",
                explanation: "Use 'in' for enclosed spaces, 'op' for surfaces.",
                examples: [
                    { dutch: "in de kamer", english: "in the room" },
                    { dutch: "op de tafel", english: "on the table" }
                ]
            },
            {
                title: "Voor vs. Naar",
                explanation: "'Voor' indicates purpose or benefit, 'naar' indicates direction.",
                examples: [
                    { dutch: "Ik koop een cadeau voor jou.", english: "I buy a gift for you." },
                    { dutch: "Ik ga naar school.", english: "I go to school." }
                ]
            }
        ]
    },
    falseFriends: {
        title: "⚠️ False Friends",
        icon: "⚠️",
        tips: [
            {
                title: "Winkel vs. Window",
                explanation: "'Winkel' means shop, not window.",
                examples: [
                    { dutch: "Ik ga naar de winkel.", english: "I go to the shop." }
                ]
            },
            {
                title: "Eventueel vs. Eventually",
                explanation: "'Eventueel' means possibly, not eventually.",
                examples: [
                    { dutch: "Eventueel kom ik later.", english: "I might come later." }
                ]
            }
        ]
    },
};

export const tipsAndTricks = {
    ...tipsAndTricksdata
};