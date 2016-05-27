var GitHub = require('./../js/github.js').GitHub;
var getRepos = require('./../js/github.js').getRepos;
// var displayGitHubInfo = require('./../js/github.js').displayGitHubInfo;

var displayGitHubInfo = function(username) {
  $('.output').text("Here is the info about " + username + "'s GitHub account");
};

$(document).ready(function() {
  var newGitHubObject = new GitHub();

  $('#findUsername').click(function(){
    var userName = $('#username').val();
    $('#username').val("");
    newGitHubObject.getRepos(userName, displayGitHubInfo);
  });
});
