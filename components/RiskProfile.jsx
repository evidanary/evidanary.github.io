import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import Gauge from 'react-svg-gauge';

const RISK_CATEGORIES = [
  { name: "Product Market Fit",
    score: 0,
    questions: [
      { weight: 1,
        label: "You think people will want to use your product.",
        checked: false
      },
      { weight: 2,
        label: "You talked to potential customers, and they said they wanted to try the product once it was built.",
        checked: false
      },
      { weight: 2,
        label: "You have LOIs (letters of intent).",
        checked: false
      },
      { weight: 3,
        label: "You have unpaid pilots.",
        checked: false
      },
      { weight: 4,
        label: "You have paid pilots.",
        checked: false
      },
      { weight: 5,
        label: "You have paid contracts. Ideally prepaid.",
        checked: false
      },
    ]
  },
  { name: "Product Quality Risk",
    score: 0,
    questions: [
      { weight: 1,
        label: "You are sure you can build a great product, but haven't built one before.",
        checked: false
      },
      { weight: 1,
        label: "You plan to outsource product development.",
        checked: false
      },
      { weight: 1,
        label: "You have a prototype, and it's very mediocre.",
        checked: false
      },
      { weight: 2,
        label: "You've previously been on a team that built great products.",
        checked: false
      },
      { weight: 3,
        label: "You previously led a team that built a great product.",
        checked: false
      },
      { weight: 4,
        label: "You have a prototype, and it's good.",
        checked: false
      },
      { weight: 5,
        label: "You have a live, fully-functioning product and it's amazing.",
        checked: false
      },
    ]
  },
  { name: "Team Risk",
    explanation: "Goal: prove that you've assembled a great team for achieving your vision. Your product requires strong execution across many functional areas (eng, sales, UX design, etc.) and...",
    score: 0,
    questions: [
      { weight: 1,
        label: "..your full-time team only covers 1-2 of those areas.",
        checked: false
      },
      { weight: 3,
        label: "...your full-time team only covers 1-2 of those areas, but investors and advisors fill in most of the gaps.",
        checked: false
      },
      { weight: 4,
        label: "...your full-time team covers most of those areas.",
        checked: false
      },
      { weight: 5,
        label: "...your full-time team covers all of those areas.",
        checked: false
      },
    ]
  },
  { name: "Recruiting Risk",
    score: 0,
    questions: [
      { weight: 1,
        label: "You've never hired anyone before.",
        checked: false
      },
      { weight: 1,
        label: "You're not someone people would want to work with. (E.g. you're a jerk.)",
        checked: false
      },
      { weight: 2,
        label: "You have some interviewing experience.",
        checked: false
      },
      { weight: 3,
        label: "You have prior recruiting and management experience.",
        checked: false
      },
      { weight: 4,
        label: "You've built very strong teams in the past.",
        checked: false
      },
      { weight: 4,
        label: "Your team already includes several great hires",
        checked: false
      },
      { weight: 5,
        label: "You're currently able to reliably recruit in-demand candidates through personal charisma, a strong company mission, an amazing company culture, or something similar.",
        checked: false
      },
    ]
  },
  { name: "Sales Risk",
    score: 0,
    questions: [
      { weight: 1,
        label: "No one on your team has any sales experience.",
        checked: false
      },
      { weight: 2,
        label: "You've done sales, but not much or not recently or not of the same flavor that you'll need for your company.",
        checked: false
      },
      { weight: 3,
        label: "You're successfully selling you product, but it's significantly underpriced and/or sales are taking much longer than expected.",
        checked: false
      },
      { weight: 3,
        label: "You've done a lot of sales work that's similar to what you'll be doing at your startup.",
        checked: false
      },
      { weight: 3,
        label: "You've built and led successful sales teams in the past.",
        checked: false
      },
      { weight: 4,
        label: "You have a strong, experienced sales team.",
        checked: false
      },
      { weight: 5,
        label: "You're successfully selling you product at a good price and with reasonable sales cycles.",
        checked: false
      },
    ]
  },
  { name: "Market Risk",
    score: 0,
    questions: [
      { weight: 1,
        label: "Your target market is small and unlikely to grow quickly.",
        checked: false
      },
      { weight: 1,
        label: "You have no idea how large your target market might be.",
        checked: false
      },
      { weight: 3,
        label: "You found a Gartner report that gives an estimate of market size.",
        checked: false
      },
      { weight: 4,
        label: "You have a plausible top-down analysis of market size (\"People spend $X per year on this problem, and we think we can capture 15% of that with our solution.\")",
        checked: false
      },
      { weight: 4,
        label: "You have a plausible bottom-up analysis of market size (\"We think we can capture 10% of users in group A and 20% of users in group B, and we plan to charge those users $X and $Y, respectively.\")",
        checked: false
      },
      { weight: 4,
        label: "You have a plausible bottom-up analysis, backed by experiments and data. (\"There are X million potential users for our product, and we've done some tests that show each user would be willing to pay $Y/month\")",
        checked: false
      },
      { weight: 5,
        label: "Incumbent companies are huge and demonstrate that there's a big market for what you're doing",
        checked: false
      },
    ]
  },
  { name: "Funding Risk",
    explanation: "Goals: prove that you have enough capital to reach the milestones needed to raise more money on better terms (if you want to), and that you have a viable back-up plan if you can't raise money on your ideal timeline.",
    score: 0,
    questions: [
      { weight: 1,
        label: "Your business will not be self-sustaining for a long time, and you're completely dependent on raising many rounds of venture funding.",
        checked: false
      },
      { weight: 1,
        label: "You have multiple well-funded competitors and will need tons of capital to compete with them.",
        checked: false
      },
      { weight: 2,
        label: "There's no cushion between when you expect to have enough momentum to raise your next round and when your current cash balance will force you to try raising another round. (E.g. you think you'll need 12 months to get to $1m in revenue and 3 months to raise a Series A, and you have exactly 15 months of runway in the bank.)",
        checked: false
      },
      { weight: 2,
        label: "You've successfully raised some venture capital before.",
        checked: false
      },
      { weight: 3,
        label: "You've successfully raised tons of venture capital before",
        checked: false
      },
      { weight: 3,
        label: "You have good funds investing in your current round, and they will help guide you to your next round.",
        checked: false
      },
      { weight: 4,
        label: "You have good funds with deep pockets investing in your current round. (That is, funds that could lead your future rounds if they wanted to.)",
        checked: false
      },
      { weight: 4,
        label: "With some effort and sacrifices, you would be able to get to break-even without any additional capital.",
        checked: false
      },
      { weight: 5,
        label: "You're not dependent on additional capital because you can easily become break-even or profitable at any time.",
        checked: false
      },
    ]
  },
  { name: "Competition(ST)",
    explanation: "Goal: prove that you're differentiated from existing players in the market. (Short Term)",
    score: 0,
    questions: [
      { weight: 1,
        label: "There are many competitors of all sizes (huge incumbents, young startups, well-funded startups, etc). These companies are attacking your target market from many directions.",
        checked: false
      },
      { weight: 2,
        label: "There are many competitors, but they are ineffective legacy players or poorly-funded startups.",
        checked: false
      },
      { weight: 3,
        label: "There are very few competitors, but no strong differentiation between you and them.",
        checked: false
      },
      { weight: 4,
        label: "There are very few competitors, and strong differentiation between you and them.",
        checked: false
      },
      { weight: 5,
        label: "There are no competitors and there's a high barrier to entry (which you have crossed).",
        checked: false
      },
    ]
  },
  { name: "Competition(LT)",
    explanation: "Goal: prove that as you become successful and other companies try to copy you, you will be able to maintain your strong position. (Long Term)",
    score: 0,
    questions: [
      { weight: 1,
        label: "You're not the first mover and you don't have a real competitive advantage.",
        checked: false
      },
      { weight: 2,
        label: "You don't have a real competitive advantage, but at least you're the first mover.",
        checked: false
      },
      { weight: 3,
        label: "You have weak competitive advantages: a few small patents, slightly better unit economics than new entrants, etc",
        checked: false
      },
      { weight: 4,
        label: "You have moderate competitive advantages: good brand perception among your customers, significantly better unit economics, a strong patent portfolio, etc.",
        checked: false
      },
      { weight: 5,
        label: "You have strong competitive advantages, like network effects or a proprietary datasets, that get stronger as you grow",
        checked: false
      },
    ]
  },
]


