const subjectNotes = [
  {
    title: "회로이론",
    summary: "전류, 전압, 저항, 전력의 관계를 문제에서 바로 식으로 바꾸는 과목이다.",
    points: [
      "옴의 법칙 V = IR, 전류를 묻는지 저항을 묻는지 먼저 본다.",
      "직렬은 더하고 병렬은 역수 합으로 처리한다.",
      "교류는 유효전력, 무효전력, 역률이 함께 나오기 쉽다."
    ]
  },
  {
    title: "전기자기학",
    summary: "자속, 자계, 유도기전력, 정전용량 같은 전자기 기본 개념을 묻는다.",
    points: [
      "패러데이 법칙과 렌츠 법칙의 방향성을 구분한다.",
      "콘덴서와 인덕터의 성질 차이를 묻는 문제가 자주 나온다.",
      "단위 문제를 같이 외우면 점수 먹기 쉽다."
    ]
  },
  {
    title: "전력공학",
    summary: "송전, 배전, 전력손실, 전압강하, 수용률과 부하율을 다룬다.",
    points: [
      "전력손실은 I²R 이고 송전전압 상승과 연결해서 기억한다.",
      "3상 전력 공식은 단상과 구분해서 본다.",
      "배전 방식과 보호기기 역할도 개념형으로 자주 나온다."
    ]
  },
  {
    title: "전기기기",
    summary: "변압기, 유도전동기, 동기기, 직류기에서 계산과 특징을 묻는다.",
    points: [
      "변압기 전압비와 전류비는 가장 자주 쓰는 공식이다.",
      "유도전동기의 슬립과 동기속도는 기본 계산 유형이다.",
      "동기기는 역률 조정, 유도기는 슬립 존재로 구분한다."
    ]
  },
  {
    title: "전기설비기술기준",
    summary: "접지, 차단기, 허용전류, 누전차단기, 안전기준을 묻는 암기형 과목이다.",
    points: [
      "접지는 안전과 보호라는 목적을 중심으로 잡는다.",
      "차단기와 보호장치는 왜 필요한지 문장으로 설명할 수 있어야 한다.",
      "KEC 기준은 실무와 시험 모두 연결되므로 반복 암기가 필요하다."
    ]
  }
];

const easyConcepts = [
  { title: "전압", summary: "전압은 전기를 밀어주는 힘이라고 보면 된다.", points: ["물을 밀어내는 수압처럼 생각하면 쉽다.", "전압이 크면 전류가 흐르기 쉬워진다.", "문제에서 V가 보이면 전압이다."] },
  { title: "전류", summary: "전류는 실제로 흐르는 전기의 양이다.", points: ["물관을 지나가는 물의 흐름량처럼 보면 된다.", "전류 단위는 A 이다.", "문제에서 I가 보이면 전류다."] },
  { title: "저항", summary: "저항은 전기가 흐르는 걸 방해하는 정도다.", points: ["좁은 관일수록 물이 덜 흐르는 것과 비슷하다.", "저항이 크면 전류는 줄어든다.", "문제에서 Ω가 보이면 저항이다."] },
  { title: "전력", summary: "전력은 얼마나 세게 일을 하는지 보는 값이다.", points: ["전압과 전류가 같이 있어야 전력이 나온다.", "기본식은 P = VI 이다.", "단위는 W 이다."] },
  { title: "변압기", summary: "변압기는 전압을 올리거나 내리는 장치다.", points: ["권선 수 비율에 따라 전압도 같이 바뀐다.", "권선이 많으면 전압도 커지는 방향으로 본다.", "V1 / V2 = N1 / N2 만 잡아도 기본 문제는 풀린다."] },
  { title: "슬립", summary: "슬립은 유도전동기가 기준 속도보다 얼마나 느린지 보는 값이다.", points: ["완전히 같지 않고 조금 느리게 도는 차이를 본다.", "차이를 비율로 바꾸면 된다.", "마지막에 %로 바꾸는 문제를 자주 낸다."] },
  { title: "역률", summary: "역률은 전기를 얼마나 알차게 쓰는지 보는 비율이다.", points: ["역률이 나쁘면 같은 일을 할 때 더 큰 전류가 필요하다.", "전류가 커지면 손실과 전압강하가 커지기 쉽다.", "콘덴서 설치 문제는 역률 개선과 연결된다."] },
  { title: "선간전압과 상전압", summary: "3상 문제에서 가장 많이 헷갈리는 부분이다.", points: ["문제에서 선간인지 상전압인지 먼저 확인해야 한다.", "루트3이 붙는지 아닌지를 여기서 결정한다.", "실기와 필기 둘 다 이 부분 실수가 매우 많다."] }
];

