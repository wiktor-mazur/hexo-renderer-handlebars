/* global hexo */

'use strict';

var renderer = require('./lib/renderer');

hexo.extend.renderer.register('handlebars', 'html', renderer, true);
hexo.extend.renderer.register('hbs', 'html', renderer, true);
