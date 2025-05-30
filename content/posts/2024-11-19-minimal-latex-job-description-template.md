---
layout: post
title: "A Minimal LaTeX Job Description Template"
date: 2024-11-19
categories: [latex, templates]
tags: [latex, job-description, template, documentation]
---

Inspired by both the need to hire someone and this nice aesthetic for job descriptions from [b.next](https://bnext.bio/Synthetic_Cell_Engineer.pdf), I recently created a minimal LaTeX template for formatting job descriptions. The template hopefully provides a clean, professional, minimalistic layout that someone else could use.

## Preview
![Job Description Template Preview](/images/posts/jd_template_preview.png)

You can view the full template [here](/assets/pdfs/minimal_JD_PDF_pub.pdf).

## Template Structure

The template is organized into several key sections:

1. Job Title and Basic Information
2. Position Overview
3. Key Responsibilities
4. Required Qualifications
5. Additional Information (optional)

## LaTeX Source

Here's the minimal LaTeX code to create this template:

{% raw %}
```latex
\documentclass[11pt,a4paper]{article}
\usepackage[margin=1in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage[dvipsnames]{xcolor}
\usepackage{tikz}
\usepackage{tikzpagenodes}
\usepackage{graphicx}
\usepackage{transparent}

% Define custom beige color
\definecolor{lightbeige}{RGB}{245, 245, 220}

% Set page color and text color
\pagecolor{lightbeige}
\color{black}

% Define custom section style
\titleformat{\section}
  {\Large\bfseries}
  {}
  {0em}
  {}
  []

% Adjust hyperlink color
\hypersetup{
  colorlinks=true,
  linkcolor=black,
  filecolor=black,
  urlcolor=black,
}

% Define the double frame drawing command
\AddToHook{shipout/background}{%
  \begin{tikzpicture}[remember picture,overlay]
    % Outer rectangle
    \draw[black,line width=0.5pt] 
      ([xshift=0.2in,yshift=-0.2in]current page.north west) 
      rectangle 
      ([xshift=-0.2in,yshift=0.2in]current page.south east);
    
    % Inner rectangle
    \draw[black,line width=0.5pt] 
      ([xshift=0.3in,yshift=-0.3in]current page.north west) 
      rectangle 
      ([xshift=-0.3in,yshift=0.3in]current page.south east);
  \end{tikzpicture}%
}

\begin{document}

% Header with line and logo
\begin{tikzpicture}[remember picture,overlay]
  % Black line
  \draw[black, line width=1pt] 
    (current page text area.north west) -- 
    (current page text area.north east);
  
  % Logo placeholder
  \node[anchor=north east, yshift=45pt] at (current page text area.north east) {
    [COMPANY LOGO]
  };
\end{tikzpicture}

\vspace*{0.5in}

% Job Title (aligned to the left margin)
\noindent\textbf{\Large [JOB TITLE]}

\vspace{0.1em}
\noindent\large [LOCATION]

\vspace{0.2em}
\noindent [WORK TYPE] @ [OFFICE LOCATION]

\vspace{2em}

\noindent [COMPANY NAME] is optimizing the synergistic paradigms of cross-functional deliverables through recursive stakeholder engagement. Our mission is to leverage agile methodologies to disrupt old markets while organizing new ones. \newline \newline
\noindent Our leadership team emerged fully-formed from various merger-acquisition events, including:
\begin{itemize}
  \item A former Chief Innovation Officer who pioneered the the LinkedIn engagement bait post where you say something shocking and then heavily qualify it
  \item Three consecutive quarters of record-breaking paradigm shifts as measured by KPIs
  \item Several highly qualified individuals whose roles are described in recursive acronyms
\end{itemize}

\section*{The Role}
As [JOB TITLE], you'll be accountable for driving accountability while ensuring all metrics are properly accounted for. Success in this role requires the ability to simultaneously move both upstream and downstream, while maintaining a lateral trajectory across all verticals. We want you to simultaneously create and destroy frameworks across our technical stack.

\section*{Your Work}
\begin{itemize}
  \item Optimize the efficiency of our optimization protocols
  \item Manage the strategic oversight of strategy implementation
  \item Leverage cross-functional synergies to facilitate greater organization cohesivity
  \item Generate reports about the status of reports about report generation
  \item Maintain KPI performance indicators other metrics which measuring our performance
  \item Facilitate the streamlining of our facilitation processes
  \item Chair the committee on committee efficiency
\end{itemize}

\section*{Who You Are}
\begin{itemize}
  \item Master's degree (or similar experience) in Strategic Strategizing or equivalent years of experience in Factorio
  \item Proven track record of recording tracks and tracking records
  \item Demonstrated ability to circle back on circling back
  \item Expert-level proficiency in taking things offline while remaining online
  \item Strong understanding of understanding strong understandings
  \item Certified in certifying certifications
  \item Results-oriented approach to orienting results toward result orientation
  \item Capable of managing up, down, and sideways simultaneously while remaining perpendicular to objectives
\end{itemize}

\section*{Benefits \& Perks}
\begin{itemize}
  \item Competitive salary of [SALARY RANGE] subject to quarterly readjustment based on the performance of performance metrics
  \item Health insurance (pending approval from the Committee on Insurance-Related Health Matters)
  \item Unlimited PTRPTO (Permission to Request Permission for Time Off)
  \item Access to our proprietary coffee-to-meeting conversion pipeline
  \item Professional development opportunities to develop professional opportunity development
  \item Ping pong table (pending approval from the Recreational Asset Utilization Oversight Board)
\end{itemize}

\section*{Our Investors \& Partners}
\begin{itemize}
  \item Various venture capital entities currently undergoing entity verification
  \item Strategic partnerships with partners
  \item Key angels
\end{itemize}

\vspace{1em}
\begin{center}
\textit{Join us in our mission to [COMPANY MISSION STATEMENT] \\
(This posting has been approved by the Department of Posting Approval Approvals)}
\end{center}

\small
\noindent [COMPANY NAME] is an equal opportunity employer, as certified by our Equal Opportunity Employment Opportunity Certification Committee.

\end{document}
```
{% endraw %}