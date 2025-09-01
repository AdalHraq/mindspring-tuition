import React from "react";
import "./OfferCards.css";

export default function OfferCards() {
  return (
    <section className="offer-cards" aria-labelledby="offer-cards-title">
      <div className="offer-cards__wrap">
        <h2 id="offer-cards-title" className="offer-cards__title">
          What we offer
        </h2>

        <div className="offer-cards__grid">
          <article className="offer-card">
            <h3>Expert 11+ Tutors</h3>
            <p>Specialists who know the exam inside-out, backed by proven methods.</p>
          </article>

          <article className="offer-card">
            <h3>Full Subject Coverage</h3>
            <p>Verbal, Non-Verbal, Maths, and English — everything your child needs.</p>
          </article>

          <article className="offer-card">
            <h3>Small Group &amp; 1:1</h3>
            <p>Choose the format that fits your child’s learning style and pace.</p>
          </article>

          <article className="offer-card">
            <h3>Exam-Focused Resources</h3>
            <p>Practice papers, mock exams, and insider tips to sharpen performance.</p>
          </article>

          {/* ✅ New card */}
          <article className="offer-card">
            <h3>Early Years Support</h3>
            <p>Foundational literacy, numeracy and learning habits to give young
              learners the best possible start.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

