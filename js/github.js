var apiKey = require('./../.env').apiKey;

exports.GitHub = function() {
}

exports.GitHub.prototype.getRepos = function(ghusername){
  $.get('https://api.github.com/users/' + ghusername +'?access_token=' + apiKey).then(function(response){
    $('#output').text("Here is the info about " + ghusername + "'s GitHub account");
    console.log(JSON.stringify(response));
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
