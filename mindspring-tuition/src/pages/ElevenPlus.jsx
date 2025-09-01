// src/pages/ElevenPlus.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../components/ElevenPlus.css"; // keep if this is where your CSS file lives

// ✅ use the images that exist in /src/assets
import heroImg from "../assets/student-boy.jpg";
import tutorImg from "../assets/english.jpg";
import onlineClassImg from "../assets/examtechnique.jpg";
import mathsKidImg from "../assets/maths-tutoring.jpg";

export default function ElevenPlus() {
  return (
    <section className="eleven-plus-page">
      <div className="ep-wrap">
        {/* Header */}
        <header className="ep-head">
          <span className="ep-pill">11+ Programme</span>
          <h1>11+ Exam Preparation</h1>
          <p className="ep-lead">
            At Mindspring Tuition, our 11+ exam programme prepares students
            with the knowledge, skills, and confidence to succeed in grammar
            school entrance exams.
          </p>
        </header>

        {/* Main card: list + hero image */}
        <div className="ep-card">
          <div className="ep-content">
            <div className="ep-block">
              <h3 className="ep-sub">What We Cover</h3>
              <ul className="ep-list">
                <li><span className="ep-dot ep-blue" /> English Comprehension &amp; Creative Writing</li>
                <li><span className="ep-dot ep-purple" /> Mathematics Problem Solving</li>
                <li><span className="ep-dot ep-pink" /> Verbal Reasoning</li>
                <li><span className="ep-dot ep-green" /> Non-Verbal Reasoning</li>
                <li><span className="ep-dot ep-gray" /> Time Management Techniques</li>
              </ul>
            </div>

            <div className="ep-block">
              <h3 className="ep-sub">Why Choose Us?</h3>
              <ul className="ep-checks">
                <li>Experienced tutors specialising in 11+ preparation</li>
                <li>Interactive and engaging online lessons</li>
                <li>Weekly progress tracking and feedback</li>
                <li>Tailored support for your child’s learning style</li>
              </ul>
            </div>

            <div className="ep-cta">
              <Link className="ep-btn" to="/contact">📘 Contact Us</Link>
              <span className="ep-note">Let’s plan your child’s 11+ journey.</span>
            </div>
          </div>

          <figure className="ep-figure">
            <img src={heroImg} alt="Student preparing for the 11+ exam" />
          </figure>
        </div>

        {/* ===== Current Offers (shared card) ===== */}
        <section className="offers-card" aria-labelledby="offers-title-11p">
          <header className="offers-card__head">
            <h2 id="offers-title-11p">Current Offers – Till end of 2025</h2>
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

        {/* Visual highlights */}
        <div className="ep-gallery">
          <figure className="ep-figure sm">
            <img src={tutorImg} alt="One-to-one tutoring support" />
          </figure>
          <figure className="ep-figure sm">
            <img src={onlineClassImg} alt="Exam technique and practice" />
          </figure>
          <figure className="ep-figure sm">
            <img src={mathsKidImg} alt="Focused maths preparation" />
          </figure>
        </div>
      </div>
    </section>
  );
}