const formulaSets = [
  { title: "회로이론", formulas: ["옴의 법칙: V = IR", "전력: P = VI", "유효전력: P = VI cosθ", "병렬저항: 1 / R = 1 / R1 + 1 / R2 + ...", "유도리액턴스: XL = 2πfL", "용량리액턴스: XC = 1 / (2πfC)", "공진주파수: f0 = 1 / (2π√LC)", "시정수: τ = RC 또는 L / R"] },
  { title: "전기자기학 / 전력공학", formulas: ["유도기전력: e = -N(dΦ / dt)", "자속밀도: B = Φ / A", "전력손실: Ploss = I²R", "3상 유효전력: P = √3VI cosθ", "부하율: 평균전력 / 최대수요전력", "수용률: 최대수요전력 / 설비용량", "역률개선: Qc = P(tanθ1 - tanθ2)", "단상 전압강하: ΔV ≈ I(Rcosθ + Xsinθ)"] },
  { title: "전기기기", formulas: ["변압기 전압비: V1 / V2 = N1 / N2", "변압기 전류비: I1 / I2 = N2 / N1", "동기속도: Ns = 120f / P", "슬립: s = (Ns - N) / Ns", "실효값과 최대값: Vm = √2V", "변압기 기전력: E = 4.44fNΦm", "회전자 주파수: fr = f × s"] }
];

const mathSets = [
  { title: "1. 나누기부터 익히기", summary: "전기 계산은 대부분 곱하기와 나누기다. 특히 전류를 구할 때는 나누기가 핵심이다.", formulas: ["20 / 10 = 2", "12 / 4 = 3", "220 / 5 = 44", "전류를 묻는 문제는 I = V / R 꼴이 자주 나온다."] },
  { title: "2. 제곱과 루트", summary: "전력손실과 교류 최대값 문제에서 꼭 나온다.", formulas: ["10² = 10 × 10 = 100", "5² = 25", "√2 ≈ 1.414", "실효값 100V -> 최대값은 100 × 1.414 = 141.4V"] },
  { title: "3. 분수 감각", summary: "병렬저항과 슬립 문제에서 자주 쓰인다. 분수는 겁먹지 말고 같은 분모로 바꾸면 된다.", formulas: ["1 / 6 + 1 / 3 = 1 / 6 + 2 / 6 = 3 / 6 = 1 / 2", "54 / 1800 = 0.03", "0.03 = 3%", "나눈 뒤 소수로 바꾸고 마지막에 %로 바꾸는 흐름을 익힌다."] },
  { title: "4. 단위 읽는 법", summary: "단위를 같이 읽으면 문제 해석이 쉬워진다.", formulas: ["V = 전압", "A = 전류", "Ω = 저항", "W = 전력", "rpm = 분당 회전수"] },
  { title: "5. 식 세우는 순서", summary: "수학보다 더 중요한 건 어떤 식을 써야 하는지 고르는 순서다.", formulas: ["무엇을 구하라는 문제인지 본다.", "공식 1개를 고른다.", "단위를 본다.", "숫자를 넣는다.", "말이 되는 값인지 확인한다."] },
  { title: "6. 전기 계산 대표 예제", summary: "공식 하나씩 끼워 맞추는 연습부터 하면 된다.", formulas: ["옴의 법칙: 20V, 10Ω -> I = 20 / 10 = 2A", "전력: 12V, 5A -> P = 12 × 5 = 60W", "손실: 10A, 2Ω -> I²R = 100 × 2 = 200W", "변압기비: 220V, 권수비 5 -> 220 / 5 = 44V"] }
];

