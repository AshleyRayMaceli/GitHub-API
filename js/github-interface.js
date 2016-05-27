var GitHub = require('./../js/github.js').GitHub;
var getBasicUserInfo = require('./../js/github.js').getBasicUserInfo;
var getAllRepos = require('./../js/github.js').getAllRepos;

var displayGitHubInfo = function(username, repos, repoURL, profileURL) {
  $('.output').html("Here is info about the GitHub account" + "<a href='" + profileURL + "'><h2>" + username + "</h2></a>");
  $('.allRepos').text("Number of public repositories: " + repos);
  $('.repoURL').text("View " + username + "'s repositories: " + repoURL);
};

var displayErrorMessage = function(username) {
  $('.output').text(username + "'s GitHub account was not found.");
};

var displayRepos = function(repoName, repoDescription, repoURL, dateCreated) {
  $('.repoInfo').append("<div class='col-xs-4 repoBox'>" +
                        "<a href='" + repoURL + "'><h2>" + repoName + "</h2></a>" +
                        "<h3> Created: " + moment(dateCreated).format("MM/DD/YYYY") + "</h3>" +
                        "<p>" + repoDescription + "</p>" +
                        "<div>");
};

$(document).ready(function() {
  var newGitHubObject = new GitHub();

  $('.inputUserName').submit(function(event) {
    event.preventDefault();
    var userName = $('#usernameInput').val();
    $('#usernameInput').val("");
    newGitHubObject.getBasicUserInfo(userName, displayGitHubInfo, displayErrorMessage);
    newGitHubObject.getAllRepos(userName, displayRepos);
  });
});
