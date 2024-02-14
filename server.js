const express = require("express");
const axios = require("axios");
const fs = require("fs");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const apiKey = process.env.CHATGPT_API_KEY;
const port = process.env.PORT || 3000; // Use process.env.PORT if available, otherwise use 3000

const fonts =
  "Bungee, Chakra Petch, Climate Crisis, Codystar, Creepster, DM Serif Display, Faustina, Grape Nuts, Inter, Inter Tight, JetBrains Mono, M PLUS Code Latin, Mukta, Noto Sans, Odibee Sans, Open Sans, Orbitron, Pirata One, Roboto, Roboto Slab, Rubik, Rubik Doodle Shadow, Rubik Mono One, Share Tech, Share Tech Mono, Source Code Pro, Titillium Web, Ubuntu, Ubuntu Mono, Yanone Kaffeesatz, Zilla Slab Highlight";

const topicPrompts = [
  "create an animated p5.js sketch and integrate it in the website",
  "Relate the topic to cats",
  "Relate the topic to pens",
  "relate the topic to vampires",
  "use as many colors as possible",
  "Take a religious spin on the topic",
  "Write the content in the language of Donald Trump",
  'Create a delightful and child-friendly one-page website. Design an engaging website suitable for children of various ages. Start with a whimsical and inviting title that captures the essence of the theme. Include a brief introduction to the topic, highlighting their playful and entertaining nature. Organize the content into sections such as "A Story," "Fun Facts," and "10 Funny Names" all relating to the topic. Design the website with vibrant and cheerful colors, incorporating cartoonish elements to make it visually appealing for children. Use friendly and easy-to-read fonts. Consider adding interactive elements like buttons or simple games to enhance engagement. Remember to maintain simplicity in navigation and layout, ensuring that children can easily explore the content. ',
  "Create a charming and informative one-page website dedicated to the topic, tailored for older ladies. Craft an elegant and welcoming title that resonates with a mature audience. Begin with a warm introduction, highlighting the joy and companionship that the topic can bring to older individuals. Ensure the website is user-friendly with simple navigation and an intuitive layout.",
];

const designPrompts = [
  "Use CSS Grids in an interesting way.",
  "Add CSS Animations",
  "use as many colors as possible",
  "Give some elements hover effects",
  "Apply a style that looks like the website is from the 2000s.",
  "Use fonts and colors that make the website look like it is from the 1950s.",
  "make the website look feminine",
  "make the website look masculine",
  "Use CSS Grids to structure the website",
];

function chooseTopic() {
  const topic = "Name a topic from a randomly selected category. Never choose Quantum Physics or Quantum Mechanics as topics.";
  return topic;
}
let topic2 = chooseTopic();

function getRandomPrompt() {
  const randomIndex = Math.floor(Math.random() * topicPrompts.length);
  const prompt = topicPrompts[randomIndex];
  return prompt;
}
let basePrompt = getRandomPrompt();

function getCombinedPrompt(topic) {
  const prompt = `Output only the HTML for the one-page website in HTML format. Exclude any conversation, comments, markdown or unnecessary text. This is the topic of the website: ${topic}. Fill the site with information on the topic like lists, interesting facts, weird facts and an explanation. If you use facts, never use facts as a title but choose fitting titles instead. Use captivating titles for each part. If the text has less than 500 words add more information. Sometimes add way too much information. ${basePrompt}. Do not use any images. `;
  return prompt;
}

