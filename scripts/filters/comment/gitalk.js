/* global hexo */

'use strict';

const path = require('path');
const priority = hexo.config.inject_priority || {};

// Add comment
hexo.extend.filter.register('theme_inject', function(injects) {
  let theme = hexo.theme.config;
  if (!theme.gitalk.enable) return;

  injects.comment.raw('gitalk', '<div class="comments" id="gitalk-container"></div>', {}, {cache: true});

  injects.bodyEnd.file('gitalk', path.join(hexo.theme_dir, 'layout/_third-party/comments/gitalk.swig'));

}, priority.gitalk);
