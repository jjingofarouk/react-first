// Define symptom weights
const symptomWeights = {
"fever": {
"malaria": { weight: 9, durationFactors: { short: 1.5, medium: 1.2, long: 0.8 }, severityFactors: { mild: 0.8, moderate: 1, severe: 2 }, ageFactors: { child: 1.5, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"typhoid fever": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1.1 } },
"dengue fever": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"COVID-19": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"chikungunya": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"sepsis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.3 }, genderFactors: { male: 1, female: 1 } },
"pneumonia": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"endocarditis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.3 }, genderFactors: { male: 1.2, female: 1 } },
"autoimmune disease": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1.3 } },
"influenza": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 0.9 }, genderFactors: { male: 1, female: 1 } }
},
"cough": {
"Tuberculosis": { weight: 9, durationFactors: { short: 1, medium: 1.5, long: 2 }, severityFactors: { mild: 1, moderate: 1.5, severe: 2 }, ageFactors: { child: 0.7, adult: 1.1, elderly: 1.6 }, genderFactors: { male: 1.4, female: 1 } },
"bronchitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"pneumonia": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"asthma": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.3, adult: 1, elderly: 1 }, genderFactors: { male: 1.2, female: 1 } },
"COVID-19": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } },
"flu": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"chronic obstructive pulmonary disease": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.3 }, genderFactors: { male: 1.2, female: 1 } },
"allergy": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
"whooping cough": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.3, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"common cold": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"sore throat": {
"strep throat": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 0.9 }, genderFactors: { male: 1, female: 1 } },
"tonsillitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"flu": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"COVID-19": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } },
"bacterial pharyngitis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"chronic pharyngitis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"infectious mononucleosis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"laryngitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"allergy": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
"common cold": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"muscle pain": {
"malaria": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 0.9 }, genderFactors: { male: 1, female: 1 } },
"fibromyalgia": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1.3 } },
"flu": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"COVID-19": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } },
"myositis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } },
"rheumatoid arthritis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1.3 } },
"chikungunya": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"lupus": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1.2 } },
"vitamin D deficiency": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"chronic fatigue syndrome": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1.3 } }
},
"shortness of breath": {
"asthma": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.3, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"pneumonia": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"COVID-19": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } },
"COPD": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1.2, female: 1 } },
"heart failure": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.3 }, genderFactors: { male: 1, female: 1.1 } },
"Tuberculosis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1.2, female: 1 } },
"bronchitis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"anemia": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1.2 } },
"pulmonary embolism": { weight: 9, durationFactors: { short: 1.7, medium: 1.1, long: 0.8 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"interstitial lung disease": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } }
},    
"runny nose": {
    "common cold": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "allergy": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.1 } },
    "viral rhinitis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "flu": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "sinusitis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } },
    "COVID-19": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } },
    "bacterial rhinitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "non-allergic rhinitis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "nasal polyps": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } }
},
"diarrhea": {
    "gastroenteritis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "cholera": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "typhoid fever": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "food poisoning": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "irritable bowel syndrome": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1.2 } },
    "giardiasis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } },
    "inflammatory bowel disease": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
    "dysentery": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "lactose intolerance": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "celiac disease": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"vomiting": {
    "gastroenteritis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "malaria": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "food poisoning": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "pregnancy": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
    "hepatitis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "peptic ulcer": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "appendicitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "pancreatitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "cholecystitis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } },
    "gastritis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"abdominal pain": {
    "gastroenteritis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "malaria": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "typhoid fever": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "appendicitis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "peptic ulcer": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "schistosomiasis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "intestinal worms": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "hepatitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "pancreatitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "cholera": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},        
    "rash": {
        "measles": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "chickenpox": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "scabies": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "syphilis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
        "fungal infections": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "typhoid fever": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "lupus": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
        "dengue fever": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "allergy": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "HIV/AIDS": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
    },
    "joint pain": {
        "arthritis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1.1 } },
        "rheumatic fever": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "malaria": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "lupus": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
        "dengue fever": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "chikungunya": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "HIV/AIDS": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "fibromyalgia": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1.2 } },
        "gout": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1.2, female: 1 } },
        "syphilis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
    },
    "swollen lymph nodes": {
        "HIV/AIDS": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "Tuberculosis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "typhoid fever": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "lymphadenitis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "brucellosis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "leptospirosis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "rheumatic fever": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "mononucleosis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "leprosy": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "cancer": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
    },
    "itchy skin": {
        "scabies": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "fungal infections": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "allergy": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "insect bites": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "eczema": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "contact dermatitis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "chickenpox": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "HIV/AIDS": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "psoriasis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "liver disease": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
    },
    "weight loss": {
        "HIV/AIDS": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "Tuberculosis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "malaria": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "chronic infections": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "cancer": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
        "diabetes mellitus": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "hyperthyroidism": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "peptic ulcer": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "anorexia": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "chronic liver disease": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
    },
    "dizziness": {
        "malaria": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "hypotension": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "anemia": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
        "dehydration": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "inner ear infection": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "vertigo": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "stroke": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
        "chronic fatigue syndrome": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "medication side effects": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "ear infection": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
    },            
    
