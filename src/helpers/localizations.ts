export const localizations = {
  helpShieldy: {
    en:
      "openSUSE antispam bot (based on Shieldy) is a solution for Telegram to fight annoying spammers. It asks newcomers to execute a set action within a set period, otherwise it kicks them. Make sure @opensuse\\_antispam\\_bot is an admin at your chat and it's all done! You can also further setup the behaviour with the following commands:\n\n/help — shows this message\n/language — switches language\n/captcha — changes type of captcha used\n/timeLimit — changes amount of time given to newcomers\n/lock — makes commands accessible only by admins\n/restrict — restricts newcomers to send only text messages in the first 24 hours\n/deleteEntryMessages — delete messages about user entry\n/greeting — greets users who pass the test\n/trust — reply with this command to a message sent by user that you don't want to check\n/ban — same as trust, but the opposite\n/strict — use when you don't want to receive any newcomers' messages but captcha solutions until they pass captcha\n/customCaptchaMessage — setup custom captcha message\n/deleteGreetingTime — setup when to delete Shieldy's greeting in seconds like `/deleteGreetingTime 100`, reset by setting it to 0\n/banUsers — whether to ban or to kick users\n/deleteEntryOnKick — whether to delete entry messages for users who failed captcha\n/cas — whether to use Combot Anti-Spam or not\n/underAttack — toggle the mode to automatically kick all newcomers\n/noAttack — disables Shieldy\n/noChannelLinks — automatically delete messages that link to other telegram channels\n/viewConfig — view the current Shieldy configuration\n/buttonText — change the captcha button text in the form of `/buttonText I'm not a bot!`\n/allowInvitingBots — whether users can invite other bots or not\n/greetingButtons — setup buttons for greeting message\n/skipOldUsers — don't show captcha to Telegram accounts with ID less than 1000000000\n/skipVerifiedUsers — don't show captcha to users who have ever passed captcha in any chat\n/setConfig — setup Shieldy configuration in one message\n/banForFastRepliesToPosts — turn on or off banning users who reply to new channel posts within 5 seconds after posts are created\n/restrictTime — setup how much time will Shieldy /restrict a newcomer in hours like `/restrictTime 24`, reset by setting it to 0\n/banNewTelegramUsers — instantly ban (or kick) newcomers with Telegram ID over 1 000 000 000\n\nopenSUSE antispam bot is based on [Shieldy](https://github.com/backmeupplz/shieldy). Code is open source and can be found [here](https://github.com/muadib/opensuse-antispam-bot). Thank you!\n\nPlease, check the current configuration with the command /viewConfig",
    es:
      "openSUSE antispam bot (basado en Shieldy) es una solución para luchar contra los molestos spammers en Telegram. Pide a los recién llegados hacer una serie de acciones en un tiempo determinado, si no lo hacen los expulsa. Asegúrate de que @opensuse\\_antispam\\_bot es administrador en el chat y listo! También puedes personalizar más su comportamiento con los siguientes comandos:\n\n/help — muestra este mensaje\n/language — cambia el idioma\n/captcha — cambia el tipo de captcha usado\n/timeLimit — cambia la cantidad de tiempo otorgada a los recién llegados\n/lock — hace que estos comandos solo sean accesibles a los administradores\n/restrict — restringe a los recién llegados a enviar solo mensajes de texto en las primeras 24 horas\n/deleteEntryMessages — borra los mensajes sobre la entrada de usuarios\n/greeting — saluda a los mensajes que pasan el test\n/trust — utiliza este comando para responder al mensaje de un usuari que no quieras comprobar\n/ban — same as trust, but the opposite\n/strict — use when you don't want to receive any newcomers' messages but captcha solutions until they pass captcha\n/customCaptchaMessage — setup custom captcha message\n/deleteGreetingTime — setup when to delete Shieldy's greeting in seconds like `/deleteGreetingTime 100`, reset by setting it to 0\n/banUsers — whether to ban or to kick users\n/deleteEntryOnKick — whether to delete entry messages for users who failed captcha\n/cas — whether to use Combot Anti-Spam or not\n/underAttack — toggle the mode to automatically kick all newcomers\n/noAttack — disables Shieldy\n/noChannelLinks — automatically delete messages that link to other telegram channels\n/viewConfig — view the current Shieldy configuration\n/buttonText — change the captcha button text in the form of `/buttonText I'm not a bot!`\n/allowInvitingBots — whether users can invite other bots or not\n/greetingButtons — setup buttons for greeting message\n/skipOldUsers — don't show captcha to Telegram accounts with ID less than 1000000000\n/skipVerifiedUsers — don't show captcha to users who have ever passed captcha in any chat\n/setConfig — setup Shieldy configuration in one message\n/banForFastRepliesToPosts — turn on or off banning users who reply to new channel posts within 5 seconds after posts are created\n/restrictTime — setup how much time will Shieldy /restrict a newcomer in hours like `/restrictTime 24`, reset by setting it to 0\n/banNewTelegramUsers — instantly ban (or kick) newcomers with Telegram ID over 1 000 000 000\n\nopenSUSE antispam bot está basado en [Shieldy](https://github.com/backmeupplz/shieldy). El código puede ser encontrado [aquí](https://github.com/muadib/opensuse-antispam-bot). ¡Gracias!\n\nPor favor, revisa la configuración actual con el comando /viewConfig.",    
  },
  language_shieldy: {
    en: 'Please, select the language.',
    ru: 'Пожалуйста, выберите язык.',
    it: 'Prego, seleziona la lingua.',
    et: 'Palun valige keel.',
    uk: 'Будь ласка, виберіть мову.',
    br: 'Por favor, selecione uma língua.',
    tr: 'Lütfen dil seçimi yapın.',
    es: 'Por favor, selecciona el idioma.',
    zh: '请选择一种语言。',
    no: 'Vennligst velg et språk.',
    de: 'Bitte wähle eine Sprache.',
    tw: '請選擇一種語言。',
    fr: 'Sélectionnez la langue',
    id: 'Silakan pilih bahasa.',
    ko: '언어를 선택하십시오.',
    am: 'ቋንቋ ምረጡ።',
    cz: 'Prosím, vyber jazyk.',
    sk: 'Vyberte jazyk.',
    ar: 'الرجاء إختيار اللغة.',
    ja: '言語を選択してください。',
    ro: 'Te rog, salectează limba.',
    ca: "Per favor, tria l'idioma",
    he: 'אנא בחר שפה.',
    yue: '揀埋一種語言。',
    hu: 'Kérlek, válassz egy nyelvet!',
    fi: 'Ole hyvä ja valitse kieli.',
    bg: 'Моля, изберете език.',
  },
  language_selected: {
    en: 'Great, I speak English now.',
    ru: 'Отлично, я теперь говорю по-русски.',
    it: 'Perfetto, Ora parlo Italiano.',
    et: 'Väga hea, nüüd ma räägin eesti keeles.',
    uk: 'Чудово, тепер я розмовляю українською.',
    br: 'Boa, Agora eu falo português.',
    tr: 'Harika, artık Türkçe konuşuyorum.',
    es: 'Genial, ahora hablo español.',
    zh: '很棒，现在我讲中文了。',
    no: 'Supert, nå snakker jeg norsk.',
    de: 'Großartig, ich spreche nun deutsch.',
    tw: '很棒，現在我講中文了。',
    fr: 'Parfait, je parle français',
    id: 'Baiklah. Saya berbahasa Indonesia sekarang.',
    ko: '좋아요, 나는 이제 한국어로 말합니다.',
    am: 'አሪፍ አሁን አማርኛ አወራለሁ።',
    cz: 'Skvělé, nyní mluvím česky.',
    sk: 'Skvelé, teraz hovorím po slovensky.',
    ar: 'عظيم، أنا أتكلم العربية الآن.',
    ja: 'はい、私は日本語が喋れます。',
    ro: 'Perfect, acum vorbesc Română.',
    ca: 'Fantàstic! ara parlo català.',
    he: 'נהדר! אני דובר עברית כעת.',
    yue: '正，我而家開始講粵語。',
    hu: 'Nagyszerű, mostantól magyarul beszélek.',
    fi: 'Selvä! Valitsit kieleksi suomen.',
    bg: 'Чудесно, сега говоря Български',
  },
  only_author_can_reply: {
    en: 'Only the person who initiated the menu can select the choices.',
    ru: 'Только человек, вызвавший меню, может выбирать опции.',
    et: 'Ainult see, kes avas menüüd, saab valida valikud.',
    uk: 'Тільки людина, яка викликала меню, може вибирати опції.',
    br: 'Apenas a pessoa que iniciou o menu pode selecionar as opções.',
    tr: 'Yalnızca menüyü başlatan kişi seçenekleri seçebilir.',
    es: 'Solo la persona que inició el menú puede seleccionar las opciones.',
    zh: '只有启动菜单的人才能选择。',
    no: 'Bare personen som åpnet menyen kan svare på den.',
    de:
      'Nur die Person, welche das Menü initialisiert hat, kann Einstellungen vornehmen.',
    tw: '只有啓動菜單的人才能選擇。',
    fr:
      'Seule la personne qui a déclanché ce menu peut sélectionner les options',
    id: 'Hanya orang yg meminta menu yg bisa menentukan pilihan.',
    ko: '메뉴를 시작한 사람만이 선택을 할 수 있습니다.',
    am: 'ሜኑውን ያስጀመረው ሰዉ ብቻ ነው መክፈት የሚችለው ።',
    cz: 'Možnost může vybrat jen osoba, která nabídku vyvolala.',
    sk: 'Možnosti môže vybrať iba osoba, ktorá spustila ponuku.',
    ar: 'فقط الشخص الذي بدأ القائمة يمكنه تحديد الخيارات.',
    ja: '最初にメニューを開いた人だけが、選択することができます。',
    ro: 'Doar persoana ce a inițiat meniul poate selecta',
    ca: 'Només pot triar les opcions la persona que ha posat en marxa el menú.',
    he: 'רק מי שפתח את התפריט יכול לבחור את האפשרויות.',
    yue: '最初啓動選單嗰個人先有得揀。',
    hu: 'Csak az a személy választhat, aki megnyitotta a menüt.',
    it: 'Solo chi ha invocato il comando può selezionarlo.',
    bg:
      'Само човекът който е направил менюто може да избира различните избори.',
  },
  captcha: {
    en:
      'Please, select the test type for the newcomers:\n\n• Simple — bot will ask to send anything to the chat\n• Button — bot will ask to press a button\n• Digits — bot will ask to solve a simple arithmetic operation\n• Image — bot will ask to recognize characters on an image',
    ru:
      'Пожалуйста, выберите тип проверки новичков в чате:\n\n• Простая — бот попросит прислать что угодно в чат\n• Кнопкой — бот попросит нажать на кнопку\n• Цифровая — бот попросит решить простую арифметическую задачу\n• Картинкой — бот попросит распознать символы на картинке',
    et:
      'Palun valige uustulnukute kontrolli tüüp:\n\n• Lihtne — bot küsib vestlusele midagi saata\n• Nuppuga — bot küsib nuppu klõpsata.\n• Digits — bot will ask to solve a simple arithmetic operation\n• Image — bot will ask to recognize characters on an image',
    uk:
      'Будь ласка, виберіть тип перевірки новачків у чаті:\n\n• Проста — бот просить надіслати що завгодно в чат\n• Кнопкою — бот просить натиснути на кнопку.\n• Цифрова — бот просить вирішити просте арифметичне рівняння\n• Зображення — бот просить розпізнати символи на зображенні',
    br:
      'Por favor, selecione o tipo de teste para os novatos:\n\n• Simples — o bot vai pedir para mandar alguma coisa no chat\n• Botão — o bot vai pedir para apertar um botão\n• Digits — bot will ask to solve a simple arithmetic operation\n• Image — bot will ask to recognize characters on an image',
    tr:
      'Lütfen, yeni gelenler için test türünü seçin:\n\n• Basit — Bot, sohbete bir şey göndermenizi isteyecektir\n• Düğme — Bot, bir düğmeye basmanızı isteyecektir\n• Rakamlar — Bot, basit bir aritmetik işlemi çözmenizi isteyecektir\n• Resim — Bot, bir resimdeki karakterleri tanımanızı isteyecektir.',
    es:
      'Por favor, selecciona el tipo de test para los recién llegados:\n\n• Simple — el bot pedirá enviar lo que sea por el chat\n• Botón — el bot pedirá presionar un botón\n• Dígitos — el bot pedirá resolver una ecuación simple\n• Imagen — el bot pedirá reconocer los caracteres de una imagen',
    zh:
      '请为新人选择测试类型：\n\n•简单 — 机器人会要求向聊天发送任何内容\n•按钮 — 机器人将要求按下一个按钮\n•数字 — 机器人将要求解决一个简单的等式\n• Image — bot will ask to recognize characters on an image',
    de:
      'Bitte wähle aus, wie der Bot neue User testen wird:\n\n• Simpel — Der Bot wird fragen, irgendwas in den Chat zu senden\n• Knopf — Der Bot wird fragen, einen Knopf zu drücken\n• Nummern — Der Bot wird eine simple Mathe-Aufgabe stellen\n• Image — bot will ask to recognize characters on an image',
    tw:
      '請為新進成員選擇驗證類型：\n\n• 簡單 — 機器人會要求在聊天室發送任何內容\n• 按鈕 — 機器人將要求按下一個按鈕\n• 數字 — 機器人將要求解答一個簡單的數學問題\n• Image — bot will ask to recognize characters on an image',
    fr:
      "Veuillez sélectionner le type de test pour les nouveaux membres\n\n• Simple — Le bot demande d'envoyer une réponse à la conversation\n• Bouton — Le bot demande d'appuyer sur un bouton\n• Chiffres — Le bot pose une simple équation\n• Image — bot will ask to recognize characters on an image",
    id:
      'Silakan pilih jenis ujian untuk anggota baru:\n\n• Salam — bot akan meminta salam perkenalan\n• Tombol — bot akan meminta menekan tombol\n• Angka — bot akan meminta jawaban hitungan\n• Image — bot will ask to recognize characters on an image',
    ko:
      '신규 입장자에 대한 테스트 유형을 선택하십시오:\n\n• 단순함 — 봇이 채팅에 어떤 것이든 보내달라고 할 수 있음\n• 버튼 — 봇이 버튼을 누르라고 요청함\n• 숫자 — 봇이 간단한 방정식을 풀라고 할 것이다.\n• Image — bot will ask to recognize characters on an image',
    am:
      'Please, select the test type for the newcomers:\n\n• ሲምፕል — ቦቱ ማንኛውንም ጸሁፍ እንዲልኩ ይጠይቃል።\n• በተን — ቦቱ በተን አንዲነካ ይጠይቃል።\n• ዲጂት — በቱ መልሰ ይጠየቃል።\n• Image — bot will ask to recognize characters on an image',
    cz:
      'Vyberte prosím typ testu pro nováčky:\n\n• Jednoduchý — bot požádá o zaslání jakékoliv zprávy do chatu\n• Tlačítko — bot požádá o stisk tlačítka\n• Číselný — bot požádá o vyřešení jednoduchého příkladu\n• Image — bot will ask to recognize characters on an image',
    sk:
      'Vyberte typ testu pre nováčikov:\n\n• Jednoduchý — bot požiada o zaslanie akejkoľvek správy do četu\n• Tlačidlo — bot požiada o stlačenie tlačidla\n• Číselný — bot požiada o výsledok jednoduchého matematického príkladu\n• Image — bot will ask to recognize characters on an image',
    ar:
      'الرجاء تحديد نوع الاختبار للأعضاء الجدد:\n\n• بسيطة — سوف يطلب البوت لإرسال أي شيء إلى الدردشة\n• زر سوف يطلب البوت الضغط على زرالشرطة\n• أرقام — سوف يطلب البوت حل معادلة بسيطة\n• Image — bot will ask to recognize characters on an image',
    ja:
      '新しく参加した人へのテストの種類を選択してください’\n\n• シンプル — botが何か発言してくださいと尋ねます\n• ボタン — botがボタンを押してくださいとお願いします\n• 数字 — botが簡単な算数の問題を解いてくださいと尋ねます\n• Image — bot will ask to recognize characters on an image',
    ro:
      'Selectează tipul de test pentru nou veniți:\n\n• Simplu — bot-ul va cere userului să trimită orice în chat\n• Buton — bot-ul va cere userului să apese un buton\n• Cifre — bot-ul va cere userului să rezolve o simplă operație aritmetică\n• Image — bot will ask to recognize characters on an image',
    ca:
      "Per favor, tria la prova que han de passar els nouvinguts:\n\n• Simple — el bot et demanarà que eviis qualsevol cosa a la conversa\n• Botó — el bot et demanarà que pitgis un botó\n• Dígits — el bot voldrà que resolguis una equació molt senzilla\n• Imatge — el bot et demanarà que reconeguies els caracters d'una imatge",
    he:
      'אנא בחר את סוג המבחן עבור מצטרפים:\n\n• פשוט - בוט יבקש לשלוח כל דבר שהוא בשיחוח\n• כפתור - בוט יבקש ללחוץ על כפתור\n• ספרות - בוט יבקש לפתור פעולת חשבון פשוטה\n• תמונה - בוט יבקש לזהות תווים בתמונה',
    no:
      'Vennligst velg testtypen for nykommere:\n\n• Enkel — botten vil spørre brukeren om å sende melding med hva som helst i chatten\n• Knapp — botten vil spørre brukeren om å trykke på en knapp\n• Tall — botten vil spørre brukeren om å løse et enkelt matteproblem\n• Bilde — botten vil spørre brukeren om å gjenkjenne bokstaver, tall og symboler på et bilde',
    yue:
      '揀選如何驗證新來者：\n\n• 簡易： — 要求向羣組發嘢\n• 撳掣 — 要求撳一粒掣\n• 算術 — 要求做一條計數題\n• 認圖 — 要求認出一幅圖片入面嘅所有文字',
    hu:
      'Kérlek, válaszd ki az újoncok tesztjének a típusát:\n\n• Egyszerű — a bot annyit kér, hogy gépeljen be valamit a chat-be\n• Gomb — egy gomb megnyomására kéri\n• Számok — a bot egy egyszerű matematikai művelet elvégzésére kéri\n• Kép — a bot arra kéri, hogy ismerjen fel egy karaktert a képen',
    it:
      "Prego, seleziona uno dei seguenti test per i nuovi utenti:\\n\\n• Semplice — Il bot chiederà di inviare un qualunque messaggio in chat\\n• Bottone — Il bot chiederà di premere un pulsante\\n• Numeri — il bot ti chiederà di risolvere una semplice operazione aritmetica\\n• Immagine — il bot ti chiederà di riconoscere un personaggio in un'immagine",
    bg:
      'Моля, изберете типа на теста за новодошлите: \n\n• Simple - ботът ще поиска да изпрати каквото и да е в чата \n• Button - ботът ще поиска да натисне бутон \n• Digits - ботът ще поиска да реши проста аритметична операция \n• Image - ботът ще поиска да разпознае символи на изображение ',
  },
  simple: {
    en: 'Simple',
    ru: 'Простая',
    it: 'Semplice',
    et: 'Lihtne',
    uk: 'Проста',
    br: 'Simples',
    tr: 'Basit',
    es: 'Simple',
    zh: '简单',
    no: 'Enkel',
    de: 'Simpel',
    tw: '簡單',
    fr: 'Simple',
    id: 'Salam',
    ko: '단순함',
    am: 'ሲምፕል',
    cz: 'Jednoduchý',
    sk: 'Jednoduchý',
    ar: 'بسيطه',
    ja: '簡単',
    ro: 'Simplu',
    ca: 'Simple',
    he: 'פשוט',
    yue: '簡易',
    hu: 'Egyszerű',
    fi: 'Yksinkertainen',
    bg: 'Просто',
  },
  digits: {
    en: 'Digits',
    ru: 'Цифровая',
    et: 'Digitaalne',
    uk: 'Цифрова',
    br: 'Digitos',
    tr: 'Rakamlar',
    es: 'Digitos',
    zh: '数字',
    no: 'Tall',
    de: 'Zahlen',
    tw: '數字',
    fr: 'Chiffres',
    id: 'Angka',
    ko: '방정식',
    am: 'ዲጂት',
    cz: 'Číselný',
    sk: 'Číselný',
    ar: 'ارقام',
    ja: '数字',
    ro: 'Cifre',
    ca: 'Dígits',
    he: 'ספרות',
    yue: '算術',
    hu: 'Számok',
    fi: 'Numerot',
    it: 'Numeri',
    bg: 'Цифри',
  },
  button: {
    en: 'Button',
    ru: 'Кнопкой',
    it: 'Bottone',
    et: 'Nuppuga',
    uk: 'Кнопкою',
    br: 'Botão',
    tr: 'Düğme',
    es: 'Botón',
    zh: '按钮',
    no: 'Knapp',
    de: 'Knopf',
    tw: '按鈕',
    fr: 'Bouton',
    id: 'Tombol',
    ko: '버튼',
    am: 'በተን',
    cz: 'Tlačítko',
    sk: 'Tlačidlo',
    ar: 'زر',
    ja: 'ボタン',
    ro: 'Buton',
    ca: 'Botó',
    he: 'כפתור',
    yue: '撳掣',
    hu: 'Gomb',
    fi: 'Painike',
    bg: 'Бутон',
  },
  image: {
    en: 'Image',
    ru: 'Картинкой',
    it: 'Immagine',
    uk: 'Зображення',
    tr: 'Resim',
    es: 'Imagen',
    de: 'Bild',
    ca: 'Imatge',
    br: 'Imagem',
    he: 'תמונה',
    no: 'Bilde',
    yue: '認圖',
    hu: 'Kép',
    fi: 'Kuva',
    bg: 'Картинка',
  },
  captcha_selected: {
    en: 'Great, I will use this type of test then.',
    ru: 'Отлично, теперь я буду использовать этот тип теста.',
    it: 'Fantastico, Userò questo tipo di test.',
    et: 'Väga hea, nüüd ma kasutan seda testi tüüpi.',
    uk: 'Чудово, тепер я буду використовувати цей тип тесту.',
    br: 'Boa, Eu irei usar esse tipo de teste agora.',
    tr: 'Harika, o zaman bu tür bir test uygulayacağım.',
    es: 'Genial, usaré este tipo de test.',
    zh: '很棒，我之后会使用这个类型的测试',
    no: 'Supert, da vil jeg bruke denne type testen.',
    de: 'Großartig, ich werde diese Art des Tests nutzen.',
    tw: '很棒，我之後會使用這個類型的驗證',
    fr: 'Parfait, je vais utiliser ce type de test',
    id: 'Baiklah, jenis ujian tersebut yg akan dipakai.',
    ko: '좋아요. 그러면 이런 종류의 테스트를 사용하겠습니다.',
    am: 'አሪፍ እንደዚህ አይነት ቴሰት እጠቀማለሁ ።',
    cz: 'Skvělé, budu používat tento typ testu.',
    sk: 'Skvelé, budem teda používať tento typ testu.',
    ar: 'تم سوف استخدم هذا النوع من الاختبار .',
    ja: 'はい、このタイプのテストを使います。',
    ro: 'Perfect, o să utilizez acest tip de test.',
    ca: 'Perfecte, faré servir aquesta prova.',
    he: 'נהדר! אני אשתמש בסוג הזה של מבחן.',
    yue: '好，我由而家開始用呢種新嘅驗證方法。',
    hu: 'Nagyszerű, ezt a típust fogom használni a teszteléshez.',
    fi: 'Selvä! Käytän valitsemaasi testiä jatkossa.',
    bg: 'Чудесно, сега ще използвам този тип тест.',
  },
  time_limit: {
    en:
      'Please, select how many seconds will newcomers get to complete the test before the kick.',
    ru:
      'Пожалуйста, выберите, сколько секунд будет у новичков, чтобы завершить тест перед киком.',
    it:
      'Prego, seleziona quanti secondi avrà il nuovo membro per completare il test prima di essere kickato',
    et:
      'Palun valige kui palju aega antud uustulnukatele, et testi sooritada enne kicki.',
    uk:
      'Будь ласка, виберіть, скільки секунд буде у новачків, щоб завершити тест перед вилученням з чату.',
    br:
      'Por favor, selecione quantos segundos o novato tem para completar o teste.',
    tr:
      'Lütfen, yeni gelenlerin kovulmadan önce testi tamamlaması gereken saniyeyi seçin.',
    es:
      'Por favor, seleccione cuántos segundos tendrán los recién llegados para completar el test antes de la expulsión.',
    zh: '请选择新人在被踢除前完成测试的秒数。',
    de:
      'Bitte wähle, wieviele Sekunden ein neuer User zeit hat, um den Test fertig zu stellen, bevor er gekicked wird.',
    tw: '請選擇新進成員在被踢除前有多少秒數可以完成驗證。',
    fr:
      "Veuillez sélectionner le temps (en secondes) qu'un utilisateur aura pour terminer le test avant d'être inquieté",
    id:
      'Silakan tentukan berapa detik yg dibutuhkan anggota baru untuk menanggapi sebelum ditolak bergabung.',
    ko: '신규 입장자가 추방 전에 테스트를 완료 할 시간을 선택하십시오.',
    am: 'ለስንት ሰከንድ ልጠብቅ ከማባረሬ በፊት',
    cz:
      'Prosím, zvolte kolik sekund bude mít nováček na splnění testu, než bude vyhozen.',
    sk:
      'Vyberte, koľko sekúnd bude mať nováčik na splnenie testu predtým, ako bude vyhodený.',
    ar:
      'من فضلك، حدد عدد الثواني التي يمكن للأعضاء الجدد إكمال الاختبار خلالها قبل طردهم.',
    ja:
      '新しく参加した人が退出させられるまでにテストを完了する時間を何秒間にするかを選択してください。',
    ro:
      'Te rog selectează câte secunde au la dispoziție userii noi să completeze testul, înainte sa fi dați afară.',
    ca:
      'Per favor, tria quants segons he de donar als nouvinguts per a resoldre la prova abans que els expulsi.',
    he:
      'אנא בחר את מספר השניות שיהיו למצטרפים חדשים כדי לשלים את המבחן לפני שיעופו.',
    no:
      'Vennligst velg hvor mange sekunder nykommere skal få på å fullføre testen før brukeren blir sparket.',
    yue: '規定新來者嘅驗證時限。',
    hu:
      'Kérlek, add meg, hány másodperc álljon rendelkezésre az újoncnak a feladat megoldására, mielőtt kirúgnánk!',
    fi:
      'Ole hyvä ja valitse montako sekuntia uudella tulokkaalla on aikaa vastata testiin (ennen kuin hänet poistetaan ryhmästä).',
    bg:
      'Моля, изберете колко секунди ще получат новодошлите, за да завършат теста преди да ги "изритам".',
  },
  time_limit_selected: {
    en: 'Great, I will use this time limit then.',
    ru: 'Отлично, теперь я буду использовать этот временной лимит.',
    it: 'Magnifico, Ora userò questo tempo',
    et: 'Väga hea, nüüd ma kasutan seda aja limiiti.',
    uk: 'Чудово, тепер я буду використовувати це обмеження часу.',
    br: 'Boa, Eu irei usar esse tempo limite agora.',
    tr: 'Harika, o zaman bu süreyi kullanacağım.',
    es: 'Genial, usaré este límite de tiempo.',
    zh: '很棒，我之后会使用这个时间限制。',
    no: 'Supert, da skal jeg bruke denne tidsbegrensningen.',
    de: 'Toll, ich benutzte dann dieses Zeit Limit.',
    tw: '很棒，我之後會使用這個時間限制。',
    fr: "Parfait, j'utiliserai cette limite de temps",
    id: 'Baiklah, batas waktu tersebut yg akan dipakai.',
    ko: '좋아요, 이 시간 제한을 사용하겠습니다.',
    am: 'እሺ ይሄን ያህል ሰከንድ እጠብቃለሁ ።',
    cz: 'Skvělé, budu používat tento časový limit.',
    sk: 'Skvelé, budem teda používať tento časový limit.',
    ar: 'عظيم، سأستخدم هذا الحد الزمني .',
    ja: 'はい、この時間制限を使います。',
    ro: 'Super, o să folosesc această limită de timp',
    ca: 'Molt bé doncs, faré servir aquest límit de temps',
    he: 'יופי! אני אשתמש במגבלת הזמן הזו.',
    yue: '好，我之後會按照呢個時限。',
    hu: 'Nagyszerű, ezt az idő intervallumot fogom használni.',
    fi: 'Ok, antamasi sekuntimäärä on asetettu aikarajaksi.',
    bg: 'Чудесно, вече ще използвам този времеви лимит.',
  },
  seconds: {
    en: 'sec',
    ru: 'сек',
    it: 'sec',
    et: 'sek',
    uk: 'сек',
    br: 'sec',
    tr: 'san',
    es: 'seg',
    zh: '秒',
    no: 'sek',
    de: 'sek',
    tw: '秒',
    fr: 'sec',
    id: 'detik',
    ko: '초',
    am: 'ሰከንድ',
    cz: 's',
    sk: 's',
    ar: 'ثانية',
    ja: '秒',
    ro: 'sec',
    ca: 'seg',
    he: 'שניה',
    yue: '秒',
    hu: 'mp',
    fi: 's',
    bg: 'сек',
  },
  lock_true_shieldy: {
    en: 'Great! Now I will only react to commands sent by admins.',
    ru: 'Отлично! Теперь я буду принимать команды только от админов.',
    it: 'Perfetto, Ora eseguirò solamente i comandi inviati da amministratori.',
    et: 'Väga hea, nüüd ma aktsepteerin ainult administraatorite käske.',
    uk: 'Чудово! Тепер я буду приймати команди тільки від адміністраторів.',
    br: 'Boa! Agora só obedecerei os ADMs.',
    es:
      '¡Genial! Ahora solo reaccionaré a los comandos enviados por administradores.',
    tr:
      'Harika! Şimdi sadece yöneticiler tarafından gönderilen komutlara tepki vereceğim.',
    zh: '很棒！现在我只对管理员发送的命令作出反应。',
    no: 'Supert! Nå vil jeg bare svare på kommandoer gitt av administratorer.',
    de: 'Super! Ich werde nun nur noch auf Admin Kommandos reagieren.',
    tw: '很棒！現在我只對管理員發送的指令作出回應。',
    fr: 'Parfait, maintenant seuls les admins pourront utiliser les commandes',
    id: 'Baiklah, sekarang saya hanya menanggapi perintah dari admin saja.',
    ko: '좋아요! 이제 나는 관리자들이 보내는 명령에만 반응할 것입니다.',
    am: 'አሁን አድሚን ብቻ ይጠቀማል።',
    cz: 'Skvělé! Nyní budu reagovat pouze na příkazy poslané správci.',
    sk: 'Super! Odteraz budem reagovať iba na príkazy zadané správcami.',
    ar: 'رائع ! الآن سوف أتفاعل فقط مع الأوامر المرسلة من قبل المسؤولين.',
    ja: '素晴らしいです！これで管理者によるコマンドしか受け付けません。',
    ro: 'Super! Acum o să reacționez doar la comenzile date de către admini.',
    ca:
      "D'acord, a partir d'ara només faré cas a les ordres dels administradors.",
    he: 'מעולה! מעכשיו אני אגיב רק לפקודות מהמנהלים.',
    yue: '我而家開始淨係會回應管理員嘅命令。',
    hu: 'Nagyszerű! Mostantól csak az adminok parancsara reagálok!',
    bg: 'Чудесно! Вече ще приемам команди само от администраторите.',
  },
  lock_false_shieldy: {
    en: 'Great! Now I will react to commands sent by anybody.',
    ru: 'Отлично! Теперь я буду принимать команды ото всех.',
    it: 'Perfetto, Ora eseguirò i comandi inviati da tutti.',
    et: 'Väga hea, nüüd ma aktsepteerin kõik käsud.',
    uk: 'Чудово! Тепер я буду приймати команди від усіх.',
    br: 'Boa! Agora obedecerei a qualquer pessoa.',
    tr: 'Harika! Şimdi herkes tarafından gönderilen komutlara tepki vereceğim.',
    zh: '很棒！现在我对所有人发出的命令做出反应。',
    no: 'Supert! Nå vil jeg svare på kommandoer gitt av hvem som helst.',
    de:
      'Großartig! Ich werde nun wieder auf die Kommandos aller User reagieren.',
    tw: '很棒！現在我會對所有人發出的指令做出回應。',
    fr: "Parfait, maintenant n'importe qui pourra utiliser les commandes",
    id: 'Baiklah, sekarang saya akan menanggapi perintah dari siapa pun.',
    ko: '좋아요! 이제 나는 누구든지 보낸 명령에 반응할 것입니다.',
    am: 'አሁን ሁሉም ሰው ይጠቀማል።',
    cz: 'Skvělé! Nyní budu reagovat na příkazy poslané kýmkoli.',
    sk: 'Super! Odteraz budem reagovať na príkazy zadané kýmkoľvek.',
    ar: 'رائع ! الآن سوف أرد على الأوامر المرسلة من قبل أي شخص.',
    ja: '素晴らしいです！これで、誰からのコマンドも受け付けます。',
    ro: 'Super! Acum o să reacționez la comenzile trimise de căre oricine. ',
    ca: "D'acord, a partir d'ara faré cas a les ordres de tothom.",
    he: 'מעולה! מעכשיו אני אגיב לפקודות מכל אחד.',
    yue: '我而家開始會回應所有人嘅命令。',
    hu: 'Nagyszerű! Mostantól bárki parancsara reagálok!',
    bg: 'Чудесно! Вече, ще приемам команди от всички юзери в групата.',
    es: '¡Genial! Ahora reaccionaré a los comandos enviados por todo el mundo.',
  },
  strict_true: {
    en:
      "Great! Now newcomers won't send anything but captcha solutions until they pass captcha.",
    ru:
      'Отлично! Теперь новички не смогут присылать ничего кроме решения капчи, до прохождения капчи.',
    uk:
      'Чудово! Тепер новачки не матимуть змоги надсилати у чат нічого окрім вирішення капчі, поки її не розввʼяжуть.',
    tr:
      "Harika! Artık yeni gelenler, CAPTCHA'yı geçinceye kadar CAPTCHA çözümlerinden başka bir şey gönderemeyecekler.",
    zh:
      '很棒！现在新手在通过验证码之前不会发送除验证码解决方案之外的任何内容。',
    no: 'Supert! Nå kan ikke nykommere sende noe før de har bestått testen.',
    de:
      'Spitze! Neue User können nun nichts senden, außer der Captcha Lösung, bis sie den Test bestanden haben.',
    tw:
      '很棒！現在新進成員在通過驗證之前不能發送除驗證解決方案之外的任何內容。',
    fr:
      "Parfait, maintenant les nouveaux membres devront d'abord répondre au captcha avant de pouvoir discuter",
    id:
      'Baiklah, sekarang anggota baru tidak bisa mengirim apa pun hingga menanggapi ujian dengan benar.',
    ko:
      '좋아! 이제 새로 온 사람들은 captcha를 통과 할 때까지 captcha 솔루션 외에는 아무것도 보내지 않을 것입니다.',
    am: 'አዲሰ ገቢ ካፕቻን ሳያልፍ ምንም መላክ አይችልም ።',
    cz: 'Skvělé! Nyní nováčci nemohou nic poslat, dokud neprojdou testem.',
    sk:
      'Výborne! Odteraz nováčikovia nebudú môcť poslať nič okrem riešenia testu captcha, až kým neprejdú týmto testom.',
    ar:
      'رائع ! الآن الأعضاء الجدد لن يرسلوا أي شيء سوى حلول الإختبار حتى يجتازونه .',
    ja:
      '素晴らしいです！これで、新しく参加した人は、キャプチャをパスするまで、キャプチャの回答しかできません。',
    ro:
      'Perfect! Acum nou veniții vor putea trimite doar soluții captcha până când trec de testul captcha.',
    ca:
      "Entesos, a partir d'ara els nouvinguts, només podràn enviar missatges per a respondre amb la solució de la prova establerta, fins que aquesta sigui resolta correctament.",
    br:
      'Boa! Agora os novatos não enviarão nada além de soluções do captcha até que passem pelo captcha.',
    he: 'מעולה! מצטרפים לא ישלחו דבר עד שלא יפתרו את ההמבחן.',
    yue: '由而家開始，新來者喺通過驗證之前唔可以發任何嘢。',
    hu:
      'Nagyszerű! Mostantól az újonc nem küldhet más üzenetet be addíg, amíg a captcha-t meg nem oldja.',
    bg:
      'Чудесно! Сега новодошлите няма да могат, да изпращат нищо друго освен  решения с captcha, докато не преминат теста.',
    es:
      'Perfecto! A partir de este momento, los recién llegados solamente podrán enviar los mensajes para responder la solucion del CAPTCHA, hasta que este sea resuelto correctamente.',
  },
  strict_false: {
    en:
      'Great! Now newcomers will be able to send text before they pass captcha.',
    ru: 'Отлично! Теперь новички смогут отправлять текст до прохождения капчи.',
    uk:
      'Чудово! Тепер новачки матимуть змогу надсилати текст, поки не розвʼяжуть капчу.',
    tr:
      'Harika! Artık yeni gelenler, CAPTCHA testini geçmeden önce metin gönderebilecekler.',
    zh: '很棒！现在，新手可以在通过验证码之前发送文本消息。',
    no: 'Supert! Nå kan nykommere sende meldinger før de har bestått testen.',
    de:
      'Wahnsinn! Neue User können nun Nachrichten senden, bevor sie den Captcha Test bestanden haben.',
    tw: '很棒！現在，新進成員可以在通過驗證之前發送文字消息。',
    fr:
      "Parfait, maintenant les nouveaux membres pourront discuter avant d'envoyer une réponse au captcha.",
    id:
      'Baiklah, sekarang anggota baru boleh mengirim pesan walaupun belum menanggapi ujian.',
    ko:
      '좋아요! 이제 새로 온 사람들은 캡챠를 통과하기 전에 메시지를 보낼 수 있을 거예요.',
    am: 'አዲሰ ገቢ ካፕቻን ሳያልፍ ሜሴጅ መላክ ይችላል ።',
    cz: 'Skvělé! Nyní mohou nováčci posílat zprávy, než projdou testem.',
    sk:
      'Výborne! Odteraz nováčikovia budú môcť posielať textové správy predtým, ako prejdú testom captcha.',
    ar:
      'رائع ! الآن الأعضاء الجدد سوف يكونون قادرين على إرسال النص بدون الحاجة لإختبار .',
    ja:
      '素晴らしいです！、これで、新しく参加した人は、キャプチャをパスする前に、テキストを送信することができます。',
    ro:
      'Super! Acum nou veniții vor putea trimite text înainte de a trece de testul captcha.',
    ca:
      "Entesos, a partir d'ara els nouvinguts, podràn enviar missatges fins i tot abans de resoldre correctament la prova establerta.",
    br:
      'Boa! Agora os novatos poderão enviar texto antes de passar pelo captcha.',
    he: 'מעולה! מצטרפים יוכלו לשלוח הודעות לפני שענו על המבחן.',
    yue: '由而家開始，新來者喺 24 小時內只畀發文字內容。',
    hu:
      'Nagyszerű! Mostantól az újonc beküldhet más üzenetet is, mielőtt a captcha-t megoldaná.',
    bg:
      'Чудесно! Сега новодошлите ще могат да пишат съобщения, преди да преминат captcha.',
    es:
      '¡Genial! A partir de este momento, los recién llegados podrán enviar mensajes antes de que hayan resuelto el CAPTCHA correctamente.',
  },
  simple_warning: {
    en:
      ', please, send any message to this group within the time amount specified, otherwise you will be kicked. Thank you!',
    ru:
      ', пожалуйста, отправьте любое сообщение в этот чат в течение указанного времени, иначе вы будете кикнуты. Спасибо!',
    it:
      ', prego, invia un messaggio in questo gruppo entro il tempo specificato, altrimenti verrai kickato. Grazie!',
    et:
      ', palun saatke mis tahes sõnum sellele vestlusele määratud aja jooksul, muidu me kickime teid. Aitäh!',
    uk:
      ', будь ласка, надішліть будь-яке повідомлення в цей чат протягом зазначеного часу, інакше Ви будете вилучені. Дякуємо!',
    br:
      ', Por favor, mande qualquer mensagem para esse grupo com o tempo limite especificado, caso contrário irei kicka-lo. Obrigado!',
    tr:
      ', Lütfen, belirtilen süre içerisinde bu gruba herhangi bir mesaj gönderin, aksi takdirde kovulursunuz. Teşekkür ederiz!',
    es:
      ', por favor, envía cualquier mensaje por este grupo dentro del tiempo especificado, si no, serás expulsado. ¡Gracias!',
    zh: '，请在指定的时间内向该群组发送任何消息，否则您将被踢。谢谢！',
    no:
      ', vennligst send hvilken som helst melding til denne gruppen innen den spesifiserte tidsperioden, hvis ikke blir du sparket. Takk!',
    de:
      ', bitte sende eine Nachricht innerhalb der genannten Zeit, andernfalls wirst du gekickt. Danke!',
    tw: '，請在指定的時間內在本群組發送任何消息，否則您將被踢。謝謝！',
    id:
      ', silakan sampaikan salam perkenalan dalam waktu yg ditentukan atau anda akan ditolak bergabung dengan grup ini. Terima kasih!',
    ko:
      ', 스팸 봇인지 확인하기 위한 작업입니다. 지정된 시간 내에 이 그룹에 메시지를 보내 주십시오. 그렇지 않으면 자동 추방 될 예정입니다. 감사합니다!',
    cz:
      ', prosím, pošlete do této skupiny jakoukoliv zprávu ve stanoveném čase, jinak budete vyhozeni. Děkuji!',
    sk:
      ', prosím, pošlite do tejto skupiny v stanovenom čase akúkoľvek správu, inak budete vyhodený/á. Ďakujem!',
    ar:
      ', من فضلك، إرسال أي رسالة إلى هذه المجموعة في غضون المدة الزمنية المحدد، وإلا سيتم طردك. شكرا!',
    ro:
      ', te rog, trimite orice mesaj către acest grup în timpul specificat, altfel o să fii dat afară în mod automat. Mulțumesc!',
    ca:
      ", per favor, envia un missatge qualsevol, dins aquest grup, abans de que s'acabi el temps establert. Si no ho fas, seràs expulsat/-ada de forma automàtica. Gràcies.",
    he: ', אנא שלח הודעה כלשהי לקבוצה בטווח הזמן הנתון, אחר תורחק. תודה!',
    hu:
      ', kérlek, írj be valamilyen üzenetet, mielőtt a megadott idő lejárna, különben ki kell, hogy rúgjalak. Köszönöm!',
    fi:
      ', ole hyvä ja lähetä ryhmään viestiä annetun ajan kuluessa, jotta et tule poistetuksi ryhmästä. Kiitos!',
    fr:
      ", veuillez répondre dans le délai, sinon vous serez directement prélevé à la source. Merci d'avance !",
    ja:
      ', 指定された時間内に何かメッセージを送ってください。そうしないと、退出させられます。ありがとうございます！',
    yue: ', 唔該喺規定時間內向羣組內發任意內容，否則你會畀踢走。',
    bg:
      ', Mоля, представете се в групата, в рамките на определеното време, в противен случай ще бъдете изритани. Благодаря ви!',
  },
  digits_warning: {
    en:
      ', please, send the solution to the arithmetic operation provided within the time amount specified to this group, otherwise you will be kicked. Thank you!',
    ru:
      ', пожалуйста, отправьте решение указанной арифметической задачи в этот чат в течение указанного времени, иначе вы будете кикнуты. Спасибо!',
    et:
      ', palun saatke matemaatilise võrrandi lahendus sellele vestlusele määratud aja jooksul, muidu me kickime teid. Aitäh!',
    uk:
      ', будь ласка, надішліть рішення вказаного математичного рівняння в цей чат протягом зазначеного часу, інакше Ви будете вилучені. Дякуємо!',
    br:
      ', Por favor, mande a solução da equação matemática para esse grupo no tempo limite especificado, caso contrário irei kicka-lo. Obrigado!',
    tr:
      ', Lütfen, sağlanan aritmetik işlem çözümünü belirtilen süre içerisinde bu gruba gönderin, aksi takdirde kovulacaksınız. Teşekkür ederiz!',
    es:
      ', por favor, envíe por este grupo la solución a la ecuación matemática proporcionada dentro del tiempo especificado, si no, serás expulsado. ¡Gracias!',
    zh: '，请在指定的时间内将数学计算答案发送到本群组，否则您将被踢。 谢谢！',
    no:
      ', vennligst send svaret på matteproblemet innen den spesifiserte tidsperioden, hvis ikke blir du sparket. Takk!',
    de:
      ', bitte sende die Lösung zu der Mathe-Aufgabe innerhalb des spezifizierten Zeitlimits, andernfalls wirst du gekickt. Danke!',
    tw: '，請在指定的時間內將數學計算答案發送到本群組，否則您將被踢。 謝謝！',
    fr:
      "Veuillez envoyer votre réponse à l'équation dans le délai, sinon vous ne serez pas le bienvenue ici. Merci d'avance !",
    id:
      ', silakan jawab soal hitungan tersebut dalam waktu yg ditentukan atau anda akan ditolak bergabung dengan grup ini. Terima kasih!',
    ko:
      ', 스팸 봇인지 확인하기 위한 작업입니다. 지정된 시간 내에 제공된 수학 방정식의 답을 채팅으로 보내십시오. 그렇지 않으면 자동 추방 될 예정입니다. 감사합니다!',
    cz:
      ', prosím, pošli řešení matematické rovnice ve stanoveném čase, jinak budeš vyhozen. Děkuji!',
    sk:
      ', prosím, pošlite do tejto skupiny v stanovenom čase výsledok matematického príkladu, inak budete vyhodený/á. Ďakujem!',
    ar:
      ', من فضلك، حل المعادلة الرياضية وإرسالها للدردشة قبل إنتهاء الوقت المحدد، وإلا سيتم طردك. شكرا!',
    ja:
      '指定された時間内に算数の正解を送信してください。そうしないと、退出させられます。ありがとうございます！',
    ro:
      ', te rog, trimite rezultatul operației aritmetice în timpul specificat, altfel o sa fii dat afară din grup în mod automat. Mulțumesc!',
    ca:
      ", per favor, envia dins aquest grup, la solució de l'operaió aritmètica proposada, abans de que s'acabi el temps establert. Si no ho fas, seràs expulsat/-ada de forma automàtica. Gràcies.",
    he:
      ', נא לפתור את פעולת החשבון הפשוטה במסגרת הזמן המוגדרת בקבוצה, אחרת תורחק. תודה רבה!',
    yue: '唔該喺規定時間內寫出計數題嘅答案，否則你會畀踢走。',
    it:
      ", prego, invia la soluzione dell'espressione matematica in questo gruppo entro il tempo specificato, altrimenti verrai kickato. Grazie!",
    hu:
      ', kérlek, old meg az alábbi egyszerű matematikai feladványt és írd be ide, mielőtt lejárna a megadott idő, mert különben ki kell, hogy rúgjalak. Köszönöm!',
    fi:
      ', ole hyvä ja lähetä oheisen laskutoimituksen ratkaisu annetun ajan kuluessa, jotta et tule poistetuksi ryhmästä. Kiitos!',
    bg:
      ', Моля, изпратете решението на аритетичната задачка, която виждате тук в рамките на времето посочено от мен , в противен случай ще бъдете изхвърлени от групата. Благодаря ви!',
  },
  button_warning: {
    en:
      ', please, press the button below within the time amount specified, otherwise you will be kicked. Thank you!',
    ru:
      ', пожалуйста, нажмите на кнопку ниже в течение указанного времени, иначе вы будете кикнуты. Спасибо!',
    it:
      ', prego, clicca il bottone qui sotto entro il tempo prestabilito, altrimenti verrai kickato. Grazie!',
    et:
      ', palun klõpsake alam nuppu määratud aja jooksul, muide me kickime teid. Aitäh!',
    uk:
      ', будь ласка, натисніть на кнопку нижче протягом зазначеного часу, інакше Ви будете вилучені. Дякуємо!',
    br:
      ', Por favor, aperte o botão abaixo no tempo limite especificado, caso contrário irei kicka-lo, Obrigado!',
    tr:
      ', Lütfen, belirtilen süre içinde aşağıdaki düğmeye basın, aksi takdirde kovulacaksınız. Teşekkür ederiz!',
    zh: '，请在指定的时间内按下面的按钮，否则你将被踢。谢谢！',
    no:
      'vennligst trykk knappen nedenfor innen den spesifiserte tidsperioden, hvis ikke blir du sparket. Takk!',
    de:
      ', bitte drücke den Knopf unten innerhalb des spezifizierten Zeitlimits, andernfalls wirst du gekickt. Danke!',
    tw: '，請在指定的時間內按下面的按鈕，否則您將被踢。謝謝！',
    fr:
      ", Veuillez appuyer sur le bouton ci-dessous dans le délai spécifié, sinon vous ne serez pas le bienvenue ici. Merci d'avance!",
    id:
      ', silakan tekan tombol dalam waktu yg ditentukan atau anda akan ditolak bergabung dengan grup ini. Terima kasih!',
    ko:
      ', 스팸 봇인지 확인하기 위한 작업입니다. 지정된 시간 내에 아래 버튼을 누르십시오. 그렇지 않으면 자동 추방 될 예정입니다. 감사합니다!',
    am: ', በተኑን ይንኩት ካለበለዛ ይባረራሉ',
    cz:
      ', prosím, stiskněte tlačítko ve stanoveném čase, jinak budete vyhozeni. Děkuji!',
    sk:
      ', prosím, stlačte tlačidlo nižšie v stanovenom čase, inak budete vyhodený/á. Ďakujem!',
    ar:
      ', من فضلك، اضغط على الزر أدناه ضمن المدة الزمنية المحدد، وإلا سيتم طردك. شكرا!',
    ja:
      '指定された時間内に、下に表示されたボタンを押してください。そうしないと、退出させられます。ありがとうございます！',
    ro:
      ', te rog, apasă butonul de mai jos în timpul spefificat, altfel o să fii dat afară din grup în mod automat. Mulțumesc!',
    ca:
      ", per favor, pitja el botó d'aquest missatge abans de que s'acabi el temps establert. Si no ho fas, seràs expulsat/-ada de forma automàtica. Gràcies.",
    he:
      ', אנא ללחוץ על הכפתור במסגרת הזמן המוגדרת בקבוצה, אחרת תורחק. תודה רבה!',
    hu:
      ', kérlek,nyomd meg az alábbi gombot, mielőtt lejárna a megadott idő, mert különben ki kell, hogy rúgjalak. Köszönöm!',
    fi:
      ', ole hyvä ja klikkaa painiketta alla ennen annetun ajan loppumista, jotta et tule poistetuksi ryhmästä. Kiitos!',
    yue: '，唔該喺規定時限內撳下面嘅掣，否則你會畀踢走。',
    bg:
      ', Mоля, натиснете бутона по-долу в рамките на определеното време, в противен случай ще бъдете изхвърлени. Благодаря ви!',
    es:
      ', por favor, presione el botón de abajo dentro del tiempo especificado, si no, serás expulsado. ¡Gracias!',
  },
  image_warning: {
    en:
      ', please, send the characters displayed within the time amount specified to this group, otherwise you will be kicked. Thank you!',
    ru:
      ', пожалуйста, отправьте цифры с картинки в этот чат в течение указанного времени, иначе вы будете кикнуты. Спасибо!',
    et:
      ', palun saatke matemaatilise võrrandi lahendus sellele vestlusele määratud aja jooksul, muidu me kickime teid. Aitäh!',
    uk:
      ', будь ласка, надішліть зазначені символи у цей чат, поки не спливе вказаний час, або ви будете вилучені з чату. Дякуємо!',
    tr:
      ', Lütfen, bu gruba belirtilen süre içerisinde gösterilen karakterleri gönderin, aksi takdirde kovulacaksınız. Teşekkür ederiz!',
    ca:
      ", per favor, envia dins aquest grup, els caràcters de la imatge, abans de que s'acabi el temps establert. Si no ho fas, seràs expulsat/-ada de forma automàtica. Gràcies.",
    de:
      ', bitte sende die angezeigten Zeichen innerhalb der angegebenen Zeit an diese Gruppe, sonst wirst du gesperrt. Vielen Dank!',
    br:
      ', por favor, envie os caracteres exibidos dentro do tempo especificado para este grupo, caso contrário, você será kickado. Obrigado!',
    he:
      ', אנא לשלוח את התווים המוצגים במסגרת הזמן המוגדרת בקבוצה, אחרת תורחק. תודה רבה!',
    no:
      ', vennligst send tegnene som vises på bildet innen den spesifiserte tidsperioden, hvis ikke blir du sparket. Takk!',
    yue: '，唔該喺規定時限內認出圖片入邊嘅所有文字並發到羣組，否則你會畀踢走。',
    hu:
      ', kérlek, írd be ide az alábbi karaktereket, mielőtt lejárna a megadott idő, mert különben ki kell, hogy rúgjalak. Köszönöm!',
    fi:
      ', ole hyvä ja lähetä kuvan merkit annetun ajan kuluessa, jotta et tule poistetuksi ryhmästä. Kiitos!',
    fr:
      ', veuillez inscrire les caractères affichés dans le délai indiqué, sinon vous serez expulsé. Merci!',
    it:
      ', prego, riconosci il personaggio qui sotto entro il tempo prestabilito, altrimenti verrai kickato. Grazie!',
    bg:
      ', Моля, въведете показаните символи в рамките на определеното време посочено от мен, в противен случай ще бъдете изхвърлени от групата. Благодаря ви!',
    es:
      ', por favor, envía a este grupo los caracteres de la imagen dentro del tiempo especificado, si no, serás expulsado. ¡Gracias!',
  },
  captcha_button: {
    en: 'I am not a bot',
    ru: 'Я не бот',
    it: 'Non sono un bot',
    et: 'Ma ei ole bot',
    uk: 'Я не бот',
    br: 'Não sou um robô',
    tr: 'Ben bir bot değilim',
    es: 'No soy un robot',
    zh: '我不是一个机器人',
    no: 'Jeg er ikke en bot',
    de: 'Ich bin kein Bot',
    tw: '我不是機器人',
    fr: 'Je ne suis pas un robot',
    id: 'Saya bukan bot',
    ko: '저는 봇이 아닙니다',
    am: 'ቦት አይደለውም',
    cz: 'Nejsem bot.',
    sk: 'Nie som bot',
    ar: 'أنا لست بوت',
    ja: '私はbotではありません。',
    ro: 'Nu sunt un bot',
    ca: 'No soc un robot',
    he: 'אני לא בוט',
    yue: '我唔係機械人',
    hu: 'Nem vagyok Robot!',
    fi: 'Olen ihminen, en botti.',
    kz: 'Менің пендемге қарау',
    bg: 'Аз не съм бот',
  },
  only_candidate_can_reply: {
    en: 'Only the candidate for not being a bot can press this button.',
    ru:
      'Только кандидат на то, чтобы быть человеком, может нажимать на эту кнопку.',
    it: 'Solamente il candidato che non è un bot può premere questo bottone.',
    et: 'Selle nuppu saab klõpsata ainult kandidaat, kes soovib olla inimene.',
    uk: 'Тільки кандидат на те, щоб бути людиною, може натискати на цю кнопку.',
    br: 'Apenas o usuário citado pode apertar esse botão.',
    tr: 'Sadece bot olmayan bir aday bu düğmeye basabilir.',
    es: 'Solo el candidato a miembro puede presionar este botón.',
    zh: '只有不是机器人的候选人才能按此按钮。',
    no: 'Bare kandidaten som blir testet kan trykke denne knappen.',
    de: 'Nur der User der kein Bot ist, kann diesen Knopf drücken.',
    tw: '只有需要被驗證的人才能按此按鈕。',
    fr: 'Seul le membre concerné peut appuyer sur ce bouton.',
    id: 'Hanya orang alias bukan bot yg bisa menekan tombol ini.',
    ko: '신규 입장자만 이 버튼을 누를 수 있습니다.',
    am: 'ቦት ያልሆኑ ብቻ ነዉ መንካት የሚችሉት።',
    cz: 'Toto tlačítko může stisknout jen nováček, který se zrovna připojil.',
    sk:
      'Toto tlačidlo môže stlačiť iba nováčik, ktorému bola správa adresovaná.',
    ar: 'فقط المرشح لعدم كونه بوت يمكن الضغط على هذا الزر.',
    ja: 'botではない候補の人だけがボタンを押すことができます。',
    ro: 'Doar candidații ce nu sunt boți pot apăsa acest buton.',
    ca:
      'Només allò que no és un robot, és el candidat ideal per a pitjar el botó.',
    he: 'רק מועמדים שאינם בוטים יכולים ללחוץ על הכפתור הזה.',
    yue: '機械人賬戶唔畀撳掣。',
    hu: 'Csak a robot ellenőrzési kihívás jelöltje kattinthat a gombra.',
    bg: 'Само кандидатът, който не е бот, може да натисне този бутон.',
  },
  restrict_true: {
    en:
      'Great! Now all newcomers will only be able to send usual text messages to this chat.',
    ru:
      'Отлично! Теперь все новички смогут отправлять только текстовые сообщения первые сутки в чате.',
    uk:
      'Чудово! Тепер усі новачки протягом першої доби зможуть надсилати в чат тільки текстові повідомлення.',
    br:
      'Boa, Agora todos os novatos só poderam mandar mensagens de texto para esse chat.',
    tr:
      'Harika! Artık tüm yeni gelenler, bu sohbete yalnızca normal metin mesajları gönderebilecek.',
    es:
      '¡Genial! Ahora todos los recién llegados solo podrán enviar mensajes de texto en este chat.',
    zh: '很棒！现在所有新手都只能发送文本消息到这个群组。',
    no: 'Supert! Nå kan nykommere bare sende tekstmeldinger i chatten.',
    de:
      'Genial! Neue User können nun nur Textnachrichten senden, keine Bilder, Links o.ä.',
    tw: '很棒！現在所有新進成員僅能發送文字消息到這個群組。',
    fr:
      'Parfait, maintenant tous les nouveaux membres pourront envoyer uniquement des messages texte à cette discussion',
    id:
      'Baiklah, sekarang semua anggota baru hanya bisa mengirim pesan teks biasa di grup ini.',
    ko:
      '좋아요! 이제 모든 신규 입장자들은 이 채팅에 일반적인 문자 메시지만 보낼 수 있게 될 것입니다.',
    am: 'አዲስ ገቢዎች ቴክስት ብቻ ነዉ የሚልኩት።',
    cz:
      'Skvělé! Nyní mohou do tohoto chatu všichni nováčci posílat jen textové zprávy.',
    sk:
      'Skvelé! Odteraz všetci nováčikovia budú môcť do tohto četu posielať iba obvyklé textové správy.',
    ar:
      'رائع ! الآن جميع الأعضاء الجدد سوف يكونون قادرين فقط على إرسال الرسائل النصية المعتادة إلى هذه الدردشة.',
    ja:
      '素晴らしいです！これで、全ての新しく参加した人は、このチャットで普通のテキストメッセージを送ることができます。',
    ro:
      'Perfect! Acum toți nou veniții vor putea trimite orice fel de mesaje text către acest chat. ',
    ca:
      "Entesos, a partir d'ara, tots els nouvinguts, només podran enviar missatges de text en aquest grup.",
    he: 'מעולה! כעת כל המצטרפים יוכלו לשלוח רק הודעות טקסט בשיחוח הזה.',
    yue: '由而家開始，新來者只可以喺羣入面發文字內容',
    hu:
      'Nagyszerű! Mostantól minden újonc csak szöveges üzenetet küldhet erre a csatornára.',
    bg:
      'Чудесно! Сега всички новодошли, ще могат само да изпращат обичайни текстови съобщения в тази група. ',
  },
  restrict_false: {
    en:
      'Great! Now all newcomers will be able to send any type of content to this chat.',
    ru:
      'Отлично! Теперь все новички смогут отправлять любые сообщения в этот чат.',
    uk:
      'Чудово! Тепер усі новачки зможуть надсилати будь-які повідомлення в чат.',
    br:
      'Boa, Agora todos os novatos poderam mandar qualquer tipo de conteúdo para esse chat.',
    tr:
      'Harika! Artık tüm yeni kullanıcılar, bu sohbete her türlü içeriği gönderebilecek.',
    es:
      '¡Genial! Ahora todos los recién llegados pueden enviar cualquier tipo de contenido a este chat.',
    zh: '很棒！现在所有新手都可以发送任何类型消息到这个群组。',
    no:
      'Supert! Nå kan nykommere sende meldinger med all slags innhold i chatten',
    de: 'Hammer! Neue User können nun jede Art von Nachricht senden.',
    tw: '很棒！現在所有新進成員可以發送任何類型消息到這個群組。',
    fr:
      'Parfait, maintenant tous les nouveaux membres pourront envoyer tout type de contenu à cette discussion',
    id:
      'Baiklah, sekarang semua anggota baru boleh mengirim pesan jenis apa pun di grup ini.',
    ko:
      '좋아요! 이제 모든 신규 입장자들은 이 채팅에 모든 유형의 콘텐츠도 보낼 수 있게 될 것입니다.',
    am: 'አዲስ ገቢዎች የፈለጉትን ነዉ የሚልኩት።',
    cz: 'Skvělé! Nyní mohou do tohoto chatu všichni nováčci posílat cokoli.',
    sk:
      'Skvelé! Odteraz všetci nováčikovia budú môcť do tohto četu posielať akýkoľvek obsah.',
    ar:
      'رائع ! الآن جميع الأعضاء الجدد سوف يكونون قادرين على إرسال أي نوع من المحتوى إلى هذه الدردشة.',
    ja:
      '素晴らしいです！これで、全ての新しく参加した人は、このチャットでどんな種類のコンテンツを送ることができます。',
    ro:
      'Perfect! Acum toți nou veniții vor putea trimite orice fel conținut către acest chat.',
    ca:
      "Entesos, a partir d'ara, tots els nouvinguts podran enviar qualsevol tipus de missatge en aquest grup.",
    he: 'מעולה! כעת כל המצטרפים יוכלו לשלוח הודעות עם כל תוכן שהוא בשיחוח הזה.',
    yue: '正！由而家開始，新來者可以喺羣度發任何類型嘅內容。',
    hu:
      'Nagyszerű! Mostantól minden újonc bármilyen üzenetet küldhet erre a csatornára.',
    bg:
      'Чудесно! Сега всички новодошли, ще могат да изпращат всякакъв вид съдържание в тази група.',
  },
  deleteEntryMessages_true: {
    en: 'Great! Now entry messages will be deleted.',
    ru: 'Отлично! Теперь сообщения о входе пользователей будут удаляться.',
    uk: 'Чудово! Тепер повідомлення про вхід користувачів буде видалено.',
    br: 'Boa, Agora a mensagem de entrada será apagada.',
    tr: 'Harika! Artık giriş mesajları silinecek.',
    es:
      '¡Genial! Ahora los mensajes que anuncian la entrada de nuevos usuarios, serán borrados.',
    zh: '很棒！现在，加入消息将被删除。',
    no: 'Supert! Meldinger sendt ved ankomst bli slettet.',
    de: 'Mega! Beitrittsnachrichten werden nun gelöscht.',
    tw: '很棒！現在，新成員加入的系統消息將被刪除。',
    fr: "Parfait, maintenant les messages d'arrivée seront supprimés",
    id: 'Baiklah, sekarang pesan sambutan akan dihapus.',
    ko: '좋아요! 이제 입력 메시지가 삭제됩니다.',
    am: 'ኢንትሪ ሜሴጅ ተደልቷል።',
    cz: 'Skvělé! Nyní budou mazány zprávy o příchodu nováčka.',
    sk: 'Výborne! Odteraz budú správy o vstupe nováčika do četu odstránené.',
    ar: 'رائع ! الآن سيتم حذف رسائل الدخول إلى المجموعة.',
    ja: '素晴らしいです！これで、全ての参加時のメッセージは削除されます。',
    ro: 'Perfect! Acum mesajele de întampinare vor fi șterse.',
    ca:
      "Molt bé, a partir d'ara els missatges, que auncien l'entrada de nous usuaris al grup, seran esborrats.",
    he: 'מעולה! כעת הודעות כניסה ימחקו.',
    yue: '由而家開始，所有新來者嘅入羣提醒都會被刪除。',
    hu: 'Nagyszerű! Mostantól a belépési üzeneteket töröljük.',
    bg: 'Страхотно! Сега съобщенията за влизане ще бъдат изтрити.',
  },
  deleteEntryMessages_false: {
    en: 'Great! Now entry messages will not be deleted.',
    ru: 'Отлично! Теперь сообщения о входе пользователей не будут удаляться.',
    uk: 'Чудово! Тепер повідомлення про вхід користувачів не буде видалено.',
    br: 'Boa, Agora a mensagem de entrada não será apagada.',
    tr: 'Harika! Artık giriş mesajları silinmeyecek.',
    es:
      '¡Genial! Ahora los mensajes que anuncian la entrada de nuevos usuarios, no serán borrados.',
    zh: '很棒！现在，加入消息将不被删除。',
    no: 'Supert! Meldinger sendt ved ankomst vil ikke bli slettet.',
    de: 'Spitze! Beitrittsnachrichten werden nicht gelöscht.',
    tw: '很棒！現在，新成員加入的系統消息將不會被刪除。',
    fr: "Parfait, maintenant les messages d'arrivée ne seront pas supprimés",
    id: 'Baiklah, sekarang pesan sambutan tidak akan dihapus.',
    ko: '좋아요! 이제 입력 메시지는 삭제되지 않습니다.',
    am: 'ኢንትሪ ሜሴጅ አልተደለተም።',
    cz: 'Skvělé! Nyní nebudou mazány zprávy o příchodu nováčka.',
    sk: 'Výborne! Odteraz nebudú správy o vstupe nováčika do četu odstránené.',
    ar: 'رائع ! الآن لن يتم حذف رسائل الدخول إلى المجموعة.',
    ja: '素晴らしいです！これで、全ての参加時のメッセージは削除されません。',
    ro: 'Perfect! Acum mesajele de întampinare nu vor fi șterse.',
    ca:
      "Molt bé, a partir d'ara els missatges, que auncien l'entrada de nous usuaris al grup, no seran esborrats.",
    he: 'מעולה! כעת הודעות כניסה לא ימחקו.',
    yue: '由而家開始，所有新來者嘅入羣提醒將會保留。',
    hu: 'Nagyszerű! Mostantól a belépési üzeneteket nem töröljük.',
    bg: 'Чудесно! Сега съобщенията за влизане няма да бъдат изтривани.',
  },
  greetsUsers_true: {
    en:
      'Great! Now newcomers who passed the test will be greeted. Please, reply to this message with the greeting text you would like to use (you can use $title, $fullname and $username).',
    ru:
      'Отлично! Теперь пользователи, прошедшие проверку, будут получать сообщения с приветствиями. Пожалуйста, ответьте на это сообщение текстом, которым вы хотите встречать новых пользователей (можете использовать $title, $fullname и $username).',
    it:
      'Great! Now newcomers who passed the test will be greeted. Please, reply to this message with the greeting text you would like to use.',
    et:
      'Great! Now newcomers who passed the test will be greeted. Please, reply to this message with the greeting text you would like to use.',
    uk:
      'Чудово! Тепер щойно новачки розвʼяжуть капчу вони отримають вітання. У відповідь на це повідомлення надішліть текст вітання, яким бажаєте зустрічати майбутніх користувачів (можете використовувати $title, $fullname та $username).',
    tr:
      'Harika! Artık testi geçen yeni üyeler karşılanacak. Lütfen, bu iletiyi kullanmak istediğiniz tebrik metniyle yanıtlayın ($title ve $username kullanabilirsiniz).',
    es:
      '¡Genial! Ahora los recién llegados que hayan pasado el test serán saludados. Por favor, responde a este mensaje con el texto de saludo que quieres utilizar (puedes usar $title, $fullname y $username).',
    zh:
      '很棒！现在通过测试的新人不会受到欢迎消息。 请回复此消息，并附上您要使用的问候语（您可以使用$title和$username）。',
    de:
      'Turbo! Neue User, die den Test bestanden haben, werden nun begrüßt. Bitte beantworte diese Naxhricht mit einem Begrüßungstext. (Du kannst $title und $username als Platzhalter benutzen).',
    tw:
      '很棒！現在通過驗證的新進成員不會收到歡迎消息。 請回復此消息，並附上您要使用的歡迎詞（您可以使用$title和$username）。',
    id:
      'Baiklah, sekarang anggota baru yg lolos ujian tidak akan menerima pesan sambutan. Silakan balas pesan ini dengan pesan sambutan yg ingin anda gunakan (tersedia $title dan $username).',
    ko:
      '좋아요! 이제 테스트에 통과한 신규 입장자들에게 인사 할 예정입니다. 사용하고 싶은 인사말을 사용하여 이 메시지에 회신하십시오 ($title 및 $username 사용 가능).',
    cz:
      'Skvělé! Nyní budou uvítáni nováčci, kteří prošli testem. Odpovězte prosím na tuto zprávu uvítacím textem, který chcete použít (můžete použít $title a $username).',
    sk:
      'Super! Odteraz budú všetci nováčikovia, ktorí prešli testom, uvítaní. Odpovedzte na túto správu uvítacím textom, ktorý chcete použiť (môžete použiť $title a $username).',
    ar:
      'رائع ! الآن سيتم استقبال الأعضاء الجدد الذين اجتازوا الاختبار. الرجاء الرد على هذه الرسالة مع نص الترحيب الذي ترغب في استخدامه (يمكنك استخدام $title $username).',
    ja:
      '素晴らしいです！これで、テストをパスして新しく参加した人は挨拶をされます。あなたが希望する挨拶のメッセージを、こちらのメッセージに回答してください。($title, $fullname and $usernameを使えます。)',
    ro:
      'Super! Acum nou veniții ce au trecut testul vor fi salutați. Te rog să răspunzi la acest mesaj cu textul salutului pe care vrei sa îl utilizezi (poți folosi $title si $username).',
    ca:
      "D'acord, a partir d'ara els nouvinguts que hagin passat la prova rebran un missatge de benvinguda. Per favor, respon a aquest missatge amb el texte que vulguis fer servir per a una salutació personalitzada (pots fer servir $title, $fullname y $username).",
    he:
      'מעולה! כעת מצטרפים שעברו את המבחן יבורכו. אנא, השב להודעה זו עם הודעת הברכה שברצונך להשתמש.',
    no:
      'Supert! Nykommere som har bestått testen vil få en velkomst. Vennligst svar på denne meldingen med teksten du vil bruke som velkomst (du kan bruke $title og $username).',
    br:
      'Boa! Agora os novatos que passarem no teste serão congratulados. Por favor, responda essa mensagem com a o texto de congratulações que você gostaria de usar.',
    yue:
      '好。由而家開始，機械人會同通過驗證嘅新來者打招呼。回覆呢條訊息，話我知你想我點同人打招呼（可以包含 $title, $fullname, $username）。',
    hu:
      'Nagyszerű! Az újoncokat, akik átmentek a teszten, az üdvözölni fogjuk. Kérlek válaszolj erre az üzenetre az általad választott üzenettel (használhatod az alábbiakat $title, $fullname and $username).',
    fr:
      "Parfait, maintenant les nouveaux membres ayant réussi le test seront salués. Veuillez configurer le message d'accueil personnalisé que vous souhaitez en répondant à ce message (Vous pouvez utiliser les fonctions suivantes $title et $username).",
    bg:
      'Чудесно! Сега новодошлите, които са преминали теста, ще бъдат поздравени. Моля, отговорете на това съобщение с поздравителния текст, който искате да използвате (можете да използвате $title, $fullname и $username).',
  },
  greetsUsers_true_message: {
    en:
      'Great! Now newcomers who passed the test will be greeted. Please, reply to this message with the greeting text you would like to use (you can use $title, $fullname and $username). The current greeting message follows.',
    ru:
      'Отлично! Теперь пользователи, прошедшие проверку, будут получать сообщения с приветствиями. Пожалуйста, ответьте на это сообщение текстом, которым вы хотите встречать новых пользователей (можете использовать $title, $fullname и $username). Текущее сообщение с приветствием ниже.',
    it:
      'Great! Now newcomers who passed the test will be greeted. Please, reply to this message with the greeting text you would like to use. The current greeting message follows.',
    et:
      'Great! Now newcomers who passed the test will be greeted. Please, reply to this message with the greeting text you would like to use. The current greeting message follows.',
    uk:
      'Чудово! Тепер щойно новачки розвʼяжуть капчу вони отримають вітання. У відповідь на це повідомлення надішліть текст вітання, яким бажаєте зустрічати майбутніх користувачів (можете використовувати $title, $fullname та $username). Поточне вітання наведено нижче.',
    br:
      'Boa! Agora os novatos que passarem no teste serão congratulados. Por favor, responda essa mensagem com o texto de congratulações que você gostaria de usar. O texto atual é:',
    tr:
      'Harika! Artık testi geçen yeni üyeler karşılanacak. Lütfen bu mesajı, kullanmak istediğiniz tebrik metni ile yanıtlayın ($title ve $username kullanabilirsiniz). Geçerli tebrik mesajı izlenir.',
    es:
      '¡Genial! Ahora los recién llegados que hayan pasado el test serán saludados. Por favor, responde a este mensaje con el texto de saludo que quieres utilizar (puedes usar $title, $fullname y $username). El mensaje actual de saludo es:',
    zh:
      '很棒！现在通过测试的新人会受到欢迎消息。 请回复此消息，并附上您要使用的问候语（您可以使用$title和$username）。接下来是当前的问候消息。',
    de:
      'Turbo! Neue User, die den Test bestanden haben, werden nun begrüßt. Die aktuelle Begrüßungsnachricht folgt jetzt.',
    tw:
      '很棒！現在通過驗證的新進成員會收到歡迎消息。 請回復此消息，並附上您要使用的歡迎詞（您可以使用$title和$username）。接下來是目前的歡迎詞。',
    fr:
      "Parfait, maintenant les nouveaux membres qui ont réussi le test seront salués. Veuillez configurer le message d'accueil personnalisé que vous souhaitez en répondant à ce message (Vous pouvez utiliser les fonctions suivantes $title et $username).",
    id:
      'Baiklah, sekarang anggota baru yg lolos ujian akan menerima pesan sambutan. Silakan balas pesan ini dengan pesan sambutan yg ingin anda gunakan (tersedia $title dan $username). Pesan sambutan yg digunakan saat ini adalah...',
    ko:
      '좋아요! 이제 테스트에 통과한 신규 입장자들에게 인사 할 예정입니다. 사용하고 싶은 인사말을 사용하여 이 메시지에 회신하십시오 ($title 및 $username 사용 가능). 현재 인사 메시지가 이어집니다.',
    am:
      'Great! Now newcomers who passed the test will be greeted. Please, reply to this message with the greeting text you would like to use (you can use $title, $fullname and $username). The current greeting message follows.',
    cz:
      'Skvělé! Nyní budou uvítáni nováčci, kteří prošli testem. Odpovězte prosím na tuto zprávu uvítacím textem, který chcete použít (můžete použít $title a $username). Následuje pozdrav.',
    sk:
      'Super! Odteraz budú všetci nováčikovia, ktorí prešli testom, uvítaní. Odpovedzte na túto správu uvítacím textom, ktorý chcete použiť (môžete použiť $title a $username). Nasleduje aktuálna uvítacia správa.',
    ar:
      'رائع ! الآن سيتم استقبال الأعضاء الجدد الذين اجتازوا الاختبار. الرجاء الرد على هذه الرسالة مع نص الترحيب الذي ترغب في استخدامه (يمكنك استخدام $title $username). فيما يلي رسالة الترحيب الحالية.',
    ja:
      '素晴らしいです！これで、テストをパスして新しく参加した人は挨拶をされます。あなたが希望する挨拶のメッセージを、こちらのメッセージに回答してください。($title, $fullname and $usernameを使えます。) 今の挨拶メッセージは以下です。',
    ro:
      'Super! Acum nou veniții ce au trecut testul vor fi salutați. Te rog să răspunzi la acest mesaj cu textul salutului pe care vrei sa îl utilizezi (poți folosi $title si $username). Mesajul curent de salut este următorul.',
    ca:
      "D'acord, a partir d'ara els nouvinguts que hagin passat la prova rebran un missatge de benvinguda. Per favor, respon a aquest missatge amb el texte que vulguis fer servir per a una salutació personalitzada (pots fer servir $title, $fullname y $username). Actualment tens establert el següent missatge de benvinguda:",
    he:
      'מעולה! כעת מצטרפים שעברו את המבחן יבורכו. אנא, השב להודעה זו עם הודעת הברכה שברצונך להשתמש. להלן הודעת הברכה.',
    no:
      'Supert! Nykommere som har bestått testen vil få en velkomst. Vennligst svar på denne meldingen med teksten du vil bruke som velkomst (du kan bruke $title og $username). Den nåværende meldingen følger.',
    yue:
      '好。由而家開始，機械人會同通過測試嘅新來者打招呼。回覆呢條訊息，話我知你想我點同人打招呼（可以包含 $title, $fullname, $username）。目前設定嘅打招呼訊息如下：',
    hu:
      'Nagyszerű! Az újoncokat, akik átmentek a teszten, az üdvözölni fogjuk. Kérlek válaszolj erre az üzenetre az általad választott üzenettel (használhatod az alábbiakat $title, $fullname and $username).',
    bg:
      'Чудесно! Сега новодошлите, които са преминали теста, ще бъдат поздравени. Моля, отговорете на това съобщение с поздравителния текст, който искате да използвате (можете да използвате $title, $fullname и $username). Следва текущото поздравително съобщение.',
  },
  greetsUsers_false: {
    en: 'Great! Now newcomers who passed the test will not be greeted.',
    ru:
      'Отлично! Теперь пользователи, прошедшие проверку, не будут получать сообщения с приветствиями.',
    uk:
      'Чудово! Тепер новачки не будуть отримувати вітання після того, як розвʼяжуть капчу.',
    br: 'Boa! Agora os novatos que passarem no teste não serão congratulados',
    tr: 'Harika! Artık testi geçen yeni üyeler karşılanmayacak.',
    es:
      '¡Genial! Ahora los recién llegados que pasen el test no serán saludados.',
    zh: '很棒！现在通过测试的新人不会受到欢迎消息。',
    no: 'Supert! Nykommere som har bestått testen vil ikke få en velkomst.',
    de:
      'Cool! Neue User, die den Text bestanden haben, werden nun nicht begrüßt.',
    tw: '很棒！現在通過驗證的新進成員不會收到歡迎消息。',
    fr:
      'Parfait, maintenant les nouveaux membres ayant réussi le test ne seront plus salués',
    id:
      'Baiklah, sekarang anggota baru yg lolos ujian tidak menerima sambutan.',
    ko: '좋아요! 이제 테스트에 합격한 신입들에게 환영 인사를 하지않을 거예요.',
    cz: 'Skvělé! Nyní nováčci, kteří projdou testem nebudou uvítáni.',
    sk: 'Super! Odteraz nováčikovia, ktorí prešli testom, nebudú uvítaní.',
    ar: 'تم ! الآن لن يتم استقبال الأعضاء الجدد الذين اجتازوا الاختبار.',
    ja:
      '素晴らしいです！これで、このテストをパスして新しく参加された人は挨拶をされません。',
    ro: 'Super! Acum nou veniții ce au trecut testul vor fi salutați.',
    ca:
      "D'acord, a partir d'ara els nouvinguts que hagin passat la prova no rebran cap missatge de benvinguda.",
    he: 'מעולה! כעת מצטרפים שעברו את המבחן לא יבורכו.',
    yue: '好。由而家開始，新來者唔會收到打招呼嘅訊息。',
    hu: 'Nagyszerű! Az újoncokat, akik átmentek a teszten, nem üdvözöljük.',
    fi: 'Selvä! Nyt testin läpäisseitä tulokkaita ei tervehditä.',
    bg:
      'Чудесно! Сега новодошлите, които са преминали теста, няма да бъдат поздравявани. ',
  },
  greetsUsers_message_accepted: {
    en: 'Accepted!',
    ru: 'Принято!',
    uk: 'Прийнято!',
    br: 'Aceito!',
    tr: 'Kabul edildi!',
    es: '¡Aceptado!',
    zh: '已接受！',
    no: 'Akseptert!',
    de: 'Akzeptiert!',
    tw: '已接受！',
    fr: 'Accepté',
    id: 'Diterima!',
    ko: '수락되었습니다',
    am: 'ተቀብለናል',
    cz: 'Přijato!',
    sk: 'Prijaté!',
    ar: 'قبلت!',
    ja: '承認されました！',
    ro: 'Acceptat!',
    ca: 'Acceptat!',
    he: 'קיבלתי!',
    yue: '收到！',
    hu: 'Elfogadva!',
    fi: 'Hyväksytty!',
    bg: 'Прието!',
  },
  captchaMessage_true: {
    en:
      'Great! Now newcomers will get custom message explaining the captcha. Please, reply to this message with the captcha text you would like to use (you can use $title, $username, $equation, $fullname and $seconds).',
    ru:
      'Отлично! Теперь пользователи будут получать кастомное сообщение капчи. Пожалуйста, ответьте на это сообщение текстом, который будет объяснять капчу вошедшим (можете использовать $title, $username, $equation, $fullname и $seconds).',
    uk:
      'Чудово! Тепер новачки будуть отримувати інше повідомлення із поясненням капчі. Надішліть новий текст для капчі у відповідь на це повідомлення (можна використовувати $title, $username, $equation, $fullname та $seconds).',
    tr:
      'Harika! Artık yeni gelenler, CAPTCHA testini açıklayan özel mesaj alacaklar. Lütfen bu iletiyi kullanmak istediğiniz CAPTCHA metni ile yanıtlayın ($title, $username, $equation, $fullname ve $seconds kullanabilirsiniz).',
    es:
      '¡Genial! Ahora los recién llegados recibirán una explicación del CAPTCHA que tienen que superar. Por favor, responde a este mensaje con el texto que deseas utilizar para dicha explicación (puedes usar $title, $username, $equation, $fullname y $username).',
    zh:
      '很棒！ 现在新人将获得回答验证码的自定义消息。请用你要使用的验证码文本回复此消息 (你可以使用 $title, $username, $equation, $fullname 和 $seconds)。',
    de:
      'WOW! Neue User erhalten nun eine individuelle Nachricht, die Ihnen das Captcha erklärt. Bitte antworte auf diese Nachricht mit dem Captcha Text, den du verwenden möchtest. (Du kannst die Platzhalter $title, $username, $equation, $fullname und $seconds verwenden).',
    sk:
      'Skvelé! Odteraz nováčikovia obdržia vlastnú správu vysvetľujúcu test captcha. Odpovedzte na túto správu textom testu captcha, ktorý chcete použiť (môžete použiť $title, $username, $equation, $fullname a $seconds).',
    ar:
      'رائع الآن الأعضاء الجدد سيتلقون رسالة تشرح لهم طريقة اجراء الإختبار, قم بالرد مع رسالة الاختبار التي تريدها. يمكنك إستخدام  $title, $username, $equation, $fullname and $seconds).',
    ja:
      '素晴らしいです！これで、新しく参加した人は、キャプチャに説明されたカスタムメッセージを受けます。あなたが希望するキャプチャテキストを、こちらのメッセージに回答してください。($title, $username, $equation, $fullname and $secondsを使えます)。',
    ro:
      'Super! Acum nou veniții vor primi un mesaj personalizat ce le explică captcha. Te rog răspunde la acest mesaj cu text-ul testului captcha pe care vrei sa îl folosești (poți utiliza $title, $username, $equation, $fullname și $seconds).',
    ca:
      "D'acord, a partir d'ara els nouvinguts rebran un missatge que els explicarà la prova que han de superar. Per favor, respon a aquest missatge amb el texte personalitzat que vulguis fer servir per a l'explicació de la prova (pots fer servir $title, $username, $equation, $fullname i $seconds).",
    br:
      'Boa! Agora os novatos receberão uma mensagem personalizada explicando o captcha. Por favor, responda a esta mensagem com o texto do captcha que você gostaria de usar (você pode usar $title, $username, $equation, $fullname e $seconds).',
    he:
      'מעולה! מצטרפים יקבלו הודעה מותאמת אישית המסבירה על המבחן. אנא, השב להודעה זו עם ההודעה לשימוש (אפשר להשתמש בתבניות $title, $username, $equation, $fullname and $seconds).',
    no:
      'Supert! Nå vil nykommere få en egendefinert beskjed som forklarer testen. Svar på denne meldingen med captcha-teksten du vil bruke (du kan bruke $title, $username, $equation, $fullname og $seconds).',
    yue:
      '好。由而家開始，新來者會收到你新寫嘅驗證提醒。回覆呢條訊息，話我知你想我點提醒新來者去做驗證測試（可以包含 $title, $username, $equation, $fullname, $seconds）。',
    hu:
      'Nagyszerű! Az újoncokat, akik belépnek a csatornára, üdvözölni fogjuk. Kérlek válaszolj erre az üzenetre az általad választott captcha üzenettel (használhatod az alábbiakat $title, $username, $equation, $fullname és $seconds).',
    fr:
      "Super! Désormais, les nouveaux arrivants recevront un message personnalisé expliquant qu'il faut répondre au captcha. Veuillez répondre à ce message avec le texte du captcha que vous souhaitez utiliser (vous pouvez utiliser $title, $username, $equation, $fullname et $seconds).",
    bg:
      'Страхотен! Сега новодошлите ще получат персонализирано съобщение, обясняващо captcha. Моля, отговорете на това съобщение с текста на captcha, който искате да използвате (можете да използвате $title, $username, $equation, $fullname и $seconds).',
  },
  captchaMessage_true_message: {
    en:
      'Great! Now newcomers will get custom message explaining the captcha. Please, reply to this message with the captcha text you would like to use (you can use $title, $username, $equation, $fullname and $seconds). The current greeting message follows.',
    ru:
      'Отлично! Теперь пользователи будут получать кастомное сообщение капчи. Пожалуйста, ответьте на это сообщение текстом, который будет объяснять капчу вошедшим (можете использовать $title, $username, $equation, $fullname и $seconds). Текущее сообщение с приветствием ниже.',
    uk:
      'Чудово! Тепер новачки будуть отримувати інше повідомлення із поясненням капчі. Надішліть новий текст для капчі у відповідь на це повідомлення (можна використовувати $title, $username, $equation, $fullname та $seconds). Поточне пояснення наведено нижче.',
    tr:
      'Harika! Artık yeni gelenler, CAPTCHA testini açıklayan özel mesaj alacaklar. Lütfen bu iletiyi kullanmak istediğiniz CAPTCHA metni ile yanıtlayın ($title, $username, $equation, $fullname ve $seconds kullanabilirsiniz). Geçerli karşılama mesajı izlenir.',
    es:
      '¡Genial! Ahora los recién llegados recibirán una explicación del CAPTCHA que tienen que superar. Por favor, responde a este mensaje con el texto que deseas utilizar para dicha explicación (puedes usar $title, $username, $equation, $fullname y $username). El mensaje explicativo actual es:',
    zh:
      '很棒！ 现在新人将获得回答验证码的自定义消息。请用你要使用的验证码文本回复此消息 (你可以使用 $title, $username, $equation, $fullname 和 $seconds)。 当前的问候消息如下。',
    de:
      'WOW! Neue User erhalten nun eine individuelle Nachricht, die Ihnen das Captcha erklärt. Bitte antworte auf diese Nachricht mit dem Captcha Text, den du verwenden möchtest. (Du kannst die Platzhalter $title, $username, $equation, $fullname und $seconds verwenden). Die aktuelle Begrüßungsnachricht folgt.',
    sk:
      'Skvelé! Odteraz nováčikovia obdržia vlastnú správu vysvetľujúcu test captcha. Odpovedzte na túto správu textom testu captcha, ktorý chcete použiť (môžete použiť $title, $username, $equation, $fullname a $seconds). Nasleduje aktuálna uvítacia správa.',
    ar:
      'رائع الآن الأعضاء الجدد سيتلقون رسالة تشرح لهم طريقة اجراء الإختبار, قم بالرد مع رسالة الاختبار التي تريدها. يمكنك إستخدام $title, $username, $equation, $fullname and $seconds). The current greeting message follows.',
    ja:
      '素晴らしいです！これで、新しく参加した人は、キャプチャに説明されたカスタムメッセージを受けます。あなたが希望するキャプチャテキストを、こちらのメッセージに回答してください。($title, $username, $equation, $fullname and $secondsを使えます)。 今の挨拶メッセージは以下です。',
    ro:
      'Super! Acum nou veniții vor primi un mesaj personalizat ce le explică captcha. Te rog răspunde la acest mesaj cu text-ul testului captcha pe care vrei sa îl folosești (poți utiliza $title, $username, $equation, $fullname și $seconds). Mesajul curent de salut este următorul.',
    ca:
      "D'acord, a partir d'ara els nouvinguts rebran un missatge que els explicarà la prova que han de superar. Per favor, respon a aquest missatge amb el texte personalitzat que vulguis fer servir per a l'explicació de la prova (pots fer servir $title, $username, $equation, $fullname i $seconds). Actualment tens establert el següent missatge explicatiu:",
    br:
      'Boa! Agora os novatos receberão uma mensagem personalizada explicando o captcha. Por favor, responda a esta mensagem com o texto do captcha que você gostaria de usar (você pode usar $title, $username, $equation, $fullname e $seconds).',
    he:
      'מעולה! מצטרפים יקבלו הודעה מותאמת אישית המסבירה על המבחן. אנא, השב להודעה זו עם ההודעה לשימוש (אפשר להשתמש בתבניות $title, $username, $equation, $fullname and $seconds). להלן הודעה הברכה הנוכחית.',
    no:
      'Supert! Nå vil nykommere få en egendefinert beskjed som forklarer testen. Svar på denne meldingen med captcha-teksten du vil bruke (du kan bruke $title, $username, $equation, $fullname og $seconds). Den nåværende meldingen følger.',
    yue:
      '好。由而家開始，新來者會收到你新寫嘅驗證提醒。回覆呢條訊息，話我知你想我點提醒新來者去做驗證測試（可以包含 $title, $username, $equation, $fullname, $seconds）。目前設定嘅驗證提醒如下：',
    hu:
      'Nagyszerű! Az újoncokat, akik belépnek a csatornára, üdvözölni fogjuk. Kérlek válaszolj erre az üzenetre az általad választott captcha üzenettel (használhatod az alábbiakat $title, $username, $equation, $fullname és $seconds).',
    fr:
      "Super! Désormais, les nouveaux arrivants recevront un message personnalisé expliquant qu'il faut répondre au captcha. Veuillez répondre à ce message avec le texte du captcha que vous souhaitez utiliser (vous pouvez utiliser $title, $username, $equation, $fullname et $seconds). Le message d'accueil est le suivant.",
    bg:
      'Чудесно! Сега новодошлите ще получат персонализирано съобщение, обясняващо captcha. Моля, отговорете на това съобщение с текста на captcha, който искате да използвате (можете да използвате $title, $username, $equation, $fullname и $seconds). Следва текущото поздравително съобщение.',
  },
  captchaMessage_false: {
    en: 'Great! Now newcomers will see the default captcha message',
    ru:
      'Отлично! Теперь пользователи будут получать стандартное сообщение с капчей.',
    uk: 'Чудово! Тепер новачки будуть бачити типове повдомлення капчі',
    tr: 'Harika! Artık yeni gelenler varsayılan CAPTCHA mesajını görecek',
    es:
      '¡Genial! Ahora los recién llegados recibirán el mensaje predeteminado de la explicación del CAPTCHA que tienen que superar.',
    zh: '很棒！现在新人将会看到默认的验证码消息',
    de: 'Großartig! Jetzt erhalten neue User die standard Captcha Nachricht',
    sk:
      'Skvelé! Odteraz nováčikovia budú vidieť predvolenú správu testu captcha',
    ar: 'رائع, يمكن للأعضاء الجدد الآن رؤية رسالة الإختبار الإفتراضية',
    ja:
      '素晴らしいです！これで、新しく参加した人は、デフォルトのキャプチャメッセージを見れます。',
    ro: 'Minunat! Acum nou veniții vor vedea mesajul captcha implicit',
    ca:
      "Molt bé, a partir d'ara els nouvinguts rebran el missatge per defecte, que els explicarà la prova que han de superar.",
    br: 'Boa! Agora os novatos verão a mensagem padrão do captcha',
    he: 'מעולה! מעכשיו מצטרפים יראו את הודעת ברירת המחדל של המבחן.',
    no: 'Supert! Nå vil nykommere se den vanlige captcha-meldingen',
    yue: '好。由而家開始，新來者會收到預設嘅驗證提醒',
    hu:
      'Nagyszerű! Az újoncokat, akik belépnek a csatornára, az alap captcha üzenetet fogják látni.',
    fr:
      'Super! Les nouveaux membres verront maintenant le message captcha par défaut',
    bg:
      'Чудесно! Сега новодошлите ще видят съобщението за captcha по-подразбиране',
  },
  trust_success: {
    en: 'Accepted!',
    ru: 'Принято!',
    uk: 'Прийнято!',
    br: 'Aceito!',
    tr: 'Kabul edildi!',
    es: '¡Aceptado!',
    zh: '已接受！',
    no: 'Akseptert!',
    de: 'Akzeptiert!',
    tw: '已接受！',
    fr: 'Accepté',
    id: 'Diterima!',
    ko: '수락되었습니다',
    am: 'ተቀብለናል',
    cz: 'Přijato!',
    sk: 'Prijaté!',
    ar: 'قبلت!',
    ja: '承認されました！',
    ro: 'Acceptat!',
    ca: 'Acceptat!',
    he: 'קיבלתי!',
    yue: '收到！',
    hu: 'Elfogadva!',
    fi: 'Hyväksytty!',
    bg: 'Прието!',
  },
  banUsers_true: {
    en: 'Nice! Users will be banned if they do not pass captcha.',
    ru: 'Отлично! Пользователи будут баниться, если не пройдут капчу.',
    uk:
      'Добре! Тепер користувачі будуть забанені, якщо вони не пройдуть капчу.',
    tr: 'Güzel! Kullanıcılar, CAPTCHA testini geçemezlerse yasaklanırlar',
    es:
      'Muy bién, a partir de ahora los usuarios que no superen el CAPTCHA quedarán bloqueados.',
    zh: '很好！如果用户未通过验证码，将被禁止。',
    de: 'Toll! User werden gebannt, wenn sie den Captcha Test nicht schaffen.',
    cz: 'Skvěle! Nováčci, kteří neprojdou testem budou zabanováni.',
    sk: 'Fajn! Používatelia, ktorí neprejdú testom, budú zabanovaní.',
    ar: 'تم, الأعضاء الذين لم يجتازوا الإختبار سيتم حظرهم.',
    ja: 'いいですね！キャプチャをパスしなかったユーザーがバンされます。',
    ro: 'Nice! Utilizatorii vor fi banați dacă nu trec testul captcha.',
    ca:
      "D'acord, a partir d'ara els nouvinguts que no superin la prova quedaran bloquejats.",
    br: 'Boa! Os usuários serão banidos se não passarem pelo captcha.',
    he: 'מעולה! משתמשים ינודו אם הם לא יעברו את המבחן.',
    no: 'Supert! Brukere vil bli utestengt om de ikke består testen.',
    yue: '好。由而家開始，未通過驗證嘅新來者會畀踢走。',
    hu: 'Csodás! A usert bannolni fogjuk, ha nem megy át a captcha-n.',
    fr: "Parfait! Les utilisateurs seront bannis s'ils ne passent pas captcha.",
    bg: 'Супер! Потребителите ще бъдат блокирани, ако не преминат captcha.',
  },
  banUsers_false: {
    en: 'Nice! Users will be kicked if they do not pass captcha.',
    ru: 'Отлично! Пользователи будут кикнуты, если не пройдут капчу.',
    uk: 'Добре! Тепер користувачей буде вилучено, якщо вони не пройдуть капчу.',
    tr: 'Güzel! Kullanıcılar, CAPTCHA testini geçemezlerse kovulurlar',
    es:
      'Muy bién, a partir de ahora los usuarios que no superen el CAPTCHA serán expulsados.',
    zh: '很好！如果用户未通过验证码，将被踢出。',
    de:
      'Spitze! User werden gekickt, wenn sie den Captcha Test nicht schaffen.',
    cz: 'Skvěle! Nováčci, kteří neprojdou testem budou vyhozeni.',
    sk: 'Fajn! Používatelia, ktorí neprejdú testom, budú vyhodení.',
    ar: 'تم, الأعضاء الذين لم يجتازوا الإختبار سيتم طردهم.',
    ja: 'いいですね！キャプチャをパスしなかったユーザーは退出させられます。',
    ro: 'Nice! Utilizatorii vor primi kick dacă nu trec testul captcha.',
    ca:
      "D'acord, a partir d'ara els nouvinguts que no superin la prova seran explusats.",
    br: 'Boa! Os usuários serão kickados se não passarem pelo captcha.',
    he: 'מעולה! משתמשים יורחקו אם הם לא יעברו את המבחן.',
    no: 'Supert! Brukere vil bli sparket om de ikke består testen.',
    yue: '好。由而家開始，未通過驗證嘅新來者會被自動踢除。',
    hu: 'Csodás! A usert kivágjuk, ha nem megy át a captcha-n.',
    fr:
      "Parfait! Les utilisateurs seront expulsés s'ils ne réussissent pas le captcha.",
    bg:
      'Супер! Потребителите ще бъдат "изритани" от групата, ако не преминат captcha.',
  },
  deleteEntryOnKick_true: {
    en:
      'Great! antispam-bot will remove entry messages of the users who failed captcha.',
    ru:
      'Щилди будет удалять сообщения о входе пользователей, проваливших капчу.',
    uk:
      'Чудово! Шилді тепер видалятиме усі вхідні повідомлення від користувачів, які провалили капчу.',
    tr:
      'Harika! antispam-bot, CAPTCHA testinden başarısız olan kullanıcıların giriş mesajlarını kaldıracak.',
    es:
      'Perfecto, antispam-bot eliminará los mensajes de los recién llegados que no hayan superado el CAPTCHA.',
    zh: '很棒！antispam-bot将删除验证码失败用户的加入消息。',
    de:
      'Top! antispam-bot wird nun die Beitrittsnachrichten entfernen, wenn ein User den Captcha Test nicht besteht.',
    sk:
      'Super! antispam-bot odstráni správy o vstupe nováčikov do četu, ak neprejdú testom captcha.',
    ja:
      '素晴らしいです！antispam-botは、キャプチャを失敗したユーザーの入室時のメッセージを削除します。',
    ro:
      'Minunat! antispam-bot va șterge fiecare mesaj al utilizatorilor ce nu au trecut testul captcha.',
    ca:
      "Entesos, a partir d'ara en antispam-bot esborrarà tots els missatges dels nouvinguts que no hagin superat la prova.",
    br:
      'Boa! antispam-bot removerá mensagens de entrada dos usuários que erraram o captcha.',
    he: 'מעולה! antispam-bot ימחק הודעות כניסה של משתמשים שנכשלו במבחן.',
    no:
      'Supert! antispam-bot vil fjerne inngangsmeldingene til brukere som ikke består captcha-testen.',
    yue: '好。由而家開始，antispam-bot 會自動刪除驗證失敗用戶嘅入羣訊息。',
    hu:
      'Nagyszerű! A antispam-bot eltávolítja a belépési üzenetet, ha a felhasználó elbukik a teszten.',
    fr:
      "Super! antispam-bot va supprimer les messages d'accueil des utilisateurs qui ont échoué au captcha.",
    bg:
      'Чудесно! antispam-bot ще премахне съобщенията за влизане на потребителите, които НЕ са отговорили на captcha. ',
  },
  deleteEntryOnKick_false: {
    en:
      'Great! antispam-bot will not remove entry messages of the users who failed captcha.',
    ru:
      'Великолепно! Щилди не будет удалять сообщения о входе пользователей, проваливших капчу.',
    uk:
      'Чудово. Шилді не буде видаляти вхідні повідомлення від користувачів, які провалили капчу.',
    tr:
      'Harika! antispam-bot, CAPTCHA testinden başarısız olan kullanıcıların giriş mesajlarını kaldırmayacak.',
    es:
      'Perfecto, antispam-bot no eliminará los mensajes de los recién llegados que no hayan superado el CAPTCHA.',
    zh: '很棒！antispam-bot将不会删除验证码失败用户的加入消息。',
    de:
      'Hammer! antispam-bot wird nun die Beitrittsnachrichten nicht entfernen, wenn ein User den Captcha Test nicht besteht.',
    sk:
      'Super! antispam-bot neodstráni správy o vstupe nováčikov do četu, ak neprejdú testom captcha.',
    ja:
      '素晴らしいです！antispam-botは、キャプチャを失敗したユーザーの入室時のメッセージを削除しません。',
    ro:
      'Minunat! antispam-bot nu va șterge fiecare mesaj al utilizatorilor ce nu au trecut testul captcha.',
    ca:
      "Entesos, a partir d'ara en antispam-bot no esborrarà tots els missatges dels nouvinguts que no hagin superat la prova.",
    br:
      'Boa! antispam-bot não removerá mensagens de entrada dos usuários que erraram o captcha.',
    he: 'מעולה! antispam-bot לא ימחק הודעות כניסה של מתמשים שנכשלנו במבחן.',
    no:
      'Supert! antispam-bot vil ikke fjerne inngangsmeldingene til brukere som ikke består captcha-testen.',
    yue: '好。由而家開始，antispam-bot 唔會自動刪除驗證失敗用戶嘅入羣訊息。',
    hu:
      'Nagyszerű! A antispam-bot nem távolítja el a belépési üzenetet, ha a felhasználó elbukik a teszten.',
    fr:
      "C'est noté! antispam-bot ne va plus supprimer les messages d'accueil des utilisateurs qui ont échoué au captcha.",
    bg:
      'Чудесно! antispam-bot няма да премахва съобщения за влизане на потребители, които НЕ са успели с captcha. ',
  },
  cas_true: {
    en: 'Great! antispam-bot will now use Combot Anti-Spam.',
    ru: 'Великолепно! Щилди теперь будет использовать Combot Anti-Spam.',
    uk: 'Чудово! Шилді тепер використовує Combot Anti-Spam.',
    tr: 'Harika! antispam-bot, artık Combot Anti-Spam kullanacak.',
    es:
      '¡Entendido! Ahora antispam-bot utilizará Combot Anti-Spam para combatir el spam.',
    sk: 'Skvelé! antispam-bot odteraz bude používať Combot Anti-Spam.',
    ca:
      "Molt bé, a partir d'ara en antispam-bot ferà servir Combot Anti-Spam per a combatre els missatges brossa.",
    br: 'Boa! antispam-bot agora usará o Combot Anti-Spam.',
    he: 'מעולה! antispam-bot מעכשיו ישתמש ב-Combot Anti-Spam.',
    no: 'Supert! antispam-bot vil nå bruke Combot Anti-Spam.',
    yue: '好。由而家開始，antispam-bot 會使用 Combot 提供嘅防滋擾功能。',
    hu: 'Nagyszerű! A antispam-bot ezentúl használja a Combot Anti-Spam megoldást.',
    fr: 'Super! antispam-bot va maintenant utiliser Combot Anti-Spam.',
    bg: 'Страхотно! antispam-bot вече ще използва Combot Anti-Spam. ',
  },
  cas_false: {
    en: 'Great! antispam-bot will not use Combot Anti-Spam now.',
    ru: 'Великолепно! Щилди теперь не будет использовать Combot Anti-Spam.',
    uk: 'Чудово! Шилді тепер не використовує Combot Anti-Spam.',
    tr: 'Harika! antispam-bot, artık Combot Anti-Spam kullanmayacak.',
    es:
      '¡Entendido! Ahora antispam-bot no utilizará Combot Anti-Spam para combatir el spam.',
    sk: 'Skvelé! antispam-bot odteraz nebude používať Combot Anti-Spam.',
    ca:
      "Molt bé, a partir d'ara en antispam-bot no ferà servir Combot Anti-Spam per a combatre els missatges brossa.",
    br: 'Boa! antispam-bot não usará o Combot Anti-Spam agora.',
    he: 'מעולה! antispam-bot מעכשיו לא ישתמש ב-Combot Anti-Spam.',
    no: 'Supert! antispam-bot vil nå ikke bruke Combot Anti-Spam.',
    yue: '好。由而家開始，antispam-bot 會停用 Combot 提供嘅防滋擾功能。',
    hu:
      'Nagyszerű! A antispam-bot ezentúl nemhasználja a Combot Anti-Spam megoldást.',
    fr: "Ok! antispam-bot n'utilisera pas Combot Anti-Spam.",
    bg: 'Страхотно! antispam-bot няма да използва Combot Anti-Spam сега. ',
  },
  underAttack_true: {
    en:
      /*"Great! antispam-bot will now kick everybody who enters this chat. Don't forget to turn this mode off when attack is over with /underAttack.",*/
      'enabled',
    ru:
      'Отлично! Щилди теперь будет кикать всех, кто заходит в этот чат. Не забудьте отключить этот режим после окончания атаки при помощи команды /underAttack.',
    uk:
      'Чудово! Шилді тепер видалятиме усіх, хто спробує увійти до чату. Коли атака скінчиться, не забудьте вимкнути цей режим командою /underAttack.',
    es:
      '¡Entendido! Ahora antispam-bot expulsará a todo aquel que entre en este chat. No olvides desactivar este modo cuando el ataque haya cesado, para ello utiliza el comando /underAttack.',
    ca:
      "Molt bé, a partir d'ara en antispam-bot expulsarà a tothom que vulgui entrar en aquest xat. Procura desactivar aquest mode quan l'atac s'hagi esveït; per això fes servir la comanda /underAttack.",
    br:
      'Boa! antispam-bot vai kickar todos que entram neste bate-papo. Não se esqueça de desligar este modo quando o ataque acabar com /underAttack.',
    he:
      'מעולה! antispam-bot מעכשיו ירחיק את כל מי שיכנס לשיחוח. לא לשכוח לבטל את המצב כשההתקפה נגמרת בעזרת /underAttack.',
    no:
      'Supert! antispam-bot vil nå sparke alle som blir med i chatten. Ikke glem å slå av denne modusen når angrepet er over med /underAttack.',
    yue:
      '由而家開始，antispam-bot 會踢除所有嘗試入羣嘅人。等滋擾攻擊結束後，記得用 /underAttack 停用當前模式。',
    hu:
      'Nagyszerű! A antispam-bot mostantól minden új csatlakozót kivág a csatornáról. Ne felejtsd el kikapcsolni ezt a beállítást, amikor a támadás véget ár a /underAttack paranccsal.',
    fr:
      "Ok! antispam-bot va maintenant expulser tous ceux qui entreront dans ce groupe. N'oubliez pas de désactiver ce mode lorsque l'attaque est terminée via la commande /underAttack.",
    bg:
      'Чудесно! antispam-bot ще изхвърля всички, които влязат в тази група. Не забравяйте да изключите този режим, когато атаката приключи с /underAttack.',
  },
  underAttack_false: {
    en: 
      /*'Great! antispam-bot will not kick everybody who enters this chat.',*/
      'disabled',
    ru: 'Отлично! Щилди теперь не будет кикать всех, кто заходит в этот чат.',
    uk:
      'Чудово! Шилді тепер не буде видаляти усіх, хто спробує увійти до чату.',
    es:
      '¡Entendido! Ahora antispam-bot ya no continuará expulsando a nadie que entre en este chat.',
    ca:
      "Molt bé, a partir d'ara en antispam-bot ja no continuarà expulsant a ningú que vulgui entrar en aquest xat",
    br: 'Boa! antispam-bot não vai kickar todos que entram neste bate-papo.',
    he: 'מעולה! antispam-bot לא ירחיק את כל מי שנכנס לשיחוח.',
    no: 'Supert! antispam-bot vil ikke sparke alle som blir med i chatten.',
    yue: '好。antispam-bot 而家唔會再踢除所有嘗試入 group 嘅人。',
    hu:
      'Nagyszerű! A antispam-bot mostantól nem vágja ki az új csatlakozókat a csatornáról.',
    fr: "Ok! antispam-bot n'expulsera plus tous ceux qui entrent dans ce groupe.",
    bg: 'Чудесно! antispam-bot няма да изхвърля никой, влизащите в тази група. ',
  },
  noAttack_true: {
    en:
      "Great! antispam-bot is disabled now. Don't forget to turn this mode off with /noAttack.",
    es:
      '¡Entendido! Ahora antispam-bot está desactivado. No olvides desactivar este modo usando /noAttack.',
    ca:
      "Molt bé, a partir d'ara en antispam-bot està desactivat i ja no vigilarà aquest xat. Per desactivar aquest mode fes servir la comanda /noAttack.",
    br:
      'Boa! antispam-bot está desativado agora. Não se esqueça de desativar esse modo com /noAttack.',
    he: 'מעולה! antispam-bot מכובה כעת. אל תשכחו לבטל את הפעולה בעזרת /noAttack.',
    no:
      'Supert! Nå er antispam-bot deaktivert. Ikke glem å slå av denne modusen med /noAttack.',
    yue:
      'antispam-bot 經已畀停用。要重新使用 antispam-bot，請用 /noAttack 停用當前模式。',
    ru:
      'Отлично! Щилди отключён. Не забудьте снова включить его командой /noAttack.',
    hu:
      'Nagyszerű! A antispam-bot letiltva. ne felejtsd el kikapcsolni ezt a módot a /noAttack paranccsal.',
    fr:
      "Super! antispam-bot est maintenant désactivé. N'oubliez pas de désactiver ce mode via la commande /noAttack.",
    bg:
      'Страхотно! antispam-bot в момента е деактивиран! Не забравяйте да изключите този режим с /noAttack.',
  },
  noAttack_false: {
    en: 'Great! antispam-bot is now on.',
    es: '¡Entendido! Ahora antispam-bot está activo.',
    ca: "Molt bé, a partir d'ara en antispam-bot està actiu i vigilant aquest xat.",
    br: 'Boa! antispam-bot está ativado agora.',
    he: 'מעולה! antispam-bot דלוק כעת.',
    no: 'Supert! antispam-bot er nå aktivert.',
    ru: 'Отлично! Щилди включён.',
    yue: ' 正！antispam-bot 已經開咗。',
    hu: 'Nagyszerű! a Shieldly újra engedélyezve van.',
    fr: 'Super! antispam-bot est maintenant activé!',
    bg: 'Чудесно! antispam-bot вече е включен.',
  },
  noChannelLinks_true: {
    en:
      'Great! antispam-bot will now delete messages that link to telegram channels.',
    ru:
      'Отлично! Щилди теперь будет удалять сообщения с ссылками на Телеграм-каналы.',
    es:
      '¡Genial! Ahora antispam-bot eliminará todos los mensajes que contengan enlaces a otros canales de Telegram.',
    ca:
      "D'acord, a partir d'ara en antispam-bot esborrarà tots el missatges que contenguin enllaços a altres canals de Telegram.",
    br:
      'Boa! Agora, o antispam-bot excluirá as mensagens vinculadas aos canais do telegram.',
    he: 'מעולה! מעכשיו antispam-bot ימחק הודעות עם קישור לערוץ טלגרם.',
    no:
      'Supert! antispam-bot vil nå slette meldinger som lenker til andre Telegram-kanaler.',
    yue:
      '好。由而家開始，antispam-bot 會自動刪除所有連結到其它 Telegram 頻道嘅訊息。',
    hu:
      'Nagyszerű! A antispam-bot mostantól törli az összes olyan linket, ami másik telegram csatornára hivatkozik.',
    fr:
      'Super! antispam-bot va maintenant supprimer les messages qui renvoient vers des autres groupes telegram. ',
    bg:
      'Чудесно! antispam-bot  ще изтрие съобщения, които водят към Telegram групи и канали. ',
  },
  noChannelLinks_false: {
    en:
      'Great! antispam-bot will not delete messages that link to telegram channels.',
    ru:
      'Отлично! Щилди теперь не будет удалять сообщения с ссылками на Телеграм-каналы.',
    es:
      '¡Genial! Ahora antispam-bot no eliminará ningún mensaje que contenga enlaces a otros canales de Telegram.',
    ca:
      "D'acord, a partir d'ara en antispam-bot ja no esborrarà cap missatge que contengui enllaços a altres canals de Telegram.",
    br:
      'Boa! O antispam-bot não excluirá as mensagens vinculadas aos canais do telegram.',
    he: 'מעולה! antispam-bot לא ימחק הודעות עם קישור לערוצים בטלגרם.',
    no:
      'Supert! antispam-bot vil ikke slette meldinger som lenker til andre Telegram-kanaler.',
    yue: '好。antispam-bot 而家唔會自動刪除所有連結到其它 Telegram 頻道嘅訊息。',
    hu:
      'Nagyszerű! A antispam-bot mostantól nem törli az olyan linket, ami másik telegram csatornára hivatkozik.',
    fr:
      "C'est noté! antispam-bot ne supprimera plus les messages qui partagerons des liens vers des groupes telegram.",
    bg:
      'Чудесно! antispam-bot няма да изтрива съобщения, които водят към Telegram групи и канали. ',
  },
  viewConfig: {
    en: 'Current config:',
    ru: 'Текущие настройки:',
    es: 'Esta es la configuración actual:',
    ca: 'Aquesta és la configuració actual:',
    br: 'Configuração atual:',
    he: 'הגדרות נוכחיות:',
    no: 'Gjeldende konfigurasjon:',
    yue: '目前嘅設定：',
    hu: 'Jelenlegi konfiguráció:',
    fr: 'Configuration actuelle: ',
    bg: 'Текуща конфигурация:',
  },
  allowInvitingBots_true: {
    en: 'Nice! Users can invite bots now.',
    ru: 'Отлично! Пользователи теперь могут приглашать ботов.',
    es: '¡Muy bién! Ahora los usuarios pueden invitar a bots.',
    ca:
      "Fantàstic! A partir d'ara els usuaris poden convidar robots a la conversa.",
    br: 'Boa! Os usuários podem convidar bots agora.',
    he: 'מעולה! משתמשים יכולים להזמין בוטים עכשיו.',
    no: 'Supert! Brukere kan nå invitere botter.',
    yue: '好。由而家開始，羣組成員可以將任何機械人加入羣組。',
    hu: 'Szép! Mostantól a felhasználók meghívhatnak botokat is.',
    fi: 'Selvä! Käyttäjät voivat nyt kutsua botteja.',
    fr: 'Parfait! les utilisateurs peuvent maintenant inviter des bots.',
    bg: 'Чудесно! Потребителите могат да вкарват ботове в групата.',
  },
  allowInvitingBots_false: {
    en: 'Nice! Users cannot invite bots now.',
    ru: 'Отлично! Пользователи теперь не могут приглашать ботов.',
    es: '¡Muy bién! Ahora los usuarios no podrán invitar a bots.',
    ca:
      "Fantàstic! A partir d'ara els usuaris ja no poden convidar robots a la conversa.",
    br: 'Boa! Os usuários não podem convidar bots agora.',
    he: 'מעולה! משתמשים לא יוכלו להזמין בוטים עכשיו.',
    no: 'Supert! Brukere kan nå ikke invitere botter.',
    yue: '好。由而家開始，羣組成員禁止將任何機械人加入羣組。',
    hu: 'Szép! Mostantól a felhasználók nem hívhatnak meg botokat.',
    fi: 'Selvä! Käyttäjät eivät voi nyt kutsua botteja.',
    fr: 'Parfait! Les utilisateurs ne pourront plus inviter des bots.',
    bg: 'Чудесно! Потребителите НЯМА да могат, да вкарват ботове в групата.',
  },
  greetingButtons: {
    en:
      'Reply to this message (and I mean reply(!), not just send a separate message) with up to 10 links in format below to setup greeting buttons. Reply with anything else to remove all buttons.\n\nDuckDuckGo - https://duckduckgo.com\nWikipedia - https://wikipedia.com\n\nCurrent buttons:',
    ru:
      'Ответьте на это сообщение (и я имею ввиду ответьте(!), а не просто отправьте отдельное сообщение) с не более чем 10 ссылками в формате ниже, чтобы установить кнопки приветствию. Ответьте любым другим сообщением, чтобы удалить все кнопки.\n\nDuckDuckGo - https://duckduckgo.com\nWikipedia - https://wikipedia.com\n\nТекущие кнопки:',
    es:
      'Responde a este mensaje (si, si, responde!, no escribas un mensaje a parte) con hasta 10 enlaces, con el formato que ves más abajo, para configurar los botones de bienvenida. Responde cualquier otra cosa para eliminar todos los botones.\n\nDuckDuckGo - https://duckduckgo.com\nWikipedia - https://wikipedia.com\n\nBotones configurados actualmente:',
    ca:
      "Respon a aquest missatge (si, ha de ser una resposta, no em serveix de res que m'escriguis un missatge a part), amb un llistat de fins a 10 enllaços, de l'estil que veus més abaix, per a configurar els botons de benvinguda. Respon qualsevol altra cosa per a suprimir tots els botons de cop.\n\nDuckDuckGo - https://duckduckgo.com\nWikipedia - https://wikipedia.com\n\nAquests són els botons que tens configurats actualment:",
    br:
      'Responda a esta mensagem (e eu quero dizer resposta(!), Não apenas envie uma mensagem separada) com até 10 links no formato abaixo para configurar os botões de saudação. Responda com qualquer outra coisa para remover todos os botões.\n\nDuckDuckGo - https://duckduckgo.com\nWikipedia - https://wikipedia.com\n\nBotões atuais:',
    he:
      'השב להודעה הזאת (ואני מתכוון לתגובה(!), לא סתם לשלוח הודעה נפרדת) עם עד 10 קישורים בפורמט למטה כדי להגדיר כפתורי ברכה. השב כל דבר אחר כדי להסיר את כל הכפתורים.\n\nDuckDuckGo - https://duckduckgo.com\nWikipedia - https://wikipedia.com\n\nכפתורים נוכחיים:',
    no:
      'Svar på denne meldingen (og jeg mener svar(!), ikke bare send en separat melding) med opp til 10 lenker i formatet under for å sette opp knapper under hilsenen. Svar med hva som helst annet for å fjerne alle knappene.\n\nDuckDuckGo - https://duckduckgo.com\nWikipedia - https://wikipedia.com\n\nNåværende knapper:',
    yue:
      'reply 呢條訊息（用回覆！唔好發一條獨立嘅訊息），用下邊呢種格式，爲打招呼嘅訊息加入最多 10 個連結至外部嘅掣。回覆其它格式嘅內容將移除全部嘅掣。\n\nDuckDuckGo - https://duckduckgo.com\nWikipedia - https://wikipedia.com\n\n目前設定咗嘅掣：',
    hu:
      'Válaszolj erre az üzenetre (és úgy értem válaszolj(!), ne csak egy külön üzenetet küld) max 10 linkkel a lenti formátum alapján az üdvözlő gomb beállításához. Bármilyen más válasszal eltávolítod az összes gombot.\n\nDuckDuckGo - https://duckduckgo.com\nWikipedia - https://wikipedia.com\n\nCurrent buttons:',
    fr:
      "Répondez à ce message (et je veux dire répondez (!), pas seulement envoyez un message séparé) avec jusqu'à 10 liens au format ci-dessous pour configurer les boutons d'accueil. Répondez avec n'importe quoi pour supprimer tous les boutons. \n\nDuckDuckGo — https://duckduckgo.com\nWikipedia — https://wikipedia.com\n\nCurrent buttons:",
    bg:
      'Отговорете на това съобщение (и имам предвид да се отговори (reply), а не с отделно съобщение) с до 10 линка в посочения по долу формат за да сетъпнете бутоните. \n\nDuckDuckGo - https://duckduckgo.com\nWikipedia - https://wikipedia.com\n\nТекущи бутони:',
  },
  greetingButtonsEmpty: {
    en: 'No buttons',
    ru: 'Нет кнопок',
    es: 'No hay botones',
    ca: 'No hi ha botons',
    br: 'Sem botões',
    he: 'אין כפתורים',
    no: 'Ingen knapper',
    yue: '冇掣',
    hu: 'Nincsenek gombok',
    fi: 'Ei painikkeita',
    fr: 'Pas de boutons',
    bg: 'Без бутони',
  },
  skipOldUsers_true: {
    en: "Nice! Old Telegram users won't get asked to pass captcha anymore!",
    ru:
      'Отлично! Старым пользователям Телеграма больше не надо будет проходить капчу!',
    hu:
      'Nagyszerű! A régi Telegram felhasználókat nem kéri a rendszer authentikálásra ezentúl!',
    fr:
      'Super! Les anciens utilisateurs de Telegram ne seront plus invités à passer le captcha !',
  },
  skipOldUsers_false: {
    en: "Nice! Telegram account age won't affect captcha anymore!",
    ru: 'Отлично! Возраст Телеграм-аккаунта больше не влияет на капчу!',
    hu:
      'Nagyszerű! A Telegram fuiók kora nem befolyásolja ezentúl a captcha-t!',
    fr:
      "Super! L'ancienneté du compte de telegram n'affectera plus le captcha !",
    bg:
      'Чудесно! Съществуващите потребители на Telegram групата, няма да бъдат молени да преминат captcha!',
  },
  skipVerifiedUsers_true: {
    en:
      "Nice! Telegram users who have ever passed a captcha in any chat won't get asked to pass captcha anymore!",
    ru:
      'Отлично! Пользователям Телеграма, которые прошли капчу в любом чате когда-либо, больше не надо будет проходить капчу!',
    hu:
      'Szép! Azok a Telegram felhasználók, akik bármelyik chat-ben átmentek a captcha-n, nem kapnak kezdő captcha-t nálunk!',
    fr:
      "Super! Les utilisateurs de telegram ayant déjà passé un captcha dans d'autres groupes, n'auront plus à passer le captcha!",
  },
  skipVerifiedUsers_false: {
    en: "Nice! Passing captcha before won't affect future captchas anymore!",
    ru: 'Отлично! Прохождение капчи больше не влияет на будущие капчи!',
    hu:
      'Szép! Azok a Telegram felhasználók is kapnak captcha-t, akik bármelyik chat-ben átmentek a captcha-n!',
    bg:
      'Чудесно! Потребителите на Telegram групата, които някога са преминали captcha във всеки чат, вече няма да бъдат помолени да преминат captcha!',
  },
  setConfigHelp: {
    en:
      'Please, send /setConfig command in the following format:\n\n<code>/setConfig\nlanguage: en\ncaptchaType: image\ntimeGiven: 60\n...</code>\n\nYou can use the info from /viewConfig.',
    ru:
      'Пожалуйста, пришлите команду /setConfig в следующем формате:\n\n<code>/setConfig\nlanguage: en\ncaptchaType: image\ntimeGiven: 60\n...</code>\n\nВы можете использовать информацию из /viewConfig.',
    hu:
      'Kérlek, küld a /setConfig parancsot a következő formában:\n\n<code>/setConfig\nlanguage: en\ncaptchaType: image\ntimeGiven: 60\n...</code>\n\nHasználhatod a /viewConfig alapján adott választ a konfigurációban.',
    fr:
      'Veuillez envoyer la commande /setConfig dans le format suivant:\n\n<code>/setConfig\nlanguage: en\ncaptchaType: image\ntimeGiven: 60\n...</code>\n\nVous pouvez utiliser les informations via la commande /viewConfig.',
    bg:
      'Моля, изпратете командата /setConfig в следния формат: \n\n<code>/setConfig\nlanguage: en\ncaptchaType: image\ntimeGiven: 60\n ...</code>\n\nYou и ще можеш, да използвате информацията от /viewConfig.',
  },
  noChatFound: {
    en: 'Chat not found',
    ru: 'Чат не найден',
    fr: "Le groupe n'existe pas",
    bg: 'Групата не е открита',
  },
  thisIsNotAReply: {
    en: 'Just to clarify: this is not a reply',
    ru: 'Уточняю: это не ответ на сообщение',
    fr: "Désolé mais ce n'est pas une réponse correcte",
    bg: 'Само да поясня: това не е отговор',
  },
  thisIsAReply: {
    en: 'This is a reply',
    ru: 'А вот это ответ',
    fr: "C'est une réponse",
    bg: 'Това е отговор',
  },
  commandsInPrivateWarning: {
    en:
      'You are changing the settings in private messages. This will not affect any group chats. If you want to set up a group chat, send configuration commands directly to the group chat. You can delete the configuration messages afterwards.',
    ru:
      'Вы меняете настройки в личных сообщениях с ботом. Эти настройки не повлияют ни на какие групповые чаты. Если вы хотите настроить групповой чат, отправляйте команды настроек прямо в групповой чат. Вы можете удалить сообщения настроек после настройки.',
    fr:
      "Vous avez modifié les paramètres des messages privés. Cela n'aura aucune incidence sur les discussions des autres groupes. Si vous souhaitez mettre en place une discussion de groupe, envoyez les commandes de configuration directement à la discussion du groupe. Vous pourrez ensuite supprimer les messages de configuration.",
    bg:
      'Променихте настройките за личните съобщения. Това няма да засегне груповите чатове. Ако искате да настроите групов чат, изпратете команди за конфигуриране директно до груповия чат. Можете да изтриете конфигурационните съобщения след това.',
  },
  banForFastRepliesToPosts_true: {
    en:
      "Nice! antispam-bot will ban (or kick) all users who reply to your channel's posts 5 seconds after the post is created.",
    ru:
      'Отлично! Щилди будет банить (или кикать) пользователей, которые отвечают на посты вашего канала в течение 5 секунд после создания постов.',
    bg:
      'Яко! antispam-bot, ще забрани (или ще "изрита") всеки потребител, които отговорят на публикациите в канала ви 5 секунди след създаването на публикацията.',
  },
  banForFastRepliesToPosts_false: {
    en:
      "Nice! antispam-bot will not ban (or kick) all users who reply to your channel's posts 5 seconds after the post is created.",
    ru:
      'Отлично! Щилди не будет банить (или кикать) пользователей, которые отвечают на посты вашего канала в течение 5 секунд после создания постов.',
    bg:
      'Яко! antispam-bot няма да забранява (или да "изрита") никой потребител, които отговарят на публикациите на канала ви 5 секунди след създаването на публикацията.',
  },
  banNewTelegramUsers_true: {
    en:
      'Nice! antispam-bot will ban (or kick) all newcomers with Telegram ID greater than 1 000 000 000.',
    ru:
      'Отлично! Щилди будет банить (или кикать) пользователей, у которых Телеграм ID больше 1 000 000 000.',
    bg:
      'Чудесно! antispam-bot, ще забрани (или ще "изрита") всички новодошли с идентификатор на Telegram над 1 000 000 000. ',
  },
  banNewTelegramUsers_false: {
    ru:
      'Отлично! Щилди не будет банить (или кикать) пользователей, у которых Телеграм ID больше 1 000 000 000.',
    en:
      'Nice! antispam-bot will no ban (or kick) all newcomers with Telegram ID greater than 1 000 000 000.',
    bg:
      'Чудесно! antispam-bot няма да забранява (или да "изрита") никой новодошъл с Telegram ID над 1 000 000 000.',
  },
  reportToAdmins: {
    en: 'Reporting to ',
    es: 'Reportando a '
  },
  rulesText: {
    en: '- Be polite and helpful.\n\n- No NSFW/NSFL posts, no SPAM, no personal insults/discrimination.\n\n- Check the rules in the wiki.',
    es: '- Sea cortés y servicial.\n\n- Utilice las etiquetas necesarias para sus #consultas, temas de #soporte, etc.\n\n- Respete a los demás cumpliendo a detalle el reglamento.'
    //es: '[Reglamento](https://es.opensuse.org/openSUSE:Telegram_Reglamento)\n\n*1.* Sea cortés y servicial.\n\n*2.* Consulte previamente en la web soluciones a su problema.\n\n*3.* Para consultas técnicas aplique la etiqueta #soporte más otra que describa al software en cuestión (p. ej. #plasma) antes o después de formular su pregunta.\n\n*4.* Si necesita compartir textos largos (como logs), *no los pegue en el grupo*; use una aplicación web del tipo pastebin como SUSE Paste y comparta el enlace generado.\n\n*5.* Para consultar la disponibilidad e información de un paquete en los repositorios oficiales, ejecute el comando respectivo a su distribución: `zypper se -d leap nombredelpaquete`.\n\n*6.* Se prohíbe la distribución de contenidos audiovisuales crudos, fuertes o controversiales, por ejemplo: spam, gore, pornografía, pedofilia; intolerancia religiosa, política, racial, etc.\n\n*7.* En caso de transgresión de los puntos 3, 4 y 6 por *tercera ocasión*, se aplicará inmediatamente la *expulsión* del infractor.\n\n*8.* Para reportar un mensaje (como spam) a los administradores, escriba: `/report@opensuse_antispam_bot`.'
  },
  rulesButton: {
    es: '📜 Reglamento',
    en: '📜 Rules'
  },
  rulesURL: {
    en: 'https://en.opensuse.org/openSUSE:Telegram_Rules',
    es: 'https://es.opensuse.org/openSUSE:Telegram_Reglamento'
  },
  telegramChannelText: {
    en: 'Check more groups and channels [here](https://t.me/opensuse_telegram)',
    es: 'Más grupos y canales [aquí](https://t.me/opensuse_telegram)'
  }    
}
