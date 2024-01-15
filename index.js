const express = require('express');
const axios = require('axios');
require('dotenv').config();

const myModule = require('./topics');
let topics = myModule.hello();

const app = express();
const port = 4000;

const apiKey = process.env.CHATGPT_API_KEY; // Replace with your ChatGPT API key

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

// const colors = [
//     ["50514f","b4adea", 'fdfff7', '59ffa0', 'ffed65'],
//     ["a63a50","f0e7d8","ab9b96","a1674a","ba6e6e"],
//     ["ef476f","ffd166","06d6a0","118ab2","073b4c"],
//     ["d1c6ad","bbada0","a1869e","797596","0b1d51"],
//     ["395e66","387d7a","32936f","26a96c","2bc016"],
//     ["4b4237","d5a021","ede7d9","a49694","736b60"],
//     ["0d0630","18314f","384e77","8bbeb2","e6f9af"],
//     ["210f04","452103","690500","934b00","bb6b00"],
// ];


function getRandomPrompt() {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    // const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomTopic = Math.floor(Math.random() * topics.length);
 
    //const prompt = `Output only the HTML and CSS code for the one-page website in HTML format. Exclude any conversation, comments, or unnecessary text. Ensure that the HTML file includes embedded CSS styles. ${prompts[randomIndex]} Include all 5 colors ${randomColor}.`;
    const prompt = `Output only the HTML and CSS code for the one-page website in HTML format. Exclude any conversation, comments, or unnecessary text. Ensure that the HTML file includes embedded CSS styles. The left and right margin of the body element should at least be 5%. Use CSS Grids to structure the website. This is the topic of the website: ${topics[randomTopic]}. Fill the site with information on the topic like lists, interesting facts and an explanation. Use colors that fit the topic. ${prompts[randomIndex]} Do not use any images. `;
  
    return prompt;
  }
  
app.get('/', async (req, res) => {
  try {
    const prompt = getRandomPrompt();

    // Fetch a response from the ChatGPT API
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo', // Specify the model parameter
        messages: [
          { role: 'system', content: 'You are a code generator who is designed to output HTML. The HTML contains information on a specific topic that you randomly choose. Use different colors to reflect the topic. Choose interesting fonts to represent the topic. You can go crazy in the css part. Try to come up with unusual layouts and font-sizing. The website does not need to have common elements. If suitable add hyperlinks on the to wikipedia, imdb, goodreads. The first line of your output should be the opening html-tag and the last line is the closing html-tag.' },
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

    // Generate a simple HTML page with the ChatGPT response
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
