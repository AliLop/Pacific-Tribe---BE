const mongoose = require('mongoose');
// const User = require('../models/user-model.js')
const Mood = require('../models/mood-model.js')

mongoose.connect("mongodb+srv://admin:admin@project3.n1jht.mongodb.net/Project3?retryWrites=true&w=majority", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const moods = [
  {name: 'overwhelmed',
    spotifyURI: '2lIeCmSoFX73ejZ3vuchdD',
    sentences: ["If opportunity doesn’t knock, build a door.", "Truth is powerful and it prevails.", "Rainbows apologize for angry skies.", "Nothing in life is to be feared. It is only to be understood.", "Intuition is the discriminant faculty that enables you to decide which of two lines of reasoning is right."],
    meditationURL: ['Evgx9yX2Vw8', '2l8WD4U4KMk'],
    yogaURL: ['4C-gxOE0j7s', 'VpW33Celubg'],
    inspirationURL: ['bHgfcA6Vy24', 'uwKS1lT_YZU'],
    coachingURL: ['1TBTB5g3zYQ', 'L84jhBez-84', 'IkIR93Cpy3U', 'ku9gabtzmX8'],
  },
  {name: 'anxious',
    spotifyURI: '0NspLxJgEk9Uop7K4uURjd',
    sentences: ["How we spend our days is, how we spend our lives.Enjoy at every step.", "When everything around you is crazy, it is ingenious to stay calm.", "The only order in the universe is just a cycle of calm and chaos.Stay calm.", "You are the sky. Everything else – it’s just the weather.", "I'd rather regret the things that I have done than the things that I have not done.", "Kind words will unlock an iron door.", "Trusting our intuition often saves us from disaster."],
    meditationURL: ['4P2SCgwXVxc', 'ez3GgRqhNvA'],
    yogaURL: ['VpW33Celubg', '3Ql411IIpJM'],
    inspirationURL: ['Q9cje57YDRU', '3zJHwOwirjA'],
    coachingURL: ['D8Gc6_S6i0k', 'q6g0XlNCtu0', 'OhX8D18VncU', '8gtSNjnjPOk'],
  },
  {name: 'calm',
  spotifyURI: '4SlG7b0D95WD4DHqF672fx',
  sentences: ["Everyone smiles in the same language.", "The ideal of calm exists in a sitting cat.", "Society develops wit, but its contemplation alone forms genius", "Life is a process. We are a process. The universe is a process.", "I'm not afraid of storms, for I'm learning how to sail my ship.", "Never bend your head. Always hold it high. Look the world right in the eye."],
  meditationURL: ['j5v6-V0x90A', 'Yjh_sDNL1Ac'],
  yogaURL: ['LI9upn4t9n8', 'xLS9uQQQyB0'],
  inspirationURL: ['oKtALHe3Y9Q', 'h9o5Zx7m4Fs'],
  coachingURL: ['xjhfVpVUSYw', 'eqhUHyVpAwE', 'du035tg-SwY', '8_PQJNo2wME'],
},
  {name: 'positive',
  spotifyURI: '0NspLxJgEk9Uop7K4uURjd',
  sentences: [" It always seems impossible until it is done.", "Winning is fun, but those moments that you can touch someone’s life in a very positive way are better.", "Positive anything is better than negative nothing.", "I don't believe in failure. It is not failure if you enjoyed the process.", "From little acorns mighty oaks do grow."],
  meditationURL: ['xE4MYIQ1sCA', '5H-gyN7TMEA'],
  yogaURL: ['UEEsdXn8oG8', 'Nnd5Slo02us'],
  inspirationURL: ['fs2GDSYYCoA', '43DuLcBFxoY', 'vhVWzkbAW4I'],
  coachingURL: ['T8KDFrF3SdM', 'b197XOd9S7U', 'UhWFddWz1Nk', 'p8pzhYC7prA'],
  },
  {name: 'enthusiastic',
  spotifyURI: '0NspLxJgEk9Uop7K4uURjd',
  sentences: ["Wisdom is to have dreams big enough not to lose sight when we pursue them.", "Do one thing every day that scares you", 'Nothing great was ever achieved without enthusiasm', "Do not let people talk you out of your dreams"],
  meditationURL: ['LNLfDbH6GJs', 'pu-kQ8OyRjE'],
  yogaURL: ['JOilkvadChg', 'FgfT2fOv31E'],
  inspirationURL: ['dTwXeZ4GkzI', '18uDutylDa4', 'D9Ihs241zeg'],
  coachingURL: ['7lECIsRif10', 'OhX8D18VncU', '0Tk82hEHNnY', 'O3npvris_TA'],
  },
];



// Then we create the types.
Mood.create(moods)
  .then(moodsFromSeed => {
    console.log(`Created ${moodsFromSeed.length} moods`);
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating moods types from the DB: ${err}`));