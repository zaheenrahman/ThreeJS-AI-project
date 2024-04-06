from flask import Flask, request, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This is important for avoiding Cross-Origin Resource Sharing (CORS) errors in your React app

API_URL = "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0"
headers = {"Authorization": "Bearer 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"}

@app.route('/generate-image', methods=['POST'])
def generate_image():
    content = request.json
    prompt = content.get('prompt')  # Get the prompt from the request
    if not prompt:
        return jsonify({"error": "No prompt provided"}), 400

    response = requests.post(API_URL, headers=headers, json={"inputs": prompt})
    if response.status_code == 200:
        image_data = response.content
        # Convert image bytes to base64 string to send back to the client
        import base64
        image_base64 = base64.b64encode(image_data).decode('utf-8')
        return jsonify({"image": image_base64})
    else:
        return jsonify({"error": "Failed to generate image"}), 500

if __name__ == '__main__':
    app.run(debug=True)