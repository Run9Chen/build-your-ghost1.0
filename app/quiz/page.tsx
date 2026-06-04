'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Nav from '@/components/Nav';
import GhostMascot from '@/components/GhostMascot';
import {
  createEmptyScores,
  getGhostResult,
  quizQuestions,
  ScoreMap,
} from '@/data/quiz';

const floatDecor = [
  { left: '8%', top: '18%', type: 'paper' },
  { left: '15%', top: '74%', type: 'spark' },
  { left: '86%', top: '15%', type: 'paper' },
  { left: '78%', top: '72%', type: 'spark' },
  { left: '90%', top: '42%', type: 'flame' },
  { left: '6%', top: '46%', type: 'flame' },
];

type Phase = 'intro' | 'playing' | 'result';

export default function QuizPage() {
  const [phase, setPhase] = useState<Phase>('intro');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [scores, setScores] = useState<ScoreMap>(() => createEmptyScores());

  const question = quizQuestions[questionIndex];
  const result = useMemo(() => getGhostResult(scores), [scores]);
  const progress = Math.round(((questionIndex + 1) / quizQuestions.length) * 100);

  function startQuiz() {
    setScores(createEmptyScores());
    setQuestionIndex(0);
    setPhase('playing');
  }

  function chooseOption(delta: Partial<ScoreMap>) {
    const nextScores = { ...scores };

    for (const [key, value] of Object.entries(delta) as [keyof ScoreMap, number][]) {
      nextScores[key] += value;
    }

    setScores(nextScores);

    if (questionIndex === quizQuestions.length - 1) {
      setPhase('result');
      return;
    }

    setQuestionIndex((current) => current + 1);
  }

  function restart() {
    setScores(createEmptyScores());
    setQuestionIndex(0);
    setPhase('intro');
  }

  return (
    <main className="container quizPage">
      <Nav />

      <div className="ambientLayer" aria-hidden="true">
        {floatDecor.map((item, index) => (
          <span
            key={`${item.left}-${item.top}-${index}`}
            className={`ambientBit ambientBit-${item.type}`}
            style={{ left: item.left, top: item.top }}
          />
        ))}
      </div>

      {phase === 'intro' && (
        <section className="quizIntro">
          <div className="introHalo" />
          <GhostMascot size="lg" />
          <div className="introCard">
            <span className="eyebrow">WHAT GHOST ARE YOU?</span>
            <h1 className="quizTitle">你是什么鬼？</h1>
            <p className="quizSubtitle">
              一个黑白版 MBTI 式人格测试，看看你的灵魂到底属于哪种鬼。
            </p>
            <div className="actions">
              <button className="btn" onClick={startQuiz}>
                开始测试
              </button>
            </div>
            <p className="footnote">
              测完后，你可以继续创建自己的数字幽灵 Build Your Ghost。
            </p>
          </div>
        </section>
      )}

      {phase === 'playing' && (
        <section className="quizStage">
          <div className="progressMeta">
            <span>地府人格测试进行中</span>
            <strong>
              {questionIndex + 1} / {quizQuestions.length}
            </strong>
          </div>
          <div className="progressBar">
            <div style={{ width: `${progress}%` }} />
          </div>

          <div className="questionCard">
            <div className="questionHeader">
              <span className="questionBadge">{question.scene}</span>
              <span className="questionTiny">黑白幽灵版场景题</span>
            </div>

            <h1 className="questionText">{question.prompt}</h1>

            <div className="optionsGrid">
              {question.options.map((option, index) => (
                <button
                  className="optionButton"
                  key={option.id}
                  onClick={() => chooseOption(option.scores)}
                >
                  <span className="optionIndex">{String.fromCharCode(65 + index)}</span>
                  <span className="optionCopy">
                    <strong>{option.text}</strong>
                    <small>{option.detail}</small>
                  </span>
                </button>
              ))}
            </div>
          </div>

          <p className="quizHint">
            这不是科学诊断，是一个适合截图传播的地府人格入口。选更像你的那个，不要选更体面那个。
          </p>
        </section>
      )}

      {phase === 'result' && (
        <section className="resultLayout">
          <article className="shareCard">
            <div className="paperTape paperTape-left" />
            <div className="paperTape paperTape-right" />

            <div className="shareHead">
              <span className="shareTiny">WHAT GHOST ARE YOU?</span>
              <GhostMascot size="sm" mood="blink" />
            </div>

            <p className="resultLead">你是：{result.name}</p>
            <h1 className="resultHeadline">{result.headline}</h1>

            <section className="resultSection">
              <h2>性格分析</h2>
              <p>{result.analysis}</p>
            </section>

            <section className="resultSection">
              <h2>灵魂关键词</h2>
              <div className="keywordList">
                {result.keywords.map((keyword) => (
                  <span key={keyword} className="keywordChip">
                    {keyword}
                  </span>
                ))}
              </div>
            </section>

            <section className="resultSection">
              <h2>地府评语</h2>
              <p>{result.verdict}</p>
            </section>

            <section className="resultSection openingSection">
              <h2>适合你的 Build Your Ghost 开场白</h2>
              <blockquote>{result.opening}</blockquote>
            </section>
          </article>

          <aside className="resultSide">
            <div className="resultPanel">
              <span className="eyebrow">TODAY ONLY</span>
              <h2>这只是今天的你。</h2>
              <p>
                100 天后，你会变成什么鬼？也许更亮，也许更怪，也许更像你自己。
              </p>
              <div className="actions left stacked">
                <Link className="btn" href="/">
                  创建我的数字幽灵
                </Link>
                <button className="btn secondary" onClick={restart}>
                  重新测一次
                </button>
              </div>
            </div>

            <div className="resultPanel muted">
              <p className="shareLabel">截图分享感建议</p>
              <p>
                把这张结果卡截给朋友，看看你们到底谁是显眼包鬼，谁又是深夜赛博孤魂。
              </p>
            </div>
          </aside>
        </section>
      )}
    </main>
  );
}
