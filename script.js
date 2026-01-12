// 50 AQ items (adult, 16+)
const questions = [
  "I prefer to do things with others rather than on my own.",
  "I prefer to do things the same way over and over again.",
  "If I try to imagine something, I find it very easy to create a picture in my mind.",
  "I frequently get so strongly absorbed in one thing that I lose sight of other things.",
  "I often notice small sounds when others do not.",
  "I usually notice car number plates or similar strings of information.",
  "Other people frequently tell me that what I've said is impolite, even though I think it is polite.",
  "When I'm reading a story, I can easily imagine what the characters might look like.",
  "I am fascinated by dates.",
  "In a social group, I can easily keep track of several different people's conversations.",
  "I find social situations easy.",
  "I tend to notice details that others do not.",
  "I would rather go to a library than a party.",
  "I find making up stories easy.",
  "I find myself drawn more strongly to people than to things.",
  "I tend to have very strong interests which I get upset about if I can't pursue.",
  "I enjoy social chit-chat.",
  "When I talk, it isn't always easy for others to get a word in edgeways.",
  "I am fascinated by numbers.",
  "When I'm reading a story, I find it difficult to work out the characters' intentions.",
  "I don't particularly enjoy reading fiction.",
  "I find it hard to make new friends.",
  "I notice patterns in things all the time.",
  "I would rather go to the theatre than a museum.",
  "It does not upset me if my daily routine is disturbed.",
  "I frequently find that I don't know how to keep a conversation going.",
  "I find it easy to 'read between the lines' when someone is talking to me.",
  "I usually concentrate more on the whole picture, rather than the small details.",
  "I am not very good at remembering phone numbers.",
  "I don't usually notice small changes in a situation, or a person's appearance.",
  "I know how to tell if someone listening to me is getting bored.",
  "I find it easy to do more than one thing at once.",
  "When I talk on the phone, I'm not sure when it's my turn to speak.",
  "I enjoy doing things spontaneously.",
  "I am often the last to understand the point of a joke.",
  "I find it easy to work out what someone is thinking or feeling just by looking at their face.",
  "If there is an interruption, I can switch back to what I was doing very quickly.",
  "I am good at social chit-chat.",
  "People often tell me that I keep going on and on about the same thing.",
  "When I was young, I used to enjoy playing games involving pretending with other children.",
  "I like to collect information about categories of things (e.g. types of car, bird, train, plant, etc.).",
  "I find it difficult to imagine what it would be like to be someone else.",
  "I like to plan any activities I participate in carefully.",
  "I enjoy social occasions.",
  "I find it difficult to work out people's intentions.",
  "New situations make me anxious.",
  "I enjoy meeting new people.",
  "I am a good diplomat.",
  "I am not very good at remembering people's dates of birth.",
  "I find it very easy to play games with children that involve pretending."
];

// AQ scoring key (1-based item numbers)
// 1 point if you AGREE with these items:
const scoreIfAgree = [
  2, 4, 5, 6, 7,
  9, 12, 13, 16, 18,
  19, 20, 21, 22, 23,
  26, 33, 35, 39, 41,
  42, 43, 45, 46
];

// 1 point if you DISAGREE with these items:
const scoreIfDisagree = [
  1, 3, 8, 10, 11,
  14, 15, 17, 24, 25,
  27, 28, 29, 30, 31,
  32, 34, 36, 37, 38,
  40, 44, 47, 48, 49,
  50
];

// State
let current = 0;
let answers = new Array(questions.length).fill(null);
let score = 0;

// DOM references
const questionEl = document.getElementById("question");
const currentQEl = document.getElementById("currentQ");
const optionButtons = document.querySelectorAll(".option");
const nextBtn = document.getElementById("next");
const quizEl = document.getElementById("quiz");
const resultsEl = document.getElementById("results");
const scoreEl = document.getElementById("score");
const interpEl = document.getElementById("interpretation");

// Init
document.addEventListener("DOMContentLoaded", () => {
  showQuestion();
  optionButtons.forEach(btn => btn.addEventListener("click", selectOption));
  nextBtn.addEventListener("click", handleNext);
});

// Render current question
function showQuestion() {
  questionEl.textContent = questions[current];
  currentQEl.textContent = current + 1;
  clearSelection();
  if (answers[current]) {
    nextBtn.disabled = false;
    highlightSelected(answers[current]);
  } else {
    nextBtn.disabled = true;
  }
}

// Clear button highlight
function clearSelection() {
  optionButtons.forEach(btn => btn.classList.remove("selected"));
}

// Highlight chosen option
function highlightSelected(choice) {
  optionButtons.forEach(btn => {
    if (btn.dataset.value === choice) {
      btn.classList.add("selected");
    } else {
      btn.classList.remove("selected");
    }
  });
}

// Handle Agree/Disagree click
function selectOption(e) {
  const choice = e.currentTarget.dataset.value;
  answers[current] = choice;
  highlightSelected(choice);
  nextBtn.disabled = false;
}

// Next / Finish
function handleNext() {
  if (current < questions.length - 1) {
    current++;
    showQuestion();
  } else {
    finishTest();
  }
}

// Calculate AQ score using correct key
function calculateScore() {
  score = 0;
  answers.forEach((ans, i) => {
    const itemNumber = i + 1;
    if (!ans) return;

    if (ans === "agree" && scoreIfAgree.includes(itemNumber)) {
      score++;
    }
    if (ans === "disagree" && scoreIfDisagree.includes(itemNumber)) {
      score++;
    }
  });
  return score;
}

// Finish and show results
function finishTest() {
  const totalScore = calculateScore();
  scoreEl.textContent = totalScore;

  let interp;
  if (totalScore >= 32) {
    interp = "Your score is in a range often reported by many autistic adults. This does not prove autism, but it may indicate a higher level of autistic traits. Consider a professional assessment if this reflects your lived experience.";
  } else if (totalScore >= 26) {
    interp = "Your score is above the commonly used screening threshold of 26. This can indicate elevated autistic traits and may warrant discussing further assessment with a clinician.";
  } else {
    interp = "Your score is below the commonly used screening threshold. This suggests fewer self-reported autistic traits, although the AQ cannot rule out autism.";
  }

  interpEl.textContent = interp;
  quizEl.classList.add("hidden");
  resultsEl.classList.remove("hidden");
}