class Card extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  get heading() {
    // let heading = <h1>{this.props.riskCategory.name}</h1>;
    let heading = false;
    return heading;
  }

  get explanation() {
    return this.props.riskCategory.explanation || false;
  }

  get chart() {
    return (
      <Gauge value={this.props.riskCategory.score} min={0} max={5} width={400} height={320} label={this.props.riskCategory.name}/>
    );
  }

  get summary() {
    return (
      <h3>Risk Score: {this.props.riskCategory.score}</h3>
    );
  }

  get questions() {
    let list = this.props.riskCategory.questions.map((question, idx) => {
      return (
        <li key={idx}>
          <input type="checkbox" checked={this.props.riskCategory.questions[idx].checked} onChange={(e) => this.props.onChange(idx, e.target.checked)} />
          <label>{question.label}</label>
        </li>
      );
    });

    return ( <ul>{list}</ul>);
  }

  render() {
    return (
      <div style={{border: "2px solid gray"}}>
        {this.heading}
        {this.chart}<br/>
        {this.explanation}
        {this.questions}
        {this.summary}
      </div>
    );
  }
}

export default class RiskProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      scoreReceived: 21,
      maxPossibleScore: 45,
      riskCategories: RISK_CATEGORIES
    }
    this.calculateScores = this.calculateScores.bind(this);
  }

  get summaryScore() {
    let totalScore = this.state.riskCategories.map((val) => val.score).reduce((a, b) => { return a + b; }, 0);
    return (
      <div style={{border: "2px solid gray"}}>
        <h2>Your Total Risk Score: {totalScore} / {this.state.maxPossibleScore}<span className="text-muted">(Larger Numbers are better)</span></h2>
      </div>
    );
  }

  get followupActions() {
    return (<Button bsStyle="primary" bsSize="large" onClick={() => window.print()}>Print/Download</Button>);
  }

  //Calculates scores for risk categories object
  calculateScores(riskCategory) {
    let weights = riskCategory.questions.filter((val) => val.checked === true).map((val) => val.weight);
    return Math.max(...weights, 0);
  }

  get cards() {
    return this.state.riskCategories.map((val, categoryIdx) => <Card key={categoryIdx} riskCategory={val} onChange={ (idx, checked) => {
      let newRiskCategories = this.state.riskCategories;
      newRiskCategories[categoryIdx].questions[idx].checked = checked;
      newRiskCategories[categoryIdx].score = this.calculateScores(newRiskCategories[categoryIdx]);
      this.setState({
        riskCategories: newRiskCategories
      });
    } } />);
  }

  render(){
    return (
      <div>
        <h1>Risk Profile</h1>
        <p>
          This calculator is based off the <a href="https://codingvc.com/how-to-de-risk-a-startup">excellent article</a> by <a href="https://twitter.com/lpolovets">Leo Polovets</a>. A big thanks goes to Leo for providing this framework to calcuate risk.
        </p>
        {this.summaryScore}
        {this.cards}
        {this.summaryScore}
        {this.followupActions}
      </div>
    );
  }
}
