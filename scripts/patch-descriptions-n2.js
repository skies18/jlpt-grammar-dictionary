#!/usr/bin/env node
const fs = require('fs'), path = require('path')
const file = path.join(__dirname, '..', 'src', 'data', 'grammar.json')
const data = JSON.parse(fs.readFileSync(file, 'utf8'))

const patches = {
"n2-ni-shite-wa": {
  description: "〜にしては means 'for' or 'considering' — the result is unexpected or surprising given the stated standard. It implies a discrepancy: 初心者にしては上手だ (for a beginner, that's quite good — better than expected from a beginner). The speaker uses the noun as a baseline and notes the outcome deviates from that baseline.\n\nにしては attaches to nouns and plain verb forms. It can express something better or worse than expected, depending on context. It differs from にとって (which marks perspective/benefit) — にしては marks a surprising deviation from an expected standard.",
  notes: "〜にしては (surprising result given the standard) vs 〜にとって (from the perspective of). 子供にしては上手だ = surprisingly good for a child (unexpected quality). 子供にとって難しい = difficult from a child's perspective (viewpoint). These are distinct relationships."
},
"n2-ni-shite-mo": {
  description: "〜にしても means 'even if,' 'even so,' 'whether X or Y.' It presents a case that, even under that condition, a certain conclusion still holds: 忙しいにしても、連絡くらいできるはずだ (even if you're busy, you should at least be able to contact me). It concedes the stated condition but maintains the following argument.\n\nにしても can also express 'regardless of which option': AにしてもBにしても (whether A or B). This double pattern covers all alternatives: 行くにしても行かないにしても、返事をください (whether you go or not, please give me a reply).",
  notes: "〜にしても (even if — concessive, argument still stands) vs 〜にしては (for/considering — result is unexpected). AにしてもBにしても is a useful set pattern for covering both possibilities — similar to 'either way' in English."
},
"n2-ni-suginai": {
  description: "〜にすぎない means 'nothing more than,' 'merely,' 'only' — it downplays or dismisses the significance of something: これは冗談にすぎない (this is nothing more than a joke). The speaker asserts that the thing should not be overestimated or taken too seriously.\n\nにすぎない attaches to nouns (Noun + にすぎない) and plain forms (Verb/Adj + にすぎない). It is more dismissive than だけだ (just) and carries a nuance of correcting an overestimation. Formal equivalent: 〜に過ぎない (written with kanji).",
  notes: "〜にすぎない (merely — dismissing overestimation) vs 〜だけだ (just — neutral limitation). にすぎない implies the listener may have overestimated; だけだ is a neutral restriction. 運が良かっただけだ = it was just luck (neutral). 運が良かったにすぎない = it was nothing more than luck (dismissive)."
},
"n2-ni-hoka-naranai": {
  description: "〜にほかならない means 'nothing other than,' 'precisely,' 'is exactly' — it identifies something as the only possible explanation with strong emphasis: これは愛にほかならない (this is nothing other than love — it can only be called love). It asserts the identification as definitive and exclusive.\n\nにほかならない follows nouns (Noun + にほかならない) and nominalized verb phrases. It is formal and literary, used in essays, speeches, and written argument. It is stronger than だ and more emphatic than に違いない — it asserts identity, not just probability.",
  notes: "〜にほかならない (this IS, definitively nothing else) vs 〜に違いない (this MUST BE, based on reasoning). にほかならない is an identity claim — there is literally no other category it belongs to. に違いない is a strong inference. にほかならない is always formal."
},
"n2-ni-watatte": {
  description: "〜にわたって means 'over,' 'spanning,' 'throughout' — it expresses the range or scope of time or space: 三日間にわたって会議が続いた (the conference continued over three days), 全国にわたって調査した (conducted a survey spanning the whole country).\n\nにわたって follows quantity expressions (duration, distance, scope) or nouns indicating range. The attributive form にわたる modifies nouns: 全国にわたる調査 (nationwide survey). It implies comprehensive coverage across the specified span — not just part of it.",
  notes: "〜にわたって (spanning a full range — comprehensive coverage) vs 〜の間 (during a period — simply inside a time range). にわたって emphasizes the extensiveness of the coverage; の間 just marks a time window without implying comprehensiveness."
},
"n2-ni-atatte": {
  description: "〜にあたって means 'at the time of,' 'on the occasion of,' 'when (doing something important).' It marks a significant juncture or milestone event: 卒業にあたって、感謝の言葉を述べたい (on the occasion of graduation, I would like to express my gratitude). It is formal and often used in ceremonial or preparatory contexts.\n\nにあたって follows nouns and dictionary-form verbs. The attributive form にあたっての appears before nouns: 留学にあたっての準備 (preparations for studying abroad). It implies that the situation is significant and that special considerations apply.",
  notes: "〜にあたって (formal occasion — a significant milestone) vs 〜に際して (formal occasion — nearly synonymous, slightly more written). Both are formal, but に際して tends to appear slightly more often in written documents and official announcements."
},
"n2-ni-saishite": {
  description: "〜に際して means 'at the time of,' 'on the occasion of' — nearly identical to にあたって but slightly more formal and more common in written documents, official announcements, and administrative language: 入学に際して、必要書類を提出してください (upon enrollment, please submit the required documents).\n\nに際して follows nouns and dictionary-form verbs. Like にあたって, it marks an important juncture and implies that specific actions, preparations, or considerations are relevant to that occasion.",
  notes: "〜に際して vs 〜にあたって: essentially interchangeable in meaning (both = on the occasion of / at the time of). に際して is more administrative and document-oriented; にあたって is slightly more natural in formal speech and personal contexts."
},
"n2-ni-mo-kakawarazu": {
  description: "〜にもかかわらず means 'despite,' 'in spite of,' 'nevertheless' — a formal, emphatic concession. It presents a fact and then delivers a contradictory outcome: 反対意見にもかかわらず、計画は実行された (despite the opposition, the plan was carried out). It is stronger and more formal than のに.\n\nにもかかわらず follows plain forms and nouns. The も adds extra emphasis — 'even in spite of.' It appears frequently in formal writing, news reports, and academic prose. The nuance is objective — it reports a contradiction without the emotional frustration that のに carries.",
  notes: "〜にもかかわらず (formal, objective concession — despite) vs 〜のに (conversational, emotionally charged concession — even though). In formal writing or news, always use にもかかわらず. In personal speech with frustration, のに is more natural."
},
"n2-mono-no": {
  description: "〜ものの means 'although,' 'though,' 'even though' — it presents a concession where the expected result does not follow from the stated condition: 日本語を勉強したものの、まだうまく話せない (although I studied Japanese, I still can't speak it well). The first clause is true but the expected consequence does not hold.\n\nものの attaches to plain forms. It is more formal than けど and carries a slightly resigned or self-reflective nuance. It often implies the speaker's own situation — acknowledging effort or a fact while admitting the outcome is different from what was hoped for.",
  notes: "〜ものの (concession — first clause is true, but result doesn't follow as expected) vs 〜のに (frustrated contrast — result contradicts expectation, with emotion). ものの is more reflective and neutral; のに is more emotionally charged. ものの is more formal."
},
"n2-mono-dakara": {
  description: "〜ものだから (also 〜もので) provides a reason or explanation, often used as a justification or excuse — 'because,' 'the reason is that.' It emphasizes the reason as the compelling cause: 急いでいたものだから、忘れてしまった (because I was in a hurry, I forgot). The speaker presents the reason as an explanation for an unavoidable outcome.\n\nものだから attaches to plain forms and has a slightly apologetic or excusing nuance. It is less formal than ため and more personal than ので. In spoken Japanese, ものでcan contract further: 〜もんで or 〜もんだから.",
  notes: "〜ものだから (personal excuse/explanation — the situation caused this) vs 〜から (neutral reason) vs 〜ので (objective, polite reason). ものだから implies the speaker had little control and is explaining rather than simply stating a cause."
},
"n2-ni-hanshite": {
  description: "〜に反して means 'against,' 'contrary to,' 'in opposition to' — it marks a clear conflict between an expectation, wish, or rule and the actual outcome: 予想に反して、雨が降った (contrary to expectations, it rained). The outcome runs counter to what was anticipated or desired.\n\nに反して follows nouns (Noun + に反して). The attributive form に反する modifies nouns: 予想に反する結果 (a result contrary to expectations). It is a formal expression and commonly appears in written language, news, and formal speech.",
  notes: "〜に反して (contrary to — the outcome conflicts with an expectation or standard) vs 〜にもかかわらず (despite — the outcome persists regardless of a fact). に反して implies conflict; にもかかわらず implies persistence despite an obstacle."
},
"n2-ni-motozuite": {
  description: "〜に基づいて means 'based on,' 'grounded in,' 'according to' — it indicates the foundation or basis for something: 事実に基づいて報告する (report based on facts), 法律に基づいて判断する (judge based on the law). The preceding noun is the source or standard on which the following action or statement rests.\n\nに基づいて attaches to nouns. The attributive form に基づく / に基づいた modifies nouns: 証拠に基づいた判決 (a verdict based on evidence). It is formal and often used in legal, academic, and official contexts.",
  notes: "〜に基づいて (based on a foundation — grounded in) vs 〜によると (according to — citing a source). に基づいて indicates the basis or standard used; によると reports information from a source. 統計に基づく分析 (analysis based on statistics) vs 統計によると (according to the statistics)."
},
"n2-shidai": {
  description: "〜次第 has two distinct uses. (1) Verb stem + 次第: 'as soon as' — the moment an action is complete, the next happens immediately: 着き次第、連絡します (I'll contact you as soon as I arrive). Used for prompt sequential actions. (2) Noun + 次第で: 'depending on' — the outcome varies based on the condition: 天気次第で、出かけるかどうか決める (I'll decide whether to go out depending on the weather).\n\nThe 'as soon as' usage is formal and common in business communication. The 'depending on' usage is common in both formal and casual speech. あなた次第です (it's up to you / it depends on you) is a useful set phrase.",
  notes: "Two 次第 patterns with different structures and meanings: (1) Verb stem + 次第 = as soon as (actions); (2) Noun + 次第で = depending on (conditions). 書き次第送ります = I'll send it as soon as I write it. 状況次第で決める = decide depending on the situation."
},
"n2-bakari-ka": {
  description: "〜ばかりか means 'not only... but also,' adding an additional element that is unexpected or even more extreme than the first: 彼女は英語ばかりか、フランス語も話せる (she can speak not only English but also French). The second element often surprises by going beyond the already impressive first.\n\nばかりか attaches to plain forms and nouns. It is more emphatic than 〜だけでなく because it implies the second element is surprisingly additional — not just expected. Used in both formal and casual Japanese.",
  notes: "〜ばかりか vs 〜だけでなく: both mean 'not only... but also.' ばかりか is more emphatic — the additional element is more surprising or extreme. だけでなく is more neutral. 疲れているばかりか、熱もある (not only tired but also has a fever — that's even worse) emphasizes escalating severity."
},
"n2-bakari-ni": {
  description: "〜ばかりに means 'simply because,' 'just because' — a single cause leads to a significant (usually negative) result. The speaker highlights that the unfortunate outcome stems from one specific reason: 一言余計なことを言ったばかりに、友達を失った (just because I said one unnecessary word, I lost a friend).\n\nばかりに attaches to plain forms (often past or ongoing states). It implies the speaker regrets or laments the disproportionate consequence of a single, specific action. The result is almost always negative — something went badly wrong because of just this one thing.",
  notes: "〜ばかりに (a single cause leading to an unfortunate result — lament) vs 〜せいで (blame — because of X, bad Y happened). ばかりに focuses on the specific triggering cause; せいで assigns blame. ばかりに is more self-reflective; せいで can blame others."
},
"n2-wa-mochiron": {
  description: "〜はもちろん means 'of course,' 'not to mention,' 'as well as' — the first noun is treated as obviously true/included, and the statement extends to additional elements: 日本語はもちろん、英語も話せる (not to mention Japanese, I can also speak English). The first element is the expected baseline; the second is the additional point.\n\nはもちろん attaches to nouns. Often paired with も: 〜はもちろん、〜も。The full form はもちろんのこと is more formal. It implies a stronger assertion than just listing items with も.",
  notes: "〜はもちろん (X goes without saying, and also Y) vs 〜だけでなく (not only X but also Y). はもちろん treats the first item as obviously expected and emphasizes the addition; だけでなく is more neutral. 英語はもちろん = of course English (implied: who wouldn't expect that?)."
},
"n2-ijou-wa": {
  description: "〜以上は means 'now that,' 'since,' 'given that' — it expresses that once a certain state or decision is established, a logical obligation or consequence follows: やると言った以上は、最後まで頑張らなければならない (now that you've said you'll do it, you have to see it through to the end).\n\n以上は follows plain forms (often past or present). It implies that the preceding event creates an irrevocable commitment or logical necessity. Contrast with からには (similar meaning, slightly more casual) and 以上 alone (formal written variant without は).",
  notes: "〜以上は vs 〜からには: nearly identical in meaning (now that / since). 以上は is slightly more formal and can appear in written prose; からには is common in both written and spoken Japanese. Both imply commitment or logical consequence from an established fact."
},
"n2-kara-ni-wa": {
  description: "〜からには means 'now that,' 'since,' 'given that' — once a commitment, decision, or fact is established, a responsibility or natural consequence follows: 日本に来たからには、日本語を勉強すべきだ (now that you've come to Japan, you ought to study Japanese). The speaker invokes the established fact to argue for the necessity of the following action.\n\nからには follows plain forms. It is common in expressions of personal resolution: 始めたからには最後までやる (since I've started, I'll see it through). The tone is committed and slightly assertive.",
  notes: "〜からには vs 〜以上は: essentially interchangeable (now that / since). からには is slightly more natural in casual-to-neutral speech; 以上は is slightly more formal. Both express that the preceding fact creates an obligation for what follows."
},
"n2-kara-to-itte": {
  description: "〜からといって means 'just because' in the sense of invalid reasoning — 'just because X doesn't mean Y.' It challenges or dismisses a premise as insufficient justification: お金があるからといって、何でも買えるわけではない (just because you have money doesn't mean you can buy anything). The speaker rejects the logical connection between the reason and the conclusion.\n\nからといって attaches to plain forms. It often follows a hypothetically conceded clause and then negates the conclusion. The following clause is frequently negative or dismissive. It is a useful expression for politely pushing back on assumptions.",
  notes: "〜からといって〜わけではない is a very common combination: 'just because X, it doesn't follow that Y.' The わけではない reinforces the rejection of the implied conclusion. This construction is important for nuanced argumentation in Japanese."
},
"n2-kaneru": {
  description: "〜かねる means 'cannot bring oneself to,' 'find it difficult to' — it expresses reluctance or an emotional/social inability to perform an action. It is a polite way to refuse or decline: お引き受けしかねます (I'm afraid I cannot accept that). It is commonly used in business and formal contexts to give polite negative responses.\n\nかねる attaches to verb stems. It implies the speaker is not simply unable but rather finds the action problematic, inappropriate, or against their principles. It is the polite equivalent of saying 'I really can't do that' without being blunt.",
  notes: "〜かねる (polite refusal — cannot bring myself to) is a very useful business Japanese expression. The negative かねない (N2) means the opposite — 'might happen (negatively).' These are frequently confused: かねる = 'I hesitate to / cannot'; かねない = 'might well happen (bad outcome).'"
},
"n2-kanenai": {
  description: "〜かねない means 'might well,' 'there's a risk of,' 'could easily lead to' — it expresses concern about a potential negative outcome: そんな食べ方では病気になりかねない (eating like that might well lead to illness). It warns that the described action could cause an undesirable result.\n\nかねない attaches to verb stems. The nuance is always negative — the outcome would be unfortunate. It is the opposite of かねる: かねない expresses what might happen (bad outcome possible); かねる expresses what the speaker cannot bring themselves to do (reluctance/refusal).",
  notes: "〜かねない (might happen — risk of negative outcome) vs 〜かもしれない (might — neutral possibility). かねない is specifically for negative outcomes and carries a warning tone. かもしれない is neutral. このままでは失敗しかねない = the way things are going, failure is a real risk (warning)."
},
"n2-gatai": {
  description: "〜がたい means 'hard to,' 'difficult to' — but specifically for actions that are emotionally, morally, or psychologically difficult rather than technically or physically hard. It is stronger than にくい: 信じがたい話だ (an incredible / hard-to-believe story), 許しがたい行為 (an unforgivable / hard-to-forgive act).\n\nがたい attaches to verb stems and conjugates as an い-adjective. The difficulty it expresses is internal and often absolute — the actions are nearly impossible to bring oneself to do because of their nature. Common combinations: 信じがたい (hard to believe), 耐えがたい (hard to endure), 許しがたい (hard to forgive).",
  notes: "〜がたい (emotional/moral difficulty — nearly impossible to bring oneself to do) vs 〜にくい (general difficulty — hard to do physically or practically) vs 〜づらい (personal discomfort — uncomfortable for the speaker). がたい is the strongest and most absolute of the three."
},
"n2-zaru-wo-enai": {
  description: "〜ざるをえない means 'have no choice but to,' 'cannot avoid doing' — circumstances force the speaker to act against their preference: 結果を認めざるをえない (I have no choice but to accept the result). The action is taken reluctantly because all alternatives are impossible or impractical.\n\nざるをえない attaches to the nai-stem (negative stem) of verbs. Critical exception: する → せざるをえない (not しざるをえない). It derives from the classical negative auxiliary ざる + をえない (cannot avoid). The nuance is resignation — the speaker is compelled by circumstances.",
  notes: "〜ざるをえない (forced by circumstances — resignedly) vs 〜しかない / 〜しかしかたがない (have no choice but — more neutral). ざるをえない is formal and carries a stronger nuance of reluctance. する → せざるをえない is an irregular form that must be memorized."
},
"n2-zu-ni-wa-irarenai": {
  description: "〜ずにはいられない means 'cannot help but,' 'cannot resist doing' — an irresistible impulse compels the speaker: 笑わずにはいられない (I can't help but laugh). It expresses that the action is essentially involuntary — the urge is too strong to suppress.\n\nずにはいられない attaches to the nai-stem: 食べずにはいられない (can't help eating it). Irregular: する → せずにはいられない. The colloquial version ずにはおられない is also used. Compare with 〜てしかたがない / 〜てたまらない, which express overwhelming feelings but not necessarily irresistible urges to act.",
  notes: "〜ずにはいられない (irresistible urge to do — I can't not do it) vs 〜てたまらない (unbearable feeling — I'm overwhelmed). ずにはいられない focuses on an action that cannot be suppressed; たまらない focuses on a feeling or state that is overwhelming. する → せずにはいられない (irregular)."
},
"n2-te-hajimete": {
  description: "〜てはじめて means 'not until,' 'only after,' 'only once X happened did Y become possible.' It expresses that an experience or action is a prerequisite for understanding or achieving something: 失敗してはじめて、大切なことを学んだ (only after failing did I learn something important). Y would not have happened without X.\n\nてはじめて attaches to the て-form. The nuance is one of realization — often with hindsight, the speaker recognizes that the first event was necessary for the second. It is commonly used in reflective or narrative contexts.",
  notes: "〜てはじめて (only after X does Y become possible — realization through experience) vs 〜たら (when/after X, then Y). てはじめて implies the first event was a necessary condition; たら is simply temporal or conditional. てはじめて often carries a sense of 'I didn't realize until it happened.'"
},
"n2-to-tomo-ni": {
  description: "〜とともに means 'together with,' 'along with,' 'as ... does' — it expresses simultaneity, accompaniment, or parallel change. Used for people: 彼女と共に働く (work together with her). Used for simultaneous change: 年をとるとともに、知恵がつく (wisdom comes as one ages — both progress together).\n\nとともに attaches to nouns and dictionary-form verbs. The simultaneous change usage is common in formal writing: 技術の発展とともに、社会が変わった (society changed along with technological development). It is more literary than ながら and works with different subjects.",
  notes: "〜とともに (together with / along with — formal, can have different subjects) vs 〜ながら (while — requires same subject, simultaneous actions). とともに is more formal and often appears in written Japanese to describe parallel developments or accompanying circumstances."
},
"n2-wo-kikkake-ni": {
  description: "〜をきっかけに means 'taking X as an opportunity,' 'triggered by,' 'using X as the starting point' — it marks the event that sparked a change or new development: 病気をきっかけに、健康に気を使うようになった (the illness served as a trigger for me to start caring about my health). The preceding noun is the catalyst.\n\nをきっかけに attaches to nouns. The full form をきっかけとして is more explicit. Often used with になる or verbs of change to indicate a turning point. Contrast with 〜を機に (N2, more formal, same meaning) and 〜をもとに (using X as a basis, not a trigger).",
  notes: "〜をきっかけに (using X as a turning point/trigger — marks what sparked a change) vs 〜をもとに (based on X — marks the foundation or material used). きっかけに is for catalytic events that start a new direction; もとに is for foundations or sources of information."
},
"n2-wo-tsujite": {
  description: "〜を通じて / 〜を通して both mean 'through,' 'via,' 'throughout' — but with slightly different nuances. を通じて emphasizes the means or channel through which something happens: 友人を通じて知り合った (we met through a mutual friend). It can also mean 'throughout a period': 一年を通じて温暖な気候だ (a mild climate throughout the year).\n\nを通して emphasizes the process or medium: 音楽を通して気持ちを伝える (convey feelings through music). Both forms are interchangeable in many contexts, but を通じて tends to be used for channels/intermediaries, while を通して tends to emphasize the process or means.",
  notes: "〜を通じて vs 〜を通して: largely interchangeable, but を通じて is more common for human intermediaries and time periods; を通して is more common for media, processes, and experiences. Both are N2-level expressions used in formal-to-neutral contexts."
},
"n2-mai": {
  description: "〜まい is the negative volitional auxiliary — it expresses either (1) the speaker's firm resolve not to do something: 二度とそんなことはするまい (I will definitely not do such a thing again), or (2) negative probability: あんな店には誰も行くまい (nobody would go to such a place). It is formal and literary.\n\nまい attaches to dictionary-form u-verbs and stem of ru-verbs: 行くまい, 食べまい. Irregular: するまい (or すまい), くるまい (or こまい). It is the negative counterpart of the volitional 〜う/〜よう. In modern Japanese, まい appears mainly in formal writing and set phrases — casual speech uses 〜ないつもり or 〜ないだろう instead.",
  notes: "〜まい is mostly a formal/literary expression. In casual conversation, use 〜ないつもりだ (won't, intend not to) or 〜ないだろう (probably won't). Seeing まい in a text is a signal of formal or literary register. The form can vary: するまい / すまい, くるまい / こまい."
},
"n2-wo-megutte": {
  description: "〜をめぐって means 'surrounding,' 'over,' 'concerning' — specifically regarding something that is the center of debate, dispute, or discussion: 土地をめぐって争いが起きた (a dispute arose over the land). It marks the central issue around which something revolves, often conflict or negotiation.\n\nをめぐって follows nouns. The attributive form をめぐる modifies nouns: 環境問題をめぐる議論 (debate surrounding environmental issues). It is more specific than について in that it implies the topic is contentious or the subject of active attention.",
  notes: "〜をめぐって (surrounding — implying conflict, debate, or active concern) vs 〜について (about — neutral topic marker). をめぐって implies there is something at stake or some conflict; について is simply topical. Use をめぐって when the noun is the center of a dispute or significant discourse."
},
"n2-ni-ojite": {
  description: "〜に応じて means 'according to,' 'depending on,' 'in response to' — the action or state adjusts based on the preceding noun: 能力に応じて仕事を割り当てる (assign work according to ability), 状況に応じて対応する (respond according to the situation). The relationship is one of proportional adjustment.\n\nに応じて attaches to nouns. The attributive form に応じた modifies nouns: 収入に応じた税金 (taxes proportional to income). It is more formal than 〜によって and implies an appropriate, calibrated response to varying conditions.",
  notes: "〜に応じて (proportionally adjusted to — appropriate response to variable conditions) vs 〜によって (by/depending on — general dependence or causation). に応じて implies a systematic, appropriate calibration; によって can express causation, means, or agent more broadly."
},
"n2-ni-sakidatte": {
  description: "〜に先立って means 'prior to,' 'before' — specifically in preparation for or in advance of an important formal event: 式典に先立って、リハーサルを行った (we held a rehearsal prior to the ceremony). It implies that the first action is done in preparation for the second, which is typically significant.\n\nに先立って follows nouns and dictionary-form verbs. The attributive form に先立つ modifies nouns: 式典に先立つ準備 (preparations prior to the ceremony). It is a formal expression used in official and ceremonial contexts.",
  notes: "〜に先立って (formal advance preparation — prior to a significant event) vs 〜の前に (before — neutral, everyday). に先立って implies the importance of both the preparation and the event; の前に is neutral and everyday. Always use の前に in casual speech."
},
"n2-nai-koto-ni-wa": {
  description: "〜ないことには means 'unless,' 'if ... not' — it states a prerequisite that must be met for the main clause to be possible: 実際にやってみないことには、分からない (unless you actually try it, you won't understand). The condition is presented as necessary — without it, the result is impossible.\n\nないことには follows the nai-form of verbs. The following clause is always negative or implies impossibility/difficulty. It is similar to 〜なければ but more emphatic — it highlights the necessity of the prerequisite more strongly.",
  notes: "〜ないことには (unless — strong prerequisite: without X, Y is impossible) vs 〜なければ (if not — standard conditional). ないことには is more emphatic about the necessity of the condition and is almost always followed by phrases like 分からない, できない, 始まらない."
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
