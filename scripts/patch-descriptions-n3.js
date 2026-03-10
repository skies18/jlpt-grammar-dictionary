#!/usr/bin/env node
const fs = require('fs'), path = require('path')
const file = path.join(__dirname, '..', 'src', 'data', 'grammar.json')
const data = JSON.parse(fs.readFileSync(file, 'utf8'))

const patches = {
"n3-wake-da": {
  description: "〜わけだ presents a logical conclusion or natural explanation that follows from given information — 'so that's why,' 'no wonder,' 'that explains it.' It marks the result as a deductively inevitable conclusion: 毎日練習しているわけだ、上手なはずだ (no wonder he's skilled — he practices every day). The speaker presents their reasoning as rational and transparent.\n\nわけだ also summarizes or confirms a conclusion the listener should naturally agree with: つまり、無理だということだ = つまり、無理なわけだ (so in other words, it's impossible). It is frequently used in logical explanations, teaching, and academic writing.",
  notes: "わけだ (logical conclusion — it naturally follows) vs はずだ (expectation based on prior knowledge — it should be so). わけだ presents the conclusion as something that can be derived from the facts at hand; はずだ presupposes external knowledge."
},
"n3-wake-ga-nai": {
  description: "〜わけがない strongly denies a possibility — 'there's no way that,' 'it cannot possibly be.' It expresses the speaker's firm conviction that something is logically impossible given what they know: 彼がそんなことをするわけがない (there's no way he would do such a thing).\n\nわけがない attaches to plain forms of verbs and adjectives, and to nouns + である. It is stronger and more logical than 〜はずがない, though the two are often interchangeable. The nuance of わけがない is that no logical basis exists for the possibility.",
  notes: "〜わけがない (logically impossible — no basis exists) vs 〜はずがない (should not be — contradicts expectations). Both deny possibility, but わけがない relies on reasoned logic, while はずがない relies on expectations. わけがない is often stronger and more emotionally direct."
},
"n3-wake-ni-wa-ikanai": {
  description: "〜わけにはいかない expresses that the speaker cannot do something due to social obligation, moral duty, or circumstances — 'cannot afford to,' 'there's no way I can.' It is not about ability but about appropriateness: 約束があるから、行かないわけにはいかない (I have a promise, so there's no way I can not go).\n\nThe dictionary form + わけにはいかない = 'cannot do X (socially/morally).' The negative plain form + わけにはいかない = 'must not not do X' = 'must do X.' The constraint is always social or situational, never a simple personal inability.",
  notes: "〜わけにはいかない (social/moral constraint — cannot in good conscience) vs 〜ことができない (simple inability — physically/technically cannot). 嘘をつくわけにはいかない (I can't tell a lie — morally wrong) vs 嘘をつくことができない (I am unable to lie — perhaps physically incapable)."
},
"n3-mono-da": {
  description: "〜ものだ has three main uses: (1) natural truth or custom — 'that's how things are/should naturally be': 子供は元気なものだ (children are naturally energetic); (2) expressing the way things used to be — 'used to': 昔はよく遊んだものだ (I used to play a lot back in the day); (3) moral expectation — 'one should (naturally)': 人の話はちゃんと聞くものだ (one should properly listen when others speak).\n\nIn all three uses, ものだ invokes a sense of general principle or natural order. It is not about a specific case but about what is universally or typically true. The past 〜たものだ specializes in the nostalgic 'used to' meaning.",
  notes: "〜たものだ (reminiscing about past habits) is different from 〜ことがある (past experience). 昔はよく泳いだものだ = I used to swim often (nostalgic recollection of a habit). 昔、泳いだことがある = I swam (at some point in the past — experience). ものだ is warmer and more nostalgic."
},
"n3-koto-ni-naru": {
  description: "〜ことになる expresses that a situation has been decided or will come about due to external circumstances — 'it has been decided that,' 'it turns out that.' The speaker is often not the decision-maker: 来月、転勤することになった (it has been decided that I'll transfer next month — the company decided). It implies the outcome arose from outside forces.\n\nことになっている expresses a rule or established custom: 会議は毎週月曜日にあることになっている (meetings are scheduled every Monday — that's the established arrangement). The plain form + ことになる vs ことにする: the former is external decision; the latter is the speaker's own decision.",
  notes: "〜ことになる (external decision — it came to be decided) vs 〜ことにする (personal decision — I have decided). Use ことになる to distance yourself from the decision; use ことにする to take ownership. 転勤することになった = I'm being transferred (company decided). 転勤することにした = I decided to transfer."
},
"n3-koto-ni-suru": {
  description: "〜ことにする expresses a deliberate personal decision — 'I have decided to,' 'I will make it a point to.' The speaker takes full ownership of the choice: 毎朝ジョギングすることにした (I've decided to jog every morning). It contrasts with ことになる, where the decision comes from external circumstances.\n\nことにしている (habitual form) expresses a personal rule or habit one has made for oneself: 毎日日本語を勉強することにしている (I make it a habit to study Japanese every day). The negative ことにした = 'I've decided not to': 食べないことにした (I've decided not to eat it).",
  notes: "〜ことにする = my own deliberate decision. 〜ことになる = external decision that came about. The distinction matters for expressing agency. If you want to show you chose something, use ことにする. If you want to show circumstances led to an outcome (distancing yourself), use ことになる."
},
"n3-you-ni-naru": {
  description: "〜ようになる expresses a gradual change in ability, habit, or situation — 'to come to,' 'to reach the point where,' 'to (finally) be able to.' It emphasizes the process of change leading to a new state: 日本語が話せるようになった (I've come to be able to speak Japanese — after effort and time).\n\nIt is used with: (1) potential verbs: 読めるようになった (became able to read); (2) plain positive/negative verbs: 野菜を食べるようになった (came to eat vegetables). The change is gradual, not sudden — an important nuance. The negative: 〜しなくなった (came to no longer do) is the simpler equivalent for negative changes.",
  notes: "〜ようになる (gradual change toward a new state) vs 〜ようにする (making an effort toward a goal). ようになる = the change happened (often naturally); ようにする = you are making it happen deliberately. できるようになった = I became able to; できるようにする = I'm working toward being able to."
},
"n3-you-ni-suru": {
  description: "〜ようにする expresses making a habitual effort toward a goal — 'to make sure to,' 'to try to (regularly),' 'to see to it that.' It implies ongoing, habitual effort: 毎日野菜を食べるようにしている (I'm making it a point to eat vegetables every day). The effort is continuous, not a one-time action.\n\nThe negative form 〜ないようにする means 'to make sure not to,' 'to try not to': 遅刻しないようにしている (I'm trying not to be late). Contrast with 〜ようになる (a change that has occurred) — ようにする is about the ongoing effort, not yet the achieved outcome.",
  notes: "〜てみる = try once to see the result. 〜ようにする = make a habitual effort toward a goal. These are very different nuances. ようにする is about sustained, deliberate behavior change; てみる is about a single experimental attempt."
},
"n3-bakari": {
  description: "〜ばかり has several uses. (1) 'Just did' — right after a ta-form verb, indicates an action just completed: 食べたばかりだ (I just ate). (2) 'Nothing but,' 'only' — with a noun or plain verb, expresses exclusivity often with a negative connotation: 文句ばかり言う (does nothing but complain). (3) Approximately — follows numbers: 三つばかり (about three).\n\nThe nuance of 'nothing but' often carries criticism or dissatisfaction. ばかりいる after te-form means someone keeps doing something to excess: テレビを見てばかりいる (does nothing but watch TV all day).",
  notes: "Three key ばかり patterns: (1) Verb-た + ばかり = just finished. (2) Noun/Verb + ばかり = nothing but / only (often negative connotation). (3) Number + ばかり = approximately. Don't confuse the 'just finished' meaning with the 'only' meaning — context and attachment form are key."
},
"n3-dake-de-naku": {
  description: "〜だけでなく(て) means 'not only... but also' — it extends a quality or action beyond the first element to an additional one: 日本語だけでなく、中国語も話せる (not only Japanese, but also Chinese). The additional element is often introduced with も.\n\nThe structure emphasizes that the scope is broader than might be expected. Formal variants include 〜のみならず (N2) and 〜ばかりでなく (N2). The て-form (だけでなくて) is slightly more casual; だけでなく alone is neutral to formal.",
  notes: "〜だけでなく〜も = not only A but also B. Both elements should be from the same category or parallel in structure. The も after the second element is often required but can be omitted in some patterns. This structure is commonly paired with さらに (furthermore) in formal writing."
},
"n3-sae": {
  description: "〜さえ means 'even' — it emphasizes an extreme or unexpected case, often implying that if even this much holds true, the rest certainly does: 子供でさえ知っている (even children know it — so surely adults do). It intensifies by presenting an extreme example.\n\nさえ replaces or combines with particles: に+さえ → にさえ, で+さえ → でさえ. In the pattern 〜さえ〜ば (N3), さえ marks the single sufficient condition: これさえあれば十分だ (as long as I have this, it's enough). Compare with も (also/even) which is less emphatic.",
  notes: "さえ vs でさえ vs すら: all mean 'even' but with slightly different registers. さえ is standard; でさえ adds emphasis to the preceding noun; すら (N1) is more literary/formal. すら is the strongest: 子供すら知っている sounds more dramatic than 子供でさえ知っている."
},
"n3-sae-ba": {
  description: "〜さえ〜ば expresses a single sufficient condition — 'as long as,' 'if only.' It narrows down all requirements to one key thing: お金さえあれば、何でも買える (as long as I have money, I can buy anything). The implication is that this one condition is the only thing needed.\n\nThe structure pairs さえ with the ば conditional: Noun + さえ + Verb (ba-form). It can also take adjective or noun + であれば: 元気さえあれば (as long as you have energy). The nuance is optimistic — 'just this one thing is enough.'",
  notes: "〜さえ〜ば (single sufficient condition: just this much is enough) vs 〜しか〜ない (only this, nothing more — implies insufficiency). さえ〜ば is forward-looking and often positive; しか〜ない is restrictive and often implies a lack. Both highlight a single item but with different emotional tones."
},
"n3-kuse-ni": {
  description: "〜くせに means 'even though' or 'and yet' — but with a strong critical or contemptuous nuance. It criticizes a discrepancy between what the subject is and what they do: 知らないくせに、偉そうなことを言うな (don't talk big when you don't even know anything). The speaker is clearly dissatisfied or disapproving.\n\nくせに follows plain forms of verbs and adjectives, and nouns with の: 子供のくせに (even though you're just a child). The object of criticism is usually the subject of the sentence. It is more emotional and judgmental than のに (which is a neutral or mildly frustrated contrast).",
  notes: "〜くせに (critical, contemptuous) vs 〜のに (frustrated/disappointed but neutral). Use くせに only when expressing clear criticism or looking down on someone. Using it carelessly can sound very rude. It is inappropriate in formal writing or toward superiors."
},
"n3-to-iu-no-wa": {
  description: "〜というのは introduces an explanation or definition — 'the thing called X is,' 'what I mean by X is.' It takes a term or concept and defines or explains it: 「侘び寂び」というのは、日本の美的概念だ (what is called 'wabi-sabi' is a Japanese aesthetic concept).\n\nというのは is a more explicit version of とは (which also introduces definitions). It is commonly used when explaining unfamiliar terms, jargon, or concepts to a listener. Contracted to というのは → つまり/要するに in summaries.",
  notes: "〜というのは (explains/defines a term) can be shortened to simply 〜とは: 愛とは何か (what is love?). というのは is more conversational and elaborate; とは is more formal and terse. Both introduce definitions or conceptual explanations."
},
"n3-ni-totte": {
  description: "〜にとって means 'for,' 'to,' 'from the perspective of' — it marks the entity for whom something holds true or is meaningful: 私にとって、日本語は難しい (Japanese is difficult for me / from my perspective). It indicates whose point of view or whose benefit is being discussed.\n\nにとって attaches to nouns and pronouns. It cannot be used with actions that the marked person directly performs — it marks who is affected by or views a situation: 子供にとって大切なこと (things that are important for children). It is similar to 〜にとっては when emphasizing the specific viewpoint.",
  notes: "〜にとって (subjective perspective/benefit) vs 〜のために (purpose/objective benefit). にとって is about whose standpoint matters; のために is about who benefits from an action. 子供にとって大切 (important from the child's perspective) vs 子供のために勉強する (study for the sake of the child)."
},
"n3-ni-taishite": {
  description: "〜に対して has three related meanings: (1) directed toward/at: 彼に対して怒りを感じた (I felt anger directed at him); (2) in response to, regarding: 質問に対して答える (answer the question); (3) in contrast to — comparing two things: A は良い成績だったのに対して、B は悪かった (A got good grades, whereas B got bad grades).\n\nに対して modifies the following verb or is used in the attributive form に対する before nouns: 彼への/彼に対する態度 (attitude toward him). The contrast usage is common in formal writing and essays.",
  notes: "に対して (directed at / in contrast to) vs について (concerning/about). に対して implies a response, opposition, or contrast; について is more neutral and just indicates the topic. 問題に対して対応する (deal with the problem) vs 問題について話す (talk about the problem)."
},
"n3-ni-kanshite": {
  description: "〜に関して means 'regarding,' 'concerning,' 'about' — it is a slightly more formal and specific alternative to について. It is commonly used in written Japanese, formal speech, business, and academic contexts: 環境問題に関して話し合った (we discussed regarding environmental issues).\n\nに関して attaches to nouns. The attributive form に関する modifies nouns: 環境に関する問題 (problems concerning the environment). Unlike について, に関して is rarely used for casual topics — it implies a formal or serious matter.",
  notes: "に関して vs について: both mean 'about/regarding,' but に関して is more formal, specific, and limited to serious or important matters. In everyday conversation, について is more natural. In reports, letters, and formal meetings, に関して is preferred."
},
"n3-ni-oite": {
  description: "〜において means 'in,' 'at,' 'in the context of' — a formal equivalent of で for location or context. It marks the setting, sphere, or condition in which something occurs: 世界において (in the world), スポーツにおける成功 (success in sports). It is common in academic, political, and formal written language.\n\nThe attributive form における modifies nouns: 日本における問題 (problems in Japan). において emphasizes that the preceding noun defines the domain or context of the statement, not just the physical place.",
  notes: "〜において is a formal/written equivalent of で (location of action). In casual speech, always use で: 学校で (at school). Use において in essays, reports, official documents, and formal presentations. における is the noun-modifying version: 現代における課題 (challenges in modern times)."
},
"n3-wo-hajime": {
  description: "〜をはじめ(として) means 'starting with,' 'beginning with,' 'including (as the prime example).' The first-listed noun is the most prominent representative, and others follow: 東京をはじめ、大阪や名古屋にも支店がある (starting with Tokyo, we have branches in Osaka and Nagoya as well).\n\nをはじめとして explicitly signals that the named item is the representative and many others follow. It is common in formal writing when listing key examples from a broader set. Similar to 〜など, but more formal and with emphasis on the leading example.",
  notes: "をはじめ(とする/として) always names the most prominent or typical example first. It implies many others of the same category exist. Compare with など (and things like that), which doesn't single out a representative item."
},
"n3-te-shikata-ga-nai": {
  description: "〜てしかたがない (also written 〜て仕方がない) expresses an overwhelming, uncontrollable feeling or urge — 'can't help but feel,' 'unbearably,' 'I can't stop doing/feeling.' The emotion or sensation is so strong that the speaker is at its mercy: 眠くてしかたがない (I'm unbearably sleepy).\n\nIt attaches to the て-form of verbs or adjectives: 気になってしかたがない (I can't stop being curious), 悲しくてしかたがない (unbearably sad). Synonym: てたまらない (same meaning, slightly stronger). Both express that the feeling exceeds what the speaker can control.",
  notes: "〜てしかたがない vs 〜てたまらない: essentially synonymous. たまらない is arguably slightly stronger or more visceral. Both are used for physical sensations and emotions that are overwhelming. Don't use them for external situations — use them for internal states the speaker is experiencing."
},
"n3-te-tamaranai": {
  description: "〜てたまらない expresses an overwhelming, irresistible feeling or desire — 'can't stand it,' 'unbearably,' 'I simply can't take it.' It expresses that the feeling exceeds the speaker's capacity to control: 彼女に会いたくてたまらない (I desperately want to see her — I can't take it anymore).\n\nたまらない (literally: 'there's no enduring it') attaches to the て-form of adjectives and verbs. It is slightly more visceral and passionate than しかたがない. It can be used positively (overwhelmingly wonderful) or negatively (overwhelmingly unpleasant): 美味しくてたまらない (so delicious I can't stand it).",
  notes: "〜てたまらない vs 〜てしかたがない: both express being overwhelmed by a feeling. たまらない is slightly more emotionally intense. Both are internal states; neither applies to situations or events themselves. These cannot be used in formal writing — they are conversational."
},
"n3-tokoro": {
  description: "〜ところ expresses a specific temporal moment in relation to an action. Three key patterns: (1) Dict. form + ところ = 'just about to': 今から行くところだ (I'm just about to go); (2) て-form + いるところ = 'in the middle of': 今食べているところだ (I'm in the middle of eating right now); (3) た-form + ところ = 'just finished': 今食べたところだ (I just finished eating).\n\nところ literally means 'place/point,' and these patterns indicate the point in time relative to the action. Each variant answers a different question about what stage the action is at.",
  notes: "The three ところ patterns are distinguished by verb form: dictionary (about to) → ている (in progress) → た (just finished). This maps to before → during → after. Compare 〜たばかり (just did — similar to たところだ, but ばかり has a broader time window and doesn't require immediacy)."
},
"n3-ue-de": {
  description: "〜上で has two uses: (1) 'after doing and then' / 'upon completion of': 読んだ上で、判断してください (please judge after reading it through). The first action must be fully completed before the main action; (2) 'for the purpose of,' 'in terms of': 仕事の上で必要なスキルだ (it is a skill necessary in terms of work).\n\nThe first usage takes the た-form: 〜た上で (after fully doing). The second usage takes a noun + の上で and indicates a domain or consideration. Both usages convey a prerequisite or relevant context for the following action.",
  notes: "〜た上で (after thoroughly doing — completion prerequisite) vs 〜てから (after doing — simple sequence). 上で emphasizes that the first action must be done completely and carefully before the second. てから is more neutral about the quality of the first action."
},
"n3-ue-ni": {
  description: "〜上に means 'in addition to,' 'on top of' — it layers two qualities or circumstances, both contributing to the same outcome. The second element is in the same direction as the first: 彼女は美しい上に、頭もいい (she is beautiful and on top of that, also intelligent). Both qualities amplify each other.\n\n上に attaches to plain forms of verbs and adjectives, and to nouns + の: 雨の上に風も強い (on top of rain, the wind is also strong). The two elements always reinforce each other — they are additive, not contrasting. This distinguishes it from のに or けど (which indicate contrast).",
  notes: "〜上に (cumulative addition — both factors go in the same direction) vs 〜のに (concessive contrast — the two elements conflict). 忙しい上に疲れている = busy AND ALSO tired (both are bad). 忙しいのに楽しい = even though I'm busy, I'm enjoying it (contrast)."
},
"n3-ni-chigai-nai": {
  description: "〜に違いない expresses confident deductive certainty — 'must be,' 'there's no doubt that,' 'I'm certain that.' The speaker reasons from evidence and concludes with conviction: 彼が犯人に違いない (he must be the culprit — I'm certain). It is stronger than でしょう or かもしれない.\n\nに違いない attaches to the plain form of verbs/adjectives and to nouns (Noun + に違いない). The certainty is based on the speaker's reasoning, not on reported information. It is one step below absolute certainty — the speaker is making a strong deduction, not a statement of fact.",
  notes: "Certainty scale: 〜に相違ない (N1, very formal) ≈ 〜に違いない (N3, certain) > 〜はずだ (N4, expected) > 〜でしょう (N4, probably) > 〜かもしれない (N4, might). Use に違いない when your reasoning strongly points to one conclusion."
},
"n3-beki-da": {
  description: "〜べきだ expresses moral, social, or logical obligation — 'should,' 'ought to.' It reflects a general principle or duty rather than personal advice: 約束は守るべきだ (one ought to keep promises). It is stronger and more authoritative than 〜たほうがいい (it's better to).\n\nべきだ attaches to the dictionary form. The negative is べきではない (should not). する becomes すべき (though するべき is also acceptable). Used in editorials, arguments, and situations where the speaker invokes general principles or social norms. べく (N1) is the formal purpose form of the same root.",
  notes: "〜べきだ (objective moral/social obligation — 'ought to') vs 〜たほうがいい (subjective advice — 'it would be better to'). べきだ appeals to principles; たほうがいい appeals to the listener's own interests. Don't use べきだ for suggestions about personal preference — it sounds preachy."
},
"n3-hazu-ga-nai": {
  description: "〜はずがない expresses strong disbelief based on logical reasoning — 'there's no way that,' 'it cannot possibly be.' The speaker denies a possibility because it contradicts what they know: 彼が嘘をつくはずがない (there's no way he would lie — I know him well). The denial is based on expectations, not emotion.\n\nはずがない attaches to plain forms. It differs from わけがない (which is more logically driven): はずがない is based on violated expectations and prior knowledge; わけがない is based on pure logical impossibility. In practice, the two are often interchangeable.",
  notes: "Both 〜はずがない and 〜わけがない translate as 'there's no way,' but はずがない focuses on violated expectations (based on what I know about the person/situation), while わけがない focuses on logical impossibility (there is no logical basis for it). The distinction is subtle and context-dependent."
},
"n3-hajimeru-tsuzukeru": {
  description: "〜始める and 〜続ける are auxiliary verbs that attach to verb stems to indicate the beginning or continuation of an action. 始める (hajimeru) means 'start doing': 雨が降り始めた (it started raining). 続ける (tsuzukeru) means 'continue doing': 三時間も話し続けた (kept talking for three whole hours).\n\nBoth attach to the verb's ます-stem. 〜始める marks the inception of a new action; 〜続ける marks persistence. Related: 〜終わる (finish doing), 〜かける (start but not finish). These compound verb constructions are productive and can combine with most action verbs.",
  notes: "〜出す (dasu) is a close synonym of 始める for sudden starts: 急に泣き出した (suddenly started crying — abrupt and unexpected). 始める is more neutral; 出す implies a spontaneous, often unplanned beginning. 続ける implies sustained effort over time."
},
"n3-naosu": {
  description: "〜直す means 'to redo' or 'to do again properly,' often implying a correction of a previous flawed attempt. It attaches to verb stems: 書き直す (rewrite), やり直す (redo / do over), 考え直す (reconsider). The prefix 直す carries the meaning of fixing or doing something over correctly.\n\nIt is different from simply repeating an action — 直す implies the previous action was incomplete, wrong, or unsatisfactory and is now being corrected. It is very common in daily life: 間違えたから、最初からやり直した (I made a mistake so I started over from the beginning).",
  notes: "〜直す (redo/correct a flawed action) vs 〜もう一度する (do once more). 直す implies fixing a problem; もう一度する is neutral repetition. 書き直す = rewrite (previous version was inadequate); もう一度書く = write one more time (no correction implied)."
},
"n3-ni-kurabete": {
  description: "〜に比べて means 'compared to,' 'in comparison with' — it sets up a comparison between two entities: 去年に比べて、今年は暖かい (compared to last year, this year is warm). The noun preceding に比べて is the reference point for comparison.\n\nに比べて can modify verbs, adjectives, or entire clauses. The attributive form に比べた is used before nouns: 去年に比べた変化 (changes compared to last year). Related expression: に比べ (slightly more formal, without て).",
  notes: "〜に比べて (explicit comparison with a reference point) vs 〜より (simple comparison — A is more X than B). に比べて sets up the reference explicitly and tends to elaborate on the difference; より is a direct comparative marker within a single sentence."
},
"n3-nagara-mo": {
  description: "〜ながらも means 'although,' 'even while,' 'despite' — it expresses a contradiction or unexpected contrast between two simultaneous states. Unlike ながら alone (simply 'while doing'), ながらも adds a concessive nuance: 知りながらも、黙っていた (even though knowing, I stayed silent — the two coexist in tension).\n\nながらも attaches to verb stems and adjective stems, or follows the plain form after 〜でありながらも (for nouns/な-adj). It is more literary and formal than のに or けれども, and often appears in written Japanese.",
  notes: "〜ながら (while doing — simultaneous actions, same subject) vs 〜ながらも (although/even while — concessive, contradiction). ながらも implies the two things should not logically coexist but do. Compare: 音楽を聴きながら勉強する (study while listening — simultaneous) vs 忙しいながらも手伝った (helped even though busy — concessive)."
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
