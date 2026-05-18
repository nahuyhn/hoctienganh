const speakingPastQuestions = [
  "Do you prefer team sports or individual sports? Why?",
  "What is your favourite app or website? Why do you like it?",
  "What skills are important for your future job?",
  "Why do people choose to eat fast food?",
  "Where would you prefer to live? Why?"
];

const plans = [
  {
    day: 1,
    phase: "Khởi động",
    title: "Biết đề thi và chẩn đoán nhẹ",
    topic: "Exam overview + personal baseline",
    grammar: "Câu trả lời ngắn nhưng đủ ý: answer + reason + example",
    skill: "Làm quen Reading, Writing, Listening, Speaking",
    time: "60–75 phút",
    focus: "Không học nặng. Mục tiêu là biết mình yếu ở đâu trước khi vào lộ trình.",
    vocab: ["exam", "candidate", "question", "answer", "instruction", "information", "practice", "mistake", "progress", "goal", "skill", "listen", "speak", "write", "read", "improve", "remember", "review", "test", "time"],
    tasks: [
      "Đọc nhanh cấu trúc PET: Reading 45 phút, Writing 45 phút, Listening 30 phút, Speaking 10–12 phút.",
      "Làm thử 10 câu Reading bất kỳ để đo tốc độ, chưa cần áp lực điểm.",
      "Nghe 5 câu/đoạn ngắn bất kỳ trong đề, ghi xem mình mất thông tin ở đâu.",
      "Trả lời miệng 3 câu: giới thiệu bản thân, môn học thích nhất, mục tiêu thi PET.",
      "Ghi 3 lỗi hoặc điểm yếu đầu tiên vào Mistake Bank."
    ],
    writing: "Write 5 sentences about your English goal this month.",
    speaking: ["Why are you taking the PET exam?", "Which English skill is the most difficult for you?"],
    examUse: "Chỉ dùng đề để chẩn đoán, không làm full test."
  },
  {
    day: 2,
    phase: "Nền từ vựng",
    title: "School & Education",
    topic: "School, subjects, lessons",
    grammar: "Present simple + adverbs of frequency",
    skill: "Reading Part 1: notices/messages in school context",
    time: "70–85 phút",
    focus: "Học từ theo bối cảnh trường học vì PET for Schools hay xoay quanh đời sống học sinh.",
    vocab: ["school", "class", "classroom", "subject", "lesson", "teacher", "student", "homework", "exam", "mark", "library", "project", "science", "history", "geography", "biology", "chemistry", "physics", "information", "instruction", "notice", "course", "level", "practice"],
    tasks: [
      "Học từ vựng School & Education, tự đặt 8 câu về trường của mình.",
      "Đọc 5 notices/messages ngắn, gạch keyword chỉ mục đích chính của thông báo.",
      "Viết 6 câu dùng usually/often/sometimes/never về lịch học hằng ngày.",
      "Nói 60 giây: describe your school day.",
      "Ghi lại từ nào dễ nhầm với tiếng Việt hoặc phát âm sai."
    ],
    writing: "Write a short message to a friend about a school project.",
    speaking: ["What subject do you enjoy most?", "How much homework do you usually have?"],
    examUse: "Mini Reading Part 1, không làm full reading."
  },
  {
    day: 3,
    phase: "Nền giao tiếp",
    title: "Family, Friends & Daily Life",
    topic: "People around you",
    grammar: "Present simple vs present continuous",
    skill: "Speaking Part 1: trả lời cá nhân rõ, không cụt",
    time: "70–85 phút",
    focus: "Tập nói câu cá nhân trước, vì Speaking Part 1 cần phản xạ tự nhiên.",
    vocab: ["family", "friend", "classmate", "neighbour", "parent", "cousin", "aunt", "uncle", "teenager", "people", "hobby", "habit", "daily", "morning", "afternoon", "evening", "weekend", "usually", "sometimes", "together", "kind", "friendly", "helpful", "sociable"],
    tasks: [
      "Học vocab về người và sinh hoạt hằng ngày, chia thành people/actions/adjectives.",
      "Nói 5 câu về người thân hoặc bạn thân, mỗi câu thêm 1 lý do.",
      "Luyện cặp thì: I usually..., but today I am...",
      "Viết đoạn 80 từ về một người bạn hoặc một ngày cuối tuần.",
      "Ghi lỗi phát âm, lỗi thiếu s/es, lỗi thiếu lý do trong câu nói."
    ],
    writing: "Describe a friend you like spending time with.",
    speaking: ["Who do you spend most time with?", "What do you usually do at weekends?"],
    examUse: "Speaking Part 1 mini."
  },
  {
    day: 4,
    phase: "Nền từ vựng",
    title: "Food, Drink & Shopping",
    topic: "Meals, shops, prices",
    grammar: "Countable/uncountable + much/many/a lot of",
    skill: "Reading short texts + Listening numbers/prices",
    time: "75–90 phút",
    focus: "Topic này dễ xuất hiện trong Listening vì có giá tiền, giờ, địa điểm.",
    vocab: ["breakfast", "lunch", "dinner", "meal", "snack", "restaurant", "menu", "waiter", "waitress", "coffee", "juice", "vegetable", "fruit", "sandwich", "pizza", "fast food", "price", "cheap", "expensive", "cash", "pay", "receipt", "customer", "shop", "supermarket"],
    tasks: [
      "Học vocab Food/Shopping, đánh dấu từ đếm được và không đếm được.",
      "Làm 8 câu much/many/a lot of/some/any.",
      "Nghe một đoạn có giá tiền hoặc thời gian, ghi chính xác số nghe được.",
      "Trả lời câu Speaking: Why do people choose to eat fast food?",
      "Ghi lỗi nghe số, lỗi thiếu plural hoặc dùng sai much/many."
    ],
    writing: "Write an email inviting a friend to eat out after school.",
    speaking: ["Why do people choose to eat fast food?", "Do you prefer eating at home or eating out?"],
    examUse: "Listening mini về numbers/prices + Speaking đề kì trước."
  },
  {
    day: 5,
    phase: "Nền từ vựng",
    title: "House, Home & Places",
    topic: "Rooms, buildings, location",
    grammar: "Prepositions of place + there is/there are",
    skill: "Listening Part 3: location words",
    time: "75–90 phút",
    focus: "Học vị trí và nơi chốn trước khi sang Travel/Town để không bị rối.",
    vocab: ["house", "home", "room", "bedroom", "bathroom", "kitchen", "living room", "garden", "window", "door", "desk", "chair", "sofa", "shelf", "upstairs", "downstairs", "near", "next to", "opposite", "between", "behind", "in front of", "flat", "neighbour"],
    tasks: [
      "Vẽ sơ đồ phòng của mình và ghi 12 câu có prepositions.",
      "Luyện there is/there are với đồ vật trong nhà.",
      "Nghe một đoạn mô tả vị trí, ghi lại nơi/đồ vật được nhắc tới.",
      "Nói 60 giây: describe your favourite room.",
      "Ghi lại 5 prepositions mình còn nhầm."
    ],
    writing: "Describe your room in 80–100 words.",
    speaking: ["Where would you prefer to live? Why?", "Describe a place where you feel comfortable."],
    examUse: "Listening Part 3 mini + Speaking đề kì trước."
  },
  {
    day: 6,
    phase: "Mở rộng topic",
    title: "Travel & Transport",
    topic: "Trips, transport, stations",
    grammar: "Past simple for travel experiences",
    skill: "Reading Part 2: matching people with places/trips",
    time: "80–95 phút",
    focus: "Travel cần nhiều danh từ cụ thể, nên học theo tình huống: book, go, arrive, return.",
    vocab: ["travel", "trip", "journey", "holiday", "airport", "station", "bus stop", "train", "plane", "flight", "ticket", "passport", "luggage", "suitcase", "map", "tourist", "guide", "hotel", "reservation", "arrive", "depart", "return", "delay", "public transport", "traffic"],
    tasks: [
      "Học vocab Travel theo 4 nhóm: documents, transport, places, problems.",
      "Viết 10 câu Past simple về một chuyến đi từng có.",
      "Làm mini Reading Part 2: nối nhu cầu người với địa điểm/dịch vụ.",
      "Nói 60 giây: a trip you remember.",
      "Ghi lỗi regular/irregular verbs."
    ],
    writing: "Write an email telling a friend about a short trip.",
    speaking: ["Do you like travelling by bus or by car?", "Tell me about a place you visited."],
    examUse: "Reading Part 2 mini."
  },
  {
    day: 7,
    phase: "Mở rộng topic",
    title: "Weather & Natural World",
    topic: "Weather, seasons, nature",
    grammar: "Future with will/going to for plans and predictions",
    skill: "Listening: weather, plans, changes",
    time: "70–85 phút",
    focus: "Thời tiết thường đi cùng kế hoạch, nên học từ + mẫu dự đoán/kế hoạch.",
    vocab: ["weather", "sunny", "cloudy", "windy", "rain", "storm", "snow", "temperature", "forecast", "hot", "cold", "warm", "cool", "season", "spring", "summer", "autumn", "winter", "nature", "forest", "river", "mountain", "beach", "lake", "countryside"],
    tasks: [
      "Học từ thời tiết và nói thời tiết hôm nay bằng 5 câu.",
      "Luyện will/going to: prediction vs plan.",
      "Nghe một đoạn dự báo/thay đổi kế hoạch, ghi keyword.",
      "Viết 80 từ: plans for a weekend if the weather is good.",
      "Review từ ngày 2 và ngày 4."
    ],
    writing: "Write a note about weekend plans and the weather.",
    speaking: ["What weather do you like most?", "What can people do on rainy days?"],
    examUse: "Listening mini."
  },
  {
    day: 8,
    phase: "Mở rộng topic",
    title: "Sport, Health & Exercise",
    topic: "Sports, fitness, body, health",
    grammar: "should/shouldn't + have to/must",
    skill: "Speaking Part 2: describe a picture simply",
    time: "80–95 phút",
    focus: "Sport xuất hiện trong đề Speaking kì trước nên hôm nay luyện sâu cách nêu lựa chọn và lý do.",
    vocab: ["sport", "team", "player", "match", "competition", "win", "lose", "score", "goal", "coach", "exercise", "fitness", "healthy", "tired", "doctor", "medicine", "pain", "headache", "stomach ache", "run", "swim", "cycling", "gym", "train", "take part"],
    tasks: [
      "Học vocab Sport/Health, chia thành sports/actions/health problems.",
      "Luyện should/shouldn't: give advice for a healthy lifestyle.",
      "Trả lời câu đề cũ: team sports or individual sports.",
      "Mô tả 1 tranh thể thao tưởng tượng: who/where/action/feeling.",
      "Ghi lỗi phát âm các từ sport, score, exercise, healthy."
    ],
    writing: "Write advice to a friend who wants to get fit.",
    speaking: ["Do you prefer team sports or individual sports? Why?", "How can students stay healthy?"],
    examUse: "Speaking Part 1 + Part 2."
  },
  {
    day: 9,
    phase: "Mở rộng topic",
    title: "Entertainment & Media",
    topic: "Films, music, websites, apps",
    grammar: "like/love/enjoy/prefer + -ing",
    skill: "Reading: main idea and opinion",
    time: "75–90 phút",
    focus: "Topic app/website có trong đề Speaking kì trước, cần nói được vì sao thích và dùng để làm gì.",
    vocab: ["film", "music", "concert", "cinema", "actor", "actress", "song", "band", "magazine", "newspaper", "website", "app", "online", "download", "upload", "message", "video", "photograph", "camera", "game", "cartoon", "programme", "series", "interesting", "boring"],
    tasks: [
      "Học vocab Media, tự nhóm thành entertainment và technology.",
      "Viết 8 câu với enjoy/prefer/love + V-ing.",
      "Đọc một review ngắn, tìm ý kiến tích cực/tiêu cực.",
      "Trả lời câu đề cũ: favourite app or website.",
      "Ghi 3 cụm dùng được trong Speaking: I use it to..., It helps me..., The best thing is..."
    ],
    writing: "Write a short review of an app, film, song or website.",
    speaking: ["What is your favourite app or website? Why do you like it?", "Do you prefer watching films at home or at the cinema?"],
    examUse: "Reading opinion mini + Speaking đề kì trước."
  },
  {
    day: 10,
    phase: "Mở rộng topic",
    title: "Work, Jobs & Future",
    topic: "Jobs, future skills, workplace",
    grammar: "want to / would like to / hope to",
    skill: "Writing email: plans and future job",
    time: "80–95 phút",
    focus: "Câu hỏi future job có trong đề cũ, nên học từ và khung trả lời rõ ràng.",
    vocab: ["job", "work", "career", "future", "skill", "company", "manager", "teacher", "doctor", "engineer", "designer", "assistant", "salary", "apply", "application", "interview", "experience", "professional", "responsible", "creative", "confident", "communication", "teamwork", "problem", "decision"],
    tasks: [
      "Học vocab Work & Jobs, chọn 8 từ liên quan nghề mình thích.",
      "Viết 10 câu với I want to / I would like to / I hope to.",
      "Trả lời câu đề cũ: skills for your future job.",
      "Viết email 100 từ hỏi bạn về kế hoạch nghề nghiệp.",
      "Ghi lỗi dùng future: will vs want to vs would like to."
    ],
    writing: "Write an email about a job you would like to do in the future.",
    speaking: ["What skills are important for your future job?", "Would you like to work alone or with other people?"],
    examUse: "Writing Part 1 mini + Speaking đề kì trước."
  },
  {
    day: 11,
    phase: "Mở rộng diễn đạt",
    title: "Feelings, Opinions & Experiences",
    topic: "Adjectives and personal opinions",
    grammar: "because/so/although + opinion phrases",
    skill: "Speaking: extend answers naturally",
    time: "75–90 phút",
    focus: "Đạt B1 không cần câu quá phức tạp, nhưng cần biết thêm lý do và ví dụ.",
    vocab: ["happy", "worried", "nervous", "excited", "bored", "boring", "interested", "interesting", "surprised", "confused", "confident", "friendly", "serious", "relaxed", "tired", "difficult", "easy", "useful", "important", "wonderful", "awful", "opinion", "reason", "example", "experience"],
    tasks: [
      "Học cặp -ed/-ing adjectives: bored/boring, interested/interesting.",
      "Luyện khung: I think..., because..., For example...",
      "Nói 8 câu về cảm xúc khi học tiếng Anh và khi thi.",
      "Đọc một đoạn ngắn, gạch từ thể hiện ý kiến/cảm xúc.",
      "Ghi lỗi câu quá ngắn trong Speaking."
    ],
    writing: "Write about an experience that made you excited or nervous.",
    speaking: ["What makes you feel nervous?", "Do you think English is useful? Why?"],
    examUse: "Speaking Part 1 answer extension."
  },
  {
    day: 12,
    phase: "Review 1",
    title: "Ôn tập topic 1–11",
    topic: "Mixed review",
    grammar: "Present, past, future, basic connectors",
    skill: "Mini mixed test",
    time: "85–100 phút",
    focus: "Não cần gom lại kiến thức trước khi học grammar sâu hơn.",
    vocab: ["review", "mistake", "topic", "school", "family", "food", "house", "travel", "weather", "sport", "health", "media", "job", "future", "opinion", "because", "although", "example", "improve", "remember"],
    tasks: [
      "Ôn lại từ được đánh dấu khó từ ngày 2–11.",
      "Làm mini test 30–40 phút: Reading 10 câu + Listening 10 câu + Writing 80 từ.",
      "Tự chấm: lỗi từ vựng, lỗi grammar, lỗi nghe, lỗi thiếu ý.",
      "Luyện lại 5 câu Speaking đề kì trước, mỗi câu 45–60 giây.",
      "Chọn 3 dạng yếu nhất để ưu tiên từ ngày 13."
    ],
    writing: "Rewrite one old paragraph and make it clearer.",
    speaking: speakingPastQuestions,
    examUse: "Mini mixed test, không full đề."
  },
  {
    day: 13,
    phase: "Grammar dùng được",
    title: "Tenses for Writing",
    topic: "Present/Past/Future in real communication",
    grammar: "Present simple, present continuous, past simple, future forms",
    skill: "Writing Part 1: email clarity",
    time: "85–100 phút",
    focus: "Học thì theo mục đích giao tiếp, không học công thức rời rạc.",
    vocab: ["yesterday", "today", "tomorrow", "usually", "currently", "last", "next", "ago", "already", "yet", "finish", "start", "plan", "visit", "invite", "meet", "study", "practise", "join", "remember"],
    tasks: [
      "Viết 4 nhóm câu: habit, now, past experience, future plan.",
      "Sửa 10 câu chia thì sai từ lỗi của mình nếu có.",
      "Viết email 100 từ có đủ past + present + future.",
      "Đọc lại bài viết, gạch động từ chính trong từng câu.",
      "Ghi lỗi tense vào Mistake Bank."
    ],
    writing: "Reply to a friend: say what you did yesterday, what you are doing now, and what you will do tomorrow.",
    speaking: ["What did you do last weekend?", "What are you going to do after the exam?"],
    examUse: "Writing Part 1 controlled practice."
  },
  {
    day: 14,
    phase: "Grammar dùng được",
    title: "Comparatives & Superlatives",
    topic: "Compare choices",
    grammar: "bigger than, more interesting than, the best, the most useful",
    skill: "Speaking choices + Reading opinion",
    time: "75–90 phút",
    focus: "PET hay hỏi chọn A hay B. So sánh giúp câu trả lời dài và tự nhiên hơn.",
    vocab: ["better", "worse", "best", "worst", "more", "less", "most", "least", "interesting", "useful", "popular", "comfortable", "expensive", "cheap", "easy", "difficult", "fast", "slow", "healthy", "important"],
    tasks: [
      "Viết 15 câu so sánh về school/food/apps/transport/sports.",
      "Luyện câu: I prefer A because it is more... than B.",
      "Đọc một đoạn opinion, tìm 5 từ so sánh.",
      "Trả lời lại 2 câu đề cũ bằng comparative.",
      "Ghi lỗi spelling: easier, bigger, more interesting."
    ],
    writing: "Compare two places where students can study.",
    speaking: ["Is studying at home better than studying at school?", "Which is more useful: a dictionary or a translation app?"],
    examUse: "Speaking Part 3 discussion language."
  },
  {
    day: 15,
    phase: "Grammar dùng được",
    title: "Modals for Advice and Rules",
    topic: "Advice, obligation, permission",
    grammar: "should, must, have to, can, may",
    skill: "Writing advice + Speaking opinion",
    time: "75–90 phút",
    focus: "Modal verbs dùng nhiều trong email, advice và Speaking.",
    vocab: ["advice", "rule", "permission", "allowed", "forbidden", "necessary", "important", "safe", "dangerous", "healthy", "careful", "prepare", "practise", "rest", "sleep", "exercise", "arrive", "late", "early", "on time"],
    tasks: [
      "Làm bảng phân biệt should/must/have to/can.",
      "Viết 10 lời khuyên cho một bạn chuẩn bị thi PET.",
      "Viết email 100 từ khuyên bạn cách học trong 1 tuần.",
      "Nói 60 giây: what students should do before an exam.",
      "Ghi lỗi dùng must/have to quá mạnh hoặc quá nhẹ."
    ],
    writing: "Give advice to a friend who is worried about the exam.",
    speaking: ["What should students do to prepare for exams?", "Do you have to wear a uniform at school?"],
    examUse: "Writing advice email."
  },
  {
    day: 16,
    phase: "Grammar dùng được",
    title: "Passive Voice cơ bản",
    topic: "Processes and facts",
    grammar: "be + past participle: is made, was built, are used",
    skill: "Reading gap-fill + Writing clearer sentences",
    time: "80–95 phút",
    focus: "Passive thường xuất hiện ở Reading/Writing transformation, học đủ dùng không cần quá sâu.",
    vocab: ["made", "built", "used", "created", "designed", "invented", "opened", "closed", "sold", "produced", "called", "known", "found", "written", "spoken", "recycled", "prepared", "served", "painted", "changed"],
    tasks: [
      "Nhìn 10 câu chủ động và đổi sang bị động cơ bản.",
      "Đọc gap-fill ngắn, đoán dạng từ trước khi chọn đáp án.",
      "Viết 8 câu passive về school/city/food/technology.",
      "Nói 45 giây: describe how your favourite food is made.",
      "Ghi lỗi thiếu be hoặc sai V3."
    ],
    writing: "Describe something that is made or used at school.",
    speaking: ["What things are used a lot by students?", "How is your favourite food made?"],
    examUse: "Reading gap-fill grammar focus."
  },
  {
    day: 17,
    phase: "Grammar dùng được",
    title: "Relative Clauses",
    topic: "Describe people, places and things",
    grammar: "who, which, where, that",
    skill: "Writing better sentences + Speaking description",
    time: "75–90 phút",
    focus: "Relative clauses giúp câu viết bớt đơn điệu nhưng vẫn vừa sức B1.",
    vocab: ["person", "place", "thing", "reason", "where", "who", "which", "that", "friend", "teacher", "website", "app", "room", "restaurant", "sport", "skill", "job", "city", "country", "activity"],
    tasks: [
      "Viết 12 câu dùng who/which/where về người, vật, nơi chốn.",
      "Nâng cấp 8 câu ngắn thành 4 câu dài hơn.",
      "Mô tả một người giúp mình học tốt hơn bằng relative clauses.",
      "Viết đoạn 100 từ về app/website mình thích.",
      "Ghi lỗi dùng which cho người hoặc where cho vật."
    ],
    writing: "Write about a person who has helped you learn something.",
    speaking: ["Describe a teacher who helped you.", "Describe a place where you like studying."],
    examUse: "Writing sentence quality."
  },
  {
    day: 18,
    phase: "Grammar dùng được",
    title: "too/enough, so/such, because/although",
    topic: "Explain problems and reasons",
    grammar: "too + adj, adj + enough, so/such, linking words",
    skill: "Writing coherence + Reading Part 5",
    time: "80–95 phút",
    focus: "Đây là nhóm cấu trúc rất hay dùng để giải thích ý trong Writing/Speaking.",
    vocab: ["enough", "too", "so", "such", "because", "although", "however", "therefore", "reason", "result", "problem", "solution", "easy", "hard", "fast", "slow", "expensive", "cheap", "healthy", "tasty"],
    tasks: [
      "Làm 15 câu too/enough/so/such.",
      "Viết lại 8 câu để thêm because/although/however.",
      "Làm mini Reading Part 5, chú ý từ nối và nghĩa câu.",
      "Trả lời câu fast food bằng because/although.",
      "Ghi lỗi vị trí enough và dùng so/such."
    ],
    writing: "Explain why fast food is popular but not always healthy.",
    speaking: ["Why do people choose to eat fast food?", "Is it easy enough for students to eat healthily?"],
    examUse: "Reading Part 5 + Speaking đề kì trước."
  },
  {
    day: 19,
    phase: "Ghép kỹ năng",
    title: "Reading Part 1–2 Strategy",
    topic: "Short texts and matching",
    grammar: "Keyword, purpose, synonym",
    skill: "Reading Part 1 and 2",
    time: "85–100 phút",
    focus: "Tập đọc ý chính trước, không dịch từng chữ.",
    vocab: ["notice", "message", "sign", "advertisement", "warning", "instruction", "offer", "request", "purpose", "main idea", "keyword", "synonym", "suitable", "choice", "option", "match", "information", "detail", "need", "prefer"],
    tasks: [
      "Đọc 5 short texts, hỏi: người viết muốn mình làm/biết gì?",
      "Làm 1 set Reading Part 1 hoặc 2 từ đề, bấm giờ nhẹ.",
      "Sau khi chấm, ghi vì sao đáp án sai hấp dẫn nhưng không đúng.",
      "Tạo 10 cặp synonym từ bài đọc.",
      "Ôn từ ngày 12 và ngày 16."
    ],
    writing: "Write 5 short notices/messages for school situations.",
    speaking: ["What notices do you often see at school?", "How do you choose a place to go with friends?"],
    examUse: "Reading Part 1–2 timed mini."
  },
  {
    day: 20,
    phase: "Ghép kỹ năng",
    title: "Reading Part 3–4 Strategy",
    topic: "Longer reading and multiple choice",
    grammar: "Reference words and inference",
    skill: "Reading Part 3 and 4",
    time: "85–100 phút",
    focus: "Học cách tìm chứng cứ trong bài, không chọn theo cảm giác.",
    vocab: ["paragraph", "title", "writer", "reader", "opinion", "fact", "detail", "evidence", "similar", "different", "however", "although", "therefore", "instead", "finally", "firstly", "main", "specific", "true", "false"],
    tasks: [
      "Đọc 1 bài dài, đặt tiêu đề cho từng đoạn bằng tiếng Việt trước.",
      "Làm 10 câu Reading Part 3/4, gạch dòng chứng cứ.",
      "Phân loại lỗi: hiểu sai từ, đọc thiếu dòng, suy luận quá xa.",
      "Tóm tắt bài đọc bằng 5 câu tiếng Anh đơn giản.",
      "Ghi lại 5 từ nối trong bài đọc."
    ],
    writing: "Summarise a short article in 5 simple English sentences.",
    speaking: ["Do you prefer reading short posts or long articles?", "What kind of stories do you like?"],
    examUse: "Reading Part 3–4 timed mini."
  },
  {
    day: 21,
    phase: "Ghép kỹ năng",
    title: "Reading Part 5–6 Strategy",
    topic: "Gap-fill and open cloze",
    grammar: "Collocation, grammar words, word forms",
    skill: "Reading Part 5 and 6",
    time: "85–100 phút",
    focus: "Gap-fill cần nhìn cả nghĩa lẫn cấu trúc trước/sau chỗ trống.",
    vocab: ["gap", "choose", "correct", "grammar", "vocabulary", "collocation", "preposition", "article", "pronoun", "verb", "noun", "adjective", "adverb", "phrase", "meaning", "sentence", "before", "after", "complete", "check"],
    tasks: [
      "Làm 1 set Part 5/6, trước khi chọn đáp án đoán loại từ cần điền.",
      "Ghi 10 collocations hoặc cụm hay đi cùng nhau.",
      "Ôn articles/prepositions/pronouns thường gặp.",
      "Sửa lại câu sai thành câu đúng và giải thích bằng tiếng Việt.",
      "Đánh dấu 5 lỗi cần xem lại ngày 30."
    ],
    writing: "Write 10 sentences using new collocations from today's practice.",
    speaking: ["What do you do when you do not know a word?", "Is grammar or vocabulary more difficult for you?"],
    examUse: "Reading Part 5–6 timed mini."
  },
  {
    day: 22,
    phase: "Ghép kỹ năng",
    title: "Writing Part 1: Email",
    topic: "Reply to all notes",
    grammar: "Opening, answering, asking, closing",
    skill: "Writing Part 1 full practice",
    time: "90–105 phút",
    focus: "Email phải đủ 3 ý, đúng tone, rõ ràng. Không cần câu quá phức tạp.",
    vocab: ["email", "reply", "invite", "suggest", "explain", "ask", "tell", "thank", "sorry", "because", "also", "by the way", "hope", "see you", "best wishes", "friendly", "plan", "idea", "question", "answer"],
    tasks: [
      "Học khung email: Hi..., Thanks..., About..., Also..., Why don't we..., See you soon.",
      "Viết 1 email 100 từ, bắt buộc trả lời đủ 3 notes.",
      "Tự kiểm: đủ ý chưa, có mở/đóng thư chưa, có lỗi thì động từ không.",
      "Viết lại phiên bản tốt hơn sau khi tự sửa.",
      "Lưu bài viết và lỗi phổ biến vào Mistake Bank."
    ],
    writing: "Write a 100-word email inviting a friend to a school event.",
    speaking: ["How often do you message your friends?", "Do you prefer emails or text messages?"],
    examUse: "Writing Part 1 full mini."
  },
  {
    day: 23,
    phase: "Ghép kỹ năng",
    title: "Writing Part 2: Article or Story",
    topic: "Simple structure, clear ideas",
    grammar: "Paragraphing + narrative/linking language",
    skill: "Writing Part 2 practice",
    time: "90–105 phút",
    focus: "Chọn article nếu muốn an toàn, story nếu có ý tưởng rõ. Dù chọn gì cũng cần bố cục.",
    vocab: ["article", "story", "title", "paragraph", "beginning", "middle", "ending", "first", "then", "after that", "finally", "opinion", "experience", "recommend", "describe", "interesting", "exciting", "useful", "popular", "reason"],
    tasks: [
      "Đọc 2 khung: article và story. Chọn dạng mình tự tin hơn.",
      "Viết 1 bài 100 từ, chia 3 đoạn rõ.",
      "Tự kiểm: có mở bài, phát triển ý, kết thúc chưa.",
      "Thêm 5 từ nối tự nhiên vào bài.",
      "Ghi lỗi thiếu paragraph hoặc câu quá dài."
    ],
    writing: "Write an article: The best way to learn English outside school.",
    speaking: ["Do you like writing stories?", "What is the best way to learn English?"],
    examUse: "Writing Part 2 full mini."
  },
  {
    day: 24,
    phase: "Ghép kỹ năng",
    title: "Listening Part 1–2",
    topic: "Pictures, key information, attitudes",
    grammar: "Listening for gist and detail",
    skill: "Listening Part 1 and 2",
    time: "85–100 phút",
    focus: "Nghe hai lần: lần 1 bắt ý chính, lần 2 xác nhận chi tiết. Không cố dịch toàn bộ.",
    vocab: ["listen", "hear", "recording", "speaker", "dialogue", "announcement", "picture", "choice", "detail", "main idea", "attitude", "agree", "disagree", "decide", "plan", "change", "time", "place", "number", "price"],
    tasks: [
      "Làm Listening Part 1 hoặc 2 từ đề, bấm giờ thật.",
      "Trước khi nghe, đoán loại thông tin cần bắt: place/time/feeling/action.",
      "Sau khi nghe, ghi transcript ý chính bằng tiếng Việt nếu có thể.",
      "Nghe lại câu sai, xác định từ nào làm mình chọn sai.",
      "Ghi lỗi nghe nối âm, số, hoặc distractor."
    ],
    writing: "Write 6 sentences describing what each speaker decided or preferred.",
    speaking: ["Do you find listening difficult? Why?", "What helps you understand spoken English?"],
    examUse: "Listening Part 1–2 timed mini."
  },
  {
    day: 25,
    phase: "Ghép kỹ năng",
    title: "Listening Part 3–4 + Speaking Full Review",
    topic: "Details, yes/no, speaking confidence",
    grammar: "Question answering and note completion",
    skill: "Listening Part 3–4 + Speaking Parts 1–4",
    time: "95–110 phút",
    focus: "Ngày cuối lý thuyết: gom Speaking, Listening và checklist trước khi vào full đề.",
    vocab: ["note", "complete", "information", "answer", "yes", "no", "opinion", "reason", "example", "partner", "conversation", "describe", "compare", "suggest", "agree", "disagree", "prefer", "choice", "examiner", "candidate"],
    tasks: [
      "Làm Listening Part 3/4 mini, tập ghi đáp án ngắn chính xác.",
      "Luyện lại 5 câu Speaking đề kì trước, mỗi câu 60 giây.",
      "Tập Speaking Part 2: mô tả tranh bằng who/where/action/feeling/opinion.",
      "Tập Speaking Part 3: suggest + agree/disagree + choose.",
      "Lập Pre-test checklist: 5 từ yếu, 3 grammar yếu, 2 kỹ năng yếu."
    ],
    writing: "Write your personal pre-test checklist in English.",
    speaking: speakingPastQuestions,
    examUse: "Pre-test speaking + listening review."
  },
  {
    day: 26,
    phase: "Exam Mode",
    title: "Full Practice Test 1",
    topic: "Reading + Listening timed",
    grammar: "No new grammar",
    skill: "Timed practice",
    time: "120–150 phút",
    focus: "Bắt đầu làm đề thật có bấm giờ. Hôm nay ưu tiên stamina và quản lý thời gian.",
    vocab: ["timer", "answer key", "score", "section", "part", "correct", "incorrect", "review", "mistake", "evidence", "time limit", "finish", "guess", "check", "result"],
    tasks: [
      "Làm Reading của Test 1 hoặc Test 2 trong 45 phút.",
      "Nghỉ 10 phút, sau đó làm Listening trong khoảng 30 phút.",
      "Chấm điểm bằng answer key, không chữa sâu ngay khi đang mệt.",
      "Ghi điểm từng phần và khoanh 10 câu sai đáng chữa nhất.",
      "Không học thêm kiến thức mới hôm nay."
    ],
    writing: "Only note the score and 5 biggest problems.",
    speaking: ["After the test, explain which part was most difficult and why."],
    examUse: "Full Reading + Listening Test 1/2."
  },
  {
    day: 27,
    phase: "Exam Mode",
    title: "Chữa sâu Test 1",
    topic: "Error analysis",
    grammar: "Personal weak points",
    skill: "Review and correction",
    time: "100–130 phút",
    focus: "Chữa sâu quan trọng hơn làm thêm đề. Mỗi lỗi phải biết vì sao sai.",
    vocab: ["analyse", "reason", "evidence", "keyword", "synonym", "distractor", "grammar", "vocabulary", "listening", "reading", "wrong", "correct", "improve", "repeat", "review"],
    tasks: [
      "Chữa từng câu sai trong Reading: ghi dòng chứng cứ hoặc keyword.",
      "Nghe lại các câu Listening sai 2 lần, ghi từ làm mình bị lừa.",
      "Tạo danh sách 15 từ/cụm từ từ đề vừa làm.",
      "Viết 1 email 100 từ để giữ nhịp Writing.",
      "Luyện 3 câu Speaking liên quan lỗi/topic trong đề."
    ],
    writing: "Write an email about how you prepared for a test.",
    speaking: ["What do you usually do after making a mistake?", "How can students improve their exam results?"],
    examUse: "Deep correction day."
  },
  {
    day: 28,
    phase: "Exam Mode",
    title: "Full Practice Test 2 + Writing",
    topic: "Timed test and writing output",
    grammar: "Apply what you know",
    skill: "Reading/Listening/Writing",
    time: "140–170 phút",
    focus: "Hôm nay làm đề thứ hai và thêm Writing để kiểm tra sức bền.",
    vocab: ["writing", "email", "article", "story", "paragraph", "idea", "structure", "clear", "complete", "check", "grammar", "vocabulary", "time", "score", "answer", "result"],
    tasks: [
      "Làm Reading của Test 3 hoặc Test 4 trong 45 phút.",
      "Làm Listening trong khoảng 30 phút.",
      "Viết 1 bài Writing Part 1 hoặc Part 2 trong 20–25 phút.",
      "Chấm nhanh, đánh dấu lỗi nhưng chưa cần chữa toàn bộ.",
      "Ghi điểm và cảm giác: thiếu thời gian ở đâu?"
    ],
    writing: "Choose one: email / article / story, 100 words, timed.",
    speaking: ["Which exam skill improved the most?", "Which part do you still need to practise?"],
    examUse: "Full timed practice + Writing."
  },
  {
    day: 29,
    phase: "Exam Mode",
    title: "Speaking Mock + Chữa Test 2",
    topic: "Speaking confidence and final corrections",
    grammar: "Fluency over perfection",
    skill: "Speaking Parts 1–4",
    time: "100–130 phút",
    focus: "Trước ngày cuối, ưu tiên nói trôi chảy và sửa lỗi lặp lại.",
    vocab: ["speak", "answer", "reason", "example", "describe", "compare", "suggest", "agree", "disagree", "choose", "partner", "examiner", "confidence", "fluency", "pronunciation", "clear"],
    tasks: [
      "Chữa các câu sai quan trọng của đề ngày 28.",
      "Luyện Speaking Part 1: 10 câu, mỗi câu 30–45 giây.",
      "Luyện Part 2: describe a picture bằng 5 bước.",
      "Luyện Part 3–4: suggest, agree/disagree, choose, explain.",
      "Ghi 5 câu mẫu mình sẽ dùng trong phòng thi."
    ],
    writing: "Write 5 reusable speaking phrases and 5 reusable writing phrases.",
    speaking: speakingPastQuestions.concat(["What do you usually do with your friends?", "Do you prefer studying alone or with classmates?"]),
    examUse: "Speaking mock day."
  },
  {
    day: 30,
    phase: "Final Review",
    title: "Ôn lỗi, không nhồi mới",
    topic: "Final checklist",
    grammar: "Only personal mistakes",
    skill: "Light mock + confidence",
    time: "60–90 phút",
    focus: "Không học lan man. Chỉ ôn lỗi thật, mẫu câu chắc, và giữ đầu óc tỉnh.",
    vocab: ["final", "review", "confidence", "calm", "ready", "mistake", "checklist", "sleep", "prepare", "remember", "answer", "reason", "example", "clear", "simple", "accurate"],
    tasks: [
      "Ôn Mistake Bank: đọc lại lỗi từ ngày 1–29.",
      "Ôn 30–50 từ đã đánh dấu khó nhất, không học từ mới.",
      "Làm mock nhẹ 30 phút: 10 Reading + 10 Listening + 3 Speaking questions.",
      "Đọc lại khung Writing email/article/story.",
      "Chuẩn bị tinh thần: trả lời rõ, có lý do, không im lặng khi Speaking."
    ],
    writing: "Write a short final note: I am ready because...",
    speaking: ["What are you proud of after 30 days?", "What will you do if you do not understand a question?"],
    examUse: "Light review only."
  }
];

