import streamlit as st
import pickle

with open('drugTree.pkl', 'rb') as f:
    model = pickle.load(f)

hide_streamlit_style = """
            <style>
            #MainMenu {visibility: hidden;}
            footer {visibility: hidden;}
            </style>
            """
st.markdown(hide_streamlit_style, unsafe_allow_html=True) 

def main():
    st.title('Ayurvedic Remedy')

    diseases_options = {
        25: 'gastritis', 23: 'arthritis', 16: 'Nervous System Disorders', 26: 'migraine', 17: 'Palpitations', 4: 'Diabetes', 10: 'Indigestion', 24: 'diarrhea', 1: 'Anemia', 2: 'Anxiety', 6: 'Dysentery', 8: 'Gas', 3: 'Constipation', 11: 'Joint Pain', 5: 'Digestive Disorders', 20: 'Stress', 22: 'Vitamin C Deficiency', 7: 'Fever', 13: 'Memory Enhancement', 9: 'Heart Problems', 18: 'Scurvy', 21: 'Urinary Tract Infection', 0: 'Acidity', 12: 'Kidney Stones', 15: 'Nausea', 14: 'Metabolic Disorders', 19: 'Stomach Pain'
    }

    diseases_options = {v:k for k, v in diseases_options.items()}

    gender_options = {
        'female': 0, 'male': 1
    }

    severity_options = {
        'high': 0, 'normal': 1, 'low': 2
    }

    medicine_descriptions = {
    'panchkol churna': "A traditional Ayurvedic herbal blend consisting of five potent ingredients like long pepper, black pepper, ginger, and more, known for its digestive and respiratory benefits.",
    'ricinus communis': "Also known as castor oil plant, it's valued for its medicinal properties, particularly its oil extracted from the seeds, which is used as a laxative and for various skin conditions.",
    'Jyotishmati': "A herb native to India, known for its cognitive-enhancing properties, it's often used in Ayurvedic medicine to improve memory and promote mental clarity.",
    'giloy satya': "Derived from the stem of the Giloy (Tinospora cordifolia) plant, it's a potent herbal medicine renowned for its immunomodulatory and anti-inflammatory effects, commonly used to boost immunity.",
    'Chandraprabha vati': "A classical Ayurvedic formulation containing various herbs and minerals, it's primarily used to support urinary tract health, kidney function, and overall vitality.",
    'Mukta pishti': "A traditional Ayurvedic preparation made from pearl powder, valued for its cooling properties and used to pacify excess heat in the body, often recommended for conditions like acidity and gastritis.",
    'fenugreek seed': "Widely used in both traditional medicine and culinary applications, fenugreek seeds are rich in nutrients and known for their potential to regulate blood sugar levels, support digestion, and enhance lactation in nursing mothers.",
    'ajamodarka': "An Ayurvedic digestive tonic prepared from celery seeds, it's used to improve digestion, alleviate gas, and relieve abdominal discomfort.",
    'suhunjana beej': "Also known as drumstick seeds, they're prized for their medicinal properties, particularly for their potential to lower blood pressure, manage diabetes, and support heart health.",
    'akik pishti': "A classical Ayurvedic medicine prepared from agate stone, it's believed to have cooling properties and is traditionally used to balance Pitta dosha, aiding in conditions like acidity and burning sensations.",
    'Shankh Vati + Shankh Bhasma': "A combination Ayurvedic formulation comprising Shankh Vati tablets and Shankh Bhasma (powdered conch shell), utilized to alleviate digestive issues such as acidity, indigestion, and gastritis, promoting overall digestive health.",
    'drakshasava': "An Ayurvedic fermented liquid preparation containing grape extract, it's commonly used as a digestive tonic and blood purifier, offering benefits for digestion, anemia, and overall vitality.",
    'Jatamansi + Shankhapushpi': "A synergistic blend of two potent Ayurvedic herbs, Jatamansi (Nardostachys jatamansi) and Shankhapushpi (Convolvulus pluricaulis), known for their calming effects on the mind and nervous system, aiding in stress relief and promoting mental clarity.",
    'ashta choornam': "A traditional Ayurvedic herbal powder composed of eight key ingredients, typically used to aid digestion, alleviate bloating, and support overall gastrointestinal health.",
    'phadke': "The term 'Phadke' could refer to a variety of Ayurvedic formulations or medicinal plants depending on context, typically used for various health purposes in Ayurveda.",
    'kutaja': "Also known as Holarrhena antidysenterica, Kutaja is an important herb in Ayurveda used to manage diarrhea, dysentery, and other gastrointestinal disorders due to its antidiarrheal and antimicrobial properties.",
    'jahar mohra pishti': "A classical Ayurvedic preparation made from Jahar Mohra (a type of mineral), it's valued for its cooling and calming effects, often used to alleviate symptoms of acidity, gastritis, and burning sensations.",
    'Shankhapushpi': "A revered Ayurvedic herb renowned for its brain-boosting properties, Shankhapushpi is traditionally used to enhance memory, concentration, and overall cognitive function.",
    'kutajarishta': "A fermented Ayurvedic tonic made from the bark of the Kutaja tree (Holarrhena antidysenterica), it's primarily used to treat diarrhea, dysentery, and other gastrointestinal disorders, promoting digestive health and immunity.",
    'hingwastaka churna': "A classic Ayurvedic herbal powder containing asafoetida (hing) and other digestive spices, it's used to alleviate digestive discomfort, gas, bloating, and indigestion.",
    'trikatu': "A traditional Ayurvedic blend of three pungent spices – ginger, black pepper, and long pepper, Trikatu is valued for its digestive, metabolic, and respiratory benefits, aiding in digestion, weight management, and respiratory health.",
    'boswellia curcumin': "A combination of two potent anti-inflammatory herbs, Boswellia serrata (Indian frankincense) and Curcuma longa (turmeric), often used together to relieve joint pain, inflammation, and support overall joint health.",
    'gandharvahastadi kashaya': "An Ayurvedic herbal decoction formulated with various medicinal plants, it's commonly used to alleviate joint pain, inflammation, and stiffness associated with conditions like arthritis.",
    'hingvastak churna': "A traditional Ayurvedic herbal powder containing asafoetida (hing) and other digestive spices, it's used to alleviate digestive discomfort, gas, bloating, and indigestion.",
    'aamvatantak churna': "An Ayurvedic herbal powder blend specifically formulated to alleviate symptoms of Amavata (rheumatoid arthritis), it helps to reduce joint pain, inflammation, and stiffness.",
    'laxative': "A type of medication or substance used to promote bowel movements and relieve constipation by stimulating the intestines.",
    'dadimashtaka churna': "An Ayurvedic herbal powder made from pomegranate seeds and other digestive herbs, it's used to improve digestion, alleviate acidity, and support gastrointestinal health.",
    'kamdhudha ras': "An Ayurvedic medicine prepared from herbs and minerals, it's used to treat conditions like hyperacidity, gastritis, and heartburn, promoting digestive health and reducing acidity.",
    'lavanaabhaskara churna': "An Ayurvedic herbal powder blend containing various digestive spices and salts, it's used to improve digestion, alleviate gas, and support overall gastrointestinal health.",
    'Anu Taila + Shankhapushpi': "This could refer to a combination of Anu Taila (Ayurvedic nasal oil) and Shankhapushpi (herb), possibly used for nasal administration to promote mental clarity, relieve stress, and enhance cognitive function.",
    'nirugandi oil': "An Ayurvedic herbal oil formulation, possibly used for external application, known for its analgesic and anti-inflammatory properties, commonly used to relieve joint pain, muscle stiffness, and inflammation.",
    'shud laksha': "Also known as purified lac, it's a resinous substance obtained from the Lac insect, used in Ayurveda for its astringent and healing properties, particularly in treating conditions like bleeding disorders and diarrhea.",
    'Anu Taila': "A classical Ayurvedic herbal oil used for nasal administration (Nasya), it's beneficial for nasal congestion, sinusitis, headaches, and improving mental clarity.",
    'lime juice': "A citrus juice extracted from lime fruits, it's rich in vitamin C and antioxidants, commonly consumed for its refreshing taste and potential health benefits such as immune support and improved digestion.",
    'tribhuvan kirti rasa': "An Ayurvedic medicine in tablet form, it contains various herbs and minerals and is used to treat fever, flu-like symptoms, and respiratory tract infections, promoting overall respiratory health.",
    'hingvadi vati': "A traditional Ayurvedic tablet formulation containing asafoetida (hing) and other herbs, it's used to alleviate digestive issues such as bloating, gas, and indigestion, promoting healthy digestion.",
    'Vasant Kusumakar Ras': "A classical Ayurvedic formulation known for its rejuvenating properties, it contains a combination of herbs and minerals and is used to manage diabetes, improve strength, and promote overall vitality.",
    'trikatu churna': "A traditional Ayurvedic herbal powder blend containing ginger, black pepper, and long pepper, it's used to enhance digestion, metabolism, and respiratory health, aiding in conditions like indigestion, weight management, and cough.",
    'Ashwagandha': "A prized adaptogenic herb in Ayurveda, Ashwagandha is known for its ability to help the body manage stress, improve energy levels, support immune function, and promote overall well-being.",
    'nirugandi leaves paste': "Possibly referring to a paste made from Nirgundi leaves (Vitex negundo), it's used topically in Ayurveda to alleviate pain, inflammation, and promote wound healing.",
    'bilwa': "Also known as Bael or Aegle marmelos, it's an important herb in Ayurveda used for digestive disorders like diarrhea, dysentery, and promoting gastrointestinal health.",
    'sanjni vati': "An Ayurvedic medicine traditionally used as a general health tonic, it's believed to promote vitality, strengthen the immune system, and enhance overall well-being.",
    'pathyadi guggulu': "An Ayurvedic herbal preparation in tablet form, it contains a combination of herbs and guggulu resin, used to treat various skin disorders, joint pain, and inflammatory conditions.",
    'ginger': "A widely used culinary spice and medicinal herb, ginger is known for its anti-inflammatory, digestive, and immune-boosting properties, used to alleviate nausea, aid digestion, and promote overall health."
    }

    disease = st.selectbox('What Disease do you have?', list(diseases_options.keys()))
    age = st.number_input("What's your age", value=1, min_value=1, max_value=100)
    gender = st.selectbox("Select your gender?", list(gender_options.keys()))
    severity = st.selectbox("How severe is it?", list(severity_options.keys()))

    disease_idx = diseases_options[disease]
    gender_idx = gender_options[gender]
    severity_idx = severity_options[severity]

    if st.button('Get Remedy'):
        input_data = [[disease_idx, age, gender_idx, severity_idx]]
        prediction = model.predict(input_data)[0]
        st.write(f'You should try:')
        st.header(prediction)
        st.write(medicine_descriptions.get(prediction, ""))

if __name__ == '__main__':
    main()