const studyPlan = [
  { day: "Day 1", title: "회로이론 + 수학기초", body: "수학 기초 섹션과 회로이론 요약을 먼저 읽고, 회로이론 문제만 2회 풉니다. 목표는 공식 보고 바로 식을 세우는 것입니다." },
  { day: "Day 2", title: "전기자기학", body: "단위, 자속, 유도기전력, 실효값과 최대값만 집중합니다. 전기자기학 문제를 반복해 개념형 점수를 확보합니다." },
  { day: "Day 3", title: "전력공학", body: "단상 유효전력, 3상 유효전력, 전력손실, 수용률을 잡습니다. 계산형 문제를 숫자만 바꿔 다시 풀어봅니다." },
  { day: "Day 4", title: "전기기기", body: "변압기비, 슬립, 동기속도만 우선 잡습니다. 전기기기 문제에서 계산형을 틀리지 않는 것이 핵심입니다." },
  { day: "Day 5", title: "설비기준", body: "접지, 차단기, 누전차단기, 절연저항, 허용전류 관련 문제를 반복합니다. 말문제 과락 방지용 날입니다." },
  { day: "Day 6", title: "전체 1회 + 오답모드", body: "전체 문제를 처음부터 끝까지 한 번 풀고, 틀린 문제만 다시 풉니다. 70점이 넘을 때까지 오답모드를 반복합니다." },
  { day: "Day 7", title: "약점만 압축 복습", body: "회로이론, 전력공학, 전기기기 계산형과 설비기준 말문제만 다시 봅니다. 새로운 내용은 보지 말고 약점만 정리합니다." }
];

