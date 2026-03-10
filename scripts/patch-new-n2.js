const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '../src/data/grammar.json')
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))

const newEntries = [
  {
    id: 'n2-ageku',
    name: '〜あげく(に)',
    romaji: '〜ageku (ni)',
    level: 'N2',
    description: 'あげく(に) means "in the end", "after all that", or "finally (after a long struggle)". It follows a noun の or a verb た-form and indicates that after a lengthy or difficult process, an often undesirable result was reached. The nuance is that the process was exhausting or problematic, and the outcome is usually negative.\n\nあげく (also written 挙句) originally meant "the final verse of a linked poem", and now metaphorically means "the end result of a drawn-out process".',
    usage: 'Verb (た-form) + あげく(に) / Noun + の + あげく(に)',
    links: [],
    examples: [
      { japanese: '長い間悩んだあげく、仕事を辞めることにした。', romaji: 'Nagai aida nayanda ageku, shigoto wo yameru koto ni shita.', english: 'After agonizing for a long time, I finally decided to quit my job.' },
      { japanese: '議論のあげく、何も決まらなかった。', romaji: 'Giron no ageku, nani mo kimaranakatta.', english: 'After all the arguing, nothing was decided.' }
    ],
    notes: 'あげく(に) almost always precedes a negative or unfortunate outcome. Compare: 末に (sue ni, N1) which can appear with both positive and negative outcomes after a long process; あげく is predominantly negative. The に is optional but common.'
  },
  {
    id: 'n2-aruiwa',
    name: 'あるいは',
    romaji: 'aruiwa',
    level: 'N2',
    description: 'あるいは means "or", "alternatively", or "perhaps". As a conjunction, it presents two alternatives or possibilities — similar to か (or) but more formal and used in written language. As an adverb, it means "possibly" or "perhaps".\n\nIn formal writing and speeches, あるいは is used to introduce an alternative option or possibility. It is more formal than または (or) and much more formal than か.',
    usage: '[Option A] あるいは [Option B] / あるいは + [possibility]',
    links: [],
    examples: [
      { japanese: 'メールあるいは電話でご連絡ください。', romaji: 'Meeru aruiwa denwa de go-renraku kudasai.', english: 'Please contact us by email or phone.' },
      { japanese: 'あるいは、彼はもう知っているかもしれない。', romaji: 'Aruiwa, kare wa mou shitte iru kamo shirenai.', english: 'Or perhaps he already knows.' }
    ],
    notes: 'あるいは (formal written) vs または (or, neutral written) vs か (or, spoken). あるいは is the most formal of these alternatives conjunctions and is less common in everyday conversation. As "perhaps", it adds hedging to a statement.'
  },
  {
    id: 'n2-dake-atte',
    name: '〜だけあって',
    romaji: '〜dake atte',
    level: 'N2',
    description: 'だけあって means "as expected of ~", "being ~, it\'s no wonder that ~", or "it\'s just what you\'d expect from ~". It indicates that the result in the main clause is a natural and deserved consequence of the quality or status in the preceding clause. The tone is usually one of recognition or acknowledgment.\n\nだけあって presupposes that the noun or situation has a high standard or special quality, and the following clause shows that this quality has lived up to expectations.',
    usage: 'Noun + だけあって / Verb (plain) + だけあって',
    links: [],
    examples: [
      { japanese: 'さすが有名なシェフだけあって、料理がとてもおいしい。', romaji: 'Sasuga yuumei na shiefu dake atte, ryouri ga totemo oishii.', english: 'As expected of a famous chef, the food is incredibly delicious.' },
      { japanese: '十年練習しただけあって、彼のピアノは素晴らしい。', romaji: 'Juu-nen renshuu shita dake atte, kare no piano wa subarashii.', english: 'Having practiced for ten years, his piano playing is wonderful — and no wonder.' }
    ],
    notes: 'だけあって vs だけに: both indicate "as expected because of ~". だけあって typically expresses recognition/admiration of a positive outcome; だけに can be used with both positive and more emphatic/emotional outcomes. さすが often appears together with だけあって.'
  },
  {
    id: 'n2-dake-ni',
    name: '〜だけに',
    romaji: '〜dake ni',
    level: 'N2',
    description: 'だけに means "precisely because ~", "all the more because ~", or "because of (that very reason), ~". It emphasizes that the reason in the preceding clause makes the result in the main clause especially strong, understandable, or poignant. The result is often emotional or significant.\n\nUnlike だけあって (which focuses on recognition of quality), だけに focuses on causation — the very factor mentioned is what makes the outcome particularly intense.',
    usage: 'Noun + だけに / Verb (plain) + だけに / い-adj + だけに',
    links: [],
    examples: [
      { japanese: '期待が大きかっただけに、失敗したときのショックも大きかった。', romaji: 'Kitai ga okikatta dake ni, shippai shita toki no shokku mo okikatta.', english: 'Precisely because expectations were high, the shock of failure was also great.' },
      { japanese: '長い間準備しただけに、いい結果を出したい。', romaji: 'Nagai aida junbi shita dake ni, ii kekka wo dashitai.', english: 'Having prepared for a long time, I want all the more to get a good result.' }
    ],
    notes: 'だけに can express both positive and negative outcomes. The key is that the first clause is the specific reason the main clause is especially true. Compare: だけあって (as expected — quality recognition) vs だけに (precisely because — causal emphasis).'
  },
  {
    id: 'n2-chinamini',
    name: 'ちなみに',
    romaji: 'chinamini',
    level: 'N2',
    description: 'ちなみに is a discourse marker meaning "by the way", "incidentally", or "in this connection". It introduces related but supplementary information — something connected to the preceding topic but not the main point of discussion. It signals a tangential remark.\n\nUnlike それから (by the way, changing topic), ちなみに keeps the remark connected to the current topic. It often provides additional, interesting context or a relevant personal example.',
    usage: 'ちなみに + [related supplementary information]',
    links: [],
    examples: [
      { japanese: '彼はとても有名な俳優です。ちなみに、私は彼と同じ出身地です。', romaji: 'Kare wa totemo yuumei na haiyuu desu. Chinamini, watashi wa kare to onaji shusshinchi desu.', english: 'He is a very famous actor. By the way, I\'m from the same hometown as him.' },
      { japanese: 'この店はランチが人気です。ちなみに、ディナーも予約制です。', romaji: 'Kono mise wa ranchi ga ninki desu. Chinamini, dinaa mo yoyakusei desu.', english: 'This restaurant is popular for lunch. Incidentally, dinner also requires a reservation.' }
    ],
    notes: 'ちなみに appears at the beginning of a sentence or clause and connects to the previous statement. It is common in conversation and formal presentations alike. Unlike それとも (or rather) or ところで (by the way, more of a topic shift), ちなみに keeps thematic continuity.'
  },
  {
    id: 'n2-dokoro-ka',
    name: '〜どころか',
    romaji: '〜dokoro ka',
    level: 'N2',
    description: 'どころか means "far from ~", "let alone ~", "on the contrary", or "not only ~ but even". It indicates that the reality is the complete opposite of or much more extreme than what was expected. It negates the expectation implied by the first element and replaces it with a contrasting, often extreme reality.\n\nThe pattern is highly emphatic. If A is stated first with どころか, the second element B is either the opposite of A, or goes beyond A in the same direction.',
    usage: 'Noun + どころか / Verb (plain) + どころか / い-adj + どころか',
    links: [],
    examples: [
      { japanese: '日本語が上手どころか、挨拶もできない。', romaji: 'Nihongo ga jouzu dokoro ka, aisatsu mo dekinai.', english: 'Far from being good at Japanese, I can\'t even greet people.' },
      { japanese: '状況は改善するどころか、さらに悪化した。', romaji: 'Joukyou wa kaizen suru dokoro ka, sarani akka shita.', english: 'Far from improving, the situation got even worse.' }
    ],
    notes: 'どころか vs はおろか: both mean "let alone / far from". はおろか (N1) is slightly more literary and emphatic; どころか is used at N2 and is very common. Both follow the structure "not A, in fact not even B (even more extreme)".'
  },
  {
    id: 'n2-dokoro-dewa-nai',
    name: '〜どころではない',
    romaji: '〜dokoro dewa nai',
    level: 'N2',
    description: 'どころではない means "this is no time for ~", "it\'s not a situation for ~", or "far from being a case of ~". It expresses that due to some pressing circumstance, the thing mentioned is completely impossible or inappropriate to engage in. The speaker is indicating that the situation is too serious/busy for the mentioned activity.\n\nThe casual form is どころじゃない. This pattern often appears when dismissing something as impossible given the current circumstances.',
    usage: 'Noun + どころではない / Verb (plain) + どころではない',
    links: [],
    examples: [
      { japanese: '試験前なので、遊んでいるどころではない。', romaji: 'Shiken mae na node, asonde iru dokoro dewa nai.', english: 'It\'s before exams, so there\'s no time to be playing around.' },
      { japanese: '旅行どころではない。仕事が山積みだ。', romaji: 'Ryokou dokoro dewa nai. Shigoto ga yamazumi da.', english: 'There\'s no question of travel — I\'m swamped with work.' }
    ],
    notes: 'どころではない is used to strongly dismiss or deny a possibility because the situation is too pressing. Compare: どころか (on the contrary, far from) which contrasts two states; どころではない dismisses the topic as inappropriate or impossible given circumstances.'
  },
  {
    id: 'n2-douse',
    name: 'どうせ',
    romaji: 'douse',
    level: 'N2',
    description: 'どうせ is an adverb meaning "anyway", "in any case", "since it will happen regardless", or "you may as well ~". It conveys a sense of resignation or fatalism — the speaker feels that the outcome is inevitable, so resistance or hope is pointless.\n\nどうせ can express both resignation ("it\'s hopeless anyway") and a kind of pragmatic acceptance ("since it\'s going to happen anyway, might as well ~"). The tone is often slightly negative or cynical.',
    usage: 'どうせ + Verb / どうせ + [statement of inevitable fact]',
    links: [],
    examples: [
      { japanese: 'どうせ失敗するなら、最初からやらなければよかった。', romaji: 'Douse shippai suru nara, saisho kara yaranakere ba yokatta.', english: 'If I was going to fail anyway, I shouldn\'t have started in the first place.' },
      { japanese: 'どうせ雨が降るから、傘を持っていこう。', romaji: 'Douse ame ga furu kara, kasa wo motte ikou.', english: 'Since it\'s going to rain anyway, let\'s take an umbrella.' }
    ],
    notes: 'どうせ carries a resigned or fatalistic tone. It often implies "I knew this would happen" or "there\'s nothing I can do about it". Compare: いずれにしても (in any case, neutral) vs どうせ (resigned/cynical acceptance). Very common in everyday speech.'
  },
  {
    id: 'n2-eru-uru',
    name: '〜得る・〜得ない',
    romaji: '〜eru / 〜uru / 〜enai',
    level: 'N2',
    description: '得る (える・うる) attached to verb masu-stems means "can ~", "is possible to ~", or "it is conceivable that ~". It expresses the theoretical possibility of something occurring. The negative 得ない (えない) means "cannot ~" or "is impossible to ~".\n\n得る is formal and often appears in written language. In spoken Japanese, ことができる or られる are more common. 得る (うる) is the literary reading; 得る (える) is the modern standard.',
    usage: 'Verb (ます-stem) + 得る / Verb (ます-stem) + 得ない',
    links: [],
    examples: [
      { japanese: 'そのような事態は起こり得る。', romaji: 'Sono you na jitai wa okori uru.', english: 'Such a situation can occur / is possible.' },
      { japanese: '信じ得ない話を聞いた。', romaji: 'Shinji enai hanashi wo kiita.', english: 'I heard an unbelievable story.' }
    ],
    notes: '得る as a standalone verb means "to obtain/get" (成功を得る = to achieve success). As a suffix (ます-stem + 得る), it is a potential/modal expression. 得ない (enai) is its negative. ありえる/ありえない (can happen/cannot happen) is a very common example heard daily.'
  },
  {
    id: 'n2-gyaku-ni',
    name: '逆に',
    romaji: 'gyaku ni',
    level: 'N2',
    description: '逆に (ぎゃくに) is an adverb meaning "conversely", "on the contrary", "instead", or "the opposite". It introduces a statement that is the reverse of what was previously stated or expected. It can express irony (something had the opposite effect) or simply present the other side of a situation.\n\nAs a discourse marker, 逆に sets up a reversal or contrast, making it clear that the following statement goes against the previous direction.',
    usage: '逆に + [contrasting statement]',
    links: [],
    examples: [
      { japanese: '助けようとしたが、逆に迷惑をかけてしまった。', romaji: 'Tasukeyou to shita ga, gyaku ni meiwaku wo kakete shimatta.', english: 'I tried to help, but instead I caused trouble.' },
      { japanese: '批判されると、逆にやる気が出る。', romaji: 'Hihan sareru to, gyaku ni yaruki ga deru.', english: 'When criticized, conversely, I get even more motivated.' }
    ],
    notes: '逆に is very common in spoken and written Japanese as a discourse connector. 逆 (ぎゃく) means "reverse/opposite". 逆効果 (gyaku kouka) = counterproductive effect — the opposite result. 逆に言えば = "conversely speaking" or "flipping it around".'
  },
  {
    id: 'n2-hanmen',
    name: '〜反面',
    romaji: '〜hanmen',
    level: 'N2',
    description: '反面 (はんめん) means "on the other hand", "while ~", or "at the same time ~". It presents two contrasting aspects of the same subject — usually two qualities that seem contradictory or at odds. The same person, thing, or situation has both attributes simultaneously.\n\nReflecting the "other face" (反面 = opposite face/side), the pattern highlights that every positive has a downside, or that a single entity has two very different facets.',
    usage: 'Verb (plain) + 反面 / い-adj + 反面 / な-adj + な反面 / Noun + の反面',
    links: [],
    examples: [
      { japanese: '彼女は仕事が速い反面、ミスが多い。', romaji: 'Kanojo wa shigoto ga hayai hanmen, misu ga ooi.', english: 'While she works fast, she makes a lot of mistakes.' },
      { japanese: '都市生活は便利な反面、孤独を感じやすい。', romaji: 'Toshi seikatsu wa benri na hanmen, kodoku wo kanjiyasui.', english: 'While urban life is convenient, it\'s easy to feel lonely.' }
    ],
    notes: '反面 vs 一方で: both present two sides. 反面 emphasizes that the two aspects are in contradiction or tension (the "flip side"); 一方で is more neutral, simply presenting two coexisting truths without necessarily implying contradiction.'
  },
  {
    id: 'n2-ichiouu',
    name: '一応',
    romaji: 'ichiou',
    level: 'N2',
    description: '一応 (いちおう) is an adverb meaning "just in case", "for now", "tentatively", "more or less", or "for what it\'s worth". It conveys that something was done adequately but perhaps not perfectly, or that something is being done as a precaution.\n\n一応 often softens statements, suggesting that what follows is a rough approximation, a temporary measure, or something done to cover bases without full commitment. It implies "for the time being" or "at least at a basic level".',
    usage: '一応 + Verb / 一応 + Noun/Adj (more or less)',
    links: [],
    examples: [
      { japanese: '一応確認しておきましょう。', romaji: 'Ichiou kakunin shite okimashou.', english: 'Let\'s confirm it just in case.' },
      { japanese: '一応、準備はできています。', romaji: 'Ichiou, junbi wa dekite imasu.', english: 'For now/more or less, we\'re ready.' }
    ],
    notes: '一応 softens claims or actions, implying they are "good enough" but perhaps incomplete. It\'s different from とりあえず (for now, first/temporarily — more urgent). 一応確認する (check just in case) vs とりあえず確認する (check first, then deal with other things).'
  },
  {
    id: 'n2-igai',
    name: '〜以外',
    romaji: '〜igai',
    level: 'N2',
    description: '以外 (いがい) means "other than ~", "except ~", or "besides ~". It excludes the noun it follows from the scope of the statement. The main clause applies to everything except what is marked with 以外.\n\n以外 can be followed by は (contrastive), に (directional), or で (means). The full form 〜以外に(は)～ない means "only ~; nothing but ~" (strong exclusivity).',
    usage: 'Noun + 以外 (に/は/で) / Noun + 以外の + Noun',
    links: [],
    examples: [
      { japanese: '英語以外に話せる言語はありますか。', romaji: 'Eigo igai ni hanaseru gengo wa arimasu ka.', english: 'Do you speak any languages other than English?' },
      { japanese: '彼以外の人は全員合格した。', romaji: 'Kare igai no hito wa zenin goukaku shita.', english: 'Everyone except him passed.' }
    ],
    notes: '以外 (except/other than) vs 以外に(は)～ない (only/nothing but): 以外 simply excludes; the double form 以外(に/は)ない restricts to only one option. Compare: 〜を除いて (excluding ~, more formal) ≈ 〜以外 (except ~, common).'
  },
  {
    id: 'n2-iwayuru',
    name: 'いわゆる',
    romaji: 'iwayuru',
    level: 'N2',
    description: 'いわゆる means "the so-called ~", "what is known as ~", or "what you might call ~". It introduces a term or concept that is commonly used but perhaps informal, specialized, or somewhat problematic — signaling that the speaker is using a familiar term while perhaps acknowledging its limitations.\n\nいわゆる always precedes the noun it modifies and cannot appear predicatively. It is common in journalism, academic writing, and explanatory speech.',
    usage: 'いわゆる + Noun',
    links: [],
    examples: [
      { japanese: 'いわゆる「草食系男子」という言葉が流行している。', romaji: 'Iwayuru "soushokukei danshi" to iu kotoba ga ryuukou shite iru.', english: 'The so-called "herbivore men" is a popular term.' },
      { japanese: '彼はいわゆるエリートコースを歩んでいる。', romaji: 'Kare wa iwayuru eriito koosu wo ayunde iru.', english: 'He is walking what is known as the elite track.' }
    ],
    notes: 'いわゆる signals that the speaker is borrowing a label or term that others use, sometimes with slight distance from it (as in "what they call" rather than "what I call"). Often seen with quotation marks or specialized vocabulary.'
  },
  {
    id: 'n2-kara-shite',
    name: '〜からして',
    romaji: '〜kara shite',
    level: 'N2',
    description: 'からして has two related uses. (1) "Judging from ~", "based on ~" — using one observation as evidence for a broader conclusion. (2) "Starting from ~", "even ~" — indicating that even the most basic or obvious element (let alone anything else) shows the characteristic. The second use often implies "even that much/that fundamental thing shows it".\n\nIn use (2), からして is emphatic: even the starting point (the most basic element) already demonstrates the quality, implying the rest must be even more so.',
    usage: 'Noun + からして',
    links: [],
    examples: [
      { japanese: '態度からして、彼はやる気がないのだろう。', romaji: 'Taido kara shite, kare wa yaruki ga nai no darou.', english: 'Judging from his attitude, he probably has no motivation.' },
      { japanese: '服からして高そうだ。', romaji: 'Fuku kara shite takasou da.', english: 'Even his clothes look expensive (so he must be wealthy).' }
    ],
    notes: 'からして vs からすると (from ~\'s perspective / judging from ~): similar but からして often implies "even just looking at this one thing"; からすると is more about adopting a viewpoint. Both use evidence for inference.'
  },
  {
    id: 'n2-nomi-narazu',
    name: '〜のみならず',
    romaji: '〜nomi narazu',
    level: 'N2',
    description: 'のみならず means "not only ~, but also ~". It is a formal/literary equivalent of だけでなく. It extends the scope beyond the first element to include an additional, often more significant or surprising element. The second element (も or さえ) is typically more extreme than the first.\n\nのみ is the formal equivalent of だけ (only), and ならず is the classical negative of なる. The resulting phrase is formal and used in writing and speeches.',
    usage: 'Noun + のみならず / Verb (plain) + のみならず',
    links: [],
    examples: [
      { japanese: '日本のみならず、世界中で注目されている。', romaji: 'Nihon nomi narazu, sekaijuu de chuumoku sarete iru.', english: 'Not only Japan, but the whole world is paying attention.' },
      { japanese: '彼女は歌が上手なのみならず、ダンスも素晴らしい。', romaji: 'Kanojo wa uta ga jouzu na nomi narazu, dansu mo subarashii.', english: 'Not only is she good at singing, her dancing is also wonderful.' }
    ],
    notes: 'のみならず (formal) = だけでなく (casual). Both mean "not only ~ but also ~". のみならず appears in formal writing, official documents, and speeches. ばかりか (N2) is another near-synonym but with a stronger sense of surprise at the addition.'
  },
  {
    id: 'n2-hatashite',
    name: 'はたして',
    romaji: 'hatashite',
    level: 'N2',
    description: 'はたして has two uses. (1) "As expected", "sure enough" — confirming that something happened exactly as anticipated (positive or negative). (2) "I wonder if ~", "really ~?" — expressing doubt or rhetorical questioning about whether something is truly the case. This second use often appears in interrogative sentences.\n\nIn use (1) it confirms a prediction. In use (2) it questions one, often rhetorically.',
    usage: 'はたして + [confirmation or rhetorical question]',
    links: [],
    examples: [
      { japanese: 'はたして、彼の言ったとおりになった。', romaji: 'Hatashite, kare no itta toori ni natta.', english: 'Sure enough, it turned out exactly as he said.' },
      { japanese: 'はたしてこの計画はうまくいくだろうか。', romaji: 'Hatashite kono keikaku wa umaku iku darou ka.', english: 'I wonder if this plan will really work out.' }
    ],
    notes: 'はたして in rhetorical questions implies that the speaker doubts the answer is yes: はたして成功するだろうか (Will it really succeed? — implying skepticism). As "sure enough", it confirms a prior expectation. Context determines which meaning applies.'
  },
  {
    id: 'n2-mono-ka',
    name: '〜ものか',
    romaji: '〜mono ka',
    level: 'N2',
    description: 'ものか (also written もんか in casual speech) is a rhetorical expression meaning "as if ~", "no way I would ~", "I\'d never ~". It strongly denies something with emotional emphasis, expressing refusal, defiance, or disbelief. The speaker emphatically rejects the idea that they would do or that something is the case.\n\nThe question か has rhetorical force — it is not a genuine question but a strong denial. Often accompanied by strong emotions like frustration, determination, or indignation.',
    usage: 'Verb (plain) + ものか / い-adj + ものか',
    links: [],
    examples: [
      { japanese: 'あんな人に謝るものか！', romaji: 'Anna hito ni ayamaru mono ka!', english: 'There\'s no way I\'m going to apologize to someone like that!' },
      { japanese: 'こんな難しい問題が解けるものか。', romaji: 'Konna muzukashii mondai ga tokeru mono ka.', english: 'As if I could solve such a difficult problem!' }
    ],
    notes: 'ものか vs わけがない: ものか is an emotional/rhetorical denial ("no way I would!"); わけがない is logical denial ("it\'s impossible that"). ものか is first-person defiance; わけがない is factual impossibility. Casual forms: もんか, もんかね.'
  },
  {
    id: 'n2-mashi-da',
    name: '〜ましだ',
    romaji: '〜mashi da',
    level: 'N2',
    description: 'ましだ means "better than ~", "preferable to ~", or "at least ~". It indicates that while something may not be ideal, it is better than the alternative being compared. The comparison can be explicit (Aよりましだ) or implicit from context.\n\nましだ expresses a mild preference under less-than-ideal circumstances. It often carries a resigned tone: "It\'s not great, but at least it\'s better than...".',
    usage: '〜より + ましだ / Verb (plain) + ほうが + ましだ',
    links: [],
    examples: [
      { japanese: '遅れるよりは、キャンセルするほうがましだ。', romaji: 'Okureru yori wa, kyanseru suru hou ga mashi da.', english: 'It\'s better to cancel than to be late.' },
      { japanese: '狭くても、住む場所があるだけましだ。', romaji: 'Semakute mo, sumu basho ga aru dake mashi da.', english: 'Even if it\'s small, at least having a place to live is better than nothing.' }
    ],
    notes: 'ましだ vs ほうがいい: ましだ is comparing two imperfect options and choosing the lesser evil; ほうがいい recommends the better of two options more straightforwardly. ましだ often has a resigned or stoic nuance.'
  },
  {
    id: 'n2-totan-ni',
    name: '〜途端に',
    romaji: '〜totan ni',
    level: 'N2',
    description: '途端に (とたんに) means "just as ~", "the moment ~", or "no sooner had ~ than ~". It expresses that something happened immediately and suddenly at the exact moment of the preceding action. The gap between the two events is virtually zero.\n\nThe preceding clause must be in た-form (completed action), because 途端に marks the instant immediately following the completion of an action. The result is usually unexpected or spontaneous.',
    usage: 'Verb (た-form) + 途端に',
    links: [],
    examples: [
      { japanese: '外に出た途端に、雨が降り始めた。', romaji: 'Soto ni deta totan ni, ame ga furihajimeta.', english: 'The moment I stepped outside, it started raining.' },
      { japanese: 'ドアを開けた途端に、猫が飛び出してきた。', romaji: 'Doa wo aketa totan ni, neko ga tobidashite kita.', english: 'Just as I opened the door, the cat burst out.' }
    ],
    notes: '途端に vs と同時に vs やいなや (N1): all express simultaneity. 途端に = sudden/unexpected event immediately after an action (usually surprising); と同時に = at the same time as, simultaneous (more neutral); やいなや = literary "no sooner than" (N1, more formal).'
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
console.log(`Done. Added ${added} new N2 entries. Total entries: ${data.length}`)
