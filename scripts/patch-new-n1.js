const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '../src/data/grammar.json')
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))

const newEntries = [
  {
    id: 'n1-aete',
    name: 'あえて〜',
    romaji: 'aete',
    level: 'N1',
    description: 'あえて is an adverb meaning "dare to ~", "deliberately ~", or "purposely ~". It expresses that the speaker or subject is intentionally doing something that goes against the norm, common sense, or expectation — often something difficult, unconventional, or provocative.\n\nあえて often implies courage or deliberate challenge: choosing the harder path or making a controversial choice knowingly. It can be used with negative predicates (あえて言わない = deliberately not say) or affirmative ones.',
    usage: 'あえて + Verb / あえて〜ない (deliberately refrain)',
    links: [],
    examples: [
      { japanese: '反論を覚悟でも、あえて本音を言います。', romaji: 'Hanron wo kakugo demo, aete honne wo iimasu.', english: 'Even knowing I\'ll face pushback, I\'ll dare to say what I really think.' },
      { japanese: 'あえて難しい課題を選ぶことで、成長できる。', romaji: 'Aete muzukashii kadai wo erabu koto de, seichou dekiru.', english: 'By deliberately choosing difficult tasks, you can grow.' }
    ],
    notes: 'あえて signals that the action defies convenience or convention. It elevates the action — "I know this is unconventional, but I\'m doing it on purpose". Compare: わざと (on purpose, often mischievously/negatively) vs あえて (deliberately, often with a principled reason).'
  },
  {
    id: 'n1-akumade-mo',
    name: 'あくまでも',
    romaji: 'akumade mo',
    level: 'N1',
    description: 'あくまでも (also あくまで) means "to the end", "stubbornly", "absolutely", "at all costs", or "strictly". It emphasizes that the subject maintains a stance, principle, or position firmly without compromise or deviation, no matter the circumstances.\n\nIt can modify a noun to mean "strictly ~" (あくまでも個人の意見 = strictly personal opinion) or modify a verb to mean "insist on doing ~" (あくまでも戦う = fight to the end).',
    usage: 'あくまでも + Verb/Noun',
    links: [],
    examples: [
      { japanese: 'これはあくまでも私個人の意見です。', romaji: 'Kore wa akumade mo watashi kojin no iken desu.', english: 'This is strictly my personal opinion.' },
      { japanese: '彼はあくまでも自分の立場を変えなかった。', romaji: 'Kare wa akumade mo jibun no tachiba wo kaenakatta.', english: 'He stubbornly refused to change his position to the end.' }
    ],
    notes: 'あくまでも is often used in formal disclaimers ("this is strictly a personal view") or to describe stubborn persistence. あくまで (without も) is equally common and slightly less emphatic. 飽くまで is the kanji form (飽く = to be unwilling to stop).'
  },
  {
    id: 'n1-ba-koso',
    name: '〜ばこそ',
    romaji: '〜ba koso',
    level: 'N1',
    description: 'ばこそ means "it is precisely because ~" or "only because ~". It uses the ば-conditional combined with こそ (emphasis particle) to strongly emphasize that the reason stated is the specific and essential cause of the result. Without this reason, the result would not have happened.\n\nThe pattern places particular emphasis on the reason — the speaker is singling out this specific factor as uniquely responsible for the outcome, often to justify something or explain a surprising result.',
    usage: 'Verb (ば-form) + こそ',
    links: [],
    examples: [
      { japanese: '愛すればこそ、厳しいことも言う。', romaji: 'Aisureba koso, kibishii koto mo iu.', english: 'It is precisely because I love you that I say harsh things too.' },
      { japanese: '努力すればこそ、成功できるのだ。', romaji: 'Doryoku sureba koso, seikou dekiru no da.', english: 'It is only because you make the effort that you can succeed.' }
    ],
    notes: 'ばこそ is a literary/formal expression. The こそ after ば focuses all the causal weight on the ば clause. This pattern often appears in emotionally charged explanations or justifications. Modern alternatives: 〜からこそ (precisely because, common in speech) has the same meaning but is less formal.'
  },
  {
    id: 'n1-bekarazu',
    name: '〜べからず・〜べからざる',
    romaji: '〜bekarazu / 〜bekarazaru',
    level: 'N1',
    description: 'べからず is a classical/formal prohibitive expression meaning "must not ~", "shall not ~", or "it is forbidden to ~". It is the negative form of べし (classical "should/must") and appears in formal rules, signs, and literary contexts. べからざる is the attributive form used before nouns.\n\nThis pattern is more prohibitive than べきではない and carries the weight of a formal or even archaic rule. Common on signs and notices: 立ち入るべからず (No entry / Do not enter).',
    usage: 'Verb (dictionary) + べからず / Verb (dictionary) + べからざる + Noun',
    links: [],
    examples: [
      { japanese: 'この地に立ち入るべからず。', romaji: 'Kono chi ni tachiiru bekarazu.', english: 'No entry to this area. (One must not enter this place.)' },
      { japanese: '忘れるべからざる歴史的事実がある。', romaji: 'Wasureru bekarazaru rekishiteki jijitsu ga aru.', english: 'There are historical facts that must not be forgotten.' }
    ],
    notes: 'べからず appears in formal signs, rules, oaths, and literary texts. It is rarely used in modern everyday speech. Modern equivalents: 〜てはならない (must not), 〜禁止 (prohibited). べからざる + Noun = "which must not be ~": 犯すべからざる権利 (inviolable rights).'
  },
  {
    id: 'n1-hiite-wa',
    name: 'ひいては',
    romaji: 'hiite wa',
    level: 'N1',
    description: 'ひいては means "and by extension", "and in turn", "eventually leading to", or "furthermore". It indicates that the first matter leads logically or progressively to a larger, broader, or more significant consequence — an extension of the first point to a wider scope.\n\nひいては is a formal connective used in academic, business, and formal speech contexts. It marks the widening of impact from a specific case to a general consequence.',
    usage: '[First consequence], ひいては [broader/further consequence]',
    links: [],
    examples: [
      { japanese: '個人の努力が会社の成長を支え、ひいては国の発展に繋がる。', romaji: 'Kojin no doryoku ga kaisha no seichou wo sasae, hiite wa kuni no hatten ni tsunagaru.', english: 'Individual effort supports company growth, and by extension leads to national development.' },
      { japanese: '環境問題を解決することが、ひいては人類の生存につながる。', romaji: 'Kankyou mondai wo kaiketsu suru koto ga, hiite wa jinrui no seizon ni tsunagaru.', english: 'Solving environmental problems leads, in turn, to the survival of humanity.' }
    ],
    notes: 'ひいては is formal and connects a specific/narrow outcome to a broader, more significant one. It always moves from smaller to larger scope. Compare: さらに (furthermore, simply adding); ひいては (extending the consequence to a broader level).'
  },
  {
    id: 'n1-iu-made-mo-nai',
    name: '〜言うまでもない',
    romaji: '〜iu made mo nai',
    level: 'N1',
    description: '言うまでもない (いうまでもない) means "it goes without saying", "needless to say", or "it is obvious that ~". It expresses that something is so self-evident that it barely needs to be stated — yet the speaker mentions it anyway to reinforce its importance or to make a point.\n\nThe phrase is often used rhetorically: by saying "it goes without saying", the speaker simultaneously says it and emphasizes it. It frequently appears at the start of a clause or at the end as a predicate.',
    usage: 'Verb (plain) + は言うまでもない / 言うまでもなく + [statement]',
    links: [],
    examples: [
      { japanese: '健康が大切なのは言うまでもない。', romaji: 'Kenkou ga taisetsu na no wa iu made mo nai.', english: 'It goes without saying that health is important.' },
      { japanese: '言うまでもなく、チームワークが成功の鍵だ。', romaji: 'Iu made mo naku, chiimuwaaku ga seikou no kagi da.', english: 'Needless to say, teamwork is the key to success.' }
    ],
    notes: '言うまでもない vs 言うまでもなく: predicative (it goes without saying) vs adverbial (needless to say, ~). Both are common. Related: 当然 (naturally/of course) is a simpler near-synonym; 言うまでもない has a more emphatic, rhetorical flavor.'
  },
  {
    id: 'n1-kai',
    name: '〜甲斐',
    romaji: '〜kai',
    level: 'N1',
    description: '甲斐 (かい) means "worth", "result", "effect", or "purpose". When combined with a verb (ます-stem + 甲斐) or noun, it expresses that an effort or action had a meaningful result — or in negative form, that it was worthless or futile.\n\n甲斐があった means "it was worth it" (the effort paid off); 甲斐がない or 甲斐もない means "pointless", "fruitless", or "it was all for nothing". It often appears in emotional contexts where the speaker reflects on whether their effort was rewarded.',
    usage: 'Verb (ます-stem) + 甲斐 (があった/がない) / Noun + の甲斐',
    links: [],
    examples: [
      { japanese: '練習した甲斐があって、試合に勝てた。', romaji: 'Renshuu shita kai ga atte, shiai ni kateta.', english: 'The practice was worth it — we won the match.' },
      { japanese: 'どれだけ努力しても、甲斐がない。', romaji: 'Dore dake doryoku shite mo, kai ga nai.', english: 'No matter how much effort I make, it\'s pointless.' }
    ],
    notes: '甲斐 (かい) should not be confused with 貝 (shell) or other homonyms. Common collocations: 生き甲斐 (ikigai = reason for living, purpose in life), やり甲斐 (yari-gai = worth doing), 甲斐がある (be worthwhile) vs 甲斐がない (be futile).'
  },
  {
    id: 'n1-ka-no-you-ni',
    name: '〜かのように',
    romaji: '〜ka no you ni',
    level: 'N1',
    description: 'かのように means "as if ~", "as though ~", or "just like ~". It describes something that appears or is presented as being a certain way, when in reality it may not be. It emphasizes the illusory or figurative nature of the comparison.\n\nかのように is more literary and empathetic than ように alone. The か (as in か〜か) adds a sense of unreality or tentativeness, making the comparison feel hypothetical rather than asserted.',
    usage: 'Verb (plain) + かのように / Noun + であるかのように',
    links: [],
    examples: [
      { japanese: '彼女はすべてを知っているかのように振る舞った。', romaji: 'Kanojo wa subete wo shitte iru ka no you ni furumatta.', english: 'She behaved as if she knew everything.' },
      { japanese: '夢であるかのような美しい景色だった。', romaji: 'Yume de aru ka no you na utsukushii keshiki datta.', english: 'It was scenery as beautiful as if it were a dream.' }
    ],
    notes: 'かのように vs ように: both express "as if". ように is neutral (can be literal or figurative); かのように emphasizes that the appearance is counterfactual or unreal — "as if, but not actually". ように implies it really looks/seems that way; かのように implies it\'s more of an illusion.'
  },
  {
    id: 'n1-koto-kara',
    name: '〜ことから',
    romaji: '〜koto kara',
    level: 'N1',
    description: 'ことから means "from the fact that ~", "because of ~", or "based on the observation that ~". It introduces a fact or observation as the basis for a conclusion, name, or judgment. The reasoning moves from a specific observable fact to a general inference or explanation.\n\nことから is often used to explain the origin of a name or custom: 〜と呼ばれることから (from the fact that it is called ~). It is also used to state logical inferences.',
    usage: 'Verb (plain) + ことから / い-adj + ことから / な-adj + な + ことから',
    links: [],
    examples: [
      { japanese: '葉が四つあることから、四葉のクローバーと呼ばれる。', romaji: 'Ha ga yottsu aru koto kara, yotsuba no ku roobaa to yobareru.', english: 'From the fact that it has four leaves, it is called a four-leaf clover.' },
      { japanese: '現場の状況から、何が起きたか推測することから始めた。', romaji: 'Genba no joukyou kara, nani ga okita ka suisoku suru koto kara hajimeta.', english: 'Starting from the fact of the situation at the scene, we began inferring what happened.' }
    ],
    notes: 'ことから vs ことがわかる: ことから introduces the evidence/basis; ことがわかる states the conclusion drawn. Often used together: 〜ことから、〜ことがわかる (from the fact that ~, we can understand that ~). Used extensively in scientific writing and explanations.'
  },
  {
    id: 'n1-ga-hayai-ka',
    name: '〜が早いか',
    romaji: '〜ga hayai ka',
    level: 'N1',
    description: 'が早いか means "no sooner had ~ than ~", "as soon as ~", or "the instant ~". It expresses that an action in the main clause happened at virtually the same moment as the action in the preceding clause — with no gap between them. It emphasizes the immediacy and instantaneousness of the sequence.\n\nが早いか is a literary expression, mostly found in written language and formal narrative. The preceding verb is in dictionary form (present tense, not past).',
    usage: 'Verb (dictionary form) + が早いか',
    links: [],
    examples: [
      { japanese: 'ベルが鳴るが早いか、生徒たちは外に飛び出した。', romaji: 'Beru ga naru ga hayai ka, seito-tachi wa soto ni tobidashita.', english: 'No sooner had the bell rung than the students rushed outside.' },
      { japanese: '彼は家に帰るが早いか、ソファーに倒れ込んだ。', romaji: 'Kare wa ie ni kaeru ga hayai ka, sofaa ni taorekonda.', english: 'The instant he got home, he collapsed onto the sofa.' }
    ],
    notes: 'が早いか is similar to とたんに (the moment ~) and やいなや (no sooner than ~). が早いか is the most literary; やいなや (N1) is also literary; とたんに (N2) is more conversational. All express extreme temporal immediacy.'
  },
  {
    id: 'n1-gotoshi',
    name: '〜ごとし',
    romaji: '〜gotoshi',
    level: 'N1',
    description: 'ごとし is a classical/literary auxiliary meaning "like ~", "as ~", or "similar to ~". It is an archaic form equivalent to ようだ or みたいだ in modern Japanese. Today it appears mainly in set expressions, proverbs, and formal or literary writing.\n\nThe attributive form is ごとき (used before nouns) and the adverbial form is ごとく. ごとし itself is the predicative form. It is much stronger in literary weight than ような or みたいな.',
    usage: 'Noun + の + ごとし / Verb (plain) + が + ごとし / ごとく + Verb (adverbial)',
    links: [],
    examples: [
      { japanese: '光陰矢のごとし。', romaji: 'Kouin ya no gotoshi.', english: 'Time flies like an arrow. (Classical proverb)' },
      { japanese: '嵐のごとく現れ、嵐のごとく去っていった。', romaji: 'Arashi no gotoku araware, arashi no gotoku satte itta.', english: 'He appeared like a storm and left like one too.' }
    ],
    notes: 'ごとし appears most commonly in: fixed proverbs (矢のごとし), literary descriptions, formal oaths and documents. Modern speakers recognize it but would use ようだ/ような in everyday speech. ごとき can also carry a dismissive nuance in modern speech: そのごとき問題 (a problem of that sort/such a trivial problem).'
  },
  {
    id: 'n1-yue-ni',
    name: '〜故に',
    romaji: '〜yue ni',
    level: 'N1',
    description: '故に (ゆえに) is a formal/literary connective meaning "therefore", "because", "since", or "for this reason". It expresses that the preceding clause is the reason or cause for the following result. It is the classical equivalent of だから or なので.\n\nThe famous phrase "我思う、故に我あり" (I think, therefore I am) uses this pattern. 故に is rarely used in everyday speech but appears in philosophical writing, formal documents, and classical-style literature.',
    usage: 'Noun + の + 故に / Verb (plain) + 故に / 故に + [result]',
    links: [],
    examples: [
      { japanese: '我思う、故に我あり。', romaji: 'Ware omou, yue ni ware ari.', english: 'I think, therefore I am.' },
      { japanese: '無知故に、多くの過ちを犯してしまった。', romaji: 'Muchi yue ni, ooku no ayamachi wo okashite shimatta.', english: 'Because of ignorance, I made many mistakes.' }
    ],
    notes: '故に (ゆえに) = formal literary "because/therefore". Modern equivalents: だから (so/therefore, casual), なので (because, polite), ゆえに is almost exclusively formal/written. 故 alone can also mean "cause/reason" as a noun or in compounds: 死亡の故 (cause of death).'
  },
  {
    id: 'n1-wo-towazu',
    name: '〜を問わず',
    romaji: '〜wo towazu',
    level: 'N1',
    description: 'を問わず means "regardless of ~", "irrespective of ~", or "without distinction of ~". It indicates that the following clause applies equally no matter what the preceding noun is. It is used to express universality or non-discrimination with respect to the stated category.\n\nを問わず is formal and appears in official announcements, rules, and formal writing. It often pairs with paired nouns (年齢・性別を問わず = regardless of age or gender) to emphasize broad applicability.',
    usage: 'Noun + を問わず',
    links: [],
    examples: [
      { japanese: '年齢・経験を問わず、応募できます。', romaji: 'Nenrei・keiken wo towazu, oubo dekimasu.', english: 'You can apply regardless of age or experience.' },
      { japanese: '国籍を問わず、誰でも参加できる大会です。', romaji: 'Kokuseki wo towazu, dare demo sanka dekiru taikai desu.', english: 'It\'s a tournament that anyone can participate in, regardless of nationality.' }
    ],
    notes: 'を問わず vs にかかわらず: both mean "regardless of". を問わず is slightly more formal and specific to questioning/distinction; にかかわらず is also formal but slightly broader. Both appear in formal announcements and job listings.'
  },
  {
    id: 'n1-narade-wa',
    name: '〜ならでは(の)',
    romaji: '〜narade wa (no)',
    level: 'N1',
    description: 'ならでは(の) means "unique to ~", "only possible with ~", "characteristic of ~", or "something that couldn\'t be found anywhere else". It expresses that a quality or characteristic belongs exclusively to the noun mentioned — others could not produce or offer it.\n\nならでは is a literary/formal expression. The の before a noun makes it attributive: ならではの (unique to ~ as a modifier). It carries a nuance of admiration or special recognition.',
    usage: 'Noun + ならでは(の) + Noun/Verb',
    links: [],
    examples: [
      { japanese: 'これは職人ならではの技だ。', romaji: 'Kore wa shokunin narade wa no waza da.', english: 'This is a skill unique to craftspeople.' },
      { japanese: '京都ならではの風景が広がっていた。', romaji: 'Kyouto narade wa no fuukei ga hirogatte ita.', english: 'A landscape unique to Kyoto spread before us.' }
    ],
    notes: 'ならでは always highlights uniqueness and is inherently positive — it celebrates what makes something distinctive. It cannot be used for negative qualities. Compare: ならではの魅力 (charm unique to ~) — always something special or admirable about the noun.'
  },
  {
    id: 'n1-ni-koshita-koto-wa-nai',
    name: '〜に越したことはない',
    romaji: '〜ni koshita koto wa nai',
    level: 'N1',
    description: 'に越したことはない means "there is nothing better than ~", "it is best to ~", or "the more ~ the better". It expresses that the stated condition is ideal — nothing surpasses it. It is often used to give advice by stating the optimal situation, sometimes implying that while it may be difficult to achieve, it is worth aiming for.\n\nThis pattern is used when acknowledging that a condition is the best possible, even if not always achievable.',
    usage: 'Verb (dictionary/ない-form) + に越したことはない / い-adj + に越したことはない',
    links: [],
    examples: [
      { japanese: '健康に越したことはない。', romaji: 'Kenkou ni koshita koto wa nai.', english: 'There is nothing better than good health.' },
      { japanese: '早く始めるに越したことはないが、遅すぎることもない。', romaji: 'Hayaku hajimeru ni koshita koto wa nai ga, osogiru koto mo nai.', english: 'It\'s best to start early, but it\'s never too late either.' }
    ],
    notes: 'に越したことはない literally means "there is nothing that surpasses ~". It is a positive recommendation. The negative form に越したことはない after a negative verb: 早すぎないに越したことはない (it\'s best not to be too early) — using the ない-form gives an "ideally not" nuance.'
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
console.log(`Done. Added ${added} new N1 entries. Total entries: ${data.length}`)
