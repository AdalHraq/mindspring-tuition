import React from "react";
import { Link } from "react-router-dom";
import "./English.css";
import englishImg from "../assets/english.jpg";

export default function English() {
  return (
    <section className="eng-page" aria-labelledby="eng-title">
      <div className="eng-wrap">
        {/* Header */}
        <header className="eng-head">
          <span className="eng-pill">English</span>
          <h1 id="eng-title">English Tuition</h1>
          <p className="eng-lead">
            Build clear comprehension, confident grammar and expressive writing.
            Lessons are tailored to your child’s level and exam board (GL, CEM,
            ISEB & independent schools).
          </p>
        </header>

        {/* Main card */}
        <div className="eng-card">
          <div className="eng-content">
            <div className="eng-block">
              <h2 className="eng-sub">What we cover</h2>
              <ul className="eng-list">
                <li><span className="eng-dot eng-blue" /> Reading comprehension &amp; inference</li>
                <li><span className="eng-dot eng-purple" /> Grammar, punctuation &amp; sentence craft</li>
                <li><span className="eng-dot eng-amber" /> Spelling &amp; ambitious vocabulary</li>
                <li><span className="eng-dot eng-pink" /> Creative &amp; persuasive writing</li>
                <li><span className="eng-dot eng-green" /> Exam-style practice questions</li>
              </ul>
            </div>

            <div className="eng-block">
              <h2 className="eng-sub">How we teach</h2>
              <ul className="eng-checks">
                <li>Short, high-impact explanations then guided practice</li>
                <li>Model answers + scaffolds that show “what good looks like”</li>
                <li>Timed drills to build accuracy and pace</li>
                <li>Personalised feedback and next-step targets</li>
              </ul>
            </div>

            <div className="eng-cta">
              <Link className="eng-btn" to="/contact">📘 Contact Us</Link>
              <span className="eng-note">We’ll map a plan that fits your child’s goals &amp; timeline.</span>
            </div>
          </div>

          <figure className="eng-figure">
            <img src={englishImg} alt="Student practising English comprehension" />
          </figure>
        </div>

        {/* ===== Current Offers (shared card) ===== */}
        <section className="offers-card" aria-labelledby="offers-title-eng">
          <header className="offers-card__head">
            <h2 id="offers-title-eng">Current Offers – Till end of 2025</h2>
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
              <span className="price-chip">£20/h</span>
            </li>

            <li className="offers-item">
              <span className="dot dot-blue" />
              <div className="offers-item__text">
                <strong>1-2-1 Maths &amp; Science GCSE</strong>
                <p className="offer-note"><em>Face-to-face</em> — offer valid until end of 2025.</p>
              </div>
              <span className="price-chip">£20/h</span>
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
              <span className="price-chip">£35/h</span>
            </li>

            <li className="offers-item offers-item--group">
              <span className="dot dot-green" />
              <div className="offers-item__text">
                <strong>Small Groups (online)</strong>
                <div className="group-chips">
                  <span className="group-chip">
                    Maths GCSE <span className="group-chip__price">£15/h</span>
                  </span>
                  <span className="group-chip">
                    Science GCSE <span className="group-chip__price">£15/h</span>
                  </span>
                  <span className="group-chip">
                    English <span className="group-chip__price">£17.50/h</span>
                  </span>
                  <span className="group-chip">
                    11+ <span className="group-chip__price">£15/h</span>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </section>

        {/* Mini cards row */}
        <div className="eng-mini">
          <article className="mini-card">
            <h3>Comprehension Clinics</h3>
            <p>Teach inference, evidence selection and “explain how” techniques for full-mark answers.</p>
          </article>
          <article className="mini-card">
            <h3>Grammar &amp; Style</h3>
            <p>Core rules + sentence variety, openings and cohesion to lift writing quality quickly.</p>
          </article>
          <article className="mini-card">
            <h3>Writing Workshops</h3>
            <p>Plan fast, write with purpose, and edit for impact using examiner-led checklists.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

