'use strict';

const handlebars = require('handlebars');

function handlebarsCompile(data) {
    return handlebars.compile(data.text);
}

function handlebarsRenderer(data, locals) {
    return handlebarsCompile(data)(locals);
}

handlebarsRenderer.compile = handlebarsCompile;

module.exports = handlebarsRenderer;
