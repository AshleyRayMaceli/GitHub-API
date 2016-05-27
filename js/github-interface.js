var GitHub = require('./../js/github.js').GitHub;
var getBasicUserInfo = require('./../js/github.js').getBasicUserInfo;
var getAllRepos = require('./../js/github.js').getAllRepos;

var displayGitHubInfo = function(username, repos, repoURL) {
  $('.output').text("Here is the info about " + username + "'s GitHub account");
  $('.allRepos').text("Number of public repositories: " + repos);
  $('.repoURL').text("View " + username + "'s repositories: " + repoURL);
};

var displayErrorMessage = function(username) {
  $('.output').text(username + "'s GitHub account was not found.");
};

var displayRepos = function(repoName, repoDescription, repoURL) {
  $('.repoInfo').append("<div class='col-xs-4 repoBox'>" +
                        "<a href='" + repoURL + "'><h2>" + repoName + "</h2></a>" +
                        "<p>" + repoDescription + "</p>" +
                        "<div>");
};

$(document).ready(function() {
  var newGitHubObject = new GitHub();

  $('.inputUserName').submit(function(event) {
    event.preventDefault();
    var userName = $('#username').val();
    $('#username').val("");
    newGitHubObject.getBasicUserInfo(userName, displayGitHubInfo, displayErrorMessage);
    newGitHubObject.getAllRepos(userName, displayRepos);
  });
});
