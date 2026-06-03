---
title: "Job Hunter"
description: "Comprehensive job hunting and career assistant. Handles the full job search lifecycle: profile collection, job discovery, relevance scoring, resume optimization, cover letter writing, and mock interview preparation."
oneLiner: "Optimize resumes, search for job openings, and prepare for interviews."
seoTitle: "Job Hunter - Minimax Skill for AI Agents"
seoDescription: "End-to-end career assistance tool: job scraping, ATS-friendly resume tailoring, cover letter drafting, and mock interviews."
---

## 📖 Why Do We Need This Skill?

Job hunting is fragmented and requires customizing application materials for every unique role. This skill implements an integrated workflow that helps candidates collect target profiles, optimize resumes against ATS filters, write cover letters, and conduct mock interviews.

## ⚙️ How It Works

The job hunting support lifecycle follows:

```
[Profile Gathering] -> [Job Sourcing & Scoring] -> [ATS Resume Optimization] -> [Cover Letter Writing] -> [Mock Interview Prep]
```

1. **Scoring**: Screens job posts and scores them (0-100) based on match criteria.
2. **Tailoring**: Optimizes the resume keywords to match job descriptions naturally without fabrication.
3. **Mock Interview**: Operates in interviewer mode, posing industry-specific questions and reviewing candidate responses.

## 🚀 Agent Guidelines (Prompt Guidelines)

1. Compute a clear relevance score for each job posting before suggesting it to the candidate.
2. Tailor resumes by rephrasing existing experience rather than fabricating non-existent credentials.
3. Format interview preparation answers strictly around the STAR (Situation, Task, Action, Result) methodology.

## ⚠️ Gotchas and notes

- **Keyword Stuffing**: Do not mindlessly dump key terms into the resume footer. Modern ATS filters flag this, and human recruiters will immediately discard it.
- **Stale Listings**: Job boards contain many expired postings. Check the publish date before suggesting an opening to the candidate.
