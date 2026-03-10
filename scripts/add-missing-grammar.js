const fs = require('fs')
const path = require('path')

const dataPath = path.join(__dirname, '../src/data/grammar.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))

const existingIds = new Set(data.map(e => e.id))
const existingNames = new Set(data.map(e => e.name.replace(/^[〜～]/, '').toLowerCase()))

function exists(id, name) {
  if (existingIds.has(id)) return true
  const bare = name.replace(/^[〜～]/, '').toLowerCase()
  return existingNames.has(bare)
}

const newEntries = [
  {
    id: 'n5-mama',
    name: '〜まま',
    romaji: 'mama',
    level: 'N5',
    description: '〜まま expresses that something remains in the same state or condition as before — "as is," "leaving it that way," or "while still in that state." It attaches to the た-form of verbs to mean an action was done and the resulting state was left unchanged: 電気をつけたまま寝た (I slept with the lights still on). It can also attach to the ない-form: 宿題をしないまま学校へ行った (I went to school without having done my homework).\n\nWith nouns and な-adjectives, まま follows の: 元のまま (as it was originally). The nuance is that something was left undone that perhaps should have been changed.',
    usage: 'Verb (た/ない) + まま / Noun + の + まま',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%BE%E3%81%BE' }],
    examples: [
      { japanese: '窓を開けたまま出かけてしまった。', romaji: 'Mado wo aketa mama dekakete shimatta.', english: 'I went out leaving the window open.' },
      { japanese: '靴を履いたまま家に入らないでください。', romaji: 'Kutsu wo haita mama ie ni hairanaide kudasai.', english: 'Please do not enter the house with your shoes still on.' },
      { japanese: '何も言わないまま彼は部屋を出た。', romaji: 'Nani mo iwanai mama kare wa heya wo deta.', english: 'He left the room without saying anything.' }
    ],
    notes: 'まま differs from ながら: ながら describes two actions happening simultaneously, while まま focuses on a state that persists unchanged.'
  },
  {
    id: 'n5-zutsu',
    name: '〜ずつ',
    romaji: 'zutsu',
    level: 'N5',
    description: '〜ずつ attaches to numbers or quantities and means "each," "at a time," or "little by little." It indicates an equal distribution or a repeated increment: 一つずつ (one at a time), 少しずつ (little by little).\n\nずつ also expresses gradual change over time: 日本語が少しずつ上手になってきた (my Japanese has been getting better little by little). The quantity before ずつ specifies the unit of repetition or distribution.',
    usage: 'Number/Amount + ずつ',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%9A%E3%81%A4' }],
    examples: [
      { japanese: '薬を一日三回、二錠ずつ飲んでください。', romaji: 'Kusuri wo ichinichi sankai, nijou zutsu nonde kudasai.', english: 'Please take two tablets of the medicine three times a day.' },
      { japanese: '少しずつ日本語が話せるようになった。', romaji: 'Sukoshi zutsu nihongo ga hanaseru you ni natta.', english: 'I have gradually become able to speak Japanese.' },
      { japanese: 'クラス全員に一枚ずつ紙を配ってください。', romaji: 'Kurasu zenin ni ichimai zutsu kami wo kubatte kudasai.', english: 'Please hand out one sheet of paper to each member of the class.' }
    ],
    notes: 'Common combinations: 少しずつ (little by little), 一人ずつ (one person at a time), 一つずつ (one by one). ずつ always follows a quantity expression.'
  },
  {
    id: 'n5-noda',
    name: '〜のだ／んだ',
    romaji: 'no da / n da',
    level: 'N5',
    description: '〜のだ (contracted to んだ in speech) is an explanatory sentence-final expression that signals the speaker is providing or seeking an explanation for something already observed. It adds a nuance of "the reason is..." — connecting a statement to implicit background knowledge.\n\nIn questions (〜のですか / んですか), it asks for an explanation: どうしたんですか (what is the matter?). It is softer and more empathetic than a plain question. The polite forms are のです / んです.',
    usage: 'Plain form + のだ／んだ',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%82%93%E3%81%A0' }],
    examples: [
      { japanese: '顔色が悪いですね。どこか具合が悪いんですか？', romaji: 'Kaoiro ga warui desu ne. Dokoka guai ga warui n desu ka?', english: 'You look pale. Are you feeling ill somewhere?' },
      { japanese: '実はもう知っていたんだ。', romaji: 'Jitsu wa mou shitte ita n da.', english: 'The truth is, I already knew.' },
      { japanese: '明日試験があるから、今夜は勉強しなければならないんだ。', romaji: 'Ashita shiken ga aru kara, konya wa benkyou shinakereba naranai n da.', english: 'I have an exam tomorrow, so I have to study tonight.' }
    ],
    notes: 'In casual speech, のだ becomes んだ. Avoid overusing のだ where the listener has no prior context to connect to.'
  },
  {
    id: 'n5-tokoro-da',
    name: '〜ところだ',
    romaji: 'tokoro da',
    level: 'N5',
    description: '〜ところだ expresses the timing of an action relative to speaking. With the dictionary form: "about to do" (今から出かけるところだ — I am just about to go out). With て+いる: "in the middle of doing" (ご飯を食べているところだ). With the た-form: "just finished" (今帰ったところだ — I just got home).\n\nAll three usages emphasize precise timing. This makes ところだ more specific than using the present or past tense alone.',
    usage: 'Verb (dict.) + ところだ / Verb (て) + いるところだ / Verb (た) + ところだ',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%93%E3%82%8D%E3%81%A0' }],
    examples: [
      { japanese: 'ちょうど今、電話しようとしていたところです。', romaji: 'Choudo ima, denwa shiyou to shite ita tokoro desu.', english: 'I was just about to call you.' },
      { japanese: '今レポートを書いているところです。', romaji: 'Ima repooto wo kaite iru tokoro desu.', english: 'I am in the middle of writing a report right now.' },
      { japanese: '彼女は今起きたところだ。', romaji: 'Kanojo wa ima okita tokoro da.', english: 'She just woke up.' }
    ],
    notes: 'Compare with ところに (just when an event occurs) and ところを (in the act of doing).'
  },
  {
    id: 'n5-you-to-omou',
    name: '〜ようと思う',
    romaji: 'you to omou',
    level: 'N5',
    description: '〜ようと思う expresses the speaker\'s intention — "I am thinking of doing / I plan to." It uses the volitional form followed by と思う. Unlike つもりだ (a firm decision), ようと思っている suggests an ongoing intention: 来年日本に行こうと思っている.\n\nThe past form ようと思った means "I was thinking of doing." It is one of the most natural ways to express personal plans in Japanese.',
    usage: 'Verb (volitional) + と思う',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%82%88%E3%81%86%E3%81%A8%E6%80%9D%E3%81%86' }],
    examples: [
      { japanese: '今年こそダイエットしようと思っている。', romaji: 'Kotoshi koso daietto shiyou to omotte iru.', english: 'I am thinking of going on a diet this year for real.' },
      { japanese: '卒業したら旅行しようと思います。', romaji: 'Sotsugyou shitara ryokou shiyou to omoimasu.', english: 'I am thinking of travelling after I graduate.' },
      { japanese: '昨日電話しようと思ったけど、忘れてしまった。', romaji: 'Kinou denwa shiyou to omotta kedo, wasurete shimatta.', english: 'I was going to call yesterday, but I forgot.' }
    ],
    notes: 'Use ようと思っている for ongoing intentions and ようと思う for a decision being made right now.'
  },
  {
    id: 'n5-hou-ga-ii',
    name: '〜ほうがいい',
    romaji: 'hou ga ii',
    level: 'N5',
    description: '〜ほうがいい is used to give advice — "it would be better to / you should." With a positive た-form it recommends doing: 早く寝たほうがいい (you should go to bed early). With ない-form it advises against: タバコは吸わないほうがいい (you had better not smoke).\n\nThe た-form is most common for affirmative advice. This is one of the most used structures for giving advice in Japanese.',
    usage: 'Verb (た / ない) + ほうがいい',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E6%96%B9%E3%81%8C%E3%81%84%E3%81%84' }],
    examples: [
      { japanese: '風邪をひいているなら、医者に行ったほうがいいよ。', romaji: 'Kaze wo hiite iru nara, isha ni itta hou ga ii yo.', english: 'If you have a cold, you should go to the doctor.' },
      { japanese: '夜遅くに食べないほうがいいです。', romaji: 'Yoru osoku ni tabenai hou ga ii desu.', english: 'You had better not eat late at night.' },
      { japanese: '大切なことはメモしたほうがいいと思う。', romaji: 'Taisetsu na koto wa memo shita hou ga ii to omou.', english: 'I think you should take notes on important things.' }
    ],
    notes: 'Adding と思う makes the advice gentler. ほうがいい is stronger than たらどう (why not try) but softer than 〜なさい (command).'
  },
  {
    id: 'n5-ichiban',
    name: '〜一番',
    romaji: 'ichiban',
    level: 'N5',
    description: '一番 (いちばん) means "the most" or "number one" and forms superlatives. Japanese places 一番 before the adjective: 日本で一番高い山 (the tallest mountain in Japan). The scope is specified with で: クラスで一番背が高い (the tallest in the class).\n\n一番 also works with verbs: 一番好きな食べ物は何ですか (what food do you like the most?). It is one of the first superlative structures Japanese learners encounter.',
    usage: '一番 + Adjective / Verb',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E4%B8%80%E7%95%AA' }],
    examples: [
      { japanese: '富士山は日本で一番高い山です。', romaji: 'Fujisan wa nihon de ichiban takai yama desu.', english: 'Mt. Fuji is the tallest mountain in Japan.' },
      { japanese: '何のスポーツが一番好きですか？', romaji: 'Nani no supootsu ga ichiban suki desu ka?', english: 'What sport do you like the most?' },
      { japanese: '一番簡単な方法を選んだ。', romaji: 'Ichiban kantan na houhou wo eranda.', english: 'I chose the simplest method.' }
    ],
    notes: 'For comparing two things, use 〜より〜のほうが. 一番 is for superlatives within a group of three or more. 最も (もっとも) is the formal/written equivalent.'
  },
  {
    id: 'n5-nado',
    name: '〜など',
    romaji: 'nado',
    level: 'N5',
    description: '〜など means "things like," "such as," or "etc." It follows nouns to show the item is one of several examples: 野菜や果物などを買った (I bought vegetables, fruit, and things like that). Similar to 〜とか but slightly more formal.\n\nなど can also carry a self-deprecating nuance: 私などにはできません (someone like me could not do it). In lists, など comes after the last item to signal the list is incomplete.',
    usage: 'Noun + など',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%A9' }],
    examples: [
      { japanese: '趣味はサッカーや野球などのスポーツです。', romaji: 'Shumi wa sakkaa ya yakyuu nado no supootsu desu.', english: 'My hobbies are sports like soccer and baseball.' },
      { japanese: '東京や大阪などの大都市に住んでいる。', romaji: 'Toukyou ya Oosaka nado no daitoshi ni sunde iru.', english: 'I live in a big city like Tokyo or Osaka.' },
      { japanese: '私などがそんな賞をもらえるとは思いませんでした。', romaji: 'Watashi nado ga sonna shou wo moraeru to wa omoimasen deshita.', english: 'I never thought someone like me could receive such an award.' }
    ],
    notes: 'なんか is the more casual spoken equivalent. などと言う adds a dismissive nuance about a quoted statement.'
  },
  {
    id: 'n5-dasu',
    name: '〜出す',
    romaji: 'dasu',
    level: 'N5',
    description: '〜出す (〜だす) attaches to the ます-stem and means "to suddenly start doing": 走り出す (to suddenly start running), 泣き出す (to burst into tears). The key nuance is spontaneity — the action begins suddenly and unexpectedly.\n\nThis differs from 〜始める (which neutrally means to start). 〜出す implies the action erupted from a prior state. Commonly used for emotional outbursts or abrupt physical starts.',
    usage: 'Verb (ます-stem) + 出す',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E5%87%BA%E3%81%99' }],
    examples: [
      { japanese: '突然、子供が泣き出した。', romaji: 'Totsuzen, kodomo ga nakidashita.', english: 'The child suddenly burst into tears.' },
      { japanese: '話し合いの途中で彼は笑い出した。', romaji: 'Hanashiai no tochuu de kare wa waraidashita.', english: 'He suddenly started laughing in the middle of the discussion.' },
      { japanese: '雨が降り出したので、急いで傘を取りに戻った。', romaji: 'Ame ga furidashita node, isoide kasa wo tori ni modotta.', english: 'It suddenly started raining, so I hurried back to get my umbrella.' }
    ],
    notes: 'Common combinations: 笑い出す (burst out laughing), 泣き出す (burst into tears), 走り出す (start running suddenly), 降り出す (start raining/snowing), 動き出す (start moving).'
  },
  {
    id: 'n5-owaru',
    name: '〜終わる',
    romaji: 'owaru',
    level: 'N5',
    description: '〜終わる (〜おわる) attaches to the ます-stem and means "to finish doing something": 食べ終わる (to finish eating), 読み終わる (to finish reading). It emphasizes that the action ran through to its complete end.\n\nUnlike simply using the た-form, 〜終わる highlights completion as the focus. Often used when finishing one thing leads to starting another.',
    usage: 'Verb (ます-stem) + 終わる',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E7%B5%82%E3%82%8F%E3%82%8B' }],
    examples: [
      { japanese: '宿題が終わったら、遊んでいいよ。', romaji: 'Shukudai ga owattara, asonde ii yo.', english: 'Once you finish your homework, you can play.' },
      { japanese: 'この本を読み終わるのに三日かかった。', romaji: 'Kono hon wo yomiowaru no ni mikka kakatta.', english: 'It took three days to finish reading this book.' },
      { japanese: '食べ終わったら、お皿を片付けてください。', romaji: 'Tabeowattara, osara wo katazukete kudasai.', english: 'When you have finished eating, please clear the dishes.' }
    ],
    notes: 'Similar constructions: 〜始める (start doing), 〜続ける (continue doing), 〜出す (suddenly start doing). 済む implies the matter is settled; 終わる focuses purely on completing the act.'
  },
  {
    id: 'n5-te-ageru',
    name: '〜てあげる',
    romaji: 'te ageru',
    level: 'N5',
    description: '〜てあげる expresses doing something for someone else\'s benefit — "to do something for someone." The favor is directed outward from the doer toward another person: 友達に本を貸してあげた (I lent my friend a book as a favor).\n\nてあげる can sound presumptuous when used for a social superior — てさしあげる is the humble form. In casual speech, てやる is used when the recipient is of lower status. The favor always flows away from the doer.',
    usage: 'Verb (て-form) + あげる',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%82%E3%81%92%E3%82%8B' }],
    examples: [
      { japanese: '道に迷っている人に道を教えてあげた。', romaji: 'Michi ni mayotte iru hito ni michi wo oshiete ageta.', english: 'I helped the person who was lost by showing them the way.' },
      { japanese: '妹の宿題を手伝ってあげた。', romaji: 'Imouto no shukudai wo tetsudatte ageta.', english: 'I helped my younger sister with her homework.' },
      { japanese: '荷物が重そうだったので、持ってあげました。', romaji: 'Nimotsu ga omosou datta node, motte agemashita.', english: 'Their luggage looked heavy, so I carried it for them.' }
    ],
    notes: 'The giving/receiving system: てあげる (outward — done for others), てくれる (inward — others do for me), てもらう (I receive the favor). Overusing てあげる can sound self-congratulatory.'
  },
  {
    id: 'n5-te-kureru',
    name: '〜てくれる',
    romaji: 'te kureru',
    level: 'N5',
    description: '〜てくれる means someone does something for the speaker\'s benefit — "to do something for me." The action flows inward toward the speaker: 友達が手伝ってくれた (my friend helped me). The subject is always someone other than the speaker.\n\nてくれる expresses gratitude. In requests, てくれますか / てくれない？ is natural for asking a favor. The polite counterpart for superiors is てくださる.',
    usage: 'Verb (て-form) + くれる',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%8F%E3%82%8C%E3%82%8B' }],
    examples: [
      { japanese: '先生が分かりやすく説明してくれた。', romaji: 'Sensei ga wakariyasuku setsumei shite kureta.', english: 'The teacher explained it for me in an easy-to-understand way.' },
      { japanese: '友達が空港まで送ってくれた。', romaji: 'Tomodachi ga kuukou made okutte kureta.', english: 'My friend took me to the airport.' },
      { japanese: 'ちょっと手伝ってくれない？', romaji: 'Chotto tetsudatte kurenai?', english: 'Could you help me out a bit?' }
    ],
    notes: 'てくれる focuses on the giver\'s action; てもらう focuses on the receiver\'s receipt of the favor. Both express gratitude but from different perspectives.'
  },
  {
    id: 'n5-te-morau',
    name: '〜てもらう',
    romaji: 'te morau',
    level: 'N5',
    description: '〜てもらう means "to have someone do something for you." The doer is marked with に: 友達に手伝ってもらった (I had my friend help me). The perspective is the receiver\'s — the speaker received the favor.\n\nてもらえますか / てもらえませんか is a polite request form. The humble counterpart is ていただく, used when the doer is a social superior.',
    usage: 'Person に + Verb (て-form) + もらう',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%A6%E3%82%82%E3%82%89%E3%81%86' }],
    examples: [
      { japanese: '医者に薬を処方してもらった。', romaji: 'Isha ni kusuri wo shohou shite moratta.', english: 'I had the doctor prescribe me medicine.' },
      { japanese: '友達に写真を撮ってもらいました。', romaji: 'Tomodachi ni shashin wo totte moraimashita.', english: 'I had my friend take a photo of me.' },
      { japanese: 'もう一度説明してもらえますか？', romaji: 'Mou ichido setsumei shite moraemasu ka?', english: 'Could you explain it to me one more time?' }
    ],
    notes: 'てもらう emphasizes the speaker arranged for the action. Compare with passive (〜られる) which focuses on being acted upon.'
  },
  {
    id: 'n4-shimau',
    name: '〜てしまう',
    romaji: 'te shimau',
    level: 'N4',
    description: '〜てしまう has two main uses. First, it expresses finalization of an action: 宿題をやってしまった (I went ahead and finished my homework — completely done). Second, it conveys regret or an unintended result: 財布を忘れてしまった (I accidentally left my wallet behind).\n\nIn casual speech, てしまう contracts to ちゃう (てしまった → ちゃった): 食べちゃった (I ate it all up). Context determines whether the nuance is completion or regret.',
    usage: 'Verb (て-form) + しまう',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%97%E3%81%BE%E3%81%86' }],
    examples: [
      { japanese: 'せっかく作ったケーキを落としてしまった。', romaji: 'Sekkaku tsukutta keeki wo otoshite shimatta.', english: 'I dropped the cake I went to all the trouble of making.' },
      { japanese: '気づいたら財布を忘れてしまっていた。', romaji: 'Kidzuitara saifu wo wasurete shimatte ita.', english: 'Before I knew it, I had left my wallet behind.' },
      { japanese: '今日中にこの仕事を終わらせてしまいたい。', romaji: 'Kyou juu ni kono shigoto wo owarasete shimaitai.', english: 'I want to completely finish this work by today.' }
    ],
    notes: 'Casual contractions: てしまう → ちゃう, てしまった → ちゃった, でしまう → じゃう, でしまった → じゃった. Extremely common in everyday speech.'
  },
  {
    id: 'n4-soko-de',
    name: 'そこで',
    romaji: 'soko de',
    level: 'N4',
    description: 'そこで as a conjunction means "therefore / and so / whereupon" — it connects a situation to a deliberate action taken in response. It indicates what follows is a logical response to the preceding situation.\n\nそこで differs from だから (simple logical "therefore") in that そこで implies the speaker actively decided to act. Commonly used in written narratives and formal speech.',
    usage: 'Situation. そこで + Action taken',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%9D%E3%81%93%E3%81%A7' }],
    examples: [
      { japanese: '資料が足りなかった。そこで図書館に行って調べることにした。', romaji: 'Shiryou ga tarinakatta. Sokode toshokan ni itte shiraberu koto ni shita.', english: 'There was not enough material. So I decided to go to the library and research it.' },
      { japanese: '風邪をひいた。そこで、早めに医者に行った。', romaji: 'Kaze wo hiita. Sokode, hayame ni isha ni itta.', english: 'I caught a cold. So I went to the doctor early.' },
      { japanese: '問題が見つかった。そこで担当者に連絡を取った。', romaji: 'Mondai ga mitsukatta. Sokode tantousha ni renraku wo totta.', english: 'A problem was found. So I got in contact with the person in charge.' }
    ],
    notes: 'そこで implies human agency — a deliberate decision made in response to a situation. だから is a simple causal connector without this implication.'
  },
  {
    id: 'n4-tada',
    name: 'ただ',
    romaji: 'tada',
    level: 'N4',
    description: 'ただ has two main uses. As an adverb: "just / merely / simply" — ただ見ているだけだ (I am just watching). As a conjunction: "however / but / the only thing is" — introducing a caveat: 賛成です。ただ、条件があります (I agree. However, there is one condition).\n\nAs a conjunction, ただ is more measured than でも or けど. It concedes the main point and adds a single calm reservation. Common in formal speech and writing.',
    usage: 'ただ + statement / Statement. ただ、+ caveat',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%9F%E3%81%A0' }],
    examples: [
      { japanese: '彼はただ黙って聞いていた。', romaji: 'Kare wa tada damatte kiite ita.', english: 'He just silently listened.' },
      { japanese: '行ってもいいです。ただ、遅くならないようにしてください。', romaji: 'Itte mo ii desu. Tada, osoku naranai you ni shite kudasai.', english: 'You can go. However, please make sure not to be late.' },
      { japanese: 'この仕事、引き受けます。ただ、一つお願いがあります。', romaji: 'Kono shigoto, hikiukemasu. Tada, hitotsu onegai ga arimasu.', english: 'I will take on this job. However, I have one request.' }
    ],
    notes: 'ただ as an adjective separately means "free of charge" (ただで食べる) or "ordinary." These are distinct uses.'
  },
  {
    id: 'n4-kaette',
    name: 'かえって',
    romaji: 'kaette',
    level: 'N4',
    description: 'かえって means "on the contrary / rather / instead" — it introduces an outcome that is the opposite of what was expected. Often the result is worse than anticipated: 薬を飲んだら、かえって具合が悪くなった (after taking the medicine, I actually felt worse).\n\nかえって is an adverb, commonly used in situations where help made things worse or an action produced the reverse of its intended effect.',
    usage: 'かえって + (unexpected/contrary outcome)',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%8B%E3%81%88%E3%81%A3%E3%81%A6' }],
    examples: [
      { japanese: '手伝おうとしたが、かえって邪魔になってしまった。', romaji: 'Tetsudaou to shita ga, kaette jama ni natte shimatta.', english: 'I tried to help but instead just got in the way.' },
      { japanese: '説明しようとしたら、かえって混乱させてしまった。', romaji: 'Setsumei shiyou to shitara, kaette konran sasete shimatta.', english: 'When I tried to explain, it just confused them more.' },
      { japanese: '早く終わらせようと急いだら、かえって時間がかかった。', romaji: 'Hayaku owaraseyou to isoidara, kaette jikan ga kakatta.', english: 'Hurrying to finish quickly actually took longer.' }
    ],
    notes: 'かえって vs むしろ: かえって emphasizes an unexpected reversal; むしろ means "if anything / more accurately" and expresses a preference or more precise description.'
  },
  {
    id: 'n4-kekka',
    name: '〜の結果',
    romaji: 'no kekka',
    level: 'N4',
    description: '〜の結果 means "as a result of" and connects an action or process to its outcome: 努力の結果、合格した (as a result of my efforts, I passed). Somewhat formal, often used when reporting outcomes of deliberate processes.\n\n結果 follows a noun with の (話し合いの結果 — as a result of the discussion) or a verb clause directly (調べた結果 — as a result of investigating).',
    usage: 'Noun + の結果 / Verb (た) + 結果',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E7%B5%90%E6%9E%9C' }],
    examples: [
      { japanese: '長年の努力の結果、ついに夢を実現することができた。', romaji: 'Naganen no doryoku no kekka, tsui ni yume wo jitsugen suru koto ga dekita.', english: 'As a result of years of effort, I was finally able to make my dream a reality.' },
      { japanese: '話し合いの結果、計画を変更することになった。', romaji: 'Hanashiai no kekka, keikaku wo henkou suru koto ni natta.', english: 'As a result of the discussion, it was decided to change the plan.' },
      { japanese: '検査した結果、異常は見つからなかった。', romaji: 'Kensa shita kekka, ijou wa mitsukaranakatta.', english: 'As a result of the examination, no abnormalities were found.' }
    ],
    notes: 'の結果 is more formal than ので/から. It focuses on a concluded process producing a definite outcome, often used in news, reports, and formal writing.'
  },
  {
    id: 'n4-toori',
    name: '〜通り',
    romaji: 'toori ni',
    level: 'N4',
    description: '〜通り (〜とおり) means "in the same way as / just as / as directed." It indicates an action conforms exactly to something else: 説明書の通りに組み立ててください (please assemble it according to the instructions).\n\nWith verbs: 言った通りにやった (I did it exactly as you said). With nouns: の通り — 計画通り (as planned). の can be dropped in compounds: 予定通り (as scheduled), 思い通り (as one wishes).',
    usage: 'Verb (dict./た) + 通り(に) / Noun + の通り(に)',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E9%80%9A%E3%82%8A' }],
    examples: [
      { japanese: '先生に言われた通りに練習した。', romaji: 'Sensei ni iwareta toori ni renshuu shita.', english: 'I practiced exactly as the teacher told me.' },
      { japanese: '計画通りに事が進んだ。', romaji: 'Keikaku doori ni koto ga susunda.', english: 'Things proceeded as planned.' },
      { japanese: 'ご存知の通り、明日から休みです。', romaji: 'Gozonji no toori, ashita kara yasumi desu.', english: 'As you know, we are off from tomorrow.' }
    ],
    notes: 'Note rendaku: in compounds like 計画通り the reading shifts to どおり (keikaku-doori). This voicing happens when 通り follows a noun directly without の.'
  },
  {
    id: 'n4-totan-ni',
    name: '〜途端に',
    romaji: 'totan ni',
    level: 'N4',
    description: '〜途端に (〜とたんに) means "just as / the moment / at the very instant" — something happened immediately and unexpectedly after another action: ドアを開けた途端に、猫が飛び出してきた (the moment I opened the door, the cat flew out).\n\n途端に always follows the た-form. The second clause usually describes something unexpected. It is stronger and more immediate than 〜たら or 〜すると.',
    usage: 'Verb (た) + 途端に',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E9%80%94%E7%AB%AF%E3%81%AB' }],
    examples: [
      { japanese: '外に出た途端に、雨が降り出した。', romaji: 'Soto ni deta totan ni, ame ga furidashita.', english: 'The moment I stepped outside, it started to rain.' },
      { japanese: 'ベッドに横になった途端に、眠ってしまった。', romaji: 'Beddo ni yoko ni natta totan ni, nemutte shimatta.', english: 'The instant I lay down on the bed, I fell asleep.' },
      { japanese: '電気を消した途端に、子供が泣き出した。', romaji: 'Denki wo keshita totan ni, kodomo ga nakidashita.', english: 'The moment I turned off the light, the child started crying.' }
    ],
    notes: '途端に only works with た-form (completed action). The second clause is typically involuntary or unexpected — it sounds unnatural if the second action is deliberate.'
  },
  {
    id: 'n4-sekkaku',
    name: 'せっかく',
    romaji: 'sekkaku',
    level: 'N4',
    description: 'せっかく expresses that something was done "with great effort" or "specially" — and carries a nuance of not wanting to waste that effort. With のに it implies disappointment when effort was wasted: せっかく作ったのに、食べてもらえなかった (I went to all the trouble of making it, but they did not eat it).\n\nIn positive contexts, せっかく means "since we have the chance": せっかく来たのだから、ゆっくりしてください (since you have made the trip, please take your time).',
    usage: 'せっかく + [effort/opportunity], のに/だから + [result/suggestion]',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%9B%E3%81%A3%E3%81%8B%E3%81%8F' }],
    examples: [
      { japanese: 'せっかく料理したのに、誰も食べなかった。', romaji: 'Sekkaku ryouri shita noni, daremo tabenakatta.', english: 'I went to all the trouble of cooking, but nobody ate it.' },
      { japanese: 'せっかく日本に来たのだから、富士山に登りたい。', romaji: 'Sekkaku nihon ni kita no dakara, fujisan ni noboritai.', english: 'Since I have gone to the trouble of coming to Japan, I want to climb Mt. Fuji.' },
      { japanese: 'せっかくのチャンスを無駄にしてしまった。', romaji: 'Sekkaku no chansu wo muda ni shite shimatta.', english: 'I wasted such a precious opportunity.' }
    ],
    notes: 'せっかく〜のに is one of the most common complaint/regret patterns. せっかくのN means "a special/precious N that should not be wasted."'
  },
  {
    id: 'n4-nakanaka',
    name: 'なかなか',
    romaji: 'nakanaka',
    level: 'N4',
    description: 'なかなか has two distinct uses. With a positive predicate: "quite / considerably / surprisingly good" — なかなかおいしい (quite delicious — better than expected). With a negative predicate: "not easily / not readily" — なかなか終わらない (it just does not end).\n\nThe positive use expresses pleasant surprise. The negative use expresses frustration — despite trying or waiting, the desired result fails to materialize.',
    usage: 'なかなか + Positive Predicate / なかなか + Negative Predicate',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%8B%E3%81%AA%E3%81%8B' }],
    examples: [
      { japanese: 'この映画はなかなか面白い。', romaji: 'Kono eiga wa nakanaka omoshiroi.', english: 'This movie is quite interesting (surprisingly good).' },
      { japanese: 'なかなか眠れなくて困っている。', romaji: 'Nakanaka nemurenakute komatte iru.', english: 'I am having trouble — I just cannot get to sleep.' },
      { japanese: '彼女はなかなかの腕前だ。', romaji: 'Kanojo wa nakanaka no udemae da.', english: 'She is quite skilled (better than you would expect).' }
    ],
    notes: 'Do not confuse with あまり〜ない (not very much), which is about degree rather than difficulty or unexpectedness.'
  },
  {
    id: 'n4-toutou',
    name: 'とうとう',
    romaji: 'toutou',
    level: 'N4',
    description: 'とうとう means "finally / at last / in the end" — typically after a long wait or struggle. It can be used for both positive outcomes and negative ones (something dreaded finally came to pass): とうとう試験に落ちてしまった (in the end, I failed after all).\n\nとうとう emphasizes that the result arrived after a long period. When negative, it suggests the speaker saw it coming. Compare with やっと (relief after difficulty) and ついに (neutral and formal).',
    usage: 'とうとう + (final outcome)',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%86%E3%81%A8%E3%81%86' }],
    examples: [
      { japanese: '長い冬がとうとう終わった。', romaji: 'Nagai fuyu ga toutou owatta.', english: 'The long winter has finally come to an end.' },
      { japanese: '彼はとうとう会社を辞めてしまった。', romaji: 'Kare wa toutou kaisha wo yamete shimatta.', english: 'He finally quit the company (as expected).' },
      { japanese: '待ち続けたが、とうとう彼女は来なかった。', romaji: 'Machi tsuzuketa ga, toutou kanojo wa konakatta.', english: 'I kept waiting, but in the end she never came.' }
    ],
    notes: 'とうとう vs やっと vs ついに: とうとう — finally (often inevitable, can be negative); やっと — finally (with relief); ついに — finally (neutral, formal, significant milestones).'
  },
  {
    id: 'n3-nagara-mo',
    name: '〜ながらも',
    romaji: 'nagara mo',
    level: 'N3',
    description: '〜ながらも means "even though / despite / although" — it expresses a concessive contrast where the second clause contradicts what the first clause would lead one to expect: 小さいながらも庭がある家 (a house that, small as it is, still has a garden). The も adds emphasis.\n\nながらも follows verb ます-stems, adjective stems, and nouns. It is more formal than ながら alone and appears frequently in written Japanese.',
    usage: 'Verb (ます-stem) / Adjective stem / Noun + ながらも',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%8C%E3%82%89%E3%82%82' }],
    examples: [
      { japanese: '不安ながらも、彼女は笑顔で手術室に入っていった。', romaji: 'Fuan nagara mo, kanojo wa egao de shujutsushitsu ni haitte itta.', english: 'Despite feeling anxious, she entered the operating room with a smile.' },
      { japanese: '残念ながらも、その申し出を断らざるを得なかった。', romaji: 'Zannen nagara mo, sono moushide wo kotowara zaru wo enakatta.', english: 'Regretfully, I had no choice but to decline that offer.' },
      { japanese: '狭いながらも、自分の部屋があることが嬉しかった。', romaji: 'Semai nagara mo, jibun no heya ga aru koto ga ureshikatta.', english: 'Cramped as it was, I was happy to have a room of my own.' }
    ],
    notes: '残念ながら (unfortunately) is a very common set phrase using this structure. ながらも is more formal and literary than のに.'
  },
  {
    id: 'n3-nai-koto-wa-nai',
    name: '〜ないことはない',
    romaji: 'nai koto wa nai',
    level: 'N3',
    description: '〜ないことはない (also 〜ないこともない) is a double negative meaning "it is not impossible / I would not say not." It cautiously admits something is possible without fully committing: 行けないことはないが、あまり気が進まない (it is not that I cannot go, but I am not feeling up to it).\n\nThis gives a guarded affirmative — the speaker concedes a possibility while hedging. Often followed by a qualification.',
    usage: 'Verb (ない-form) + ことはない / こともない',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%84%E3%81%93%E3%81%A8%E3%81%AF%E3%81%AA%E3%81%84' }],
    examples: [
      { japanese: 'できないことはないが、かなり難しい。', romaji: 'Dekinai koto wa nai ga, kanari muzukashii.', english: 'It is not impossible, but it is quite difficult.' },
      { japanese: '理解できないこともないが、賛成はしかねる。', romaji: 'Rikai dekinai koto mo nai ga, sansei wa shikaneru.', english: 'I cannot say I do not understand, but I cannot agree either.' },
      { japanese: '一人で行けないことはないけど、誰かと一緒のほうが安心だ。', romaji: 'Hitori de ikenai koto wa nai kedo, dareka to issho no hou ga anshin da.', english: 'It is not that I cannot go alone, but I would feel safer with someone.' }
    ],
    notes: 'ことはない is slightly more emphatic than こともない. Compare with 〜わけではない (it is not the case that) which negates a stronger assumption.'
  },
  {
    id: 'n3-bakari-ka',
    name: '〜ばかりか',
    romaji: 'bakari ka',
    level: 'N3',
    description: '〜ばかりか means "not only...but also / not just...but even" — it presents an item and raises the stakes with something more extreme: 彼は日本語ばかりか中国語も話せる (he can speak not just Japanese but Chinese too).\n\nばかりか follows plain forms and nouns directly, often followed by も or さえ in the second clause. It is stronger than 〜だけでなく and implies the additional element is especially noteworthy.',
    usage: 'Noun / Verb (plain) / Adjective + ばかりか + (additional item) + も',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%B0%E3%81%8B%E3%82%8A%E3%81%8B' }],
    examples: [
      { japanese: '彼女は料理ばかりか掃除も洗濯も完璧にこなす。', romaji: 'Kanojo wa ryouri bakari ka souji mo sentaku mo kanpeki ni konasu.', english: 'She handles not only cooking but also cleaning and laundry perfectly.' },
      { japanese: 'その事故は車を壊したばかりか、道路まで損傷させた。', romaji: 'Sono jiko wa kuruma wo kowashita bakari ka, douro made sonshou saseta.', english: 'The accident not only destroyed the car but even damaged the road.' },
      { japanese: '彼の無礼な態度は周りの人ばかりか上司まで怒らせた。', romaji: 'Kare no burei na taido wa mawari no hito bakari ka joushi made okoraseta.', english: 'His rude attitude angered not only those around him but even his boss.' }
    ],
    notes: 'ばかりか vs だけでなく: ばかりか is stronger and more literary, used when the additional element is especially surprising.'
  },
  {
    id: 'n3-to-itte-mo',
    name: '〜といっても',
    romaji: 'to itte mo',
    level: 'N3',
    description: '〜といっても means "although I say / even though / that said." It qualifies a previous statement — acknowledging the label but clarifying that reality is less extreme: 旅行に行ったといっても、日帰りだったけど (I went on a trip, but that said, it was just a day trip).\n\nUsed to prevent misunderstanding or manage expectations after using a term that might mislead. Connects to nouns, plain verb forms, and adjectives.',
    usage: 'Noun / Plain form + といっても',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%A8%E8%A8%80%E3%81%A3%E3%81%A6%E3%82%82' }],
    examples: [
      { japanese: '料理ができるといっても、簡単なものしか作れない。', romaji: 'Ryouri ga dekiru to itte mo, kantan na mono shika tsukurenai.', english: 'When I say I can cook, I mean I can only make simple things.' },
      { japanese: '貯金があるといっても、大した額ではない。', romaji: 'Chokin ga aru to itte mo, taishita gaku de wa nai.', english: 'When I say I have savings, it is not a significant amount.' },
      { japanese: '日本語が話せるといっても、まだ初級レベルです。', romaji: 'Nihongo ga hanaseru to itte mo, mada shokyuu reberu desu.', english: 'When I say I can speak Japanese, I am still at a beginner level.' }
    ],
    notes: 'Compare with とはいえ (N2) which is more formal and fully accepts the premise before noting a contrast.'
  },
  {
    id: 'n3-kagiri',
    name: '〜限り',
    romaji: 'kagiri',
    level: 'N3',
    description: '〜限り has uses centered on limits. "As long as": 生きている限り、夢を持ち続けたい (as long as I am alive, I want to keep dreaming). "As far as": 私の知る限り、彼は誠実だ (as far as I know, he is sincere). With negatives "unless": 努力しない限り、成功はない (unless you put in effort, there is no success).\n\nThe common thread is a boundary condition — the main clause holds within the stated limits.',
    usage: 'Verb (plain) + 限り / Noun + の限り',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E9%99%90%E3%82%8A' }],
    examples: [
      { japanese: '体が動く限り、仕事を続けるつもりだ。', romaji: 'Karada ga ugoku kagiri, shigoto wo tsuzukeru tsumori da.', english: 'As long as my body can move, I intend to keep working.' },
      { japanese: '私が知る限り、そのような事実はない。', romaji: 'Watashi ga shiru kagiri, sono you na jijitsu wa nai.', english: 'As far as I know, there is no such fact.' },
      { japanese: '許可を得ない限り、この部屋には入れません。', romaji: 'Kyoka wo enai kagiri, kono heya ni wa hairemasen.', english: 'Unless you obtain permission, you may not enter this room.' }
    ],
    notes: '〜限りでは (as far as...is concerned) is used for scoped claims. 〜うちに emphasizes doing something before a state changes; 限り sets the outer boundary of a condition.'
  },
  {
    id: 'n3-ni-tsurete',
    name: '〜につれて',
    romaji: 'ni tsurete',
    level: 'N3',
    description: '〜につれて means "as / in proportion to / along with" — as one thing changes, another changes in parallel: 年をとるにつれて、体力が落ちてきた (as I age, my physical strength declines). Both condition and result change together.\n\nにつれて follows the dictionary form of verbs or nouns. Similar to 〜にしたがって but につれて is more common for natural gradual co-changes.',
    usage: 'Verb (dict.) / Noun + につれて',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%A4%E3%82%8C%E3%81%A6' }],
    examples: [
      { japanese: '春が近づくにつれて、気温が上がってきた。', romaji: 'Haru ga chikazuku ni tsurete, kion ga agatte kita.', english: 'As spring approaches, the temperature has been rising.' },
      { japanese: '練習を重ねるにつれて、上手になっていった。', romaji: 'Renshuu wo kasaneru ni tsurete, jouzu ni natte itta.', english: 'As I accumulated practice, I gradually got better.' },
      { japanese: '経験を積むにつれて、仕事が楽しくなった。', romaji: 'Keiken wo tsumu ni tsurete, shigoto ga tanoshiku natta.', english: 'As I gained experience, my work became more enjoyable.' }
    ],
    notes: 'につれ (without て) is the formal written variant. にしたがって more often implies following rules; につれて describes natural co-changing processes.'
  },
  {
    id: 'n3-ni-han-shite',
    name: '〜に反して',
    romaji: 'ni han shite',
    level: 'N3',
    description: '〜に反して means "against / contrary to / in opposition to." Something goes against an expectation, rule, desire, or norm: 予想に反して、試験は簡単だった (contrary to expectations, the exam was easy).\n\nに反する is the attributive form: 規則に反する行為 (conduct that goes against the rules). A formal pattern common in official contexts, news, and written Japanese.',
    usage: 'Noun + に反して',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%AB%E5%8F%8D%E3%81%97%E3%81%A6' }],
    examples: [
      { japanese: '親の期待に反して、医者にはならなかった。', romaji: 'Oya no kitai ni han shite, isha ni wa naranakatta.', english: 'Contrary to my parents expectations, I did not become a doctor.' },
      { japanese: '予測に反して、株価は上がり続けた。', romaji: 'Yosoku ni han shite, kabuka wa agari tsuzuketa.', english: 'Contrary to predictions, the stock price kept rising.' },
      { japanese: '法律に反する行為は認められない。', romaji: 'Houritsu ni hansuru koui wa mitomerarenai.', english: 'Conduct contrary to the law cannot be permitted.' }
    ],
    notes: 'Typical nouns before に反して: 期待 (expectations), 意志 (will), 規則 (rules), 予想 (prediction).'
  },
  {
    id: 'n3-ni-motozuite',
    name: '〜に基づいて',
    romaji: 'ni motozuite',
    level: 'N3',
    description: '〜に基づいて means "based on / in accordance with / grounded in." An action or claim is founded on a particular basis: 事実に基づいた報告 (a report based on facts).\n\nに基づく is the attributive form: データに基づく分析 (analysis based on data). A formal expression common in research, policy, law, and official documents.',
    usage: 'Noun + に基づいて',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%AB%E5%9F%BA%E3%81%A5%E3%81%84%E3%81%A6' }],
    examples: [
      { japanese: '証拠に基づいて判断を下した。', romaji: 'Shouko ni motozuite handan wo kudashita.', english: 'A judgment was made based on the evidence.' },
      { japanese: 'この小説は実話に基づいています。', romaji: 'Kono shousetsu wa jitsuwa ni motozuite imasu.', english: 'This novel is based on a true story.' },
      { japanese: '法律に基づいた対応が必要だ。', romaji: 'Houritsu ni motozuita taiou ga hitsuyou da.', english: 'A response based on the law is necessary.' }
    ],
    notes: 'に基づく is more formal than をもとに. をもとに is for creative works or inspiration; に基づいて is for rules, data, and formal foundations.'
  },
  {
    id: 'n3-wa-iu-made-mo-naku',
    name: '〜は言うまでもなく',
    romaji: 'wa iu made mo naku',
    level: 'N3',
    description: '〜は言うまでもなく means "needless to say / not to mention / it goes without saying." It introduces a baseline as obvious, then mentions additional things: 健康は言うまでもなく、家族も大切だ (needless to say, health is important — and so is family).\n\nA relatively formal pattern used in speeches, essays, and careful discourse.',
    usage: 'Noun + は言うまでもなく',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%AF%E8%A8%80%E3%81%86%E3%81%BE%E3%81%A7%E3%82%82%E3%81%AA%E3%81%8F' }],
    examples: [
      { japanese: '彼が優秀なのは言うまでもなく、性格も素晴らしい。', romaji: 'Kare ga yuushuu na no wa iu made mo naku, seikaku mo subarashii.', english: 'Needless to say he is excellent, his personality is also wonderful.' },
      { japanese: '安全は言うまでもなく、品質も確保しなければならない。', romaji: 'Anzen wa iu made mo naku, hinshitsu mo kakuho shinakereba naranai.', english: 'Needless to say about safety — quality must also be ensured.' },
      { japanese: 'プロとしての技術は言うまでもなく、礼儀も大切だ。', romaji: 'Puro toshite no gijutsu wa iu made mo naku, reigi mo taisetsu da.', english: 'Professional skills go without saying — etiquette is also important.' }
    ],
    notes: 'はもちろん (of course / not to mention) is more common in everyday speech. は言うまでもなく is slightly more formal.'
  },
  {
    id: 'n3-ppanashi',
    name: '〜っぱなし',
    romaji: 'ppanashi',
    level: 'N3',
    description: '〜っぱなし attaches to the ます-stem and means "leaving something in a state" or "continually doing something." It often implies neglect: ドアを開けっぱなしにする (to leave the door open, neglecting to close it).\n\nIt also describes a continuous action that goes on too long: 立ちっぱなしで疲れた (tired from standing the whole time). In both uses, a state began and was never properly ended.',
    usage: 'Verb (ます-stem) + っぱなし',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%A3%E3%81%B1%E3%81%AA%E3%81%97' }],
    examples: [
      { japanese: '蛇口を開けっぱなしにしないでください。', romaji: 'Jaguchi wo akeppanashi ni shinaide kudasai.', english: 'Please do not leave the faucet running.' },
      { japanese: '彼はドアを開けっぱなしにして出て行った。', romaji: 'Kare wa doa wo akeppanashi ni shite dete itta.', english: 'He went out leaving the door wide open.' },
      { japanese: '今日は歩きっぱなしで足が痛い。', romaji: 'Kyou wa arukippanashi de ashi ga itai.', english: 'I have been walking non-stop today and my feet hurt.' }
    ],
    notes: 'Common combinations: 開けっぱなし (left open), つけっぱなし (left on), 出しっぱなし (left out), 立ちっぱなし (standing the whole time). Often implies neglect.'
  },
  {
    id: 'n3-ppoi',
    name: '〜っぽい',
    romaji: 'ppoi',
    level: 'N3',
    description: '〜っぽい attaches to nouns, verb ます-stems, or adjective stems and means "-ish / tending to / seeming like": 子供っぽい (childish), 忘れっぽい (tends to forget), 白っぽい (whitish).\n\nっぽい typically has a casual, slightly negative nuance — something has characteristics of X but is not quite X, or describes an undesirable habitual tendency.',
    usage: 'Noun / Verb (ます-stem) / Adjective stem + っぽい',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%A3%E3%81%BD%E3%81%84' }],
    examples: [
      { japanese: 'そんな子供っぽいことを言わないで。', romaji: 'Sonna kodomo-ppoi koto wo iwanaide.', english: 'Do not say such childish things.' },
      { japanese: '彼女は飽きっぽい性格だ。', romaji: 'Kanojo wa akippoi seikaku da.', english: 'She has a personality that tends to get bored easily.' },
      { japanese: 'この服、安っぽく見えない？', romaji: 'Kono fuku, yasuppoku mienai?', english: 'Does this outfit look cheap?' }
    ],
    notes: 'Common words: 飽きっぽい (easily bored), 忘れっぽい (forgetful), 怒りっぽい (quick to anger), 子供っぽい (childish), 安っぽい (cheap-looking). Conjugates like a regular い-adjective.'
  },
  {
    id: 'n3-wo-hajime',
    name: '〜をはじめ',
    romaji: 'wo hajime',
    level: 'N3',
    description: '〜をはじめ (〜を始め / 〜をはじめとして) means "starting with / beginning with / including." It introduces the most prominent example of a category: 東京をはじめ、多くの都市で問題が起きている (starting with Tokyo, problems are occurring in many cities).\n\nをはじめ signals the listed item is the most notable of the group. The full form をはじめとして or をはじめとする (attributive) is common in formal registers.',
    usage: 'Noun + をはじめ（として）',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%82%92%E3%81%AF%E3%81%98%E3%82%81' }],
    examples: [
      { japanese: '社長をはじめ、全社員が集まった。', romaji: 'Shachou wo hajime, zen shain ga atsumatta.', english: 'Starting with the president, all employees gathered.' },
      { japanese: '日本をはじめとするアジアの国々で人気がある。', romaji: 'Nihon wo hajime to suru ajia no kuniguni de ninki ga aru.', english: 'It is popular in Asian countries, starting with Japan.' },
      { japanese: '英語をはじめ、フランス語や中国語も話せる。', romaji: 'Eigo wo hajime, furansugo ya chuugokugo mo hanaseru.', english: 'Starting with English, she can also speak French and Chinese.' }
    ],
    notes: 'Compare with 〜など which lists examples without implying one is primary. をはじめとして is the explicitly formal equivalent.'
  },
  {
    id: 'n2-ni-hikikae',
    name: '〜にひきかえ',
    romaji: 'ni hikikae',
    level: 'N2',
    description: '〜にひきかえ means "in contrast to / compared to / unlike." It draws a stark contrast between two situations, often highlighting one being unexpectedly different: 兄にひきかえ、弟はとても勉強家だ (in contrast to the older brother, the younger brother is very studious).\n\nMore emphatic than 〜に比べて and often carries a nuance of irony. A formal expression used mainly in written Japanese and formal speech.',
    usage: 'Noun / Clause + にひきかえ',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%B2%E3%81%8D%E3%81%8B%E3%81%88' }],
    examples: [
      { japanese: '去年にひきかえ、今年の夏はとても涼しい。', romaji: 'Kyonen ni hikikae, kotoshi no natsu wa totemo suzushii.', english: 'In contrast to last year, this summer is very cool.' },
      { japanese: '姉が社交的なのにひきかえ、妹は引っ込み思案だ。', romaji: 'Ane ga shakouteki na no ni hikikae, imouto wa hikkomi jian da.', english: 'Unlike the older sister who is sociable, the younger sister is shy.' },
      { japanese: '景気の良かった頃にひきかえ、最近は売り上げが伸びない。', romaji: 'Keiki no yokatta koro ni hikikae, saikin wa uriage ga nobinai.', english: 'In contrast to the prosperous days, sales have not been growing recently.' }
    ],
    notes: 'にひきかえ is stronger and more literary than に比べて. Often appears where the speaker comments on a notable discrepancy between two things.'
  },
  {
    id: 'n2-to-wa-ie',
    name: '〜とはいえ',
    romaji: 'to wa ie',
    level: 'N2',
    description: '〜とはいえ means "that said / even so / although" — it acknowledges a stated fact and then contrasts it with a different reality: 春になったとはいえ、まだ寒い日が続いている (although it has become spring, cold days continue).\n\nMore formal and literary than けど or でも. It concedes a point gracefully before introducing contrasting reality. Common in writing and formal speech.',
    usage: 'Plain form / Noun + とはいえ',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%AF%E3%81%84%E3%81%88' }],
    examples: [
      { japanese: 'プロとはいえ、失敗することもある。', romaji: 'Puro to wa ie, shippai suru koto mo aru.', english: 'Even though they are a professional, they sometimes make mistakes.' },
      { japanese: '冗談とはいえ、そんなことを言うべきではなかった。', romaji: 'Joudan to wa ie, sonna koto wo iu beki de wa nakatta.', english: 'Even though it was a joke, you should not have said such a thing.' },
      { japanese: '安いとはいえ、品質には問題ない。', romaji: 'Yasui to wa ie, hinshitsu ni wa mondai nai.', english: 'Cheap as it may be, there is no problem with the quality.' }
    ],
    notes: 'とはいえ vs といっても: とはいえ is more formal and fully accepts the premise before noting a contrast; といっても is conversational and limits/clarifies a claim.'
  },
  {
    id: 'n2-neba-naranai',
    name: '〜ねばならない',
    romaji: 'neba naranai',
    level: 'N2',
    description: '〜ねばならない means "must / have to / ought to" — a literary and formal equivalent of 〜なければならない: やらねばならないことがたくさんある (there are many things I must do). The ねば form derives from archaic negative conditional なければ → ねば.\n\nAppears in formal writing, literature, speeches, and official documents. Carries a weightier tone than ないといけない. Rarely used in casual conversation.',
    usage: 'Verb (ない-stem) + ねばならない',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%AD%E3%81%B0%E3%81%AA%E3%82%89%E3%81%AA%E3%81%84' }],
    examples: [
      { japanese: '問題を解決せねばならない。', romaji: 'Mondai wo kaiketsu senebanaranaai.', english: 'The problem must be resolved.' },
      { japanese: '私たちは環境を守らねばならない。', romaji: 'Watashitachi wa kankyou wo mamoranebanaranaai.', english: 'We must protect the environment.' },
      { japanese: '次の世代のために行動せねばならない。', romaji: 'Tsugi no sedai no tame ni koudou senebanaranaai.', english: 'We must act for the sake of the next generation.' }
    ],
    notes: 'Conjugation — replace ない with ねば: 書かない → 書かねば, する → せねば, 来る → 来ねば. The shorter ねば alone also appears in literary contexts meaning "must."'
  },
  {
    id: 'n2-mono-de-wa-nai',
    name: '〜ものではない',
    romaji: 'mono de wa nai',
    level: 'N2',
    description: '〜ものではない expresses that something "should not be done / is morally or socially inappropriate." It conveys a normative judgment — the action violates common sense or social norms: 人のものを勝手に使うものではない (you should not use other people\'s things without permission).\n\nOften used to scold or remind someone of proper behavior. The casual form もんじゃない is common in speech.',
    usage: 'Verb (dict.) + ものではない',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%82%82%E3%81%AE%E3%81%A7%E3%81%AF%E3%81%AA%E3%81%84' }],
    examples: [
      { japanese: '年上の人に向かってそんなことを言うものではない。', romaji: 'Toshiue no hito ni mukatte sonna koto wo iu mono de wa nai.', english: 'You should not say such things to your elders.' },
      { japanese: '食べ物を粗末にするものではありません。', romaji: 'Tabemono wo somatsu ni suru mono de wa arimasen.', english: 'You must not waste food.' },
      { japanese: '人の秘密を他人に話すものではない。', romaji: 'Hito no himitsu wo tanin ni hanasu mono de wa nai.', english: 'One should not tell other people\'s secrets to strangers.' }
    ],
    notes: 'ものではない (normative — "it\'s just not done") vs べきではない (reasoned — "one should not"). ものではない has a stronger traditional/social tone.'
  },
  {
    id: 'n2-made-no-koto-da',
    name: '〜までのことだ',
    romaji: 'made no koto da',
    level: 'N2',
    description: '〜までのことだ means "all I have to do is / it just means / nothing more than." It expresses a calm fallback — if something fails, the worst case is simply doing the stated action: だめだったら辞めるまでのことだ (if it does not work out, all I will do is quit).\n\nIt can also downplay an action: 冗談を言ったまでのことだ (it was just a joke, nothing more). The tone is resigned but calm.',
    usage: 'Verb (dict.) + までのことだ / Verb (た) + までのことだ',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%BE%E3%81%A7%E3%81%AE%E3%81%93%E3%81%A8%E3%81%A0' }],
    examples: [
      { japanese: '試験に落ちたらまた受ければいいまでのことだ。', romaji: 'Shiken ni ochitara mata ukereba ii made no koto da.', english: 'If I fail the exam, all I have to do is take it again.' },
      { japanese: '嫌なら断るまでのことだ。', romaji: 'Iya nara kotowaru made no koto da.', english: 'If I do not like it, all I need to do is refuse.' },
      { japanese: '事実を言ったまでのことです。', romaji: 'Jijitsu wo itta made no koto desu.', english: 'I simply stated the facts — nothing more.' }
    ],
    notes: 'までのことだ often follows a conditional (〜たら, 〜なら) to express a worst-case the speaker accepts calmly.'
  },
  {
    id: 'n2-muke',
    name: '〜向け',
    romaji: 'muke',
    level: 'N2',
    description: '〜向け (〜むけ) means "aimed at / intended for / designed for." It indicates something was made with a particular audience in mind: 子供向けの本 (a book intended for children), 初心者向けのガイド (a guide for beginners).\n\nUsed to label products, content, or services directed at a specific group. Compare with 向き (suited to / facing), which refers to suitability rather than intended design.',
    usage: 'Noun + 向け（の）+ Noun',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E5%90%91%E3%81%91' }],
    examples: [
      { japanese: 'このアプリは初心者向けに作られています。', romaji: 'Kono apuri wa shoshinsha muke ni tsukurarete imasu.', english: 'This app was made for beginners.' },
      { japanese: '外国人向けの日本語教材を探している。', romaji: 'Gaikokujin muke no nihongo kyouzai wo sagashite iru.', english: 'I am looking for Japanese learning materials aimed at foreigners.' },
      { japanese: '海外向けの商品はパッケージが異なります。', romaji: 'Kaigai muke no shouhin wa pakkeeji ga kotonarimasu.', english: 'Products intended for overseas markets have different packaging.' }
    ],
    notes: '向け (designed for — intent) vs 向き (suited to — suitability). 向け is about design intent; 向き is about fit.'
  },
  {
    id: 'n2-sore-nari-ni',
    name: '〜それなりに',
    romaji: 'sore nari ni',
    level: 'N2',
    description: '〜それなりに / 〜それなりの means "in its own way / accordingly / to a reasonable degree." It acknowledges something may not be exceptional but is acceptable given its nature: 安いけど、それなりにおいしい (it is cheap, but tasty for the price).\n\nそれなり suggests proportional appropriateness — the result matches the circumstances. It can also imply "there are good reasons": それなりの理由があるはずだ.',
    usage: 'それなりに + Adjective/Verb / それなりの + Noun',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%9D%E3%82%8C%E3%81%AA%E3%82%8A%E3%81%AB' }],
    examples: [
      { japanese: '高い買い物をするのだから、それなりのものを選んだほうがいい。', romaji: 'Takai kaimono wo suru no dakara, sorenari no mono wo eranda hou ga ii.', english: 'Since you are making an expensive purchase, you should choose something appropriately good.' },
      { japanese: '失敗したことには、それなりの原因がある。', romaji: 'Shippai shita koto ni wa, sorenari no genin ga aru.', english: 'There are reasons of their own behind the failure.' },
      { japanese: '慣れるまでは大変だったが、それなりに楽しめた。', romaji: 'Nareru made wa taihen datta ga, sorenari ni tanoshimeta.', english: 'It was tough until I got used to it, but I enjoyed it in my own way.' }
    ],
    notes: 'それなりに is often used for measured, qualified praise. それなりに頑張った (they did their best within their limits) is a common, slightly backhanded compliment.'
  }
]

let added = 0
for (const entry of newEntries) {
  if (exists(entry.id, entry.name)) {
    console.log(`SKIP (exists): ${entry.name}`)
    continue
  }
  data.push(entry)
  existingIds.add(entry.id)
  existingNames.add(entry.name.replace(/^[〜～]/, '').toLowerCase())
  added++
  console.log(`ADD: ${entry.name} (${entry.level})`)
}

const levelOrder = { N5: 0, N4: 1, N3: 2, N2: 3, N1: 4 }
data.sort((a, b) => {
  const lo = (levelOrder[a.level] ?? 9) - (levelOrder[b.level] ?? 9)
  if (lo !== 0) return lo
  return a.name.localeCompare(b.name, 'ja')
})

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf-8')
console.log(`\nDone. Added ${added} new entries. Total: ${data.length}`)
