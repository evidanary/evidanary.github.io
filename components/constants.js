export default {
  RISK_CATEGORIES:  [
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
    }
  ]
}
