const d = [
  {
    avatarPath: "./avatars/avatar-mark-webber.webp",
    notification: "reacted to your recent post",
    author: "Mark Webber",
    link: "My first tournament today!",
    linkPath: "#",
    time: "1m ago",
    unread: true,
  },
  {
    avatarPath: "./avatars/avatar-angela-gray.webp",
    notification: "followed you",
    author: "Angela Gray",
    link: "",
    linkPath: "#",
    time: "5m ago",
    unread: true,
  },
  {
    avatarPath: "./avatars/avatar-jacob-thompson.webp",
    notification: "has joined your group",
    author: "Jacob Thompson",
    link: "Chess Club",
    linkPath: "#",
    time: "1 day ago",
    unread: true,
  },
  {
    avatarPath: "./avatars/avatar-rizky-hasanuddin.webp",
    notification: "sent you a private message",
    author: "Rizky Hasanuddin",
    link: "",
    linkPath: "",
    time: "5 days ago",
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
  },
  {
    avatarPath: "./avatars/avatar-kimberly-smith.webp",
    notification: "commented on your picture",
    commentedPicture: "./images/image-chess.webp",
    author: "Kimberly Smith",
    link: "Chess Club",
    linkPath: "#",
    time: "1 week ago",
  },
  {
    avatarPath: "./avatars/avatar-nathan-peterson.webp",
    notification: "reacted to your recent post",
    author: "Nathan Peterson",
    link: "5 end-game strategies to increase your win rate",
    linkPath: "#",
    time: "2 weeks ago",
  },
  {
    avatarPath: "./avatars/avatar-anna-kim.webp",
    notification: "left the group",
    author: "Anna Kim",
    link: "Chess Club",
    linkPath: "#",
    time: "2 weeks ago",
  },
];

export const data = d.map((item, i) => {
  item.id = i;
  return item;
});
