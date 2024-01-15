const express = require('express');
const axios = require('axios');
require('dotenv').config();

const myModule = require('./topics');
let topics = myModule.hello();

const app = express();
const port = 4000;

const apiKey = process.env.CHATGPT_API_KEY;

const prompts = [
  'Use CSS Grids in an interesting way.',
  'Add CSS Animations',
  'Relate the topic to cats',
  'use as many colors as possible',
  'Take a religious spin on the topic',
  'Write the content in the language of Donald Trump',
  'Give some elements hover effects',
  'Apply a style that looks like the website is from the 2000s.',
  'Use fonts and colors that make the website look like it is from the 1950s.',
  'Create a delightful and child-friendly one-page website. Design an engaging website suitable for children of various ages. Start with a whimsical and inviting title that captures the essence of the theme. Include a brief introduction to the topic, highlighting their playful and entertaining nature. Organize the content into sections such as "A Story," "Fun Facts," and "10 Funny Names" all relating to the topic. Design the website with vibrant and cheerful colors, incorporating cartoonish elements to make it visually appealing for children. Use friendly and easy-to-read fonts. Consider adding interactive elements like buttons or simple games to enhance engagement. Remember to maintain simplicity in navigation and layout, ensuring that children can easily explore the content. ',
  'Create a charming and informative one-page website dedicated to the topic, tailored for older ladies. Craft an elegant and welcoming title that resonates with a mature audience. Begin with a warm introduction, highlighting the joy and companionship that the topic can bring to older individuals. Ensure the website is user-friendly with simple navigation and an intuitive layout.',
];



function getRandomPrompt() {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    const randomTopic = Math.floor(Math.random() * topics.length);
     const prompt = `Output only the HTML and CSS code for the one-page website in HTML format. Exclude any conversation, comments, or unnecessary text. Ensure that the HTML file includes embedded CSS styles. The left and right margin of the body element should at least be 5%. Use CSS Grids to structure the website. This is the topic of the website: ${topics[randomTopic]}. Fill the site with information on the topic like lists, interesting facts and an explanation. Use colors that fit the topic. ${prompts[randomIndex]} Do not use any images. `;
  
    return prompt;
  }
  
app.get('/', async (req, res) => {
  try {
    const prompt = getRandomPrompt();

    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a code generator who is designed to output HTML. The HTML contains information on a specific topic that you randomly choose. Use different colors to reflect the topic. Choose interesting fonts to represent the topic. You can go crazy in the css part. Try to come up with unusual layouts and font-sizing. The website does not need to have common elements. The first line of your output should be the opening html-tag and the last line is the closing html-tag.' },
          { role: 'user', content: prompt },
        ],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      }
    );

    const chatGPTResponse = response.data.choices[0].message.content;

    const html = `
     ${chatGPTResponse}
    `;

    res.send(html);
  } catch (error) {
    console.error('Error fetching ChatGPT API:', error.response ? error.response.data : error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
