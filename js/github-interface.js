var GitHub = require('./../js/github.js').GitHub;
var getRepos = require('./../js/github.js').getRepos;

$(document).ready(function() {
  $('#findUsername').click(function(){
    var newGitHubObject = new GitHub();
    newGitHubObject.getRepos();
  });
});
