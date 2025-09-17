// src/pages/Offer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Offer.css";

export default function Offer() {
  return (
    <section className="offer-page" aria-labelledby="offer-title">
      <div className="offer-wrap">
        {/* Header */}
        <header className="offer-head">
          <span className="offer-pill">11+ Programme</span>
          <h1 id="offer-title">What We Offer</h1>
          <p className="offer-lead">
            Expert-led 11+ preparation with the structure, practice and feedback
            that turns preparation into performance.
          </p>
        </header>

        {/* Two cards */}
        <div className="offer-grid">
          <article className="offer-card" aria-labelledby="offer-left">
            <h2 id="offer-left">What We Offer</h2>
            <ul className="tick-list">
              <li><strong>Expert 11+ Tutors</strong> – Specialists who know the exam inside-out.</li>
              <li><strong>Full Subject Coverage</strong> – Verbal, Non-Verbal, Maths, and English.</li>
              <li><strong>Small Group &amp; 1:1 Options</strong> – Choose the style that works best.</li>
              <li><strong>Exam-Focused Resources</strong> – Practice papers, mock exams, and insider tips.</li>
              <li><strong>Early Years Support</strong> - Foundational literacy, numeracy, and learning habits to give young learners the best possible start.</li>
            </ul>
          </article>

          <article className="offer-card" aria-labelledby="offer-right">
            <h2 id="offer-right">How We Get The Best Results</h2>
            <ul className="tick-list">
              <li><strong>Confidence Building</strong> – Boosting skills and self-belief.</li>
              <li><strong>Targeted Practice</strong> – Focus on the areas that make the biggest difference.</li>
              <li><strong>Real Exam Conditions</strong> – Mock tests to reduce nerves.</li>
              <li><strong>Strategy Coaching</strong> – Time management &amp; problem-solving shortcuts.</li>
              <li><strong>Parental Updates</strong> – Keeping you in the loop every step of the way.</li>
            </ul>
          </article>
        </div>

        {/* Pricing Section */}
        <div className="pricing-section">
          <div className="pricing-header">
            <span className="pricing-badge">Special Offer</span>
            <h2>Prices</h2>
            <p className="pricing-subtitle">1-2-1 offer till end of the year, first come first serve</p>
          </div>

          <div className="pricing-grid">
            {/* 1-to-1 Tutoring */}
            <div className="pricing-card">
              <h3>1-to-1 Tutoring Online</h3>
              <div className="price-highlight">£25/H</div>
              <ul className="pricing-list">
                <li>Maths GCSE online</li>
                <li>Science GCSE online</li>
                <li>English GCSE</li>
                <li>11+ Online</li>
                <li>KS1/KS2/KS3 Tutoring online</li>
              </ul>
            </div>

            {/* Classes Online */}
            <div className="pricing-card">
              <h3>Classes Online</h3>
              <div className="price-highlight">£15/H</div>
              <ul className="pricing-list">
                <li>Maths GCSE online</li>
                <li>Science GCSE online</li>
                <li>English GCSE</li>
                <li>11+ Online</li>
              </ul>
            </div>

            {/* Classes Face to Face */}
            <div className="pricing-card">
              <h3>Classes Face to Face</h3>
              <div className="price-highlight">£20/H</div>
              <ul className="pricing-list">
                <li>Maths GCSE</li>
                <li>Science GCSE</li>
                <li>English GCSE</li>
                <li>11+ Classes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="offer-cta">
          <Link className="offer-btn" to="/contact">📘 Contact Us</Link>
        </div>
      </div>
    </section>
  );
}