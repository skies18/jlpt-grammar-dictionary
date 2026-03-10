const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '../src/data/grammar.json')
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))

const newEntries = [
  {
    id: 'n3-darake',
    name: '〜だらけ',
    romaji: '〜darake',
    level: 'N3',
    description: 'だらけ is a suffix attached to nouns meaning "full of ~", "covered with ~", or "riddled with ~". It conveys a sense that something is undesirably or excessively filled with the noun. It always carries a negative nuance — used for things like mistakes, mud, or problems that you would rather not have.\n\nだらけ follows nouns directly without any particle. It cannot be used for positive things (you would not say 花だらけ = "full of flowers" unless complaining). The resulting phrase functions like a な-adjective or noun modifier.',
    usage: 'Noun + だらけ',
    links: [],
    examples: [
      { japanese: 'このレポートは間違いだらけだ。', romaji: 'Kono repooto wa machigai darake da.', english: 'This report is full of mistakes.' },
      { japanese: '公園で遊んで、子どもが泥だらけになった。', romaji: 'Kouen de asonde, kodomo ga doro darake ni natta.', english: 'After playing in the park, the child became covered in mud.' }
    ],
    notes: 'だらけ always implies an undesirable excess. Compare: まみれ (smeared with, physical coating) vs だらけ (riddled with, general excess). 血まみれ (covered in blood — smeared) vs 間違いだらけ (full of mistakes). Also compare: ずくめ (all ~, positive or neutral) vs だらけ (negative excess).'
  },
  {
    id: 'n3-gachi',
    name: '〜がち',
    romaji: '〜gachi',
    level: 'N3',
    description: 'がち is a suffix meaning "tend to ~", "apt to ~", or "prone to ~". It indicates a habitual tendency, particularly one that is undesirable or that happens more than expected. It can be attached to verb masu-stems or nouns.\n\nがち describes a pattern of behavior or a recurring state, not a one-time occurrence. The resulting form functions as a な-adjective or noun modifier (がちな人 = a person prone to ~).',
    usage: 'Verb (ます-stem) + がち / Noun + がち',
    links: [],
    examples: [
      { japanese: '忙しいとき、食事を抜きがちです。', romaji: 'Isogashii toki, shokuji wo nukigachi desu.', english: 'When I\'m busy, I tend to skip meals.' },
      { japanese: '冬は病気がちになる。', romaji: 'Fuyu wa byouki gachi ni naru.', english: 'In winter, I tend to get sick.' }
    ],
    notes: 'がち vs っぽい vs やすい: がち = habitual tendency (usually undesirable); っぽい = seems like/characteristic of (N3); やすい = easy to do, tendency to happen (N4). 忘れがち (tends to forget) vs 忘れやすい (easy to forget, design fault).'
  },
  {
    id: 'n3-buri-ni',
    name: '〜ぶりに',
    romaji: '〜buri ni',
    level: 'N3',
    description: 'ぶりに is used with time expressions to mean "for the first time in ~" or "after a gap of ~". It indicates that something is happening again after a specified interval. The time period before ぶりに shows how long it has been since the last occurrence.\n\nぶりに is always used with a time period noun (years, months, days, etc.) and can only refer to events that are happening again — not first-time occurrences.',
    usage: 'Time period + ぶりに + Verb',
    links: [],
    examples: [
      { japanese: '五年ぶりに故郷に帰った。', romaji: 'Gonen buri ni furusato ni kaetta.', english: 'I returned to my hometown for the first time in five years.' },
      { japanese: '久しぶりに旧友と会った。', romaji: 'Hisashiburi ni kyuuyuu to atta.', english: 'I met an old friend for the first time in a long time.' }
    ],
    notes: '久しぶり (hisashiburi) = "long time no see / after a long time" is a special case that doesn\'t include a specific time period but is extremely common in everyday conversation. ぶりに is always for something repeating, never for a first occurrence.'
  },
  {
    id: 'n3-gimi',
    name: '〜気味',
    romaji: '〜gimi',
    level: 'N3',
    description: '気味 (ぎみ) is a suffix meaning "a feeling of ~", "a touch of ~", or "slightly ~". It indicates a mild or early-stage manifestation of a condition, feeling, or quality. It is often used for health conditions or psychological states that are beginning to appear.\n\n気味 is attached to verb masu-stems or nouns. The resulting expression is more subtle than the full condition: 風邪気味 (a bit of a cold, feeling like you might be getting sick) is milder than 風邪 (having a cold).',
    usage: 'Verb (ます-stem) + 気味 / Noun + 気味',
    links: [],
    examples: [
      { japanese: '最近、疲れ気味です。', romaji: 'Saikin, tsukare gimi desu.', english: 'I\'ve been feeling a bit tired lately.' },
      { japanese: '風邪気味なので、今日は早く寝ます。', romaji: 'Kaze gimi na node, kyou wa hayaku nemasu.', english: 'I\'m feeling a bit under the weather, so I\'ll go to bed early today.' }
    ],
    notes: '気味 tends to describe slightly negative conditions. 太り気味 (slightly overweight), 遅れ気味 (running a little late), 曇り気味 (somewhat cloudy). It softens the description, making it less severe than stating the full condition.'
  },
  {
    id: 'n3-furi-wo-suru',
    name: '〜ふりをする',
    romaji: '〜furi wo suru',
    level: 'N3',
    description: 'ふりをする means "to pretend to ~", "to act as if ~", or "to feign ~". ふり (振り) is a noun meaning "pretense" or "appearance", and the whole pattern says that the subject is acting as though something is the case when it is not.\n\nThe verb before ふりをする is in plain form (dictionary form for present, た-form for past pretense). It can also be used with nouns and adjectives.',
    usage: 'Verb (plain) + ふりをする / Noun + の + ふりをする / な-adj + な + ふりをする',
    links: [],
    examples: [
      { japanese: '彼は私の話を聞いているふりをした。', romaji: 'Kare wa watashi no hanashi wo kiite iru furi wo shita.', english: 'He pretended to be listening to what I was saying.' },
      { japanese: '知らないふりをしていた。', romaji: 'Shiranai furi wo shite ita.', english: 'I was pretending not to know.' }
    ],
    notes: 'ふりをする vs らしく振る舞う: ふりをする implies deliberate pretense/deception; らしく振る舞う means "to behave like / act appropriately as". ふり can also appear in ふりをして + action: 寝ているふりをして聞いた (pretended to sleep and listened).'
  },
  {
    id: 'n3-doushitemo',
    name: 'どうしても',
    romaji: 'doushitemo',
    level: 'N3',
    description: 'どうしても is an adverb with two contrasting meanings depending on sentence polarity. With affirmative predicates, it means "no matter what", "by all means", "absolutely" — expressing strong determination or inevitability. With negative predicates, it means "no matter what I try, I can\'t ~" — expressing inability despite effort.\n\nどうしても emphasizes that the outcome is inevitable or that the speaker\'s desire is very strong. It cannot be shortened or casually altered.',
    usage: 'どうしても + Verb (affirmative or negative)',
    links: [],
    examples: [
      { japanese: 'どうしても合格したいので、毎日勉強しています。', romaji: 'Doushitemo goukaku shitai node, mainichi benkyou shite imasu.', english: 'I absolutely want to pass, so I study every day.' },
      { japanese: 'その漢字がどうしても覚えられない。', romaji: 'Sono kanji ga doushitemo oboerarenai.', english: 'I just can\'t memorize that kanji no matter what I do.' }
    ],
    notes: 'どうしても + affirmative = strong resolve ("no matter what, I will"); どうしても + negative = inability/impossibility despite effort ("try as I might, I can\'t"). This dual nature is an important distinction for reading comprehension.'
  },
  {
    id: 'n3-tabi-ni',
    name: '〜たびに',
    romaji: '〜tabi ni',
    level: 'N3',
    description: 'たびに means "every time ~", "whenever ~", or "each time ~". It indicates that the main clause action happens consistently each time the preceding event or condition occurs. It expresses a reliable, repeatable connection between two events.\n\nたびに follows dictionary-form verbs or nouns + の. The result in the main clause is usually a recurring feeling, habit, or outcome. It implies some degree of regularity.',
    usage: 'Verb (dictionary form) + たびに / Noun + の + たびに',
    links: [],
    examples: [
      { japanese: '日本に来るたびに、新しい発見がある。', romaji: 'Nihon ni kuru tabi ni, atarashii hakken ga aru.', english: 'Every time I come to Japan, I make new discoveries.' },
      { japanese: '失敗のたびに、また頑張ろうと思う。', romaji: 'Shippai no tabi ni, mata ganbarou to omou.', english: 'Every time I fail, I think I\'ll try again.' }
    ],
    notes: 'たびに vs ごとに: たびに emphasizes the repeated occasion ("each time X happens"); ごとに is more regularly systematic ("every X"). 電車に乗るたびに (every time I ride the train) vs 一時間ごとに (every hour). ごとに is more mechanical; たびに more event-driven.'
  },
  {
    id: 'n3-to-iu-koto',
    name: '〜ということ',
    romaji: '〜to iu koto',
    level: 'N3',
    description: 'ということ (often contracted to ってこと in casual speech) nominalizes a clause and means "the fact that ~", "that ~", "meaning that ~". It is used to refer to a fact, idea, or situation as a noun phrase — often to explain, emphasize, or confirm what has been said.\n\nということは leads to a conclusion: "that means ~" / "so that means ~". It is extremely common in spoken Japanese when confirming understanding or drawing inferences from information.',
    usage: 'Verb/い-adj (plain) + ということ / な-adj + だということ / Noun + だということ',
    links: [],
    examples: [
      { japanese: '合格したということは、努力が実ったということだ。', romaji: 'Goukaku shita to iu koto wa, doryoku ga minotta to iu koto da.', english: 'The fact that I passed means my efforts paid off.' },
      { japanese: '電車が止まっているということは、事故があったのかもしれない。', romaji: 'Densha ga tomatte iru to iu koto wa, jiko ga atta no kamo shirenai.', english: 'The fact that the train has stopped may mean there was an accident.' }
    ],
    notes: 'ということ can wrap entire sentences as noun clauses for embedding. ということは (at the start of a sentence) = "that means" / "which means". Casual: ってこと (in speech). Compare: のこと (about ~) vs ということ (the fact that ~).'
  },
  {
    id: 'n3-to-iu-yori',
    name: '〜というより',
    romaji: '〜to iu yori',
    level: 'N3',
    description: 'というより means "rather than saying ~", "more than ~", or "it\'s not so much ~ as it is ~". It corrects or refines a description, suggesting that the second description is more accurate or fitting than the first one given.\n\nIt is used when the speaker wants to nuance or replace a previous statement with something they consider more precise. Often the speaker is correcting their own or another\'s word choice.',
    usage: 'Noun/Verb/Adj (plain) + というより + (more accurate description)',
    links: [],
    examples: [
      { japanese: '彼は怒っているというより、悲しんでいる。', romaji: 'Kare wa okotte iru to iu yori, kanashinde iru.', english: 'Rather than being angry, he is sad.' },
      { japanese: 'これは趣味というより、もはや仕事だ。', romaji: 'Kore wa shumi to iu yori, mohaya shigoto da.', english: 'This is no longer a hobby — it\'s basically a job.' }
    ],
    notes: 'というより connects two descriptions and subordinates the first to the second. Compare: 〜より (simple comparison: A more than B) vs というより (correction: not so much A, but rather B). The first element is the rejected or insufficient description.'
  },
  {
    id: 'n3-to-itte-mo',
    name: '〜といっても',
    romaji: '〜to itte mo',
    level: 'N3',
    description: 'といっても means "even though I say ~", "although ~ may be said", or "even if we call it ~". It acknowledges that a statement sounds a certain way but immediately qualifies or limits it, preventing misunderstanding or exaggeration.\n\nThe speaker uses それ that might create an expectation, then says といっても to qualify it: "I say I\'m studying, but it\'s only 30 minutes a day." It manages listener expectations.',
    usage: 'Verb/い-adj/な-adj/Noun (plain) + といっても',
    links: [],
    examples: [
      { japanese: '毎日運動しているといっても、10分程度です。', romaji: 'Mainichi undou shite iru to itte mo, juppun teido desu.', english: 'Even though I say I exercise every day, it\'s only about 10 minutes.' },
      { japanese: '日本語が話せるといっても、まだ初心者です。', romaji: 'Nihongo ga hanaseru to itte mo, mada shoshinsha desu.', english: 'Even though I can speak Japanese, I\'m still a beginner.' }
    ],
    notes: 'といっても is a softening/qualification tool. It prevents the listener from forming an inflated impression. Common structure: [Possibly impressive claim] + といっても + [limiting reality]. Contrast with 〜とはいえ (N2) which has a similar structure but more formal register.'
  },
  {
    id: 'n3-tokoro-ga',
    name: '〜ところが',
    romaji: '〜tokoro ga',
    level: 'N3',
    description: 'ところが is a conjunction meaning "however", "but", or "and yet". It introduces an unexpected or surprising contrast — the result that follows is contrary to what one would naturally expect from the preceding clause. Unlike でも or が, ところが places strong emphasis on the unexpected nature of the contrast.\n\nところが typically appears at the beginning of the second sentence or clause, and the contrast it introduces is often significant or emotionally impactful.',
    usage: '[Expected situation]. ところが、[unexpected result].',
    links: [],
    examples: [
      { japanese: '試験は難しいと思っていた。ところが、簡単だった。', romaji: 'Shiken wa muzukashii to omotte ita. Tokoro ga, kantan datta.', english: 'I thought the exam would be difficult. However, it was easy.' },
      { japanese: '傘を持ってきた。ところが、一度も雨が降らなかった。', romaji: 'Kasa wo motte kita. Tokoro ga, ichido mo ame ga furanakatta.', english: 'I brought an umbrella. But it didn\'t rain even once.' }
    ],
    notes: 'ところが (unexpected reversal) vs でも (simple contrast) vs けれども (mild contrast). ところが carries the strongest sense of "surprisingly, the opposite happened". It cannot be used when the contrast is mild or expected; only for genuinely surprising turns.'
  },
  {
    id: 'n3-to-naru-to',
    name: '〜となると',
    romaji: '〜to naru to',
    level: 'N3',
    description: 'となると means "when it comes to ~", "if that\'s the case", or "given that ~". It introduces a topic or condition and indicates what naturally follows — often a consequence, implication, or inference that flows logically from the situation stated before.\n\nとなると signals that the speaker is reasoning from a premise to a conclusion. It is often used to discuss implications or necessary next steps.',
    usage: 'Noun + となると / Verb (plain) + となると',
    links: [],
    examples: [
      { japanese: '来週が締め切りとなると、急がなければならない。', romaji: 'Raishu ga shimekiri to naru to, isoganakere ba naranai.', english: 'If next week is the deadline, then we have to hurry.' },
      { japanese: '彼が来ないとなると、計画を変える必要がある。', romaji: 'Kare ga konai to naru to, keikaku wo kaeru hitsuyou ga aru.', english: 'If he\'s not coming, we need to change our plans.' }
    ],
    notes: 'となると is used for logical inference from a situation, often triggering discussion of what must follow. Compare: となれば (more hypothetical: if it becomes ~) and となると (more concrete: given that it\'s the case that ~).'
  },
  {
    id: 'n3-ippou-de',
    name: '〜一方で',
    romaji: '〜ippou de',
    level: 'N3',
    description: '一方で (いっぽうで) means "on the other hand", "while ~", or "at the same time". It presents two contrasting or simultaneously true aspects of a situation. The first clause states one side; 一方で introduces the contrasting or complementary other side.\n\n一方だ (without で) is a different pattern meaning "keeps getting more ~" (unidirectional change). 一方で is specifically for simultaneous contrast or the two-sided presentation of a topic.',
    usage: 'Verb (plain) + 一方で / Noun + の一方で',
    links: [],
    examples: [
      { japanese: '都市化が進む一方で、農村は過疎化している。', romaji: 'Toshika ga susumu ippou de, nousen wa kasoka shite iru.', english: 'While urbanization progresses, rural areas are becoming depopulated.' },
      { japanese: '仕事を続ける一方で、資格の勉強もしています。', romaji: 'Shigoto wo tsuzukeru ippou de, shikaku no benkyou mo shite imasu.', english: 'While continuing to work, I am also studying for a qualification.' }
    ],
    notes: '一方で (on the other hand/while) vs 一方だ (keeps doing/continues in one direction). 価格が上がる一方だ (prices keep going up — unidirectional) vs 価格が上がる一方で、質が下がっている (prices go up, while quality goes down — two sides).'
  },
  {
    id: 'n3-ni-kagitte',
    name: '〜に限って',
    romaji: '〜ni kagitte',
    level: 'N3',
    description: '〜に限って means "only ~", "just ~" or more specifically carries an ironic nuance: "of all things/people, precisely ~". It is used to express that something happens specifically in the case of the noun mentioned — often in surprising, ironic, or unfortunate circumstances.\n\nA common use is to express that the case you hoped would be different is exactly the one where the unwanted thing happens: 大事な日に限って (just when it\'s an important day, of all days).',
    usage: 'Noun + に限って',
    links: [],
    examples: [
      { japanese: '大事な日に限って、電車が遅れる。', romaji: 'Daiji na hi ni kagitte, densha ga okureru.', english: 'Just when it\'s an important day, the train runs late.' },
      { japanese: 'うちの子に限って、そんなことはしない。', romaji: 'Uchi no ko ni kagitte, sonna koto wa shinai.', english: 'My child would never do such a thing. (Not my child!)' }
    ],
    notes: 'に限って often implies irony (Murphy\'s law type situations) or the speaker\'s conviction that a particular case is special/exempt. Compare: に限らず (not limited to); に限り (limited to, only for — without the irony).'
  },
  {
    id: 'n3-ni-kagirazu',
    name: '〜に限らず',
    romaji: '〜ni kagirazu',
    level: 'N3',
    description: 'に限らず means "not limited to ~", "not only ~", or "regardless of ~". It indicates that what follows is true beyond the specific noun mentioned — extending the scope to a broader range. It is the opposite of に限り (limited to).\n\nに限らず commonly appears with specific groups, locations, or conditions as the noun, expanding the statement to include more than just that one case.',
    usage: 'Noun + に限らず',
    links: [],
    examples: [
      { japanese: '日本に限らず、世界中でこの問題が起きている。', romaji: 'Nihon ni kagirazu, sekaijuu de kono mondai ga okite iru.', english: 'Not limited to Japan, this problem is occurring throughout the world.' },
      { japanese: '子どもに限らず、大人もこのゲームを楽しんでいる。', romaji: 'Kodomo ni kagirazu, otona mo kono geemu wo tanoshinde iru.', english: 'Not just children, but adults also enjoy this game.' }
    ],
    notes: 'に限らず vs だけでなく: both mean "not only ~". に限らず is slightly more formal; だけでなく is more conversational. に限らず typically expands from a specific group outward, while だけでなく can add items more freely.'
  },
  {
    id: 'n3-ni-shitagatte',
    name: '〜に従って',
    romaji: '〜ni shitagatte',
    level: 'N3',
    description: 'に従って has two related meanings. (1) "In accordance with ~", "following ~" — acting in compliance with rules, instructions, or orders. (2) "As ~ progresses" / "proportionally with ~" — indicating that as one thing changes, another changes accordingly, like 〜につれて.\n\nWhen expressing compliance, the noun before に従って is a rule, order, or guide. When expressing proportional change, it is more like "as time passes" or "as practice increases".',
    usage: 'Noun + に従って / Verb (dictionary) + に従って',
    links: [],
    examples: [
      { japanese: '規則に従って行動してください。', romaji: 'Kisoku ni shitagatte koudou shite kudasai.', english: 'Please act in accordance with the rules.' },
      { japanese: '練習するに従って、上手になっていった。', romaji: 'Renshuu suru ni shitagatte, jouzu ni natte itta.', english: 'As I practiced, I kept getting better.' }
    ],
    notes: 'に従って (following/proportional) vs に基づいて (based on) vs に沿って (along with/in line with). に従って implies following a directive or changing proportionally; に基づいて means grounded in a basis or foundation.'
  },
  {
    id: 'n3-ni-tsurete',
    name: '〜につれて',
    romaji: '〜ni tsurete',
    level: 'N3',
    description: 'につれて means "as ~" or "in proportion to ~". It expresses that as one thing changes or progresses, another thing changes correspondingly. Both changes happen simultaneously and in the same direction (both increase, or one increases as the other decreases).\n\nThe clause before につれて is typically a verb (dictionary form) or noun expressing a progressive change. The main clause shows the resulting change.',
    usage: 'Verb (dictionary) + につれて / Noun + につれて',
    links: [],
    examples: [
      { japanese: '年をとるにつれて、記憶力が落ちてきた。', romaji: 'Toshi wo toru ni tsurete, kiokuryoku ga ochite kita.', english: 'As I grew older, my memory started to decline.' },
      { japanese: '技術の発展につれて、生活が便利になった。', romaji: 'Gijutsu no hatten ni tsurete, seikatsu ga benri ni natta.', english: 'As technology developed, life became more convenient.' }
    ],
    notes: 'につれて vs にしたがって: both mean "as ~ progresses". につれて emphasizes parallel/proportional change; にしたがって can also mean "following instructions". Both typically require a progressive/ongoing change, not a one-time event.'
  },
  {
    id: 'n3-nomi',
    name: '〜のみ',
    romaji: '〜nomi',
    level: 'N3',
    description: 'のみ is a formal/literary equivalent of だけ, meaning "only", "just", or "alone". It restricts scope to the noun or clause it follows, excluding everything else. Unlike だけ, のみ is rarely used in casual conversation and is more common in written language, official announcements, and formal registers.\n\nのみならず ("not only") and のみで ("only with") are common extensions. のみ can follow verbs (dictionary form + のみ) in formal writing.',
    usage: 'Noun + のみ / Verb (dictionary) + のみ',
    links: [],
    examples: [
      { japanese: '関係者のみ入場できます。', romaji: 'Kankeisha nomi nyuujou dekimasu.', english: 'Only authorized personnel may enter.' },
      { japanese: '残るのみとなった問題を解決しなければならない。', romaji: 'Nokoru nomi to natta mondai wo kaiketsu shinakereba naranai.', english: 'We must resolve the only remaining issue.' }
    ],
    notes: 'のみ (formal written) = だけ (casual spoken). In formal contexts such as signs, legal documents, and academic writing, のみ is strongly preferred over だけ. のみならず (not only ~, but also ~) is a common N2 expression derived from this.'
  },
  {
    id: 'n3-tsutsu',
    name: '〜つつ',
    romaji: '〜tsutsu',
    level: 'N3',
    description: 'つつ has two uses. (1) "While ~" — indicating two actions happening simultaneously, similar to ながら but more formal/literary. (2) "Even though ~" or "despite ~" — often written つつも — expressing contrast between awareness/feeling and action (knowing something is wrong, yet still doing it).\n\nつつ is formal and appears in written language, literary texts, and formal speeches. In everyday conversation, ながら (simultaneous) or のに/けど (contrast) are more natural.',
    usage: 'Verb (ます-stem) + つつ / Verb (ます-stem) + つつも',
    links: [],
    examples: [
      { japanese: '音楽を聴きつつ、勉強する。', romaji: 'Ongaku wo kikitsutsu, benkyou suru.', english: 'I study while listening to music.' },
      { japanese: '悪いと知りつつも、つい食べ過ぎてしまう。', romaji: 'Warui to shiritsutsu mo, tsui tabesugi te shimau.', english: 'Even knowing it\'s bad for me, I end up overeating.' }
    ],
    notes: 'つつ vs ながら: both mean "while doing". ながら is casual and common; つつ is formal/literary. つつも (despite) is an important nuance — it shows the speaker acknowledges something is wrong yet continues anyway. Common in confessional or introspective statements.'
  },
  {
    id: 'n3-kekka',
    name: '〜の結果',
    romaji: '〜no kekka',
    level: 'N3',
    description: '結果 (けっか) means "result" or "as a result of ~". When used as a grammar pattern (〜の結果 or Verb + 結果), it expresses that the main clause is the outcome of the preceding action or process. It is used in both positive and negative outcomes.\n\nThe construction can follow a nominalized verb phrase (〜した結果), a noun (努力の結果 = as a result of effort), and often connects to a conclusion or final state.',
    usage: 'Verb (た-form) + 結果 / Noun + の結果',
    links: [],
    examples: [
      { japanese: '長い間話し合った結果、計画を変更することにした。', romaji: 'Nagai aida hanashiatta kekka, keikaku wo henkou suru koto ni shita.', english: 'As a result of a long discussion, we decided to change the plan.' },
      { japanese: '努力の結果、試験に合格できた。', romaji: 'Doryoku no kekka, shiken ni goukaku dekita.', english: 'As a result of my efforts, I was able to pass the exam.' }
    ],
    notes: '結果 vs 末に: both follow a process and lead to an outcome. 結果 is neutral and factual; 末に (sue ni, N1) implies a long or difficult process with an emotional weight to the conclusion. 話し合った末に (after much deliberation) is more dramatic than 話し合った結果 (as a result of the discussion).'
  }
]

let added = 0
for (const entry of newEntries) {
  if (!data.find(e => e.id === entry.id)) {
    data.push(entry)
    added++
  }
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8')
console.log(`Done. Added ${added} new N3 entries. Total entries: ${data.length}`)