const DEFAULT_MEANINGS = {
  exam: 'kỳ thi', candidate: 'thí sinh', question: 'câu hỏi', answer: 'câu trả lời', instruction: 'hướng dẫn/yêu cầu', information: 'thông tin', practice: 'sự luyện tập', mistake: 'lỗi sai', progress: 'sự tiến bộ', goal: 'mục tiêu', skill: 'kỹ năng', listen: 'nghe', speak: 'nói', write: 'viết', read: 'đọc', improve: 'cải thiện', remember: 'nhớ', review: 'ôn lại', test: 'bài kiểm tra', time: 'thời gian',
  school: 'trường học', class: 'lớp học', classroom: 'phòng học', subject: 'môn học', lesson: 'bài học/tiết học', teacher: 'giáo viên', student: 'học sinh', homework: 'bài tập về nhà', mark: 'điểm số', library: 'thư viện', project: 'dự án/bài làm nhóm', science: 'khoa học', history: 'lịch sử', geography: 'địa lý', biology: 'sinh học', chemistry: 'hóa học', physics: 'vật lý', notice: 'thông báo', course: 'khóa học', level: 'trình độ',
  family: 'gia đình', friend: 'bạn bè', classmate: 'bạn cùng lớp', neighbour: 'hàng xóm', parent: 'bố/mẹ', cousin: 'anh/chị/em họ', aunt: 'cô/dì', uncle: 'chú/bác/cậu', teenager: 'thiếu niên', hobby: 'sở thích', habit: 'thói quen', daily: 'hằng ngày', morning: 'buổi sáng', afternoon: 'buổi chiều', evening: 'buổi tối', weekend: 'cuối tuần', usually: 'thường xuyên', sometimes: 'thỉnh thoảng', together: 'cùng nhau', kind: 'tốt bụng', friendly: 'thân thiện', helpful: 'hay giúp đỡ', sociable: 'hòa đồng',
  breakfast: 'bữa sáng', lunch: 'bữa trưa', dinner: 'bữa tối', meal: 'bữa ăn', snack: 'đồ ăn nhẹ', restaurant: 'nhà hàng', menu: 'thực đơn', waiter: 'bồi bàn nam', waitress: 'bồi bàn nữ', coffee: 'cà phê', juice: 'nước ép', vegetable: 'rau', fruit: 'trái cây', sandwich: 'bánh sandwich', pizza: 'bánh pizza', 'fast food': 'đồ ăn nhanh', price: 'giá', cheap: 'rẻ', expensive: 'đắt', cash: 'tiền mặt', pay: 'trả tiền', receipt: 'hóa đơn/biên lai', customer: 'khách hàng', shop: 'cửa hàng', supermarket: 'siêu thị',
  house: 'ngôi nhà', home: 'nhà/tổ ấm', room: 'phòng', bedroom: 'phòng ngủ', bathroom: 'phòng tắm', kitchen: 'nhà bếp', garden: 'khu vườn', window: 'cửa sổ', door: 'cửa ra vào', desk: 'bàn học/làm việc', chair: 'ghế', sofa: 'ghế sofa', shelf: 'kệ', upstairs: 'ở tầng trên', downstairs: 'ở tầng dưới', near: 'gần', 'next to': 'bên cạnh', opposite: 'đối diện', between: 'ở giữa', behind: 'phía sau', flat: 'căn hộ',
  travel: 'du lịch/di chuyển', trip: 'chuyến đi ngắn', journey: 'hành trình', holiday: 'kỳ nghỉ', airport: 'sân bay', station: 'nhà ga/trạm', train: 'tàu hỏa', plane: 'máy bay', flight: 'chuyến bay', ticket: 'vé', passport: 'hộ chiếu', luggage: 'hành lý', suitcase: 'vali', map: 'bản đồ', tourist: 'du khách', guide: 'hướng dẫn viên/sách hướng dẫn', hotel: 'khách sạn', reservation: 'sự đặt chỗ', arrive: 'đến nơi', depart: 'khởi hành', return: 'trở về/vé khứ hồi', delay: 'sự chậm trễ', traffic: 'giao thông',
  weather: 'thời tiết', sunny: 'nắng', cloudy: 'nhiều mây', windy: 'nhiều gió', rain: 'mưa', storm: 'bão', snow: 'tuyết', temperature: 'nhiệt độ', forecast: 'dự báo', hot: 'nóng', cold: 'lạnh', warm: 'ấm', cool: 'mát', season: 'mùa', spring: 'mùa xuân', summer: 'mùa hè', autumn: 'mùa thu', winter: 'mùa đông', nature: 'thiên nhiên', forest: 'rừng', river: 'sông', mountain: 'núi', beach: 'bãi biển', lake: 'hồ', countryside: 'vùng nông thôn',
  sport: 'thể thao', team: 'đội/nhóm', player: 'người chơi/cầu thủ', match: 'trận đấu', competition: 'cuộc thi', win: 'thắng', lose: 'thua/mất', score: 'ghi điểm/tỉ số', goal: 'bàn thắng/mục tiêu', coach: 'huấn luyện viên', exercise: 'bài tập/vận động', fitness: 'sự khỏe mạnh/thể lực', healthy: 'khỏe mạnh', tired: 'mệt', doctor: 'bác sĩ', medicine: 'thuốc', pain: 'cơn đau', headache: 'đau đầu', run: 'chạy', swim: 'bơi', cycling: 'đạp xe', gym: 'phòng tập', train: 'luyện tập/tàu hỏa',
  film: 'phim', music: 'âm nhạc', concert: 'buổi hòa nhạc', cinema: 'rạp chiếu phim', actor: 'diễn viên nam', actress: 'diễn viên nữ', song: 'bài hát', band: 'ban nhạc', magazine: 'tạp chí', newspaper: 'báo', website: 'trang web', app: 'ứng dụng', online: 'trực tuyến', download: 'tải xuống', upload: 'tải lên', message: 'tin nhắn', video: 'video', photograph: 'bức ảnh', camera: 'máy ảnh', game: 'trò chơi', cartoon: 'hoạt hình/truyện tranh', programme: 'chương trình', series: 'loạt phim/chương trình', interesting: 'thú vị', boring: 'nhàm chán',
  job: 'công việc', work: 'làm việc/công việc', career: 'sự nghiệp', future: 'tương lai', company: 'công ty', manager: 'quản lý', engineer: 'kỹ sư', designer: 'nhà thiết kế', assistant: 'trợ lý', salary: 'lương', apply: 'ứng tuyển', application: 'đơn ứng tuyển', interview: 'phỏng vấn', experience: 'kinh nghiệm/trải nghiệm', professional: 'chuyên nghiệp', responsible: 'có trách nhiệm', creative: 'sáng tạo', confident: 'tự tin', communication: 'giao tiếp', teamwork: 'làm việc nhóm', problem: 'vấn đề', decision: 'quyết định',
  happy: 'vui', worried: 'lo lắng', nervous: 'hồi hộp', excited: 'hào hứng', bored: 'chán', interested: 'có hứng thú', surprised: 'ngạc nhiên', confused: 'bối rối', serious: 'nghiêm túc', relaxed: 'thư giãn', difficult: 'khó', easy: 'dễ', useful: 'hữu ích', important: 'quan trọng', wonderful: 'tuyệt vời', awful: 'tệ', opinion: 'ý kiến', reason: 'lý do', example: 'ví dụ',
  yesterday: 'hôm qua', today: 'hôm nay', tomorrow: 'ngày mai', currently: 'hiện tại', ago: 'trước đây', already: 'đã rồi', yet: 'chưa', finish: 'hoàn thành', start: 'bắt đầu', plan: 'kế hoạch', visit: 'thăm/ghé', invite: 'mời', meet: 'gặp', study: 'học', practise: 'luyện tập', join: 'tham gia',
  better: 'tốt hơn', worse: 'tệ hơn', best: 'tốt nhất', worst: 'tệ nhất', more: 'hơn/nhiều hơn', less: 'ít hơn', most: 'nhiều nhất', least: 'ít nhất', popular: 'phổ biến', comfortable: 'thoải mái', fast: 'nhanh', slow: 'chậm',
  advice: 'lời khuyên', rule: 'quy định', permission: 'sự cho phép', allowed: 'được phép', forbidden: 'bị cấm', necessary: 'cần thiết', safe: 'an toàn', dangerous: 'nguy hiểm', careful: 'cẩn thận', prepare: 'chuẩn bị', rest: 'nghỉ ngơi', sleep: 'ngủ', early: 'sớm', late: 'muộn',
  made: 'được làm', built: 'được xây', used: 'được dùng/đã từng', created: 'được tạo ra', designed: 'được thiết kế', invented: 'được phát minh', opened: 'được mở', closed: 'đóng/có đóng', sold: 'được bán', produced: 'được sản xuất', called: 'được gọi là', known: 'được biết đến', written: 'được viết', spoken: 'được nói', recycled: 'được tái chế',
  person: 'người', place: 'nơi chốn', thing: 'vật/điều', where: 'nơi mà/ở đâu', who: 'người mà/ai', which: 'cái mà', that: 'mà', activity: 'hoạt động', enough: 'đủ', too: 'quá', so: 'rất/vì vậy', such: 'một ... như vậy', because: 'bởi vì', although: 'mặc dù', however: 'tuy nhiên', therefore: 'vì vậy', solution: 'giải pháp', purpose: 'mục đích', main: 'chính', detail: 'chi tiết', evidence: 'bằng chứng', paragraph: 'đoạn văn', writer: 'người viết', reader: 'người đọc', fact: 'sự thật', true: 'đúng', false: 'sai'
};

