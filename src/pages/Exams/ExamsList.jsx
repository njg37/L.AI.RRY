import React from "react";
import { Link } from "react-router-dom";
import "../../styles/examList.css";

export default function ExamsList() {
  const exams = [
    {
      id: 1,
      title: "SSC CGL",
      desc: "Tier‑I & Tier‑II based mock tests with updated pattern.",
    },
    {
      id: 2,
      title: "Bank PO",
      desc: "Prelims + Mains full mock tests with explanations.",
    },
    {
      id: 3,
      title: "Railway NTPC",
      desc: "Topic-wise & full-length practice tests.",
    },
    {
      id: 4,
      title: "WBP Constable",
      desc: "Chapter tests + full mock tests for WB Police.",
    },
  ];

  return (
    <div className="examlist-container">
      <h1 className="examlist-title">Choose Your Exam</h1>
      <p className="examlist-subtitle">
        Select an exam to view test series, analytics and more.
      </p>

      <div className="examlist-grid">
        {exams.map((exam) => (
          <div key={exam.id} className="exam-card">
            <h3>{exam.title}</h3>
            <p>{exam.desc}</p>
            <Link to={`/exams/${exam.id}`} className="exam-btn">
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
