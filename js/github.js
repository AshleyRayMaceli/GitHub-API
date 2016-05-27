var apiKey = require('./../.env').apiKey;

exports.GitHub = function() {
};

exports.GitHub.prototype.getRepos = function(ghusername, displayGitHubInfo, displayErrorMessage) {
  $.get('https://api.github.com/users/' + ghusername +'?access_token=' + apiKey).then(function(response) {
    displayGitHubInfo(ghusername, response.public_repos);
    console.log(JSON.stringify(response));
  }).fail(function(error){
    displayErrorMessage(ghusername);
    console.log(error.responseJSON.message);
  });
};