"rash on skin": {
"measles": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"chickenpox": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"scabies": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"syphilis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
"fungal infections": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"typhoid fever": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"lupus": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
"dengue fever": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"allergy": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"HIV/AIDS": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"joint pains": {
"arthritis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1.1 } },
"rheumatic fever": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"malaria": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"lupus": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
"dengue fever": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"chikungunya": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"HIV/AIDS": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"fibromyalgia": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1.2 } },
"gout": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1.2, female: 1 } },
"syphilis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"swollen lymph node": {
"HIV/AIDS": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"Tuberculosis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"typhoid fever": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"lymphadenitis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"brucellosis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"leptospirosis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"rheumatic fever": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"mononucleosis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"leprosy": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"cancer": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"skin itching": {
"scabies": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"fungal infections": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"allergy": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"insect bites": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"eczema": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"contact dermatitis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"chickenpox": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"HIV/AIDS": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"psoriasis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"liver disease": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"weight loss ": {
"HIV/AIDS": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"Tuberculosis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"malaria": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"chronic infections": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"cancer": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"diabetes mellitus": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"hyperthyroidism": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"peptic ulcer": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"anorexia": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"chronic liver disease": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"feeling dizziness": {
"malaria": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"hypotension": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"anemia": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"dehydration": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"inner ear infection": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"vertigo": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"stroke": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"chronic fatigue syndrome": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"medication side effects": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"ear infection": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"back pain": {
"muscle strain": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"malaria": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"sciatica": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"kidney stones": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"herniated disc": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"osteoporosis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1.2 } },
"spinal stenosis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"rheumatoid arthritis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1.1 } },
"chronic kidney disease": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"spondylitis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"urinary symptoms": {
"urinary tract infection (UTI)": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
"kidney stones": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"bladder infection": { weight: 8, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
"prostatitis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1.2, female: 1 } },
"sexually transmitted infections (STIs)": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
"diabetes mellitus": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"chronic kidney disease": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"cystitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
"pyelonephritis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
"glomerulonephritis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"chest pain": {
"angina": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"myocardial infarction": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"pneumonia": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"pleuritis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"COVID-19": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"pulmonary embolism": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"pericarditis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"heart failure": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"anxiety": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"gastroesophageal reflux disease (GERD)": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"difficulty swallowing": {
"esophageal cancer": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"gastroesophageal reflux disease (GERD)": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"esophagitis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"stroke": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"dysphagia": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"esophageal strictures": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"food allergies": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"thyroid disorders": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"neuromuscular disorders": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"oral infections": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"frequent urination": {
"diabetes mellitus": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"urinary tract infection (UTI)": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"prostate enlargement": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1.2, female: 1 } },
"bladder infection": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
"diuretic use": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"overactive bladder": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"kidney stones": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"cystitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
"pregnancy": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
"hypercalcemia": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"bleeding gums": {
"gum disease": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"vitamin C deficiency (scurvy)": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"blood disorders": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"platelet disorders": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"oral infections": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"leukemia": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"poor dental hygiene": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"hormonal changes": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"systemic diseases": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"red spots on skin": {
"allergic reaction": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"petechiae": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"measles": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"chickenpox": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"dengue fever": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"typhoid fever": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"scabies": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"heat rash": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"eczema": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"impetigo": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"constant fatigue": {
"anemia": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"chronic fatigue syndrome": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"depression": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"hypothyroidism": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"diabetes mellitus": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"sleep apnea": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"fibromyalgia": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"chronic infections": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"heart failure": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"cancer": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"painful joints": {
"rheumatoid arthritis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
"osteoarthritis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"gout": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"lupus": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
"psoriatic arthritis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
"bursitis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"infectious arthritis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
"injury": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"tendinitis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"rib pain": {
"costochondritis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } },
"rib fracture": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 1.1 }, genderFactors: { male: 1.2, female: 1 } },
"pleurisy": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"pneumonia": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.3 }, genderFactors: { male: 1, female: 1 } },
"muscle strain": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"bronchitis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"GERD": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } },
"shingles": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.3 }, genderFactors: { male: 1, female: 1.2 } },
"heart attack": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.5 }, genderFactors: { male: 1.5, female: 1 } },
"fibromyalgia": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1.2 } }
},
"ringing in ears (tinnitus)": {
"loud noise exposure": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"ear infection": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"hearing loss": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.3 }, genderFactors: { male: 1, female: 1 } },
"Meniere's disease": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1.2 } },
"acoustic neuroma": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1.2 } },
"earwax buildup": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"high blood pressure": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.3 }, genderFactors: { male: 1, female: 1 } },
"TMJ disorder": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
"age-related hearing loss": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.5 }, genderFactors: { male: 1, female: 1 } }
},
"shoulder pain": {
"rotator cuff injury": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1.2, female: 1 } },
"bursitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } },
"frozen shoulder": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1.2 } },
"shoulder dislocation": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"arthritis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.3 }, genderFactors: { male: 1, female: 1 } },
"tendonitis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"muscle strain": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"referred pain from neck": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"labral tear": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"skin peeling": {
"sunburn": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"contact dermatitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"eczema": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1.2 } },
"psoriasis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1.2 } },
"seborrheic dermatitis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"fungal infection": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"vitamin deficiencies": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"allergic reaction": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"dry skin": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"chemical burn": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"skin sores": {
"herpes simplex": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"impetigo": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"pressure ulcers": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.3 }, genderFactors: { male: 1, female: 1 } },
"cellulitis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"fungal infection": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"athlete's foot": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"venous ulcers": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"bacterial infections": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"shingles": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.3 }, genderFactors: { male: 1, female: 1.2 } },
"eczema herpeticum": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1.2 } }
},
"slow wound healing": {
"diabetes mellitus": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.3 }, genderFactors: { male: 1, female: 1 } },
"circulatory disorders": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"nutritional deficiencies": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"chronic infections": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"venous insufficiency": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"autoimmune disorders": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"liver disease": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.3 }, genderFactors: { male: 1, female: 1 } },
"poor nutrition": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"medication side effects": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } }
},
"sore mouth": {
"oral thrush": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1.2 } },
"canker sores": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"herpes simplex": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"vitamin deficiencies": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"burning mouth syndrome": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1.2 } },
"gum disease": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1.1 } },
"bacterial infections": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } },
"allergic reactions": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"irritation from dentures": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"acid reflux": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } }
},
"speech difficulties": {
"stroke": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.5 }, genderFactors: { male: 1.2, female: 1.2 } },
"neurological disorders": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.3 }, genderFactors: { male: 1, female: 1 } },
"vocal cord paralysis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"Parkinson's disease": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1.2, female: 1 } },
"laryngitis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"trauma": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"tumors": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1.2 } },
"muscle disorders": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"brain injuries": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"voice overuse": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"spinal pain": {
"spinal stenosis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.3 }, genderFactors: { male: 1, female: 1 } },
"herniated disc": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"arthritis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.3 }, genderFactors: { male: 1, female: 1 } },
"muscle strain": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"scoliosis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"osteoporosis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.3 }, genderFactors: { male: 1, female: 1 } },
"postural issues": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"fractures": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"spinal cord injury": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"fibromyalgia": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } }
},
"swallowing difficulties": {
"esophageal stricture": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"stroke": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.5 }, genderFactors: { male: 1.2, female: 1.2 } },
"thyroid disorders": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1.2 } },
"esophageal cancer": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.3 }, genderFactors: { male: 1.2, female: 1.2 } },
"Parkinson's disease": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1.2, female: 1 } },
"GERD": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"muscle disorders": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"esophagitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"nerve damage": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"allergic reactions": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"swollen glands": {
"infection": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"HIV/AIDS": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"mononucleosis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"Tuberculosis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"lymphoma": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.3 }, genderFactors: { male: 1, female: 1.2 } },
"autoimmune diseases": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
"thyroid disorders": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1.2 } },
"leukemia": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1.2 } },
"chronic sinusitis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"swollen hands or feet": {
"heart failure": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.3 }, genderFactors: { male: 1, female: 1 } },
"kidney disease": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.3 }, genderFactors: { male: 1, female: 1 } },
"lymphedema": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"venous insufficiency": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"pregnancy": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.3 } },
"arthritis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"infections": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"cirrhosis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"trauma": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"hypothyroidism": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1.2 } }
},
"taste changes": {
"COVID-19": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"chemotherapy": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"nutritional deficiencies": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"oral infections": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"dry mouth": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } },
"hormonal changes": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1.2 } },
"medication side effects": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"age-related changes": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1.2 } },
"GERD": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"dental issues": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"tingling sensations": {
"peripheral neuropathy": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"carpal tunnel syndrome": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } },
"multiple sclerosis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.3 }, genderFactors: { male: 1, female: 1 } },
"diabetes mellitus": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"vitamin deficiencies": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"stroke": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.5 }, genderFactors: { male: 1.2, female: 1.2 } },
"pinched nerve": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"autoimmune disorders": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
"injury": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"Raynaud's phenomenon": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"toothache": {
"dental cavity": { weight: 9, durationFactors: { short: 1.4, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"gum disease": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"tooth infection": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"tooth abscess": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"dental trauma": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"bruxism": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"sinus infection": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"tooth sensitivity": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"wisdom teeth issues": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"jaw disorders": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"unexplained bruising": {
"bleeding disorders": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1.2 } },
"leukemia": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1.2, female: 1.2 } },
"vitamin deficiencies": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"blood thinners": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"platelet disorders": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1.2 } },
"liver disease": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1.2 } },
"autoimmune diseases": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
"blood vessel issues": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"anemia": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1.2 } },
"trauma": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"sneezing": {
"allergic rhinitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"common cold": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"sinusitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"flu": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"asthma": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"irritants": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"nasal polyps": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"nasal infections": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"hay fever": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"medication side effects": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"tinnitus": {
"ear infection": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"exposure to loud noises": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"age-related hearing loss": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.3 }, genderFactors: { male: 1, female: 1 } },
"earwax buildup": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"Meniere's disease": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"temporal mandibular joint (TMJ) disorder": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"cardiovascular problems": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"head or neck injuries": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"noise-induced hearing loss": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"medication side effects": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"painful swallowing": {
"esophagitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"gastroesophageal reflux disease (GERD)": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"pharyngitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"tonsillitis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"laryngitis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"stomach ulcer": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"throat cancer": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"viral infection": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"esophageal stricture": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"esophageal cancer": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"itchy rash": {
    "eczema": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.5, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
    "contact dermatitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "urticaria": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "psoriasis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1.2, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
    "allergic reactions": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "fungal infections": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "insect bites": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "scabies": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "shingles": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1.5, elderly: 1.5 }, genderFactors: { male: 1, female: 1 } },
    "rosacea": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1.2, elderly: 1.2 }, genderFactors: { male: 1, female: 1.2 } }
},
"nausea after eating": {
    "gastroesophageal reflux disease (GERD)": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
    "food poisoning": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "gastritis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
    "peptic ulcer": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "gastroparesis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1.2 } },
    "chronic liver disease": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1.2 } },
    "pancreatitis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1.2 } },
    "food intolerance": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "pregnancy": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.5 } },
    "indigestion": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"painful urination with blood": {
    "urinary tract infection (UTI)": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
    "kidney stones": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
    "bladder infection": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
    "urethritis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "sexually transmitted infections (STIs)": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
    "prostatitis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1.2, female: 1 } },
    "interstitial cystitis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
    "bladder cancer": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.5 }, genderFactors: { male: 1, female: 1.2 } },
    "renal trauma": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "medication side effects": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"persistent dizziness": {
    "vertigo": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.3 }, genderFactors: { male: 1, female: 1 } },
    "inner ear disorders": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
    "low blood pressure": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
    "orthostatic hypotension": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.3 }, genderFactors: { male: 1, female: 1 } },
    "dehydration": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "migraine": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
    "stroke": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.5 }, genderFactors: { male: 1.2, female: 1.2 } },
    "anxiety disorders": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
    "neurological conditions": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1.2 } },
    "medication side effects": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"burning sensation in chest": {
    "gastroesophageal reflux disease (GERD)": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
    "esophagitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
    "angina": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.5 }, genderFactors: { male: 1.2, female: 1 } },
    "heartburn": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
    "peptic ulcer": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
    "esophageal spasm": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "hiatal hernia": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
    "pneumonia": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "costochondritis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "anxiety": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"lymphadenopathy": {
    "infection": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "lymphoma": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1.2, female: 1 } },
    "leukemia": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1.2, female: 1 } },
    "mononucleosis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "Tuberculosis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "autoimmune diseases": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1.2 } },
    "HIV/AIDS": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1.2 } },
    "chronic inflammation": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "localized infections": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "medication reactions": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"red, itchy eyes": {
    "allergic conjunctivitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
    "viral conjunctivitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "bacterial conjunctivitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "dry eyes": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1.2 } },
    "blepharitis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "contact lens issues": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "irritants": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "glaucoma": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.5 }, genderFactors: { male: 1, female: 1.2 } },
    "sinusitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "corneal infection": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"frequent urination at night": {
    "benign prostatic hyperplasia (BPH)": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.3 }, genderFactors: { male: 1.5, female: 1 } },
    "diabetes mellitus": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
    "urinary tract infection (UTI)": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
    "overactive bladder": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
    "bladder infection": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
    "chronic kidney disease": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
    "heart failure": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
    "medication side effects": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "prostatitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1.2, female: 1 } },
    "pregnancy": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.5 } }
},
"painful joints in the morning": {
    "rheumatoid arthritis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1.2 } },
    "osteoarthritis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
    "ankylosing spondylitis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
    "gout": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1.2, female: 1 } },
    "psoriatic arthritis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
    "lupus": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1.2 } },
    "fibromyalgia": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
    "tendonitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "bursitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
    "osteomyelitis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
    "chronic fatigue": {
        "chronic fatigue syndrome": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
        "insomnia": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
        "depression": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1.2 } },
        "hypothyroidism": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1.5 } },
        "anemia": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1.2 } },
        "fibromyalgia": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.5 } },
        "chronic infections": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } },
        "autoimmune diseases": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1.5 } },
        "medication side effects": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "malnutrition": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
    },
    "severe headache with nausea": {
        "migraine": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.5 } },
        "cluster headache": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1.5, female: 1 } },
        "tension headache": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } },
        "brain tumor": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.5 }, genderFactors: { male: 1, female: 1 } },
        "sinusitis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "meningitis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1.2, elderly: 1.5 }, genderFactors: { male: 1, female: 1 } },
        "intracranial pressure changes": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
        "stroke": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1.5, elderly: 1.5 }, genderFactors: { male: 1, female: 1 } },
        "cervicogenic headache": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "medication side effects": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
    },
    "yellowing of the skin": {
        "jaundice": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
        "liver disease": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1.2, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
        "hepatitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1.2, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
        "gallbladder disease": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1.1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } },
        "pancreatitis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1.2, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } },
        "hemolytic anemia": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } },
        "biliary obstruction": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } },
        "genetic disorders": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } },
        "medication side effects": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "viral infections": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
    },
    "difficulty breathing when lying down": {
        "heart failure": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.3 }, genderFactors: { male: 1, female: 1 } },
        "chronic obstructive pulmonary disease (COPD)": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1.2, elderly: 1.3 }, genderFactors: { male: 1, female: 1 } },
        "pulmonary edema": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1.2, elderly: 1.3 }, genderFactors: { male: 1, female: 1 } },
        "asthma": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } },
        "sleep apnea": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1.5, female: 1 } },
        "pneumonia": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1.1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
        "gastroesophageal reflux disease (GERD)": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "pleural effusion": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "anxiety disorders": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "lung cancer": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1.2, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } }
    },
    "persistent abdominal pain after eating": {
        "gastritis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "peptic ulcer": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "gastroesophageal reflux disease (GERD)": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "gallbladder disease": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "pancreatitis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "irritable bowel syndrome (IBS)": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
        "food intolerance": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "gallstones": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "constipation": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "chronic liver disease": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
    },
    "persistent ringing in the ears": {
        "tinnitus": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "hearing loss": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } },
        "ear infections": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "exposure to loud noises": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "Meniere's disease": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "medication side effects": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "temporal mandibular joint (TMJ) disorder": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "cardiovascular problems": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "head or neck injuries": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "noise-induced hearing loss": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
    },
    "sharp chest pain": {
        "angina": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
        "myocardial infarction (heart attack)": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.5 }, genderFactors: { male: 1.5, female: 1 } },
        "pulmonary embolism": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "pneumothorax": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "aortic dissection": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
        "pericarditis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "costochondritis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "gastroesophageal reflux disease (GERD)": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "esophageal spasm": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "muscle strain": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
    },
    "yellowing of the eyes": {
        "jaundice": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
        "hepatitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1.2, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
        "liver disease": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } },
        "gallbladder disease": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "pancreatic cancer": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
        "biliary obstruction": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "hemolytic anemia": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "genetic disorders": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "medication side effects": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "viral infections": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
    },
    "difficulty swallowing liquids": {
        "esophageal stricture": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
        "esophagitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "achalasia": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "gastroesophageal reflux disease (GERD)": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "throat cancer": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
        "esophageal spasm": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "neurological disorders": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "stroke": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "oral infections": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "laryngitis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
    },
    "persistent cough with blood": {
        "lung cancer": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.5 }, genderFactors: { male: 1.2, female: 1 } },
        "Tuberculosis": { weight: 9, durationFactors: { short: 1, medium: 1.6, long: 2 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1.4, elderly: 2 }, genderFactors: { male: 1, female: 1 } },
        "pneumonia": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "bronchitis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "pulmonary embolism": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "chronic obstructive pulmonary disease (COPD)": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "autoimmune disorders": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "esophageal bleeding": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "pleural effusion": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
        "medication side effects": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
    },            
    
        "pain in the lower abdomen": {
            "appendicitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "ovarian cysts": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
            "endometriosis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
            "irritable bowel syndrome (IBS)": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
            "diverticulitis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "pelvic inflammatory disease (PID)": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
            "hernia": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1.2, female: 1 } },
            "gastroenteritis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "constipation": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "kidney stones": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1.2, female: 1 } }
        },
        "excessive thirst and frequent urination": {
            "diabetes mellitus": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
            "diabetes insipidus": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "hypercalcemia": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "chronic kidney disease": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "medication side effects": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "hyperglycemia": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "urinary tract infection (UTI)": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
            "cushing's syndrome": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "pregnancy": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
            "dehydration": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
        },
        "swollen, painful joints": {
            "rheumatoid arthritis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1.2 } },
            "gout": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1.2, female: 1 } },
            "osteoarthritis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
            "psoriatic arthritis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
            "lupus": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
            "bursitis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "tendonitis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "reactive arthritis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "infectious arthritis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "rheumatic fever": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
        },
        "rapid weight loss": {
            "hyperthyroidism": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
            "cancer": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.5 }, genderFactors: { male: 1, female: 1 } },
            "chronic infections": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "diabetes mellitus": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
            "malabsorption disorders": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "eating disorders": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "Tuberculosis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "addison's disease": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "chronic obstructive pulmonary disease (COPD)": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "medication side effects": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
        },
        "intense abdominal cramping": {
            "irritable bowel syndrome (IBS)": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
            "gastroenteritis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "food poisoning": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "endometriosis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
            "diverticulitis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "peptic ulcer": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "gallbladder disease": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "constipation": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "inflammatory bowel disease (IBD)": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
            "appendicitis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
        },
        "persistent itchy scalp": {
            "dandruff": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "seborrheic dermatitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "psoriasis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "fungal infections": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "head lice": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "contact dermatitis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "eczema": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "allergic reactions": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "scalp folliculitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "dry skin": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
        },
        "painful, swollen legs": {
            "deep vein thrombosis (DVT)": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
            "cellulitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "varicose veins": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
            "chronic venous insufficiency": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "lymphedema": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "congestive heart failure": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "kidney disease": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "trauma or injury": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "medication side effects": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "venous ulcer": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
        },
        "persistent sneezing and congestion": {
            "allergic rhinitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "common cold": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "sinusitis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "flu": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "nasal polyps": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "chronic sinusitis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "deviated septum": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "upper respiratory infections": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "environmental irritants": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "medication side effects": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
        },
        "severe back pain radiating to legs": {
            "herniated disc": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
            "sciatica": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "spinal stenosis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
            "degenerative disc disease": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
            "muscle strain": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "spinal arthritis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "osteoporosis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
            "kidney stones": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "scoliosis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "spinal infections": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
        },
        "painful, swollen hands": {
            "rheumatoid arthritis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
            "osteoarthritis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "gout": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "psoriatic arthritis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
            "lupus": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
            "bursitis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "tendonitis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "reactive arthritis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "infectious arthritis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
            "medication side effects": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
        },                
            "severe, persistent heartburn": {
                "gastroesophageal reflux disease (GERD)": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "peptic ulcer": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "hiatal hernia": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "esophagitis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "esophageal spasm": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "stomach cancer": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "chronic gastritis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "medication side effects": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "food intolerances": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "pneumonia": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
            },
            "recurrent mouth ulcers": {
                "aphthous ulcers": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "vitamin deficiencies": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "Behçet's disease": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "crohn's disease": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "autoimmune disorders": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "stress": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "viral infections": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "medication side effects": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "allergic reactions": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "gum disease": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
            },
            "constant headache": {
                "migraine": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
                "tension headache": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "cluster headache": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "sinus headache": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "dehydration": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "eyestrain": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "high blood pressure": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "temporomandibular joint (TMJ) disorder": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "stroke": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
                "brain tumor": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
            },
            "feeling dizzy": {
                "vertigo": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
                "low blood pressure": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "dehydration": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "inner ear infection": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "migraine": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
                "anemia": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "anxiety": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "medication side effects": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "hypoglycemia": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "stroke": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } }
            },
            "persistent nausea": {
                "gastroenteritis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "morning sickness": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "food poisoning": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "acid reflux": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "migraine": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
                "medication side effects": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "gallbladder issues": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "stomach ulcers": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "kidney stones": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "pancreatitis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
            },
            "feeling unusually weak or tired": {
                "anemia": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "chronic fatigue syndrome": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "depression": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "hypothyroidism": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "chronic infections": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "diabetes": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "insomnia": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "heart disease": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "adrenal insufficiency": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "dehydration": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
            },
            "frequent headaches": {
                "tension headache": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "migraine": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
                "cluster headache": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "sinusitis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "eyestrain": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "dehydration": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "stress": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "high blood pressure": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "hormonal changes": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
                "medication overuse": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
            },
            "constant exhaustion": {
                "chronic fatigue syndrome": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "sleep apnea": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "depression": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "anemia": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "hypothyroidism": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "fibromyalgia": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "medication side effects": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "vitamin deficiencies": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "stress": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "diabetes": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
            },
            "swollen feet and ankles": {
                "edema": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "heart failure": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "kidney issues": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "liver disease": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "venous insufficiency": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "medication side effects": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "pregnancy": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "lymphatic obstruction": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "trauma": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "hypertension": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
            },
            "sudden weight gain": {
                "hypothyroidism": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "heart failure": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "fluid retention": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "medication side effects": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "polycystic ovary syndrome (PCOS)": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "cushing's syndrome": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "kidney disease": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "pregnancy": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "lifestyle changes": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "diabetes": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
            },
            "recurrent nosebleeds": {
                "dry air": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "allergic rhinitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "sinusitis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "nasal trauma": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "high blood pressure": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "medication side effects": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "blood disorders": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "nasal tumors": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "chronic infections": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                "bleeding disorders": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
            },                                            
                "constant ringing in the ears": {
                    "tinnitus": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "hearing loss": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "ear infection": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "exposure to loud noise": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "medication side effects": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "earwax buildup": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "high blood pressure": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "Meniere's disease": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "TMJ disorder": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "age-related changes": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
                },
                "painful rash": {
                    "shingles": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "eczema": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "contact dermatitis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "psoriasis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "impetigo": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "allergic reactions": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "fungal infections": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "herpes simplex": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "bacterial infections": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "hives": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
                },
                "painful, red eyes": {
                    "conjunctivitis (pink eye)": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "dry eyes": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "blepharitis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "uveitis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "corneal abrasion": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "glaucoma": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "irritants or allergens": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "eye infections": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "contact lens issues": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "foreign body in eye": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
                },
                "chronic cough": {
                    "Tuberculosis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "chronic bronchitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "asthma": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "pneumonia": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "chronic obstructive pulmonary disease (COPD)": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "whooping cough": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "postnasal drip": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "HIV-related infections": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "lung cancer": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "respiratory infections": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
                },
                "nighttime sweating": {
                    "Tuberculosis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "HIV/AIDS": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "malaria": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "lymphoma": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "chronic infections": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "menopause": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "fever": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "hyperthyroidism": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "autoimmune disorders": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "stress": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
                },
                "unexplained weight loss": {
                    "HIV/AIDS": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "Tuberculosis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "cancer": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "chronic infections": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "malnutrition": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "diabetes": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "hyperthyroidism": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "gastrointestinal disorders": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "chronic diarrhea": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "depression": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
                },
                "frequent diarrhea": {
                    "gastroenteritis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "dysentery": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "typhoid fever": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "cholera": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "parasitic infections": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "malaria": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "food poisoning": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "IBS (Irritable Bowel Syndrome)": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "medication side effects": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "antibiotic-associated diarrhea": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
                },
                "fever with chills": {
                    "malaria": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "typhoid fever": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "dengue fever": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "chikungunya": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "flu (influenza)": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "HIV/AIDS": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "Tuberculosis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "bacterial infections": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "parasitic infections": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "sepsis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
                },
                "sore joints": {
                    "malaria": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "rheumatic fever": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "arthritis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "gout": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "dengue fever": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "lupus": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "osteomyelitis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "HIV/AIDS": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "rheumatoid arthritis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "injuries": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
                },
                "stomach pain": {
                    "typhoid fever": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "gastroenteritis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "appendicitis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "peptic ulcer disease": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "malaria": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "intestinal worms": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "gallbladder disease": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "HIV-related conditions": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "abdominal Tuberculosis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
                    "gastrointestinal infections": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
                },
