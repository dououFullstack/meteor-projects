Template.projectEdit.rendered = function() {
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

Template.projectEdit.helpers({
});

Template.projectEdit.events ({
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
  'projectFormUpdate': {
    before: {
      update: function(doc) {
        console.log("AutoForm Hook update...");
        doc.updatedAt = new Date();
        return doc;
      }
    },
    onSuccess: function(operation, result, template) {
      console.log("onSuccess update...");
      Router.go('projectsIndex', {_id: this.docId});
    },

    onError: function(operation, error, template) {
      console.log('修改失败');
    }
  }
});
