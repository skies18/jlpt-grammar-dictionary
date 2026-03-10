const fs = require('fs');
const path = require('path');

const GRAMMAR_JSON = path.join(__dirname, '../src/data/grammar.json');

const slugMap = {
  // N5
  'n5-mashou': 'ましょう',
  'n5-mashouka': 'ましょうか',
  'n5-masenka': 'ませんか',
  'n5-kudasai': 'てください',
  'n5-nasai': 'なさい',
  'n5-darou': 'だろう',
  'n5-deshou': 'でしょう',
  'n5-demo': 'でも',
  'n5-donna': 'どんな',
  'n5-hoshii': '欲しい',
  'n5-hougaii': 'ほうがいい',
  'n5-ichiban': '一番',
  'n5-kata': '方',
  'n5-kedo': 'けど',
  'n5-mada': 'まだ',
  'n5-mou': 'もう',
  'n5-naide': 'ないで',
  'n5-node': 'ので',
  'n5-noda': 'のだ',
  'n5-mieru': '見える',
  'n5-kikoeru': '聞こえる',
  'n5-ka-ka': 'か〜か',
  // N4
  'n4-amari-nai': 'あまり〜ない',
  'n4-baai-wa': '場合は',
  'n4-dasu': '出す',
  'n4-garu': 'がる',
  'n4-ka-dou-ka': 'かどうか',
  'n4-kashira': 'かしら',
  'n4-kai': 'かい',
  'n4-kana': 'かな',
  'n4-goro': 'ごろ',
  'n4-uchi-ni': 'うちに',
  'n4-nakute': 'なくて',
  'n4-naku-naru': 'なくなる',
  'n4-toshite': 'として',
  'n4-ba-yokatta': 'ばよかった',
  'n4-tara-dou': 'たらどうですか',
  'n4-tte': 'って',
  'n4-koto-ga-aru': 'ことがある',
  'n4-ni-suru': 'にする',
  'n4-owaru': '終わる',
  'n4-datte': 'だって',
  // N3
  'n3-darake': 'だらけ',
  'n3-gachi': 'がち',
  'n3-buri-ni': 'ぶりに',
  'n3-gimi': '気味',
  'n3-furi-wo-suru': 'ふりをする',
  'n3-doushitemo': 'どうしても',
  'n3-tabi-ni': 'たびに',
  'n3-to-iu-koto': 'ということ',
  'n3-to-iu-yori': 'というより',
  'n3-to-itte-mo': 'といっても',
  'n3-tokoro-ga': 'ところが',
  'n3-to-naru-to': 'となると',
  'n3-ippou-de': '一方で',
  'n3-ni-kagitte': 'に限って',
  'n3-ni-kagirazu': 'に限らず',
  'n3-ni-shitagatte': 'に従って',
  'n3-ni-tsurete': 'につれて',
  'n3-nomi': 'のみ',
  'n3-tsutsu': 'つつ',
  'n3-kekka': '結果',
  // N2
  'n2-ageku': 'あげく',
  'n2-aruiwa': 'あるいは',
  'n2-dake-atte': 'だけあって',
  'n2-dake-ni': 'だけに',
  'n2-chinamini': 'ちなみに',
  'n2-dokoro-ka': 'どころか',
  'n2-dokoro-dewa-nai': 'どころではない',
  'n2-douse': 'どうせ',
  'n2-eru-uru': '得る',
  'n2-gyaku-ni': '逆に',
  'n2-hanmen': '反面',
  'n2-ichiouu': '一応',
  'n2-igai': '以外',
  'n2-iwayuru': 'いわゆる',
  'n2-kara-shite': 'からして',
  'n2-nomi-narazu': 'のみならず',
  'n2-hatashite': 'はたして',
  'n2-mono-ka': 'ものか',
  'n2-mashi-da': 'ましだ',
  'n2-totan-ni': '途端に',
  // N1
  'n1-aete': 'あえて',
  'n1-akumade-mo': 'あくまでも',
  'n1-ba-koso': 'ばこそ',
  'n1-bekarazu': 'べからず',
  'n1-hiite-wa': 'ひいては',
  'n1-iu-made-mo-nai': '言うまでもない',
  'n1-kai': '甲斐',
  'n1-ka-no-you-ni': 'かのように',
  'n1-koto-kara': 'ことから',
  'n1-ga-hayai-ka': 'が早いか',
  'n1-gotoshi': 'ごとし',
  'n1-yue-ni': '故に',
  'n1-wo-towazu': 'を問わず',
  'n1-narade-wa': 'ならでは',
  'n1-ni-koshita-koto-wa-nai': 'に越したことはない',
};

const grammar = JSON.parse(fs.readFileSync(GRAMMAR_JSON, 'utf8'));

const entriesById = new Map(grammar.map(entry => [entry.id, entry]));

let updatedCount = 0;
const notFound = [];

for (const [id, slug] of Object.entries(slugMap)) {
  const entry = entriesById.get(id);
  if (!entry) {
    notFound.push(id);
    continue;
  }

  const bunproUrl = 'https://bunpro.jp/grammar_points/' + encodeURIComponent(slug);
  const hasBunpro = Array.isArray(entry.links) && entry.links.some(
    link => link.label === 'Bunpro'
  );

  if (!hasBunpro) {
    const bunproLink = { label: 'Bunpro', url: bunproUrl };
    if (!Array.isArray(entry.links)) {
      entry.links = [bunproLink];
    } else {
      entry.links.unshift(bunproLink);
    }
    updatedCount++;
    console.log(`  Added Bunpro link to ${id} -> ${bunproUrl}`);
  }
}

fs.writeFileSync(GRAMMAR_JSON, JSON.stringify(grammar, null, 2), 'utf8');

console.log(`\nDone. ${updatedCount} entries updated.`);

if (notFound.length > 0) {
  console.log(`\nWarning: ${notFound.length} IDs not found in grammar.json:`);
  notFound.forEach(id => console.log(`  - ${id}`));
}
