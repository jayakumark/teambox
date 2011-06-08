(function  () {

  var People = {
  };

  People.initialize = function (options) {
    options = options || {};
    this.project_id = options.project_id;
  };

  People.parse = function (response) {
    return _.parseFromAPI(response);
  };

  People.url = function () {
    return '/api/1/projects/' + this.project_id + '/people';
  };

  // exports
  Teambox.Collections.People = Teambox.Collections.Base.extend(People);

}());