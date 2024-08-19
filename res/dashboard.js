"use strict";

import Projects  from './projects.js';
import Exercises from './exercises.js';

class Dashboard {
    projects  = {};
    exercises = {};

    constructor() {
        this.projects  = new Projects();
        this.exercises = new Exercises();
    }
}

export default Dashboard;