"skin irritation": {
"fungal infections": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"scabies": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"eczema": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"impetigo": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"chickenpox": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"allergic reactions": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"syphilis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"HIV-related skin conditions": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"herpes simplex": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"tropical ulcers": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"swollen legs": {
"kwashiorkor": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"heart failure": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"kidney disease": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"venous insufficiency": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"lymphatic obstruction": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"malaria": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"pregnancy": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"medication side effects": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"liver disease": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"injury": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"difficulty breathing": {
"asthma": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"pneumonia": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"chronic bronchitis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"heart failure": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"chronic obstructive pulmonary disease (COPD)": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"pulmonary embolism": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"Tuberculosis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"malaria": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"anemia": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"allergic reactions": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},                        
"pain during urination": {
"urinary tract infection (UTI)": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { elderly: 1 }, genderFactors: { female: 1 } },
"sexually transmitted infections (STIs)": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { youngAdults: 1 }, genderFactors: { female: 1, male: 1 } },
"bladder infection": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { elderly: 1 }, genderFactors: { female: 1 } },
"kidney infection": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { elderly: 1 }, genderFactors: { female: 1 } },
"prostatitis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { elderly: 1 }, genderFactors: { male: 1 } },
"urethritis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { youngAdults: 1 }, genderFactors: { female: 1, male: 1 } },
"vaginitis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { youngAdults: 1 }, genderFactors: { female: 1 } },
"kidney stones": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { middleAged: 1 }, genderFactors: { female: 1, male: 1 } },
"medication side effects": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { elderly: 1 }, genderFactors: { female: 1, male: 1 } },
"bladder cancer": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { elderly: 1 }, genderFactors: { female: 1 } }
},
"dry cough": {
"Tuberculosis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"asthma": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { children: 1, adults: 1 }, genderFactors: { female: 1, male: 1 } },
"chronic bronchitis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { adults: 1, elderly: 1 }, genderFactors: { female: 1, male: 1 } },
"postnasal drip": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"whooping cough": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { children: 1 }, genderFactors: { female: 1, male: 1 } },
"HIV-related respiratory issues": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { adults: 1, elderly: 1 }, genderFactors: { female: 1, male: 1 } },
"GERD": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { adults: 1 }, genderFactors: { female: 1, male: 1 } },
"allergies": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"medication side effects": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { elderly: 1 }, genderFactors: { female: 1, male: 1 } },
"chronic obstructive pulmonary disease (COPD)": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { elderly: 1 }, genderFactors: { female: 1, male: 1 } }
},
"itchy skin ": {
"eczema": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { children: 1, adults: 1 }, genderFactors: { female: 1, male: 1 } },
"fungal infections": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"scabies": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"allergic reactions": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"contact dermatitis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"insect bites": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"hives": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"psoriasis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { adults: 1 }, genderFactors: { female: 1, male: 1 } },
"chickenpox": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { children: 1 }, genderFactors: { female: 1, male: 1 } },
"HIV-related skin conditions": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { adults: 1 }, genderFactors: { female: 1, male: 1 } }
},
"swelling of joints": {
"brucellosis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { adults: 1 }, genderFactors: { female: 1, male: 1 } },
"rheumatic fever": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { children: 1 }, genderFactors: { female: 1, male: 1 } },
"arthritis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { elderly: 1 }, genderFactors: { female: 1, male: 1 } }
},
"numbness in extremities": {
"leprosy": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"diabetic neuropathy": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { adults: 1, elderly: 1 }, genderFactors: { female: 1, male: 1 } },
"multiple sclerosis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { adults: 1 }, genderFactors: { female: 1 } }
},
"painful skin lesions": {
"onchocerciasis (river blindness)": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"buruli ulcer": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"chronic skin infections": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } }
},
"coughing": {
"schistosomiasis (bilharzia)": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"Tuberculosis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"chronic bronchitis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { adults: 1, elderly: 1 }, genderFactors: { female: 1, male: 1 } }
},
"jaundice": {
"yellow fever": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"hepatitis B": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"hepatitis E": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } }
},
"muscle weakness": {
"guinea worm disease (dracunculiasis)": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"kwashiorkor": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { children: 1 }, genderFactors: { female: 1, male: 1 } },
"myasthenia gravis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { adults: 1 }, genderFactors: { female: 1, male: 1 } }
},
"stomach ache": {
"amoebiasis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"cryptosporidiosis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"gastroenteritis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } }
},
"sweating at night": {
"Tuberculosis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"malaria": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"HIV/AIDS": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { adults: 1, elderly: 1 }, genderFactors: { female: 1, male: 1 } }
},
"chronic diarrhea": {
"cryptosporidiosis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"amoebiasis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"bacterial gastroenteritis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } }
},
"pain behind the eyes": {
"dengue fever": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"sinusitis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"migraine": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { adults: 1 }, genderFactors: { female: 1 } }
},
"severe headache": {
"dengue fever": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"meningitis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"cluster headache": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { adults: 1 }, genderFactors: { male: 1 } }
},
"flaking skin": {
"eczema": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { children: 1, adults: 1 }, genderFactors: { female: 1, male: 1 } },
"psoriasis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { adults: 1 }, genderFactors: { female: 1, male: 1 } },
"seborrheic dermatitis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { adults: 1 }, genderFactors: { female: 1, male: 1 } }
},
"skin discoloration": {
"leprosy": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"melasma": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { adults: 1 }, genderFactors: { female: 1 } },
"vitiligo": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } }
},
"itchy, watery eyes": {
"trachoma": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"allergic conjunctivitis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"dry eye syndrome": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { adults: 1 }, genderFactors: { female: 1, male: 1 } }
},
"pain when urinating": {
"schistosomiasis (bilharzia)": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"urinary tract infection": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { elderly: 1 }, genderFactors: { female: 1 } },
"bladder infection": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { elderly: 1 }, genderFactors: { female: 1 } }
},
"abnormal blood tests": {
"hepatitis B": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"anemia": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1 } },
"leukemia": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } }
},
"persistent fever": {
"malaria": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"typhoid fever": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"HIV/AIDS": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { adults: 1, elderly: 1 }, genderFactors: { female: 1, male: 1 } }
},
"visual disturbances": {
"onchocerciasis (river blindness)": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"toxoplasmosis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"retinitis pigmentosa": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { adults: 1 }, genderFactors: { female: 1, male: 1 } }
},
"enlarged lymph nodes": {
"lymphoma": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"brucellosis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { allAges: 1 }, genderFactors: { female: 1, male: 1 } },
"HIV/AIDS": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { adults: 1, elderly: 1 }, genderFactors: { female: 1, male: 1 } }
},
"persistent itchiness": {
"Buruli ulcer": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 0.9 }, genderFactors: { male: 1, female: 1 } },
"lymphatic filariasis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.1, adult: 1, elderly: 0.8 }, genderFactors: { male: 1, female: 1 } },
"chronic eczema": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 0.9 }, genderFactors: { male: 1, female: 1 } }
},
"unexpected weight loss": {
"Tuberculosis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 0.9 }, genderFactors: { male: 1, female: 1 } },
"HIV/AIDS": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 0.9 }, genderFactors: { male: 1, female: 1 } },
"cancer": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.9, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"pain when swallowing": {
"esophageal cancer": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"schistosomiasis (esophageal form)": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.9, adult: 1, elderly: 0.9 }, genderFactors: { male: 1, female: 1 } },
"diphtheria": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.1, adult: 1, elderly: 0.8 }, genderFactors: { male: 1, female: 1 } }
},
"uncontrolled bleeding": {
"hemophilia": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 0.9 }, genderFactors: { male: 1, female: 0.8 } },
"liver cirrhosis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.9, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"platelet disorders": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 0.9 }, genderFactors: { male: 1, female: 1 } }
},
"high fever with rash": {
"smallpox": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 0.8 }, genderFactors: { male: 1, female: 1 } },
"measles": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.3, adult: 1, elderly: 0.7 }, genderFactors: { male: 1, female: 1 } },
"Kawasaki disease": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 0.9, elderly: 0.7 }, genderFactors: { male: 1, female: 1 } }
},
"constant tiredness": {
"Chronic Fatigue Syndrome": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 0.9 }, genderFactors: { male: 1, female: 1 } },
"HIV/AIDS": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"leptospirosis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 0.9 }, genderFactors: { male: 1, female: 1 } }
},
"joint deformities": {
"rheumatic fever": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.1, adult: 1, elderly: 0.9 }, genderFactors: { male: 1, female: 1 } },
"gout": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.9, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 0.8 } },
"psoriatic arthritis": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 0.9 }, genderFactors: { male: 1, female: 1 } }
},
"confusion or delirium": {
"cerebral malaria": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 0.8 }, genderFactors: { male: 1, female: 1 } },
"meningitis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 0.9 }, genderFactors: { male: 1, female: 1 } },
"encephalitis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 0.9 }, genderFactors: { male: 1, female: 1 } }
},
"severe abdominal bloating": {
"ascitic cirrhosis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"intestinal obstruction": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 0.9 }, genderFactors: { male: 1, female: 1 } },
"nephrotic syndrome": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.9, adult: 1, elderly: 0.8 }, genderFactors: { male: 1, female: 1 } }
},
"sensory abnormalities": {
"neurocysticercosis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 0.8 }, genderFactors: { male: 1, female: 1 } },
"multiple sclerosis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.9, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"Vitamin B12 deficiency": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.9, adult: 1, elderly: 0.9 }, genderFactors: { male: 1, female: 1 } }
},
"strange or abnormal skin growths": {
"Kaposi's sarcoma": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"skin cancers": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"actinic keratosis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"extreme thirst": {
"diabetes mellitus": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"diabetic ketoacidosis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 0.9 }, genderFactors: { male: 1, female: 1 } },
"hypercalcemia": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.9, adult: 1, elderly: 0.8 }, genderFactors: { male: 1, female: 1 } }
},
"persistent dry cough": {
"interstitial lung disease": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"chronic obstructive pulmonary disease (COPD)": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"sarcoidosis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 0.9 }, genderFactors: { male: 1, female: 1 } }
},
"sudden onset of joint pain": {
"gout": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 0.8 } },
"rheumatic fever": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 0.9 }, genderFactors: { male: 1, female: 1 } },
"septic arthritis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 0.9 }, genderFactors: { male: 1, female: 1 } }
},
"sweat at night": {
"Tuberculosis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 0.9 }, genderFactors: { male: 1, female: 1 } },
"HIV/AIDS": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 0.9 }, genderFactors: { male: 1, female: 1 } },
"lymphoma": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 0.8 }, genderFactors: { male: 1, female: 1 } }
},
"constant cough": {
"chronic bronchitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"asthma": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 0.9 }, genderFactors: { male: 1, female: 1 } },
"Tuberculosis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 0.8 }, genderFactors: { male: 1, female: 1 } }
},
"weak muscles": {
"myasthenia gravis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"muscular dystrophy": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.9, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"Guillain-Barre syndrome": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.9, adult: 1, elderly: 0.9 }, genderFactors: { male: 1, female: 1 } }
},
"weight gain": {
"hypothyroidism": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 0.9 }, genderFactors: { male: 1, female: 1 } },
"Cushing's syndrome": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"polycystic ovary syndrome": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 0.9 }, genderFactors: { male: 1, female: 1 } }
},
"breathing difficulty": {
"asthma": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 0.9 }, genderFactors: { male: 1, female: 1 } },
"chronic obstructive pulmonary disease (COPD)": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.9, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"pneumonia": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 0.8 }, genderFactors: { male: 1, female: 1 } }
},        
"prolonged fever": {
"typhoid fever": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"malaria": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 0.9 }, genderFactors: { male: 1, female: 1 } },
"dengue fever": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 0.9 }, genderFactors: { male: 1, female: 1 } }
},
"tender joints": {
"rheumatoid arthritis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1 }, genderFactors: { male: 0.8, female: 1.2 } },
"gout": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1 }, genderFactors: { male: 1.2, female: 0.8 } },
"osteoarthritis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.7, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } }
},
"dry mouth": {
"dehydration": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"Sjogren's syndrome": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.9, adult: 1, elderly: 1 }, genderFactors: { male: 0.8, female: 1.2 } },
"medication side effect": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"sudden dizziness": {
"vertigo": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } },
"low blood pressure": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"dehydration": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"headaches": {
"migraine": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.9, adult: 1, elderly: 0.9 }, genderFactors: { male: 0.8, female: 1.2 } },
"tension headache": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"cluster headache": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1 }, genderFactors: { male: 1.2, female: 0.8 } }
},
"chest pains": {
"angina": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.2 }, genderFactors: { male: 1.2, female: 1 } },
"heart attack": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.2 }, genderFactors: { male: 1.2, female: 1 } },
"pericarditis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"swollen abdomen": {
"ascites": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"liver cirrhosis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } },
"kidney failure": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"blurry vision": {
"glaucoma": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.7, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"diabetic retinopathy": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } },
"cataracts": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } }
},
"nausea vomiting": {
"gastroenteritis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"food poisoning": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"migraine": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.9, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"persistent abdominal pain": {
"gastritis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"appendicitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 0.9 }, genderFactors: { male: 1, female: 1 } },
"peptic ulcer": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"increased urination": {
"diabetes mellitus": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"urinary tract infection": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"overactive bladder": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"persistent headache pain": {
"migraine": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.9, adult: 1, elderly: 0.9 }, genderFactors: { male: 0.8, female: 1.2 } },
"tension headache": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"cluster headache": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1 }, genderFactors: { male: 1.2, female: 0.8 } }
},
"joint stiffness": {
"rheumatoid arthritis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.2 }, genderFactors: { male: 0.8, female: 1.2 } },
"osteoarthritis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } },
"gout": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1 }, genderFactors: { male: 1.2, female: 0.8 } }
},
"feeling nauseous frequently": {
"gastroenteritis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"food poisoning": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"pregnancy": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.7, adult: 0.8, elderly: 0.5 }, genderFactors: { male: 0.5, female: 1.5 } }
},
"pain on urination": {
"urinary tract infection": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
"bladder infection": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1.2 } },
"sexually transmitted infection": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.9, adult: 1, elderly: 1 }, genderFactors: { male: 1.2, female: 1 } }
},
"severe chest tightness": {
"angina": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.7, adult: 1, elderly: 1.2 }, genderFactors: { male: 1.2, female: 1 } },
"heart attack": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.7, adult: 1, elderly: 1.2 }, genderFactors: { male: 1.2, female: 1 } },
"panic attack": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"frequent nosebleeds": {
"allergies": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"sinusitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"high blood pressure": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } }
},
"cough with blood": {
"lung cancer": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.2 }, genderFactors: { male: 1.2, female: 1 } },
"Tuberculosis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"pneumonia": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"extreme fatigue levels": {
"chronic fatigue syndrome": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } },
"hypothyroidism": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"anemia": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"yellow skin": {
"jaundice": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"hepatitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"cirrhosis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } }
},
"painful rash outbreak": {
"shingles": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"herpes simplex": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"contact dermatitis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"persistent itchy eyes": {
"allergic conjunctivitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"dry eye syndrome": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"blepharitis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"dizzy": {
"vertigo": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"inner ear infection": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"dehydration": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"tremors": {
"Parkinson's disease": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.7, adult: 1, elderly: 1.2 }, genderFactors: { male: 1.2, female: 1 } },
"essential tremor": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.1 }, genderFactors: { male: 1.2, female: 1 } },
"multiple sclerosis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"numbness": {
"peripheral neuropathy": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } },
"stroke": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"carpal tunnel syndrome": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"bleeding": {
"hemophilia": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"platelet disorder": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"gastrointestinal bleeding": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"body swelling": {
"edema": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"heart failure": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"kidney disease": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"confused": {
"delirium": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"dementia": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"brain tumor": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } }
},
"feeling faint": {
"orthostatic hypotension": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"dehydration": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"anemia": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"sweating": {
"hyperhidrosis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"menopause": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.7, adult: 1, elderly: 1 }, genderFactors: { male: 0.5, female: 1.5 } },
"infection": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"pain": {
"fibromyalgia": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.7, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"arthritis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"muscle strain": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"paralysis": {
"stroke": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"spinal cord injury": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"multiple sclerosis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"cyanosis": {
"cardiac disease": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"chronic lung disease": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"asthma": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"seizures": {
"epilepsy": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"brain tumor": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"stroke": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } }
},
"hematuria": {
"kidney stones": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"bladder infection": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"renal cancer": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"blepharospasm": {
"dry eyes": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"blepharitis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"neurological disorder": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"ear noise": {
"ear infection": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"acoustic neuroma": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"exposure to loud noise": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"myoclonus": {
"neurological disorder": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"seizure disorder": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } },
"medication side effect": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 1 }, genderFactors: { male: 1, female: 1 } }
},
"dysphagia": {
"esophageal disorder": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"stroke": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"muscle disorder": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } }
},
"urticaria": {
"allergic reaction": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.1, adult: 1, elderly: 0.8 }, genderFactors: { male: 1, female: 1 } },
"hives": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 0.9 }, genderFactors: { male: 1, female: 1 } },
"chronic idiopathic urticaria": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.9, adult: 1, elderly: 0.8 }, genderFactors: { male: 1, female: 1 } }
},
"weakness in muscles": {
"myasthenia gravis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"muscular dystrophy": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 0.9, elderly: 0.8 }, genderFactors: { male: 1.1, female: 0.9 } },
"chronic fatigue syndrome": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.7, adult: 1, elderly: 0.9 }, genderFactors: { male: 0.8, female: 1.2 } },
"hypothyroidism": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1 }, genderFactors: { male: 0.9, female: 1.2 } },
"vitamin D deficiency": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } }
},
"constant dizziness": {
"vertigo": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"dehydration": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 0.9 }, genderFactors: { male: 1, female: 1 } },
"inner ear infection": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 0.9, elderly: 0.8 }, genderFactors: { male: 1, female: 1 } },
"low blood pressure": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"anxiety": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 0.8 }, genderFactors: { male: 0.9, female: 1.1 } }
},
"abdominal bloating": {
"irritable bowel syndrome (IBS)": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.7, adult: 1, elderly: 0.9 }, genderFactors: { male: 0.8, female: 1.2 } },
"gastric ulcers": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.6, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } },
"lactose intolerance": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 0.8 }, genderFactors: { male: 1, female: 1 } },
"celiac disease": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 0.9, elderly: 0.8 }, genderFactors: { male: 1, female: 1 } },
"chronic constipation": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } }
},
"chronic headaches": {
"migraine": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.1, adult: 1, elderly: 0.7 }, genderFactors: { male: 0.8, female: 1.2 } },
"tension headaches": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 0.9 }, genderFactors: { male: 1, female: 1 } },
"cluster headaches": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 0.7 }, genderFactors: { male: 1, female: 1 } },
"sinusitis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.1, adult: 1, elderly: 0.8 }, genderFactors: { male: 1, female: 1 } },
"hypertension": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.6, adult: 1, elderly: 1.3 }, genderFactors: { male: 1, female: 1 } }
},
"chronic pain": {
"fibromyalgia": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.6, adult: 1, elderly: 0.8 }, genderFactors: { male: 0.9, female: 1.1 } },
"chronic fatigue syndrome": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.7, adult: 1, elderly: 0.8 }, genderFactors: { male: 0.8, female: 1.2 } },
"rheumatoid arthritis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.6, adult: 1, elderly: 1.2 }, genderFactors: { male: 0.9, female: 1.1 } },
"depression": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.9, adult: 1, elderly: 0.8 }, genderFactors: { male: 0.8, female: 1.2 } },
"somatic symptom disorder": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 0.7 }, genderFactors: { male: 1, female: 1 } }
},
"brain fog": {
"chronic fatigue syndrome": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.6, adult: 1, elderly: 0.7 }, genderFactors: { male: 0.9, female: 1.1 } },
"fibromyalgia": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.6, adult: 1, elderly: 0.8 }, genderFactors: { male: 0.8, female: 1.2 } },
"multiple sclerosis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.7, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } },
"depression": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.9, adult: 1, elderly: 0.8 }, genderFactors: { male: 0.8, female: 1.2 } },
"hypothyroidism": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1 }, genderFactors: { male: 0.9, female: 1.2 } }
},
"insomnia": {
"sleep apnea": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.7, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"restless legs syndrome": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.1 }, genderFactors: { male: 0.9, female: 1.1 } },
"chronic stress": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 0.9 }, genderFactors: { male: 0.9, female: 1.1 } },
"anxiety disorder": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.9, adult: 1, elderly: 0.8 }, genderFactors: { male: 0.8, female: 1.2 } },
"depression": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.9, adult: 1, elderly: 0.8 }, genderFactors: { male: 0.8, female: 1.2 } }
},

