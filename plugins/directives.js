import Vue from 'vue';
const hl = require('highlight.js');

Vue.directive('highlight', {
  deep: true,
  bind: function(el, binding) {
    let targets = el.querySelectorAll('pre');
    targets.forEach(target => {
      if (binding.value) {
        target.textContent = binding.value;
      }
      hl.highlightBlock(target);
    });
  },

  componentUpdated: function(el, binding) {
    let targets = el.querySelectorAll('pre');
    targets.forEach(target => {
      if (binding.value) {
        target.textContent = binding.value;
        hl.highlightBlock(target);
      }
    });
  }
});