const questions = [
  { category: "회로이론", type: "계산형", question: "20V 전원을 10Ω 저항에 걸었을 때 흐르는 전류는 얼마인가?", choices: ["0.5A", "2A", "10A", "20A"], answer: 1, explanation: "전류를 구하므로 I = V / R 를 쓴다.\n20 / 10 = 2A 이다." },
  { category: "회로이론", type: "계산형", question: "2Ω, 3Ω, 5Ω 저항이 직렬 연결일 때 합성저항은 얼마인가?", choices: ["10Ω", "5Ω", "1Ω", "30Ω"], answer: 0, explanation: "직렬은 그대로 더한다.\n2 + 3 + 5 = 10Ω 이다." },
  { category: "회로이론", type: "계산형", question: "6Ω과 3Ω이 병렬 연결일 때 합성저항은 얼마인가?", choices: ["9Ω", "3Ω", "2Ω", "18Ω"], answer: 2, explanation: "1 / R = 1 / 6 + 1 / 3 = 1 / 2 이므로 R = 2Ω 이다." },
  { category: "회로이론", type: "개념형", question: "유도성 회로에서 전류와 전압의 위상관계로 옳은 것은?", choices: ["전류가 전압보다 빠르다", "전류가 전압보다 늦다", "항상 위상차가 0도다", "전압과 전류는 무관하다"], answer: 1, explanation: "유도성 회로에서는 전류가 전압보다 늦는다. 시험에서는 전류 지상이라는 표현도 함께 본다." },
  { category: "회로이론", type: "계산형", question: "직류회로에서 전압 12V, 전류 5A일 때 소비전력은?", choices: ["17W", "60W", "120W", "2.4W"], answer: 1, explanation: "전력 공식 P = VI 를 사용한다.\n12 × 5 = 60W 이다." },
  { category: "회로이론", type: "개념형", question: "부하에 콘덴서를 설치하는 가장 주된 목적은?", choices: ["주파수 생성", "역률 개선", "절연파괴 유도", "접지 제거"], answer: 1, explanation: "콘덴서는 무효전력을 보상해 역률을 개선하는 데 사용된다." },
  { category: "전기자기학", type: "개념형", question: "자기력선의 성질로 옳은 것은?", choices: ["서로 교차한다", "N극에서 나와 S극으로 들어간다", "항상 직선이다", "전하량으로만 결정된다"], answer: 1, explanation: "자기력선은 N극에서 나와 S극으로 들어가며 서로 교차하지 않는다." },
  { category: "전기자기학", type: "개념형", question: "패러데이 법칙과 가장 직접 관련 있는 것은?", choices: ["유도기전력", "접촉저항", "열용량", "도전율 색상"], answer: 0, explanation: "자속 변화로 유도기전력이 생긴다는 내용이 패러데이 법칙의 핵심이다." },
  { category: "전기자기학", type: "계산형", question: "정전용량의 단위는 무엇인가?", choices: ["패럿", "헨리", "웨버", "옴"], answer: 0, explanation: "정전용량의 단위는 패럿 F 이다. 단위 문제는 빠르게 점수화할 수 있다." },
  { category: "전기자기학", type: "개념형", question: "평행판 콘덴서에서 판 간 거리가 증가하면 정전용량은 어떻게 되는가?", choices: ["증가", "감소", "변화 없음", "무한대"], answer: 1, explanation: "판 간 거리가 멀어질수록 정전용량은 감소한다." },
  { category: "전기자기학", type: "계산형", question: "실효값이 100V인 정현파 교류의 최대값은?", choices: ["70.7V", "100V", "141.4V", "200V"], answer: 2, explanation: "Vm = √2V 를 사용한다.\n100 × 1.414 = 141.4V 이다." },
  { category: "전기자기학", type: "개념형", question: "인덕턴스가 커질수록 일반적으로 커지는 성질은?", choices: ["전류 변화에 대한 저항", "도체 색상", "주파수 자체", "전압의 부호"], answer: 0, explanation: "코일은 전류 변화에 저항하려는 성질이 있으며 인덕턴스가 클수록 그 효과가 크다." },
  { category: "전력공학", type: "계산형", question: "단상 교류회로에서 V = 200V, I = 10A, cosθ = 0.8 일 때 유효전력은?", choices: ["160W", "1600W", "2000W", "2500W"], answer: 1, explanation: "단상 유효전력은 P = VI cosθ 이다.\n200 × 10 × 0.8 = 1600W 이다." },
  { category: "전력공학", type: "계산형", question: "3상 회로에서 V = 380V, I = 20A, cosθ = 0.8 일 때 유효전력은 약 얼마인가?", choices: ["5.3kW", "10.5kW", "15.2kW", "21.6kW"], answer: 1, explanation: "3상은 P = √3VI cosθ 이다.\n1.732 × 380 × 20 × 0.8 = 약 10.5kW 이다." },
  { category: "전력공학", type: "계산형", question: "선로 저항이 2Ω이고 전류가 10A 흐를 때 선로손실은 얼마인가?", choices: ["20W", "100W", "200W", "400W"], answer: 2, explanation: "선로손실은 I²R 이다.\n10² × 2 = 200W 이다." },
  { category: "전력공학", type: "개념형", question: "송전전압을 높일 때 일반적으로 기대되는 효과는?", choices: ["전류 증가로 손실 증가", "전류 감소로 손실 감소", "주파수 감소", "역률이 항상 1"], answer: 1, explanation: "같은 전력을 보낼 때 전압이 높아지면 전류가 줄고 I²R 손실도 줄어든다." },
  { category: "전력공학", type: "개념형", question: "수용률의 식으로 옳은 것은?", choices: ["최대수요전력 / 설비용량", "설비용량 / 최대수요전력", "평균전력 / 최대수요전력", "손실전력 / 송전전력"], answer: 0, explanation: "수용률은 최대수요전력을 설비용량으로 나눈 값이다." },
  { category: "전력공학", type: "개념형", question: "피뢰기의 역할로 가장 적절한 것은?", choices: ["역률 개선", "낙뢰 서지를 대지로 방전", "전압 승압", "주파수 고정"], answer: 1, explanation: "피뢰기는 낙뢰로 인한 이상전압을 대지로 흘려 설비를 보호한다." },
  { category: "전기기기", type: "개념형", question: "변압기의 원리와 가장 관련이 깊은 것은?", choices: ["광전효과", "전자유도", "열복사", "화학반응"], answer: 1, explanation: "변압기는 전자유도 원리를 이용해 전압을 변환한다." },
  { category: "전기기기", type: "계산형", question: "변압기에서 1차 권선수 1000회, 2차 권선수 200회, 1차 전압 220V일 때 2차 전압은?", choices: ["22V", "44V", "110V", "220V"], answer: 1, explanation: "V1 / V2 = N1 / N2 이다.\n220 / V2 = 1000 / 200 = 5 이므로 V2 = 44V 이다." },
  { category: "전기기기", type: "계산형", question: "동기속도 1800rpm, 회전자 속도 1746rpm 일 때 유도전동기의 슬립은?", choices: ["1%", "2%", "3%", "4%"], answer: 2, explanation: "s = (Ns - N) / Ns = (1800 - 1746) / 1800 = 0.03 이므로 3% 이다." },
  { category: "전기기기", type: "개념형", question: "유도전동기의 회전자 속도는 일반적으로 동기속도와 비교해 어떠한가?", choices: ["항상 더 빠르다", "항상 같다", "약간 느리다", "항상 0이다"], answer: 2, explanation: "유도전동기는 슬립이 있으므로 회전자 속도는 동기속도보다 약간 느리다." },
  { category: "전기기기", type: "개념형", question: "동기전동기의 특징으로 자주 언급되는 것은?", choices: ["슬립이 매우 크다", "역률 조정 운전에 활용 가능", "전자유도를 사용하지 않는다", "직렬저항만으로 구동된다"], answer: 1, explanation: "동기전동기는 역률 조정 운전에 활용될 수 있다는 점이 중요한 특징이다." },
  { category: "전기기기", type: "계산형", question: "주파수 60Hz, 극수 4인 경우 동기속도는?", choices: ["900rpm", "1200rpm", "1800rpm", "3600rpm"], answer: 2, explanation: "Ns = 120f / P = 120 × 60 / 4 = 1800rpm 이다." },
  { category: "전기설비기술기준", type: "개념형", question: "접지의 주된 목적으로 가장 적절한 것은?", choices: ["미관 향상", "감전 및 설비 손상 방지", "전류 무한대 증가", "조명 밝기 증가"], answer: 1, explanation: "접지는 안전을 위한 장치이며 감전과 설비 손상을 줄이는 데 목적이 있다." },
  { category: "전기설비기술기준", type: "개념형", question: "과전류 보호장치가 필요한 이유로 가장 적절한 것은?", choices: ["전선 과열과 화재 방지", "전압 상승 유지", "주파수 조절", "색상 구분"], answer: 0, explanation: "과전류 보호장치는 과부하나 단락 시 회로를 끊어 전선 과열과 화재를 막는다." },
  { category: "전기설비기술기준", type: "개념형", question: "절연저항을 점검하는 주된 이유는?", choices: ["전선 길이 측정", "누전 위험 확인", "부하율 계산", "역률 증가"], answer: 1, explanation: "절연저항 저하는 누전과 감전 위험으로 이어질 수 있으므로 점검한다." },
  { category: "전기설비기술기준", type: "개념형", question: "배선용 차단기 선정 시 고려사항과 가장 거리가 먼 것은?", choices: ["부하전류", "차단용량", "전선 허용전류", "책상 색상"], answer: 3, explanation: "차단기 선정은 전기적 조건으로 판단하며 외부 물건 색상과는 무관하다." },
  { category: "전기설비기술기준", type: "개념형", question: "전기설비 점검 시 가장 우선해야 할 태도로 적절한 것은?", choices: ["무전원 확인 없이 즉시 접촉", "안전수칙 및 차단 확인 후 작업", "보호구 없이 작업", "기록 없이 임의 조정"], answer: 1, explanation: "점검 전에는 반드시 차단, 무전압 확인, 보호구 착용 등 안전 절차를 우선한다." },
  { category: "전기설비기술기준", type: "개념형", question: "누전차단기의 주된 목적은?", choices: ["누전에 의한 감전 및 화재 예방", "주파수 제어", "역률 개선", "전압 승압"], answer: 0, explanation: "누전차단기는 누설전류를 감지해 인체와 설비를 보호한다." }
];

