// Format date
// let pubDate = "Sun, 27 Mar 2011 20:17:21 +0100";
// let date = new Date(pubDate);
// const timeAgoString = timeAgo(date);

export default function timeAgo(date) {
  const seconds = Math.floor((new Date() - date) / 1000);
  const interval = Math.floor(seconds / 31536000);

  if (interval >= 1) {
    return interval + "y";
  }
  const months = Math.floor(seconds / 2628000);
  if (months >= 1) {
    return months + "m";
  }
  const days = Math.floor(seconds / 86400);
  if (days >= 1) {
    return days + "d";
  }
  const hours = Math.floor(seconds / 3600);
  if (hours >= 1) {
    return hours + "h";
  }
  const minutes = Math.floor(seconds / 60);
  if (minutes >= 1) {
    return minutes + "m";
  }
  return "now";
}
