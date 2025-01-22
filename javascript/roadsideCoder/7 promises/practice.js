function importantAction(username, cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 0);
  });
}
function likeTheVideo(video, cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like the ${video} video`);
    }, 0);
  });
}
function shareTheVideo(share, cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`share the ${share} video`);
    }, 1110);
  });
}

Promise.all([
  importantAction("Roadside Coder"),
  likeTheVideo("Javascript Interview Questions"),
  shareTheVideo("Javascript Interview Questions"),
]).then((res)=>{
  console.log(res)
}).catch((err)=>{
  console.error(err,"err")
})