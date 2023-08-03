# Lark API Readme

<div align="left">
  <img src="https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white&style=for-the-badge" height="20" alt="nextjs logo"  />
  <img width="12" />
  <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=for-the-badge" height="20" alt="react logo"  />
  <img width="12" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge" height="20" alt="typescript logo"  />
  <img width="12" />
  <img src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white&style=for-the-badge" height="20" alt="python logo"  />
  <img width="12" />
  <img src="https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white&style=for-the-badge" height="20" alt="prisma logo"  />
  <img width="12" />
  <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?logo=tailwindcss&logoColor=black&style=for-the-badge" height="20" alt="tailwindcss logo"  />
  <img width="12" />
  <img src="https://img.shields.io/badge/Redis-DC382D?logo=redis&logoColor=white&style=for-the-badge" height="20" alt="redis logo"  />
</div>

## What is it?

- Lark API is a speech assessment REST API built using NextJS in Typescript.
- It provides accuracy scores, speech to text transcription, and the projected IELTS pronunciation band.
- It allows English learning apps and websites to assess and provide real-time feedback on the users’ pronunciation.

## How does it work?

### The Machine Learning part:

<div align="center"><img src="https://i.imgur.com/veWTSgg.png" width="600" alt="ML"  />
</div>

- Lark utilizes the Wav2Vec2 model from Meta for analyzing the speech sample.
- It converts the speech to it’s phonetic transcription (S2P) using zero-shot cross-lingual recognition.
- After recognizing the phonetics of the speech, it compares it with the ideal pronunciation of the transcribed speech using the Jaro-Winkler string similarity algorithm.

### The Backend API part:

- The API is written completely in NextJS using next-pages routing.
- I have used next-auth for user authentication via GitHub and maintaining/persisting sessions.
- I used Redis for rate-limiting the API based on the IP of the call.

### The Frontend part:

- The Frontend is written using NextJS in Typescript.
- I opted for TailwindCSS as the CSS framework for this project.
- For the tables and icons, Material UI has been used.

### The Database part:


- I used Prisma ORM on top of a PlanetScale database which is a serverless MySQL DB.
- Here is the UML Diagram for the database:
<div align="center"><img src="https://i.imgur.com/jjlVtWj.png" width="600" alt="UML"  />
</div>

### ML Models used

- [facebook/wav2vec2-xlsr-53-espeak-cv-ft](https://huggingface.co/facebook/wav2vec2-xlsr-53-espeak-cv-ft)
- [facebook/wav2vec2-base-960h](https://huggingface.co/facebook/wav2vec2-base-960h)

## References

- [[2109.11680] Simple and Effective Zero-shot Cross-lingual Phoneme Recognition (arxiv.org)](https://arxiv.org/abs/2109.11680)
- [luozhouyang/python-string-similarity (github.com)](https://github.com/luozhouyang/python-string-similarity#python-string-similarity)
- [Hugging Face JS libraries](https://huggingface.co/docs/huggingface.js/index)
