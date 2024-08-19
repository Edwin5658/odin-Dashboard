"use strict";

class Exercises {
    exercises = [
    // javascript
    {
        name : 'Reverse String',
        desc : 'Write a function that returns its reversed input.',
        link : 'https://github.com/TheOdinProject/javascript-exercises/tree/main/03_reverseString',
        type : 'js'
    }, { 
        name : 'Sum All',
        desc : 'Implement a function that returns the sum of every integer between (and including) 2 positive integers.',
        link : 'https://github.com/TheOdinProject/javascript-exercises/tree/main/05_sumAll',
        type : 'js'
    }, {
        name : 'Leap Years',
        desc : 'Create a function that determines whether a given year is a leap year.',
        link : 'https://github.com/TheOdinProject/javascript-exercises/tree/main/06_leapYears',
        type : 'js'
    }, {
        name : 'Palindromes',
        desc : 'Write a function that determines whether a given string is a palindrome.',
        link : 'https://github.com/TheOdinProject/javascript-exercises/tree/main/09_palindromes',
        type : 'js'
    }, {
        name : 'Fibonacci',
        desc : 'Create a function that returns a specific member of the Fibonacci sequence.',
        link : 'https://github.com/TheOdinProject/javascript-exercises/tree/main/10_fibonacci',
        type : 'js'
    }, {
        name : 'Find the Oldest',
        desc : 'Given an array of objects representing people with a birth and death year, return the oldest person.',
        link : 'https://github.com/TheOdinProject/javascript-exercises/tree/main/12_findTheOldest',
        type : 'js'
    }, 
    // CSS
    {
        name : 'Margin and Padding',
        desc : 'Edit the margin and padding for a webpage',
        link : 'https://github.com/TheOdinProject/css-exercises/tree/main/margin-and-padding/01-margin-and-padding-1',
        type : 'css'
    }, {
        name : 'Descendant Combinator',
        desc : 'Apply styles to elements that are descendants of another element',
        link : 'https://github.com/TheOdinProject/css-exercises/tree/main/foundations/05-descendant-combinator',
        type : 'css'
    }, {
        name : 'Flex Header',
        desc : 'Use flexbox rules to create this a webpage header style',
        link : 'https://github.com/TheOdinProject/css-exercises/tree/main/flex/02-flex-header',
        type : 'css'
    }, {
        name : 'Flex Layout',
        desc : 'Use flexbox with other css styles to create a webpage style',
        link : 'https://github.com/TheOdinProject/css-exercises/tree/main/flex/06-flex-layout',
        type : 'css'
    }, {
        name : 'Holy Grail Layout with Grid',
        desc : 'Create a Holy Grail Layout using Grid',
        link : 'https://github.com/TheOdinProject/css-exercises/tree/main/grid/01-grid-layout-1',
        type : 'css'
    }, {
        name : 'Responsive Holy Grail',
        desc : 'Create a responsive Holy Grail Layout using Grid',
        link : 'https://github.com/TheOdinProject/css-exercises/tree/main/grid/02-grid-layout-2',
        type : 'css'
    }];

    constructor() {
        this.build();
    }

    build() {
        const javascript  = document.getElementById('javascript');
        const CSS = document.getElementById('CSS');
        const js = document.createElement('article');
        const css = document.createElement('article');
        this.exercises.forEach(exercise => {
            if (exercise.type === 'js') {
                js.innerHTML += this.template(exercise);
            } else {
                css.innerHTML += this.template(exercise);
            }
        });
        javascript.appendChild(js);
        CSS.appendChild(css);
    }

    template(exercise) {
        return `
            <h4><a href="${exercise.link}">${exercise.name}</a></h4>
            <p>${exercise.desc}</p>
        `;
    }
}

export default Exercises;