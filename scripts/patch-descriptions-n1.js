#!/usr/bin/env node
const fs = require('fs'), path = require('path')
const file = path.join(__dirname, '..', 'src', 'data', 'grammar.json')
const data = JSON.parse(fs.readFileSync(file, 'utf8'))

const patches = {
"n1-ikan-ni-yotte": {
  description: "〜いかんによって means 'depending on' — a very formal expression of contingency used in official, legal, and administrative language: 結果いかんによっては、対策を変える (depending on the results, we will change our approach). いかん itself is a formal noun meaning 'the state/nature of something.'\n\nSimpler equivalents include 〜によって and 〜次第で, but いかんによって is reserved for formal registers. Also encountered as 〜いかんで (shorter form) or 〜いかんにかかわらず (regardless of).",
  notes: "〜いかんによって is formal/bureaucratic language. In everyday speech and most writing, 〜次第で or 〜によって is far more natural. Seeing いかん in text signals a very formal or official register — government documents, formal announcements, or literary prose."
},
"n1-ikan-ni-kakawarazu": {
  description: "〜いかんにかかわらず means 'regardless of,' 'irrespective of' — the outcome or action is the same no matter what the stated condition is: 理由いかんにかかわらず、遅刻は認めない (regardless of the reason, tardiness will not be accepted). It is a very formal expression combining いかん (state/nature of) with にかかわらず (regardless of).\n\nThis pattern is common in legal documents, regulations, official notices, and formal speeches. The simpler forms いかんを問わず and 〜にかかわらず carry the same meaning with slightly less emphasis.",
  notes: "〜いかんにかかわらず is bureaucratic and extremely formal. For everyday use, say 〜にかかわらず or 〜かどうかにかかわらず. This expression often appears in company policies, legal contracts, and official regulations."
},
"n1-osore-ga-aru": {
  description: "〜おそれがある means 'there is a risk/fear of,' 'there is a danger that' — it expresses concern that a negative event may occur: この地域では洪水のおそれがある (there is a risk of flooding in this area). It is commonly used in official warnings, weather forecasts, news reports, and risk assessments.\n\nおそれがある attaches to the dictionary form of verbs or nouns (Noun + の + おそれがある). It is neutral and objective — unlike 〜かねない (which implies the speaker is warning about the consequences of a specific action), おそれがある simply states that a risk exists.",
  notes: "〜おそれがある (objective risk statement — there is a danger) vs 〜かねない (warning about the consequences of a specific action — might well happen). おそれがある is common in public safety announcements; かねない is used more in personal advice or warnings."
},
"n1-katagata": {
  description: "〜かたがた means 'while also,' 'for the dual purpose of' — it describes doing two things at once, where the speaker combines a main errand or obligation with another activity. It is formal and used in traditional social contexts: お礼かたがたご挨拶に参りました (I have come to greet you and also to express my thanks). The two purposes are simultaneous.\n\nかたがた follows nouns (typically action nouns like お礼, ご挨拶, 散歩). It implies courtesy and formality — the speaker is being polite by bundling purposes. It is most common in formal written communications and set polite expressions.",
  notes: "〜かたがた is primarily seen in formal letter writing and polite social situations. Everyday equivalents would be 〜を兼ねて or 〜がてら (while also doing). These are much more common in casual contexts."
},
"n1-katawara": {
  description: "〜かたわら means 'while,' 'in addition to one's main activity,' 'alongside' — it describes a secondary concurrent activity that runs alongside a primary one: 仕事をするかたわら、小説を書いている (alongside my work, I write novels). The main activity is ongoing and the かたわら activity is supplementary.\n\nかたわら follows nouns (Noun + の + かたわら) and dictionary-form verbs. It implies a sustained dual-activity lifestyle rather than a one-time coincidence. It is more formal and literary than ながら and allows for different subjects or sustained time periods.",
  notes: "〜かたわら (sustained dual activity — alongside a main occupation) vs 〜ながら (simultaneous actions — same moment, same subject). かたわら suggests two ongoing life activities (work and hobby); ながら suggests two actions happening at the same instant."
},
"n1-ga-saigo": {
  description: "〜が最後 means 'once you do X, there's no going back' — it describes an irreversible negative consequence following an action: 彼女が怒り出したが最後、誰も止められない (once she gets angry, nobody can stop her). The action marks a point of no return.\n\nが最後 attaches to the ta-form of verbs. It always implies a negative or uncontrollable outcome. The nuance is close to 'the moment that happens, it's all over.' It is somewhat dramatic and literary, used in both written and spoken Japanese for emphasis.",
  notes: "〜が最後 (irreversible negative consequence — once this happens, it's over) vs 〜たとたんに (the moment X, then Y — immediate succession, not necessarily negative). が最後 always implies a bad or uncontrollable outcome; とたんに is more neutral about the consequence."
},
"n1-kirai-ga-aru": {
  description: "〜きらいがある means 'have a tendency to,' 'be inclined to' — it describes a somewhat negative habitual tendency in a person or thing. Unlike ことがある (occasional experience), きらいがある implies a characteristic, recurring pattern that is usually criticized: 彼は大げさに言うきらいがある (he has a tendency to exaggerate).\n\nきらいがある follows the dictionary form of verbs or nouns + の. The tendency described is almost always negative or a flaw. きらい here is not the な-adjective 嫌い (dislike) but an archaic noun meaning 'inclination/tendency' — be careful not to confuse the two.",
  notes: "〜きらいがある = a negative habitual tendency (a fault or shortcoming). This is completely different from the common な-adjective きらい (dislike). The pattern is somewhat literary and formal, often used in editorial critique or character analysis."
},
"n1-kiwamari-nai": {
  description: "〜きわまりない (also 〜きわまる) means 'extremely,' 'in the extreme,' 'utterly' — it expresses that something has reached the peak of a quality, often negative: 失礼きわまりない (utterly rude / rudeness in the extreme), 危険きわまりない状況 (an extremely dangerous situation).\n\nきわまりない attaches directly to な-adjective stems or nouns without な. It is a formal and literary expression, typically used in writing or formal speech. The shorter form 〜きわまる is also used: 不快きわまる (extremely unpleasant).",
  notes: "〜きわまりない is almost always used with negative or unfavorable qualities. Saying something positive like 素晴らしきわまりない is unusual — for positive extremes, とてつもなく or 非常に are more common. The expression signals strong disapproval in a formal register."
},
"n1-koso-sure": {
  description: "〜こそすれ means 'may X but certainly not Y' — it emphatically concedes one element while denying the opposite. It expresses that while something is true (even emphatically so), the opposite is definitely not: 感謝こそすれ、恨みはない (I feel nothing but gratitude — certainly no resentment). The こそ emphasizes the first element; すれ is the conditional of する.\n\nこそすれ follows verbs (verb plain + こそすれ) or nouns. It is a literary and formal pattern that appears in essays and formal argument. It implies the speaker's full conviction in the denial of the second element.",
  notes: "〜こそすれ is a literary contrastive pattern. The everyday equivalent would be 〜はしても、〜はしない (I may do X, but I certainly don't do Y). こそすれ is more emphatic and elegant — suited to formal writing and debate."
},
"n1-koto-ka": {
  description: "〜ことか expresses a strong exclamation of emotion — 'how (much)!', 'what a!' It is used to express the extent of a feeling or how many times something happened: 何度失敗したことか (how many times did I fail!), どれほど心配したことか (how worried I was!). It is rhetorical — the speaker is not asking a literal question.\n\nことか follows interrogative words (何度、どれほど、どんなに) and the plain form of verbs. It is often used in literary or emotional contexts, expressing feelings that are too deep to quantify. The past form 〜たことか emphasizes accumulation over time.",
  notes: "〜ことか is rhetorical exclamation — it sounds like a question but expresses overwhelming emotion. The listener is not expected to answer. Compare with 〜ものか, which expresses strong refusal or denial. ことか = how much/how many times (emotional); ものか = absolutely not (rejection)."
},
"n1-koto-naku": {
  description: "〜ことなく means 'without doing,' 'never doing' — it expresses persistent non-action throughout a period or process: 彼は諦めることなく、挑戦し続けた (he continued to challenge himself without ever giving up). It emphasizes the complete absence of the action described.\n\nことなく attaches to the dictionary form and is formal and literary. It implies a sustained, unbroken absence of the action — stronger than simply 〜ないで. It often appears in narrative descriptions of admirable persistence or determination.",
  notes: "〜ことなく (without ever doing — sustained non-action, formal) vs 〜ないで (without doing — neutral, everyday). ことなく is more emphatic and literary, stressing that the action never occurred throughout a period. Use ないで in conversation; ことなく in formal writing or narrative."
},
"n1-koto-nashi-ni": {
  description: "〜ことなしに means 'without doing' — it formally states that an action is performed in the absence of a prerequisite: 努力することなしに成功はない (there is no success without effort). It emphasizes the logical or necessary connection between the absent action and the consequence.\n\nことなしに follows the dictionary form and is more formal than simply ないで. It often appears in logical arguments, proverbs, and formal statements about cause and consequence. The nuance is that the absent action is a natural prerequisite for the result.",
  notes: "〜ことなしに vs 〜ことなく: both mean 'without doing,' but ことなしに emphasizes that the absent action is a prerequisite for what follows (conditional relationship); ことなく emphasizes the sustained absence of the action throughout a period (narrative/descriptive). The distinction is subtle."
},
"n1-zu-shite": {
  description: "〜ずして means 'without doing' — a classical and literary negative gerund derived from the classical negative auxiliary ず. It is the formal/classical equivalent of 〜ないで: 言わずして分かる (understood without being said / goes without saying). It appears in formal writing, literature, set phrases, and proverbs.\n\nずして attaches to the nai-stem (same as ず). Irregular: する → せずして, くる → こずして. The phrase 言わずして知れた (universally known without needing to be said) is a common set expression. In modern Japanese, this form is almost exclusively literary.",
  notes: "〜ずして is the classical/literary form of 〜ないで (without doing). In modern Japanese, you will see ずして mainly in fixed phrases (労せずして — without effort), proverbs, and formal literature. Mastering recognition rather than active production is the goal for most learners."
},
"n1-sura": {
  description: "〜すら means 'even' — it emphasizes an extreme or unexpected case, implying that if even this minimal or extreme thing applies, the rest certainly does too: 子供すら知っている (even children know it). It is more literary and formal than さえ and carries a stronger sense of surprise or emphasis.\n\nすら replaces or combines with particles similarly to さえ: でさえ → ですら, にさえ → にすら. It is common in literary works, formal essays, and news writing. In casual conversation, さえ is strongly preferred over すら.",
  notes: "すら (even — literary, emphatic) vs さえ (even — standard) vs でも (even — casual). Strength: すら ≥ さえ > でも. In casual speech, use さえ or でも. Use すら when writing formally or for dramatic effect. すら often implies the speaker's surprise or disbelief."
},
"n1-da-ni": {
  description: "〜だに means 'even just' — even the mere thought, mention, or act of X is enough (to trigger the result). It emphasizes that even the smallest related stimulus is sufficient: 考えるだに恐ろしい (just the thought of it is terrifying), 夢にだに思わなかった (I never even dreamed of it).\n\nだに is an archaic/classical particle that remains in modern Japanese only in a few fixed phrases and literary contexts. It typically follows verbs like 考える (think), 想像する (imagine), and 夢に (in dreams). It is not used productively in modern conversation.",
  notes: "〜だに is a classical remnant found mainly in set phrases: 考えるだに恐ろしい (just thinking about it is terrifying), 夢にだに思わなかった (never even imagined). For the JLPT, recognition is more important than production. The everyday equivalents use さえ or だけで."
},
"n1-ta-tokoro-de": {
  description: "〜たところで means 'even if (you do X), it won't help' — it expresses futility. The action is conceded, but the speaker asserts it will not lead to the expected or desired result: 今さら謝ったところで、許してもらえない (even if you apologize now, you won't be forgiven). The action is ultimately pointless.\n\nたところで attaches to the ta-form of verbs. The result clause is typically negative or dismissive. It is more specific than 〜ても — ても is a general concessive ('even if'); たところで emphasizes the futility of the effort specifically.",
  notes: "〜たところで (futility — even if you do X, it won't work) vs 〜ても (even if — neutral concessive). たところで carries a stronger nuance of pointlessness or resignation; ても is neutral. 今さら謝っても意味がない is more casual; 謝ったところで is more emphatic about the futility."
},
"n1-de-are-de-are": {
  description: "〜であれ〜であれ means 'whether X or Y,' 'regardless of whether X or Y' — it presents two alternative cases and asserts that the following statement applies equally to both: 男であれ女であれ、平等に扱う (whether male or female, treat them equally).\n\nThis double-であれ construction follows nouns. A single であれ can also appear alone: どんな困難であれ (whatever difficulty it may be). The pattern is formal and literary, equivalent to 〜にしても〜にしても or the more casual 〜でも〜でも.",
  notes: "〜であれ〜であれ (whether A or B — formal, covers both alternatives) vs 〜にしても〜にしても (whether A or B — semi-formal). Both cover both cases exhaustively. であれ is more literary; にしても is more natural in speech."
},
"n1-to-atte": {
  description: "〜とあって means 'because of,' 'given that' — it indicates that a special or unusual circumstance explains an otherwise surprising result: 連休とあって、道路が込んでいた (given that it was a holiday weekend, the roads were congested). The preceding clause is the notable circumstance; the result makes sense in that light.\n\nとあって follows nouns and plain forms. It is more formal and journalistic than から. The key nuance is that the cause is a special or notable situation — not an ordinary reason. It often appears in news writing and formal narrative.",
  notes: "〜とあって (given the special circumstance — explains an unsurprising result in context) vs 〜から (because — general reason). とあって marks a notable, context-defining situation; から is a neutral cause. とあって is common in news reports: 人気スターとあって, 大勢のファンが集まった."
},
"n1-to-areba": {
  description: "〜とあれば means 'if that is the case,' 'if it comes to that,' 'for the sake of' — it expresses strong determination or willingness based on a stated condition: 家族のためとあれば、どんな苦労でも厭わない (if it's for the family, I don't mind any hardship). The condition motivates an extreme or committed response.\n\nとあれば follows nouns and plain forms. It is formal and somewhat dramatic, often used to express self-sacrifice or deep commitment. It can also express surprise that a condition leads to a particular behavior: あなたがそう言うとあれば、信じるしかない.",
  notes: "〜とあれば (strong determination given a condition — for the sake of / if it comes to that) is formal and emotionally committed. The everyday equivalent is 〜ならば or 〜なら. とあれば sounds more resolute and is used in literary or emotional declarations."
},
"n1-to-iedomo": {
  description: "〜といえども means 'even though,' 'although,' 'no matter who/what' — it is a formal, literary concession: プロといえども、失敗することはある (even professionals sometimes fail). It concedes that the subject belongs to a high category, but asserts that an exception or universal truth still applies.\n\nといえども follows nouns and plain forms. It derives from the classical 〜といえど. Common patterns: たとえ〜といえども (even if, no matter how). It is more archaic and formal than でも or 〜にしても, and is typically found in essays, literature, and formal argument.",
  notes: "〜といえども is a formal/literary concession. In everyday speech, use でも or 〜にしても. It is especially common after universal/absolute nouns: 神といえども (even God), どんな天才といえども (no matter what genius). The more formal the text, the more likely you'll encounter it."
},
"n1-tomo-naku": {
  description: "〜ともなく means 'without a clear intention,' 'absently,' 'without realizing' — it describes an action done without conscious aim or direction: テレビを見るともなく見ていた (I was sort of watching TV without really watching it). The action happens vaguely, in an unfocused way.\n\nともなく attaches to dictionary-form verbs, often repeated: 聞くともなく聞いていた (I heard it without really listening). It is distinct from 〜ないで (without doing) — ともなく means the action is occurring but without intention or focus, not that it is absent.",
  notes: "〜ともなく (action happening without clear intention — vaguely, absently) vs 〜ないで (action absent). ともなく describes a semi-conscious, unfocused state — you're doing something but not really doing it with purpose. Very common in narrative descriptions of daydreaming or distracted states."
},
"n1-tomo-naru-to": {
  description: "〜ともなると (also 〜ともなれば) means 'when it comes to (a high level),' 'once you become (a status)' — it indicates that reaching a certain elevated level brings new expectations, responsibilities, or phenomena: 部長ともなると、責任も重くなる (once you become a department head, your responsibilities get heavy).\n\nともなると follows nouns indicating status, level, or milestone. The implication is that the level is high enough that things are naturally different — 'at that level, of course X happens.' It signals a qualitative shift associated with elevated status.",
  notes: "〜ともなると emphasizes that a certain elevated status or level naturally brings associated phenomena. The everyday equivalent is 〜になると (when you become), but ともなると specifically signals an elevated or notable level. Used for managers, professionals, certain ages, or important occasions."
},
"n1-nagara-ni": {
  description: "〜ながらに(して) means 'while still being,' 'from birth,' 'in its natural state' — it expresses that something has always been so, from the very state of being: 生まれながらにして才能がある (has talent from birth / was born with talent). The preceding noun or state is the unchanged, inherent condition.\n\nながらに attaches to nouns indicating a fundamental state (生まれ, 涙, 昔). It is literary and formal, used to describe innate qualities or situations that persist unchanged. Compare 〜ながら (while doing — for actions) which requires verb stems; ながらに is used for noun states.",
  notes: "〜ながらに(して) is a literary expression for innate or inherent states. Common set phrases: 生まれながらに (from birth / innately), 昔ながらの (old-fashioned, in the traditional way), 涙ながらに (in tears). Recognizing these set phrases is more important than productive use."
},
"n1-nari-ni": {
  description: "〜なりに means 'in one's own way,' 'to the extent of,' 'appropriately for one's level' — it acknowledges a limitation while asserting that effort or quality is appropriate to that level: 子供なりに頑張った (the child did their best in their own way / appropriate to their level). It carries a nuance of doing the best one can given the circumstances.\n\nなりに follows nouns and plain forms. It is often used to acknowledge constraints while affirming genuine effort. The related なりの modifies nouns: 子供なりの答え (an answer appropriate for a child). It implies that the standard is relative, not absolute.",
  notes: "〜なりに (in one's own way — appropriate to one's level) vs 〜らしく (in a manner befitting — living up to the expected standard). なりに acknowledges the limitation and says the best was done within it; らしく asserts conformity to an ideal. 子供なりに = in a childlike way (appropriate); 子供らしく = in the way a proper child should."
},
"n1-nari-nari": {
  description: "〜なり〜なり means 'either... or,' 'or something like' — it presents alternatives as options or suggestions, implying the listener should choose one or find something appropriate: 先生なり親なりに相談してみれば？ (why not consult with a teacher or your parents or someone?). The speaker suggests options without dictating which.\n\nなりなり follows nouns or verb dictionary forms. The alternatives are usually parallel options from the same category. It can sound slightly dismissive or casual — 'just do one of these things.' It is different from 〜か〜か (whether A or B, as a formal choice), being more of a casual suggestion.",
  notes: "〜なり〜なり (either A or B — casual suggestion of options) vs 〜か〜か (whether A or B — formal choice). なりなり sounds like the speaker is a bit exasperated or offering informal advice: 電話するなりメールするなりしてください (just call or email or something)."
},
"n1-ni-atte": {
  description: "〜にあって means 'in,' 'at,' 'in the situation of' — a formal expression marking a context or circumstance: この困難な状況にあって、冷静に判断することが必要だ (in this difficult situation, it is necessary to make calm judgments). It emphasizes that the following statement is made within a specific, often challenging, circumstance.\n\nにあって follows nouns. It is a formal, written expression equivalent to 〜において for contexts. It appears in formal speeches, essays, and official documents. にあっても (even in X situation) is a related concessive pattern.",
  notes: "〜にあって (in a certain situation — formal context marker) vs 〜において (in/at — formal location/context). Both are formal alternatives to で. にあって often implies the situation is challenging or special; において is more neutral and broader in use."
},
"n1-ni-kakawaru": {
  description: "〜にかかわる means 'relating to,' 'concerning,' 'affecting' — with a nuance of high stakes or serious significance: 命にかかわる問題 (a matter affecting life), 信用にかかわる問題 (a matter affecting one's credibility). It marks that the preceding noun is directly implicated in a consequential way.\n\nにかかわる is always used attributively (modifying a noun): Noun₁ + にかかわる + Noun₂. It implies the issue is serious — something important is at stake. Compare with に関する (regarding, neutral topic) — にかかわる implies consequences beyond mere topic relevance.",
  notes: "〜にかかわる (affecting — high stakes, serious consequences) vs 〜に関する (concerning — neutral topic). 命にかかわる = matters of life and death (serious). 生命に関する研究 = research on/about life (topic). Use にかかわる when something is at stake; に関する for topical references."
},
"n1-ni-itaru-made": {
  description: "〜に至るまで means 'even,' 'as far as,' 'up to and including' — it extends the scope of a statement to include even the extreme or unexpected end of a range: 細部に至るまで完璧だ (perfect right down to the details). It emphasizes comprehensiveness — the range extends all the way to the stated point.\n\nに至るまで follows nouns. It often pairs with から or other range-marking expressions: 大臣から一般市民に至るまで (from ministers down to ordinary citizens). The nuance is that even the extreme or final point in a range is included.",
  notes: "〜に至るまで (extending all the way to — emphasizes comprehensive reach) vs 〜まで (up to — simple endpoint). に至るまで emphasizes that the scope extends to an extreme or final point, often surprising in its inclusiveness. まで is the everyday equivalent."
},
"n1-ni-shite": {
  description: "〜にして has several formal uses: (1) 'at (age/time)' expressing achievement at a milestone: 50歳にして社長になった (became president at age 50); (2) 'and yet,' 'being both': 彼は学者にして詩人だ (he is a scholar and also a poet); (3) 'even for': 天才にして解けない問題 (a problem that even a genius cannot solve).\n\nにして follows nouns. All uses are formal and literary. The 'at age/time' meaning often conveys remarkable achievement for that age. The 'being both' meaning presents two qualities as simultaneously held. Context distinguishes the specific usage.",
  notes: "〜にして has multiple meanings that must be distinguished by context: (1) at a notable age/time, (2) being simultaneously X and Y, (3) even for (someone at that level). All are formal/literary. In everyday speech, use で, と, or でも instead."
},
"n1-ni-soi-nai": {
  description: "〜に相違ない means 'certainly,' 'without doubt,' 'must be' — a very formal and assertive expression of certainty based on the speaker's conviction: 彼が犯人に相違ない (there is no doubt he is the culprit). It is the formal equivalent of 〜に違いない and carries even more certainty.\n\nに相違ない follows plain forms and nouns. It is a bookish expression more common in legal and official language, essays, and formal literature than in everyday speech. 相違 means 'discrepancy/difference' — に相違ない literally means 'there is no discrepancy' = 'there is no doubt.'",
  notes: "〜に相違ない (formal: no doubt, certainly) vs 〜に違いない (standard: must be, certainly). に相違ない is more formal and definitive — suitable for legal language, formal essays, and official declarations. In everyday speech, use に違いない instead."
},
"n1-ni-taeru": {
  description: "〜にたえる means 'worthy of,' 'able to withstand,' 'worth doing.' It expresses that something meets the standard for a given action: 鑑賞にたえる作品 (a work worthy of appreciation), 批判にたえる議論 (an argument that can withstand criticism). Conversely, 〜にたえない means 'unbearable,' 'too painful to do': 見るにたえない状況 (a situation too painful to look at).\n\nにたえる follows action nouns (鑑賞, 批判, 読む, 聞く). The positive form (たえる) asserts sufficient quality; the negative (たえない) expresses that something is too distressing or poor to endure.",
  notes: "〜にたえる (worthy of / can withstand) vs 〜にたえない (cannot bear to / unbearable). These are opposites using the same verb たえる (endure/withstand). Don't confuse with 〜にたる (worthy of), which is related but slightly different in nuance — たる is more about deserving, たえる is about being able to withstand."
},
"n1-ni-taru": {
  description: "〜に足る means 'worthy of,' 'sufficient for,' 'deserving of' — it asserts that something meets the standard required for a given action or status: 信頼に足る人物 (a person worthy of trust), 尊敬に足る行為 (an act deserving respect). It is a formal expression of positive evaluation.\n\nに足る follows action nouns and verb dictionary forms. The negative に足らない / 足りない means 'not worthy of,' 'insufficient for.' It is common in formal writing when evaluating the quality or worthiness of a person or thing.",
  notes: "〜に足る (worthy of — positive evaluation, deserves this honor/action) vs 〜にたえる (can withstand/is worth — meets the standard for endurance or appreciation). Both are formal. に足る emphasizes deserving; にたえる emphasizes quality sufficient for endurance."
},
"n1-ni-tsuke": {
  description: "〜につけ (also 〜につけて) means 'whenever,' 'every time,' 'on the occasion of' — it marks a recurring stimulus that consistently triggers a particular emotional response: 昔の写真を見るにつけ、懐かしい気持ちになる (whenever I look at old photos, I feel nostalgic). The reaction is reliable and emotional.\n\nにつけ attaches to dictionary or ta-form verbs, or pairs two contrasting situations: 良いにつけ悪いにつけ (whether good or bad, in any case). The emotional response that follows is always genuine and consistent. It is more literary than たびに.",
  notes: "〜につけ (emotional reaction to a recurring stimulus — whenever X, I feel Y) vs 〜たびに (every time X — neutral frequency). につけ emphasizes the emotional consistency of the response; たびに simply marks regular recurrence without the emotional nuance."
},
"n1-wa-oroka": {
  description: "〜はおろか means 'let alone,' 'not to mention,' 'far from' — X is obvious and goes without saying; Y is an even more extreme case: 漢字はおろか、ひらがなも書けない (can't even write hiragana, let alone kanji). It presents X as the baseline and Y as something even more extreme or surprising.\n\nはおろか follows nouns and marks the more moderate element (X) while the following も or さえ introduces the more extreme element (Y). The overall meaning is always that the situation extends even beyond the expected baseline.",
  notes: "〜はおろか (let alone — X is obvious, Y is even more extreme) vs 〜はもちろん (not to mention — X is obviously true, Y is also true). はおろか is more emphatic and often appears in negative or extreme contexts; はもちろん can be neutral or positive. はおろか almost always appears with negative verbs."
},
"n1-beku": {
  description: "〜べく means 'in order to,' 'for the purpose of' — it is the formal, literary expression of purpose derived from べき (should). It expresses a goal or aim that motivates an action: 夢を実現すべく、努力を重ねた (made repeated efforts in order to realize my dream). It is the purposive form of the modal obligation べき.\n\nべく follows dictionary-form verbs. Irregular: する → すべく. It is a formal and literary pattern used in written language, essays, and formal speeches. The everyday equivalent is 〜ために or 〜ように.",
  notes: "〜べく is the formal/literary purposive form of べき. It sounds refined and classical. In everyday writing and speech, use 〜ために or 〜ように for purpose. すべく (in order to do) is commonly seen in formal business writing and literature."
},
"n1-made-mo-nai": {
  description: "〜までもない means 'no need to,' 'it goes without saying,' 'there's no need to go so far as to' — it dismisses an action as unnecessary because the conclusion is already obvious or because a lesser action suffices: 言うまでもない (it goes without saying), 確認するまでもない (there's no need to confirm it — it's obviously true).\n\nまでもない follows dictionary-form verbs. Common set phrases: 言うまでもなく (needless to say), 説明するまでもない (no need to explain). It is slightly formal but appears in both written and spoken Japanese.",
  notes: "〜までもない (no need to go that far — the conclusion is obvious or a lesser action suffices) vs 〜必要がない (there is no necessity to). までもない often implies the answer is so obvious that the action would be redundant. 言うまでもなく is one of the most common fixed phrases."
},
"n1-mo-saru-koto-nagara": {
  description: "〜もさることながら means 'not only X, but Y' — X is acknowledged as a given or obvious fact, and Y is presented as equally or more noteworthy: 実力もさることながら、運も良かった (not only was he skilled, but he was also lucky). X is not dismissed — it is presupposed — and Y adds to it.\n\nもさることながら follows nouns. It is formal and often used to balance praise or to note that multiple factors contribute to a result. Unlike はもちろん, which presents X as trivially obvious, さることながら treats X with respect while elevating Y.",
  notes: "〜もさることながら (X is true and noteworthy, but Y is also true) vs 〜はもちろん (X is obvious, and also Y). さることながら treats both X and Y as important; はもちろん treats X as so obvious it barely needs mentioning. さることながら is more balanced and respectful of both elements."
},
"n1-ya-ina-ya": {
  description: "〜やいなや means 'no sooner than,' 'the moment that,' 'the instant' — it describes two events in immediate, virtually simultaneous succession: 部屋に入るやいなや、電話が鳴った (no sooner had I entered the room than the phone rang). The second event follows the first with extreme immediacy.\n\nやいなや attaches to the dictionary (present) form of verbs. It is a literary and written expression — very rarely used in casual conversation. The second clause often describes a spontaneous or involuntary event. Compare with とたん(に), which is similar but slightly less emphatic about instantaneity.",
  notes: "〜やいなや (literary: the instant X, immediately Y) vs 〜とたんに (the moment X, then Y — semi-formal, more common). やいなや is more dramatic and literary; とたんに is more common in both spoken and written Japanese. The subject can differ between clauses in both patterns."
},
"n1-wo-oite": {
  description: "〜をおいて means 'other than,' 'aside from,' 'besides' — used with ほかに〜ない or similar to assert that the named entity is the only one suitable or possible: 彼女をおいて、この仕事はできない (there is no one other than her who can do this job). It emphasizes exclusivity — no substitute exists.\n\nをおいて follows nouns. It is always paired with a negative to assert that the named entity is indispensable. The full form をおいてほかに〜ない makes the exclusivity explicit. It is formal and somewhat literary.",
  notes: "〜をおいて(ほかに)〜ない = other than X, there is none (X is the only one). This is a strong assertion of uniqueness or indispensability. The casual equivalent is 〜以外に〜ない or 〜しかない. をおいて is more formal and emphatic."
},
"n1-wo-kagiri-ni": {
  description: "〜をかぎりに means 'as of,' 'starting from,' 'effective from' — it marks a cutoff or final point after which something ends: 今日をかぎりに、タバコをやめる (as of today, I will quit smoking). It marks the last time or the boundary point from which a change takes effect.\n\nをかぎりに follows time nouns. It is often used in announcements, resolutions, and declarations of change. The nuance is definitive — the speaker is marking a clear temporal boundary. Compare with 〜を機に (using X as an opportunity for change), which is similar but emphasizes the occasion more than the cutoff.",
  notes: "〜をかぎりに (marking a definitive cutoff point — as of X, something ends or changes) vs 〜を機に (using X as a trigger for change — emphasizes the opportunity). をかぎりに focuses on the endpoint; を機に focuses on the catalyst."
},
"n1-wo-mono-to-mo-sezu": {
  description: "〜をものともせず(に) means 'undeterred by,' 'regardless of,' 'in spite of' — it describes overcoming serious obstacles without flinching or being deterred: 嵐をものともせず、登山を続けた (undeterred by the storm, they continued climbing). The obstacle is formidable, but the subject presses on regardless.\n\nをものともせず follows nouns indicating challenges, difficulties, or threats. The phrase ものともしない (not regard as a thing) comes from ものともする (to take something seriously). This is a formal expression used to praise courage or determination in the face of adversity.",
  notes: "〜をものともせず is used to describe impressive perseverance in the face of major adversity. It implies the obstacle is significant — not trivial. The subject is typically someone admirable for their determination. It is a formal, literary expression common in news and biographical writing."
},
"n1-wo-yoso-ni": {
  description: "〜をよそに means 'ignoring,' 'indifferent to,' 'regardless of' — it describes acting without regard for others' concerns, expectations, or reactions: 親の心配をよそに、彼は旅に出た (ignoring his parents' worries, he set out on a journey). The subject disregards what others feel.\n\nをよそに follows nouns (often feelings, expectations, or concerns of others). It typically carries a negative nuance — the subject is acting selfishly or carelessly toward the feelings of others. Unlike 〜にもかかわらず (objective 'despite'), をよそに implies an emotional disregard.",
  notes: "〜をよそに (indifferent to others' feelings — subjective disregard with negative nuance) vs 〜にもかかわらず (despite — objective, neutral concession). をよそに implies the subject is emotionally unconcerned with what others feel; にもかかわらず is objective about the contradiction."
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
