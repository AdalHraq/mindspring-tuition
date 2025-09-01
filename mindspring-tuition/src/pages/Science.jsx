import React from "react";
import { Link } from "react-router-dom";
import "./Science.css";
import scienceImg from "../assets/science.jpg";

export default function Science() {
  return (
    <section className="sci-section" aria-labelledby="sci-title">
      <div className="sci-wrap">
        {/* Header */}
        <header className="sci-head">
          <span className="sci-pill">Science</span>
          <h1 id="sci-title">Science Tuition</h1>
          <p className="sci-lead">
            Build secure understanding across Biology, Chemistry and Physics.
            Lessons target your child’s level and the exam board focus (GL, CEM,
            ISEB & independent schools) with clear models, lots of practice and feedback.
          </p>
        </header>

        {/* Main card */}
        <div className="sci-card">
          <div className="sci-content">
            <div className="sci-block">
              <h2 className="sci-sub">What we cover</h2>
              <ul className="sci-list">
                <li><span className="sci-dot blue" /> Biology fundamentals & practical skills</li>
                <li><span className="sci-dot purple" /> Chemistry particles, reactions & investigation</li>
                <li><span className="sci-dot green" /> Physics forces, energy, electricity & graphs</li>
                <li><span className="sci-dot amber" /> Data handling, graphs & required vocabulary</li>
                <li><span className="sci-dot pink" /> Exam-style questions & problem solving</li>
              </ul>
            </div>

            <div className="sci-block">
              <h2 className="sci-sub">How we teach</h2>
              <ul className="sci-checks">
                <li>Short, crystal-clear explanations then guided practice</li>
                <li>Scaffolded model answers that show “what great looks like”</li>
                <li>Retrieval & timed drills to build fluency and pace</li>
                <li>Regular low-stakes quizzes and exam-style questions</li>
                <li>Personalised feedback and simple next-step targets</li>
              </ul>
            </div>

            <div className="sci-cta">
              <Link className="sci-btn" to="/contact">📘 Contact Us</Link>
              <p className="sci-note">We’ll map a plan that fits your child’s goals and timeline.</p>
            </div>
          </div>

          <figure className="sci-figure" aria-hidden="true">
            <img src={scienceImg} alt="" />
          </figure>
        </div>

        {/* Current Offers */}
        <section className="offers-card" aria-labelledby="offers-title-science">
          <header className="offers-card__head">
            <h2 id="offers-title-science">Current Offers – Till end of 2025</h2>
            <span className="offers-badge">10% off fees</span>
          </header>

          <ul className="offers-list">
            <li className="offer-row">
              <span className="dot dot-amber" />
              <div className="offer-main">
                <strong>All block pre-booked lessons</strong>
                <p className="offer-sub">Applies to lessons booked and paid in advance.</p>
              </div>
            </li>

            <li className="offer-row">
              <span className="dot dot-blue" />
              <div className="offer-main">
                <strong>1-2-1 Maths &amp; Science GCSE</strong>
                <p className="offer-sub"><em>Online</em> — offer valid until end of 2025.</p>
              </div>
              <span className="price">£20/h</span>
            </li>

            <li className="offer-row">
              <span className="dot dot-blue" />
              <div className="offer-main">
                <strong>1-2-1 Maths &amp; Science GCSE</strong>
                <p className="offer-sub"><em>Face-to-face</em> — offer valid until end of 2025.</p>
              </div>
              <span className="price">£20/h</span>
            </li>

            <li className="offer-row">
              <span className="dot dot-purple" />
              <div className="offer-main">
                <strong>1-2-1 English GCSE</strong>
                <p className="offer-sub"><em>Online</em></p>
              </div>
              <span className="price">£25/h</span>
            </li>

            <li className="offer-row">
              <span className="dot dot-purple" />
              <div className="offer-main">
                <strong>1-2-1 English GCSE</strong>
                <p className="offer-sub"><em>Face-to-face</em></p>
              </div>
              <span className="price">£35/h</span>
            </li>
          </ul>

          <div className="offer-groups">
            <h3>Small Groups (online)</h3>
            <div className="group-grid">
              <div className="group-pill">
                <span>Maths GCSE</span>
                <strong className="pill-price">£15/h</strong>
              </div>
              <div className="group-pill">
                <span>Science GCSE</span>
                <strong className="pill-price">£15/h</strong>
              </div>
              <div className="group-pill wide">
                <span>English</span>
                <strong className="pill-price">£17.50/h</strong>
              </div>
              <div className="group-pill wide">
                <span>11+</span>
                <strong className="pill-price">£15/h</strong>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

