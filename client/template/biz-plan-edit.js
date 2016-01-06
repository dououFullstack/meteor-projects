Template.bizPlanEdit.rendered = function() {
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

Template.bizPlanEdit.helpers({
});

Template.bizPlanEdit.events ({
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
  'bizPlanFormUpdate': {
    before: {
      update: function(doc) {
        console.log("AutoForm Hook update...");
        console.log('doc================', doc);
        doc.updatedAt = new Date();
        return doc;
      }
    },
    onSuccess: function(operation, result, template) {
      console.log("onSuccess update...");
      Router.go('bizPlanDetail', {_id: this.docId});
    },

    onError: function(operation, error, template) {
      console.log('修改失败');
    }
  }
});
