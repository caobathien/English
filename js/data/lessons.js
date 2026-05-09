/**
 * ============================================
 * LESSON DATA - English Every Day
 * ============================================
 * Để thêm Day mới, chỉ cần thêm object vào mảng lessons.
 * Website sẽ tự động hiển thị Day mới.
 */

window.LessonData = [
  {
    id: 1,
    day: 1,
    title: "Greeting & Introduce Yourself",
    subtitle: "Chào hỏi và giới thiệu bản thân",
    icon: "👋",
    xpReward: 100,

    // === GRAMMAR / TENSE ===
    tense: {
      name: "Present Simple",
      nameVi: "Thì Hiện Tại Đơn",
      description: "Dùng để diễn tả thói quen, sự thật hiển nhiên, và hành động lặp lại.",
      rules: [
        {
          title: "Thể khẳng định",
          formula: "S + V(s/es)",
          examples: [
            { en: "I go to school every day.", vi: "Tôi đi học mỗi ngày." },
            { en: "She speaks English.", vi: "Cô ấy nói tiếng Anh." }
          ]
        },
        {
          title: "Thể phủ định",
          formula: "S + do/does + not + V",
          examples: [
            { en: "I don't like coffee.", vi: "Tôi không thích cà phê." },
            { en: "He doesn't play football.", vi: "Anh ấy không chơi bóng đá." }
          ]
        },
        {
          title: "Thể nghi vấn",
          formula: "Do/Does + S + V?",
          examples: [
            { en: "Do you speak English?", vi: "Bạn nói tiếng Anh không?" },
            { en: "Does she like music?", vi: "Cô ấy thích nhạc không?" }
          ]
        }
      ],
      signals: ["always", "usually", "often", "sometimes", "never", "every day", "every week", "every month"]
    },

    // === VOCABULARY ===
    vocabulary: [
      {
        id: "v1",
        word: "Hello",
        phonetic: "/həˈloʊ/",
        meaning: "Xin chào",
        example: "Hello, how are you?",
        exampleVi: "Xin chào, bạn khỏe không?"
      },
      {
        id: "v2",
        word: "Goodbye",
        phonetic: "/ɡʊdˈbaɪ/",
        meaning: "Tạm biệt",
        example: "Goodbye, see you tomorrow!",
        exampleVi: "Tạm biệt, hẹn gặp lại ngày mai!"
      },
      {
        id: "v3",
        word: "Thank you",
        phonetic: "/θæŋk juː/",
        meaning: "Cảm ơn",
        example: "Thank you for your help.",
        exampleVi: "Cảm ơn bạn đã giúp đỡ."
      },
      {
        id: "v4",
        word: "Please",
        phonetic: "/pliːz/",
        meaning: "Làm ơn",
        example: "Please sit down.",
        exampleVi: "Làm ơn ngồi xuống."
      },
      {
        id: "v5",
        word: "Sorry",
        phonetic: "/ˈsɒri/",
        meaning: "Xin lỗi",
        example: "Sorry, I'm late.",
        exampleVi: "Xin lỗi, tôi đến muộn."
      },
      {
        id: "v6",
        word: "Name",
        phonetic: "/neɪm/",
        meaning: "Tên",
        example: "My name is Maria.",
        exampleVi: "Tên tôi là Maria."
      },
      {
        id: "v7",
        word: "Nice",
        phonetic: "/naɪs/",
        meaning: "Tốt đẹp, dễ chịu",
        example: "Nice to meet you!",
        exampleVi: "Rất vui được gặp bạn!"
      },
      {
        id: "v8",
        word: "Friend",
        phonetic: "/frend/",
        meaning: "Bạn bè",
        example: "She is my best friend.",
        exampleVi: "Cô ấy là bạn thân nhất của tôi."
      },
      {
        id: "v9",
        word: "Morning",
        phonetic: "/ˈmɔːrnɪŋ/",
        meaning: "Buổi sáng",
        example: "Good morning, everyone!",
        exampleVi: "Chào buổi sáng, mọi người!"
      },
      {
        id: "v10",
        word: "Student",
        phonetic: "/ˈstuːdənt/",
        meaning: "Học sinh, sinh viên",
        example: "I am a student.",
        exampleVi: "Tôi là một học sinh."
      }
    ],

    // === LISTENING & SPEAKING ===
    listening: [
      { id: "l1", sentence: "Hello, my name is John.", sentenceVi: "Xin chào, tên tôi là John." },
      { id: "l2", sentence: "Nice to meet you.", sentenceVi: "Rất vui được gặp bạn." },
      { id: "l3", sentence: "Good morning, everyone!", sentenceVi: "Chào buổi sáng, mọi người!" },
      { id: "l4", sentence: "I am a student.", sentenceVi: "Tôi là một học sinh." },
      { id: "l5", sentence: "What is your name?", sentenceVi: "Tên bạn là gì?" }
    ],

    // === WRITING PRACTICE ===
    writing: [
      {
        id: "w1",
        type: "fill-blank",
        instruction: "Điền vào chỗ trống",
        question: "My _____ is John.",
        answer: "name",
        hint: "Từ chỉ 'tên' trong tiếng Anh"
      },
      {
        id: "w2",
        type: "fill-blank",
        instruction: "Điền vào chỗ trống",
        question: "Nice to _____ you.",
        answer: "meet",
        hint: "Từ chỉ 'gặp' trong tiếng Anh"
      },
      {
        id: "w3",
        type: "fill-blank",
        instruction: "Điền vào chỗ trống",
        question: "Good _____, everyone!",
        answer: "morning",
        hint: "Buổi sáng"
      },
      {
        id: "w4",
        type: "complete",
        instruction: "Hoàn thành câu",
        question: "I _____ a student.",
        answer: "am",
        hint: "Động từ to be cho ngôi I"
      },
      {
        id: "w5",
        type: "dialog",
        instruction: "Trả lời hội thoại",
        question: "What is your name?",
        answerPattern: "my name is",
        hint: "Trả lời: My name is ..."
      }
    ],

    // === MULTIPLE CHOICE QUIZ ===
    quizzes: [
      {
        id: "q1",
        question: '"Hello" nghĩa là gì?',
        options: ["Xin chào", "Tạm biệt", "Cảm ơn", "Xin lỗi"],
        correct: 0
      },
      {
        id: "q2",
        question: '"Goodbye" nghĩa là gì?',
        options: ["Xin chào", "Tạm biệt", "Làm ơn", "Buổi sáng"],
        correct: 1
      },
      {
        id: "q3",
        question: '"Thank you" nghĩa là gì?',
        options: ["Xin lỗi", "Tốt đẹp", "Cảm ơn", "Bạn bè"],
        correct: 2
      },
      {
        id: "q4",
        question: 'Cách nói "Rất vui được gặp bạn"?',
        options: ["Good morning", "Nice to meet you", "Thank you", "Goodbye"],
        correct: 1
      },
      {
        id: "q5",
        question: '"Good morning" dùng khi nào?',
        options: ["Buổi tối", "Buổi trưa", "Buổi sáng", "Buổi chiều"],
        correct: 2
      },
      {
        id: "q6",
        question: 'Chọn câu đúng (Present Simple):',
        options: ["She go to school.", "She goes to school.", "She going to school.", "She gone to school."],
        correct: 1
      },
      {
        id: "q7",
        question: '"I _____ a student." — Chọn đáp án đúng:',
        options: ["is", "are", "am", "be"],
        correct: 2
      },
      {
        id: "q8",
        question: 'Dấu hiệu nào KHÔNG phải của Present Simple?',
        options: ["always", "every day", "right now", "usually"],
        correct: 2
      }
    ]
  }
];
