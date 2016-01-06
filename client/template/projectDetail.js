Template.projectDetail.rendered = function() {
};

Template.projectDetail.helpers({
  str2html: function(str) {
   var str2 = str.replace(new RegExp('\r?\n','g'), '<br />');
   return str2;
  },
  file: function () {
    var id = this.logo;
    console.log('id:', id);
    return Pictures.findOne({_id: id});
  },
  isAdmin: function (user) {
    user = (typeof user === 'undefined') ? Meteor.user() : user;
    console.log('isadmin', !!user && !!Roles.userIsInRole(user, ['admin']));
    return !!user && !!Roles.userIsInRole(user, ['admin']);
  }


});

Template.projectDetail.events ({
  'click .delete-project': function(e) {
    e.preventDefault();
    var item = this;

    if (confirm("Are you sure?")) {
      Projects.remove(item._id);
      console.log("Deleted!")
    }
    Router.go('projectsIndex');

  }
});
