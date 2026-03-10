#!/usr/bin/env node
const fs = require('fs'), path = require('path')
const file = path.join(__dirname, '..', 'src', 'data', 'grammar.json')
const data = JSON.parse(fs.readFileSync(file, 'utf8'))

const patches = {
"n5-wa": {
  description: "The topic marker は (wa) flags what the sentence is about, inviting the listener to direct their attention to that element. Unlike the subject marker が, which highlights who or what performs the action, は presents already-known or contextually established information as the topic and then makes a comment about it — often translated as 'as for X...'.\n\nは can replace が or を in many sentences to add a topicalizing or contrasting nuance. When used in a negative sentence (〜はしない), it frequently implies that while X is not done, something else might be. は is also used to set up contrasts between two things: 猫は好きだが、犬は苦手だ.",
  notes: "Beginners often confuse は and が. A helpful rule: が answers 'who/what?' questions and introduces new information; は frames a known topic or sets up a contrast. The kana は is normally read 'ha' but always pronounced 'wa' when used as this particle."
},
"n5-ga": {
  description: "The subject marker が identifies the grammatical subject of a sentence, emphasizing who or what performs the action or possesses the quality. It introduces new, unknown, or specifically identified information — answering implied questions like 'who did it?' or 'which one?'.\n\nが is required after interrogative words (誰が、何が) and in relative clauses where the subject of the embedded clause is marked. It also expresses potential, desire, and ability when used with verbs like できる, わかる, 好き, 嫌い, and ほしい.",
  notes: "は vs が is one of the hardest distinctions in Japanese. Use が when the subject is new information or being contrasted/emphasized; use は when the topic is already established in context. In subordinate clauses, が is far more common than は."
},
"n5-wo": {
  description: "The direct object marker を (wo/o) marks the noun that receives the action of a transitive verb directly. It is pronounced 'o' in modern Japanese despite the kana を. Every transitive verb — 食べる, 飲む, 読む, 見る — requires its object to be marked with を.\n\nを also marks the space through which motion passes (公園を走る — run through the park) and the point of departure from a location (バスを降りる — get off the bus). These uses extend its meaning beyond simple direct objects.",
  notes: "を only appears with transitive verbs. If you are unsure whether a verb takes を, check whether it has a direct 'thing being acted upon.' Intransitive verbs like ある, いる, and なる do not take を."
},
"n5-ni": {
  description: "に is one of the most versatile particles in Japanese, covering several core meanings. As a direction marker, it indicates the destination of movement: 学校に行く (go to school). As a location marker for existence, it shows where something is or someone stays: 家に犬がいる (there's a dog at home). As a time marker, it pinpoints a specific time: 三時に会いましょう (let's meet at 3 o'clock).\n\nに also marks the recipient of an action (友達に手紙を書く — write a letter to a friend), the purpose of movement (買い物に行く — go for shopping), and the agent in passive constructions (先生に褒められた — was praised by the teacher).",
  notes: "Distinguish に from で: に marks existence location (〜にいる/ある) and destination, while で marks the location of an action (〜で食べる). Also distinguish に from へ: both mark direction but に emphasizes arrival at a point, while へ emphasizes the direction of travel."
},
"n5-de": {
  description: "で marks the location where an action takes place (図書館で勉強する — study at the library), distinguishing it from に which marks existence. It also indicates the means or tool used to perform an action: 電車で行く (go by train), 英語で話す (speak in English).\n\nAdditionally, で can express cause or reason (病気で休んだ — took time off due to illness), scope or limit (日本一で終わった — ended with first place in Japan), and total quantity (三人で食べた — ate with three people).",
  notes: "The most common confusion is に vs で for location. Remember: に = where something exists or arrives (いる/ある/行く); で = where an action is performed (食べる/勉強する/働く)."
},
"n5-e": {
  description: "へ (e) marks the direction of movement, meaning 'toward' or 'to.' It emphasizes the direction of travel rather than the arrival at a destination. It is largely interchangeable with に for destination when used with motion verbs, but へ has a softer, more directional nuance.\n\nへ is more commonly used in formal writing and set phrases. In everyday speech, に is more natural for destinations. へ cannot mark time or recipients, which distinguishes it from the multi-purpose に.",
  notes: "In casual spoken Japanese, に is almost always preferred over へ for destinations. へ sounds slightly more literary or formal. へ is never used with verbs of existence like いる or ある."
},
"n5-no": {
  description: "の connects two nouns in a possessive or modifying relationship: 私の本 (my book), 日本語の先生 (Japanese teacher). The first noun modifies or owns the second. It can express possession, origin, material, purpose, or category depending on context.\n\nの also nominalizes verbs and adjectives, turning them into noun phrases: 食べるのが好き (I like eating), 難しいのはこれだ (the difficult one is this). In casual speech, の at the end of a sentence acts as a softening explanatory particle (similar to んです): どうしたの？ (What's wrong?).",
  notes: "Unlike English 'of,' Japanese の goes between modifier and modified: 日本の文化 (culture of Japan / Japanese culture). Multiple の can be chained: 私の友達の家 (my friend's house)."
},
"n5-mo": {
  description: "も means 'also,' 'too,' or 'even,' adding an element to what has already been stated. When も replaces は or が, it adds the new noun as an additional member of the same category: 私も行く (I'll go too). When も appears with question words (何も、誰も、どこも) and a negative verb, it means 'nothing,' 'nobody,' 'nowhere.'\n\nも can also express an unexpectedly large or small degree: 三時間も待った (waited a whole three hours!). The nuance of surprise or emphasis depends on context.",
  notes: "も replaces は, が, and を but is added after other particles: に+も → にも, で+も → でも, へ+も → へも. When 何も, 誰も, どこも appear with negative verbs they mean 'nothing/nobody/nowhere'; with positive verbs they mean 'everything/everyone/everywhere.'"
},
"n5-to": {
  description: "と has two core uses as a particle. First, it connects nouns in an exhaustive list — 猫と犬 (cats and dogs, referring to both specifically) — unlike や which implies the list is incomplete. Second, と marks a quotation or thought: 彼は来ると言った (he said he'd come); 面白いと思う (I think it's interesting).\n\nと also appears as a conditional particle meaning 'when/if (always true)': 春になると、桜が咲く (when spring comes, the cherry blossoms bloom). This conditional use implies a natural or inevitable result.",
  notes: "Use と for exhaustive, complete lists (exactly these items); use や for partial, representative lists (things like these). The quotation と is essential for reporting speech and thoughts — it precedes 言う, 思う, 聞く, and similar verbs."
},
"n5-ka": {
  description: "か turns a statement into a yes/no question when placed at the end of a sentence: これは本ですか (Is this a book?). In polite speech, か is the standard question marker. It can also embed questions inside larger sentences as an indirect question marker.\n\nIn casual speech, か can sound blunt or even challenging, especially with a falling intonation, so it is often dropped and replaced by a rising intonation in informal conversation. か also appears in expressions of uncertainty: 行くかどうか分からない (I don't know whether I'll go).",
  notes: "In casual Japanese, questions are often formed without か — just a rising intonation on the final word. Using か with a falling tone can sound confrontational between friends. か+な (かな) softens the question into a wondering-aloud expression: 明日は晴れるかな (I wonder if it'll be sunny tomorrow)."
},
"n5-ne": {
  description: "ね is a sentence-final particle that seeks confirmation or shared agreement from the listener, similar to 'right?', 'isn't it?', or 'don't you think?' It presupposes that the listener shares the same information or feeling: いい天気ですね (Nice weather, isn't it?).\n\nね softens statements and makes conversation feel more collaborative and warm. It is extremely common in everyday Japanese. The longer ねえ can express mild surprise or draw the listener's attention. Overusing ね can sound patronizing, especially in formal contexts.",
  notes: "Compare ね (seeking agreement — you probably already know/feel this) with よ (informing — this is new to you). ね is often used when the speaker assumes shared knowledge; よ is used when giving new information. Together, ねよ softens new information: そうですよね."
},
"n5-yo": {
  description: "よ is a sentence-final particle that asserts new information to the listener, conveying 'let me tell you,' 'I'm telling you,' or 'you know.' It marks information that the speaker believes the listener does not know yet: もう食べましたよ (I already ate, just so you know).\n\nよ adds confidence and emphasis to statements. It can soften warnings or recommendations: 気をつけてよ (be careful, okay). In casual speech, particularly among women, よ can also add a gentle insistence. Overuse of よ can sound pushy or presumptuous.",
  notes: "よ = new info being asserted (speaker knows, listener doesn't). ね = shared info being confirmed (both already know). Using よ when the listener already knows can seem presumptuous; using ね when you're sharing new info can seem indecisive."
},
"n5-desu": {
  description: "です is the polite copula meaning 'is/am/are.' It follows nouns and な-adjectives to form polite predicates: 学生です (I am a student), きれいです (it is pretty). It is the polite counterpart of the plain-form copula だ.\n\nです conjugates for tense and negation: present (です), past (でした), negative (ではありません / じゃありません), negative past (ではありませんでした). After い-adjectives, です is purely a politeness marker — the adjective itself carries the tense information: 暑いです (it is hot), 暑かったです (it was hot).",
  notes: "です does not translate directly in all contexts — it often just marks politeness level. The plain form is だ, used in casual speech. Note that です after い-adjectives is grammatically a polite suffix, not a true copula; the adjective still conjugates: 高くないです (it is not expensive)."
},
"n5-masu": {
  description: "〜ます is the polite verb ending for present/future affirmative tense. It attaches to the verb stem (Group 1: drop the -u and add -i; Group 2: drop -ru). It makes speech polite and formal, appropriate in work, school, and speaking with strangers or superiors.\n\nます conjugates for tense, negation, and volitional forms: present/future (〜ます), past (〜ました), negative (〜ません), negative past (〜ませんでした), volitional/invitation (〜ましょう), and polite request (〜ませんか). The て-form of ます-verbs attaches to て-form of the verb itself.",
  notes: "The ます-form only applies to verbs; adjectives use です for politeness. In dictionaries, verbs are listed in their plain (dictionary) form, not ます-form. To conjugate, find the verb's group (u-verb / ru-verb / irregular) first."
},
"n5-nai": {
  description: "〜ない is the plain negative form of verbs, meaning 'do not' or 'does not.' For Group 1 (u-verbs): change the final vowel to 'a' and add ない (書く → 書かない). For Group 2 (ru-verbs): remove る and add ない (食べる → 食べない). Irregular: する → しない, くる → こない.\n\nThe negative of い-adjectives is formed by removing い and adding くない: 高い → 高くない. For な-adjectives and nouns with だ, the negative is ではない / じゃない. ない itself is an い-adjective and conjugates accordingly: なかった (past negative).",
  notes: "A common mistake is forming u-verb negatives incorrectly. Verbs ending in -u (買う → 買わない, NOT 買あない) are irregular — the -u ending becomes -wa before ない. Always check for this pattern."
},
"n5-te": {
  description: "The て-form (te-form) is a connective verb form with many uses: chaining sequential actions (食べて寝た — ate then slept), making requests with ください (見せてください — please show me), expressing ongoing states with いる (読んでいる — is reading), granting permission with もいい (行ってもいい — may go), and prohibition with はいけない.\n\nForming the て-form depends on the verb group: u-verbs undergo sound changes (く→いて, ぐ→いで, す→して, ぬ/む/ぶ→んで, る/つ/う→って); ru-verbs simply drop る and add て; irregular: する→して, くる→きて.",
  notes: "Mastering the te-form is essential because it is the base for dozens of grammar patterns. The て/で distinction (voicing) depends on the ending: verbs ending in ぐ, ぬ, む, ぶ use で; all others use て. Exception: 行く → 行って (not 行いて)."
},
"n5-te-iru": {
  description: "〜ている expresses either an ongoing action (progressive aspect) or a resultant state that persists after an action is completed. 食べている means 'is eating' (ongoing). 結婚している means 'is married' — the state of having gotten married persists (resultant state).\n\nWhether ている expresses progressive or resultant state depends on the verb type: action verbs (食べる, 書く) → progressive; change-of-state verbs (結婚する, 死ぬ, 起きる) → resultant state. Some verbs (知る, 持つ) only naturally appear in resultant state: 知っている (knows), 持っている (has/holds).",
  notes: "In casual speech, ている contracts to てる: 食べてる, 知ってる. The contraction is extremely common and natural in conversation. Using the full ている in casual contexts can sound overly formal."
},
"n5-te-mo-ii": {
  description: "〜てもいい expresses permission — 'it is okay to,' 'you may.' The て-form of the verb is followed by もいい (or もいいです for politeness). It grants or requests permission: ここに座ってもいいですか (may I sit here?)\n\nThe pattern can also be used to give someone permission proactively: もう帰ってもいいよ (you can go home now). The negative equivalent, 〜てはいけない, expresses prohibition. A more casual equivalent is 〜ていい.",
  notes: "〜てもいいですか is the standard polite way to ask for permission. More casual: 〜ていい? Even more formal/indirect: 〜てもよろしいでしょうか. The も in the pattern has an implicit 'even if you do X, it's fine' nuance."
},
"n5-te-wa-ikenai": {
  description: "〜てはいけない expresses prohibition — 'must not,' 'you cannot,' 'it is forbidden.' The て-form of the verb is followed by はいけない. It is a strong prohibition, often used for rules, warnings, and general social norms: 走ってはいけません (you must not run).\n\nShorter forms exist: 〜てはだめ (casual), 〜てはならない (more formal/literary). In casual speech, 〜ちゃだめ and 〜ちゃいけない are common contractions. The opposite pattern, permission, is 〜てもいい.",
  notes: "〜てはいけない is stronger and more absolute than 〜ないほうがいい (it's better not to). Use いけない for firm prohibitions (rules, safety); use ないほうがいい for softer advice or recommendations."
},
"n5-tai": {
  description: "〜たい expresses a first-person desire to do something — 'want to.' It attaches to the verb stem: 食べたい (want to eat), 行きたい (want to go). It conjugates as an い-adjective: 食べたくない (don't want to eat), 食べたかった (wanted to eat).\n\nたい is generally only used for the speaker's own desires in declarative sentences. Asking about a second person's desires uses たい as a question: 何が食べたいですか (what do you want to eat?). For third-person desires, 〜たがっている is used instead: 彼は行きたがっている (he seems to want to go).",
  notes: "Never use たい to describe a third person's internal desire in a plain declarative sentence — say 彼は行きたがっている, not 彼は行きたい. The object of たい can be marked with either が or を: ラーメンが/を食べたい (both are acceptable)."
},
"n5-koto-ga-dekiru": {
  description: "〜ことができる expresses ability or possibility — 'can,' 'be able to.' The dictionary form of the verb is followed by ことができる. It is more formal than the potential form of the verb (e.g., 食べられる) and often preferred in writing and formal speech.\n\nThe negative is ことができない (cannot). The past is ことができた (was able to). This pattern works with all verb types uniformly, making it easier to use than memorizing individual potential verb conjugations.",
  notes: "〜ことができる and the potential form (〜られる / 〜える) are largely interchangeable, but ことができる is more formal. In conversation, the potential form is more natural: 泳げる is more casual than 泳ぐことができる. Note that できる alone (without こと) means 'to be completed' or 'to be made.'"
},
"n5-kara": {
  description: "から has two main uses. As a particle after nouns, it means 'from' — marking the starting point of time or space: 東京から大阪まで (from Tokyo to Osaka), 9時から (from 9 o'clock). As a conjunction after verb/adjective plain forms, it means 'because' — stating the reason for a following action or state: 雨が降っているから、外に出ない (because it's raining, I won't go out).\n\nThe causal から comes after the reason clause and before the result clause. It is more direct and assertive than ので, which is softer and more polite. から is preferred in casual speech; ので is preferred in formal or written contexts.",
  notes: "から (because) is more subjective and assertive — the speaker confidently states their reason. ので (because) is more objective and indirect — better for formal apologies, requests, and writing. Using から too much in formal speech can sound blunt."
},
"n5-made": {
  description: "まで marks the endpoint or limit of time, space, or degree — 'until,' 'up to,' 'as far as.' It is the endpoint counterpart to から (from): 9時から5時まで (from 9 to 5). It marks where something continues to: 駅まで歩く (walk to the station).\n\nまで can also mean 'even' in the sense of going so far as: そこまでするの？ (would you go that far?). まで(に) adds a deadline nuance — 'by' a certain time: 月曜日までに提出してください (please submit by Monday). The に changes まで from duration to deadline.",
  notes: "まで = 'until/up to' (duration continues to that point); までに = 'by' (deadline, action completed before that point). 5時まで勉強する = study until 5; 5時までに提出する = submit by 5."
},
"n5-ta-koto-ga-aru": {
  description: "〜たことがある expresses past experience — having done something at least once at some unspecified point in the past: 富士山に登ったことがある (I have climbed Mt. Fuji before). It is equivalent to the English present perfect used for life experience.\n\nThe pattern uses the た-form (past plain form) of the verb + ことがある. The negative — 〜たことがない — means 'have never done': 刺身を食べたことがない (I've never eaten sashimi). The emphasis is on whether or not the experience has occurred, not when.",
  notes: "〜たことがある refers to life experience, not a specific recent past action. Compare: 昨日食べた (ate yesterday — simple past) vs 食べたことがある (have eaten at some point — experience). Don't use this pattern for things that just happened."
},
"n5-tari-tari": {
  description: "〜たり〜たりする lists actions in a non-exhaustive way, implying 'do things like A and B (among other things).' It is formed from the た-form of each verb + り, ending with する: 週末は読んだり映画を見たりします (on weekends I do things like reading and watching movies).\n\nThe pattern conveys that the listed actions are representative examples, not a complete list. It can also describe alternating or contrasting actions: 泣いたり笑ったりする (alternate between crying and laughing). Using only one 〜たり is possible in casual speech but sounds incomplete to many speakers.",
  notes: "Always end the たり〜たり construction with する (or its conjugated form). Using たり without する is technically incomplete. The list is always non-exhaustive — if you want to list everything, use the て-form chain instead."
},
"n5-mae-ni": {
  description: "〜前に means 'before doing something' or 'before a certain time/event.' When used with a verb in the dictionary form, it marks the action that comes first: 寝る前に歯を磨く (brush teeth before sleeping). With a noun, it takes の前に: 食事の前に手を洗う (wash hands before meals).\n\nNote that the verb before 前に stays in the dictionary form (non-past), regardless of the tense of the main clause. This is because the verb before 前に describes a relative ordering, not a tense: 昨日、出かける前に電話した (yesterday, before going out, I called).",
  notes: "Contrast with 〜てから (after doing): 食べてから行く (go after eating) vs 食べる前に行く (go before eating). The verb before 前に is always dictionary form; the verb before てから is always て-form."
},
"n5-ato-de": {
  description: "〜後で means 'after doing something' — the action has already been completed when the main event occurs. With a verb, use the た-form (past plain) + 後で: 食べた後で散歩した (took a walk after eating). With a noun: 授業の後で会いましょう (let's meet after class).\n\nThe た-form before 後で reflects completion of the first action relative to the second, not the overall tense of the sentence. Compare with 〜てから, which similarly means 'after doing' but emphasizes the sequence more strongly.",
  notes: "Both 〜た後で and 〜てから mean 'after doing,' but てから implies a direct, intentional sequence (do A, then do B); 後で is more loosely 'at some point after A.' For tightly chained sequences, てから is often preferred."
},
"n5-sugiru": {
  description: "〜すぎる attaches to verb stems or adjective stems to mean 'too much' or 'excessively.' For verbs: 食べすぎる (eat too much). For い-adjectives: remove い and add すぎる — 高すぎる (too expensive). For な-adjectives: add すぎる — きれいすぎる (too pretty, excessively so).\n\nすぎる conjugates like a regular る-verb: すぎた (was too much), すぎて (too much and...). The て-form is common in explaining problems: 食べすぎて気持ちが悪い (I feel sick from eating too much). The nuance is nearly always negative — something is beyond an acceptable degree.",
  notes: "すぎる can sometimes be used humorously or as an exaggerated compliment (かっこよすぎる! — too cool!), but the literal meaning is always 'excessively.' Don't use すぎる when you mean 'very' (とても) — すぎる always implies a problematic excess."
},
"n5-ya-nado": {
  description: "〜や〜など lists nouns in a non-exhaustive way, meaning 'things like A, B, and so on.' Unlike と which lists exhaustively, や implies there are more items not mentioned: 本や雑誌など (books, magazines, and things like that). など (or 等) can appear at the end to reinforce the incomplete nature of the list.\n\nや can be used without など, but adding など makes the non-exhaustive nature even more explicit. This pattern is common in both speech and writing when giving representative examples from a broader category.",
  notes: "や = non-exhaustive list of nouns (and things like...). と = exhaustive list (these exact items and no others). In practice, や〜など is one of the most natural ways to give examples in Japanese, equivalent to 'such as' or 'like A and B.'"
},
"n5-i-adj": {
  description: "い-adjectives (イ形容詞) are adjectives whose dictionary form ends in い. They conjugate directly without a copula: plain present (高い), plain negative (高くない), plain past (高かった), plain negative past (高くなかった). The stem is formed by removing the final い.\n\nBefore nouns, い-adjectives appear in their dictionary form: 高いビル (a tall building). The te-form (高くて) chains adjectives or gives reason. The adverbial form (高く) modifies verbs: 高く売る (sell at a high price). です can be added for politeness but does not change the adjective's own conjugation.",
  notes: "Do not confuse い-adjectives with な-adjectives that happen to end in い, such as きれい (pretty), きらい (disliked), and ゆうめい (famous). These are な-adjectives despite ending in い and take な before nouns: きれいな花 (NOT きれいい花)."
},
"n5-na-adj": {
  description: "な-adjectives (ナ形容詞) attach な before nouns: 静かな部屋 (a quiet room), 便利な駅 (a convenient station). They conjugate with the copula だ/です: plain present (静かだ), plain negative (静かではない/じゃない), plain past (静かだった), polite present (静かです).\n\nThe te-form of な-adjectives is formed with で: 静かで (quiet and...), used to chain adjectives or give reason. The adverbial form uses に: 静かに話す (speak quietly). な-adjectives frequently derive from Chinese loanwords or describe states and qualities.",
  notes: "な-adjectives do not conjugate by themselves — they rely on the copula だ/です for tense and negation. This is the key difference from い-adjectives. Some words can be used as both na-adj and noun: 元気 (genki) — 元気な人 (healthy person) or 元気がある (have energy)."
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
