export const nodejs = `const axios = require("axios");

const options = {
    method: 'POST',
    url: 'URL',
    data: {
      wavData: "UklGRvyWMQBXQVZFZm ... " // in Base64
    },
    headers: {
      'Authorization': 'YOUR_API_KEY',
    }
  };
  
axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});`

export const python = `import requests

url = 'URL'
api_key = 'YOUR_API_KEY'
wavData = "UklGRvyWMQBXQVZFZm ... " # in Base64

headers = {
    'Authorization': api_key
}

payload = {
    'data': wavData
}

response = requests.post(url, headers=headers, json=payload)

if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print(f'Request failed with status code {response.status_code}')`

export const output = `
{
  "success": true,
  "similarity_score": "1.0",
  "ielts_band": "9",
  "phonetic_transcription": "FEAR IS THE MIND KILLER"
}`
