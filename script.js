// // Exercise 1
// function afterDelay(time, cb) {
//   setTimeout(() => {
//     cb();
//   }, time);
// }

// afterDelay(2000, () => {
//   console.log("Callback executed");
// });

// // Exercise 2

// function getUser(username, cb) {
//   setTimeout(() => {
//     cb({ id: 143, username: "Aushah" });
//   }, 1000);
// }

// function getUserPosts(userId, cb) {
//   setTimeout(() => {
//     cb(["img1", "img2", "img3"]);
//   }, 1000);
// }

// getUser("Aushah", (data) => {
//   getUserPosts(data.id, (posts) => {
//     console.log(data.username, posts);
//   });
// });

// Exercise 3

function loginUser(username, cb) {
  console.log("Getting User.....");

  setTimeout(() => {
    cb({ username: "Aushah", id: 342 });
  }, 1000);
}
function fetchPermissions(id, cb) {
  console.log("Getting Permissions.....");

  setTimeout(() => {
    cb(["true", "false"]);
  }, 1000);
}
function loadDashboard(permissions, cb) {
  console.log("Loading Dashboard.....");

  setTimeout(() => {
    cb("Dashboard Loaded");
  }, 1000);
}

loginUser("Aushsh", (data) => {
  fetchPermissions(data.id, (permissions) => {
    loadDashboard(permissions, (permission) => {
      console.log(permission);
    });
  });
});
