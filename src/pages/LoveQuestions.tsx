import React, { useState } from "react";
import "../App.css";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const QUESTIONS = [
  "Which moment of ours automatically makes you smile?",
  "What is that one small thing I do that makes you feel loved?",
  "If we plan a trip together, where do you think we should go?",
  "When you think about me, what comes to your mind first?",
  "What is one thing you wish we definitely do together in the future?",
];

const LoveQuestions: React.FC = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [finalAnswer, setFinalAnswer] = useState<string[]>([]);

  const sendAnswer = async (qIndex: number, qText: string, qAnswer: string) => {
    try {
      setFinalAnswer((prev) => [...prev, `Q: ${qText}\nA: ${qAnswer}`]);
      if (qIndex === QUESTIONS.length - 1) {
        await emailjs.send(
          "service_iab6wwk",
          "template_bp9tlrr",
          {
            name: "Akash",
            email: "piu@gmail.com",
            answers: finalAnswer
              .concat(`Q: ${qText}\nA: ${qAnswer}`)
              .join("\n\n"),
          },
          "HyOCBGIHJQ3vFN1L0",
        );
        setSending(true);
        setError(null);
        navigate("/coupon");
      }
    } catch (e) {
      setError("Failed to send. Please check your EmailJS configuration.");
    } finally {
      setSending(false);
    }
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    const qText = QUESTIONS[index];
    await sendAnswer(index, qText, answer);
    setAnswer("");
    if (index + 1 >= QUESTIONS.length) {
      setDone(true);
    } else {
      setIndex(index + 1);
    }
  };

  if (done) {
    return (
      <section className="love-questions">
        <div className="questions-card">
          <h2 className="section-title">Thank You ❤️</h2>
          <p className="section-sub">Your answers mean the world to me.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="love-questions">
      <div className="questions-card">
        <h2 className="section-title">Love Questions</h2>
        <p className="question-count">
          Question {index + 1} of {QUESTIONS.length}
        </p>
        <form onSubmit={handleSubmit} className="question-form">
          <div className="question-text">{QUESTIONS[index]}</div>
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Write your answer here..."
            required
            rows={4}
          />

          {error && <div className="error">{error}</div>}

          <button
            className="btn"
            type="submit"
            disabled={sending || !answer.trim()}
          >
            {sending
              ? "Sending..."
              : index + 1 === QUESTIONS.length
                ? "Submit & Finish"
                : "Submit & Next"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoveQuestions;
