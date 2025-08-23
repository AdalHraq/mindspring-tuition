import React from "react";
import { Link } from "react-router-dom";      // use client-side navigation
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
                <li><span className="eng-dot eng-blue" /> Reading comprehension & inference</li>
                <li><span className="eng-dot eng-purple" /> Grammar, punctuation & sentence craft</li>
                <li><span className="eng-dot eng-amber" /> Spelling & ambitious vocabulary</li>
                <li><span className="eng-dot eng-pink" /> Creative & persuasive writing</li>
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
              <span className="eng-note">
                We’ll map a plan that fits your child’s goals & timeline.
              </span>
            </div>
          </div>

          <figure className="eng-figure">
            <img src={englishImg} alt="Student practising English comprehension" />
          </figure>
        </div>

        {/* Mini cards row */}
        <div className="eng-mini">
          <article className="mini-card">
            <h3>Comprehension Clinics</h3>
            <p>Teach inference, evidence selection and “explain how” techniques for full-mark answers.</p>
          </article>
          <article className="mini-card">
            <h3>Grammar & Style</h3>
            <p>Core rules + sentence variety, openings and cohesion to lift writing quality quickly.</p>
          </article>
          <article className="mini-card">
            <h3>Writing Workshops</h3>
            <p>Plan fast, write with purpose, and edit for impact using examiner-led checklists.</p>
          </article>
        </div>
      </div>
      {/* 👋 Wave removed */}
    </section>
  );
}

