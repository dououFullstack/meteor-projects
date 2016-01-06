Template.projectsNew.rendered = function() {
  $(document)
      .on('focus', 'textarea,input,select', function() {
        $body.css('position','absolute');
        $body.addClass('fixfixed');
      })
      .on('blur', 'textarea,input,select', function() {
        $body.css('position','static');
        $body.removeClass('fixfixed');
      });
};

Template.projectsNew.helpers({
});

Template.projectsNew.events ({
  "focus textarea, focus input, focus select": function(e) {
    var $body = $('body');
    $body.css('position','absolute');
    $body.addClass('fixfixed');
  },
  "blur textarea, blur input, blur select": function(e) {
    var $body = $('body');
    $body.css('position','static');
    $body.removeClass('fixfixed');
  }
});

AutoForm.hooks({
  'projectForm': {
    before: {
      insert: function(doc) {
        console.log(doc);
        doc.createdAt = new Date();
        // doc.status = 'ENROLLING';
        return doc;
      }
    },
    onSuccess: function (operation, result, template) {
      console.log('create successfull........');
      Router.go('projectsIndex', {_id: result});
    },

    onError: function(operation, error, template) {
      console.log('failed', error);
    }
  }
});