"weakness in muscles ": {
"myasthenia gravis": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"muscular dystrophy": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 0.9, elderly: 0.8 }, genderFactors: { male: 1.1, female: 0.9 } },
"chronic fatigue syndrome": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.7, adult: 1, elderly: 0.9 }, genderFactors: { male: 0.8, female: 1.2 } },
"hypothyroidism": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1 }, genderFactors: { male: 0.9, female: 1.2 } },
"vitamin D deficiency": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } }
},
"constant dizziness ": {
"vertigo": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"dehydration": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 0.9 }, genderFactors: { male: 1, female: 1 } },
"inner ear infection": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 0.9, elderly: 0.8 }, genderFactors: { male: 1, female: 1 } },
"low blood pressure": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"anxiety": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 0.8 }, genderFactors: { male: 0.9, female: 1.1 } }
},
"abdominal bloating  ": {
"irritable bowel syndrome (IBS)": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.7, adult: 1, elderly: 0.9 }, genderFactors: { male: 0.8, female: 1.2 } },
"gastric ulcers": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.6, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } },
"lactose intolerance": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.2, adult: 1, elderly: 0.8 }, genderFactors: { male: 1, female: 1 } },
"celiac disease": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 0.9, elderly: 0.8 }, genderFactors: { male: 1, female: 1 } },
"chronic constipation": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } }
},
"chronic headaches  ": {
"migraine": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.1, adult: 1, elderly: 0.7 }, genderFactors: { male: 0.8, female: 1.2 } },
"tension headaches": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 0.9 }, genderFactors: { male: 1, female: 1 } },
"cluster headaches": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 0.7 }, genderFactors: { male: 1, female: 1 } },
"sinusitis": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1.1, adult: 1, elderly: 0.8 }, genderFactors: { male: 1, female: 1 } },
"hypertension": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.6, adult: 1, elderly: 1.3 }, genderFactors: { male: 1, female: 1 } }
},
"chronic pain  ": {
"fibromyalgia": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.6, adult: 1, elderly: 0.8 }, genderFactors: { male: 0.9, female: 1.1 } },
"chronic fatigue syndrome": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.7, adult: 1, elderly: 0.8 }, genderFactors: { male: 0.8, female: 1.2 } },
"rheumatoid arthritis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.6, adult: 1, elderly: 1.2 }, genderFactors: { male: 0.9, female: 1.1 } },
"depression": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.9, adult: 1, elderly: 0.8 }, genderFactors: { male: 0.8, female: 1.2 } },
"somatic symptom disorder": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 0.7 }, genderFactors: { male: 1, female: 1 } }
},
"brain fog ": {
"chronic fatigue syndrome": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.6, adult: 1, elderly: 0.7 }, genderFactors: { male: 0.9, female: 1.1 } },
"fibromyalgia": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.6, adult: 1, elderly: 0.8 }, genderFactors: { male: 0.8, female: 1.2 } },
"multiple sclerosis": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.7, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } },
"depression": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.9, adult: 1, elderly: 0.8 }, genderFactors: { male: 0.8, female: 1.2 } },
"hypothyroidism": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1 }, genderFactors: { male: 0.9, female: 1.2 } }
},
"insomnia  ": {
"sleep apnea": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.7, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"restless legs syndrome": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1.1 }, genderFactors: { male: 0.9, female: 1.1 } },
"chronic stress": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 0.9 }, genderFactors: { male: 0.9, female: 1.1 } },
"anxiety disorder": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.9, adult: 1, elderly: 0.8 }, genderFactors: { male: 0.8, female: 1.2 } },
"depression": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.9, adult: 1, elderly: 0.8 }, genderFactors: { male: 0.8, female: 1.2 } }
},
"irregular heartbeat": {
"atrial fibrillation": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.6, adult: 1, elderly: 1.2 }, genderFactors: { male: 1, female: 1 } },
"anxiety": { weight: 9, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 1, adult: 1, elderly: 0.9 }, genderFactors: { male: 0.9, female: 1.1 } },
"thyroid disorders": { weight: 5, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.8, adult: 1, elderly: 1 }, genderFactors: { male: 0.9, female: 1.2 } },
"electrolyte imbalances": { weight: 7, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.9, adult: 1, elderly: 1.1 }, genderFactors: { male: 1, female: 1 } },
"premenstrual syndrome (PMS)": { weight: 6, durationFactors: { short: 1, medium: 1, long: 1 }, severityFactors: { mild: 1, moderate: 1, severe: 1 }, ageFactors: { child: 0.6, adult: 1, elderly: 0.7 }, genderFactors: { male: 0, female: 1.5 } }
},
// Add remaining symptom combinations following this structure...
};
        
export default symptomWeights;
