const Post = require("../models/index");

Post.remove({}).then(() => {
  Post.insertMany([
    {
      title: "Aerobics meet Sunday",
      content:
        "Meeting at the park at 4pm Sunday for aerobics exercises.Welcome to join."
    },
    {
      title: " Three mile walk",
      content:
        " Interested in a 3 walk? Meet tommorrow at 5pm at the town center"
    }
  ]).then(posts => {
    console.log(`new posts added:\n${posts}`);
    process.exit();
  });
});