function getRandomDesignPrompt(topic) {
  const randomDesignIndex = Math.floor(Math.random() * designPrompts.length);
  const cssPrompt = `Output only the CSS for a coherent one-page Website. Exclude any conversation, comments, markdown or unnecessary text. The left and right margin of the body should always be at least be 5%. This is the topic of the website: ${topic}. Use colors that fit the topic. ${designPrompts[randomDesignIndex]}. Use one or more of the fonts from this list: ${fonts}. Select fonts that fit the topic. Always use CSS Grids. Sometimes in a useful way, sometimes minimalistically, sometimes do everything in grids and sometimes in a weird way. Use CSS Animations either minimally or overuse them.`;
  return cssPrompt;
}
function getTitlePrompt(topic) {
  const cssPrompt = `Output only a short but very fitting title for the topic ${topic}. You may include this information to write the title: ${basePrompt}. Never use any exclamation marks in the beginning or end of the title.`;
  return cssPrompt;
}
function resetContent() {
  //topic = chooseTopic();
  basePrompt = getRandomPrompt();
}
app.get("/", (req, res) => {
  try {
    //const cssContent = fs.readFileSync("style.css", "utf8");

    const html = `


      <!DOCTYPE html>
      <html>
      <head>
        <title>ChatGPT Website Generator</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bungee&family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Climate+Crisis&family=Codystar:wght@300;400&family=Creepster&family=DM+Serif+Display:ital@0;1&family=Faustina:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Grape+Nuts&family=Inter+Tight:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=M+PLUS+Code+Latin:wght@100;200;300;400;500;600;700&family=Mukta:wght@200;300;400;500;600;700;800&family=Noto+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Odibee+Sans&family=Open+Sans:wght@500;700;800&family=Orbitron:wght@400;500;600;700;800;900&family=Pirata+One&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&family=Rubik+Doodle+Shadow&family=Rubik+Mono+One&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Share+Tech&family=Share+Tech+Mono&family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Yanone+Kaffeesatz:wght@200;300;400;500;600;700&family=Zilla+Slab+Highlight:wght@400;700&display=swap" rel="stylesheet">
      </head>
  
      <style>
      #loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(171, 213, 244, 0.8);
        color: black;
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        font-family: "Ubuntu", sans-serif;
        backdrop-filter: blur(10px);
      }
      .loader {
        width: 15px;
        aspect-ratio: 1;
        position: absolute;
      }
      .loader::before,
      .loader::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 50%;
        background: #000;
      }
      .loader::before {
        box-shadow: -25px 0;
        animation: l8-1 1s infinite linear;
      }
      .loader::after {
        transform: rotate(0deg) translateX(25px);
        animation: l8-2 1s infinite linear;
      }
      
      @keyframes l8-1 {
        100% {
          transform: translateX(25px);
        }
      }
      @keyframes l8-2 {
        100% {
          transform: rotate(-180deg) translateX(25px);
        }
      }
      #head {
        position: fixed;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        font-family: "Ubuntu", sans-serif;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 70px;
        justify-items: center;
        align-items: center;
        background-color: #f1f1f1;
        padding: 10px 2px;
      }
      
      #head h1 {
        font-family: "Ubuntu", sans-serif !important;
        text-align: center;
        color: black;
        text-decoration: none;
        font-size: 30px;
        margin: 10px;
        text-transform: none;
      }
      #generateButton {
        font-family: "Ubuntu", sans-serif !important;
        background-color: grey;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
      
        cursor: pointer;
        border-radius: 12px;
      }
      
      body{
        margin: 0;
        margin-bottom: 70px;
      }
      #content-container{
        margin-bottom: 70px;
      }
      
      
      #startContent{
        background-color: antiquewhite;
        font-size: 20pt;
        color: black;
        text-align: center;
        font-family: "Ubuntu", sans-serif;
        margin: 0;
        margin-bottom: 70px;
        height: 92vh;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      #infoContent{
        display: none;
        background-color: white;
        border-radius: 20px;
        font-size: 20pt;
        color: black;
        text-align: center;
        font-family: "Ubuntu", sans-serif;
        margin: 0;
        margin-bottom: 70px;
        height: 92vh;
        overflow: hidden;
      }
        </style>
      <body>
      <div id="head">
      <h1 id="startPage">ChatGPT Website Generator</h1>
        <div><button id="generateButton">Generate new page!</button></div>
        <div>more information</div>
      </div>
      <div id="startContent">
      <p>This is a Website Generator using ChatGPT. Click the button to generate a new page.</p>
      </div>
      <div id="infoContent">
      <p>This Website was created by Anna Brauwers for the Machine Learning II Class from Alexander Walmsley at Filmuniversity Babelsberg KONRAD WOLF in the Masters prorgam Creative Technologies.</p>
      <p>This projects explores what happens when ChatGPT is not only the creator of content for a website but also the designer.</p>   
      </div>
        <div id="content-container">
       
        </div>
        
        <div id="loader">
        <div class="loader"></div>
        <br><br> <br><br>
        [the loading of a new page can take up to 60 seconds, please be patient!]
      </div>
    
 
      <script>
      document.getElementById("startPage").addEventListener("click", async function () {
      
          document.getElementById("startContent").style.display = "flex";

      });
      document.getElementById("generateButton").addEventListener("click", async function () {
        try {
          // Display loader while waiting for response
          document.getElementById("loader").style.display = "flex";
          document.getElementById("generateButton").style.display = "none";
  
          const response = await fetch('/generate-html');
          const html = await response.text();
          document.getElementById("content-container").innerHTML = html;
  
          // Hide loader after HTML is loaded
          document.getElementById("loader").style.display = "none";
          document.getElementById("startContent").style.display = "none";
          document.getElementById("generateButton").style.display = "block";
        } catch (error) {
          console.error('Error fetching HTML:', error.message);
  
          // Hide loader in case of an error
          document.getElementById("loader").style.display = "none";
        }
      });
    </script>
      </body>
      </html>
    `;

    res.send(html);
  } catch (error) {
    console.error("Error handling request:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/generate-html", async (req, res) => {
  try {
    const isReloaded =
      !req.headers.referer ||
      req.headers.referer !==
        req.protocol + "://" + req.get("host") + req.originalUrl;
    if (isReloaded) {
      console.log("yes");
      resetContent();
    } else {
      console.log("no");
    }
    const topic = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are ChatGPT and your task is to randomly choose a topic from a random category from your entire knowledge. Do not answer anything else except for that topic.",
          },
          {
            role: "user",
            content:
              "Randomly select a catergory and then randomly select a topic from that category.",
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    const chosenTopic = topic.data.choices[0].message.content;
    const prompt = getCombinedPrompt(chosenTopic);
    const designPrompt = getRandomDesignPrompt(chosenTopic);
    const titlePrompt = getTitlePrompt(chosenTopic);

    const title = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a pro texter and you won awards writing short and precise titles. Your job is writing website titles, so they can not be more than 60 characters long. Your output should start with text, no exclamation marks in the beginning or end.",
          },
          { role: "user", content: titlePrompt },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    const content = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a code generator who is designed to output HTML. The HTML contains information on a specific topic that you randomly choose. Use different colors to reflect the topic. Choose interesting fonts to represent the topic. You can go crazy in the css part. Try to come up with unusual layouts and font-sizing. The website does not need to have common elements. The first line of your output should be the opening body-tag and the last line is the closing body-tag.",
          },
          { role: "user", content: prompt },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    const design = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a code generator who is designed to output CSS. The output is only the CSS that belongs inside the style-tag. Use different colors to reflect the topic. Choose interesting fonts to represent the topic. Try to come up with unusual layouts and font-sizing. The website does not need to have common elements. The first line of your output should be the first line of CSS and the last line is the Curly-Bracket closing the last CSS Element.",
          },
          { role: "user", content: designPrompt },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    const chatGPTResponseContent = content.data.choices[0].message.content;
    const chatGPTResponseDesign = design.data.choices[0].message.content;
    const chatGPTResponseTitle = title.data.choices[0].message.content;
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${chatGPTResponseTitle}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bungee&family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Climate+Crisis&family=Codystar:wght@300;400&family=Creepster&family=DM+Serif+Display:ital@0;1&family=Faustina:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Grape+Nuts&family=Inter+Tight:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=M+PLUS+Code+Latin:wght@100;200;300;400;500;600;700&family=Mukta:wght@200;300;400;500;600;700;800&family=Noto+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Odibee+Sans&family=Open+Sans:wght@500;700;800&family=Orbitron:wght@400;500;600;700;800;900&family=Pirata+One&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&family=Rubik+Doodle+Shadow&family=Rubik+Mono+One&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Share+Tech&family=Share+Tech+Mono&family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Yanone+Kaffeesatz:wght@200;300;400;500;600;700&family=Zilla+Slab+Highlight:wght@400;700&display=swap" rel="stylesheet">

      </head>
      <style>
        ${chatGPTResponseDesign}
      </style>
      ${chatGPTResponseContent}
      </html>
    `;

    res.send(html);
  } catch (error) {
    console.error(
      "Error fetching ChatGPT API:",
      error.response ? error.response.data : error.message
    );
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
