import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <section className="about-section" aria-labelledby="about-title">
      <div className="about-wrap">

        {/* Header */}
        <header className="about-head">
          <span className="about-pill">Our Story</span>
          <h1 id="about-title">About Mindspring Tuition</h1>
          <div className="about-intro">
            <p>
              Hi, we’re so glad you found us! With over 15 years of experience in
              teaching and tutoring, we’ve had the privilege of working with learners
              of all ages and abilities. Alongside our classroom and tutoring work,
              we’ve also supported behavioural schools, worked closely with students
              with a wide range of special educational needs, and even gained valuable
              experience in governing schools — giving us a deeper understanding of how
              education works both inside and outside the classroom.
            </p>
            <p>
              We know that no two learners are the same, which is why we adapt our
              approach to bring out the very best in each student. Our goal isn’t just
              to help with schoolwork — it’s to build confidence, spark curiosity, and
              make learning enjoyable and rewarding.
            </p>
            <p>
              If you’re looking for tutoring that goes beyond textbooks and grades,
              and truly supports your child as an individual, we’d love to show you
              how we can make a difference.
            </p>
          </div>
        </header>

        {/* Grid */}
        <div className="about-grid">
          <article className="about-card">
            <h2>What we bring</h2>
            <ul className="about-list">
              <li><span className="dot blue" /> 15+ years teaching & tutoring experience</li>
              <li><span className="dot purple" /> Support across mainstream & behavioural schools</li>
              <li><span className="dot green" /> SEN-aware practice tailored to each learner</li>
              <li><span className="dot amber" /> School governance insight — how systems work</li>
            </ul>
          </article>

          <article className="about-card">
            <h2>How we teach</h2>
            <ul className="about-checks">
              <li>Personalised plans that target real needs</li>
              <li>Confidence building through small wins</li>
              <li>Clear modelling, then supported practice</li>
              <li>Exam-smart strategies & time management</li>
              <li>Regular feedback and parent updates</li>
            </ul>
          </article>
        </div>

        {/* Offers Card */}
        <article className="about-card offers-card">
          <h2>Current Offers</h2>
          <ul className="about-list">
            <li><span className="dot amber" /> All block pre-booked lessons – <strong>10% discount</strong> on fees</li>
            <li><span className="dot blue" /> 1-2-1 Maths & Science GCSE <em>(online)</em> – £20/h (offer till end 2025)</li>
            <li><span className="dot blue" /> 1-2-1 Maths & Science GCSE <em>(face-to-face)</em> – £20/h (offer till end 2025)</li>
            <li><span className="dot purple" /> 1-2-1 English GCSE <em>(online)</em> – £25/h</li>
            <li><span className="dot purple" /> 1-2-1 English GCSE <em>(face-to-face)</em> – £35/h</li>
            <li><span className="dot green" /> Small Groups (online) – Maths GCSE £15/h | Science GCSE £15/h | English £17.50/h | 11+ £15/h</li>
          </ul>
        </article>

        {/* CTA */}
        <div className="about-cta">
          <Link className="about-btn" to="/contact">📘 Contact Us </Link>
          <p className="about-note">Let’s map out the right plan for your child.</p>
        </div>
      </div>
    </section>
  );
}

