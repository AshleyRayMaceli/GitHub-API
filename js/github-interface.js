var GitHub = require('./../js/github.js').GitHub;
var getRepos = require('./../js/github.js').getRepos;

$(document).ready(function() {
  var newGitHubObject = new GitHub();

  $('#findUsername').click(function(){
    var userName = $('#username').val();
    $('#username').val("");
    newGitHubObject.getRepos(userName);
  });
});
