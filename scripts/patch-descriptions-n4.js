#!/usr/bin/env node
const fs = require('fs'), path = require('path')
const file = path.join(__dirname, '..', 'src', 'data', 'grammar.json')
const data = JSON.parse(fs.readFileSync(file, 'utf8'))

const patches = {
"n4-te-ageru": {
  description: "〜てあげる describes doing a favor for someone — the speaker or an in-group member does something for someone outside the group. The beneficiary is typically marked with に: 友達に本を貸してあげた (I lent a book to my friend as a favor). It implies the speaker is conferring a benefit on the recipient.\n\nBe careful with the direction of giving: あげる flows outward (I → you, I → them). The opposite direction — receiving a favor — uses くれる (they → me/in-group) or もらう (I receive from them). Overusing あげる for things you do for superiors can sound condescending; use 〜させていただく instead.",
  notes: "Using てあげる for something you do for a superior sounds patronizing in Japanese. When doing something for a boss or elder, say 〜します or 〜させていただきます instead. てあげる is best reserved for peers, family, or those below you in social hierarchy."
},
"n4-te-kureru": {
  description: "〜てくれる describes someone doing a favor for the speaker or the speaker's in-group. The subject of くれる is always someone outside the speaker's in-group: 友達が手伝ってくれた (my friend helped me — what a nice thing). It expresses gratitude or appreciation for the action received.\n\nThe direction of くれる is always inward — from outside the group toward the speaker: they → me/us. Contrast with もらう, which shifts perspective to 'I receive': 友達に手伝ってもらった (I had my friend help me). Both express the same event but from different viewpoints.",
  notes: "てくれる and てもらう describe the same exchange but from opposite perspectives. てくれる focuses on the giver's action (they did it for me); てもらう focuses on the receiver's experience (I had it done for me). In English both translate roughly the same way."
},
"n4-te-morau": {
  description: "〜てもらう expresses receiving a favor — the speaker arranges for or has someone do something for them. It shifts perspective to the receiver: 友達に翻訳してもらった (I had my friend translate it / I got my friend to translate it). The person who does the action is marked with に.\n\nてもらう implies the speaker benefited from the action. It is also used to express indirect requests: 書いてもらえますか (could you write it for me?). The potential form てもらえる makes a polite request. Compare with てくれる, which is identical in event but focuses on the giver rather than the receiver.",
  notes: "〜てもらう is often used to make polite, indirect requests: 〜てもらえますか / 〜てもらえませんか. This is frequently more polite than a direct imperative. The person performing the favor is marked with に (not が): 先生に説明してもらった."
},
"n4-te-shimau": {
  description: "〜てしまう expresses completion of an action, often with a nuance of regret, dismay, or unintentional consequence: 財布を忘れてしまった (I accidentally forgot my wallet — what a pain). It can also express simple emphatic completion without strong regret: 宿題をやってしまおう (let me just get the homework done).\n\nIn casual spoken Japanese, てしまう contracts: 〜てしまう → 〜ちゃう (plain), 〜てしまった → 〜ちゃった, and for voiced endings でしまう → 〜じゃう. These contractions are very common in conversation.",
  notes: "The regret nuance depends on context. 食べてしまった can mean 'I ate it all (regrettably)' or just 'I went ahead and ate it.' The contraction ちゃう/じゃう is extremely common in casual speech — mastering it is key to sounding natural."
},
"n4-te-oku": {
  description: "〜ておく means to do something in advance or to leave something in a certain state deliberately, with future benefit or preparation in mind: 旅行の前に地図を調べておく (look up the map in advance before the trip). The action is done proactively so it is ready when needed.\n\nておく also means to leave something as is intentionally: そのままにしておいて (leave it as it is). In casual speech, ておく contracts to 〜とく: 買っとく (buy it in advance / buy ahead). The nuance is always purposeful — the action is done with a future purpose in mind.",
  notes: "〜ておく (preparing for the future) is different from 〜てある (a state resulting from someone's action): 窓を開けておいた (I opened the window in advance) vs 窓が開けてある (the window is open — someone opened it). ておく focuses on the actor's intention; てある focuses on the resultant state."
},
"n4-te-miru": {
  description: "〜てみる means 'to try doing' — attempting an action to see what it's like or what the result will be: 食べてみる (try eating it / eat it and see), 聞いてみよう (let me try asking). The nuance is experimental — you're doing something to find out the outcome.\n\nてみる attaches to the て-form and conjugates like みる: てみた (tried), てみます (will try), てみたい (want to try). It is one of the most common grammar patterns in Japanese and extremely useful for expressing willingness to try new things.",
  notes: "〜てみる implies uncertainty about the result — you're testing something. If you already know the outcome, みる is not used. Compare: ちょっと食べてみる (let me try a bite to see) vs 食べる (I will eat it, no experimentation implied)."
},
"n4-te-kuru": {
  description: "〜てくる describes a change or development that has been happening up to the present moment — 'has been doing and continues to now.' It can express: (1) gradual change approaching the present: だんだん暗くなってきた (it has gradually gotten darker); (2) doing something and coming back: 買ってくる (go buy it and come back).\n\nてくる uses the movement verb くる (to come) metaphorically to indicate movement toward the present or toward the speaker. The 'going and returning' usage is very common in daily life: ちょっと出かけてくる (I'm going out for a bit and coming back).",
  notes: "てくる (toward present/speaker) vs ていく (away from present/speaker). Both can express gradual change: 寒くなってきた (getting colder — approaching now) vs 暑くなっていく (getting hotter — moving into the future). The directionality is metaphorical."
},
"n4-te-iku": {
  description: "〜ていく describes a gradual change or continuation moving away from the present into the future — 'will continue to' or 'will progressively do.' It can also describe doing something and leaving: コーヒーを買っていく (buy coffee and go / take it with me as I go).\n\nていく uses the movement verb いく (to go) metaphorically to indicate movement away from the current moment or location. Paired with change verbs, it expresses an ongoing trend: 人口が増えていく (the population will continue to grow).",
  notes: "Contrast てくる (approaching the present) and ていく (moving away from the present). 経済が回復してきた = the economy has been recovering (up to now); 経済が回復していく = the economy will continue to recover (into the future)."
},
"n4-nakereba-naranai": {
  description: "〜なければならない expresses obligation — 'must,' 'have to.' It attaches to the negative stem (nai-form) of verbs: 行かなければならない (must go). The structure literally means 'if not doing X, it won't do' — creating a double negative that implies necessity.\n\nVariants exist: 〜なくてはならない, 〜なくてはいけない, 〜なければいけない (all roughly equivalent in meaning). In casual speech, these contract heavily: 〜なきゃ, 〜なくちゃ, 〜なくちゃいけない. The more formal the situation, the longer the form used.",
  notes: "Casual contractions are essential to know: 行かなければならない → 行かなきゃ (gotta go), 食べなくてはいけない → 食べなくちゃ. These short forms are extremely common in conversation. The full form sounds stiff in casual contexts."
},
"n4-nakute-mo-ii": {
  description: "〜なくてもいい expresses that something is not obligatory — 'don't have to,' 'no need to.' The negative て-form (nai-form minus い, plus くて) + もいい: 行かなくてもいい (you don't have to go). It is the negative counterpart to 〜てもいい (you may) and the opposite of 〜なければならない (must).\n\nThe pattern can be softened further: 行かなくてもいいです (polite) or 行かなくてもいいよ (casual reassurance). It is widely used to relieve someone of obligation or to give them freedom of choice.",
  notes: "〜なくてもいい = no obligation (you don't have to). 〜てはいけない = prohibition (you must not). 〜なければならない = obligation (you must). Distinguishing these three is fundamental to expressing permission and obligation accurately."
},
"n4-tame-ni": {
  description: "〜ために has two main uses. As a purpose marker with volitional verbs, it means 'in order to': 日本語を上手になるために、毎日練習する (I practice every day in order to get better at Japanese). As a cause marker, it expresses reason — 'because of,' 'due to': 台風のために、試合が中止になった (the match was cancelled due to the typhoon).\n\nThe key distinction: purpose ために follows a dictionary-form verb with a volitional actor; cause ために follows a noun (+ の) or a plain-form verb/adjective describing a state beyond the speaker's control. The context usually makes the meaning clear.",
  notes: "Purpose ために vs. cause/reason ために: 大学に入るために勉強する (study in order to enter university — purpose) vs 事故のために電車が遅れた (the train was delayed due to an accident — cause). The cause usage often involves external, uncontrollable events."
},
"n4-nagara": {
  description: "〜ながら expresses two simultaneous actions performed by the same subject — 'while doing X, also doing Y.' The subordinate action (the one in ながら) is typically the background activity: 音楽を聴きながら勉強する (study while listening to music). The main action comes after.\n\nながら attaches to the verb stem. The subject of both clauses must be the same person. It cannot be used when the two actions cannot literally happen at the same time (e.g., you cannot sleep and run simultaneously). The background action is usually less important than the main verb.",
  notes: "ながら requires the SAME subject for both actions. If subjects differ, use 〜ている間に or 〜ている時に instead. Also, ながら implies the actions are truly simultaneous, not sequential — for 'after,' use てから or 後で."
},
"n4-ba": {
  description: "〜ば expresses a hypothetical conditional — 'if (you do X, then Y follows).' It emphasizes the condition: 勉強すれば、合格できる (if you study, you'll pass). Formation: u-verbs drop -u and add -eba; ru-verbs drop -ru and add -reba; い-adj: -i → -kereba; な-adj/noun: -nara.\n\nThe ば conditional often implies that the condition is not currently true or is being presented as a hypothetical. It pairs well with advice, suggestions, and logical reasoning. The result clause often cannot be a volitional expression or a direct command.",
  notes: "〜ば is best for conditions where the result is a natural or logical consequence. Compare conditionals: ば (hypothetical, focuses on condition), たら (sequential or hypothetical, versatile), と (natural/inevitable), なら (topic-based). ば is rarely used when the result is a command or volitional: don't say 行けば行って — use 行ったら instead."
},
"n4-tara": {
  description: "〜たら is a versatile conditional meaning 'when,' 'if,' or 'after.' It is formed by adding ら to the た-form of any verb or adjective: 食べたら (when/after eating), 雨だったら (if it rains). It covers hypothetical conditions, temporal sequences, and discovery.\n\nたら can express: (1) simple 'if': もし負けたら、どうする？ (what will you do if you lose?); (2) temporal 'when/after': 帰ったら、電話して (call when you get home); (3) discovery: 開けてみたら、何もなかった (when I opened it, there was nothing). It is the most versatile conditional.",
  notes: "たら is the most flexible Japanese conditional and safest to use when unsure. It is the only conditional that can naturally appear with commands in the result clause: 着いたら連絡してね (let me know when you arrive). If the condition and result relate to the same moment of discovery, たら is almost always correct."
},
"n4-nara": {
  description: "〜なら is a topic-based conditional — 'if that's the case,' 'if it's X we're talking about.' It picks up on something mentioned or implied in context and builds a conditional from it: 日本語を学ぶなら、この本がいい (if you're going to study Japanese, this book is good). It often responds to the other person's statement.\n\nなら attaches to the plain form of verbs/adjectives or directly to nouns (without だ usually): 学生なら (if you're a student / since you're a student). The result clause often contains a recommendation, suggestion, or logical consequence. Unlike たら, なら doesn't require the condition to actually occur.",
  notes: "なら is unique in that the result clause can refer to actions that happen BEFORE the condition is fulfilled: 東京に行くなら、新幹線で行ったほうがいい (if you're going to Tokyo, you should take the Shinkansen — the advice is given before the trip happens). This reversed temporal order is a distinguishing feature of なら."
},
"n4-to-cond": {
  description: "〜と as a conditional means 'when/if (X happens, Y always results)' — it expresses a natural, automatic, or inevitable consequence. The result follows from the condition without exception: 春になると、桜が咲く (when spring comes, the cherry blossoms bloom). It is commonly used for natural laws, habitual truths, and instructions.\n\nと attaches to the dictionary form of verbs and adjectives. Crucially, the result clause cannot express commands, requests, or volitional actions — it must be a natural result. This restricts its use compared to たら or ば.",
  notes: "The result clause of 〜と cannot contain commands (〜て), requests (〜てください), volitional forms (〜よう), or expressions of intention. Use たら for those cases. The と conditional is perfect for instructions: このボタンを押すと、ドアが開く (press this button and the door opens)."
},
"n4-sou-da-appearance": {
  description: "〜そうだ (appearance/conjecture) expresses that something 'looks like' or 'seems' a certain way, based on direct visual or sensory evidence. It attaches to: verb stems (降りそう — looks like it's going to rain), い-adj stems removing い (おいしそう — looks delicious), な-adj stems (元気そう — looks healthy).\n\nThis そうだ is based on the speaker's immediate perception or observation. It differs from the hearsay そうだ (which follows a full clause). Negative visual inference: 降りそうもない (doesn't look like it will rain). The adjectival そうな can modify nouns: おいしそうなケーキ (a cake that looks delicious).",
  notes: "Visual そうだ (stem + そう) vs hearsay そうだ (plain clause + そう): 雨が降りそうだ (it looks like rain — I see dark clouds) vs 雨が降るそうだ (I heard it will rain — someone told me). The attachment point is the key difference: stem vs full plain form."
},
"n4-rashii": {
  description: "〜らしい expresses hearsay inference or typicality. As inference: 'it seems / apparently' — based on indirect evidence or what one has heard: 田中さんは来ないらしい (it seems Tanaka-san won't come — I've heard). As typicality: 'typical of,' 'like a proper X should be': 男らしい (manly, like a real man), 先生らしい (teacher-like, befitting a teacher).\n\nらしい attaches to the plain form of verbs/adjectives and to nouns directly. It expresses the speaker's inference from secondhand information, not direct perception. It is more objective than ようだ (subjective observation) and less certain than はずだ (expectation from knowledge).",
  notes: "三つのらしい: (1) hearsay/inference: 〜らしい after a clause (apparently); (2) typical: Noun + らしい (like a proper/real X); (3) the い-adjective らしい (appearing to be, seeming). Context distinguishes them. Compare: 彼女らしい声 (a voice that seems to be hers) vs 女らしい (feminine, woman-like)."
},
"n4-you-da": {
  description: "〜ようだ expresses a subjective resemblance or inference — 'it seems/appears that,' 'it looks like,' based on the speaker's personal observation or impression. It conveys that things appear a certain way from the speaker's perspective: 彼は風邪を引いたようだ (it seems he has caught a cold — based on how he looks/acts).\n\nようだ attaches to plain forms of verbs and adjectives, and to nouns with の (Noun + のようだ). It can also express simile: まるで夢のようだ (it's just like a dream). ように can modify verbs: 夢のように美しい (beautiful like a dream).",
  notes: "ようだ (subjective inference from personal observation) vs らしい (inference from hearsay/indirect evidence) vs そうだ (appearance from direct visual cues). ようだ is the most subjective — based on the speaker's own perception and reasoning. らしい is more objective — based on external information."
},
"n4-to-omou": {
  description: "〜と思う expresses the speaker's opinion, belief, or conjecture — 'I think that,' 'I believe that.' The plain form of the verb/adjective/noun + だ precedes と思う: 明日は晴れると思う (I think it will be sunny tomorrow). It is one of the most common ways to express personal opinions in Japanese.\n\nTo express ongoing thought or a current state of mind, 〜と思っている is used: 転職しようと思っている (I'm thinking of changing jobs). The past form 〜と思った expresses what one used to think or a sudden realization: あ、そうかと思った (ah, I thought so).",
  notes: "〜と思う (I think/believe) softens statements and is essential for expressing opinions without sounding too direct. In formal writing or speech, 〜と考える (consider) is more appropriate. Note: 〜と思います is polite; 〜と思う is plain/casual."
},
"n4-tsumori": {
  description: "〜つもりだ expresses a firm personal intention or plan — 'I intend to,' 'I plan to.' It attaches to the dictionary form: 来年、日本に行くつもりだ (I intend to go to Japan next year). It implies a more decided, internal plan compared to the vaguer 〜と思っている.\n\nThe negative form 〜ないつもりだ means 'I intend not to': もう食べないつもりだ (I intend not to eat anymore). つもりだった expresses an unfulfilled intention: 早く起きるつもりだったが、起きられなかった (I had intended to wake up early, but couldn't).",
  notes: "つもりだ expresses the speaker's own firmly held intention. It sounds strange when used for others' intentions — use だろう or でしょう for third persons. つもりだった (past) is useful for 'I had planned to but...' expressions of broken plans."
},
"n4-hazu-da": {
  description: "〜はずだ expresses expectation or assumption based on knowledge, logic, or prior information — 'should be,' 'is supposed to,' 'must be (as far as I know).' It attaches to plain forms: 彼はもう着いているはずだ (he should already have arrived — based on what I know).\n\nはずだ differs from だろう (general conjecture) — はずだ implies there is a logical basis for the expectation. The negative はずがない means 'there's no way that' (strong denial). はずだった expresses an unfulfilled expectation: 来るはずだったのに来なかった (was supposed to come but didn't).",
  notes: "はずだ relies on the speaker's knowledge or reasoning. If the actual situation contradicts はずだ, it expresses disappointment or confusion: もう着いているはずなのに… (they should be here by now, but...). Don't use はずだ for pure guesses — use だろう or かもしれない instead."
},
"n4-kamoshirenai": {
  description: "〜かもしれない expresses possibility — 'might,' 'maybe,' 'perhaps.' It attaches to the plain form of verbs and adjectives, and to nouns/な-adj without だ: 雨が降るかもしれない (it might rain), 彼は病気かもしれない (he might be sick). It conveys uncertainty — the speaker is not confident about the statement.\n\nかもしれない is less certain than はずだ (logical expectation) but more possible than the speaker simply guessing. In casual speech it contracts to かも: そうかも (might be). In formal contexts, かもしれません is used.",
  notes: "Certainty spectrum (high→low): 〜に違いない (must be, I'm certain) → 〜はずだ (should be, logically expected) → 〜だろう (probably) → 〜かもしれない (might) → 〜とは思えない (can't imagine). Use かもしれない when you're genuinely uncertain."
},
"n4-dake": {
  description: "〜だけ limits quantity or scope — 'only,' 'just,' 'merely.' It follows nouns, plain verbs, or adjectives: これだけ (just this), できるだけ (as much as possible), 一人だけ (just one person). It restricts the statement to what is mentioned without implying anything missing from an expected amount.\n\nだけ can attach to various word types and positions. Unlike しか (which requires a negative verb), だけ can appear with positive verbs: 少しだけ食べた (ate just a little). だけあって is a set phrase meaning 'as expected of / no wonder': さすがプロだけあって (as expected of a professional...).",
  notes: "だけ vs しか: both mean 'only,' but しか always requires a negative verb. 一つだけある (there is just one) vs 一つしかない (there is only one — implies not enough). しか carries a stronger nuance of insufficiency or limitation; だけ is more neutral."
},
"n4-shika-nai": {
  description: "〜しか〜ない means 'nothing but,' 'only' — and always requires a negative verb. The structure restricts to a single option with an implied sense that it's not enough or that no alternative exists: 百円しかない (I only have 100 yen — and that's not much). The negativity of the verb doesn't make the sentence negative in meaning; rather, the overall meaning is positive but limited.\n\nしか replaces は, が, or を but combines with other particles: にしか, でしか, からしか. The nuance is stronger than だけ — しか implies the limitation is noteworthy, often insufficient, or exclusive.",
  notes: "Always use a negative verb with しか: 〜しかない, 〜しかしない, 〜しか食べない. Using しか with a positive verb is ungrammatical. The negative verb doesn't negate the meaning — 水しか飲まない means 'I only drink water' (positive meaning, negative verb)."
},
"n4-ni-tsuite": {
  description: "〜について means 'about,' 'regarding,' 'concerning' — it marks the topic of discussion or inquiry. Noun + について: 日本の文化について話した (talked about Japanese culture). The phrase について can stand alone or be followed by の to modify a noun: 日本についての本 (a book about Japan).\n\nについて is common in formal and academic contexts: 環境問題について考える (think about environmental issues). It is more formal and specific than the particle に, which can also indicate topic in some contexts.",
  notes: "について vs に関して: both mean 'about/regarding,' but に関して (N3) is more formal and limited to serious, academic topics. について is versatile for everyday and formal contexts alike."
},
"n4-ni-yotte": {
  description: "〜によって has several related meanings: (1) agent in passive sentences — 'by': この小説は夏目漱石によって書かれた (this novel was written by Natsume Soseki); (2) means or method — 'through,' 'by means of': 努力によって成功した (succeeded through effort); (3) cause — 'due to,' 'because of': 地震によって建物が壊れた (the building was destroyed by the earthquake); (4) depending on — によって異なる (varies depending on).\n\nによっては (によっては) adds a conditional nuance — 'depending on the case': 人によっては賛成しない人もいる (depending on the person, some may disagree).",
  notes: "によって is often used in formal or written Japanese for passive agents. In casual speech, the passive marker に is more common for agents of passive verbs. The 'depending on' usage is common in both formal and casual contexts."
},
"n4-noni": {
  description: "〜のに expresses a concessive contrast — 'even though,' 'despite' — often with a nuance of disappointment, frustration, or unmet expectation. The speaker expected X but got Y: 一生懸命勉強したのに、試験に落ちた (even though I studied so hard, I failed the exam — how unfair).\n\nのに attaches to plain forms. Unlike けど/が (neutral contrast), のに carries an emotional undertone. It is also used in wishful thinking: 行けばよかったのに (if only I had gone). The emotion ranges from mild frustration to regret or criticism.",
  notes: "のに (frustrated contrast) vs のでも (even if) vs けど (neutral 'but'). のに always implies an unmet expectation from the speaker's perspective and carries personal emotion. Using のに without that emotional context sounds unnatural."
},
"n4-hodo": {
  description: "〜ほど expresses degree, approximation, or comparison — 'to the extent that,' 'about,' 'as ... as.' It indicates a degree or amount: 死ぬほど疲れた (so tired I could die — to the extent of dying), 一時間ほど待った (waited about an hour).\n\nほど also appears in comparative structures: Aほど〜ない (not as ... as A): 彼ほど上手じゃない (not as skilled as him). The more X, the more Y construction uses 〜ば〜ほど: 勉強すればするほど上手になる (the more you study, the better you get).",
  notes: "〜ほど〜ない = not as ... as (A). This is different from 〜より〜ない. 彼ほど背が高くない = (I am) not as tall as him. The 〜ば〜ほど construction (the more... the more) is a set pattern worth memorizing as a unit."
},
"n4-yasui-nikui": {
  description: "〜やすい and 〜にくい attach to verb stems to express inherent ease or difficulty. やすい means 'easy to do,' 'prone to': 読みやすい本 (an easy-to-read book), 壊れやすい (prone to breaking). にくい means 'hard to do': 食べにくい (hard to eat), 理解しにくい (hard to understand).\n\nBoth words conjugate as い-adjectives: やすかった (was easy to do), にくくなる (become harder to do). They describe inherent properties of the subject, not the speaker's personal difficulty. Compare with 〜づらい, which is slightly more subjective and emotional: 言いにくい (hard to say in general) vs 言いづらい (hard for me personally to say).",
  notes: "やすい/にくい describe objective difficulty inherent to the action or object. づらい (N2) is more subjective — it describes difficulty felt by a specific person, often with emotional discomfort. 言いにくい focuses on the general difficulty; 言いづらい on personal reluctance or discomfort."
},
"n4-aida-ni": {
  description: "〜間に (aida ni) means 'while' or 'during' — something happens within a span of time while another event is ongoing. The key nuance is that the main action (after に) occurs at some point during the duration of the bracketed activity: 彼が寝ている間に、仕事を終えた (while he was sleeping, I finished the work).\n\nWith nouns: 休みの間に旅行した (traveled during the break). The difference from ながら: 間に allows different subjects and emphasizes that something happens within a time window, while ながら requires the same subject and emphasizes true simultaneity.",
  notes: "〜ている間に = something happens at a point DURING the duration. 〜ながら = two actions are truly simultaneous by the SAME subject. 先生が話している間に眠くなった (I got sleepy while the teacher was talking — different subjects, occurs within the duration) must use 間に, not ながら."
},
"n4-sou-da-hearsay": {
  description: "〜そうだ (hearsay) reports information heard from others or from media — 'I hear that,' 'apparently,' 'they say.' Unlike the visual そうだ (which uses a stem), this hearsay そうだ attaches to the full plain form: 明日は雨が降るそうだ (apparently it will rain tomorrow — I heard this somewhere).\n\nThe source of information is external to the speaker. It is used to relay news or rumors without asserting personal knowledge: 田中さんは引っ越したそうだ (I hear Tanaka-san moved). In writing it appears as によると〜そうだ: ニュースによると、地震があったそうだ (according to the news, there was an earthquake).",
  notes: "Hearsay そうだ (plain form + そうだ) vs visual/conjecture そうだ (stem + そうだ): 雨が降るそうだ (I heard it will rain) vs 雨が降りそうだ (it looks like it will rain). The attachment point — plain form vs stem — is the key distinguishing feature."
}
}

let patched = 0
for (const entry of data) {
  if (patches[entry.id]) {
    entry.description = patches[entry.id].description
    entry.notes = patches[entry.id].notes
    patched++
  }
}
fs.writeFileSync(file, JSON.stringify(data, null, 2))
console.log(`Patched ${patched} entries.`)
