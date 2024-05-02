import streamlit as st
import pickle

with open('drugTree.pkl', 'rb') as f:
    model = pickle.load(f)

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

    disease = st.selectbox('What Disease do you have?', list(diseases_options.keys()))
    age = st.number_input("What's your age", value=0)
    gender = st.selectbox("Select your gender?", list(gender_options.keys()))
    severity = st.selectbox("How severe is it?", list(severity_options.keys()))

    disease_idx = diseases_options[disease]
    gender_idx = gender_options[gender]
    severity_idx = severity_options[severity]

    if st.button('Predict'):
        input_data = [[disease_idx, age, gender_idx, severity_idx]]
        prediction = model.predict(input_data)[0]
        st.write(f'You should try:', end='')
        st.header(prediction)

if __name__ == '__main__':
    main()
