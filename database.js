//num of players
//person this blah blah
//aim to discuss question 
//roulette mode where everyone answers the same question

const data = {
  "levels": [
    {
      "Level": 1,
      "LevelName": "Peripheral / Surface",
      "Questions": [
        { "QuestionID": "L1Q1", "Question": "What is your favorite type of music?" },
        { "QuestionID": "L1Q2", "Question": "What do you like to do on weekends?" },
        { "QuestionID": "L1Q3", "Question": "What is your favorite food and when did you decide it was your favorite?" },
        { "QuestionID": "L1Q4", "Question": "What is your favorite movie or TV show?" },
        { "QuestionID": "L1Q5", "Question": "Do you prefer the city or the countryside?" },
        { "QuestionID": "L1Q6", "Question": "What sport or physical activity do you enjoy/ed and when was the first time you played it?" },
        { "QuestionID": "L1Q7", "Question": "Are you a morning person or a night owl?" },
        { "QuestionID": "L1Q8", "Question": "If your music taste had to be described by one specific song, what would it be and why?" },
        { "QuestionID": "L1Q9", "Question": "What is the one meal you could eat every day without getting sick of it?" },
        { "QuestionID": "L1Q10", "Question": "What is a movie or show you have rewatched more than three times?" },
        { "QuestionID": "L1Q11", "Question": "What is the last thing you bought that you were genuinely excited about?" },
        { "QuestionID": "L1Q12", "Question": "If you had a completely free Saturday with no obligations, how would you actually spend it?" },
        { "QuestionID": "L1Q13", "Question": "What is a hobby or interest you have that most people in your life do not know about?" },
        { "QuestionID": "L1Q14", "Question": "What app on your phone do you open the most without thinking about it?" }
      ]
    },
    {
      "Level": 2,
      "LevelName": "Outer Layer",
      "Questions": [
        { "QuestionID": "L2Q1", "Question": "What do you do for work, and do you enjoy it?" },
        { "QuestionID": "L2Q2", "Question": "What kind of people do you enjoy spending time with?" },
        { "QuestionID": "L2Q3", "Question": "What does a perfect day look like for you?" },
        { "QuestionID": "L2Q4", "Question": "What are you most proud of in your life so far?" },
        { "QuestionID": "L2Q5", "Question": "How do you usually handle stress?" },
        { "QuestionID": "L2Q6", "Question": "What is something you are currently learning or want to learn?" },
        { "QuestionID": "L2Q7", "Question": "How important is travel to you, and where would you love to go?" },
        { "QuestionID": "L2Q8", "Question": "What part of your job or daily routine secretly drains you the most?" },
        { "QuestionID": "L2Q9", "Question": "Is there a friendship in your life that has faded that you still think about?" },
        { "QuestionID": "L2Q10", "Question": "What is something you are genuinely good at that you rarely get credit for?" },
        { "QuestionID": "L2Q11", "Question": "When things go wrong, do you tend to talk to someone or go quiet — and has that ever backfired?" },
        { "QuestionID": "L2Q12", "Question": "What is a goal you have been putting off for over a year, and what is actually stopping you?" },
        { "QuestionID": "L2Q13", "Question": "What is the most spontaneous thing you have ever done, and do you regret it?" },
        { "QuestionID": "L2Q14", "Question": "What does your social battery look like — and what is the fastest way to drain it?" }
      ]
    },
    {
      "Level": 3,
      "LevelName": "Middle Layer",
      "Questions": [
        { "QuestionID": "L3Q1", "Question": "What are your long-term goals in life?" },
        { "QuestionID": "L3Q2", "Question": "What values are most important to you?" },
        { "QuestionID": "L3Q3", "Question": "How did your upbringing shape who you are today?" },
        { "QuestionID": "L3Q4", "Question": "What does success mean to you?" },
        { "QuestionID": "L3Q5", "Question": "Have you ever had to make a really difficult decision? What was it like?" },
        { "QuestionID": "L3Q6", "Question": "What kind of relationship do you have with your family?" },
        { "QuestionID": "L3Q7", "Question": "Is there a belief you hold that most people around you disagree with?" },
        { "QuestionID": "L3Q8", "Question": "What is one thing your parents did that you swore you would never do — and have you caught yourself doing it?" },
        { "QuestionID": "L3Q9", "Question": "Is there a version of your life you almost lived that you still wonder about?" },
        { "QuestionID": "L3Q10", "Question": "What is a belief you used to hold strongly that you have since changed your mind on?" },
        { "QuestionID": "L3Q11", "Question": "What does feeling truly successful look like to you — not the version you tell people, the real one?" },
        { "QuestionID": "L3Q12", "Question": "Have you ever stayed in a situation — a job, relationship, or place — longer than you should have? What kept you there?" },
        { "QuestionID": "L3Q13", "Question": "What is something you need from people close to you that you find hard to ask for?" },
        { "QuestionID": "L3Q14", "Question": "What is a part of your personality that you think people consistently misread?" }
      ]
    },
    {
      "Level": 4,
      "LevelName": "Core Self / Innermost",
      "Questions": [
        { "QuestionID": "L4Q1", "Question": "What is your biggest fear or insecurity?" },
        { "QuestionID": "L4Q2", "Question": "What is something you have never told anyone before?" },
        { "QuestionID": "L4Q3", "Question": "Have you ever experienced a moment that completely changed your perspective on life?" },
        { "QuestionID": "L4Q4", "Question": "What is something you deeply regret?" },
        { "QuestionID": "L4Q5", "Question": "What do you feel is missing from your life right now?" },
        { "QuestionID": "L4Q6", "Question": "When do you feel most like yourself?" },
        { "QuestionID": "L4Q7", "Question": "What would you do differently if you knew no one would judge you?" },
        { "QuestionID": "L4Q8", "Question": "What is a fear you have that you know is irrational but still controls you in some way?" },
        { "QuestionID": "L4Q9", "Question": "Is there something you did in the past that you have not fully forgiven yourself for?" },
        { "QuestionID": "L4Q10", "Question": "What is the most honest thing you could say about why your last close relationship — romantic or otherwise — ended?" },
        { "QuestionID": "L4Q11", "Question": "What do you want people to say about you at your funeral that they are not saying about you now?" },
        { "QuestionID": "L4Q12", "Question": "What is something you genuinely believe about yourself that you would never say out loud in most situations?" },
        { "QuestionID": "L4Q13", "Question": "When do you feel the loneliest, and does anyone in your life actually know that?" },
        { "QuestionID": "L4Q14", "Question": "What is the one thing you are most afraid someone who loves you might one day realize about you?" }
      ]
    }
  ]
}