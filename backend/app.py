from flask import Flask, request, jsonify
import pickle

app = Flask(__name__)

with open('drugTree.pkl', 'rb') as f:
    model = pickle.load(f)

@app.route('/predict', methods=['GET'])
def predict():
    data = request.get_json()

    input_data = [data['disease'], data['age'], data['gender'], data['severity']]
    prediction = model.predict([input_data])[0]

    return prediction

if __name__ == '__main__':
    app.run(debug=True)
