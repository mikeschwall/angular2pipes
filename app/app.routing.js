"use strict";
var course_first_1 = require('./course.first');
var course_second_1 = require('./course.second');
var course_third_1 = require('./course.third');
var router_1 = require('@angular/router');
var APP_ROUTES = [
    { path: "", component: course_first_1.FirstComponent },
    { path: "second", component: course_second_1.SecondComponent },
    { path: "third", component: course_third_1.ThirdComponent }
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map