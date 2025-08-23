import React from "react";
import { Link } from "react-router-dom";   // use Link for SPA navigation
import "./Maths.css";
import mathsImage from "../assets/maths-tutoring.jpg";

export default function Maths() {
  return (
    <section className="math-page" aria-labelledby="math-title">
      <div className="m-wrap">
        {/* Header */}
        <header className="m-head">
          <span className="m-pill">Maths</span>
          <h1 id="math-title">Maths Tuition</h1>
          <p className="m-lead">
            Build rock-solid number sense, fluent methods and confident problem
            solving. Lessons are tailored to your child’s level and exam board
            (GL, CEM, ISEB & independent schools).
          </p>
        </header>

        {/* Main card */}
        <div className="m-card">
          <div className="m-content">
            <div className="m-block">
              <h2 className="m-sub">What we cover</h2>
              <ul className="m-list">
                <li><span className="m-dot m-blue" /> Arithmetic fluency & mental strategies</li>
                <li><span className="m-dot m-purple" /> Fractions, decimals & percentages</li>
                <li><span className="m-dot m-amber" /> Ratio, proportion & scale</li>
                <li><span className="m-dot m-pink" /> Algebra foundations & word problems</li>
                <li><span className="m-dot m-green" /> Geometry, measures & area/volume</li>
                <li><span className="m-dot m-gray" /> Data, averages & probability</li>
              </ul>
            </div>

            <div className="m-block">
              <h2 className="m-sub">How we teach</h2>
              <ul className="m-checks">
                <li>Short, clear teaching then guided practice</li>
                <li>Worked examples that model exam-ready methods</li>
                <li>Timed drills to build accuracy and pace</li>
                <li>Rich word problems to train reasoning</li>
                <li>Personalised feedback and next-step targets</li>
              </ul>
            </div>

            <div className="m-cta">
              <Link className="m-btn" to="/contact">📘 Contact Us</Link>
              <p className="m-note">
                We’ll map a plan that fits your child’s goals and timeline.
              </p>
            </div>
          </div>

          <figure className="m-figure">
            <img src={mathsImage} alt="Student practicing maths problem solving" />
          </figure>
        </div>

        {/* Mini cards */}
        <div className="m-mini">
          <div className="mini-card">
            <h3>Exam Skills</h3>
            <p>Pacing, checking and calculator-free techniques for 11+ style papers.</p>
          </div>
          <div className="mini-card">
            <h3>Targeted Practice</h3>
            <p>Question sets that hit weak spots and build quick wins.</p>
          </div>
          <div className="mini-card">
            <h3>Stretch & Challenge</h3>
            <p>Enrichment problems for high attainers aiming for top marks.</p>
          </div>
        </div>
      </div>

      {/* 👋 Removed the wave */}
    </section>
  );
}