const EXAMPLE_MAP = {
  skill: 'Communication is an important skill for my future job.', website: 'My favourite website helps me learn English every day.', app: 'I use this app to review vocabulary on my phone.', 'fast food': 'Many people choose fast food because it is cheap and quick.', team: 'I prefer team sports because I can play with my friends.', individual: 'Some students prefer individual sports because they can train alone.', healthy: 'Students should sleep well and eat healthy food.', should: 'You should review your mistakes before the exam.', homework: 'I usually do my homework after dinner.', travel: 'I would like to travel to another city after the exam.', comfortable: 'My room is comfortable because it is quiet.', opinion: 'In my opinion, English is useful for students.'
};

const PRON_TIPS = {
  vegetable: 'VEG-tuh-bəl, không đọc dài từng âm.', comfortable: 'KUMF-tə-bəl, thường chỉ 3 âm chính.', interesting: 'IN-trəs-ting hoặc IN-tə-res-ting.', restaurant: 'RES-tə-ront.', Wednesday: 'WENZ-day.', answer: 'AN-sər, chữ w câm.', listen: 'LIS-ən, chữ t câm.', should: 'shʊd, chữ l câm.', climb: 'klaɪm, chữ b câm.', island: 'AI-lənd, chữ s câm.'
};

const GRAMMAR_LESSONS = {
  1: lesson('Câu trả lời B1: Answer → Reason → Example', 'Ở PET Speaking, không trả lời một từ. Hãy nói ý chính trước, sau đó thêm lý do và ví dụ.', ['Answer: I prefer team sports.', 'Reason: because I can play with my friends.', 'Example: For example, I often play football after school.'], ['I like it. → I like it because it is useful for my study.', 'Yes. → Yes, I do, especially at weekends.'], 'Đừng im lặng quá lâu. Nói câu đơn giản nhưng đủ ý.', ['Viết 3 câu trả lời theo mẫu A-R-E.', 'Nói to mỗi câu trong 30 giây.']),
  2: lesson('Present simple + adverbs of frequency', 'Dùng để nói thói quen, lịch học, sự thật hằng ngày.', ['I/You/We/They + usually + verb.', 'He/She + often + verb-s/es.', 'Adverbs: always, usually, often, sometimes, never.'], ['I usually study English at night.', 'She often goes to the library after school.'], 'Sai thường gặp: thiếu s/es với he/she/it.', ['Viết 5 câu về lịch học của bạn.', 'Đổi 2 câu sang he/she.']),
  3: lesson('Present simple vs present continuous', 'Present simple nói thói quen. Present continuous nói việc đang xảy ra bây giờ hoặc tạm thời.', ['I usually play games after school.', 'I am studying English now.', 'He is preparing for the exam this month.'], ['I usually watch videos, but today I am doing homework.', 'My friend is learning vocabulary now.'], 'Đừng dùng am/is/are với present simple: “I am usually study” là sai.', ['Viết 4 câu “usually”, 4 câu “now”.', 'Nói 45 giây về hôm nay khác ngày thường thế nào.']),
  4: lesson('Countable / Uncountable + much/many', 'Dùng để nói đồ ăn, đồ uống, giá tiền và số lượng.', ['many + countable plural: many apples', 'much + uncountable: much water', 'some/any dùng cho câu thường/câu phủ định-câu hỏi.'], ['There are many restaurants near my school.', 'I do not drink much coffee.'], 'Không nói “many money”; nói “much money” hoặc “a lot of money”.', ['Chia 10 từ food thành countable/uncountable.', 'Viết 6 câu với some/any/much/many.']),
  5: lesson('There is/are + prepositions of place', 'Dùng để mô tả phòng, nhà, vị trí đồ vật.', ['There is + singular/uncountable.', 'There are + plural.', 'in, on, under, next to, opposite, between, behind, in front of.'], ['There is a desk next to my bed.', 'There are some books on the shelf.'], 'Đừng dùng “have” khi chỉ sự tồn tại nếu câu cần “there is/are”.', ['Mô tả phòng của bạn bằng 8 câu.', 'Vẽ sơ đồ và nói vị trí 5 đồ vật.']),
  6: lesson('Past simple for travel experiences', 'Dùng để kể chuyến đi đã xảy ra và đã kết thúc.', ['Regular: visit → visited.', 'Irregular: go → went, take → took, see → saw.', 'Question: Did you visit...?'], ['I went to Da Nang last summer.', 'We took a lot of photos.'], 'Sau did dùng động từ nguyên mẫu: “Did you went” là sai.', ['Viết 8 câu về chuyến đi cũ.', 'Đặt 3 câu hỏi Did you...?']),
  7: lesson('Will vs going to', 'Dùng để nói dự đoán và kế hoạch.', ['will: dự đoán/quyết định ngay lúc nói.', 'be going to: kế hoạch đã có từ trước.', 'I think it will rain. / I am going to study tonight.'], ['It will be sunny tomorrow.', 'I am going to review vocabulary after dinner.'], 'Không cần dùng will sau “going to”.', ['Viết 5 dự đoán thời tiết.', 'Viết 5 kế hoạch cuối tuần.']),
  8: lesson('should / shouldn’t + must / have to', 'Dùng để khuyên, nói luật hoặc điều cần làm.', ['should = nên.', 'must/have to = phải.', 'shouldn’t/mustn’t = không nên/không được.'], ['Students should exercise regularly.', 'You must arrive on time for the exam.'], 'Đừng dùng to sau should: “should to study” là sai.', ['Viết 6 lời khuyên sức khỏe.', 'Nói 45 giây: what students should do before exams.']),
  9: lesson('like / love / enjoy / prefer + V-ing', 'Dùng để nói sở thích, app, website, phim, âm nhạc.', ['enjoy + V-ing.', 'prefer + V-ing / prefer A to B.', 'would like + to V khác với like + V-ing.'], ['I enjoy watching English videos.', 'I prefer using a vocabulary app to reading long lists.'], 'Sai thường gặp: “enjoy to watch” → enjoy watching.', ['Viết 8 câu về app/film/music.', 'Trả lời “What is your favourite app?” trong 60 giây.']),
  10: lesson('want to / would like to / hope to', 'Dùng để nói nghề nghiệp và kế hoạch tương lai.', ['want to = muốn.', 'would like to = muốn một cách lịch sự hơn.', 'hope to = hy vọng.'], ['I would like to become a designer.', 'I hope to improve my communication skills.'], 'Sau want/would like/hope dùng to + verb.', ['Viết 5 câu về future job.', 'Nói 1 phút về 3 kỹ năng cần cho nghề đó.']),
  11: lesson('because / so / although', 'Dùng để nối ý kiến với lý do, kết quả và sự tương phản.', ['because + reason.', 'so + result.', 'although + opposite idea.'], ['I like this app because it is easy to use.', 'Although fast food is tasty, it is not always healthy.'], 'Không đặt dấu chấm giữa because và lý do nếu chưa đủ câu.', ['Nâng cấp 6 câu ngắn bằng because/so/although.', 'Nói 3 ý kiến cá nhân, mỗi ý có lý do.']),
  12: lesson('Review grammar before mixed test', 'Hôm nay không học cấu trúc mới. Nhiệm vụ là kiểm tra xem cấu trúc nào còn yếu.', ['Check tense.', 'Check connectors.', 'Check word order.', 'Check plural and s/es.'], ['I usually study at night, but today I am reviewing my mistakes.', 'I went to school yesterday and I will practise listening tomorrow.'], 'Đừng chữa quá nhiều thứ cùng lúc; chọn 3 lỗi lặp lại nhiều nhất.', ['Chữa 5 câu sai cũ.', 'Làm quiz và ghi lỗi.']),
  13: lesson('Tenses for Writing', 'Trong Writing, bạn cần chuyển thời gian rõ: thói quen, hiện tại, quá khứ, kế hoạch.', ['habit: present simple.', 'now/temporary: present continuous.', 'finished past: past simple.', 'plan: going to / will.'], ['I usually study after dinner.', 'I am preparing for PET this month.', 'I visited my friend yesterday.', 'I am going to practise listening tomorrow.'], 'Một đoạn viết tốt thường có mốc thời gian rõ.', ['Gạch chân động từ trong bài viết.', 'Sửa thì cho 8 câu.']),
  14: lesson('Comparatives & Superlatives', 'Dùng khi phải chọn A hay B trong Speaking/Writing.', ['short adj + er: cheaper, faster.', 'more + long adj: more interesting.', 'the + superlative: the best, the most useful.'], ['Studying at school is more interesting than studying alone.', 'This is the most useful app for vocabulary.'], 'Nhớ đổi y → ier: easy → easier.', ['Viết 10 câu so sánh.', 'Trả lời 2 câu Speaking bằng comparative.']),
  15: lesson('Modal verbs for advice and rules', 'Dùng should/can/must/have to để viết lời khuyên và nói quy định.', ['should = advice.', 'can = ability/permission.', 'must/have to = obligation.', 'mustn’t = prohibition.'], ['You should sleep early before the exam.', 'Students have to follow the rules.'], 'Sau modal dùng verb nguyên mẫu.', ['Viết email khuyên bạn học thi.', 'Làm 8 câu chọn modal đúng.']),
  16: lesson('Passive voice cơ bản', 'Dùng khi người/vật chịu tác động quan trọng hơn người làm.', ['am/is/are + V3.', 'was/were + V3.', 'by + person nếu cần.'], ['This website is used by many students.', 'The school was built ten years ago.'], 'Thiếu be là lỗi phổ biến: “This made in Vietnam” → “This is made in Vietnam”.', ['Đổi 8 câu active sang passive.', 'Viết 5 câu passive về trường/lớp.']),
  17: lesson('Relative clauses: who / which / where', 'Dùng để mô tả người, vật, nơi chốn mà không cần nhiều câu rời rạc.', ['who = người.', 'which/that = vật/ý.', 'where = nơi chốn.'], ['A teacher who is patient can help students a lot.', 'This is an app which helps me remember words.', 'I like places where I can study quietly.'], 'Không dùng where cho người.', ['Ghép 10 cặp câu bằng who/which/where.', 'Mô tả 1 người + 1 nơi.']),
  18: lesson('too / enough / so / such', 'Dùng để giải thích vấn đề và mức độ.', ['too + adj = quá.', 'adj + enough = đủ.', 'so + adj.', 'such + adjective + noun.'], ['The test was too difficult for me.', 'This room is quiet enough to study.', 'It was such an interesting lesson.'], 'enough đứng sau tính từ: “good enough”, không phải “enough good”.', ['Làm 12 câu too/enough/so/such.', 'Viết đoạn về fast food.']),
  19: lesson('Reading strategy: purpose and keywords', 'Trước khi chọn đáp án, hỏi: thông báo này muốn người đọc làm gì?', ['Find the purpose.', 'Underline keywords.', 'Match synonym, not exact word only.'], ['No bikes here → You must not leave your bike here.', 'Half price today → It is cheaper today.'], 'Không dịch từng chữ quá lâu; đọc mục đích trước.', ['Làm 5 short texts.', 'Ghi synonym trong đáp án.']),
  20: lesson('Reading strategy: evidence', 'Với bài dài, mỗi đáp án phải có chứng cứ trong bài.', ['Read the question first.', 'Find the paragraph.', 'Underline evidence.', 'Reject answers that are only partly true.'], ['The writer feels worried → tìm từ như nervous, afraid, problem.', 'Main idea → hỏi cả đoạn nói về gì.'], 'Đừng chọn vì “nghe có vẻ đúng” nhưng không có dòng chứng cứ.', ['Làm 10 câu và ghi dòng chứng cứ.', 'Tóm tắt mỗi đoạn bằng 1 câu.']),
  21: lesson('Gap-fill strategy', 'Gap-fill kiểm tra cả nghĩa và ngữ pháp.', ['Look before and after the gap.', 'Check word type: noun/verb/adjective.', 'Check collocation.'], ['interested in, good at, depend on.', 'too many + plural, too much + uncountable.'], 'Không chọn từ chỉ vì biết nghĩa; phải vừa ngữ pháp.', ['Làm 10 câu gap-fill.', 'Ghi 5 collocations mới.']),
  22: lesson('Writing email structure', 'Email PET cần trả lời đủ các ý, rõ người nhận và mục đích.', ['Opening: Hi/Hello...', 'Answer all bullet points.', 'Add reason/example.', 'Closing: See you soon / Best wishes.'], ['Thanks for your email. I think we should meet at the café because it is near school.', 'Let me know what you think.'], 'Đừng bỏ sót bullet point; thiếu ý mất điểm rất nhanh.', ['Viết 1 email 100 từ.', 'Tick xem đã trả lời đủ 3 ý chưa.']),
  23: lesson('Article / story structure', 'Bài viết không cần dài phức tạp, nhưng phải có bố cục rõ.', ['Article: title → opinion → reasons → ending.', 'Story: beginning → problem → action → ending.', 'Use simple linking words.'], ['Last weekend, something surprising happened.', 'In my opinion, this is a great activity for students.'], 'Đừng viết quá nhiều câu dài nếu dễ sai grammar.', ['Lập dàn ý 4 dòng trước khi viết.', 'Viết 100 từ và tự sửa lỗi.']),
  24: lesson('Listening strategy: predict before listening', 'Trước khi nghe, hãy đoán loại thông tin cần nghe.', ['Is it a number, place, time, name, price?', 'Listen for meaning, not every word.', 'Second listening = confirm answers.'], ['£24.50, 2.30 pm, Saturday and Sunday, Town Hall.', 'If the speaker changes plan, final answer is often after “but/however”.'], 'Đừng dừng lại quá lâu ở câu đã mất; tiếp tục nghe câu sau.', ['Trước khi nghe, ghi loại từ cần điền.', 'Sau khi nghe, ghi 3 từ mình bỏ lỡ.']),
  25: lesson('Speaking exam control', 'Mục tiêu là trả lời rõ, có lý do, không cần nói như người bản xứ.', ['Part 1: personal answer + reason.', 'Part 2: describe picture: who/where/action/feeling.', 'Part 3/4: give opinion and respond.'], ['I think this is a good idea because...', 'In the picture, I can see... They are probably...'], 'Khi bí, dùng câu kéo thời gian: Let me think. I suppose...', ['Luyện 5 câu đề cũ.', 'Ghi âm 1 phút và tự nghe lại.']),
  26: lesson('Exam mode: manage time', 'Làm đề có bấm giờ để tập áp lực, sau đó chữa lỗi sâu.', ['Do not pause too long.', 'Mark difficult questions and move on.', 'Check answers at the end.'], ['I chose B because the text says...', 'My mistake was vocabulary, not grammar.'], 'Không chỉ xem đáp án; phải ghi vì sao sai.', ['Làm test theo giờ.', 'Chữa từng lỗi vào Mistake Bank.']),
  27: lesson('Deep correction day', 'Ngày chữa đề quan trọng hơn ngày làm đề.', ['Classify errors.', 'Rewrite wrong sentences.', 'Review hard words.', 'Repeat listening parts.'], ['This was wrong because I missed the word “however”.', 'The correct answer is supported by paragraph 2.'], 'Đừng làm đề mới khi chưa hiểu lỗi đề cũ.', ['Chọn 10 lỗi lớn nhất.', 'Tạo lại 10 câu đúng.']),
  28: lesson('Writing under exam conditions', 'Viết có giờ, nhưng vẫn cần dàn ý 2 phút.', ['Plan 2 minutes.', 'Write 12–15 minutes.', 'Check 3 minutes.', 'Check: tense, spelling, missing ideas.'], ['I am writing to invite you...', 'The best thing about this place is...'], 'Đừng dùng cấu trúc quá khó nếu không chắc.', ['Viết 1 email + 1 short text.', 'Tự chấm theo checklist.']),
  29: lesson('Speaking fluency review', 'Luyện nói theo cụm, không học thuộc cả bài.', ['Use flexible frames.', 'Change examples for each question.', 'Speak clearly and keep going.'], ['I prefer..., mainly because...', 'For example, last week...', 'That’s why I think...'], 'Không học thuộc model answer 100%; chỉ học khung.', ['Luyện 10 câu speaking.', 'Ghi 5 câu mở rộng dùng được.']),
  30: lesson('Final light review', 'Không nhồi kiến thức mới. Chỉ ôn lỗi và giữ nhịp tự tin.', ['Review hard words.', 'Review writing frames.', 'Review speaking frames.', 'Sleep well.'], ['I can answer clearly.', 'I can explain my ideas with reasons and examples.'], 'Học quá nặng ngày cuối dễ rối.', ['Ôn 30 từ khó.', 'Nói 5 câu speaking nhẹ.'])
};

