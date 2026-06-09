'use client'

import Head from 'next/head'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>The Challenge!</title>
      </Head>

      {/* Galaxy Background */}
      <div id="galaxy-bg">
        <div className="nebula nebula-1"></div>
        <div className="nebula nebula-2"></div>
        <div className="nebula nebula-3"></div>
        <div id="floating-bg"></div>
      </div>
      <div id="confetti-container"></div>

      {/* Character reaction overlay */}
      <div id="char-react-overlay" className="char-react-overlay"></div>

      {/* Fixed home beacon */}
      <button
        className="home-beacon"
        id="home-beacon"
        onClick={(e) => { e.currentTarget.classList.add('clicked'); setTimeout(() => window.goHome(), 220); }}
        title="Back to base"
      >
        <svg className="home-beacon-icon" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="#0B1E48"/>
        </svg>
      </button>

      {/* SCREEN: WELCOME */}
      <div id="screen-welcome" className="screen active">
        <div className="screen-content">
          <div className="logo-wrap">
            <div className="space-rocket-logo" id="welcome-rocket-logo"></div>
            <h1 className="game-title">SpaceKids</h1>
            <p className="tagline">Where fun never ends!</p>
          </div>
          <div className="how-to-steps glass-card">
            <div className="step-item"><span className="step-num">1</span> Name your space crew</div>
            <div className="step-item"><span className="step-num">2</span> Each team picks 3 missions</div>
            <div className="step-item"><span className="step-num">3</span> Travel through the galaxy!</div>
            <div className="step-item bonus-step"><span className="bonus-star-icon"></span> Sibling Challenges = BONUS points!</div>
          </div>
          <button className="btn-primary btn-huge pulse-btn" onClick={() => window.showScreen('screen-teams')}>
            <span className="btn-rocket-icon"></span> LAUNCH MISSION!
          </button>
          <button className="scores-btn" onClick={() => window.showLeaderboard()}><span className="btn-trophy-icon"></span> Mission Records</button>
        </div>
      </div>

      {/* SCREEN: LEADERBOARD */}
      <div id="screen-scores" className="screen">
        <div className="screen-content">
          <h2 className="screen-title">Mission Records</h2>
          <div id="scores-board" className="scores-board"></div>
          <div id="scores-empty" className="scores-empty hidden">
            <p>No missions completed yet!</p>
            <p>Launch your first mission!</p>
          </div>
          <div className="scores-actions">
            <button className="btn-primary btn-large" onClick={() => window.showScreen('screen-welcome')}>← Back to Base</button>
            <button className="btn-secondary" onClick={() => window.clearScores()}>Clear Records</button>
          </div>
        </div>
      </div>

      {/* SCREEN: TEAM SETUP */}
      <div id="screen-teams" className="screen">
        <div className="screen-content">
          <div id="setup-phase-0">
            <h2 className="screen-title">Assemble Your Crew!</h2>
            <div className="team-setup-row">
              <div className="team-input-card t1-card glass-card">
                <div className="team-avatar-icon" id="name-prev-1"></div>
                <label>Team 1</label>
                <input type="text" id="team1-input" className="team-name-input t1-input" placeholder="Enter name..." maxLength={15} />
                <div className="name-suggestions">
                  <span onClick={() => window.setName(1,'The Stars')}>The Stars</span>
                  <span onClick={() => window.setName(1,'Thunderbolts')}>Thunderbolts</span>
                  <span onClick={() => window.setName(1,'Lions')}>Lions</span>
                  <span onClick={() => window.setName(1,'Rockets')}>Rockets</span>
                </div>
              </div>
              <div className="vs-circle">VS</div>
              <div className="team-input-card t2-card glass-card">
                <div className="team-avatar-icon" id="name-prev-2"></div>
                <label>Team 2</label>
                <input type="text" id="team2-input" className="team-name-input t2-input" placeholder="Enter name..." maxLength={15} />
                <div className="name-suggestions">
                  <span onClick={() => window.setName(2,'Dragons')}>Dragons</span>
                  <span onClick={() => window.setName(2,'Dolphins')}>Dolphins</span>
                  <span onClick={() => window.setName(2,'Pandas')}>Pandas</span>
                  <span onClick={() => window.setName(2,'Wizards')}>Wizards</span>
                </div>
              </div>
            </div>
            <button className="btn-primary btn-large" onClick={() => window.proceedToCustomize()}>CREATE YOUR IDENTITY →</button>
            <button className="btn-back" onClick={() => window.showScreen('screen-welcome')}>← Back</button>
          </div>

          <div id="setup-phase-custom" style={{display:'none'}}>
            <div className="custom-header">
              <span className="custom-team-pill" id="custom-team-pill">TEAM 1</span>
              <span className="custom-team-title" id="custom-team-title">Team Name</span>
            </div>
            <div className="custom-preview glass-card">
              <div className="custom-char-big" id="custom-char-preview"></div>
              <div className="custom-preview-details">
                <div className="custom-char-name" id="custom-char-name">Astronaut</div>
                <div className="custom-sub-row">
                  <span className="custom-color-dot" id="custom-color-prev" style={{background:'#2B9FFF'}}>Blue</span>
                  <span className="custom-rocket-prev" id="custom-rocket-prev"></span>
                </div>
                <div className="custom-badge-prev" id="custom-badge-prev"></div>
              </div>
            </div>
            <div className="custom-section-label">CHOOSE CHARACTER</div>
            <div className="char-grid" id="char-grid"></div>
            <div className="custom-section-label">CHOOSE ROCKET</div>
            <div className="rocket-row" id="rocket-row"></div>
            <div className="custom-section-label">TEAM COLOR</div>
            <div className="color-row" id="color-row"></div>
            <div className="custom-section-label">TEAM BADGE</div>
            <div className="badge-row" id="badge-row"></div>
            <button className="btn-primary btn-large" id="custom-done-btn" onClick={() => window.confirmCustomize()}>NEXT: TEAM 2 →</button>
            <button className="btn-back" onClick={() => window.backFromCustomize()}>← Back</button>
          </div>
        </div>
      </div>

      {/* SCREEN: MISSION SELECTION */}
      <div id="screen-mission-select" className="screen">
        <div className="screen-content screen-wide">
          <div className="pick-banner" id="pick-banner">
            <div className="pick-banner-left">
              <span className="pick-char" id="pick-char"></span>
              <div className="pick-banner-text">
                <div className="pick-team-name" id="pick-team-name">Team Name</div>
                <div className="pick-instruction">is choosing mission <strong id="pick-num">1</strong> of 3</div>
              </div>
            </div>
            <div className="pick-slots-row">
              <div className="pick-slot" id="pslot-0" title="Team 1 — pick 1"></div>
              <div className="pick-slot" id="pslot-2" title="Team 1 — pick 2"></div>
              <div className="pick-slot" id="pslot-4" title="Team 1 — pick 3"></div>
              <div className="pick-divider">|</div>
              <div className="pick-slot" id="pslot-1" title="Team 2 — pick 1"></div>
              <div className="pick-slot" id="pslot-3" title="Team 2 — pick 2"></div>
              <div className="pick-slot" id="pslot-5" title="Team 2 — pick 3"></div>
            </div>
          </div>
          <h2 className="msel-title">Choose Your Missions</h2>
          <div className="mission-galaxy-grid" id="mission-galaxy-grid"></div>
          <button className="btn-back" onClick={() => window.goHome()} style={{marginTop:'8px'}}>← Back to Base</button>
        </div>
      </div>

      {/* SCREEN: GAME INTRO */}
      <div id="screen-game-intro" className="screen">
        <div className="screen-content">
          <div className="world-badge" id="world-badge">
            <span id="world-icon"></span>
            <span id="world-name">Moon Base</span>
          </div>
          <div className="game-badge" id="intro-badge">Mission 1 of 3</div>
          <div className="intro-emoji" id="intro-emoji"></div>
          <h2 className="intro-title" id="intro-title">Game Title</h2>
          <p className="intro-desc" id="intro-desc">Game description</p>
          <div className="intro-scores">
            <div className="intro-score-card glass-card" id="intro-card-1">
              <div className="intro-char-icon" id="intro-char-1"></div>
              <div className="intro-score-name" id="intro-t1-name">Team 1</div>
              <div className="intro-score-num" id="intro-t1-score">0</div>
              <div className="intro-score-label">pts</div>
            </div>
            <div className="intro-score-card glass-card" id="intro-card-2">
              <div className="intro-char-icon" id="intro-char-2"></div>
              <div className="intro-score-name" id="intro-t2-name">Team 2</div>
              <div className="intro-score-num" id="intro-t2-score">0</div>
              <div className="intro-score-label">pts</div>
            </div>
          </div>
          <button className="btn-primary btn-large" onClick={() => window.beginCurrentGame()}>LAUNCH!</button>
        </div>
      </div>

      {/* SCREEN: TEAM SWITCH */}
      <div id="screen-switch" className="screen">
        <div className="screen-content">
          <p className="switch-label">PREPARE FOR LAUNCH</p>
          <div className="switch-card glass-card" id="switch-card">
            <div className="switch-emoji" id="switch-emoji"></div>
            <h2 className="switch-team" id="switch-team-name">Team Name</h2>
            <p className="switch-sub">It&apos;s your turn!</p>
            <p className="switch-game" id="switch-game-name">Game Name</p>
          </div>
          <button className="btn-primary btn-large" onClick={() => window.showQuestion()}>WE&apos;RE READY! →</button>
        </div>
      </div>

      {/* SCREEN: PLAYING */}
      <div id="screen-playing" className="screen">
        <div className="screen-content screen-wide">
          <div className="world-indicator" id="world-indicator">
            <span id="play-world-icon"></span>
            <span id="play-world-name">Moon Base</span>
          </div>
          <div className="team-panels">
            <div className="team-panel t1-panel" id="team-panel-1">
              <div className="panel-avatar" id="panel-char-1"></div>
              <div className="panel-info">
                <div className="panel-name" id="play-t1-name">Team 1</div>
                <div className="panel-score" id="play-t1-score">0</div>
                <div className="panel-streak" id="panel-streak-1"></div>
              </div>
              <div className="panel-badges" id="panel-badges-1"></div>
            </div>
            <div className="score-bar-center">
              <div className="game-label" id="play-game-label">Mission 1/3</div>
              <div className="round-pips" id="round-pips"></div>
            </div>
            <div className="team-panel t2-panel" id="team-panel-2">
              <div className="panel-info" style={{textAlign:'right'}}>
                <div className="panel-name" id="play-t2-name">Team 2</div>
                <div className="panel-score" id="play-t2-score">0</div>
                <div className="panel-streak" id="panel-streak-2"></div>
              </div>
              <div className="panel-avatar" id="panel-char-2"></div>
              <div className="panel-badges" id="panel-badges-2"></div>
            </div>
          </div>
          <div className="team-banner" id="team-banner">Team&apos;s Turn!</div>
          <div className="holo-card" id="question-card">
            <div className="holo-scanline"></div>
            <div className="qcard-header">
              <span className="qcard-emoji" id="qcard-emoji"></span>
              <span className="qcard-game" id="qcard-game">Mission</span>
              <div className="card-icon-btns">
                <button className="card-icon-btn card-icon-hint" id="hint-btn" onClick={() => window.showHint()} title="Hint">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
                    <path d="M9 12.5c0 1.2.5 2.3 1.3 3H13.7c.8-.7 1.3-1.8 1.3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <rect x="9.5" y="15.5" width="5" height="1.5" rx="0.75" fill="currentColor"/>
                    <rect x="10" y="17" width="4" height="1.5" rx="0.75" fill="currentColor"/>
                  </svg>
                  <span>Hint</span>
                </button>
                <button className="card-icon-btn card-icon-reveal" id="reveal-btn" onClick={() => window.revealAnswer()} title="Reveal Answer">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="12" cy="12" rx="9" ry="5.5" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
                  </svg>
                  <span>Reveal</span>
                </button>
              </div>
            </div>
            <div className="question-text" id="question-text">Question goes here...</div>
            <div id="answer-box" className="answer-box hidden">
              <div className="answer-label">Answer:</div>
              <div className="answer-text" id="answer-text">Answer here</div>
            </div>
            <div id="hint-box" className="hint-box hidden">
              <div className="hint-inner" id="hint-text">Hint here</div>
            </div>
            <div className="powerups-bar" id="powerups-bar">
              <button className="powerup-btn" id="pu-fifty" onClick={() => window.usePowerup('fifty')} title="50/50 — skip the hard part">
                <span className="pu-icon pu-icon-fifty"></span><span className="pu-label">50/50</span>
              </button>
              <button className="powerup-btn" id="pu-double" onClick={() => window.usePowerup('double')} title="Double — next correct = 20 pts">
                <span className="pu-icon pu-icon-double"></span><span className="pu-label">×2 Pts</span>
              </button>
              <button className="powerup-btn" id="pu-freeze" onClick={() => window.usePowerup('freeze')} title="Freeze — steal 5 pts from opponent">
                <span className="pu-icon pu-icon-freeze"></span><span className="pu-label">Freeze</span>
              </button>
              <button className="powerup-btn" id="pu-galaxy" onClick={() => window.usePowerup('galaxy')} title="Galaxy — reveal extra hint">
                <span className="pu-icon pu-icon-galaxy"></span><span className="pu-label">Galaxy</span>
              </button>
            </div>
          </div>
          <div className="timer-wrap" id="timer-wrap">
            <svg className="timer-svg" viewBox="0 0 120 120">
              <circle className="timer-track" cx="60" cy="60" r="52"/>
              <circle className="timer-fill" id="timer-circle" cx="60" cy="60" r="52"/>
            </svg>
            <div className="timer-num" id="timer-num">60</div>
          </div>
          <div className="score-row">
            <button className="btn-pass" onClick={() => window.recordAnswer(false)}>Pass</button>
            <button className="btn-gotit" id="gotit-btn" onClick={() => window.recordAnswer(true)}>Got It!</button>
            <button className="btn-continue" onClick={() => window.continueQuestion()}>CONTINUE</button>
          </div>
        </div>
      </div>

      {/* SCREEN: SIBLING CHALLENGE */}
      <div id="screen-sibling" className="screen">
        <div className="screen-content">
          <div className="sibling-chars">
            <span className="sibling-char" id="sibling-char-1"></span>
            <span className="sibling-heart sibling-heart-icon"></span>
            <span className="sibling-char" id="sibling-char-2"></span>
          </div>
          <h2 className="sibling-title">SIBLING<br/>CHALLENGE!</h2>
          <p className="sibling-sub">Work together — BOTH teams earn bonus points!</p>
          <div className="sibling-card glass-card">
            <div className="sibling-card-emoji" id="sibling-emoji"></div>
            <h3 className="sibling-card-title" id="sibling-chal-title">Challenge Title</h3>
            <p className="sibling-card-desc" id="sibling-chal-desc">Challenge description here</p>
            <div className="sibling-bonus">Both teams earn <span id="sibling-pts">20</span> bonus points!</div>
          </div>
          <div className="sibling-btn-row">
            <button className="btn-primary btn-large" onClick={() => window.completeSibling(true)}>WE DID IT!</button>
            <button className="btn-secondary" onClick={() => window.completeSibling(false)}>Skip this time</button>
          </div>
        </div>
      </div>

      {/* SCREEN: GAME RESULTS */}
      <div id="screen-game-result" className="screen">
        <div className="screen-content">
          <h2 className="screen-title" id="gresult-title">Mission Complete!</h2>
          <div className="gresult-scores">
            <div className="gresult-card glass-card" id="gresult-card-1">
              <div className="gresult-char" id="gresult-char-1"></div>
              <div className="gresult-name" id="gresult-t1-name">Team 1</div>
              <div className="gresult-pts" id="gresult-t1-score">0</div>
              <div className="gresult-label">pts</div>
            </div>
            <div className="gresult-vs">VS</div>
            <div className="gresult-card glass-card" id="gresult-card-2">
              <div className="gresult-char" id="gresult-char-2"></div>
              <div className="gresult-name" id="gresult-t2-name">Team 2</div>
              <div className="gresult-pts" id="gresult-t2-score">0</div>
              <div className="gresult-label">pts</div>
            </div>
          </div>
          <div className="gresult-lead" id="gresult-lead"></div>
          <button className="btn-primary btn-large" id="gresult-next-btn" onClick={() => window.proceedAfterGame()}>
            NEXT WORLD →
          </button>
        </div>
      </div>

      {/* SCREEN: FINAL RESULTS */}
      <div id="screen-final" className="screen">
        <div className="screen-content">
          <div className="winner-crown" id="winner-crown"></div>
          <h2 className="winner-announce">GALAXY CHAMPION!</h2>
          <div className="winner-name" id="winner-name">Team Name</div>
          <div className="final-chars">
            <span className="final-char celebrate" id="final-char-1"></span>
            <span className="final-char celebrate" id="final-char-2"></span>
          </div>
          <div className="final-scores">
            <div className="final-score-card t1-card glass-card" id="final-t1-card">
              <div className="final-score-name" id="final-t1-name">Team 1</div>
              <div className="final-score-num" id="final-t1-score">0</div>
              <div>points</div>
            </div>
            <div className="final-score-card t2-card glass-card" id="final-t2-card">
              <div className="final-score-name" id="final-t2-name">Team 2</div>
              <div className="final-score-num" id="final-t2-score">0</div>
              <div>points</div>
            </div>
          </div>
          <p className="final-msg" id="final-msg">What an amazing adventure!</p>
          <div className="final-action-row">
            <button className="btn-primary btn-large" onClick={() => window.playAgain()}>Play Again!</button>
            <button className="btn-back" style={{fontSize:'15px',padding:'10px 22px'}} onClick={() => window.newCrews()}>New Crews</button>
          </div>
        </div>
      </div>

      {/* MISSION INFO MODAL */}
      <div id="mission-info-modal" className="mission-info-modal" style={{display:'none'}}>
        <div className="minfo-backdrop" onClick={() => window.closeMissionInfo()}></div>
        <div className="mission-info-card glass-card" id="mission-info-card">
          <button className="minfo-close-btn" onClick={() => window.closeMissionInfo()}>✕</button>
          <div className="minfo-top">
            <span className="minfo-emoji" id="minfo-emoji"></span>
            <div className="minfo-header-text">
              <h3 className="minfo-title" id="minfo-title">Mission Title</h3>
              <div className="minfo-tags">
                <span className="minfo-tag minfo-type-tag" id="minfo-type">Challenge</span>
                <span className="minfo-tag minfo-diff-tag" id="minfo-diff">★★☆ Explorer</span>
                <span className="minfo-tag minfo-age-tag" id="minfo-age">Ages 6+</span>
              </div>
            </div>
          </div>
          <p className="minfo-longdesc" id="minfo-longdesc">Description here.</p>
          <div className="minfo-examples-label">Example challenges:</div>
          <ul className="minfo-examples" id="minfo-examples">
            <li>Example 1</li>
            <li>Example 2</li>
            <li>Example 3</li>
          </ul>
          <div className="minfo-btns">
            <button className="btn-primary btn-large" id="minfo-choose-btn" onClick={() => window.chooseMission()}>Choose This Mission</button>
            <button className="btn-back" onClick={() => window.closeMissionInfo()}>Close</button>
          </div>
        </div>
      </div>

      {/* Warp tunnel */}
      <div id="warp-tunnel" className="warp-tunnel"></div>

      <Script src="/game.js" strategy="afterInteractive" />
    </>
  )
}
