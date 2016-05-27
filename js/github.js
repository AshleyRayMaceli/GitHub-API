var apiKey = require('./../.env').apiKey;

exports.GitHub = function() {
};

exports.GitHub.prototype.getBasicUserInfo = function(ghusername, displayGitHubInfo, displayErrorMessage) {
  $.get('https://api.github.com/users/' + ghusername +'?access_token=' + apiKey).then(function(response) {
    displayGitHubInfo(ghusername, response.public_repos, response.repos_url.full_name);
  }).fail(function(error){
    displayErrorMessage(ghusername);
    console.log(error.responseJSON.message);
  });
};

exports.GitHub.prototype.getAllRepos = function(ghusername, displayRepos) {
  $.get('https://api.github.com/users/' + ghusername + '/repos').then(function(response) {
    for (var index = 0; index < response.length; index += 1) {
      displayRepos(response[index].name);
    }
  });
};
