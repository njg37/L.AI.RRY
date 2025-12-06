import React from "react";
import { useParams } from "react-router-dom";
import "../../styles/examDetails.css";

export default function ExamDetails() {
  const { id } = useParams();

  return (
    <div className="exam-details-container">
      <div className="exam-header">
        <h1 className="exam-title">Exam Title {id}</h1>
        <p className="exam-subtitle">
          Full syllabus coverage • Expert-level mock tests • Updated patterns
        </p>
      </div>

      <div className="exam-info-card">
        <h2>About this Exam</h2>
        <p>
          This exam evaluates your understanding of major subjects, reasoning,
          and aptitude. Practice high‑quality mock tests designed to simulate the
          real exam pattern.
        </p>
      </div>

      <div className="exam-sections">
        <h2>Included in This Package</h2>

        <div className="exam-grid">
          <div className="exam-box">
            <h3>📘 Full-Length Mock Tests</h3>
            <p>Real exam experience with timer & analytics.</p>
          </div>

          <div className="exam-box">
            <h3>📊 Performance Analysis</h3>
            <p>Accuracy, speed, topic-wise strengths & weaknesses.</p>
          </div>

          <div className="exam-box">
            <h3>📝 Sectional Tests</h3>
            <p>Practice focused tests to improve efficiency.</p>
          </div>
        </div>
      </div>

      <button className="start-test-btn">Start Mock Test</button>
    </div>
  );
}
