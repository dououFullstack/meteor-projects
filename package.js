Package.describe({
  name: 'maodouio:projects',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('iron:router@1.0.12', ["server", "client"]);
  api.use('reywood:publish-composite@1.4.2', "server");
  api.use('aldeed:autoform@5.1.2', ["server", "client"]);
  api.use('aldeed:collection2@2.3.3', ["server", "client"]);
  api.use('aldeed:simple-schema@1.3.2', ["server", "client"]);
  api.use('matb33:collection-hooks@0.8.0', ["server", "client"]);
  api.use('cfs:standard-packages@0.5.9', ["server", "client"]);
  api.use('cfs:gridfs@0.0.33', ["server", "client"]);
  api.use('cfs:filesystem@0.1.2', ["server", "client"]);
  api.use('maodouio:autoform-file@1.0.5', ["server", "client"]);
  api.use('froatsnook:request@2.67.0', "server");

  // template
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');

  //client
  api.addFiles([
    'client/template/projectDetail.html',
    'client/template/projectDetail.js',
    'client/template/projectNew.html',
    'client/template/projectNew.js',
    'client/template/projectsIndex.html',
    'client/template/projectsIndex.js',
    'client/template/projectEdit.html',
    'client/template/projectEdit.js',
    'client/stylesheets/projectDetail.css',
    'client/stylesheets/projectsIndex.css',
    'client/template/biz-plan-detail.html',
    'client/template/biz-plan-detail.js',
    'client/template/biz-plan-new.html',
    'client/template/biz-plan-new.js',
    'client/template/biz-plans-index.html',
    'client/template/biz-plans-index.js',
    'client/template/biz-plan-edit.html',
    'client/template/biz-plan-edit.js',
    'client/stylesheets/detail.css',
    'client/stylesheets/index.css',
    'client/stylesheets/pin-plan-new.css',
    'client/helpers.js',
    'client/router.js',

    ],["client"]
  );

  //acc
  api.addAssets([
    'public/images/error-pin.png',
    'public/images/arrow158.png'

  ],['client']);

  //both
  api.addFiles([
    'lib/collections.js',
    ],['client','server']);

  //server
  api.addFiles([
    'server/publication.js',
    'server/permissions.js',
    // 'server/seeds/methods.js',
    // 'server/seeds/fixtures.js',

    ],["server"]
  );

  api.export('Projects');
  api.export('Pictures');
});
