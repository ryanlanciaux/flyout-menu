var ghPages = require("gh-pages");

ghPages.publish("packages/example/dist", function(err) {
  if (err) {
    console.log("An error has occurred");
  } else {
    console.log("Deployed to gh-pages branch");
  }
});
