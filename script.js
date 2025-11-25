const reels = [
  {
    profileName: "tech_vibes",
    followed: true,
    title: "Building a clean navbar",
    likes: 1200,
    comments: 85,
    shares: 30,
    video: "/videos/reel1.mp4",
    liked: true,
    profilePic: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
  },
  {
    profileName: "designhub",
    followed: false,
    title: "Soft pastel UI inspiration",
    likes: 980,
    comments: 40,
    shares: 12,
    video: "/videos/reel2.mp4",
    liked: false,
    profilePic: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
  },
  {
    profileName: "coderwave",
    followed: true,
    title: "JS tricks for beginners",
    likes: 2100,
    comments: 110,
    shares: 54,
    video: "/videos/reel3.mp4",
    liked: true,
    profilePic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
  },
  {
    profileName: "ui.colors",
    followed: false,
    title: "Color palette ideas",
    likes: 760,
    comments: 28,
    shares: 9,
    video: "/videos/reel4.mp4",
    liked: false,
    profilePic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  },
  {
    profileName: "frontendspace",
    followed: true,
    title: "React project breakdown",
    likes: 1800,
    comments: 96,
    shares: 41,
    video: "/videos/reel5.mp4",
    liked: true,
    profilePic: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
  },
  {
    profileName: "devmotion",
    followed: true,
    title: "CSS animation tutorial",
    likes: 1300,
    comments: 51,
    shares: 20,
    video: "/videos/reel6.mp4",
    liked: false,
    profilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    profileName: "creativestudio",
    followed: false,
    title: "Aesthetic layout ideas",
    likes: 920,
    comments: 33,
    shares: 14,
    video: "/videos/reel1.mp4",
    liked: true,
    profilePic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  },
  {
    profileName: "codergirl",
    followed: true,
    title: "Debugging made easy",
    likes: 2500,
    comments: 120,
    shares: 60,
    video: "/videos/reel2.mp4",
    liked: false,
    profilePic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  },
  {
    profileName: "cloudbytes",
    followed: false,
    title: "Node deployment guide",
    likes: 1400,
    comments: 47,
    shares: 25,
    video: "/videos/reel3.mp4",
    liked: true,
    profilePic: "https://images.unsplash.com/photo-1552058544-f2b08422138a",
  },
  {
    profileName: "themevision",
    followed: true,
    title: "Dark theme UI design",
    likes: 2000,
    comments: 88,
    shares: 37,
    video: "/videos/reel4.mp4",
    liked: false,
    profilePic: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
  },
];

let allReels = document.querySelector(".all-reels");

reels.forEach((reel) => {
  let div = document.createElement("div");
  div.className = "reel";
  div.innerHTML = ` <div class="reel">
            <video loop muted autoplay src="${reel.video}"></video>
            <div class="bottom">
              <div class="user">
                <img src="${reel.profilePic}" alt="" />
                <h4>${reel.profileName}</h4>
               <button>${reel.followed ? "Unfollow" : "Follow"}</button>
              </div>
              <h3>${reel.title}</h3>
            </div>
            <div class="right">
              <div class="like">
                <h4 class="like-icon icon"> <i class="${
                  reel.liked ? "ri-heart-3-line" : "ri-heart-3-fill red"
                }"></i></h4>
                <h6>${reel.likes}</h6>
              </div>
              <div class="comment">
                <h4 class="comment-icon icon">
                  <i class="ri-chat-3-line"></i>
                </h4>
                <h6>${reel.comments}</h6>
              </div>
              <div class="share">
                <h4 class="share-icon icon">
                  <i class="ri-share-forward-line"></i>
                </h4>
                <h6>${reel.shares}</h6>
              </div>
              <div class="menu">
                <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
              </div>
            </div>
          </div>`;

  allReels.appendChild(div);
});
