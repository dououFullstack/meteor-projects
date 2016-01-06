Router.map(function() {

  this.route('projectsNew', {
    template: 'projectsNew',
    path: '/projects/new',
    waitOn: function () {
      // 订阅一个 collection 中最新上传和最初上传的图片，没想到更好的办法了。可改进！
        // return Meteor.subscribe('logos');
      Meteor.subscribe('firstUploaded');
      return Meteor.subscribe('pictureUploaded');
    },
    yieldTemplates: {
      'header': { to: 'header' },
      'tabNavInvestment': { to: 'tabNavInvestment'},
      'footer': { to: 'footer' },
      'bottomNav': { to: 'bottomNav' }
    }
  });

  this.route('projectsIndex', {
    template: 'projectsIndex',
    path: '/projects',
    waitOn: function () {
      // Meteor.subscribe('logos');
      return Meteor.subscribe('projects');
    },
    data: function () {
      return {
        projects: Projects.find({}, {sort: {createdAt: -1}}),
      };
    },
    yieldTemplates: {
      'header': { to: 'header' },
      'tabNavInvestment': { to: 'tabNavInvestment'},
      'footer': { to: 'footer' },
      'bottomNav': { to: 'bottomNav' }
    }
  });

  this.route('projectDetail', {
    template: 'projectDetail',
    path: '/projects/:_id',
    waitOn: function () {
      // Meteor.subscribe('logos');
      return Meteor.subscribe('project', this.params._id);
    },
    data: function () {
      return {
        project: Projects.findOne(this.params._id),
      };
    },
    yieldTemplates: {
      'header': { to: 'header' },
      'tabNavInvestment': { to: 'tabNavInvestment'},
      'footer': { to: 'footer' },
      'bottomNav': { to: 'bottomNav' }
    }
  });

  this.route('projectEdit', {
  template: 'projectEdit',
  path: '/projects/:_id/edit',
  waitOn: function () {
    // Meteor.subscribe('logos');
    Meteor.subscribe('pictureUploaded');
    return Meteor.subscribe('project', this.params._id);
  },
  data: function () {
    return Projects.findOne(this.params._id);
  },
    yieldTemplates: {
      'header': { to: 'header' },
      'tabNavInvestment': { to: 'tabNavInvestment'},
      'footer': { to: 'footer' },
      'bottomNav': { to: 'bottomNav' }
    }
  });

  this.route('bizPlansIndex', {
    template: 'bizPlansIndex',
    path: '/bizplans',
    waitOn: function () {
      return Meteor.subscribe('projectsComposite');
    },
    data: function () {
      return {
        projects: Projects.find({}, {sort: {createdAt: -1}}),
      };
    }
  });

  this.route('bizPlanDetail', {
    template: 'bizPlanDetail',
    path: '/bizplans/:_id',
    waitOn: function () {
      return Meteor.subscribe('projectComposite', this.params._id);
      // Meteor.subscribe('pictures');
      // return Meteor.subscribe('bizPlan', this.params._id);
    },
    data: function () {
      return {
        project: Projects.findOne(this.params._id),
    };
    },
  });

  this.route('bizPlanEdit', {
  template: 'bizPlanEdit',
  path: '/bizplans/:_id/edit',
  waitOn: function () {
    // Meteor.subscribe('pictures');
    Meteor.subscribe('pictureUploaded');
    return Meteor.subscribe('projectComposite', this.params._id);
  },
  data: function () {
    return Projects.findOne(this.params._id);
    }
  });

});
