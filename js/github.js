var apiKey = require('./../.env').apiKey;

exports.GitHub = function() {
};

exports.GitHub.prototype.getRepos = function(ghusername, displayGitHubInfo) {
  $.get('https://api.github.com/users/' + ghusername +'?access_token=' + apiKey).then(function(response) {
    displayGitHubInfo(ghusername);
    console.log(JSON.stringify(response));
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
