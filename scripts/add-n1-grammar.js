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
    id: 'n1-aete',
    name: '〜あえて',
    romaji: 'aete',
    level: 'N1',
    description: 'あえて means "deliberately / daringly / going out of one\'s way to do something that is difficult, unnecessary, or likely to meet resistance." It implies the speaker is consciously choosing to do something despite obstacles or conventions: あえて反対意見を述べた (I deliberately stated a dissenting opinion). The action is intentional and often courageous or provocative.\n\nあえて is an adverb and modifies the verb it precedes. It often appears in formal writing and serious discourse when someone is making a bold or unconventional choice. In negative contexts, あえて〜しない means "deliberately refraining from" — choosing not to do something despite being able to.',
    usage: 'あえて + Verb',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%82%E3%81%88%E3%81%A6' }],
    examples: [
      { japanese: '彼はあえて困難な道を選んだ。', romaji: 'Kare wa aete konnan na michi wo eranda.', english: 'He deliberately chose the difficult path.' },
      { japanese: 'あえて言わせてもらうが、その計画には問題がある。', romaji: 'Aete iwasete morau ga, sono keikaku ni wa mondai ga aru.', english: 'If I may be so bold as to say it, there are problems with that plan.' },
      { japanese: 'あえてリスクを冒すことも時には必要だ。', romaji: 'Aete risuku wo okasu koto mo toki ni wa hitsuyou da.', english: 'Sometimes it is necessary to deliberately take risks.' }
    ],
    notes: 'あえて〜ない (deliberately refraining) is equally important: あえて何も言わなかった (I deliberately said nothing). The nuance is always that the action or inaction is a conscious, deliberate choice against the natural or expected course.'
  },
  {
    id: 'n1-anagachi-nai',
    name: '〜あながち〜ない',
    romaji: 'anagachi ~ nai',
    level: 'N1',
    description: 'あながち〜ない means "not necessarily / not entirely / cannot simply be dismissed as." It is used to push back against a generalization or assumption, suggesting that while the claim may often be true, it is not universally or unconditionally so: あながち間違いとは言えない (it cannot simply be called wrong — it has a point).\n\nあながち always pairs with a negative predicate. It is a more sophisticated and literary way to say "not necessarily" than 必ずしも〜ない. It often appears in arguments or evaluations where the speaker wants to acknowledge partial validity of an opposing view.',
    usage: 'あながち + Negative predicate',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%82%E3%81%AA%E3%81%8C%E3%81%A1' }],
    examples: [
      { japanese: 'その噂もあながち嘘とは言えない。', romaji: 'Sono uwasa mo anagachi uso to wa ienai.', english: 'That rumor cannot simply be dismissed as a lie.' },
      { japanese: '彼の意見もあながち間違っているわけではない。', romaji: 'Kare no iken mo anagachi machigatte iru wake de wa nai.', english: 'His opinion is not necessarily wrong either.' },
      { japanese: 'その批判もあながち的外れではないと思う。', romaji: 'Sono hihan mo anagachi matoohazure de wa nai to omou.', english: 'I think that criticism is not entirely off the mark.' }
    ],
    notes: 'あながち always requires a negative. It cannot be used in a positive sentence. Compare with 必ずしも〜ない (not always / not necessarily), which is more commonly used in everyday speech.'
  },
  {
    id: 'n1-ikanaru',
    name: '〜いかなる',
    romaji: 'ikanaru',
    level: 'N1',
    description: 'いかなる is a formal, literary prenominal adjective meaning "whatever kind of / no matter what / any." It always precedes a noun and is typically followed by a strong statement or a conditional: いかなる理由があっても許されない (no matter what the reason, it cannot be permitted). It is the attributive form of いかに (how / in what way).\n\nいかなる is exclusively written/formal Japanese — it does not appear in casual conversation. It is commonly found in legal documents, formal declarations, speeches, and literary texts. It emphasizes absoluteness — there is no exception regardless of the type or nature of the noun.',
    usage: 'いかなる + Noun + (が/も/でも/があっても)',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%84%E3%81%8B%E3%81%AA%E3%82%8B' }],
    examples: [
      { japanese: 'いかなる暴力も正当化することはできない。', romaji: 'Ikanaru bouryoku mo seitou-ka suru koto wa dekinai.', english: 'No form of violence can be justified.' },
      { japanese: 'いかなる困難に直面しても、諦めないつもりだ。', romaji: 'Ikanaru konnan ni chokumen shite mo, akiramenai tsumori da.', english: 'No matter what difficulties I face, I do not intend to give up.' },
      { japanese: 'いかなる事情があっても、期限は守らなければならない。', romaji: 'Ikanaru jijou ga atte mo, kigen wa mamoranakereba naranai.', english: 'No matter what the circumstances, deadlines must be met.' }
    ],
    notes: 'いかなる is the attributive (prenominal) form. The adverbial form is いかに (how / to what extent). いかなる〜も + negative = "no...at all / not any." Found primarily in formal/written contexts.'
  },
  {
    id: 'n1-osore-ga-aru',
    name: '〜おそれがある',
    romaji: 'osore ga aru',
    level: 'N1',
    description: '〜おそれがある means "there is a risk / danger / possibility of (something bad)" — it expresses concern that a negative outcome may occur: 台風が上陸するおそれがある (there is a risk that the typhoon will make landfall). The おそれ (恐れ) here is a noun meaning "fear / concern / risk."\n\nThis structure is strongly associated with warnings, cautionary announcements, weather forecasts, and official notices. The negative connotation is essential — おそれがある is only used for unwanted outcomes. For neutral possibilities, 可能性がある is used instead.',
    usage: 'Verb (dict./ない) + おそれがある',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%8A%E3%81%9D%E3%82%8C%E3%81%8C%E3%81%82%E3%82%8B' }],
    examples: [
      { japanese: '大雨で川が氾濫するおそれがあります。', romaji: 'Ooame de kawa ga hanran suru osore ga arimasu.', english: 'There is a risk of rivers flooding due to heavy rain.' },
      { japanese: 'この薬には副作用が出るおそれがある。', romaji: 'Kono kusuri ni wa fukusayou ga deru osore ga aru.', english: 'There is a risk of side effects with this medication.' },
      { japanese: '個人情報が流出するおそれがあるため、注意してください。', romaji: 'Kojin jouhou ga ryuushutsu suru osore ga aru tame, chuui shite kudasai.', english: 'Please be careful as there is a risk of personal information being leaked.' }
    ],
    notes: 'おそれがある is essentially the formal/written equivalent of 〜かもしれない (might) but only for negative outcomes. The kanji 恐れ emphasizes danger; the hiragana おそれ is used in official documents and news.'
  },
  {
    id: 'n1-katawara',
    name: '〜かたわら',
    romaji: 'katawara',
    level: 'N1',
    description: '〜かたわら (〜傍ら) means "while also doing / alongside / in addition to" — it expresses that a person engages in a secondary activity alongside their main one. The nuance is that both activities are sustained simultaneously: 会社員として働くかたわら、小説を書いている (while working as a company employee, I also write novels).\n\nかたわら is a formal and literary expression. The main activity is typically a profession or significant commitment, and かたわら introduces something done in addition to it. It follows the dictionary form of verbs or noun + の.',
    usage: 'Verb (dict.) / Noun + の + かたわら',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%8B%E3%81%9F%E3%82%8F%E3%82%89' }],
    examples: [
      { japanese: '本業のかたわら、ボランティア活動をしている。', romaji: 'Hongyou no katawara, borantia katsudou wo shite iru.', english: 'Alongside my main job, I do volunteer work.' },
      { japanese: '育児のかたわら、資格の勉強もしている。', romaji: 'Ikuji no katawara, shikaku no benkyou mo shite iru.', english: 'While raising children, I am also studying for a qualification.' },
      { japanese: '教壇に立つかたわら、研究活動にも励んでいる。', romaji: 'Kyoudan ni tatsu katawara, kenkyuu katsudou ni mo hagenden iru.', english: 'Alongside teaching, I am also engaged in research activities.' }
    ],
    notes: 'かたわら implies both activities are sustained over time — it is not used for brief or occasional secondary actions. Compare with ながら (simultaneous momentary actions) and ついでに (doing something on the way/opportunity).'
  },
  {
    id: 'n1-kiwamaru',
    name: '〜極まる／極まりない',
    romaji: 'kiwamaru / kiwamarinai',
    level: 'N1',
    description: '〜極まる (〜きわまる) and 〜極まりない (〜きわまりない) mean "extremely / in the extreme / utterly" — they attach to な-adjective stems (without な) to express the highest possible degree of a quality, almost always negative: 失礼極まる (utterly rude / rude in the extreme), 危険極まりない (extremely dangerous).\n\nThe structure conveys strong emotional judgment — usually indignation, shock, or condemnation. 極まりない is slightly more emphatic than 極まる. Both are literary and formal, used in written Japanese, editorials, and formal speeches.',
    usage: 'な-adjective stem + 極まる / 極まりない',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E6%A5%B5%E3%81%BE%E3%82%8A%E3%81%AA%E3%81%84' }],
    examples: [
      { japanese: 'あの発言は失礼極まりない。', romaji: 'Ano hatsugen wa shitsurei kiwamarinai.', english: 'That remark was utterly rude.' },
      { japanese: '一人で山に登るとは危険極まる行為だ。', romaji: 'Hitori de yama ni noboru to wa kiken kiwamaru koui da.', english: 'Climbing a mountain alone is an act that is dangerous in the extreme.' },
      { japanese: '彼の態度は不誠実極まりないと感じた。', romaji: 'Kare no taido wa fuseijistu kiwamarinai to kanjita.', english: 'I felt his attitude was utterly insincere.' }
    ],
    notes: 'These forms attach to な-adjective stems directly without な: 失礼 + 極まりない (not 失礼な極まりない). Common combinations: 失礼極まりない, 非常識極まりない, 危険極まりない, 遺憾極まりない.'
  },
  {
    id: 'n1-koto-naku',
    name: '〜ことなく',
    romaji: 'koto naku',
    level: 'N1',
    description: '〜ことなく means "without doing / without ever" — it expresses that the main action occurs without the stated condition ever happening. It is the formal and literary equivalent of 〜ないで or 〜ずに: 休むことなく働き続けた (worked continuously without taking a break).\n\nことなく follows the dictionary form of the verb. It implies something that never happened throughout the duration of an action — the negated action is completely absent from the period described. Common in formal writing, literature, and speeches.',
    usage: 'Verb (dict.) + ことなく',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%93%E3%81%A8%E3%81%AA%E3%81%8F' }],
    examples: [
      { japanese: '彼は文句を言うことなく、黙って仕事をこなした。', romaji: 'Kare wa monku wo iu koto naku, damatte shigoto wo konashita.', english: 'Without ever complaining, he silently got on with his work.' },
      { japanese: '諦めることなく挑戦し続けることが大切だ。', romaji: 'Akirameru koto naku chousen shi tsuzukeru koto ga taisetsu da.', english: 'It is important to keep challenging yourself without ever giving up.' },
      { japanese: '彼女は誰にも相談することなく、一人で決断した。', romaji: 'Kanojo wa dare ni mo soudan suru koto naku, hitori de ketsudan shita.', english: 'Without consulting anyone, she made the decision alone.' }
    ],
    notes: 'ことなく vs ないで vs ずに: all mean "without doing," but ことなく is the most formal and literary. It emphasizes the complete absence of the action throughout a sustained period, not just a single instance.'
  },
  {
    id: 'n1-samo',
    name: '〜さも',
    romaji: 'samo',
    level: 'N1',
    description: 'さも means "seemingly / as if / looking very much like" — it expresses that something has a very convincing appearance of being a certain way, often with a hint that the appearance may be exaggerated or deceptive: さも知っているかのように話す (to speak as if one knows everything about it). The nuance is often slightly skeptical or ironic.\n\nさも is an adverb and precedes the expression it modifies. It frequently pairs with 〜ようだ / 〜かのように (as if) to create the full construction さも〜ようだ / さも〜かのようだ. Used in literary and formal registers.',
    usage: 'さも + (Predicate) + ように/かのように',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%95%E3%82%82' }],
    examples: [
      { japanese: '彼はさも当然のように人の仕事を横取りした。', romaji: 'Kare wa samo touzen no you ni hito no shigoto wo yokodori shita.', english: 'He took credit for someone else\'s work as if it were perfectly natural.' },
      { japanese: 'さも楽しそうに笑っているが、本当は辛そうだ。', romaji: 'Samo tanoshisou ni waratte iru ga, hontou wa tsurai sou da.', english: 'She is laughing as if she is having so much fun, but she looks like she is really hurting.' },
      { japanese: 'さも全部知っているかのように話すのはやめてください。', romaji: 'Samo zenbu shitte iru ka no you ni hanasu no wa yamete kudasai.', english: 'Please stop talking as if you know everything about it.' }
    ],
    notes: 'さも implies the appearance is somewhat unconvincing or exaggerated — the speaker sees through it. If the similarity is genuine, いかにも (truly / really / exactly like) is used instead.'
  },
  {
    id: 'n1-tagate',
    name: 'たかが',
    romaji: 'takaga',
    level: 'N1',
    description: 'たかが means "at most / merely / only / it\'s just" — it dismisses or minimizes the importance of something, implying it is not worth getting worried or excited about: たかが試験じゃないか (it\'s just an exam — nothing to worry about). It often contrasts with a bigger reaction than the speaker considers warranted.\n\nたかが typically precedes a noun or a number expression. It is often paired with されど (and yet), a classical form: たかが〜されど〜 — "it\'s just...but still..." This pairing highlights that something small still has significance.',
    usage: 'たかが + Noun / Number',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%9F%E3%81%8B%E3%81%8C' }],
    examples: [
      { japanese: 'たかが風邪で大げさだよ。', romaji: 'Takaga kaze de oogesa da yo.', english: 'You are overreacting — it is just a cold.' },
      { japanese: 'たかが千円、されど千円だ。', romaji: 'Takaga senen, saredo senen da.', english: 'It is only 1000 yen — but then again, 1000 yen is 1000 yen.' },
      { japanese: 'たかが子供と思って侮ってはいけない。', romaji: 'Takaga kodomo to omotte anadotte wa ikenai.', english: 'You should not underestimate them just because they are children.' }
    ],
    notes: 'The antonym/pair is されど (and yet / but even so — classical). たかが〜されど〜 is a famous pairing expressing that something seemingly trivial still matters. Compare with わずか (a mere / only — neutral quantity).'
  },
  {
    id: 'n1-tadadesae',
    name: '〜ただでさえ',
    romaji: 'tada de sae',
    level: 'N1',
    description: '〜ただでさえ means "even without that / already / as it is." It establishes that the baseline situation is already extreme or difficult, and then adds that something makes it even more so: ただでさえ忙しいのに、仕事が増えてしまった (I am already so busy as it is, and now there is even more work). The speaker highlights that an already strained situation is being pushed further.\n\nただでさえ is an adverb that modifies the entire clause that follows. It often appears in complaint or explanation contexts where the speaker justifies why something additional is unbearable.',
    usage: 'ただでさえ + (already extreme situation), のに/のだから + (additional burden)',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%9F%E3%81%A0%E3%81%A7%E3%81%95%E3%81%88' }],
    examples: [
      { japanese: 'ただでさえ眠いのに、また残業になった。', romaji: 'Tada de sae nemui noni, mata zangyou ni natta.', english: 'I am already so sleepy, and now there is overtime again.' },
      { japanese: 'ただでさえ時間がないのに、電車が遅れてしまった。', romaji: 'Tada de sae jikan ga nai noni, densha ga okurete shimatta.', english: 'I was already pressed for time, and now the train is late.' },
      { japanese: 'ただでさえ緊張しているのに、話しかけないでほしい。', romaji: 'Tada de sae kinchou shite iru noni, hanashikakenaide hoshii.', english: 'I am already nervous as it is — please do not talk to me.' }
    ],
    notes: 'ただでさえ often triggers のに or のだから after the established situation. It is used almost exclusively for negative or difficult situations where the speaker is burdened or stressed.'
  },
  {
    id: 'n1-tsuide-ni',
    name: '〜ついでに',
    romaji: 'tsuide ni',
    level: 'N1',
    description: '〜ついでに means "while at it / taking the opportunity / on the way / while one is doing something." It expresses that a secondary action is done conveniently alongside or as an extension of a primary action: 買い物のついでに銀行に寄った (while shopping, I also stopped by the bank — taking the opportunity).\n\nついでに implies efficiency — the secondary action is convenient because the primary action is already taking place. The secondary action should be of lesser importance than the primary. It follows the た-form of verbs or noun + の.',
    usage: 'Verb (た) / Noun + の + ついでに',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%A4%E3%81%84%E3%81%A7%E3%81%AB' }],
    examples: [
      { japanese: '駅に行くついでに、郵便物を出してきた。', romaji: 'Eki ni iku tsuide ni, yuubinbutsu wo dashite kita.', english: 'On the way to the station, I also mailed some letters.' },
      { japanese: 'このついでに聞いておきたいのですが…', romaji: 'Kono tsuide ni kiite okitai no desu ga...', english: 'While I have the chance, there is something I would like to ask...' },
      { japanese: '散歩のついでに本屋に寄った。', romaji: 'Sanpo no tsuide ni honya ni yotta.', english: 'While out for a walk, I stopped by the bookstore.' }
    ],
    notes: 'ついでに vs かたわら: ついでに is for a one-time secondary action taken opportunistically; かたわら is for a sustained second activity done alongside a primary commitment.'
  },
  {
    id: 'n1-te-naranai',
    name: '〜てならない',
    romaji: 'te naranai',
    level: 'N1',
    description: '〜てならない expresses an overwhelming, uncontrollable feeling or state — "I cannot help but feel / I feel unbearably / it is so...that I cannot stand it." It is used with verbs and adjectives that express feelings or sensations: 彼のことが心配でならない (I cannot help but worry about him). The feeling is spontaneous and beyond the speaker\'s control.\n\nてならない is the literary and formal equivalent of 〜てたまらない (unbearably / can\'t stand). It is slightly more restrained in tone than てたまらない. It follows the て-form of verbs and く-form of い-adjectives.',
    usage: 'Verb (て-form) / い-adj (く) + てならない',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%AA%E3%82%89%E3%81%AA%E3%81%84' }],
    examples: [
      { japanese: '故郷のことが懐かしくてならない。', romaji: 'Furusato no koto ga natsukashikute naranai.', english: 'I cannot help but feel nostalgic for my hometown.' },
      { japanese: '試験の結果が気になってならない。', romaji: 'Shiken no kekka ga ki ni natte naranai.', english: 'I cannot stop wondering about my exam results.' },
      { japanese: 'あの時の失敗が悔やまれてならない。', romaji: 'Ano toki no shippai ga kuyamarete naranai.', english: 'I cannot help but regret that mistake I made.' }
    ],
    notes: 'てならない vs てたまらない: both mean "unbearably / cannot help but." てならない is more literary and slightly more restrained; てたまらない is more direct and commonly used in everyday speech. Both use involuntary feelings.'
  },
  {
    id: 'n1-to-atte',
    name: '〜とあって',
    romaji: 'to atte',
    level: 'N1',
    description: '〜とあって means "because of / given that / since it is the case that" — it introduces a special or notable circumstance as the reason for the result described. The situation in the first clause is presented as an exceptional condition that naturally leads to the result: 連休とあって、観光地はどこも混んでいた (given that it was a long holiday, tourist spots everywhere were packed).\n\nとあって is a formal expression. The circumstance before とあって is typically something special, unusual, or significant — an event, season, occasion, or status that makes the resulting situation understandable. It cannot be used for everyday ordinary reasons.',
    usage: 'Noun / Plain form + とあって',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%82%E3%81%A3%E3%81%A6' }],
    examples: [
      { japanese: 'セール最終日とあって、店内は大混雑だった。', romaji: 'Seeru saishuu bi to atte, tennai wa dai konzatsu datta.', english: 'Given that it was the last day of the sale, the store was packed.' },
      { japanese: '人気アーティストのライブとあって、チケットはすぐ完売した。', romaji: 'Ninki aatisuto no raibu to atte, chiketto wa sugu kanbai shita.', english: 'Given that it was a concert by a popular artist, tickets sold out immediately.' },
      { japanese: '初めての海外旅行とあって、彼女はとても興奮していた。', romaji: 'Hajimete no kaigai ryokou to atte, kanojo wa totemo koufun shite ita.', english: 'Given that it was her first overseas trip, she was very excited.' }
    ],
    notes: 'とあって is used when the circumstance is special or noteworthy enough to explain an exceptional result. For ordinary causes, simply ので or から is used. The result is often a crowd, excitement, or some heightened state.'
  },
  {
    id: 'n1-to-ii-to-ii',
    name: '〜といい〜といい',
    romaji: 'to ii ~ to ii',
    level: 'N1',
    description: '〜といい〜といい means "both...and / whether...or / taking both...and...into account." It presents two representative examples from a larger category and uses them together as grounds for a judgment or conclusion: 値段といいデザインといい、このバッグは完璧だ (both in terms of price and design, this bag is perfect).\n\nThe two nouns listed are typically representative qualities or aspects of the same thing. The final judgment applies to the whole based on these examples. It can be used for both positive and negative evaluations.',
    usage: 'Noun + といい + Noun + といい + (judgment)',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%84%E3%81%84%E3%81%A8%E3%81%84%E3%81%84' }],
    examples: [
      { japanese: '味といい見た目といい、この料理は最高だ。', romaji: 'Aji to ii mitame to ii, kono ryouri wa saikou da.', english: 'Both in terms of taste and appearance, this dish is excellent.' },
      { japanese: '態度といい言葉遣いといい、彼には問題がある。', romaji: 'Taido to ii kotobazukai to ii, kare ni wa mondai ga aru.', english: 'Both his attitude and his choice of words are problematic.' },
      { japanese: '立地といい設備といい、このホテルは文句なしだ。', romaji: 'Rikichi to ii setsubi to ii, kono hoteru wa monku nashi da.', english: 'Both the location and the facilities of this hotel are perfect — no complaints.' }
    ],
    notes: 'The two examples in といい〜といい are typically the most salient or representative features. The final judgment is meant to apply broadly. Compare with 〜といわず〜といわず (without exception / whether it is A or B — covering everything).'
  },
  {
    id: 'n1-tomo-naku',
    name: '〜ともなく／ともなしに',
    romaji: 'tomo naku / tomo nashi ni',
    level: 'N1',
    description: '〜ともなく / 〜ともなしに means "without really intending to / without any particular aim / vaguely / absentmindedly." It is used when an action happens without a clear or specific intent: 何を見るともなくテレビを眺めていた (I was staring at the TV without really watching anything in particular).\n\nThe verbs used with this pattern are typically perception verbs (見る, 聞く) or movement verbs. The sense is that the action is unfocused or drifting — the person is doing it passively rather than with purpose.',
    usage: 'Verb (dict.) + ともなく / ともなしに',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%A8%E3%82%82%E3%81%AA%E3%81%8F' }],
    examples: [
      { japanese: '何をするともなく、ぼんやりと窓の外を眺めていた。', romaji: 'Nani wo suru tomo naku, bonyari to mado no soto wo nagamete ita.', english: 'Without anything particular to do, I was vaguely staring out the window.' },
      { japanese: 'どこへ行くともなく歩き回っていた。', romaji: 'Doko e iku tomo naku arukimawatte ita.', english: 'I was wandering around without any particular destination in mind.' },
      { japanese: '誰が言うともなく、その話は広まっていった。', romaji: 'Dare ga iu tomo naku, sono hanashi wa hiromatte itta.', english: 'Without anyone in particular saying it, the story spread.' }
    ],
    notes: 'The pattern often appears as 何をするともなく (without anything particular to do), どこへ行くともなく (without any particular destination), 誰が言うともなく (without anyone in particular saying). The key nuance is directionless, unfocused action.'
  },
  {
    id: 'n1-tomo-naru-to',
    name: '〜ともなると',
    romaji: 'tomo naru to',
    level: 'N1',
    description: '〜ともなると (also ともなれば) means "when it comes to / once one becomes / at the level of" — it introduces a higher level, stage, or status that brings new expectations or changes in circumstances: 部長ともなると、責任も大きくなる (when you become a department head, the responsibilities also become greater).\n\nともなると implies that reaching the stated level or status naturally brings certain consequences that would not apply at a lower level. It is often used to explain why something is expected or unavoidable given the subject\'s elevated status.',
    usage: 'Noun + ともなると / ともなれば',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%A8%E3%82%82%E3%81%AA%E3%82%8B%E3%81%A8' }],
    examples: [
      { japanese: 'プロともなると、練習量が全く違う。', romaji: 'Puro tomo naru to, renshuu ryou ga mattaku chigau.', english: 'Once you become a professional, the amount of practice is completely different.' },
      { japanese: '社長ともなれば、プライベートな時間も減ってしまう。', romaji: 'Shachou tomo nareba, puraibeeto na jikan mo hette shimau.', english: 'Once you become company president, even your private time decreases.' },
      { japanese: '大学院生ともなると、自分で研究テーマを設定しなければならない。', romaji: 'Daigakuinsei tomo naru to, jibun de kenkyuu teema wo settei shinakereba naranai.', english: 'Once you become a graduate student, you must set your own research topics.' }
    ],
    notes: 'ともなると focuses on the elevated status bringing natural consequences. Compare with にもなると (roughly similar) and になると (simply describes when something becomes X). ともなれば is a slightly more formal/literary variant.'
  },
  {
    id: 'n1-nashi-ni',
    name: '〜なしに',
    romaji: 'nashi ni',
    level: 'N1',
    description: '〜なしに means "without / in the absence of" — it expresses that something happens or is done in the absence of the stated element: 許可なしに入ることはできない (you cannot enter without permission). It is the formal equivalent of 〜なしで and is commonly used in official, legal, and written contexts.\n\nなしに follows nouns directly. The longer form なしには or なくしては adds emphasis — "without this, (the result) would be impossible." This emphatic form stresses the indispensability of the missing element.',
    usage: 'Noun + なしに / なしには',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%97%E3%81%AB' }],
    examples: [
      { japanese: '事前の予約なしに利用することはできません。', romaji: 'Jizen no yoyaku nashi ni riyou suru koto wa dekimasen.', english: 'You cannot use this service without a prior reservation.' },
      { japanese: '努力なしに成功はない。', romaji: 'Doryoku nashi ni seikou wa nai.', english: 'There is no success without effort.' },
      { japanese: '彼の助けなしには、この仕事は完成しなかっただろう。', romaji: 'Kare no tasuke nashi ni wa, kono shigoto wa kansei shinakatta darou.', english: 'Without his help, this work would not have been completed.' }
    ],
    notes: 'なしに vs なしで: both mean "without," but なしに is more formal and often appears in written/official contexts. なしには (with topic marker) emphasizes the indispensability: その協力なしには成り立たない (cannot function without that cooperation).'
  },
  {
    id: 'n1-ni-kakete-wa',
    name: '〜にかけては',
    romaji: 'ni kakete wa',
    level: 'N1',
    description: '〜にかけては means "when it comes to / in terms of / as far as...is concerned (especially for a skill or quality)." It is used to single out a particular domain in which the subject excels: 料理にかけては、彼女の右に出る者はいない (when it comes to cooking, no one can surpass her).\n\nにかけては strongly implies expertise or superiority in the stated domain. The judgment that follows is typically a superlative or strong claim about ability. It is a formal expression.',
    usage: 'Noun + にかけては',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%8B%E3%81%91%E3%81%A6%E3%81%AF' }],
    examples: [
      { japanese: 'スピードにかけては、彼の右に出る者はいない。', romaji: 'Supiido ni kakete wa, kare no migi ni deru mono wa inai.', english: 'When it comes to speed, no one can surpass him.' },
      { japanese: '粘り強さにかけては、あの選手は誰にも負けない。', romaji: 'Nebarizuyosa ni kakete wa, ano senshu wa dare ni mo makenai.', english: 'In terms of tenacity, that athlete loses to nobody.' },
      { japanese: '接客にかけては、このレストランは一流だ。', romaji: 'Sekkyaku ni kakete wa, kono resutoran wa ichiryuu da.', english: 'When it comes to customer service, this restaurant is first class.' }
    ],
    notes: 'にかけては is almost always used positively — highlighting exceptional skill. The idiomatic phrase 〜の右に出る者はいない (no one can surpass them) often pairs with にかけては.'
  },
  {
    id: 'n1-ni-todomarazu',
    name: '〜にとどまらず',
    romaji: 'ni todomarazu',
    level: 'N1',
    description: '〜にとどまらず means "not limited to / not stopping at / extending beyond" — it expresses that something goes beyond the initial scope: 国内にとどまらず、海外でも人気がある (it is popular not just domestically but overseas as well). The scope of the situation or effect is wider than one might initially expect.\n\nにとどまらず is a formal and literary expression. It follows nouns and often signals an expansion — the effect or application extends beyond the stated limit. The second clause introduces the additional scope.',
    usage: 'Noun + にとどまらず',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%A8%E3%81%A9%E3%81%BE%E3%82%89%E3%81%9A' }],
    examples: [
      { japanese: 'その影響は日本にとどまらず、世界中に広がった。', romaji: 'Sono eikyou wa nihon ni todomarazu, sekaijuu ni hirogatta.', english: 'The impact spread not just to Japan but throughout the world.' },
      { japanese: '彼の才能は音楽にとどまらず、絵画でも発揮された。', romaji: 'Kare no sainou wa ongaku ni todomarazu, kaiga de mo hakki sareta.', english: 'His talent was not limited to music — it was also demonstrated in painting.' },
      { japanese: '環境問題は一国にとどまらず、地球規模の課題だ。', romaji: 'Kankyou mondai wa ikkoku ni todomarazu, chikyuu kibo no kadai da.', english: 'Environmental issues are not limited to a single country — they are a global challenge.' }
    ],
    notes: 'にとどまらず is similar in meaning to 〜だけでなく (not just...but also) but is more formal and emphasizes the expansion or overflow beyond an expected boundary.'
  },
  {
    id: 'n1-you-de-wa',
    name: '〜ようでは',
    romaji: 'you de wa',
    level: 'N1',
    description: '〜ようでは means "if it is the case that / the way things are going / if one is in a state where" — it introduces a current situation that the speaker evaluates as problematic, leading to a warning or negative conclusion: こんなことも知らないようでは、試験に受からないよ (if you don\'t even know something like this, you won\'t pass the exam).\n\nようでは is followed by a negative conclusion or warning. The pattern ようでは〜ない is common — "if one is in the state of doing X, (some negative consequence) will not happen." It sets up a standard and implies the subject falls short.',
    usage: 'Verb (dict./て-form) + ようでは',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%82%88%E3%81%86%E3%81%A7%E3%81%AF' }],
    examples: [
      { japanese: '基本もできないようでは、プロにはなれない。', romaji: 'Kihon mo dekinai you de wa, puro ni wa narenai.', english: 'If you cannot even do the basics, you will never become a professional.' },
      { japanese: 'こんなことで諦めるようでは、先が思いやられる。', romaji: 'Konna koto de akirameru you de wa, saki ga omoi yarareru.', english: 'If you are going to give up over something like this, the future looks bleak.' },
      { japanese: '指示待ちしているようでは、リーダーにはなれない。', romaji: 'Shiji machi shite iru you de wa, riidaa ni wa narenai.', english: 'If you just wait for instructions, you can never become a leader.' }
    ],
    notes: 'ようでは is always followed by a negative judgment or warning. Compare with ようなら (if it seems that — neutral conditional) and ようでは (if the situation is such that — implies falling short).'
  },
  {
    id: 'n1-you-mono-nara',
    name: '〜ようものなら',
    romaji: 'you mono nara',
    level: 'N1',
    description: '〜ようものなら means "if one were to (do something daring/risky)" — it introduces a hypothetical action that would lead to serious or extreme consequences. The speaker implies that the action is risky, forbidden, or extremely inadvisable: 少しでも文句を言おうものなら、怒鳴られる (if you were to say even a little complaint, you would get yelled at).\n\nようものなら always uses the volitional form (〜よう / 〜おう) before ものなら. The consequence described in the second clause is typically severe, immediate, or highly undesirable. It is a formal literary expression.',
    usage: 'Verb (volitional) + ものなら',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%82%88%E3%81%86%E3%82%82%E3%81%AE%E3%81%AA%E3%82%89' }],
    examples: [
      { japanese: '彼に反論しようものなら、大変なことになる。', romaji: 'Kare ni ronkou shiyou mono nara, taihen na koto ni naru.', english: 'If you were to argue back with him, things would get very bad.' },
      { japanese: '少し遅刻しようものなら、厳しく叱られる。', romaji: 'Sukoshi chikoku shiyou mono nara, kibishiku shikareru.', english: 'If you were to be even a little late, you would be severely scolded.' },
      { japanese: 'その話題に触れようものなら、すぐに泣き出してしまう。', romaji: 'Sono wadai ni fureyou mono nara, sugu ni nakidashite shimau.', english: 'If you were to bring up that topic, she would immediately burst into tears.' }
    ],
    notes: 'ようものなら is a strong warning form — it implies the action is dangerous or ill-advised. Compare with 〜たら/〜ば (neutral conditionals) and 〜でもしようものなら (if one were even to try doing) — an even more emphatic variant.'
  },
  {
    id: 'n1-yori-hoka-nai',
    name: '〜よりほかない',
    romaji: 'yori hoka nai',
    level: 'N1',
    description: '〜よりほかない (also 〜よりほかはない / 〜よりしかたがない) means "have no choice but to / there is nothing to do but / can only." It expresses that there is no alternative — the stated action is the only option remaining: 諦めるよりほかない (there is nothing to do but give up).\n\nよりほかない is the literary and formal equivalent of 〜しかない or 〜ほかならない. It follows the dictionary form of verbs. The nuance is resigned acceptance — the speaker has considered alternatives but found none.',
    usage: 'Verb (dict.) + よりほかない / よりほかはない',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%82%88%E3%82%8A%E3%81%BB%E3%81%8B%E3%81%AA%E3%81%84' }],
    examples: [
      { japanese: 'もう時間がないので、タクシーで行くよりほかない。', romaji: 'Mou jikan ga nai node, takushii de iku yori hoka nai.', english: 'There is no time left, so there is nothing to do but take a taxi.' },
      { japanese: '証拠がない以上、釈放するよりほかはない。', romaji: 'Shouko ga nai ijou, shakuhou suru yori hoka wa nai.', english: 'Without evidence, there is no choice but to release them.' },
      { japanese: 'こうなっては、腹をくくって戦うよりほかない。', romaji: 'Kou natte wa, hara wo kukutte tatakau yori hoka nai.', english: 'Things having come to this, there is nothing to do but steel ourselves and fight.' }
    ],
    notes: 'よりほかない is equivalent in meaning to するしかない but is more literary. Related forms: よりしかたがない, よりほかはない, 〜のほかは〜ない. All express the same resigned "no choice" nuance.'
  },
  {
    id: 'n1-wo-oite',
    name: '〜をおいて',
    romaji: 'wo oite',
    level: 'N1',
    description: '〜をおいて (〜を置いて) means "other than / apart from / setting aside." It is used to single out a person or thing as uniquely suited or irreplaceable: この仕事ができるのは、彼女をおいてほかにいない (other than her, there is no one else who can do this job). The pattern always appears in a negative sentence: をおいてほかに〜ない or をおいてほかならない.\n\nをおいて expresses exclusivity and uniqueness. The subject highlighted is presented as the only possible option, with all other alternatives implicitly ruled out. It is a formal and literary expression.',
    usage: 'Noun + をおいて(ほかに) + Negative',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%82%92%E3%81%8A%E3%81%84%E3%81%A6' }],
    examples: [
      { japanese: 'このプロジェクトを任せられるのは彼をおいてほかにいない。', romaji: 'Kono purojekuto wo makaserareru no wa kare wo oite hoka ni inai.', english: 'Other than him, there is no one else who can be entrusted with this project.' },
      { japanese: 'この問題の解決策は外交的アプローチをおいてほかにない。', romaji: 'Kono mondai no kaiketsusaku wa gaikouteki apuroochi wo oite hoka ni nai.', english: 'Other than a diplomatic approach, there is no solution to this problem.' },
      { japanese: '日本語を教えるのに最適なのは、彼女をおいてほかにはいない。', romaji: 'Nihongo wo oshieru no ni saiteki na no wa, kanojo wo oite hoka ni wa inai.', english: 'When it comes to teaching Japanese, no one is more suited than her.' }
    ],
    notes: 'をおいて is always used with ほかにない or similar negative phrases. The meaning is "excluding X, there is no other." It is closely related to をはじめ (X being the prime example) but stronger — X is presented as the sole option.'
  },
  {
    id: 'n1-wo-kagiri-ni',
    name: '〜を限りに',
    romaji: 'wo kagiri ni',
    level: 'N1',
    description: '〜を限りに means "as of / from...on / making...the last" — it marks a point in time after which something will no longer continue: 今日を限りに、タバコをやめる (from today on, I will quit smoking — making today the last day). It indicates a definitive endpoint or cutoff.\n\nを限りに follows nouns referring to time points: 今日を限りに, 今月を限りに, この大会を限りに (making this tournament the last). It is formal and often used in declarations or announcements of a change.',
    usage: 'Noun (time) + を限りに',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%82%92%E9%99%90%E3%82%8A%E3%81%AB' }],
    examples: [
      { japanese: '今シーズンを限りに、現役を引退することにしました。', romaji: 'Kon shiizon wo kagiri ni, genjuu wo intai suru koto ni shimashita.', english: 'I have decided to retire from active competition after this season.' },
      { japanese: '今日を限りに、あの人とは連絡を取らない。', romaji: 'Kyou wo kagiri ni, ano hito to wa renraku wo toranai.', english: 'From today on, I will not contact that person.' },
      { japanese: '今年度を限りに、この制度は廃止される予定です。', romaji: 'Konnen do wo kagiri ni, kono seido wa haishi sareru yotei desu.', english: 'This system is scheduled to be abolished at the end of this fiscal year.' }
    ],
    notes: 'を限りに is used for definitive endpoints — the moment after which something changes permanently. Compare with を機に (taking the opportunity of — positive trigger) and 〜をもって (as of — formal announcement form).'
  },
  {
    id: 'n1-wo-motte',
    name: '〜をもって',
    romaji: 'wo motte',
    level: 'N1',
    description: '〜をもって has two main uses. First, it means "as of / with effect from" in formal announcements: 本日をもって、閉店いたします (we will be closing as of today). Second, it means "by means of / with / using" — indicating the method or means: 実力をもって証明した (proved it through ability).\n\nをもって is the formal equivalent of で (by means of) or に (at the time of). It appears in official announcements, business language, and formal writing. In the "as of" usage, it typically marks the end of something.',
    usage: 'Noun + をもって',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%82%92%E3%82%82%E3%81%A3%E3%81%A6' }],
    examples: [
      { japanese: '本日をもちまして、弊店の営業を終了いたします。', romaji: 'Honjitsu wo mochimashite, heiten no eigyou wo shuuryou itashimasu.', english: 'As of today, our store will be closing its operations.' },
      { japanese: '全員の協力をもって、プロジェクトを成功させた。', romaji: 'Zenin no kyouryoku wo motte, purojekuto wo seikou saseta.', english: 'With the cooperation of everyone, we made the project a success.' },
      { japanese: 'この書類をもって、申請を完了とします。', romaji: 'Kono shorui wo motte, shinsei wo kanryou to shimasu.', english: 'With this document, the application will be considered complete.' }
    ],
    notes: 'をもって vs をもちまして: をもちまして is the more polite form used in formal announcements (business closures, event endings). をもってすれば (if one uses/has X) is a conditional variant meaning "if one has the means of X."'
  },
  {
    id: 'n1-n-bakari-ni',
    name: '〜んばかりに',
    romaji: 'n bakari ni',
    level: 'N1',
    description: '〜んばかりに (〜んばかりの / 〜んばかりだ) means "as if about to / as though ready to / looking as if one would" — it describes a situation where someone\'s appearance or behavior is so extreme that they look as if they are on the verge of doing the stated action: 泣かんばかりの顔で訴えた (appealed with a face that looked as if she would cry at any moment).\n\nんばかり uses the archaic negative stem (〜ん, from 〜ぬ): 書かんばかり (as if about to write). The grammar is literary. Used to describe an extreme emotional state or physical appearance suggesting an imminent action.',
    usage: 'Verb (ない-stem) + んばかりに / んばかりの / んばかりだ',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%82%93%E3%81%B0%E3%81%8B%E3%82%8A%E3%81%AB' }],
    examples: [
      { japanese: '彼は怒鳴らんばかりの勢いで抗議した。', romaji: 'Kare wa donaranba kari no ikioi de kougi shita.', english: 'He protested with such force that he looked as if he was about to shout.' },
      { japanese: '涙があふれんばかりの感動的なスピーチだった。', romaji: 'Namida ga afuren bakari no kandouteki na supiiichi datta.', english: 'It was an emotional speech that almost brought tears to your eyes.' },
      { japanese: '彼女は今にも泣き出さんばかりの表情をしていた。', romaji: 'Kanojo wa ima ni mo nakidasanba kari no hyoujou wo shite ita.', english: 'She had an expression that looked as if she would burst into tears at any moment.' }
    ],
    notes: 'Conjugation: remove ない to get the ない-stem, then add んばかり: 泣か(ない) → 泣かんばかり, 言わ(ない) → 言わんばかり. する → せんばかり. Literary and not used in everyday speech.'
  },
  {
    id: 'n1-motto-yori',
    name: 'もとより',
    romaji: 'moto yori',
    level: 'N1',
    description: 'もとより has two distinct meanings. First, "naturally / of course / needless to say" — emphasizing that something is a matter of course: その事実はもとより知っていた (I naturally already knew that fact). Second, "from the beginning / from the start / from the outset": もとより覚悟はできていた (I was prepared from the start).\n\nIn both usages, もとより is a formal literary adverb. In the first sense it is equivalent to もちろん or 言うまでもなく. In the second, it emphasizes an original state that has been consistent since the very beginning. It appears in written Japanese and formal speech.',
    usage: 'もとより + Statement',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%82%82%E3%81%A8%E3%82%88%E3%82%8A' }],
    examples: [
      { japanese: 'その困難は、もとより予想していたことだ。', romaji: 'Sono konnan wa, moto yori yosou shite ita koto da.', english: 'That difficulty was something I had naturally anticipated from the start.' },
      { japanese: '彼女はもとより才能があった。', romaji: 'Kanojo wa moto yori sainou ga atta.', english: 'She was talented from the very beginning.' },
      { japanese: '健康はもとより、精神的な豊かさも大切だ。', romaji: 'Kenkou wa moto yori, seishinteki na yutakasa mo taisetsu da.', english: 'Health goes without saying — mental richness is also important.' }
    ],
    notes: 'As "needless to say," もとより is more formal than もちろん. As "from the beginning," it overlaps with 最初から but carries a more literary, emphatic tone. The third example shows the "needless to say" usage similar to は言うまでもなく.'
  },
  {
    id: 'n1-wo-kiikkake-ni',
    name: '〜をきっかけに',
    romaji: 'wo kikkake ni',
    level: 'N1',
    description: '〜をきっかけに means "triggered by / taking...as an opportunity / with...as the turning point." It indicates that a change or new action was set off by a specific event or opportunity: 病気をきっかけに、健康に気をつけるようになった (triggered by illness, I started taking care of my health).\n\nきっかけ (契機) means "trigger / opportunity / starting point." をきっかけに (or をきっかけとして) marks the event that set things in motion. The change described is typically a positive development or a significant shift in behavior or circumstances.',
    usage: 'Noun + をきっかけに（して）',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%82%92%E3%81%8D%E3%81%A3%E3%81%8B%E3%81%91%E3%81%AB' }],
    examples: [
      { japanese: '留学をきっかけに、将来の夢が見つかった。', romaji: 'Ryuugaku wo kikkake ni, shourai no yume ga mitsukatta.', english: 'Studying abroad was the trigger that led me to find my dream for the future.' },
      { japanese: 'その事故をきっかけに、安全管理が見直された。', romaji: 'Sono jiko wo kikkake ni, anzen kanri ga minaosareta.', english: 'That accident prompted a review of safety management.' },
      { japanese: '転職をきっかけとして、新しい分野に挑戦することにした。', romaji: 'Tenshoku wo kikkake to shite, atarashii bunya ni chousen suru koto ni shita.', english: 'Taking my job change as an opportunity, I decided to challenge myself in a new field.' }
    ],
    notes: 'をきっかけに vs を機に (wo ki ni): both mean "taking...as an opportunity." をきっかけに emphasizes a trigger or catalyst for change; を機に is slightly more formal and emphasizes a timely opportunity.'
  },
  {
    id: 'n1-ikura-temo',
    name: '〜いくら〜ても',
    romaji: 'ikura ~ temo',
    level: 'N1',
    description: '〜いくら〜ても means "no matter how much / even if one does as much as" — it expresses that the result does not change regardless of the degree or amount of the action: いくら頑張っても、間に合わなかった (no matter how hard I tried, I could not make it in time). The emphasis is on the futility or insufficiency of the effort in relation to the outcome.\n\nいくら is an adverb of degree meaning "how much / however much." Combined with ても, it creates a concessive conditional that dismisses any amount of effort as insufficient to change the result.',
    usage: 'いくら + Verb (て-form) / Adjective (くて) + も',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%84%E3%81%8F%E3%82%89%E3%81%A6%E3%82%82' }],
    examples: [
      { japanese: 'いくら急いでも、もう終わった後だ。', romaji: 'Ikura isoide mo, mou owatta ato da.', english: 'No matter how much you hurry, it is already over.' },
      { japanese: 'いくらお金があっても、健康には代えられない。', romaji: 'Ikura okane ga atte mo, kenkou ni wa kaerarenai.', english: 'No matter how much money you have, it cannot replace health.' },
      { japanese: 'いくら説明しても、彼には理解してもらえなかった。', romaji: 'Ikura setsumei shite mo, kare ni wa rikai shite moraenakatta.', english: 'No matter how much I explained, I could not get him to understand.' }
    ],
    notes: 'いくら〜ても focuses on the quantity/degree being insufficient. Compare with たとえ〜ても (even if — focuses on a hypothetical case regardless of conditions) and どんなに〜ても (no matter how — focuses on the quality/intensity).'
  },
  {
    id: 'n1-na-i-to-wa',
    name: '〜とは',
    romaji: 'to wa',
    level: 'N1',
    description: '〜とは (when used at the end of a clause or before は/も) expresses strong surprise, emotion, or indignation at an unexpected fact — "to think that / I can\'t believe that / the very idea that." It marks the speaker\'s emotional reaction to a surprising or noteworthy situation: そんな簡単なことを知らないとは (to think that you don\'t know something so simple — I\'m shocked).\n\nとは in this usage is followed by a strong evaluative expression (驚いた — surprised; 情けない — pathetic; 思わなかった — I didn\'t expect), or stands alone as a rhetorical exclamation. It is distinct from とは as a defining particle ("X is defined as...").',
    usage: 'Clause (plain form) + とは (+ emotional judgment)',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%AF-2' }],
    examples: [
      { japanese: '彼がそんな嘘をつくとは思わなかった。', romaji: 'Kare ga sonna uso wo tsuku to wa omowanakatta.', english: 'I never thought he would tell such a lie.' },
      { japanese: 'こんな若さで社長になるとは、大したものだ。', romaji: 'Konna wakasa de shachou ni naru to wa, taishita mono da.', english: 'To become company president at such a young age — that is remarkable.' },
      { japanese: '自分の子供を傷つけるとは、何とひどい親だ。', romaji: 'Jibun no kodomo wo kizutsukeru to wa, nanto hidoi oya da.', english: 'To harm one\'s own child — what a terrible parent.' }
    ],
    notes: 'This exclamatory とは differs from the definitional とは (X means Y) and the topic-setting とは (as for X). Context and intonation distinguish them. The exclamatory とは is always triggered by something surprising or emotionally charged.'
  },
  {
    id: 'n1-ha-are',
    name: '〜はあれ',
    romaji: 'wa are',
    level: 'N1',
    description: '〜はあれ means "although there is / even with / despite the existence of" — it acknowledges the existence of something while noting that it does not prevent or override what follows. It is a concessive structure similar to ではあるが: 不満はあれ、現状に従うしかない (although there are dissatisfactions, there is no choice but to follow the current situation).\n\nはあれ is a literary and formal pattern, derived from the classical wa + are (concessive form of ある). It is used in formal writing and speeches to acknowledge a competing consideration before proceeding.',
    usage: 'Noun + はあれ',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%81%AF%E3%81%82%E3%82%8C' }],
    examples: [
      { japanese: '異論はあれ、この決定に従ってもらう必要がある。', romaji: 'Iron wa are, kono kettei ni shitagatte morau hitsuyou ga aru.', english: 'Although there may be objections, you will need to follow this decision.' },
      { japanese: '不安はあれ、前に進むしかない。', romaji: 'Fuan wa are, mae ni susumu shika nai.', english: 'Although there are anxieties, there is nothing to do but move forward.' },
      { japanese: '多少の問題はあれ、このプランで進めましょう。', romaji: 'Tashou no mondai wa are, kono puran de susumemasyou.', english: 'Although there are minor problems, let us proceed with this plan.' }
    ],
    notes: 'はあれ is a classical/literary form. The modern equivalent is ではあるが or があっても. It appears in formal prose, legal texts, and careful written Japanese.'
  },
  {
    id: 'n1-nt-to-suru',
    name: '〜んとする',
    romaji: 'n to suru',
    level: 'N1',
    description: '〜んとする (〜んとしている) means "to be on the verge of / to be about to / to try to (literary)" — it expresses that something is at the point of happening or that someone is in the process of trying to do something. It is the literary and archaic equivalent of 〜ようとする: 消えんとする炎 (a flame that is about to go out).\n\nんとする uses the archaic negative stem (〜ん from 〜ぬ). It is a classical form that appears in literary texts, poetry, and formal prose. する can also be in the ている form (んとしている) to describe an ongoing near-transition.',
    usage: 'Verb (ない-stem) + んとする / んとしている',
    links: [{ label: 'Bunpro', url: 'https://bunpro.jp/grammar_points/%E3%82%93%E3%81%A8%E3%81%99%E3%82%8B' }],
    examples: [
      { japanese: '太陽が沈まんとする夕暮れ時に、彼女と出会った。', romaji: 'Taiyou ga shizumanto suru yuugure doki ni, kanojo to deatta.', english: 'I met her at dusk, just as the sun was about to set.' },
      { japanese: '倒れんとしている木を必死に支えた。', romaji: 'Taorentotsuru ki wo hisshi ni sasaeta.', english: 'I desperately supported the tree that was about to fall.' },
      { japanese: '新しい時代が始まらんとしている。', romaji: 'Atarashii jidai ga hajimaran to shite iru.', english: 'A new era is about to begin.' }
    ],
    notes: 'Conjugation: ない-stem + ん + とする: 落ちる → 落ちんとする, 死ぬ → 死なんとする, する → せんとする. This is a literary form not used in everyday conversation. Compare with 〜ようとする (modern equivalent).'
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
console.log(`\nDone. Added ${added} new N1 entries. Total: ${data.length}`)
