# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./assets/images/Screenshot%202023-06-08%20220557.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/news-homepage-14D4DdApBQ](https://www.frontendmentor.io/solutions/news-homepage-14D4DdApBQ)
- Live Site URL: [https://tahobbit11.github.io/News-homepage/](https://tahobbit11.github.io/News-homepage/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JS

### What I learned

```html
<div class="new-story-article-wrapper">
        <div class="new-story">
          <div id="web-3"></div>
          <div class="story">
            <h1>The Bright Future of Web 3.0?</h1>
            <div class="story-content">
              <p>  
                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                But is it really fulfilling its promise?
              </p>
              <button class="read">Read More</button>
            </div>
          </div>
        </div>

        <div class="new-articles">
          <h2>New</h2>
          <div class="article">
            <h3>Hydrogen vs Electric Cars</h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            <div class="article-buffer"></div>
          </div>
          <div class="article">
            <h3>The downsides of AI Artistry</h3>
            <p>What are the possible adverse effects of on-demand AI image generation?</p>
            <div class="article-buffer"></div>
          </div>
          <div class="article">
            <h3>Is VC Funding Drying Up</h3>
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </div>
        </div>
      </div>
```
```css
    #close {
      height: 20px;
      width: 40px;
      border: none;
      background-color: transparent;
      position: fixed;
      left: 80%;
      top: 4%;
    }

    #options {
        position: fixed;
        top: 0%;
        left: 34%;
        background-color: white;
        width: 350px;
        height: 100vh;
    }

    #options ul {
      position: fixed;
      top: 12.5%;
    }

    #options ul li {
      font-size: 1.2em;
      padding-bottom: 30px;
    }
```
```js
const widthChange = (width) => {
    console.log(width.matches)
    if(width.matches) {
        buttonPressedOpen();
        closeButton.style.display = "none";
        body.style.background = "white"
    } else {
        buttonPressedClose();
    }
}
```

### Continued development

In the future once I learn how to flawlessly change elements using JS I will go back and change it for when it changes over from tablet to phone and vice versa

## Author

- Frontend Mentor - [@tahobbit11](https://www.frontendmentor.io/profile/tahobbit11)
