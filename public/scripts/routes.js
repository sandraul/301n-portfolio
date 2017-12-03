'use strict';

page('/', controller.showMenuContent('home'));
page('/about', controller.showMenuContent('about'));
page('/skills', controller.showMenuContent('skills'));
page('/projects', controller.showMenuContent('projects'));

page();
