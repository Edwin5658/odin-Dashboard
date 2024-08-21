"use strict";

class Projects {
    projects = [{
        name : 'Recipe',
        desc : 'My first Odin Project website with some recipes.',
        live : 'https://edwin5658.github.io/odin-recipes/',
        repo : 'https://github.com/Edwin5658/odin-recipes',
        img  : "img/recipes_img.jpg"
    }, {
        name : 'Landing Page',
        desc : 'A landing page with some music features.',
        live : 'https://edwin5658.github.io/odin-landing-page/',
        repo : 'https://github.com/Edwin5658/odin-landing-page',
        img  : 'img/landing-page_img.jpg'
    }, {
        name : 'Rock Paper Scissors',
        desc : 'A simple Rock Paper Scissors game',
        live : 'https://edwin5658.github.io/odin-RPS',
        repo : 'https://github.com/Edwin5658/odin-RPS',
        img  : 'img/RPS_img.jpg'
    }, {
        name : 'Etch-A-Sketch',
        desc : 'A pixel sketch board with features like changing color and pixel size.',
        live : 'https://edwin5658.github.io/odin-sketch/',
        repo : 'https://github.com/Edwin5658/odin-sketch',
        img  : 'img/sketch_img.jpg'
    }, {
        name : 'Calculator',
        desc : 'A calculator app written in Javascipt.',
        live : 'https://edwin5658.github.io/odin-Calc/',
        repo : 'https://github.com/Edwin5658/odin-Calc',
        img  : 'img/calc_img.jpg'
    }, {
        name : 'Sign-up Form',
        desc : 'A Sign-Up Form with Input Validation.',
        live : 'https://edwin5658.github.io/odin-SignupForm/',
        repo : 'https://github.com/Edwin5658/odin-SignupForm',
        img  : 'img/sign-up-form_img.jpg'
    }];

    constructor() {
        this.build();
    } 

    build() {
        const container = document.createElement('div');
        this.projects.forEach(project => {
            const article = document.createElement('article');
            article.innerHTML = this.template(project);
            container.appendChild(article);
        });
        document.getElementById('projects').appendChild(container);
    }

    template(project) {
        return `
            <h4><a href="${project.live}">${project.name}</a></h4>
            <img src="${project.img}" alt="Showcase Image" loading="lazy">
            <p>${project.desc}</p>
            <div>
                <a title="Live Version" href="${project.live}">
                    <svg class="icon-view" viewBox="0 0 24 24"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" /></svg>
                </a>
                <a title="GitHub Repository" href="${project.repo}">
                    <svg class="icon-github" viewBox="0 0 24 24"><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>
                </a>
            </div>
        `;
    }
}

export default Projects;