function lesson(title, intro, rules, examples, mistake, guided) {
  return { title, intro, rules, examples, mistake, guided };
}

const SPEAKING_GUIDES = {
  'Do you prefer team sports or individual sports? Why?': {
    formula: 'Preference → reason 1 → personal example → short contrast',
    ideas: ['team sports: teamwork, friends, motivation', 'individual sports: independence, flexible time, personal progress'],
    model: 'I prefer team sports because they are more exciting and I can spend time with my friends. For example, I sometimes play football after school, and it helps me relax. Individual sports are useful too, but I feel more motivated when I play in a team.',
    useful: ['I prefer...', 'more motivating', 'play with my friends', 'keep fit']
  },
  'What is your favourite app or website? Why do you like it?': {
    formula: 'Name the app/website → what you use it for → why it helps → example',
    ideas: ['learning English', 'watching videos', 'organising study', 'communication'],
    model: 'My favourite app is YouTube because I can use it to learn English and watch useful videos. I like it because there are many short lessons and I can repeat them whenever I want. It is also easy to use on my phone, so I can study anywhere.',
    useful: ['I use it to...', 'easy to use', 'whenever I want', 'helps me improve']
  },
  'What skills are important for your future job?': {
    formula: 'Choose 2–3 skills → explain each → connect to your future job',
    ideas: ['communication', 'teamwork', 'problem-solving', 'English', 'computer skills'],
    model: 'I think communication and problem-solving are very important for my future job. If I can communicate well, I can work better with other people. Problem-solving is also useful because every job has difficulties. English is important too because it can help me find more information and opportunities.',
    useful: ['communication skills', 'work with other people', 'solve problems', 'future opportunities']
  },
  'Why do people choose to eat fast food?': {
    formula: 'Main reason → extra reasons → balanced opinion',
    ideas: ['quick', 'cheap', 'convenient', 'tasty', 'busy lifestyle'],
    model: 'People choose to eat fast food because it is quick and convenient. Many students and workers are busy, so they do not have much time to cook. Fast food can also be cheap and tasty. However, I think people should not eat it every day because it is not always healthy.',
    useful: ['quick and convenient', 'do not have much time', 'cheap and tasty', 'not always healthy']
  },
  'Where would you prefer to live? Why?': {
    formula: 'Choose place → reason 1 → reason 2 → personal detail',
    ideas: ['city: services, schools, entertainment', 'countryside: quiet, fresh air, less traffic'],
    model: 'I would prefer to live in a quiet city because it has good schools, shops and hospitals, but it is still comfortable. I like having many services near my home. However, I would also like some green spaces, because they help me relax after studying.',
    useful: ['I would prefer to live...', 'good services', 'green spaces', 'comfortable and convenient']
  }
};

