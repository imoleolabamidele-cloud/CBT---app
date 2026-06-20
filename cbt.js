const cbt = {

  English: [
    { q: "Choose correct sentence:", options: ["He go school", "He goes school", "He goes to school", "He going school"], answer: 2 },
    { q: "Noun is:", options: ["Action", "Person/Place/Thing", "Verb", "Adverb"], answer: 1 },
    { q: "Opposite of brave:", options: ["Bold", "Cowardly", "Strong", "Fast"], answer: 1 },
    { q: "Past of go:", options: ["Gone", "Went", "Go", "Going"], answer: 1 },
    { q: "Pronoun example:", options: ["He", "Table", "Run", "Blue"], answer: 0 },

    { q: "Synonym of big:", options: ["Small", "Large", "Tiny", "Weak"], answer: 1 },
    { q: "Opposite of hot:", options: ["Warm", "Cold", "Heat", "Boil"], answer: 1 },
    { q: "Verb is:", options: ["Action", "Place", "Thing", "Name"], answer: 0 },
    { q: "Plural of child:", options: ["Childs", "Children", "Childes", "Child"], answer: 1 },
    { q: "Article is:", options: ["A", "Run", "Blue", "Go"], answer: 0 },

    { q: "Adjective describes:", options: ["Verb", "Noun", "Pronoun", "Adverb"], answer: 1 },
    { q: "Past of see:", options: ["Saw", "Seen", "See", "Seeing"], answer: 0 },
    { q: "Opposite of happy:", options: ["Sad", "Glad", "Joy", "Smile"], answer: 0 },
    { q: "He is ___ boy:", options: ["a", "an", "the", "no"], answer: 0 },
    { q: "Pick verb:", options: ["Run", "Blue", "Table", "Quick"], answer: 0 },

    { q: "Correct spelling:", options: ["Enviroment", "Environment", "Environmant", "Envirement"], answer: 1 },
    { q: "Pronoun replaces:", options: ["Noun", "Verb", "Adjective", "Adverb"], answer: 0 },
    { q: "Opposite of near:", options: ["Far", "Close", "Next", "Short"], answer: 0 },
    { q: "Sentence ends with:", options: ["Comma", "Full stop", "Dash", "Colon"], answer: 1 },
    { q: "Verb of beauty:", options: ["Beautify", "Beautiful", "Beauty", "Beaut"], answer: 0 },

    { q: "Plural of man:", options: ["Mans", "Men", "Manes", "Main"], answer: 1 },
    { q: "Antonym of fast:", options: ["Slow", "Quick", "Run", "Speed"], answer: 0 },
    { q: "Choose noun:", options: ["Run", "Chair", "Quickly", "Blue"], answer: 1 },
    { q: "Past of eat:", options: ["Eat", "Ate", "Eaten", "Eating"], answer: 1 },
    { q: "Opposite of good:", options: ["Bad", "Nice", "Sweet", "Right"], answer: 0 }
  ],

  Mathematics: [
    { q: "2 + 2 =", options: ["1", "2", "4", "5"], answer: 2 },
    { q: "10 ÷ 2 =", options: ["2", "5", "10", "20"], answer: 1 },
    { q: "5 × 3 =", options: ["15", "10", "8", "20"], answer: 0 },
    { q: "Square of 4 =", options: ["8", "12", "16", "20"], answer: 2 },
    { q: "1/2 + 1/2 =", options: ["1", "2", "3", "4"], answer: 0 },

    { q: "10 - 3 =", options: ["6", "7", "8", "9"], answer: 1 },
    { q: "100 ÷ 10 =", options: ["5", "10", "20", "15"], answer: 1 },
    { q: "3² =", options: ["6", "9", "12", "18"], answer: 1 },
    { q: "Half of 20 =", options: ["5", "10", "15", "20"], answer: 1 },
    { q: "Perimeter of square =", options: ["4a", "a²", "2a", "a+4"], answer: 0 },

    { q: "Area of square =", options: ["a²", "2a", "4a", "a+4"], answer: 0 },
    { q: "7 + 8 =", options: ["14", "15", "16", "17"], answer: 1 },
    { q: "9 - 4 =", options: ["3", "4", "5", "6"], answer: 2 },
    { q: "6 × 6 =", options: ["30", "36", "42", "48"], answer: 1 },
    { q: "12 ÷ 3 =", options: ["2", "3", "4", "5"], answer: 2 },

    { q: "Lowest even number:", options: ["0", "1", "2", "3"], answer: 0 },
    { q: "Odd number:", options: ["2", "4", "6", "7"], answer: 3 },
    { q: "10% of 100 =", options: ["10", "20", "30", "40"], answer: 0 },
    { q: "1 + 1 =", options: ["1", "2", "3", "4"], answer: 1 },
    { q: "5 + 5 =", options: ["5", "10", "15", "20"], answer: 1 },

    { q: "8 × 2 =", options: ["12", "14", "16", "18"], answer: 2 },
    { q: "9 ÷ 3 =", options: ["2", "3", "4", "5"], answer: 1 },
    { q: "0 + 5 =", options: ["0", "5", "10", "15"], answer: 1 },
    { q: "2³ =", options: ["6", "8", "9", "12"], answer: 1 },
    { q: "Square root of 9 =", options: ["1", "2", "3", "4"], answer: 2 }
  ],

  Biology: [
    { q: "Basic unit of life:", options: ["Tissue", "Cell", "Organ", "System"], answer: 1 },
    { q: "Photosynthesis occurs in:", options: ["Root", "Leaf", "Stem", "Flower"], answer: 1 },
    { q: "Heart pumps:", options: ["Food", "Blood", "Air", "Water"], answer: 1 },
    { q: "DNA is found in:", options: ["Nucleus", "Cell wall", "Membrane", "Cytoplasm"], answer: 0 },
    { q: "Green pigment:", options: ["Chlorophyll", "Hemoglobin", "Melanin", "Insulin"], answer: 0 },

    { q: "Animals without backbone:", options: ["Vertebrates", "Invertebrates", "Mammals", "Reptiles"], answer: 1 },
    { q: "Ecology studies:", options: ["Stars", "Living things", "Rocks", "Machines"], answer: 1 },
    { q: "Respiration produces:", options: ["Food", "Energy", "Water", "Soil"], answer: 1 },
    { q: "Blood carries:", options: ["Oxygen", "Food", "Bones", "Skin"], answer: 0 },
    { q: "Organ for breathing:", options: ["Heart", "Lungs", "Liver", "Kidney"], answer: 1 },

    { q: "Largest organ:", options: ["Heart", "Skin", "Liver", "Brain"], answer: 1 },
    { q: "Root function:", options: ["Absorb water", "Photosynthesis", "Reproduction", "Digestion"], answer: 0 },
    { q: "Gene carries:", options: ["Traits", "Food", "Air", "Water"], answer: 0 },
    { q: "Food chain starts with:", options: ["Animals", "Plants", "Humans", "Fungi"], answer: 1 },
    { q: "Excretion removes:", options: ["Waste", "Food", "Air", "Water"], answer: 0 },

    { q: "Blood is pumped by:", options: ["Heart", "Lungs", "Liver", "Brain"], answer: 0 },
    { q: "Plant cell has:", options: ["Cell wall", "Bone", "Skin", "Hair"], answer: 0 },
    { q: "Fungi example:", options: ["Mushroom", "Dog", "Fish", "Tree"], answer: 0 },
    { q: "Birds are:", options: ["Mammals", "Vertebrates", "Invertebrates", "Fish"], answer: 1 },
    { q: "Photosynthesis needs:", options: ["Light", "Sound", "Metal", "Oil"], answer: 0 },

    { q: "Stomach digests:", options: ["Food", "Blood", "Air", "Water"], answer: 0 },
    { q: "Nervous system controls:", options: ["Movement", "Blood only", "Skin", "Bones"], answer: 0 },
    { q: "Skeleton gives:", options: ["Shape", "Food", "Air", "Water"], answer: 0 },
    { q: "Red blood cells carry:", options: ["Oxygen", "Water", "Food", "Hormones"], answer: 0 },
    { q: "Living things grow by:", options: ["Division", "Sleeping", "Eating only", "Walking"], answer: 0 }
  ],

  Chemistry: [
    { q: "Smallest particle:", options: ["Atom", "Molecule", "Compound", "Ion"], answer: 0 },
    { q: "H2O is:", options: ["Oxygen", "Water", "Hydrogen", "Salt"], answer: 1 },
    { q: "NaCl is:", options: ["Sugar", "Salt", "Acid", "Base"], answer: 1 },
    { q: "pH of acid:", options: ["Below 7", "7", "Above 7", "10"], answer: 0 },
    { q: "Oxygen symbol:", options: ["O", "Ox", "Og", "Om"], answer: 0 },

    { q: "Water is:", options: ["Element", "Compound", "Mixture", "Gas"], answer: 1 },
    { q: "Boiling point:", options: ["50°C", "100°C", "200°C", "0°C"], answer: 1 },
    { q: "Acid tastes:", options: ["Sweet", "Sour", "Bitter", "Salty"], answer: 1 },
    { q: "Base feels:", options: ["Slippery", "Hot", "Cold", "Sharp"], answer: 0 },
    { q: "Air is:", options: ["Element", "Compound", "Mixture", "Metal"], answer: 2 },

    { q: "Gas example:", options: ["Oxygen", "Iron", "Gold", "Stone"], answer: 0 },
    { q: "Solid example:", options: ["Water", "Air", "Stone", "Steam"], answer: 2 },
    { q: "Liquid example:", options: ["Water", "Iron", "Air", "Wood"], answer: 0 },
    { q: "Chemical symbol of gold:", options: ["Au", "Ag", "Go", "Gd"], answer: 0 },
    { q: "Hydrogen symbol:", options: ["H", "Hy", "Hd", "Hg"], answer: 0 },

    { q: "Salt is formed from:", options: ["Acid + Base", "Water + Air", "Fire + Soil", "Metal + Gas"], answer: 0 },
    { q: "Evaporation is:", options: ["Liquid to gas", "Gas to liquid", "Solid to liquid", "None"], answer: 0 },
    { q: "Freezing is:", options: ["Liquid to solid", "Solid to gas", "Gas to liquid", "None"], answer: 0 },
    { q: "Melting is:", options: ["Solid to liquid", "Liquid to gas", "Gas to solid", "None"], answer: 0 },
    { q: "Periodic table shows:", options: ["Elements", "Animals", "Plants", "Rocks"], answer: 0 },

    { q: "Iron symbol:", options: ["Fe", "Ir", "In", "I"], answer: 0 },
    { q: "Carbon symbol:", options: ["C", "Ca", "Co", "Cr"], answer: 0 },
    { q: "Oxygen needed for:", options: ["Breathing", "Sleeping", "Eating", "Running"], answer: 0 },
    { q: "Water formula:", options: ["H2O", "CO2", "O2", "NaCl"], answer: 0 },
    { q: "CO2 is:", options: ["Oxygen", "Carbon dioxide", "Water", "Salt"], answer: 1 }
  ],

  Physics: [
    { q: "SI unit of force:", options: ["Newton", "Joule", "Watt", "Pascal"], answer: 0 },
    { q: "Speed formula:", options: ["Distance ÷ Time", "Time ÷ Distance", "Mass ÷ Volume", "Force × Time"], answer: 0 },
    { q: "Gravity pulls:", options: ["Up", "Down", "Side", "Away"], answer: 1 },
    { q: "Light speed is:", options: ["Fast", "Slow", "Zero", "Negative"], answer: 0 },
    { q: "Current unit:", options: ["Ampere", "Volt", "Ohm", "Watt"], answer: 0 },

    { q: "Energy unit:", options: ["Joule", "Newton", "Pascal", "Meter"], answer: 0 },
    { q: "Sound travels fastest in:", options: ["Solid", "Air", "Vacuum", "Space"], answer: 0 },
    { q: "Electric device:", options: ["Bulb", "Stone", "Wood", "Paper"], answer: 0 },
    { q: "Force causes:", options: ["Motion", "Sleep", "Growth", "Color"], answer: 0 },
    { q: "Heat is:", options: ["Energy", "Matter", "Gas", "Solid"], answer: 0 },

    { q: "Lens is used in:", options: ["Glasses", "Food", "Clothes", "Water"], answer: 0 },
    { q: "Magnet attracts:", options: ["Iron", "Wood", "Plastic", "Glass"], answer: 0 },
    { q: "Electricity flows in:", options: ["Circuit", "Road", "Water", "Air"], answer: 0 },
    { q: "Friction is:", options: ["Force", "Speed", "Heat", "Light"], answer: 0 },
    { q: "Work is done when:", options: ["Force moves object", "Sleep", "Rest", "Stop"], answer: 0 },

    { q: "SI unit of power:", options: ["Watt", "Newton", "Joule", "Volt"], answer: 0 },
    { q: "Voltage unit:", options: ["Volt", "Ampere", "Ohm", "Newton"], answer: 0 },
    { q: "Resistance unit:", options: ["Ohm", "Watt", "Volt", "Newton"], answer: 0 },
    { q: "Machines make work:", options: ["Easy", "Hard", "Stop", "None"], answer: 0 },
    { q: "Energy cannot be:", options: ["Created", "Used", "Stored", "Moved"], answer: 0 },

    { q: "Sound is produced by:", options: ["Vibration", "Light", "Heat", "Color"], answer: 0 },
    { q: "Mirror forms:", options: ["Image", "Sound", "Heat", "Gas"], answer: 0 },
    { q: "Electric charge unit:", options: ["Coulomb", "Newton", "Watt", "Volt"], answer: 0 },
    { q: "Kinetic energy is:", options: ["Motion energy", "Heat", "Light", "Sound"], answer: 0 },
    { q: "Potential energy is:", options: ["Stored energy", "Motion", "Heat", "Sound"], answer: 0 }
  ],

  Economics: [
    { q: "Demand means:", options: ["Want + ability to buy", "Free goods", "Production", "Supply"], answer: 0 },
    { q: "Supply is:", options: ["Goods available", "Money", "Demand", "Tax"], answer: 0 },
    { q: "Inflation is:", options: ["Price increase", "Decrease", "Stop", "None"], answer: 0 },
    { q: "Market is:", options: ["Buying & selling place", "School", "House", "Office"], answer: 0 },
    { q: "Money is used for:", options: ["Exchange", "Sleep", "Play", "Fight"], answer: 0 },

    { q: "Scarcity means:", options: ["Limited resources", "Unlimited goods", "Free goods", "None"], answer: 0 },
    { q: "Economics studies:", options: ["Resources", "Stars", "Animals", "Plants"], answer: 0 },
    { q: "Tax is paid to:", options: ["Government", "Teacher", "Friend", "Bank"], answer: 0 },
    { q: "Bank stores:", options: ["Money", "Food", "Cars", "Books"], answer: 0 },
    { q: "Profit is:", options: ["Gain", "Loss", "Debt", "Tax"], answer: 0 },

    { q: "Loss is:", options: ["Decrease", "Gain", "Profit", "Income"], answer: 0 },
    { q: "Trade is:", options: ["Buying/selling", "Sleeping", "Walking", "Eating"], answer: 0 },
    { q: "Import means:", options: ["Bring in", "Send out", "Destroy", "Save"], answer: 0 },
    { q: "Export means:", options: ["Send out", "Bring in", "Eat", "Store"], answer: 0 },
    { q: "Capital means:", options: ["Money", "Food", "Air", "Water"], answer: 0 },

    { q: "Labour means:", options: ["Work", "Sleep", "Food", "Money"], answer: 0 },
    { q: "Land means:", options: ["Natural resources", "Money", "Work", "Cars"], answer: 0 },
    { q: "Entrepreneur is:", options: ["Business owner", "Worker", "Student", "Teacher"], answer: 0 },
    { q: "Budget is:", options: ["Financial plan", "Food list", "Game", "House"], answer: 0 },
    { q: "Saving is:", options: ["Keeping money", "Spending all", "Borrowing", "Losing"], answer: 0 }
  ],

  Government: [
    { q: "Democracy is:", options: ["Rule by people", "King", "Army", "Police"], answer: 0 },
    { q: "Constitution is:", options: ["Law book", "Food", "Game", "Money"], answer: 0 },
    { q: "Election is:", options: ["Choosing leaders", "Fighting", "Sleeping", "Eating"], answer: 0 },
    { q: "Nigeria system:", options: ["Democracy", "Monarchy", "Dictatorship", "Empire"], answer: 0 },
    { q: "Political party example:", options: ["APC", "BMW", "UN", "WHO"], answer: 0 },

    { q: "Governor rules:", options: ["State", "Country", "School", "Village"], answer: 0 },
    { q: "President leads:", options: ["Country", "State", "Town", "Village"], answer: 0 },
    { q: "Senate is part of:", options: ["Legislature", "Judiciary", "Army", "Police"], answer: 0 },
    { q: "Law is made by:", options: ["Government", "Students", "Farmers", "Drivers"], answer: 0 },
    { q: "Voting is:", options: ["Choice making", "Sleeping", "Eating", "Running"], answer: 0 },

    { q: "Citizenship means:", options: ["Membership of country", "School", "Game", "Work"], answer: 0 },
    { q: "Rights are:", options: ["Privileges", "Food", "Money", "Cars"], answer: 0 },
    { q: "Duty means:", options: ["Responsibility", "Fun", "Game", "Sleep"], answer: 0 },
    { q: "Police maintain:", options: ["Law & order", "Food", "Cars", "Money"], answer: 0 },
    { q: "Judiciary handles:", options: ["Court cases", "Food", "Games", "Money"], answer: 0 },

    { q: "Law breakers are:", options: ["Criminals", "Students", "Teachers", "Farmers"], answer: 0 },
    { q: "Local government is:", options: ["Small unit", "Country", "State", "World"], answer: 0 },
    { q: "Voter must be:", options: ["Citizen", "Animal", "Child", "Machine"], answer: 0 },
    { q: "Democracy allows:", options: ["Freedom", "Slavery", "War", "None"], answer: 0 },
    { q: "Leader is chosen by:", options: ["Election", "Force", "Fight", "Money"], answer: 0 }
  ]

};