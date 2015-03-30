Package.describe({
  name: "ccorcos:highland",
  version: "0.0.1",
  summary: "Highland.js for Meteor",
  git: "https://github.com/ccorcos/meteor-highlandjs",
});


Package.onUse(function(api) {
  api.addFiles([
    "src/highland.js",
  ]);
});