const GENERIC_SPEAKING_GUIDE = {
  formula: 'Direct answer → because → example → final sentence',
  ideas: ['give a personal reason', 'use one example from school/home/life', 'keep grammar simple'],
  model: 'I think this is important because it can help students in daily life. For example, I often use this skill when I study or talk with my friends. It is not always easy, but it is useful and I want to improve it.',
  useful: ['I think...', 'because...', 'For example...', 'That is why...']
};

const state = {
  selectedDay: 1,
  flashIndex: 0,
  flashRevealed: false,
  seconds: 60,
  timerId: null,
  quizAnswers: {}
};

const $ = selector => document.querySelector(selector);
const $$ = selector => Array.from(document.querySelectorAll(selector));
const storageKey = key => `pet30_${key}`;

function loadJSON(key, fallback) {
  try { return JSON.parse(localStorage.getItem(storageKey(key))) ?? fallback; }
  catch { return fallback; }
}
function saveJSON(key, value) { localStorage.setItem(storageKey(key), JSON.stringify(value)); }
function getPlan(day = state.selectedDay) { return plans.find(plan => plan.day === day) || plans[0]; }
function escapeHTML(value) {
  return String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');
}
function shuffleArray(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function sample(items, count) { return shuffleArray(items).slice(0, count); }

function getCompletedTasks() { return loadJSON('completedTasks', {}); }
function setCompleted(day, index, checked) {
  const data = getCompletedTasks();
  data[day] = data[day] || {};
  data[day][index] = checked;
  saveJSON('completedTasks', data);
}
function getDayCompletion(day) {
  const plan = getPlan(day);
  const completed = getCompletedTasks()[day] || {};
  const count = plan.tasks.filter((_, index) => completed[index]).length;
  return Math.round((count / plan.tasks.length) * 100);
}
function isDayCompleted(day) { return getDayCompletion(day) === 100; }
function getQuizScores() { return loadJSON('quizScores', {}); }
function getQuizScore(day = state.selectedDay) { return getQuizScores()[day]; }
function isQuizPassed(day = state.selectedDay) { return (getQuizScore(day)?.score || 0) >= 80; }

function renderDaySelect() {
  $('#daySelect').innerHTML = plans.map(plan => `<option value="${plan.day}">Day ${plan.day} · ${plan.title}</option>`).join('');
  $('#daySelect').value = state.selectedDay;
}

function updateHeaderProgress() {
  const average = Math.round(plans.reduce((sum, plan) => sum + getDayCompletion(plan.day), 0) / plans.length);
  $('#todayLabel').textContent = `Day ${state.selectedDay}`;
  $('#progressPercent').textContent = `${average}%`;
}

function getGrammarLesson(day = state.selectedDay) { return GRAMMAR_LESSONS[day] || GRAMMAR_LESSONS[1]; }

function renderGrammarLesson(targetId = 'grammarContent') {
  const plan = getPlan();
  const lesson = getGrammarLesson();
  const el = document.getElementById(targetId);
  if (!el) return;
  el.innerHTML = `
    <article class="card grammar-card">
      <div class="day-title-row">
        <div>
          <span class="phase-pill">Day ${plan.day} · Grammar lesson</span>
          <h2>${lesson.title}</h2>
        </div>
        <button class="secondary small-btn" data-read-grammar>Nghe ví dụ</button>
      </div>
      <p class="lesson-intro">${lesson.intro}</p>
      <div class="lesson-grid">
        <div>
          <h3>1. Học trước</h3>
          <ul>${lesson.rules.map(rule => `<li>${escapeHTML(rule)}</li>`).join('')}</ul>
        </div>
        <div>
          <h3>2. Ví dụ B1</h3>
          <ul>${lesson.examples.map(ex => `<li><code>${escapeHTML(ex)}</code></li>`).join('')}</ul>
        </div>
        <div>
          <h3>3. Lỗi dễ sai</h3>
          <p class="warning-box">${escapeHTML(lesson.mistake)}</p>
        </div>
        <div>
          <h3>4. Làm có hướng dẫn</h3>
          <ol>${lesson.guided.map(step => `<li>${escapeHTML(step)}</li>`).join('')}</ol>
        </div>
      </div>
    </article>
  `;
}

function renderToday() {
  const plan = getPlan();
  const completed = getCompletedTasks()[plan.day] || {};
  const percent = getDayCompletion(plan.day);
  const quiz = getQuizScore(plan.day);
  const quizBadge = quiz ? `${quiz.score}% ${quiz.score >= 80 ? '· passed' : '· retry'}` : 'chưa làm quiz';
  $('#todayContent').innerHTML = `
    <div class="today-grid">
      <article class="card day-hero">
        <div class="day-title-row">
          <div>
            <span class="phase-pill">${plan.phase}</span>
            <h2>Day ${plan.day}: ${plan.title}</h2>
            <p class="hint">${plan.focus}</p>
          </div>
          <span class="score-pill">${percent}% tasks</span>
        </div>
        <div class="progress-bar" aria-label="Tiến độ ngày"><div style="width:${percent}%"></div></div>
        <div class="meta-grid">
          <div class="meta-box"><small>Topic</small><strong>${plan.topic}</strong></div>
          <div class="meta-box"><small>Grammar</small><strong>${plan.grammar}</strong></div>
          <div class="meta-box"><small>Skill</small><strong>${plan.skill}</strong></div>
          <div class="meta-box"><small>Quiz pass</small><strong>${quizBadge}</strong></div>
        </div>
        <div id="todayGrammarLesson"></div>
        <div>
          <h3>Checklist hôm nay</h3>
          <p class="hint">Học theo thứ tự: đọc bài dạy grammar → xem flashcard → làm guided practice → làm mini quiz → mới tick hoàn thành.</p>
          <div id="taskList" class="task-list"></div>
        </div>
      </article>
      <aside class="card sticky-aside">
        <h3>Khối lượng vừa đủ</h3>
        <p><strong>Thời gian:</strong> ${plan.time}</p>
        <p><strong>Dùng đề:</strong> ${plan.examUse}</p>
        <p><strong>Writing:</strong> ${plan.writing}</p>
        <div class="button-row compact-row">
          <button class="primary" data-jump-tab="vocab">Học flashcard</button>
          <button class="secondary" data-jump-tab="quiz">Làm quiz</button>
        </div>
        <h3>Speaking nhanh</h3>
        <div class="chips">${plan.speaking.slice(0, 3).map(q => `<span class="chip">${escapeHTML(q)}</span>`).join('')}</div>
      </aside>
    </div>
  `;

  renderGrammarLesson('todayGrammarLesson');
  const taskList = $('#taskList');
  const template = $('#taskTemplate');
  plan.tasks.forEach((task, index) => {
    const clone = template.content.cloneNode(true);
    const label = clone.querySelector('label');
    const input = clone.querySelector('input');
    const span = clone.querySelector('span');
    input.checked = Boolean(completed[index]);
    span.textContent = task;
    if (input.checked) label.classList.add('done');
    input.addEventListener('change', () => {
      label.classList.toggle('done', input.checked);
      setCompleted(plan.day, index, input.checked);
      renderToday();
      renderPlanGrid();
    });
    taskList.appendChild(clone);
  });
  $('#daySelect').value = state.selectedDay;
  updateHeaderProgress();
  renderVocab();
  renderSpeaking();
  renderMistakes();
  renderQuiz();
  renderPlanGrid();
}

function renderPlanGrid() {
  const grid = $('#planGrid');
  if (!grid) return;
  grid.innerHTML = plans.map(plan => {
    const completedClass = isDayCompleted(plan.day) ? 'completed' : '';
    const currentClass = plan.day === state.selectedDay ? 'current' : '';
    const quiz = getQuizScore(plan.day);
    return `
      <article class="card plan-card ${completedClass} ${currentClass}" data-day="${plan.day}">
        <div class="day-title-row">
          <span class="phase-pill">Day ${plan.day}</span>
          <span class="score-pill">${quiz ? `${quiz.score}% quiz` : plan.phase}</span>
        </div>
        <h3>${plan.title}</h3>
        <p>${plan.focus}</p>
        <p><strong>${plan.skill}</strong></p>
      </article>
    `;
  }).join('');
  $$('.plan-card').forEach(card => card.addEventListener('click', () => {
    state.selectedDay = Number(card.dataset.day);
    state.flashIndex = 0;
    state.flashRevealed = false;
    state.quizAnswers = {};
    renderToday();
    showTab('today');
  }));
}

function getWordInfo(word) {
  const lower = String(word).toLowerCase();
  const meaning = DEFAULT_MEANINGS[lower] || DEFAULT_MEANINGS[word] || `từ thuộc chủ đề “${getPlan().topic}”`;
  const example = EXAMPLE_MAP[lower] || EXAMPLE_MAP[word] || `I can use “${word}” when I talk about ${getPlan().topic}.`;
  const tip = PRON_TIPS[word] || PRON_TIPS[lower] || 'Bấm “Nghe phát âm”, lặp lại 3 lần, rồi tự đặt 1 câu.';
  return { word, meaning, example, tip };
}

function getReviewWords() {
  const days = [state.selectedDay - 1, state.selectedDay - 3, state.selectedDay - 7].filter(day => day >= 1);
  const words = [];
  days.forEach(day => getPlan(day).vocab.slice(0, 8).forEach(word => words.push({ word, day })));
  return words;
}
function getHardWords() { return loadJSON('hardWords', {}); }
function toggleHardWord(word) {
  const data = getHardWords();
  data[word] = !data[word];
  saveJSON('hardWords', data);
  renderVocab();
}

function renderVocab() {
  const plan = getPlan();
  const hard = getHardWords();
  $('#vocabList').innerHTML = plan.vocab.map(word => `<button class="chip chip-btn" data-word="${escapeHTML(word)}" data-speak-word>${escapeHTML(word)}</button>`).join('');
  const reviewWords = getReviewWords();
  $('#reviewList').innerHTML = reviewWords.length ? reviewWords.map(item => `<span class="chip">D${item.day}: ${escapeHTML(item.word)}</span>`).join('') : '<span class="chip">Chưa có ngày cũ để ôn</span>';
  const hardList = Object.entries(hard).filter(([, value]) => value).map(([word]) => word);
  const hardEl = $('#hardWordList');
  if (hardEl) hardEl.innerHTML = hardList.length ? hardList.map(word => `<span class="chip danger-chip">${escapeHTML(word)}</span>`).join('') : '<span class="chip">Chưa đánh dấu từ khó</span>';
  renderFlashcard();
}

function renderFlashcard() {
  const plan = getPlan();
  const word = plan.vocab[state.flashIndex % plan.vocab.length];
  const info = getWordInfo(word);
  const hard = !!getHardWords()[word];
  $('#flashWord').textContent = info.word;
  $('#flashMeta').textContent = `Day ${plan.day} · ${plan.topic}`;
  $('#flashMeaning').innerHTML = state.flashRevealed
    ? `<strong>Nghĩa:</strong> ${escapeHTML(info.meaning)}<br><strong>Ví dụ:</strong> ${escapeHTML(info.example)}<br><strong>Phát âm:</strong> ${escapeHTML(info.tip)}`
    : 'Bấm thẻ để hiện nghĩa, ví dụ và mẹo phát âm.';
  const markBtn = $('#markHard');
  if (markBtn) markBtn.textContent = hard ? 'Bỏ từ khó' : 'Đánh dấu từ khó';
}

function moveFlash(delta) {
  const len = getPlan().vocab.length;
  state.flashIndex = (state.flashIndex + delta + len) % len;
  state.flashRevealed = false;
  renderFlashcard();
}
function shuffleFlashcard() {
  const len = getPlan().vocab.length;
  state.flashIndex = Math.floor(Math.random() * len);
  state.flashRevealed = false;
  renderFlashcard();
}
function speakText(text) {
  if (!('speechSynthesis' in window)) {
    alert('Trình duyệt này không hỗ trợ đọc phát âm.');
    return;
  }
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'en-GB';
  utter.rate = 0.82;
  window.speechSynthesis.speak(utter);
}

function guideFor(question) { return SPEAKING_GUIDES[question] || GENERIC_SPEAKING_GUIDE; }
function renderSpeaking() {
  const plan = getPlan();
  const dailyQuestions = plan.speaking.map(question => ({ type: 'Theo ngày học', question }));
  const pastQuestions = speakingPastQuestions.map(question => ({ type: 'Đề Speaking kì trước', question }));
  const seen = new Set();
  const all = [...dailyQuestions, ...pastQuestions].filter(item => {
    if (seen.has(item.question)) return false;
    seen.add(item.question);
    return true;
  });
  $('#speakingContent').innerHTML = all.map(item => {
    const guide = guideFor(item.question);
    return `
      <article class="card speaking-card">
        <span class="phase-pill">${item.type}</span>
        <h3>${escapeHTML(item.question)}</h3>
        <p class="frame"><strong>Khung chuẩn:</strong> ${escapeHTML(guide.formula)}</p>
        <details>
          <summary> Xem gợi ý trả lời đúng chuẩn B1</summary>
          <div class="speaking-guide">
            <h4>Ý có thể nói</h4>
            <div class="chips soft">${guide.ideas.map(x => `<span class="chip">${escapeHTML(x)}</span>`).join('')}</div>
            <h4>Model answer</h4>
            <p>${escapeHTML(guide.model)}</p>
            <h4>Cụm nên dùng</h4>
            <div class="chips">${guide.useful.map(x => `<span class="chip">${escapeHTML(x)}</span>`).join('')}</div>
          </div>
        </details>
        <div class="button-row compact-row"><button class="secondary small-btn" data-speak-sample="${escapeHTML(guide.model)}">Nghe model</button><button class="primary small-btn" data-timer-quick>60s luyện nói</button></div>
      </article>
    `;
  }).join('');
}

function buildQuizQuestions() {
  const plan = getPlan();
  const meaningful = plan.vocab.map(w => getWordInfo(w)).filter(info => !info.meaning.includes('từ thuộc chủ đề'));
  const vocabItems = sample(meaningful.length >= 5 ? meaningful : plan.vocab.map(w => getWordInfo(w)), 5);
  const allWords = sample([...new Set(plans.flatMap(p => p.vocab))], 80);
  const vocabQs = vocabItems.map((info, idx) => {
    const wrong = sample(allWords.filter(w => w !== info.word), 3);
    const options = shuffleArray([info.word, ...wrong]);
    return { id: `v${idx}`, type: 'Vocabulary', question: `Từ nào có nghĩa là: “${info.meaning}”?`, options, answer: info.word, explain: `Ví dụ: ${info.example}` };
  });
  const lesson = getGrammarLesson();
  const grammarQs = makeGrammarQuiz(plan.day, lesson).slice(0, 5);
  return [...vocabQs, ...grammarQs];
}

function makeGrammarQuiz(day, lesson) {
  const bank = [
    { q: 'I usually ___ English after dinner.', o: ['study', 'studies', 'am study', 'studying'], a: 'study', e: 'Present simple với I dùng động từ nguyên mẫu.' },
    { q: 'She often ___ to the library.', o: ['go', 'goes', 'going', 'is go'], a: 'goes', e: 'He/She/It thêm s/es.' },
    { q: 'Right now, I ___ vocabulary.', o: ['review', 'reviews', 'am reviewing', 'reviewed'], a: 'am reviewing', e: 'Right now → present continuous.' },
    { q: 'There ___ two books on the desk.', o: ['is', 'are', 'be', 'has'], a: 'are', e: 'Plural noun → there are.' },
    { q: 'I ___ to Hue last summer.', o: ['go', 'goes', 'went', 'am going'], a: 'went', e: 'Last summer → past simple.' },
    { q: 'You ___ sleep early before the exam.', o: ['should', 'should to', 'must to', 'can to'], a: 'should', e: 'Sau modal dùng verb nguyên mẫu.' },
    { q: 'I enjoy ___ English videos.', o: ['watch', 'to watch', 'watching', 'watched'], a: 'watching', e: 'enjoy + V-ing.' },
    { q: 'This app is ___ useful than that one.', o: ['more', 'most', 'much', 'many'], a: 'more', e: 'Comparative với tính từ dài: more useful.' },
    { q: 'The school ___ built ten years ago.', o: ['is', 'was', 'were', 'be'], a: 'was', e: 'Past passive: was/were + V3.' },
    { q: 'This is the website ___ helps me learn words.', o: ['who', 'where', 'which', 'when'], a: 'which', e: 'which/that dùng cho vật.' },
    { q: 'The room is quiet ___ to study.', o: ['too', 'enough', 'such', 'many'], a: 'enough', e: 'adj + enough.' },
    { q: 'Although fast food is tasty, it is not always ___.', o: ['healthy', 'health', 'healthily', 'healths'], a: 'healthy', e: 'Sau be cần adjective.' }
  ];
  return sample(bank, 5).map((item, i) => ({ id: `g${i}`, type: 'Grammar', question: item.q, options: item.o, answer: item.a, explain: item.e }));
}

function renderQuiz() {
  const container = $('#quizContent');
  if (!container) return;
  const plan = getPlan();
  const questions = buildQuizQuestions();
  const score = getQuizScore(plan.day);
  container.innerHTML = `
    <div class="card quiz-head">
      <div>
        <span class="phase-pill">Day ${plan.day} · pass mark 80%</span>
        <h2>Quiz để qua bài hôm nay</h2>
        <p class="hint">Gồm 5 câu từ vựng + 5 câu ngữ pháp. Làm sai thì xem giải thích rồi làm lại, không cần áp lực.</p>
      </div>
      <div class="quiz-score ${score?.score >= 80 ? 'passed' : ''}">${score ? `${score.score}%` : '—'}</div>
    </div>
    <form id="quizForm" class="quiz-list">
      ${questions.map((q, i) => `
        <fieldset class="card quiz-card">
          <legend><span class="phase-pill">${q.type}</span> Câu ${i + 1}</legend>
          <h3>${escapeHTML(q.question)}</h3>
          <div class="quiz-options">
            ${q.options.map(opt => `
              <label class="quiz-option"><input type="radio" name="${q.id}" value="${escapeHTML(opt)}"> <span>${escapeHTML(opt)}</span></label>
            `).join('')}
          </div>
          <p class="hint quiz-explain" data-explain-for="${q.id}"></p>
        </fieldset>
      `).join('')}
      <div class="button-row"><button type="submit" class="primary">Chấm quiz</button><button type="button" id="retryQuiz" class="secondary">Làm lại bộ khác</button></div>
    </form>
  `;
  $('#quizForm').addEventListener('submit', event => {
    event.preventDefault();
    let correct = 0;
    questions.forEach(q => {
      const checked = $(`input[name="${q.id}"]:checked`);
      const explainEl = $(`[data-explain-for="${q.id}"]`);
      const ok = checked && checked.value === q.answer;
      if (ok) correct += 1;
      explainEl.innerHTML = ok ? `✅ Đúng. ${escapeHTML(q.explain)}` : `❌ Đáp án đúng: <strong>${escapeHTML(q.answer)}</strong>. ${escapeHTML(q.explain)}`;
    });
    const result = Math.round((correct / questions.length) * 100);
    const scores = getQuizScores();
    scores[plan.day] = { score: result, correct, total: questions.length, savedAt: new Date().toISOString() };
    saveJSON('quizScores', scores);
    const scoreBox = $('.quiz-score');
    if (scoreBox) {
      scoreBox.textContent = `${result}%`;
      scoreBox.classList.toggle('passed', result >= 80);
    }
    updateHeaderProgress();
    renderPlanGrid();
    alert(result >= 80 ? `Pass rồi: ${result}%` : `Chưa pass: ${result}%. Xem giải thích rồi làm lại nhé.`);
  });
  $('#retryQuiz').addEventListener('click', () => { state.quizAnswers = {}; renderQuiz(); });
}

function renderMistakes() {
  const mistakes = loadJSON('mistakes', {});
  $('#mistakeText').value = mistakes[state.selectedDay] || '';
  const filled = Object.entries(mistakes).filter(([, text]) => text.trim().length > 0);
  $('#mistakeHistory').innerHTML = filled.length
    ? filled.map(([day, text]) => `<article class="card"><span class="phase-pill">Day ${day}</span><p>${escapeHTML(text).replace(/\n/g, '<br>')}</p></article>`).join('')
    : '<div class="card"><p class="hint">Chưa có lỗi nào. Sau mỗi ngày, ghi ít nhất 3 lỗi thật ngắn.</p></div>';
}

function saveMistake() {
  const mistakes = loadJSON('mistakes', {});
  mistakes[state.selectedDay] = $('#mistakeText').value.trim();
  saveJSON('mistakes', mistakes);
  renderMistakes();
}
function copyAIPrompt() {
  const plan = getPlan();
  const text = $('#mistakeText').value.trim() || 'Tôi chưa ghi lỗi, hãy hỏi tôi 5 câu để tìm lỗi học PET hôm nay.';
  const prompt = `Tôi đang học PET/B1 Preliminary for Schools, ngày ${plan.day}: ${plan.title}. Đây là lỗi của tôi:\n${text}\nHãy phân loại lỗi thành Vocabulary / Grammar / Reading / Listening / Writing / Speaking, rồi cho cách sửa ngắn gọn và bài tập 10 phút.`;
  navigator.clipboard?.writeText(prompt);
  alert('Đã copy prompt sửa lỗi.');
}

function showTab(tabName) {
  $$('.tab').forEach(tab => tab.classList.toggle('active', tab.dataset.tab === tabName));
  $$('.panel').forEach(panel => panel.classList.toggle('active-panel', panel.id === tabName));
  if (tabName === 'grammar') renderGrammarLesson('grammarContent');
  if (tabName === 'quiz') renderQuiz();
}

function saveStartDate() {
  const value = $('#startDate').value;
  if (!value) return;
  localStorage.setItem(storageKey('startDate'), value);
  alert('Đã lưu ngày bắt đầu.');
}
function applyAutoDayFromStartDate() {
  const stored = localStorage.getItem(storageKey('startDate'));
  if (!stored) return;
  const start = new Date(`${stored}T00:00:00`);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diff = Math.floor((today - start) / 86400000) + 1;
  if (diff >= 1 && diff <= 30) state.selectedDay = diff;
}
function exportProgress() {
  const payload = {
    exportedAt: new Date().toISOString(),
    selectedDay: state.selectedDay,
    startDate: localStorage.getItem(storageKey('startDate')),
    completedTasks: getCompletedTasks(),
    quizScores: getQuizScores(),
    hardWords: getHardWords(),
    mistakes: loadJSON('mistakes', {})
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'pet-30-day-progress.json';
  link.click();
  URL.revokeObjectURL(url);
}
function resetAll() {
  if (!confirm('Xóa toàn bộ tiến độ trên trình duyệt này?')) return;
  Object.keys(localStorage).filter(key => key.startsWith('pet30_')).forEach(key => localStorage.removeItem(key));
  state.selectedDay = 1;
  init();
}
function startSpeakingTimer() {
  clearInterval(state.timerId);
  state.seconds = 60;
  $('#timerText').textContent = state.seconds;
  $('.timer').classList.add('active');
  state.timerId = setInterval(() => {
    state.seconds -= 1;
    $('#timerText').textContent = state.seconds;
    if (state.seconds <= 0) clearInterval(state.timerId);
  }, 1000);
}

function initEvents() {
  $$('.tab').forEach(tab => tab.addEventListener('click', () => showTab(tab.dataset.tab)));
  $('#daySelect').addEventListener('change', event => {
    state.selectedDay = Number(event.target.value);
    state.flashIndex = 0;
    state.flashRevealed = false;
    renderToday();
  });
  $('#prevDay').addEventListener('click', () => { state.selectedDay = Math.max(1, state.selectedDay - 1); state.flashIndex = 0; state.flashRevealed = false; renderToday(); });
  $('#nextDay').addEventListener('click', () => { state.selectedDay = Math.min(30, state.selectedDay + 1); state.flashIndex = 0; state.flashRevealed = false; renderToday(); });
  $('#flashcard').addEventListener('click', () => { state.flashRevealed = !state.flashRevealed; renderFlashcard(); });
  $('#shuffleCard').addEventListener('click', shuffleFlashcard);
  $('#prevCard').addEventListener('click', () => moveFlash(-1));
  $('#nextCard').addEventListener('click', () => moveFlash(1));
  $('#speakWord').addEventListener('click', () => speakText(getPlan().vocab[state.flashIndex % getPlan().vocab.length]));
  $('#markHard').addEventListener('click', () => toggleHardWord(getPlan().vocab[state.flashIndex % getPlan().vocab.length]));
  $('#saveMistake').addEventListener('click', saveMistake);
  $('#copyPrompt').addEventListener('click', copyAIPrompt);
  $('#saveStartDate').addEventListener('click', saveStartDate);
  $('#exportProgress').addEventListener('click', exportProgress);
  $('#resetAll').addEventListener('click', resetAll);
  $('#startTimer').addEventListener('click', startSpeakingTimer);
  document.addEventListener('click', event => {
    const jump = event.target.closest('[data-jump-tab]');
    if (jump) showTab(jump.dataset.jumpTab);
    const speakWord = event.target.closest('[data-speak-word]');
    if (speakWord) speakText(speakWord.dataset.word || speakWord.textContent);
    const sampleBtn = event.target.closest('[data-speak-sample]');
    if (sampleBtn) speakText(sampleBtn.dataset.speakSample);
    if (event.target.closest('[data-timer-quick]')) startSpeakingTimer();
    if (event.target.closest('[data-read-grammar]')) speakText(getGrammarLesson().examples.join('. '));
  });
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(() => {});
}
function init() {
  applyAutoDayFromStartDate();
  const stored = localStorage.getItem(storageKey('startDate'));
  if (stored) $('#startDate').value = stored;
  renderDaySelect();
  renderToday();
  renderPlanGrid();
  renderGrammarLesson('grammarContent');
  renderQuiz();
}

initEvents();
init();
registerServiceWorker();
