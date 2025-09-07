// src/pages/Science.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Science.css";
import scienceImg from "../assets/science.jpg";

export default function Science() {
  return (
    <section className="sci-section" aria-labelledby="sci-title">
      <div className="sci-wrap">
        <header className="sci-head">
          <span className="sci-pill">Science</span>
          <h1 id="sci-title">Science Tuition</h1>
          <p className="sci-lead">
            Build secure understanding across Biology, Chemistry and Physics.
            Lessons target your child’s level and the exam board focus (GL, CEM,
            ISEB & independent schools) with clear models, lots of practice and
            feedback.
          </p>
        </header>

        <div className="sci-card">
          <div className="sci-content">
            <div className="sci-block">
              <h2 className="sci-sub">What we cover</h2>
              <ul className="sci-list">
                <li><span className="dot blue" /> Biology fundamentals & practical skills</li>
                <li><span className="dot purple" /> Chemistry particles, reactions & investigation</li>
                <li><span className="dot green" /> Physics forces, energy, electricity & graphs</li>
                <li><span className="dot amber" /> Data handling, graphs & required vocabulary</li>
                <li><span className="dot pink" /> Exam-style questions & problem solving</li>
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

        {/* Offers */}
        <section className="offers-card" aria-labelledby="offers-title-science">
          <header className="offers-card__head">
            <h2 id="offers-title-science">Current Offers – Till end of 2025</h2>
            <span className="offers-badge">10% off fees</span>
          </header>

          <ul className="offers-list">
            <li className="offers-item">
              <span className="dot dot-amber" />
              <div className="offers-item__text">
                <strong>All block pre-booked lessons</strong>
                <p className="offer-note">Applies to lessons booked and paid in advance.</p>
              </div>
            </li>

            <li className="offers-item">
              <span className="dot dot-blue" />
              <div className="offers-item__text">
                <strong>1-2-1 Maths &amp; Science GCSE</strong>
                <p className="offer-note"><em>Online</em> — offer valid until end of 2025.</p>
              </div>
              <span className="price-chip">£25/h</span>
            </li>

            <li className="offers-item">
              <span className="dot dot-blue" />
              <div className="offers-item__text">
                <strong>1-2-1 Maths &amp; Science GCSE</strong>
                <p className="offer-note"><em>Face-to-face</em> — offer valid until end of 2025.</p>
              </div>
              <span className="price-chip">£25/h</span>
            </li>

            <li className="offers-item">
              <span className="dot dot-purple" />
              <div className="offers-item__text">
                <strong>1-2-1 English GCSE</strong>
                <p className="offer-note"><em>Online</em></p>
              </div>
              <span className="price-chip">£25/h</span>
            </li>

            <li className="offers-item">
              <span className="dot dot-purple" />
              <div className="offers-item__text">
                <strong>1-2-1 English GCSE</strong>
                <p className="offer-note"><em>Face-to-face</em></p>
              </div>
              <span className="price-chip">£25/h</span>
            </li>

            <li className="offers-item">
              <span className="dot dot-green" />
              <div className="offers-item__text">
                <strong>SATs (Year 2 – Year 6)</strong>
                <p className="offer-note"><em>Face-to-face</em></p>
              </div>
              <span className="price-chip">£25/h</span>
            </li>

            <li className="offers-item offers-item--group">
              <span className="dot dot-green" />
              <div className="offers-item__text">
                <strong>Small Groups (online)</strong>
                <div className="group-chips">
                  <span className="group-chip">Maths GCSE <span className="group-chip__price">£15/h</span></span>
                  <span className="group-chip">Science GCSE <span className="group-chip__price">£15/h</span></span>
                  <span className="group-chip">English <span className="group-chip__price">£17.50/h</span></span>
                  <span className="group-chip">11+ <span className="group-chip__price">£15/h</span></span>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}

