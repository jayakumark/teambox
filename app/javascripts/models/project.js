(function () {
  var Project = {};

  /* Returns the class name
   *
   * @return {String}
   */
  Project.className = function () {
    return 'Project';
  };

  /* Get the public url
   *
   * @return {String}
   */
  Project.publicUrl = function () {
    return '/projects/' + this.get('permalink');
  };


  /* returns user names in a `autocompleter` format
   *
   * @return {String}
   */
  Project.getAutocompleterUserNames = function () {
    function format(login, name) {
      return '@' + login + ' <span class="informal">' + name + '</span>';
    }

    function parse(person) {
      return format(person.get('user').username, person.get('user').first_name + ' ' + person.get('user').last_name);
    }

    return _.map(this.get('people').models, parse).concat([format('all', 'All people in project')]);
  };

  Project.url = function () {
    return "/api/1/projects/" + this.get('id');
  };

  // exports
  Teambox.Models.Project = Teambox.Models.Base.extend(Project);

}());