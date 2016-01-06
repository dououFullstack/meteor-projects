Meteor.publish('pictures', function() {
  return Pictures.find();
});

Meteor.publish('firstUploaded', function () {
  return Pictures.find({}, {sort: {uploadedAt: 1}, limit: 1});
});

Meteor.publish('pictureUploaded', function() {
  // Find the just uploaded image
  return Pictures.find({}, {sort: {uploadedAt: -1}, limit: 1});
});

Meteor.publishComposite("projects", function() {
  return {
    find: function() {
      return Projects.find({}, { fields: { name: 1, createdAt: 1, types: 1, logo: 1 } } );
    },
    children: [
      {
        find: function(project) {
          return Pictures.find({_id: project.logo});
        }
      },
    ]
  };
});

Meteor.publishComposite("projectsComposite", function() {
  return {
    find: function() {
      return Projects.find({}, { fields: { name: 1, desc: 1, createdAt: 1, descPic: 1 } } );
    },
    children: [
      {
        find: function(bizPlan) {
          return Pictures.find({_id: bizPlan.descPic});
        }
      },
    ]
  };
});

Meteor.publishComposite("project", function(projectId) {
  return {
    find: function() {
      return Projects.find({_id: projectId});
    },
    children: [
      {
        find: function(project) {
          return Pictures.find({_id: project.logo});
        }
      },
    ]
  };
});

Meteor.publishComposite("projectComposite", function(projectId) {
  return {
    find: function() {
      return Projects.find({_id: projectId});
    },
    children: [
      {
        find: function(project) {
          return Pictures.find({
            _id: {
              $in: [project.descPic, project.teamPic, project.competencyPic]
            }
          });
        }
      },
    ]
  };
});
