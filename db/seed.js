const Post = require("../models/index");

Post.remove({}).then(() => {
  Post.insertMany([
    {
      title: "Aerobics meet Sunday",
      content:
        "Meeting at the park at 4pm Sunday for aerobics exercises.Welcome to join."
    }
  ]).then(posts => {
    console.log(`new posts added:\n${posts}`);
    process.exit();
  });
});
