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

const state = {
  selectedDay: 1,
  flashIndex: 0,
  flashRevealed: false,
  timerId: null,
  seconds: 60
};

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const storageKey = key => `pet30_${key}`;

function getPlan(day = state.selectedDay) {
  return plans.find(item => item.day === Number(day)) || plans[0];
}

function loadJSON(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(storageKey(key))) ?? fallback;
  } catch {
    return fallback;
  }
}

function saveJSON(key, value) {
  localStorage.setItem(storageKey(key), JSON.stringify(value));
}

function getCompletedTasks() {
  return loadJSON('completedTasks', {});
}

function setCompleted(day, taskIndex, value) {
  const data = getCompletedTasks();
  if (!data[day]) data[day] = {};
  data[day][taskIndex] = value;
  saveJSON('completedTasks', data);
  updateHeaderProgress();
  renderPlanGrid();
}

function isDayCompleted(day) {
  const data = getCompletedTasks()[day] || {};
  const taskCount = getPlan(day).tasks.length;
  return Array.from({ length: taskCount }).every((_, index) => data[index]);
}

function updateHeaderProgress() {
  const completed = plans.filter(plan => isDayCompleted(plan.day)).length;
  const percent = Math.round((completed / plans.length) * 100);
  $('#progressPercent').textContent = `${percent}%`;
  $('#todayLabel').textContent = `Day ${state.selectedDay}`;
}

function renderDaySelect() {
  const select = $('#daySelect');
  select.innerHTML = plans.map(plan => `<option value="${plan.day}">Day ${plan.day} — ${plan.title}</option>`).join('');
  select.value = state.selectedDay;
}

function renderToday() {
  const plan = getPlan();
  const completed = getCompletedTasks()[plan.day] || {};
  const doneCount = Object.values(completed).filter(Boolean).length;
  const percent = Math.round((doneCount / plan.tasks.length) * 100);

  $('#todayContent').innerHTML = `
    <div class="today-grid">
      <article class="card day-hero">
        <div class="day-title-row">
          <div>
            <p class="eyebrow">Day ${plan.day}</p>
            <h2>${plan.title}</h2>
            <span class="phase-pill">${plan.phase}</span>
          </div>
          <span class="score-pill">${percent}% done</span>
        </div>
        <p class="hint">${plan.focus}</p>
        <div class="progress-bar" aria-label="Tiến độ ngày"><div style="width:${percent}%"></div></div>
        <div class="meta-grid">
          <div class="meta-box"><small>Topic</small><strong>${plan.topic}</strong></div>
          <div class="meta-box"><small>Grammar</small><strong>${plan.grammar}</strong></div>
          <div class="meta-box"><small>Skill</small><strong>${plan.skill}</strong></div>
        </div>
        <div>
          <h3>Checklist hôm nay</h3>
          <div id="taskList" class="task-list"></div>
        </div>
      </article>
      <aside class="card">
        <h3>Khối lượng vừa đủ</h3>
        <p><strong>Thời gian:</strong> ${plan.time}</p>
        <p><strong>Dùng đề:</strong> ${plan.examUse}</p>
        <p><strong>Writing:</strong> ${plan.writing}</p>
        <h3>Speaking nhanh</h3>
        <div class="chips">${plan.speaking.slice(0, 3).map(q => `<span class="chip">${q}</span>`).join('')}</div>
      </aside>
    </div>
  `;

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
    });
    taskList.appendChild(clone);
  });

  $('#daySelect').value = state.selectedDay;
  updateHeaderProgress();
  renderVocab();
  renderSpeaking();
  renderMistakes();
}

function renderPlanGrid() {
  const grid = $('#planGrid');
  grid.innerHTML = plans.map(plan => {
    const completedClass = isDayCompleted(plan.day) ? 'completed' : '';
    const currentClass = plan.day === state.selectedDay ? 'current' : '';
    return `
      <article class="card plan-card ${completedClass} ${currentClass}" data-day="${plan.day}">
        <div class="day-title-row">
          <span class="phase-pill">Day ${plan.day}</span>
          <span class="score-pill">${isDayCompleted(plan.day) ? 'done' : plan.phase}</span>
        </div>
        <h3>${plan.title}</h3>
        <p>${plan.focus}</p>
        <p><strong>${plan.skill}</strong></p>
      </article>
    `;
  }).join('');

  $$('.plan-card').forEach(card => {
    card.addEventListener('click', () => {
      state.selectedDay = Number(card.dataset.day);
      state.flashIndex = 0;
      state.flashRevealed = false;
      renderToday();
      showTab('today');
    });
  });
}

function getReviewWords() {
  const days = [state.selectedDay - 1, state.selectedDay - 3, state.selectedDay - 7].filter(day => day >= 1);
  const words = [];
  days.forEach(day => {
    const plan = getPlan(day);
    plan.vocab.slice(0, 8).forEach(word => words.push({ word, day }));
  });
  return words;
}

