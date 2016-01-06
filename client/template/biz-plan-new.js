Template.bizPlanNew.rendered = function() {

};

Template.bizPlanNew.helpers({
});

Template.bizPlanNew.events ({
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
/* bind events */
});

AutoForm.hooks({
  'bizPlanForm': {
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
      Router.go('bizPlanDetail', {_id: result});
    },

    onError: function(operation, error, template) {
      console.log('failed', error);
    }
  }
});
