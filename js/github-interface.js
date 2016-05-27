var getRepos = require('./../js/github.js').getRepos;

$(document).ready(function() {
  $('#findUsername').click(function(){
    getRepos();
  });
});
