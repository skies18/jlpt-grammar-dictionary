const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '../src/data/grammar.json')
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))

const newEntries = [
  {
    id: 'n4-amari-nai',
    name: '〜あまり〜ない',
    romaji: '〜amari 〜nai',
    level: 'N4',
    description: 'あまり〜ない means "not very ~", "not much", or "not all that ~". It is used to express that something is below a normal or expected degree. The negative verb or adjective follows あまり.\n\nNote the difference from the N3 usage of あまり (without negation), which means "so much that / too ~" (leading to an unexpected result). At N4, the pattern always requires a negative predicate.',
    usage: 'あまり + Verb (negative) / あまり + い-adj + くない / あまり + な-adj + ではない',
    links: [],
    examples: [
      { japanese: '最近あまり運動していません。', romaji: 'Saikin amari undou shite imasen.', english: 'I haven\'t been exercising much lately.' },
      { japanese: 'この映画はあまり面白くなかった。', romaji: 'Kono eiga wa amari omoshirokunakatta.', english: 'This movie wasn\'t very interesting.' }
    ],
    notes: 'あまり vs 全然(ぜんぜん): あまり〜ない = not very/much (partial negation); 全然〜ない = not at all (total negation). あまりにも (N3) = excessively, too much — used with affirmative predicates.'
  },
  {
    id: 'n4-baai-wa',
    name: '〜場合は',
    romaji: '〜baai wa',
    level: 'N4',
    description: '場合は (ばあいは) means "in the case of ~", "in the event that ~", or "if ~". It introduces a hypothetical or specific situation and states what should or does happen under those circumstances. It is more formal than the conditional と or たら.\n\n場合 can be preceded by a noun + の, a verb or adjective in plain form, or a noun phrase. It is frequently used in instructions, manuals, and business communication.',
    usage: 'Verb (plain) + 場合は / Noun + の場合は / な-adj + な場合は',
    links: [],
    examples: [
      { japanese: '緊急の場合は、このボタンを押してください。', romaji: 'Kinkyuu no baai wa, kono botan wo oshite kudasai.', english: 'In case of an emergency, please press this button.' },
      { japanese: '参加できない場合は、事前に連絡してください。', romaji: 'Sanka dekinai baai wa, jizen ni renraku shite kudasai.', english: 'If you cannot attend, please contact us in advance.' }
    ],
    notes: 'Compare: 場合は (situation/condition) vs たら (after event, if). 場合は is more formal and often found in written or official instructions. 〜ない場合は (if not ~) is a common variant.'
  },
  {
    id: 'n4-dasu',
    name: '〜出す',
    romaji: '〜dasu',
    level: 'N4',
    description: '出す (だす) as a compound verb suffix means "to start ~" or "to begin ~ suddenly". It attaches to the masu-stem of another verb and indicates the abrupt or spontaneous beginning of an action, often one that is difficult to stop once started.\n\nUnlike 始める (to begin, often deliberate and planned), 出す conveys a sudden or uncontrolled onset. It is commonly used with actions like crying (泣き出す), running (走り出す), or laughing (笑い出す).',
    usage: 'Verb (ます-stem) + 出す',
    links: [],
    examples: [
      { japanese: '突然、子どもが泣き出した。', romaji: 'Totsuzen, kodomo ga nakidashita.', english: 'Suddenly, the child started crying.' },
      { japanese: '映画が始まると、彼女は笑い出した。', romaji: 'Eiga ga hajimaru to, kanojo wa waraidashita.', english: 'When the movie started, she burst out laughing.' }
    ],
    notes: '出す vs 始める: 出す suggests sudden, spontaneous, or involuntary onset; 始める implies a deliberate, planned start. 走り出す (burst into running) vs 走り始める (start running deliberately). Both attach to the masu-stem.'
  },
  {
    id: 'n4-garu',
    name: '〜がる・〜がっている',
    romaji: '〜garu / 〜gatte iru',
    level: 'N4',
    description: 'がる is attached to the stems of emotion-expressing adjectives (い-adj or な-adj) to mean "to show signs of feeling ~", "to seem to feel ~", or "to act as if ~". It turns a subjective feeling into an observable behavior.\n\nBecause Japanese considers it presumptuous to directly state another person\'s internal feelings, がる is used when describing how others appear to feel. The progressive form がっている describes an ongoing observable state. First-person use is rare.',
    usage: 'い-adj (remove い) + がる / な-adj stem + がる',
    links: [],
    examples: [
      { japanese: '弟は新しいゲームをほしがっている。', romaji: 'Otouto wa atarashii geemu wo hoshigatte iru.', english: 'My younger brother seems to want a new game.' },
      { japanese: '彼女は発表をとても怖がっていた。', romaji: 'Kanojo wa happyou wo totemo kowagatte ita.', english: 'She seemed very scared of the presentation.' }
    ],
    notes: 'Common adjective + がる: 欲しがる (seem to want), 怖がる (seem to be scared), 嫌がる (seem to dislike), 悲しがる (seem sad), 喜ぶ is already a verb so doesn\'t use がる. がり as a noun means "tendency" (寂しがり = lonely type).'
  },
  {
    id: 'n4-ka-dou-ka',
    name: '〜かどうか',
    romaji: '〜ka dou ka',
    level: 'N4',
    description: 'かどうか means "whether or not ~". It embeds a yes/no question as a noun clause, which can then function as the subject or object of the sentence. It is the standard way to express uncertainty or indirect yes/no questions in Japanese.\n\nかどうか is more specific than か〜か (A or B?) because it always involves a single fact with two possible answers: yes or no. The clause before かどうか is always in plain form.',
    usage: 'Verb (plain) + かどうか / い-adj + かどうか / な-adj + かどうか / Noun + かどうか',
    links: [],
    examples: [
      { japanese: '彼が来るかどうか分かりません。', romaji: 'Kare ga kuru ka dou ka wakarimasen.', english: 'I don\'t know whether or not he\'ll come.' },
      { japanese: '合格できるかどうか、心配しています。', romaji: 'Goukaku dekiru ka dou ka, shinpai shite imasu.', english: 'I\'m worried about whether or not I can pass.' }
    ],
    notes: 'かどうか can be simplified to か when the alternative is obviously its opposite: 行くか分かりません (I don\'t know if I\'ll go). かどうか is more explicit and clearer in formal writing. Compare か〜か (A or B, two stated alternatives).'
  },
  {
    id: 'n4-kashira',
    name: '〜かしら',
    romaji: '〜kashira',
    level: 'N4',
    description: 'かしら is a sentence-final particle meaning "I wonder ~" or "I\'m not sure ~". It expresses mild doubt, curiosity, or uncertainty. Traditionally associated with feminine speech, it appears at the end of plain-form statements or questions.\n\nWhile かしら is often labeled as feminine, it is increasingly used by speakers of any gender in certain contexts, particularly in written or literary registers. Its male equivalent is かな.',
    usage: 'Verb (plain) + かしら / い-adj + かしら / Noun + かしら',
    links: [],
    examples: [
      { japanese: 'もう電車が来たかしら。', romaji: 'Mou densha ga kita kashira.', english: 'I wonder if the train has come already.' },
      { japanese: '彼は私のことが好きかしら。', romaji: 'Kare wa watashi no koto ga suki kashira.', english: 'I wonder if he likes me.' }
    ],
    notes: 'かしら vs かな: both express "I wonder ~". かしら is traditionally feminine; かな is more gender-neutral/masculine. Both can be used in rhetorical questions where the speaker is musing, not actually asking.'
  },
  {
    id: 'n4-kai',
    name: '〜かい',
    romaji: '〜kai',
    level: 'N4',
    description: 'かい is an informal question particle used mainly in casual masculine speech. It turns a statement into a yes/no question with a softer, more intimate tone than か. It is often used by older men or characters in fiction and can sound warm or slightly blunt depending on context.\n\nかい appears after plain-form predicates. It is less common in standard modern speech but is frequently encountered in literature, manga, and traditional settings.',
    usage: 'Verb (plain) + かい / い-adj + かい / Noun (plain) + かい',
    links: [],
    examples: [
      { japanese: '今日も仕事かい？', romaji: 'Kyou mo shigoto kai?', english: 'Working today too?' },
      { japanese: 'もう食べたかい？', romaji: 'Mou tabeta kai?', english: 'Did you eat already?' }
    ],
    notes: 'かい is mainly used by middle-aged to older male speakers in casual settings. It is softer and more intimate than か. Female equivalent in similar casual register: の (ね)? The particle is not appropriate in formal or business contexts.'
  },
  {
    id: 'n4-kana',
    name: '〜かな',
    romaji: '〜kana',
    level: 'N4',
    description: 'かな is a sentence-final particle meaning "I wonder ~" or expressing mild uncertainty, speculation, or a soft question to oneself. Unlike かしら, it is gender-neutral and widely used in contemporary Japanese by all speakers.\n\nかな can also express a desire or hope in indirect way: 行けるかな (I wonder if I can go / I hope I can go). It softens statements and questions, making them sound thoughtful rather than demanding.',
    usage: 'Verb (plain) + かな / い-adj + かな / な-adj + かな / Noun + かな',
    links: [],
    examples: [
      { japanese: '明日は晴れるかな。', romaji: 'Ashita wa hareru kana.', english: 'I wonder if it will be sunny tomorrow.' },
      { japanese: '彼女、元気かな。', romaji: 'Kanojo, genki kana.', english: 'I wonder if she\'s doing well.' }
    ],
    notes: 'かな can be used in rhetorical questions where the speaker muses aloud. It is distinct from か (direct question to listener) and かしら (similar meaning but traditionally feminine). かなあ (elongated) makes the wondering even more open-ended.'
  },
  {
    id: 'n4-goro',
    name: '〜ごろ',
    romaji: '〜goro',
    level: 'N4',
    description: 'ごろ indicates an approximate time or period, meaning "around ~", "about ~", or "approximately (time)". It is used with time expressions — hours, dates, periods — to show that the time given is not exact.\n\nごろ can only be used with time expressions, not quantities or distances (use くらい/ぐらい for those). It expresses vagueness about a point in time, not a duration (for durations, use ぐらい).',
    usage: 'Time expression + ごろ',
    links: [],
    examples: [
      { japanese: '三時ごろ着きます。', romaji: 'Sanji goro tsukimasu.', english: 'I\'ll arrive around three o\'clock.' },
      { japanese: '来年ごろ、引っ越す予定です。', romaji: 'Rainen goro, hikkuosu yotei desu.', english: 'I plan to move around next year.' }
    ],
    notes: 'ごろ vs ぐらい/くらい: ごろ = around a point in time (三時ごろ = around 3pm); ぐらい = approximately a quantity or duration (三時間ぐらい = about 3 hours). ごろ cannot be used with quantities.'
  },
  {
    id: 'n4-uchi-ni',
    name: '〜うちに',
    romaji: '〜uchi ni',
    level: 'N4',
    description: 'うちに means "while ~" or "before it\'s too late". It indicates that the action in the main clause should happen or happens within the time frame of the preceding condition. There is often an implication that after that time frame ends, the opportunity will be lost.\n\nWith affirmative verbs and adjectives, it means "while the state holds". With negative forms, it means "before ~ happens" (i.e., while it has not yet happened). The nuance often includes urgency.',
    usage: 'Verb (plain present) + うちに / い-adj + うちに / な-adj + な + うちに / Noun + の + うちに',
    links: [],
    examples: [
      { japanese: '熱いうちに食べてください。', romaji: 'Atsui uchi ni tabete kudasai.', english: 'Please eat it while it\'s hot.' },
      { japanese: '忘れないうちにメモしておきました。', romaji: 'Wasurenai uchi ni memo shite okimashita.', english: 'I wrote it down before I forgot.' }
    ],
    notes: 'うちに often carries a sense of "seize the moment while the condition still allows it". Compare: 〜間に (aida ni) which simply states two simultaneous events without urgency. うちに implies the window will close.'
  },
  {
    id: 'n4-nakute',
    name: '〜なくて',
    romaji: '〜nakute',
    level: 'N4',
    description: 'なくて is the て-form of the negative ない, used to connect clauses. It has two main uses: (1) expressing a reason or cause in negative form ("because ~ not ~"), and (2) listing negative states in sequence (noun/adjective contexts: 忙しくなくて = not being busy, and ~).\n\nFor actions and verbs, the sequential meaning (did not do A, then did B) is more typically expressed by 〜ないで. なくて tends to be used for causes/reasons or for adjective/noun negations.',
    usage: 'Verb (ない-form) + くて / い-adj + くなくて / な-adj + でなくて',
    links: [],
    examples: [
      { japanese: 'お金がなくて、困っています。', romaji: 'Okane ga nakute, komatte imasu.', english: 'I\'m in trouble because I don\'t have money.' },
      { japanese: '仕事が忙しくなくて、暇です。', romaji: 'Shigoto ga isogashiku nakute, hima desu.', english: 'Work isn\'t busy and I have free time.' }
    ],
    notes: 'なくて vs ないで: なくて expresses cause/reason or adjective/noun connection; ないで expresses "without doing" or makes a negative request. 食べなくて困る (problematic because not eating) vs 食べないで出かける (go out without eating).'
  },
  {
    id: 'n4-naku-naru',
    name: '〜なくなる',
    romaji: '〜naku naru',
    level: 'N4',
    description: 'なくなる combines the negative て-form なく with なる (to become) to mean "to come to not ~", "to no longer ~", or "to run out of". It describes a change of state into a negative condition — something that existed or happened stops existing or happening.\n\nFor nouns and adjectives, the equivalent is 〜でなくなる or adj-くなくなる. This pattern expresses gradual or sudden cessation, which is a natural human and situational change.',
    usage: 'Verb (ない-stem) + なくなる / Noun + が + なくなる (run out)',
    links: [],
    examples: [
      { japanese: '練習したら、緊張しなくなった。', romaji: 'Renshuu shitara, kinchou shinaku natta.', english: 'After practicing, I stopped getting nervous.' },
      { japanese: 'お米がなくなったので、買いに行った。', romaji: 'Okome ga nakunatta node, kai ni itta.', english: 'The rice ran out, so I went to buy some.' }
    ],
    notes: 'なくなる (to come to not) vs なくする (to make it not / to lose): なくなる is involuntary or natural change; なくする is deliberate. 財布をなくした (I lost my wallet) vs お金がなくなった (the money ran out/disappeared).'
  },
  {
    id: 'n4-toshite',
    name: '〜として',
    romaji: '〜toshite',
    level: 'N4',
    description: 'として means "as ~", "in the capacity of ~", or "in the role of ~". It indicates the status, role, or position in which the subject performs an action. It follows nouns and assigns them a specific function or identity in a given context.\n\nとして can also appear as としては ("as for ~"), としても ("even as ~"), or としての ("as a, which is ~"). These extended forms are common at N3–N2 level.',
    usage: 'Noun + として',
    links: [],
    examples: [
      { japanese: '彼はリーダーとして活躍しています。', romaji: 'Kare wa riidaa toshite katsuyaku shite imasu.', english: 'He is active as a leader.' },
      { japanese: '留学生として日本語を勉強しています。', romaji: 'Ryuugakusei toshite Nihongo wo benkyou shite imasu.', english: 'I am studying Japanese as an international student.' }
    ],
    notes: 'として is often confused with で (instrumental): として emphasizes role or capacity; で emphasizes the means or place. 医者として働く (work as a doctor, in that capacity) vs 医者で働く (work at a doctor\'s/hospital as a place).'
  },
  {
    id: 'n4-ba-yokatta',
    name: '〜ばよかった',
    romaji: '〜ba yokatta',
    level: 'N4',
    description: 'ばよかった expresses regret about something that did not happen — "I should have ~" or "It would have been better if I had ~". It combines the ば-conditional with よかった (it was good / it would be good) in the past tense.\n\nThe negative equivalent ばよかった follows a verb in its negative ば-form (〜なければよかった), expressing regret that something DID happen: "I wish I hadn\'t ~".',
    usage: 'Verb (ば-conditional) + よかった / Verb (なければ) + よかった',
    links: [],
    examples: [
      { japanese: 'もっと早く起きればよかった。', romaji: 'Motto hayaku okireba yokatta.', english: 'I should have woken up earlier.' },
      { japanese: 'あんなことを言わなければよかった。', romaji: 'Anna koto wo iwanakereba yokatta.', english: 'I wish I hadn\'t said that.' }
    ],
    notes: 'ばよかった is a fixed expression of regret. It is always in past tense (よかった). The present-tense equivalent ばいい means "should / it would be good if" without the regret nuance. Compare: 早く起きればいい (should get up early) vs 早く起きればよかった (should have gotten up early).'
  },
  {
    id: 'n4-tara-dou',
    name: '〜たらどうですか',
    romaji: '〜tara dou desu ka',
    level: 'N4',
    description: 'たらどうですか is used to make suggestions, meaning "why don\'t you ~?", "how about ~?", or "wouldn\'t it be a good idea to ~?". It is a gentle recommendation that gives the listener the choice to follow the advice or not.\n\nThe casual form is たらどう (dropping ですか), or even just たら (dropping どうですか entirely) in very casual speech. The negative form たらどうですか is less common but possible.',
    usage: 'Verb (たら-form) + どうですか',
    links: [],
    examples: [
      { japanese: '少し休んだらどうですか。', romaji: 'Sukoshi yasundara dou desu ka.', english: 'Why don\'t you take a short rest?' },
      { japanese: '医者に相談したらどうでしょうか。', romaji: 'Isha ni soudan shitara dou deshou ka.', english: 'How about consulting a doctor?' }
    ],
    notes: 'たらどうですか vs ほうがいい: both give advice, but たらどうですか is a softer suggestion framed as a question; ほうがいい is a more direct recommendation ("you should"). たらどうですか implies the speaker respects the listener\'s autonomy.'
  },
  {
    id: 'n4-tte',
    name: '〜って',
    romaji: '〜tte',
    level: 'N4',
    description: 'って is a casual spoken particle with several uses: (1) quotation marker (casual equivalent of と) meaning "they said that ~" or "it says ~"; (2) a topic marker (casual は) re-emphasizing a topic; (3) a shortened form of という, meaning "called ~" or "that thing called ~".\n\nAs a quotation marker, って comes after a clause in plain form and reports speech or thoughts casually. It is one of the most important particles in natural spoken Japanese.',
    usage: 'Clause (plain) + って (quotation) / Noun + って (topic/definition)',
    links: [],
    examples: [
      { japanese: '田中さんが明日来るって言っていました。', romaji: 'Tanaka-san ga ashita kuru tte itte imashita.', english: 'Tanaka said he\'s coming tomorrow.' },
      { japanese: '「愛」って何？', romaji: '"Ai" tte nani?', english: 'What is "love"?' }
    ],
    notes: 'って (quotation) vs と言う: って is casual; と言う is standard. って (topic) vs は: って re-introduces or emphasizes a topic conversationally. In rapid speech, って can even precede verbs of saying directly: 来るって (He says he\'s coming).'
  },
  {
    id: 'n4-koto-ga-aru',
    name: '〜ことがある (non-past)',
    romaji: '〜koto ga aru (habitual)',
    level: 'N4',
    description: 'ことがある with a non-past (dictionary form) verb means "there are times when ~" or "sometimes ~". It expresses that a habitual or occasional event occurs. This differs from the past-tense version (たことがある), which expresses past experience ("have done ~").\n\nThe subject can be the speaker or a third party. The action happens sometimes, not regularly. For regular habits, use 〜ことが多い or adverbs like よく and たまに.',
    usage: 'Verb (dictionary form) + ことがある',
    links: [],
    examples: [
      { japanese: '仕事が忙しくて、食事を抜くことがある。', romaji: 'Shigoto ga isogashikute, shokuji wo nuku koto ga aru.', english: 'There are times when I skip meals because work is busy.' },
      { japanese: '電車で寝過ごすことがあります。', romaji: 'Densha de nesugosou koto ga arimasu.', english: 'Sometimes I oversleep on the train.' }
    ],
    notes: 'Dictionary form + ことがある (habitual: sometimes ~) vs た-form + ことがある (experiential: have ~ before). 行くことがある = sometimes go vs 行ったことがある = have been there. The tense of ことがある itself can also change: ことがあった = there used to be times when ~.'
  },
  {
    id: 'n4-ni-suru',
    name: '〜にする',
    romaji: '〜ni suru',
    level: 'N4',
    description: 'にする has two main meanings. First, it means "to decide on ~" or "to make it ~" — choosing something from options: コーヒーにします (I\'ll have coffee). Second, with na-adjectives or nouns, it means "to make ~ into ~": 部屋をきれいにする (to make the room clean).\n\nThis pattern is highly versatile and appears in many contexts: ordering food, making decisions, changing states. The related pattern にしている means "to make it a habit" or "to keep ~ as".',
    usage: 'Noun + にする (decide on) / な-adj + にする (make into)',
    links: [],
    examples: [
      { japanese: '夕食はピザにします。', romaji: 'Yuushoku wa piza ni shimasu.', english: 'I\'ll make it pizza for dinner. (I\'ll have pizza)' },
      { japanese: '机の上をきれいにしてください。', romaji: 'Tsukue no ue wo kirei ni shite kudasai.', english: 'Please make the top of the desk clean.' }
    ],
    notes: 'にする (decide on/make into) vs になる (become): にする is an active change by the subject; になる is a natural or spontaneous change. 医者にする (make someone a doctor) vs 医者になる (become a doctor).'
  },
  {
    id: 'n4-owaru',
    name: '〜終わる',
    romaji: '〜owaru',
    level: 'N4',
    description: '終わる (おわる) as a compound verb suffix means "to finish doing ~" or "to complete ~". Attached to the masu-stem, it indicates the completion of an action. It describes the natural endpoint of a process.\n\nNote that 終わる is intransitive (no deliberate agent causing the end), while 終える (おえる) is transitive ("to finish/conclude something deliberately"). In compounds, both forms can appear.',
    usage: 'Verb (ます-stem) + 終わる',
    links: [],
    examples: [
      { japanese: 'レポートを書き終わりました。', romaji: 'Repooto wo kakiowari mashita.', english: 'I finished writing the report.' },
      { japanese: '食べ終わったら、お皿を洗ってください。', romaji: 'Tabeowattara, osara wo aratte kudasai.', english: 'When you\'re done eating, please wash the dishes.' }
    ],
    notes: 'Compound verb set: 始める (to start) — 続ける (to continue) — 終わる (to finish). Also contrast: 読み終わる (finish reading a book — natural completion) vs 読み終える (complete the reading — more deliberate/accomplishment-oriented).'
  },
  {
    id: 'n4-datte',
    name: '〜だって',
    romaji: '〜datte',
    level: 'N4',
    description: 'だって is a versatile casual particle with several uses: (1) "because" or "but" — giving a reason or excuse casually (だって、知らなかったんだもん = But I didn\'t know!); (2) "even ~" as a particle (子どもだってわかる = even a child would understand); (3) hearsay marker meaning "they say" or "I heard that".\n\nIt is predominantly used in casual speech and often has a slightly defensive, childlike, or pleading tone when used as "because". As "even", it follows nouns and is equivalent to 〜でも in particle use.',
    usage: 'だって + [reason/excuse] / Noun + だって + [fact]',
    links: [],
    examples: [
      { japanese: 'だって、誰も教えてくれなかったから。', romaji: 'Datte, dare mo oshiete kurenakatta kara.', english: 'But nobody told me, so...' },
      { japanese: 'その問題は子どもだってわかる。', romaji: 'Sono mondai wa kodomo datte wakaru.', english: 'Even a child can understand that problem.' }
    ],
    notes: 'だって as a reason/excuse is typically used by children or in casual/informal speech and sounds slightly petulant. As "even", it is interchangeable with でも in many cases. As hearsay, compare with って: どちらも "I heard that~" in casual speech.'
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
console.log(`Done. Added ${added} new N4 entries. Total entries: ${data.length}`)
