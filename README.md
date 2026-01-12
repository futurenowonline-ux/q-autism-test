# Autism Spectrum Quotient (AQ) – Adult Self-Screening Test

This project is a simple web-based implementation of the **Autism Spectrum Quotient (AQ)**, a 50‑item self-report questionnaire designed to measure autistic traits in adults (16+). It presents one question at a time, records Agree/Disagree responses, calculates a total score out of 50, and displays a brief interpretation at the end.[web:1][web:8]

> ⚠️ **Important:** This tool is a **self-screening questionnaire**, **not** a diagnostic instrument. It cannot confirm or rule out autism spectrum disorder (ASD). Only a qualified clinician can make a formal diagnosis.[web:5][web:22][web:28]

---

## What this test measures

The AQ was developed to quantify the degree to which an adult with average or above-average intelligence shows traits associated with the autism spectrum.[web:1][web:39]  
Items cover five domains:[web:8]

- Social skill  
- Attention switching  
- Attention to detail  
- Communication  
- Imagination  

Higher scores indicate a greater number of self-reported autistic traits, but scores can be influenced by mood, self-awareness, camouflaging/masking, and how a person interprets questions.[web:5][web:40]

---

## How to use

1. Open `index.html` in a browser, or visit the live site (if enabled via GitHub Pages).  
2. Read each statement and select **Agree** or **Disagree**.  
3. Continue through all 50 questions.  
4. At the end, the app shows:
   - Your **AQ score** (0–50).  
   - A brief **text interpretation** of your score (e.g., below/around/above the commonly used threshold).  

Typical interpretations used in the literature and online tools include:[web:5][web:37]

- Scores around the mid-teens are common in non-autistic adults.  
- A commonly cited threshold is **26+**, which may indicate a higher level of autistic traits and that further assessment could be useful.  
- Some studies report that many autistic adults score **32 or above**, but a high score alone is **not** a diagnosis.[web:5][web:37]

This project uses these ranges only as a **rough guide**, not as clinical cut-offs.

---

## Tech stack

This is a lightweight front-end project:

- **HTML** – Structure and content (test interface and results view)  
- **CSS** – Responsive layout and styling for desktop and mobile  
- **JavaScript** –  
  - Stores the 50 AQ items  
  - Handles navigation between questions  
  - Records Agree/Disagree responses  
  - Implements AQ-style scoring logic (autistic-direction responses count as 1 point)  
  - Displays score and a short textual interpretation  

No backend is required, and no responses are stored or sent anywhere in this basic version.

You can extend it with:

- A backend (Node.js/Express, MongoDB, etc.) to log anonymized results.  
- API endpoints for analytics or integration in a broader mental health toolkit.  
- Additional questionnaires (e.g., CAT‑Q for camouflaging, AQ‑10 short form) with separate routes.[web:34][web:40]

---

## Local development

Clone the repo and open in any modern browser:

```bash
git clone https://github.com/<your-username>/aq-autism-test.git
cd aq-autism-test
# then open index.html in your browser

