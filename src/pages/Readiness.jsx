import { ContactLink } from '../components/ContactLink.jsx';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const questions = [
  { area: 'Strategy', text: 'How clearly is AI tied to your business goals?', opts: ['No defined goals for AI yet', 'Some ideas, not prioritized', 'A few prioritized use cases', 'A funded roadmap linked to business goals'] },
  { area: 'Data', text: 'How usable is the data your priority use cases need?', opts: ['Scattered and hard to access', 'Available but inconsistent', 'Mostly clean in a few key systems', 'Well governed and accessible through a platform'] },
  { area: 'Systems', text: 'How easily can new tools connect to your core systems?', opts: ['Mostly manual or closed systems', 'Some integrations, built one at a time', 'APIs for most core systems', 'An integration platform with standard patterns'] },
  { area: 'People and skills', text: 'How comfortable are your teams using AI in their work?', opts: ['Little or no use', 'A few enthusiasts experimenting', 'Several teams using approved tools', 'Broad use, with training and champions'] },
  { area: 'Governance', text: 'How do you manage AI risk, security and acceptable use?', opts: ['No policy yet', 'Informal guidance', 'A written policy with some controls', 'A policy, review process and monitoring in place'] },
  { area: 'Leadership', text: 'How committed is leadership to AI investment?', opts: ['Not yet a priority', 'Interested but unfunded', 'An executive sponsor and pilot budget', 'Sustained funding and clear ownership'] },
];

const bands = [
  { max: 34, name: 'Getting started', text: 'AI interest is there, but the foundations are thin. That is common and fixable.', step: 'Agree on two or three business goals AI should serve, and write a short acceptable-use policy so experiments stay safe.' },
  { max: 64, name: 'Building foundations', text: 'You have pieces in place. The gaps are likely in data access, integration or governance.', step: 'Run a readiness sprint to rank use cases and close the biggest gap before choosing a pilot.' },
  { max: 84, name: 'Ready to pilot', text: 'Your organization can support a well-scoped pilot with measurable results.', step: 'Pick one high-value use case, define success measures, and run a pilot on real systems.' },
  { max: 100, name: 'Ready to scale', text: 'Strong foundations across the board. The challenge now is scaling what works.', step: 'Set up a portfolio process to scale proven pilots and retire the rest.' },
];

const scoreOf = (answers) => {
  const total = answers.reduce((a, b) => a + b, 0);
  return Math.round(((total - questions.length) / (questions.length * 3)) * 100);
};

const Result = ({ answers, onRestart }) => {
  const score = scoreOf(answers);
  const band = bands.find((b) => score <= b.max);
  const headingRef = useRef(null);
  useEffect(() => headingRef.current?.focus(), []);

  return (
    <div className="card card-accent quiz">
      <p className="meta">Your readiness score</p>
      <p className="score">{score}<span> / 100</span></p>
      <h2 className="h3" tabIndex={-1} ref={headingRef}>{band.name}</h2>
      <p>{band.text}</p>
      <ul className="bars">
        {questions.map((q, i) => (
          <li key={q.area}>
            <span className="muted">{q.area}</span>
            <span className="bar" role="img" aria-label={`${answers[i]} of 4`}>
              <span style={{ width: `${(answers[i] / 4) * 100}%` }} />
            </span>
          </li>
        ))}
      </ul>
      <p className="strong">Suggested first step</p>
      <p className="muted">{band.step}</p>
      <div className="actions">
        <ContactLink className="btn btn-primary">Discuss your results</ContactLink>
        <button type="button" className="btn btn-ghost" onClick={onRestart}>Start over</button>
      </div>
    </div>
  );
};

export const Readiness = () => {
  const [answers, setAnswers] = useState([]);
  const index = answers.length;
  const done = index >= questions.length;
  const q = questions[Math.min(index, questions.length - 1)];

  return (
    <section className="container narrow page-head">
      <p className="eyebrow">AI readiness check</p>
      <h1 className="display-sm">How ready is your organization for AI?</h1>
      <p className="lead">Six questions. Answer for your organization as it is today, not as planned.</p>

      {done ? (
        <Result answers={answers} onRestart={() => setAnswers([])} />
      ) : (
        <div className="card quiz">
          <div className="quiz-top">
            <span>Question {index + 1} of {questions.length}</span>
            <span>{q.area}</span>
          </div>
          <div className="progress" role="progressbar" aria-label="Progress" aria-valuemin={0} aria-valuemax={questions.length} aria-valuenow={index}>
            <span style={{ width: `${(index / questions.length) * 100}%` }} />
          </div>
          <fieldset>
            <legend className="h3 quiz-q">{q.text}</legend>
            <div className="options">
              {q.opts.map((label, k) => (
                <button key={label} type="button" className="option" onClick={() => setAnswers([...answers, k + 1])}>
                  {label}
                </button>
              ))}
            </div>
          </fieldset>
          {index > 0 && (
            <button type="button" className="text-btn" onClick={() => setAnswers(answers.slice(0, -1))}>
              ← Previous question
            </button>
          )}
        </div>
      )}
      <p className="meta note">This check is a starting point for conversation, not a formal assessment. Your answers stay in your browser.</p>
    </section>
  );
};
