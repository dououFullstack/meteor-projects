Template.bizPlanDetail.rendered = function() {
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
  })
};

Template.bizPlanDetail.helpers({
  str2html: function(str) {
   var str2 = str.replace(new RegExp('\r?\n','g'), '<br />');
   return str2;
  },
  introFile: function () {
    var id = this.descPic;
    console.log('id:', id);
    return Pictures.findOne({_id: id});
  },
  competiFile: function () {
    var id = this.competencyPic;
    console.log('id:', id);
    return Pictures.findOne({_id: id});
  },
  teamFile: function () {
    var id = this.teamPic;
    console.log('id:', id);
    return Pictures.findOne({_id: id});
  },
  isAdmin: function (user) {
    user = (typeof user === 'undefined') ? Meteor.user() : user;
    console.log('isadmin', !!user && !!Roles.userIsInRole(user, ['admin']));
    return !!user && !!Roles.userIsInRole(user, ['admin']);
  }


});

Template.bizPlanDetail.events ({
  'click .delete-bizplan': function(e) {
    e.preventDefault();
    var item = this;

    if (confirm("Are you sure?")) {
      Projects.remove(item._id);
      console.log("Deleted!")
    }
    Router.go('bizPlansIndex');
  }
});
