var apiKey = require('./../.env').apiKey;

exports.GitHub = function() {
}

exports.GitHub.prototype.getRepos = function(){
  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
    console.log(JSON.stringify(response));
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