function renderVocab() {
  const plan = getPlan();
  $('#vocabList').innerHTML = plan.vocab.map(word => `<span class="chip">${word}</span>`).join('');
  const reviewWords = getReviewWords();
  $('#reviewList').innerHTML = reviewWords.length
    ? reviewWords.map(item => `<span class="chip">D${item.day}: ${item.word}</span>`).join('')
    : '<span class="chip">Chưa có ngày cũ để ôn</span>';
  renderFlashcard();
}

function renderFlashcard() {
  const plan = getPlan();
  const word = plan.vocab[state.flashIndex % plan.vocab.length];
  $('#flashWord').textContent = word;
  $('#flashMeta').textContent = `Day ${plan.day} · ${plan.topic}`;
  $('#flashMeaning').textContent = state.flashRevealed
    ? `Tự đặt 1 câu B1 với “${word}”, rồi nói to câu đó. Nếu không đặt được câu, đánh dấu từ này để ôn lại.`
    : 'Bấm để hiện nhiệm vụ dùng từ.';
}

function shuffleFlashcard() {
  const plan = getPlan();
  state.flashIndex = Math.floor(Math.random() * plan.vocab.length);
  state.flashRevealed = false;
  renderFlashcard();
}

function renderSpeaking() {
  const plan = getPlan();
  const dailyQuestions = plan.speaking.map(question => ({ type: 'Theo ngày học', question }));
  const pastQuestions = speakingPastQuestions.map(question => ({ type: 'Đề Speaking kì trước', question }));
  const all = [...dailyQuestions, ...pastQuestions];

  $('#speakingContent').innerHTML = all.map(item => `
    <article class="card speaking-card">
      <span class="phase-pill">${item.type}</span>
      <h3>${item.question}</h3>
      <p class="frame"><strong>Khung trả lời:</strong><br>
      I think / I prefer ... because ... For example, ... Also, ... That's why ...</p>
      <p class="hint">Mục tiêu: nói 45–60 giây, không cần hoàn hảo, nhưng phải có lý do và ví dụ.</p>
    </article>
  `).join('');
}

function renderMistakes() {
  const mistakes = loadJSON('mistakes', {});
  $('#mistakeText').value = mistakes[state.selectedDay] || '';
  const filled = Object.entries(mistakes).filter(([, text]) => text.trim().length > 0);
  $('#mistakeHistory').innerHTML = filled.length
    ? filled.map(([day, text]) => `
      <article class="card">
        <span class="phase-pill">Day ${day}</span>
        <p>${escapeHTML(text).replace(/\n/g, '<br>')}</p>
      </article>
    `).join('')
    : '<div class="card"><p class="hint">Chưa có lỗi nào. Sau mỗi ngày, ghi ít nhất 3 lỗi thật ngắn.</p></div>';
}

function escapeHTML(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
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
  const prompt = `Tôi đang học PET/B1 Preliminary for Schools, ngày ${plan.day}: ${plan.title}. Đây là lỗi của tôi:\n${text}\nHãy giúp tôi phân loại lỗi thành Vocabulary / Grammar / Reading / Listening / Writing / Speaking, rồi cho cách sửa ngắn gọn và bài tập 10 phút.`;
  navigator.clipboard?.writeText(prompt);
  alert('Đã copy prompt sửa lỗi.');
}

function showTab(tabName) {
  $$('.tab').forEach(tab => tab.classList.toggle('active', tab.dataset.tab === tabName));
  $$('.panel').forEach(panel => panel.classList.toggle('active-panel', panel.id === tabName));
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
    if (state.seconds <= 0) {
      clearInterval(state.timerId);
      state.timerId = null;
    }
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
  $('#prevDay').addEventListener('click', () => {
    state.selectedDay = Math.max(1, state.selectedDay - 1);
    state.flashIndex = 0;
    state.flashRevealed = false;
    renderToday();
  });
  $('#nextDay').addEventListener('click', () => {
    state.selectedDay = Math.min(30, state.selectedDay + 1);
    state.flashIndex = 0;
    state.flashRevealed = false;
    renderToday();
  });
  $('#flashcard').addEventListener('click', () => {
    state.flashRevealed = !state.flashRevealed;
    renderFlashcard();
  });
  $('#shuffleCard').addEventListener('click', shuffleFlashcard);
  $('#saveMistake').addEventListener('click', saveMistake);
  $('#copyPrompt').addEventListener('click', copyAIPrompt);
  $('#saveStartDate').addEventListener('click', saveStartDate);
  $('#exportProgress').addEventListener('click', exportProgress);
  $('#resetAll').addEventListener('click', resetAll);
  $('#startTimer').addEventListener('click', startSpeakingTimer);
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
}

function init() {
  applyAutoDayFromStartDate();
  const stored = localStorage.getItem(storageKey('startDate'));
  if (stored) $('#startDate').value = stored;
  renderDaySelect();
  renderToday();
  renderPlanGrid();
}

initEvents();
init();
registerServiceWorker();