const notesGrid = document.getElementById("notesGrid");
const easyGrid = document.getElementById("easyGrid");
const formulaGrid = document.getElementById("formulaGrid");
const mathGrid = document.getElementById("mathGrid");
const filterButtons = document.getElementById("filterButtons");
const planGrid = document.getElementById("planGrid");
const dayChecks = document.getElementById("dayChecks");
const weaknessList = document.getElementById("weaknessList");
const questionCountText = document.getElementById("questionCountText");
const modeText = document.getElementById("modeText");
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("scoreText");
const wrongCountText = document.getElementById("wrongCountText");
const categoryText = document.getElementById("categoryText");
const typeText = document.getElementById("typeText");
const questionText = document.getElementById("questionText");
const choicesWrap = document.getElementById("choices");
const resultCard = document.getElementById("resultCard");
const resultText = document.getElementById("resultText");
const easyExplanationText = document.getElementById("easyExplanationText");
const explanationText = document.getElementById("explanationText");
const checkButton = document.getElementById("checkButton");
const nextButton = document.getElementById("nextButton");
const restartButton = document.getElementById("restartButton");
const wrongModeButton = document.getElementById("wrongModeButton");
const choiceTemplate = document.getElementById("choiceTemplate");

const filters = ["전체", "회로이론", "전기자기학", "전력공학", "전기기기", "전기설비기술기준"];
let currentFilter = "전체";
let filteredQuestions = [];
let wrongQuestions = [];
let completedDays = [];
let wrongStats = {};
let currentIndex = 0;
let score = 0;
let locked = false;
let inWrongMode = false;

