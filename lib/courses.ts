export interface Course {
  id: string;
  title: string;
  board: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  subjects: string[];
  features: string[];
  duration: string;
  classLevel: string;
  gradient: string;
  bgColor: string;
  borderColor: string;
  icon: string;
  syllabus: {
    module: string;
    topics: string[];
  }[];
  faculty: {
    name: string;
    subject: string;
    experience: string;
    qualification: string;
  }[];
  testimonials: {
    name: string;
    class: string;
    score: string;
    quote: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  pricing: {
    monthly: string;
    quarterly: string;
    annually: string;
  };
  schedule: {
    days: string;
    time: string;
    batchType: string;
  };
}

export const coursesData: Course[] = [
  {
    id: "middle-school",
    title: "Classes 6-8 (Middle School)",
    board: "CBSE",
    slug: "classes-6-8-middle-school",
    shortDescription:
      "Build strong foundational concepts with activity-based learning for middle school students.",
    fullDescription:
      "Our Middle School program (Classes 6-8) is designed to build a strong academic foundation while nurturing curiosity and critical thinking. We use an activity-based learning approach that makes complex concepts easy to understand and retain. Our experienced faculty focuses on concept clarity, regular practice, and continuous assessment to ensure every student develops a love for learning. With small batch sizes, we provide individualized attention to address each student's unique learning needs.",
    subjects: [
      "Mathematics",
      "Science",
      "English",
      "Social Science",
      "Hindi/Odia",
    ],
    features: [
      "Concept-building approach with visual aids",
      "Activity-based and experiential learning",
      "Regular class tests and feedback",
      "Parent-teacher interactions every month",
      "Homework support and doubt clearing",
      "Foundation building for competitive exams",
    ],
    duration: "Academic Year (April - March)",
    classLevel: "6-8",
    gradient: "from-primary to-teal-500",
    bgColor: "bg-primary/5",
    borderColor: "border-primary/15",
    icon: "BookOpen",
    syllabus: [
      {
        module: "Mathematics",
        topics: [
          "Number System & Algebra",
          "Geometry & Mensuration",
          "Ratio, Proportion & Percentage",
          "Data Handling & Statistics",
          "Mental Math & Problem Solving",
        ],
      },
      {
        module: "Science",
        topics: [
          "Physics: Motion, Force & Energy",
          "Chemistry: Matter & Materials",
          "Biology: Living Organisms & Environment",
          "Practical Experiments & Lab Work",
          "Scientific Method & Observation",
        ],
      },
      {
        module: "English",
        topics: [
          "Grammar & Vocabulary Building",
          "Reading Comprehension",
          "Creative & Formal Writing",
          "Literature Study",
          "Communication Skills",
        ],
      },
    ],
    faculty: [
      {
        name: "Mrs. Priya Sharma",
        subject: "Mathematics & Science",
        experience: "12 years",
        qualification: "M.Sc, B.Ed",
      },
      {
        name: "Mr. Rajesh Kumar",
        subject: "English & Social Science",
        experience: "10 years",
        qualification: "MA English, B.Ed",
      },
    ],
    testimonials: [
      {
        name: "Ananya Patel",
        class: "Class 8",
        score: "95%",
        quote:
          "The teachers make learning so fun! I used to struggle with math, but now it's my favorite subject.",
      },
      {
        name: "Rahul Mohanty",
        class: "Class 7",
        score: "92%",
        quote:
          "I love the activity-based classes. Everything is so clear and easy to understand.",
      },
    ],
    faq: [
      {
        question: "What is the batch size for middle school classes?",
        answer:
          "We maintain small batch sizes of 15-20 students to ensure individual attention and better learning outcomes.",
      },
      {
        question: "Do you provide study materials?",
        answer:
          "Yes, we provide comprehensive study materials including notes, practice worksheets, and reference books for all subjects.",
      },
      {
        question: "How often are parent-teacher meetings conducted?",
        answer:
          "We conduct parent-teacher meetings once every month to discuss student progress and address any concerns.",
      },
    ],
    pricing: {
      monthly: "₹2,500/month",
      quarterly: "₹7,000/quarter",
      annually: "₹25,000/year",
    },
    schedule: {
      days: "Monday to Saturday",
      time: "3:30 PM - 5:30 PM",
      batchType: "Regular & Weekend batches available",
    },
  },
  {
    id: "cbse-secondary",
    title: "Classes 9-10 (Secondary)",
    board: "CBSE",
    slug: "classes-9-10-secondary",
    shortDescription:
      "Comprehensive board exam preparation with NCERT mastery and mock tests.",
    fullDescription:
      "Our Classes 9-10 program is specifically designed to prepare students for CBSE board exams with excellence. We follow a structured approach that combines NCERT textbook mastery with additional reference materials for deeper understanding. Regular mock board exams, previous year paper practice, and intensive revision sessions ensure students are fully prepared for their board examinations. Our faculty provides personalized guidance to help each student achieve their target scores.",
    subjects: [
      "Mathematics",
      "Science",
      "English",
      "Social Science",
      "Hindi/Odia",
    ],
    features: [
      "Board exam focused preparation strategy",
      "NCERT + reference books coverage",
      "Mock board exams with detailed analysis",
      "Previous year paper practice",
      "Chapter-wise test series",
      "Intensive revision before boards",
    ],
    duration: "Academic Year (April - March)",
    classLevel: "9-10",
    gradient: "from-teal-600 to-emerald-500",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-100",
    icon: "Target",
    syllabus: [
      {
        module: "Mathematics",
        topics: [
          "Real Numbers & Polynomials",
          "Linear Equations & Quadratic Equations",
          "Triangles & Coordinate Geometry",
          "Trigonometry & Applications",
          "Statistics & Probability",
        ],
      },
      {
        module: "Science",
        topics: [
          "Physics: Light, Electricity & Magnetic Effects",
          "Chemistry: Reactions, Acids & Metals",
          "Biology: Life Processes & Heredity",
          "Natural Resources & Environment",
          "Practical Lab Experiments",
        ],
      },
      {
        module: "Social Science",
        topics: [
          "History: Nationalism & Globalization",
          "Geography: Resources & Development",
          "Political Science: Democracy & Power Sharing",
          "Economics: Development & Sectors",
          "Map Work & Case Studies",
        ],
      },
    ],
    faculty: [
      {
        name: "Mr. Suresh Panda",
        subject: "Mathematics",
        experience: "15 years",
        qualification: "M.Sc Mathematics, B.Ed",
      },
      {
        name: "Dr. Meena Das",
        subject: "Science",
        experience: "14 years",
        qualification: "Ph.D Physics, B.Ed",
      },
    ],
    testimonials: [
      {
        name: "Sneha Rout",
        class: "Class 10",
        score: "96%",
        quote:
          "The mock tests and previous year paper practice made board exams feel easy. Got 96%!",
      },
      {
        name: "Arjun Nayak",
        class: "Class 10",
        score: "94%",
        quote:
          "Best coaching for board preparation. Teachers are very supportive and clear all doubts.",
      },
    ],
    faq: [
      {
        question: "How many mock tests are conducted before board exams?",
        answer:
          "We conduct at least 8-10 full-length mock board exams before the actual board examinations, with detailed performance analysis.",
      },
      {
        question: "Do you cover sample papers and previous year questions?",
        answer:
          "Yes, we extensively cover CBSE sample papers and last 10 years' previous question papers with detailed solutions.",
      },
      {
        question: "What happens if a student scores low in tests?",
        answer:
          "We provide remedial classes and one-on-one doubt clearing sessions to help students improve in weak areas.",
      },
    ],
    pricing: {
      monthly: "₹3,000/month",
      quarterly: "₹8,500/quarter",
      annually: "₹30,000/year",
    },
    schedule: {
      days: "Monday to Saturday",
      time: "4:00 PM - 6:00 PM",
      batchType: "Morning & Evening batches available",
    },
  },
  {
    id: "cbse-science",
    title: "Class 11-12 Science (CBSE)",
    board: "CBSE",
    slug: "class-11-12-science-cbse",
    shortDescription:
      "Integrated board and JEE/NEET preparation with expert faculty.",
    fullDescription:
      "Our Class 11-12 Science program offers an integrated approach that prepares students for both CBSE board exams and competitive exams like JEE and NEET. We cover the complete syllabus with in-depth concept clarity, advanced problem-solving techniques, and regular practice sessions. Our faculty includes experienced teachers who have produced numerous toppers in board and competitive exams. Lab practicals guidance, weekly problem-solving sessions, and comprehensive study material ensure holistic preparation.",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "English"],
    features: [
      "Board + JEE/NEET integrated preparation",
      "Lab practicals and viva guidance",
      "Weekly problem-solving sessions",
      "Comprehensive study material",
      "Regular doubt clearing classes",
      "Performance tracking and mentoring",
    ],
    duration: "2 Years (Class 11-12)",
    classLevel: "11-12",
    gradient: "from-teal-700 to-cyan-600",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-100",
    icon: "Atom",
    syllabus: [
      {
        module: "Physics",
        topics: [
          "Mechanics: Laws of Motion & Work Energy",
          "Electrodynamics: Current Electricity & Magnetism",
          "Optics: Ray & Wave Optics",
          "Modern Physics: Atoms & Nuclei",
          "Experiments & Practicals",
        ],
      },
      {
        module: "Chemistry",
        topics: [
          "Physical Chemistry: Thermodynamics & Equilibrium",
          "Organic Chemistry: Hydrocarbons & Alcohols",
          "Inorganic Chemistry: Periodic Table & Coordination",
          "Chemical Kinetics & Electrochemistry",
          "Lab Work & Viva Preparation",
        ],
      },
      {
        module: "Mathematics",
        topics: [
          "Calculus: Differentiation & Integration",
          "Algebra: Matrices & Determinants",
          "Coordinate Geometry & Vectors",
          "Probability & Mathematical Reasoning",
          "Application-Based Problems",
        ],
      },
    ],
    faculty: [
      {
        name: "Dr. Amit Mishra",
        subject: "Physics",
        experience: "18 years",
        qualification: "Ph.D Physics, IIT Alumni",
      },
      {
        name: "Mrs. Kaveri Sen",
        subject: "Chemistry",
        experience: "16 years",
        qualification: "M.Sc Chemistry, B.Ed",
      },
    ],
    testimonials: [
      {
        name: "Priyanka Singh",
        class: "Class 12",
        score: "97%",
        quote:
          "The integrated approach helped me score 97% in boards and crack NEET with a good rank.",
      },
      {
        name: "Vikram Reddy",
        class: "Class 12",
        score: "95%",
        quote:
          "Excellent faculty and study material. JEE preparation along with boards was seamless.",
      },
    ],
    faq: [
      {
        question: "Is this program suitable for both JEE and NEET?",
        answer:
          "Yes, our program covers the complete syllabus for both JEE (Mathematics) and NEET (Biology). Students can choose their focus area.",
      },
      {
        question:
          "Do you provide separate batches for board and competitive exams?",
        answer:
          "We have an integrated approach, but offer additional doubt clearing and practice sessions specifically for competitive exams.",
      },
      {
        question: "How are lab practicals handled?",
        answer:
          "We provide complete guidance for all lab experiments, record preparation, and viva voce with regular practical sessions.",
      },
    ],
    pricing: {
      monthly: "₹4,500/month",
      quarterly: "₹12,500/quarter",
      annually: "₹45,000/year",
    },
    schedule: {
      days: "Monday to Saturday",
      time: "6:00 AM - 8:00 AM & 4:00 PM - 6:00 PM",
      batchType: "Morning & Evening batches",
    },
  },
  {
    id: "cbse-commerce",
    title: "Class 11-12 Commerce (CBSE)",
    board: "CBSE",
    slug: "class-11-12-commerce-cbse",
    shortDescription:
      "Master Accountancy, Business Studies & Economics with practical case studies.",
    fullDescription:
      "Our Commerce program provides comprehensive coaching in Accountancy, Business Studies, Economics, and Mathematics/Informatics Practices. We use practical case studies and real-world examples to make commerce subjects engaging and easy to understand. Our faculty includes qualified professionals who bring industry experience into the classroom. We also provide CA foundation basics, project guidance, and board exam mastery to ensure students are well-prepared for both academics and future career paths.",
    subjects: [
      "Accountancy",
      "Business Studies",
      "Economics",
      "Mathematics/IP",
      "English",
    ],
    features: [
      "Practical case studies approach",
      "Project and assignment guidance",
      "CA foundation basics included",
      "Board exam mastery techniques",
      "Real-world business examples",
      "Career counseling for commerce students",
    ],
    duration: "2 Years (Class 11-12)",
    classLevel: "11-12",
    gradient: "from-accent to-amber-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-100",
    icon: "TrendingUp",
    syllabus: [
      {
        module: "Accountancy",
        topics: [
          "Financial Accounting: Journal to Balance Sheet",
          "Partnership Accounts",
          "Company Accounts: Shares & Debentures",
          "Cash Flow Statement",
          "Analysis of Financial Statements",
        ],
      },
      {
        module: "Business Studies",
        topics: [
          "Principles & Functions of Management",
          "Business Finance & Trade",
          "Marketing Management",
          "Consumer Protection",
          "Case Studies & Applications",
        ],
      },
      {
        module: "Economics",
        topics: [
          "Microeconomics: Demand, Supply & Market Equilibrium",
          "Macroeconomics: National Income & Banking",
          "Indian Economic Development",
          "Statistics for Economics",
          "Current Economic Affairs",
        ],
      },
    ],
    faculty: [
      {
        name: "CA Sunita Agarwal",
        subject: "Accountancy",
        experience: "14 years",
        qualification: "CA, M.Com",
      },
      {
        name: "Mr. Debasis Mohanty",
        subject: "Business Studies & Economics",
        experience: "12 years",
        qualification: "MBA, MA Economics",
      },
    ],
    testimonials: [
      {
        name: "Ishita Gupta",
        class: "Class 12",
        score: "94%",
        quote:
          "Case studies made Business Studies so interesting. Scored 94% in boards!",
      },
      {
        name: "Karan Mehta",
        class: "Class 12",
        score: "96%",
        quote:
          "Best commerce coaching! The CA foundation basics gave me a head start.",
      },
    ],
    faq: [
      {
        question: "Is Mathematics compulsory in Commerce?",
        answer:
          "No, students can choose either Mathematics or Informatics Practices (IP) as their 4th subject in Commerce stream.",
      },
      {
        question: "Do you help with project work?",
        answer:
          "Yes, we provide complete guidance for all commerce projects including Business Studies and Economics practical files.",
      },
      {
        question: "Will this help in CA foundation preparation?",
        answer:
          "Absolutely! Our program includes CA foundation basics which gives students a strong advantage for future CA preparation.",
      },
    ],
    pricing: {
      monthly: "₹4,000/month",
      quarterly: "₹11,000/quarter",
      annually: "₹40,000/year",
    },
    schedule: {
      days: "Monday to Saturday",
      time: "4:00 PM - 6:00 PM",
      batchType: "Regular & Weekend batches",
    },
  },
  {
    id: "chse-science",
    title: "Class 11-12 Science (CHSE)",
    board: "CHSE",
    slug: "class-11-12-science-chse",
    shortDescription:
      "CHSE board-focused science program with comprehensive test series.",
    fullDescription:
      "Our CHSE Science program is specifically designed for Odisha State Board students, covering the complete CHSE syllabus with board exam-focused preparation. We provide chapter-wise test series, board exam strategies, and lab practical support to ensure students excel in their +2 examinations. Our faculty has deep understanding of CHSE exam patterns and marking schemes, enabling us to train students effectively for scoring high marks.",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "English/MIL"],
    features: [
      "CHSE syllabus focused preparation",
      "Chapter-wise test series",
      "Board exam strategies and tips",
      "Lab & practical support",
      "Previous year question analysis",
      "MIL (Modern Indian Language) support",
    ],
    duration: "2 Years (Class 11-12)",
    classLevel: "11-12",
    gradient: "from-emerald-600 to-teal-500",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-100",
    icon: "FlaskConical",
    syllabus: [
      {
        module: "Physics (+2 CHSE)",
        topics: [
          "Mechanics & Properties of Matter",
          "Heat & Thermodynamics",
          "Optics & Wave Theory",
          "Electricity & Magnetism",
          "Modern Physics & Electronics",
        ],
      },
      {
        module: "Chemistry (+2 CHSE)",
        topics: [
          "Physical Chemistry",
          "Inorganic Chemistry",
          "Organic Chemistry",
          "Environmental Chemistry",
          "Practical Chemistry",
        ],
      },
      {
        module: "Mathematics (+2 CHSE)",
        topics: [
          "Algebra & Trigonometry",
          "Calculus",
          "Coordinate Geometry",
          "Vectors & 3D Geometry",
          "Statistics & Probability",
        ],
      },
    ],
    faculty: [
      {
        name: "Mr. Bibhuti Bhusan Dash",
        subject: "Physics",
        experience: "16 years",
        qualification: "M.Sc Physics, B.Ed",
      },
      {
        name: "Mrs. Lipy Mohapatra",
        subject: "Chemistry",
        experience: "13 years",
        qualification: "M.Sc Chemistry, B.Ed",
      },
    ],
    testimonials: [
      {
        name: "Sambit Patra",
        class: "Class 12 (CHSE)",
        score: "93%",
        quote:
          "Perfect for CHSE board prep. Teachers know the exam pattern inside out!",
      },
      {
        name: "Deepti Rath",
        class: "Class 12 (CHSE)",
        score: "91%",
        quote:
          "Chapter-wise tests and previous year papers made all the difference.",
      },
    ],
    faq: [
      {
        question: "Is this program different from CBSE Science?",
        answer:
          "Yes, this program is specifically designed for CHSE (Odisha State Board) syllabus and exam pattern, while CBSE Science follows the central board curriculum.",
      },
      {
        question: "Do you provide Odia medium support?",
        answer:
          "Yes, we provide support for MIL (Modern Indian Language) including Odia as per CHSE requirements.",
      },
      {
        question: "How is the test series structured?",
        answer:
          "We conduct chapter-wise tests after completing each chapter, followed by unit tests, and full-length mock exams before boards.",
      },
    ],
    pricing: {
      monthly: "₹3,500/month",
      quarterly: "₹10,000/quarter",
      annually: "₹36,000/year",
    },
    schedule: {
      days: "Monday to Saturday",
      time: "10:00 AM - 12:00 PM & 4:00 PM - 6:00 PM",
      batchType: "Morning & Evening batches",
    },
  },
  {
    id: "chse-arts",
    title: "Class 11-12 Arts (CHSE)",
    board: "CHSE",
    slug: "class-11-12-arts-chse",
    shortDescription:
      "Comprehensive Arts program with answer writing practice and current affairs.",
    fullDescription:
      "Our CHSE Arts program offers comprehensive coaching in History, Political Science, Economics, Geography/Sociology, and English/MIL. We focus on developing strong answer writing skills, map and diagram guidance, and essay writing workshops. Regular current affairs sessions keep students updated with contemporary issues. Our faculty emphasizes conceptual clarity and presentation skills to help students score high marks in theory examinations.",
    subjects: [
      "History",
      "Political Science",
      "Economics",
      "Geography/Sociology",
      "English/MIL",
    ],
    features: [
      "Answer writing practice sessions",
      "Map & diagram guidance",
      "Essay writing workshops",
      "Current affairs discussions",
      "Presentation skills development",
      "Career guidance for Arts students",
    ],
    duration: "2 Years (Class 11-12)",
    classLevel: "11-12",
    gradient: "from-rose-600 to-pink-500",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-100",
    icon: "Palette",
    syllabus: [
      {
        module: "History",
        topics: [
          "Ancient & Medieval Indian History",
          "Modern Indian History & Freedom Struggle",
          "World History",
          "Historical Sources & Historiography",
          "Map Work & Timeline Practice",
        ],
      },
      {
        module: "Political Science",
        topics: [
          "Political Theory & Constitution",
          "Indian Government & Politics",
          "International Relations",
          "Contemporary World Politics",
          "Answer Writing & Case Studies",
        ],
      },
      {
        module: "Economics",
        topics: [
          "Microeconomics & Macroeconomics",
          "Indian Economic Development",
          "Statistics",
          "Current Economic Issues",
          "Data Interpretation",
        ],
      },
    ],
    faculty: [
      {
        name: "Dr. Pranab Kumar Sahoo",
        subject: "History & Political Science",
        experience: "15 years",
        qualification: "Ph.D History, MA Pol. Science",
      },
      {
        name: "Mrs. Rashmi Rekha Behera",
        subject: "Economics & Geography",
        experience: "11 years",
        qualification: "MA Economics, M.A Geography",
      },
    ],
    testimonials: [
      {
        name: "Pooja Jena",
        class: "Class 12 (Arts)",
        score: "90%",
        quote:
          "Answer writing practice sessions were game-changer. My presentation improved drastically!",
      },
      {
        name: "Abhishek Tripathy",
        class: "Class 12 (Arts)",
        score: "88%",
        quote:
          "Current affairs sessions and essay workshops made learning comprehensive and interesting.",
      },
    ],
    faq: [
      {
        question: "Can I prepare for competitive exams with Arts subjects?",
        answer:
          "Yes, Arts subjects provide strong foundation for UPSC, OPSC, and other civil services examinations. We guide students accordingly.",
      },
      {
        question: "How important is answer writing in Arts?",
        answer:
          "Answer writing is crucial in Arts examinations. We conduct regular practice sessions with model answers and feedback.",
      },
      {
        question: "Do you cover map work for Geography and History?",
        answer:
          "Yes, map work is an integral part of our teaching. We provide dedicated sessions for map pointing and diagram practice.",
      },
    ],
    pricing: {
      monthly: "₹3,000/month",
      quarterly: "₹8,500/quarter",
      annually: "₹30,000/year",
    },
    schedule: {
      days: "Monday to Saturday",
      time: "10:00 AM - 12:00 PM",
      batchType: "Morning batch",
    },
  },
  {
    id: "competitive",
    title: "JEE & NEET Foundation",
    board: "Competitive",
    slug: "jee-neet-foundation",
    shortDescription:
      "Advanced preparation for JEE & NEET from Class 8 with expert mentorship.",
    fullDescription:
      "Our JEE & NEET Foundation program starts from Class 8 and builds advanced problem-solving skills, conceptual depth, and exam temperament required to crack these prestigious competitive exams. We provide foundation coaching with advanced problem solving, national-level test series, and mentorship from toppers who have successfully cleared these exams. Our structured approach ensures students develop the right aptitude and skills from an early age.",
    subjects: ["Physics", "Chemistry", "Mathematics (JEE)", "Biology (NEET)"],
    features: [
      "Foundation building from Class 8",
      "Advanced problem solving techniques",
      "National-level test series",
      "Mentorship from IIT/AIIMS toppers",
      "Time management strategies",
      "Stress management and motivation",
    ],
    duration: "4-6 Years (Class 8-12)",
    classLevel: "8-12",
    gradient: "from-red-600 to-rose-500",
    bgColor: "bg-red-50",
    borderColor: "border-red-100",
    icon: "Rocket",
    syllabus: [
      {
        module: "Physics (JEE/NEET)",
        topics: [
          "Mechanics (Advanced Level)",
          "Electrodynamics & Magnetism",
          "Optics & Modern Physics",
          "Thermodynamics & SHM",
          "Problem Solving Strategies",
        ],
      },
      {
        module: "Chemistry (JEE/NEET)",
        topics: [
          "Physical Chemistry (Advanced)",
          "Organic Chemistry (Reaction Mechanisms)",
          "Inorganic Chemistry (Coordination Compounds)",
          "Numerical Problem Solving",
          "Previous Year JEE/NEET Questions",
        ],
      },
      {
        module: "Mathematics (JEE)",
        topics: [
          "Algebra & Trigonometry (Advanced)",
          "Calculus (Differential & Integral)",
          "Coordinate Geometry & Vectors",
          "Probability & Permutations",
          "JEE Pattern Problem Solving",
        ],
      },
    ],
    faculty: [
      {
        name: "Mr. Ashok Kumar Singh",
        subject: "Physics (JEE/NEET)",
        experience: "20 years",
        qualification: "M.Tech, IIT Kharagpur",
      },
      {
        name: "Dr. Nirmala Devi",
        subject: "Chemistry",
        experience: "18 years",
        qualification: "Ph.D Chemistry, AIIMS Alumni",
      },
    ],
    testimonials: [
      {
        name: "Aditya Ranjan",
        class: "JEE Advanced",
        score: "AIR 1245",
        quote:
          "Started preparation in Class 8 at BrightMind. The foundation was so strong that JEE felt manageable.",
      },
      {
        name: "Shruti Nair",
        class: "NEET",
        score: "650/720",
        quote:
          "Mentorship from toppers and national test series gave me the competitive edge I needed.",
      },
    ],
    faq: [
      {
        question: "From which class should I start JEE/NEET preparation?",
        answer:
          "We recommend starting from Class 8 or 9 to build a strong foundation. However, we have batches for Class 10-12 as well.",
      },
      {
        question: "What is the success rate of your foundation program?",
        answer:
          "Over the years, 70%+ of our foundation students have successfully cracked JEE/NEET or other competitive exams.",
      },
      {
        question: "Do you provide study material for competitive exams?",
        answer:
          "Yes, we provide comprehensive study material including theory notes, practice problems, and previous year question banks.",
      },
    ],
    pricing: {
      monthly: "₹5,000/month",
      quarterly: "₹14,000/quarter",
      annually: "₹50,000/year",
    },
    schedule: {
      days: "Monday to Saturday",
      time: "6:00 AM - 8:00 AM & 5:00 PM - 7:00 PM",
      batchType: "Early Morning & Evening batches",
    },
  },
  {
    id: "doubt-clearing",
    title: "Doubt Clearing Sessions",
    board: "All Boards",
    slug: "doubt-clearing-sessions",
    shortDescription:
      "One-on-one expert sessions to clear doubts and strengthen concepts.",
    fullDescription:
      "Our Doubt Clearing Sessions provide personalized one-on-one or small group sessions with expert faculty to address specific conceptual difficulties. Whether it's a tricky physics problem, complex chemical reaction, or challenging mathematical theorem, our teachers are available to help. We offer flexible scheduling, focused topic coverage, and expert guidance to ensure no question goes unanswered. Perfect for students who need extra support in specific areas.",
    subjects: ["Any subject on request"],
    features: [
      "One-on-one personalized sessions",
      "Flexible scheduling options",
      "Expert faculty for all subjects",
      "Focused topic coverage",
      "Homework and assignment help",
      "Exam preparation guidance",
    ],
    duration: "As needed (Per session or Package)",
    classLevel: "6-12 (All Classes)",
    gradient: "from-cyan-600 to-blue-500",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-100",
    icon: "HelpCircle",
    syllabus: [
      {
        module: "Customized Support",
        topics: [
          "Specific chapter/topic doubts",
          "Homework and assignment help",
          "Exam paper discussion",
          "Concept revision and clarity",
          "Problem-solving techniques",
        ],
      },
    ],
    faculty: [
      {
        name: "All Expert Faculty",
        subject: "All Subjects",
        experience: "10+ years average",
        qualification: "Post Graduate & B.Ed",
      },
    ],
    testimonials: [
      {
        name: "Riya Sharma",
        class: "Class 10",
        score: "Improved from 75% to 92%",
        quote:
          "Doubt sessions helped me clear all my concepts. My scores improved dramatically!",
      },
      {
        name: "Sagar Das",
        class: "Class 12",
        score: "Cleared all backlogs",
        quote:
          "I was struggling with Organic Chemistry. After 5 doubt sessions, I mastered it completely.",
      },
    ],
    faq: [
      {
        question: "How do I book a doubt clearing session?",
        answer:
          "You can book sessions through our reception, phone call, or WhatsApp. We accommodate sessions based on your availability.",
      },
      {
        question: "What is the duration of one doubt session?",
        answer:
          "Each doubt clearing session is typically 45-60 minutes, depending on the complexity of doubts and topics.",
      },
      {
        question: "Can I book sessions for multiple subjects?",
        answer:
          "Yes, you can book sessions for any subject. We have expert faculty available for all subjects and boards.",
      },
    ],
    pricing: {
      monthly: "₹500/session",
      quarterly: "₹4,000/10 sessions",
      annually: "₹12,000/unlimited (monthly)",
    },
    schedule: {
      days: "Monday to Sunday",
      time: "Flexible (10:00 AM - 7:00 PM)",
      batchType: "Individual appointment-based",
    },
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return coursesData.find((course) => course.slug === slug);
}

export function getAllCourseSlugs(): string[] {
  return coursesData.map((course) => course.slug);
}

export function getCoursesByBoard(board: string): Course[] {
  return coursesData.filter((course) => course.board === board);
}

export function getCoursesByClassLevel(classLevel: string): Course[] {
  return coursesData.filter((course) => course.classLevel.includes(classLevel));
}
