from flask import Flask, request, jsonify
from flask_cors import CORS
import streamlit as st

app = Flask(__name__)
CORS(app)  # This will allow all domains by default

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    # Perform the prediction logic with your model
    prediction = some_model_predict_function(data)
    return jsonify({'prediction': prediction})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
