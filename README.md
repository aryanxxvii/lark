# Lark API Readme

## What is it?

- Lark API is a speech assessment REST API built using FastAPI in Python.
- It provides accuracy scores, speech to text transcription, and the projected IELTS pronunciation band.
- It allows English learning apps and websites to assess and provide real-time feedback on the users’ pronunciation.

## How does it work?

### ML:

<div align="center"><img src="https://i.imgur.com/veWTSgg.png" width="600" alt="ML"  />
</div>

- Lark utilizes the Wav2Vec2 model from Meta for analyzing the speech sample.
- It converts the speech to it’s phonetic transcription (S2P) using zero-shot cross-lingual recognition.
- After recognizing the phonetics of the speech, it compares it with the ideal pronunciation of the transcribed speech using the Jaro-Winkler string similarity algorithm.

### Backend:

- The API is written completely in FastAPI with MongoDB as the database.

### The Frontend part:

- The Frontend is written using ReactJS and TailwindCSS.

### ML Models used

- [facebook/wav2vec2-xlsr-53-espeak-cv-ft](https://huggingface.co/facebook/wav2vec2-xlsr-53-espeak-cv-ft)
- [facebook/wav2vec2-base-960h](https://huggingface.co/facebook/wav2vec2-base-960h)

## References

- [[2109.11680] Simple and Effective Zero-shot Cross-lingual Phoneme Recognition (arxiv.org)](https://arxiv.org/abs/2109.11680)
- [luozhouyang/python-string-similarity (github.com)](https://github.com/luozhouyang/python-string-similarity#python-string-similarity)
- [Hugging Face JS libraries](https://huggingface.co/docs/huggingface.js/index)
