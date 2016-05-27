var GitHub = require('./../js/github.js').GitHub;
var getRepos = require('./../js/github.js').getRepos;

var displayGitHubInfo = function(username, repos) {
  $('.output').text("Here is the info about " + username + "'s GitHub account");
  $('.allRepos').text("Number of public repositories: " + repos);
};

var displayErrorMessage = function(username) {
  $('.output').text(username + "'s GitHub account was not found.");
};

$(document).ready(function() {
  var newGitHubObject = new GitHub();

  $('#findUsername').click(function(){
    var userName = $('#username').val();
    $('#username').val("");
    newGitHubObject.getRepos(userName, displayGitHubInfo, displayErrorMessage);
  });
});
