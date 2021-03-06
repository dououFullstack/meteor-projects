Template.bizPlansIndex.rendered = function() {
};

Template.bizPlansIndex.helpers({
  str2html: function(str) {
   var str2 = str.replace(new RegExp('\r?\n','g'), '<br />');
   return str2;
  },
  file: function () {
    var id = this.descPic;
    console.log('id:', id);
    return Pictures.findOne({_id: id});
  },
  isAdmin: function (user) {
    user = (typeof user === 'undefined') ? Meteor.user() : user;
    console.log('isadmin', !!user && !!Roles.userIsInRole(user, ['admin']));
    return !!user && !!Roles.userIsInRole(user, ['admin']);
  }

});

Template.bizPlansIndex.events ({

});