function saveProgress() {
  localStorage.setItem("electricQuizWrongQuestions", JSON.stringify(wrongQuestions));
  localStorage.setItem("electricQuizCompletedDays", JSON.stringify(completedDays));
  localStorage.setItem("electricQuizWrongStats", JSON.stringify(wrongStats));
}

function loadProgress() {
  try { wrongQuestions = JSON.parse(localStorage.getItem("electricQuizWrongQuestions") || "[]"); } catch { wrongQuestions = []; }
  try { completedDays = JSON.parse(localStorage.getItem("electricQuizCompletedDays") || "[]"); } catch { completedDays = []; }
  try { wrongStats = JSON.parse(localStorage.getItem("electricQuizWrongStats") || "{}"); } catch { wrongStats = {}; }
}

function renderNotes() { notesGrid.innerHTML = subjectNotes.map((note) => `<article class="note-card"><h3>${note.title}</h3><p>${note.summary}</p><ul>${note.points.map((point) => `<li>${point}</li>`).join("")}</ul></article>`).join(""); }
function renderEasyConcepts() { easyGrid.innerHTML = easyConcepts.map((item) => `<article class="note-card"><h3>${item.title}</h3><strong>${item.summary}</strong><ul>${item.points.map((point) => `<li>${point}</li>`).join("")}</ul></article>`).join(""); }
function renderFormulas() { formulaGrid.innerHTML = formulaSets.map((set) => `<article class="formula-card"><h3>${set.title}</h3><ul>${set.formulas.map((item) => `<li><code>${item}</code></li>`).join("")}</ul></article>`).join(""); }
function renderMath() { mathGrid.innerHTML = mathSets.map((set) => `<article class="formula-card"><h3>${set.title}</h3><p>${set.summary}</p><ul>${set.formulas.map((item) => `<li><code>${item}</code></li>`).join("")}</ul></article>`).join(""); }
function renderPlan() { planGrid.innerHTML = studyPlan.map((item) => `<article class="check-card"><strong>${item.day} - ${item.title}</strong><p>${item.body}</p></article>`).join(""); }
function renderDayChecks() {
  dayChecks.innerHTML = studyPlan.map((item, index) => `<div class="day-row"><label><input type="checkbox" data-day="${index}" ${completedDays.includes(index) ? "checked" : ""}><span>${item.day} 완료</span></label></div>`).join("");
  [...dayChecks.querySelectorAll("input[type='checkbox']")].forEach((input) => {
    input.addEventListener("change", () => {
      const day = Number(input.dataset.day);
      if (input.checked) { if (!completedDays.includes(day)) completedDays.push(day); } else { completedDays = completedDays.filter((value) => value !== day); }
      saveProgress();
    });
  });
}
function renderWeakness() {
  const rows = filters.filter((filter) => filter !== "전체").map((filter) => ({ filter, count: wrongStats[filter] || 0 })).sort((a, b) => b.count - a.count);
  weaknessList.innerHTML = rows.map((row) => `<div class="weak-row"><span>${row.filter}</span><strong>${row.count}회 틀림</strong></div>`).join("");
}
function renderFilters() {
  filterButtons.innerHTML = filters.map((filter) => `<button class="filter-button ${filter === currentFilter ? "active" : ""}" data-filter="${filter}">${filter}</button>`).join("");
  [...document.querySelectorAll(".filter-button")].forEach((button) => { button.addEventListener("click", () => { currentFilter = button.dataset.filter; inWrongMode = false; resetQuizForFilter(); renderFilters(); }); });
}
function resetQuizForFilter() {
  filteredQuestions = currentFilter === "전체" ? [...questions] : questions.filter((item) => item.category === currentFilter);
  currentIndex = 0; score = 0; questionCountText.textContent = `${questions.length}문제`; modeText.textContent = inWrongMode ? `${currentFilter} / 오답만` : currentFilter; wrongCountText.textContent = `${wrongQuestions.length}`; renderQuestion();
}
function startWrongMode() {
  const source = currentFilter === "전체" ? wrongQuestions : wrongQuestions.filter((item) => item.category === currentFilter);
  if (source.length === 0) { alert("저장된 오답이 없습니다."); return; }
  inWrongMode = true; filteredQuestions = [...source]; currentIndex = 0; score = 0; modeText.textContent = `${currentFilter} / 오답만`; renderQuestion();
}
function renderQuestion() {
  if (filteredQuestions.length === 0) { questionText.textContent = "문제가 없습니다."; choicesWrap.innerHTML = ""; return; }
  const item = filteredQuestions[currentIndex]; locked = false; resultCard.classList.add("hidden"); nextButton.classList.add("hidden"); checkButton.classList.remove("hidden"); progressText.textContent = `${currentIndex + 1} / ${filteredQuestions.length}`; scoreText.textContent = `${score}`; categoryText.textContent = item.category; typeText.textContent = item.type; questionText.textContent = item.question; choicesWrap.innerHTML = "";
  item.choices.forEach((choice, index) => { const fragment = choiceTemplate.content.cloneNode(true); const input = fragment.querySelector("input"); const text = fragment.querySelector(".choice-text"); input.value = index; text.textContent = `${index + 1}. ${choice}`; choicesWrap.appendChild(fragment); });
}
function getSelectedIndex() { const picked = document.querySelector('input[name="answer"]:checked'); return picked ? Number(picked.value) : -1; }
function showResult() {
  if (locked) return; const selected = getSelectedIndex(); if (selected === -1) { alert("보기를 하나 선택하세요."); return; }
  locked = true; const item = filteredQuestions[currentIndex]; const labels = [...document.querySelectorAll(".choice")];
  labels.forEach((label, index) => { if (index === item.answer) label.classList.add("correct"); if (index === selected && index !== item.answer) label.classList.add("wrong"); });
  if (selected === item.answer) { score += Math.round(100 / filteredQuestions.length); resultText.textContent = `정답입니다. 현재 점수 ${score}점`; resultText.style.color = "var(--good)"; wrongQuestions = wrongQuestions.filter((question) => question.question !== item.question); }
  else { resultText.textContent = `오답입니다. 정답은 ${item.answer + 1}번`; resultText.style.color = "var(--bad)"; if (!wrongQuestions.some((question) => question.question === item.question)) wrongQuestions.push(item); wrongStats[item.category] = (wrongStats[item.category] || 0) + 1; }
  scoreText.textContent = `${score}`; wrongCountText.textContent = `${wrongQuestions.length}`; saveProgress(); renderWeakness(); easyExplanationText.textContent = makeEasyExplanation(item); explanationText.textContent = item.explanation; resultCard.classList.remove("hidden"); checkButton.classList.add("hidden"); nextButton.classList.remove("hidden");
}
function nextQuestion() {
  if (currentIndex < filteredQuestions.length - 1) { currentIndex += 1; renderQuestion(); return; }
  categoryText.textContent = "결과"; typeText.textContent = currentFilter; questionText.textContent = `${currentFilter} 퀴즈 완료. 최종 점수는 ${score}점`; choicesWrap.innerHTML = ""; resultCard.classList.remove("hidden"); resultText.textContent = score >= 70 ? "합격선 감각은 잡히고 있습니다. 틀린 유형만 다시 돌리면 됩니다." : "아직 반복이 더 필요합니다. 과목 요약과 공식부터 다시 보고 재도전하는 편이 좋습니다."; resultText.style.color = score >= 70 ? "var(--good)" : "var(--ink)"; easyExplanationText.textContent = "쉽게 말하면 전부 다시 보는 게 아니라, 틀린 문제 종류만 다시 보면 된다.\n특히 계산형은 공식 하나와 숫자 대입만 익숙해져도 점수가 오른다."; explanationText.textContent = "추천 순서:\n1. 틀린 유형의 공식 1개를 다시 확인한다.\n2. 같은 과목만 다시 선택해 반복한다.\n3. 전체 모드로 다시 한 번 70점 이상을 목표로 한다."; checkButton.classList.add("hidden"); nextButton.classList.add("hidden");
}
function restartQuiz() { inWrongMode = false; resetQuizForFilter(); }
function makeEasyExplanation(item) {
  if (item.category === "회로이론") return "이 문제는 전기 흐름을 숫자로 바꾸는 문제다. 무엇을 구하는지만 먼저 보고, V 전압, I 전류, R 저항 중 비어 있는 자리를 찾으면 된다.";
  if (item.category === "전기자기학") return "이 문제는 성질을 기억하는 문제다. 자속, 코일, 콘덴서 같은 말이 나오면 단위와 특징을 같이 떠올리면 풀기 쉽다.";
  if (item.category === "전력공학") return "이 문제는 전기를 멀리 보내거나 나눠줄 때의 계산이다. 손실, 3상, 전압강하는 정해진 식에 숫자만 넣는 경우가 많다.";
  if (item.category === "전기기기") return "이 문제는 기계의 특징이나 비율 계산이다. 변압기는 권선비, 유도전동기는 슬립만 먼저 떠올려도 절반은 푼다.";
  return "이 문제는 안전과 기준을 묻는다. 접지, 차단기, 절연은 왜 필요한지 상식적으로 생각하면 답이 보이는 편이다.";
}
checkButton.addEventListener("click", showResult);
nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartQuiz);
wrongModeButton.addEventListener("click", startWrongMode);
loadProgress(); renderNotes(); renderEasyConcepts(); renderFormulas(); renderMath(); renderPlan(); renderDayChecks(); renderWeakness(); renderFilters(); resetQuizForFilter();
