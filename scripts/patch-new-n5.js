const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '../src/data/grammar.json')
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))

const newEntries = [
  {
    id: 'n5-mashou',
    name: '〜ましょう',
    romaji: '〜mashou',
    level: 'N5',
    description: 'ましょう is the volitional form of polite verbs, used to suggest doing something together ("let\'s ~"). It expresses the speaker\'s intention or an invitation for joint action, and is one of the first verb forms learned in Japanese.\n\nTo form it, drop the ます from the masu-form and add ましょう. It is used in affirmative sentences only — for negative suggestions, use ましょうか with a question intonation or rephrase.',
    usage: 'Verb (ます-stem) + ましょう',
    links: [],
    examples: [
      { japanese: '一緒に昼ごはんを食べましょう。', romaji: 'Issho ni hirugohan wo tabemashou.', english: 'Let\'s eat lunch together.' },
      { japanese: '駅まで歩きましょう。', romaji: 'Eki made arukimashou.', english: 'Let\'s walk to the station.' }
    ],
    notes: 'ましょう is warmer and more inviting than the plain volitional form (行こう). In formal settings such as business or presentations, it is the standard form for group suggestions.'
  },
  {
    id: 'n5-mashouka',
    name: '〜ましょうか',
    romaji: '〜mashouka',
    level: 'N5',
    description: 'ましょうか is the question form of the volitional. It has two distinct uses: (1) offering to do something for the listener ("shall I ~?"), and (2) proposing a joint action ("shall we ~?"). Context and the presence of words like 一緒に determine which meaning is intended.\n\nWhen used as an offer, the subject is "I" and the listener benefits. When used as a mutual suggestion, it is similar to ましょう but softer because it invites agreement rather than assuming it.',
    usage: 'Verb (ます-stem) + ましょうか',
    links: [],
    examples: [
      { japanese: '荷物を持ちましょうか。', romaji: 'Nimotsu wo mochimashouka.', english: 'Shall I carry your luggage?' },
      { japanese: 'そろそろ出発しましょうか。', romaji: 'Sorosoro shuppatsu shimashouka.', english: 'Shall we get going soon?' }
    ],
    notes: 'The intonation matters: rising intonation implies a genuine question or offer, while falling intonation leans toward a suggestion. Compare with ませんか, which is an invitation ("won\'t you ~?").'
  },
  {
    id: 'n5-masenka',
    name: '〜ませんか',
    romaji: '〜masenka',
    level: 'N5',
    description: 'ませんか is a polite invitation form meaning "won\'t you ~?" or "would you like to ~?" It is more deferential than ましょう because it gives the listener the freedom to accept or decline, rather than assuming agreement.\n\nIt literally uses the negative polite form plus か, but the meaning is affirmative invitation, not a negative question. It is commonly used to invite someone to do something together.',
    usage: 'Verb (ます-stem) + ませんか',
    links: [],
    examples: [
      { japanese: '一緒に映画を見に行きませんか。', romaji: 'Issho ni eiga wo mi ni ikimasenka.', english: 'Won\'t you come see a movie with me?' },
      { japanese: '週末に公園を散歩しませんか。', romaji: 'Shuumatsu ni kouen wo sanpo shimasenka.', english: 'Would you like to take a walk in the park this weekend?' }
    ],
    notes: 'ませんか (invitation) vs ましょうか (offer/suggestion): ませんか asks the listener to participate; ましょうか either proposes an action or offers help.'
  },
  {
    id: 'n5-kudasai',
    name: '〜てください',
    romaji: '〜te kudasai',
    level: 'N5',
    description: '〜てください is a polite request form meaning "please do ~". It is formed by attaching ください to the て-form of a verb. This is the standard way to make polite requests in Japanese.\n\nStandalone ください (without a verb) means "please give me ~" and follows a noun + を. The combination てください is among the most frequently used structures in everyday Japanese.',
    usage: 'Verb (て-form) + ください / Noun + をください',
    links: [],
    examples: [
      { japanese: 'もう一度言ってください。', romaji: 'Mou ichido itte kudasai.', english: 'Please say it one more time.' },
      { japanese: 'メニューをください。', romaji: 'Menyuu wo kudasai.', english: 'Please give me the menu.' }
    ],
    notes: 'To make a negative request ("please don\'t ~"), use 〜ないでください: 写真を撮らないでください (Please don\'t take photos). ください comes from くださる, the honorific form of くれる.'
  },
  {
    id: 'n5-nasai',
    name: '〜なさい',
    romaji: '〜nasai',
    level: 'N5',
    description: 'なさい is a command form that expresses a directive to do something. It is firmer than てください (polite request) but softer than the blunt plain imperative (食べろ). It is widely used by parents, teachers, and in instructional contexts.\n\nIt is formed by dropping ます from the polite form and adding なさい. The command is direct but not rude in appropriate contexts — it would sound strange if a subordinate used it to a superior.',
    usage: 'Verb (ます-stem) + なさい',
    links: [],
    examples: [
      { japanese: '早く宿題をしなさい。', romaji: 'Hayaku shukudai wo shinasai.', english: 'Do your homework quickly.' },
      { japanese: 'もっと野菜を食べなさい。', romaji: 'Motto yasai wo tabenasai.', english: 'Eat more vegetables.' }
    ],
    notes: 'In casual/quick speech, なさい sometimes shortens to な: 食べな (eat). This shortened form is even more informal and mainly heard in Western Japanese dialects or casual speech.'
  },
  {
    id: 'n5-darou',
    name: '〜だろう',
    romaji: '〜darou',
    level: 'N5',
    description: 'だろう expresses conjecture or supposition in plain/informal speech, meaning "probably", "I think", or "right?". It is the plain equivalent of the polite でしょう. When used with rising intonation at the end, it seeks confirmation from the listener.\n\nだろう follows the plain form of verbs, i-adjectives, na-adjectives (drop だ → だろう), and nouns. It is common in written language, news, and male speech.',
    usage: 'Verb (plain) + だろう / い-adj + だろう / な-adj stem + だろう / Noun + だろう',
    links: [],
    examples: [
      { japanese: '明日は雨が降るだろう。', romaji: 'Ashita wa ame ga furu darou.', english: 'It will probably rain tomorrow.' },
      { japanese: '彼はまだ知らないだろう。', romaji: 'Kare wa mada shiranai darou.', english: 'He probably doesn\'t know yet.' }
    ],
    notes: 'In conversational speech, だろう often contracts to だろ. The feminine equivalent is でしょう used in all registers, while だろう is more commonly associated with male casual speech.'
  },
  {
    id: 'n5-deshou',
    name: '〜でしょう',
    romaji: '〜deshou',
    level: 'N5',
    description: 'でしょう is the polite form of だろう and expresses probability or conjecture: "probably", "I think", "right?". It is used in formal speech, news broadcasts, and weather forecasts to state what is likely.\n\nWhen said with rising intonation, でしょう seeks confirmation or agreement from the listener ("…right?" / "don\'t you think?"). With falling intonation it simply states a probability.',
    usage: 'Verb (plain) + でしょう / い-adj + でしょう / な-adj stem + でしょう / Noun + でしょう',
    links: [],
    examples: [
      { japanese: '明日は晴れるでしょう。', romaji: 'Ashita wa hareru deshou.', english: 'It will probably be sunny tomorrow.' },
      { japanese: 'この問題は難しいでしょう。', romaji: 'Kono mondai wa muzukashii deshou.', english: 'This problem is probably difficult, right?' }
    ],
    notes: 'でしょう and だろう have the same meaning; でしょう is polite/neutral while だろう is plain/informal. Both can express mild surprise or emphasis when said with stress: そうでしょう! (I knew it!).'
  },
  {
    id: 'n5-demo',
    name: 'でも',
    romaji: 'demo',
    level: 'N5',
    description: 'でも has two distinct uses. As a conjunction between sentences, it means "but", "however", or "even so" — it connects two contrasting ideas at the start of a new sentence. As a particle attached to nouns, it means "even", "or something", or "any" (e.g. お茶でも = tea or something like that).\n\nThe conjunctive でも is used after a complete sentence and begins the next sentence. It is more casual than しかし (however) and is extremely common in everyday speech.',
    usage: '[Sentence]. でも、[Sentence]. / Noun + でも',
    links: [],
    examples: [
      { japanese: '疲れています。でも、もう少し頑張ります。', romaji: 'Tsukarete imasu. Demo, mou sukoshi ganbarimasu.', english: 'I\'m tired. But I\'ll try a little more.' },
      { japanese: 'お茶でも飲みませんか。', romaji: 'Ocha demo nomimasenka.', english: 'Won\'t you have some tea or something?' }
    ],
    notes: 'The particle でも (noun + でも) implies the item is just one casual option. Compare: お茶を飲む (drink tea, specifically) vs お茶でも飲む (have tea or whatever, casually).'
  },
  {
    id: 'n5-donna',
    name: 'どんな',
    romaji: 'donna',
    level: 'N5',
    description: 'どんな is a pre-nominal question word meaning "what kind of" or "what sort of". It must directly precede a noun and asks about the nature, type, or quality of something. It can be used in both questions and embedded clauses.\n\nUnlike どの (which one among known options), どんな asks about the general character or type without implying a specific set to choose from.',
    usage: 'どんな + Noun + (Verb/Copula)',
    links: [],
    examples: [
      { japanese: 'どんな音楽が好きですか。', romaji: 'Donna ongaku ga suki desu ka.', english: 'What kind of music do you like?' },
      { japanese: 'どんな人が来るか分かりません。', romaji: 'Donna hito ga kuru ka wakarimasen.', english: 'I don\'t know what kind of person is coming.' }
    ],
    notes: 'どんな、どの、どれ comparison: どんな = what kind of (type/quality); どの = which (among known items); どれ = which one (of known options). どんな emphasizes qualitative description.'
  },
  {
    id: 'n5-hoshii',
    name: '〜が欲しい',
    romaji: '〜ga hoshii',
    level: 'N5',
    description: '欲しい is an i-adjective meaning "to want (something)". The desired item is marked with が. It expresses the speaker\'s own desire for a noun — not actions (for wanting to do things, use 〜たい).\n\nBecause 欲しい describes a personal feeling, using it to describe what a third person wants is considered presumptuous. To express what someone else wants, use 欲しがっている (is showing signs of wanting) instead.',
    usage: 'Noun + が + 欲しい / Noun + が + 欲しかった (past)',
    links: [],
    examples: [
      { japanese: '新しいコンピューターが欲しい。', romaji: 'Atarashii konpyuutaa ga hoshii.', english: 'I want a new computer.' },
      { japanese: '子どもの頃、犬が欲しかった。', romaji: 'Kodomo no koro, inu ga hoshikatta.', english: 'When I was a child, I wanted a dog.' }
    ],
    notes: '欲しい vs 〜たい: 欲しい is used with nouns (I want a thing); 〜たい is used with verbs (I want to do something). Third-person: 彼は犬を欲しがっている (He seems to want a dog).'
  },
  {
    id: 'n5-hougaii',
    name: '〜ほうがいい',
    romaji: '〜hou ga ii',
    level: 'N5',
    description: 'ほうがいい is used to give advice or recommendations, meaning "it would be better to ~" or "you should ~". With the past tense (た-form), the advice is stronger and more direct. With the present plain form, it is a gentle suggestion.\n\nThe negative equivalent — ないほうがいい — means "you had better not ~" or "it would be better not to ~" and uses the ない-form of the verb.',
    usage: 'Verb (た-form) + ほうがいい / Verb (ない-form) + ほうがいい',
    links: [],
    examples: [
      { japanese: '早く病院に行ったほうがいいですよ。', romaji: 'Hayaku byouin ni itta hou ga ii desu yo.', english: 'You should go to the hospital soon.' },
      { japanese: '遅くまで起きていないほうがいい。', romaji: 'Osoku made okite inai hou ga ii.', english: 'You\'d better not stay up late.' }
    ],
    notes: 'Using ほうがいい with た-form (past) implies stronger advice ("you really should"), while using it with the dictionary form or ない-form is slightly softer. It is commonly taught as an advice structure.'
  },
  {
    id: 'n5-ichiban',
    name: '一番〜',
    romaji: 'ichiban',
    level: 'N5',
    description: '一番 (いちばん) means "the most", "the best", or "number one". It is placed before adjectives or adverbs to form the superlative degree in Japanese. Japanese does not inflect adjectives for superlatives; instead, 一番 is added.\n\nIt can also stand alone to mean "first" or "best" in general rankings. In questions, it appears with の中で (among ~) to specify the comparison group.',
    usage: '一番 + い-adj / 一番 + な-adj (な) + Noun',
    links: [],
    examples: [
      { japanese: 'クラスの中で田中さんが一番背が高い。', romaji: 'Kurasu no naka de Tanaka-san ga ichiban se ga takai.', english: 'Tanaka is the tallest in the class.' },
      { japanese: '日本で一番有名な山は富士山です。', romaji: 'Nihon de ichiban yuumei na yama wa Fujisan desu.', english: 'The most famous mountain in Japan is Mt. Fuji.' }
    ],
    notes: 'Superlative comparisons often use 〜の中で一番〜 (the most ~ among/in ~). For "least", use 一番〜ない or 最も〜ない. 最も (mottomo) is the more formal/literary equivalent.'
  },
  {
    id: 'n5-kata',
    name: '〜方',
    romaji: '〜kata',
    level: 'N5',
    description: '〜方 (かた) is attached to the masu-stem of verbs to mean "the way of doing ~" or "how to do ~". It nominalizes the verb phrase, turning it into a noun that refers to the method or manner of the action.\n\nThis construction is essential for asking or explaining how things are done. It often pairs with 教える (to teach/explain) or 知る (to know).',
    usage: 'Verb (ます-stem) + 方',
    links: [],
    examples: [
      { japanese: 'この料理の作り方を教えてください。', romaji: 'Kono ryouri no tsukurikata wo oshiete kudasai.', english: 'Please teach me how to make this dish.' },
      { japanese: '漢字の書き方がまだわかりません。', romaji: 'Kanji no kakikata ga mada wakarimasen.', english: 'I still don\'t know how to write kanji.' }
    ],
    notes: '方 can also mean "direction" (あちらの方 = that direction) or "person" (honorific: 先生の方 = the teacher). In the grammar construction 〜方, it specifically means "method/way" and is always read かた.'
  },
  {
    id: 'n5-kedo',
    name: '〜けど・けれども',
    romaji: '〜kedo / keredomo',
    level: 'N5',
    description: 'けど (casual) and けれども (formal) are conjunctions meaning "but", "however", or "although". They connect two clauses where the second contrasts with or qualifies the first. けれど is a mid-register form. All three can appear mid-sentence or at the end of a sentence.\n\nWhen used at the end of a sentence (ちょっと難しいんですけど…), they create a softened, expectant tone — implying an unstated consequence or request. This is very common in polite, indirect Japanese communication.',
    usage: '[Clause 1] + けど/けれど/けれども + [Clause 2]',
    links: [],
    examples: [
      { japanese: '行きたいけど、時間がない。', romaji: 'Ikitai kedo, jikan ga nai.', english: 'I want to go, but I don\'t have time.' },
      { japanese: '高いけれども、買います。', romaji: 'Takai keredomo, kaimasu.', english: 'It\'s expensive, but I\'ll buy it.' }
    ],
    notes: 'Register: けど (casual) → けれど (neutral) → けれども (formal) → が (very formal/written). All mean "but". The trailing use (〜ですけど…) is a softening strategy in Japanese to avoid being too direct.'
  },
  {
    id: 'n5-mada',
    name: 'まだ',
    romaji: 'mada',
    level: 'N5',
    description: 'まだ means "still" in affirmative sentences, indicating that a state or action is continuing. In negative sentences, it means "not yet", indicating that an expected action has not happened. It is one of the most fundamental adverbs in Japanese.\n\nWith the progressive form (〜ている), まだ + 〜ている means "still doing ~". With a negative verb, まだ + 〜ていない means "haven\'t done ~ yet".',
    usage: 'まだ + Verb (affirmative/negative)',
    links: [],
    examples: [
      { japanese: '彼女はまだ寝ています。', romaji: 'Kanojo wa mada nete imasu.', english: 'She is still sleeping.' },
      { japanese: '宿題がまだ終わっていません。', romaji: 'Shukudai ga mada owatte imasen.', english: 'I haven\'t finished my homework yet.' }
    ],
    notes: 'Contrast: まだ (still/not yet) vs もう (already/anymore). まだ〜ている = still doing; もう〜た = already done; もう〜ない = not anymore. These four combinations are tested frequently at N5.'
  },
  {
    id: 'n5-mou',
    name: 'もう',
    romaji: 'mou',
    level: 'N5',
    description: 'もう has two related meanings depending on polarity. In affirmative sentences, it means "already" — the action is complete. In negative sentences, it means "not anymore" or "no longer" — the state has ceased.\n\nもう can also express frustration or exasperation (もう！= Ugh! / Enough!), and in some contexts means "another" or "one more" (もう一つ = one more).',
    usage: 'もう + Verb (plain or negative)',
    links: [],
    examples: [
      { japanese: 'もう食べました。', romaji: 'Mou tabemashita.', english: 'I already ate.' },
      { japanese: 'もう疲れた。もうできない。', romaji: 'Mou tsukareta. Mou dekinai.', english: 'I\'m already tired. I can\'t do it anymore.' }
    ],
    notes: 'もう vs まだ: もう〜た = already done; まだ〜ていない = not done yet. もう〜ない = no longer ~; まだ〜ている = still ~. Also: もう少し (a little more), もう一度 (one more time).'
  },
  {
    id: 'n5-naide',
    name: '〜ないで',
    romaji: '〜naide',
    level: 'N5',
    description: '〜ないで has two primary uses. First, it means "without doing ~" — describing an action performed without a preceding action (朝ごはんを食べないで学校へ行った = went to school without eating breakfast). Second, when followed by ください, it makes a negative request: "please don\'t ~".\n\nThe negative te-form ないで connects clauses or ends a sentence. It is distinct from ずに (more formal/literary "without doing") and なくて (which focuses on state rather than action).',
    usage: 'Verb (ない-form) + で / Verb (ない-form) + でください',
    links: [],
    examples: [
      { japanese: '傘を持たないで出かけてしまった。', romaji: 'Kasa wo motanaide dekakete shimatta.', english: 'I went out without bringing an umbrella.' },
      { japanese: 'ここで写真を撮らないでください。', romaji: 'Koko de shashin wo toranaide kudasai.', english: 'Please don\'t take photos here.' }
    ],
    notes: 'ないで vs なくて: ないで is used to connect actions (without doing A, do B) or make negative requests. なくて connects states or gives reasons (because I don\'t have time, I can\'t go).'
  },
  {
    id: 'n5-node',
    name: '〜ので',
    romaji: '〜node',
    level: 'N5',
    description: 'ので is a reason/cause conjunction meaning "because" or "so". It states an objective, natural reason for the result in the following clause. Compared to から, ので sounds more polite and less assertive, making it the preferred choice in formal contexts.\n\nのでlinks two clauses where the first gives the reason and the second gives the result. Both clauses are by the same speaker, and the reason is presented as a natural, socially accepted explanation.',
    usage: 'Verb (plain) + ので / い-adj + ので / な-adj + なので / Noun + なので',
    links: [],
    examples: [
      { japanese: '雨が降っているので、出かけません。', romaji: 'Ame ga futte iru node, dekakemasen.', english: 'Since it\'s raining, I won\'t go out.' },
      { japanese: '試験があるので、勉強しなければなりません。', romaji: 'Shiken ga aru node, benkyou shinakereba narimasen.', english: 'Because there is an exam, I have to study.' }
    ],
    notes: 'ので vs から: ので sounds more polite, objective, and natural; から sounds more direct and subjective. In formal apologies or explanations, ので is strongly preferred. Both can begin subordinate clauses.'
  },
  {
    id: 'n5-noda',
    name: '〜のだ・〜んだ',
    romaji: '〜noda / 〜nda',
    level: 'N5',
    description: 'のだ (formal) / んだ (spoken contraction) is an explanatory or expressive ending added to plain-form clauses. It has several functions: (1) giving an explanation or justification ("the thing is, ~"), (2) seeking an explanation ("why is it that ~?"), (3) emphasizing a fact with emotional coloring.\n\nIn spoken Japanese, のだ contracts to んだ (men) or のです to んです (polite). It is extremely frequent in natural conversation, making it one of the most important structures to master.',
    usage: 'Verb (plain) + んだ/のだ / い-adj + んだ / な-adj + なんだ / Noun + なんだ',
    links: [],
    examples: [
      { japanese: '実は、明日引っ越すんです。', romaji: 'Jitsu wa, ashita hikkosunda desu.', english: 'The truth is, I\'m moving tomorrow.' },
      { japanese: 'どうして遅刻したんですか。', romaji: 'Doushite chikoku shita ndesu ka.', english: 'Why is it that you were late?' }
    ],
    notes: 'のだ in questions (〜んですか / のですか) asks for an explanation or shows interest/concern. In statements it provides one. Context distinguishes whether the speaker is explaining or questioning.'
  },
  {
    id: 'n5-mieru',
    name: '〜が見える',
    romaji: '〜ga mieru',
    level: 'N5',
    description: '見える (みえる) means "to be visible" or "to be able to see" — it describes something coming into view or being perceptible without deliberate effort. The thing that is seen is marked with が, not を. Unlike 見る (to look at/watch, deliberate action), 見える is a potential/stative verb.\n\nA secondary meaning of 見える is "to appear" or "to seem" — giving a subjective impression: 彼は若く見える (He looks young). This usage expresses appearance, not necessarily reality.',
    usage: 'Noun + が + 見える / Noun + に + 見える (appears as)',
    links: [],
    examples: [
      { japanese: 'ここから山が見えます。', romaji: 'Koko kara yama ga miemasu.', english: 'You can see the mountains from here.' },
      { japanese: '彼女は年より若く見える。', romaji: 'Kanojo wa toshi yori wakaku mieru.', english: 'She looks younger than her age.' }
    ],
    notes: '見える (mieru) = can be seen/looks like (spontaneous perception) vs 見る (miru) = to look/watch (deliberate). Similarly: 聞こえる = can be heard vs 聞く = to listen. These pairs are important at N5.'
  },
  {
    id: 'n5-kikoeru',
    name: '〜が聞こえる',
    romaji: '〜ga kikoeru',
    level: 'N5',
    description: '聞こえる (きこえる) means "to be audible" or "to be able to hear" — it describes sound reaching the listener without deliberate effort. The sound is marked with が. It is the spontaneous counterpart to 聞く (to listen/ask, deliberate action).\n\nLike 見える, 聞こえる can also mean "to sound like" or "to come across as": 変に聞こえるかもしれませんが (This might sound strange, but…). This usage describes how something is perceived acoustically.',
    usage: 'Noun + が + 聞こえる',
    links: [],
    examples: [
      { japanese: '外から子どもたちの声が聞こえる。', romaji: 'Soto kara kodomo-tachi no koe ga kikoeru.', english: 'I can hear the children\'s voices from outside.' },
      { japanese: '遠くで音楽が聞こえました。', romaji: 'Tooku de ongaku ga kikoemashita.', english: 'I could hear music in the distance.' }
    ],
    notes: '聞こえる (kikoeru) = can be heard/sounds like (spontaneous) vs 聞く (kiku) = to listen/hear deliberately or to ask. Compare the pair: 見える/見る :: 聞こえる/聞く. Both 見える and 聞こえる take が for the perceived object.'
  },
  {
    id: 'n5-ka-ka',
    name: '〜か〜か',
    romaji: '〜ka 〜ka',
    level: 'N5',
    description: 'か〜か is used to present alternatives or choices, meaning "A or B", "whether A or B". It connects two options (nouns, verb phrases, or adjective phrases) and is used in questions, indirect questions, and expressions of uncertainty.\n\nWhen used in embedded questions (indirect questions), the entire か〜か clause acts as a noun phrase. In direct questions it simply lists options for the listener to choose.',
    usage: 'Noun + か + Noun + か / Verb (plain) + か + Verb (plain) + か',
    links: [],
    examples: [
      { japanese: 'コーヒーか紅茶か、どちらにしますか。', romaji: 'Koohii ka koucha ka, dochira ni shimasu ka.', english: 'Coffee or tea — which will you have?' },
      { japanese: '行くか行かないか、まだ決めていません。', romaji: 'Iku ka ikanai ka, mada kimete imasen.', english: 'I haven\'t decided yet whether to go or not.' }
    ],
    notes: 'The pattern か〜か in embedded questions (indirect questions) is distinct from its use in direct questions. In indirect questions it forms a noun clause: 行くかどうか分かりません (I don\'t know whether I\'ll go). かどうか is a simplified form of か〜か that is used with a single option.'
  }
]

// Merge: add only entries whose id doesn't already exist
let added = 0
for (const entry of newEntries) {
  if (!data.find(e => e.id === entry.id)) {
    data.push(entry)
    added++
  }
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8')
console.log(`Done. Added ${added} new N5 entries. Total entries: ${data.length}`)
