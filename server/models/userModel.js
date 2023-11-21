const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// Definice schématu pro model uživatele
const UserSchema = new mongoose.Schema(
    {
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
    
  },
  password: {
    type: String,
    required: true
  },
  bankAccounts: {
    _bankId: {
      type: Schema.Types.ObjectId
    },
    bankInfo: {
      type: String
    },
    bankNumber: {
      type: String
    }
  },
  brokerAccounts: {
    _brokerId: {
      type: Schema.Types.ObjectId
    },
    brokerInfo: {
      type: String
    },
    brokerLogin: {
      type: String
    },
    brokerPassword: {
      type: String
    }
  },
  incomes: {
    _incomeId: {
      type: Schema.Types.ObjectId
    },
    category: {
      type: String
    },
    amount: {
      type: Number
    },
    date: {
      type: Date
    },
    regular: {
      type: Boolean
    }
  },
  expenses: {
    _expenseId: {
      type: Schema.Types.ObjectId
    },
    category: {
      type: String
    },
    amount: {
      type: Number
    },
    date: {
      type: Date
    },
    regular: {
      type: Boolean
    }
  },
  investments: {
    _investmentId: {
      type: Schema.Types.ObjectId
    },
    ticker: {
      type: String
    },
    type: {
      type: String
    },
    amount: {
      type: Number
    },
    date: {
      type: Date
    },
    regular: {
      type: Boolean
    },
    isOpen: {
      type: Boolean
    },
    openingPrice: {
      type: Number
    },
    closingPrice: {
      type: Number
    }
  }
}, 
{ collection: 'users' } // Název kolekce (tabulky) v MongoDB, kam budou ukládána data
)
// Vytvoření modelu na základě definovaného schématu
const model = mongoose.model('UserSchema', UserSchema)

// Exportování vytvořeného modelu pro použití v jiných částech aplikace
module.exports = model
