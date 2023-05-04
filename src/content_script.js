window.addEventListener("load", main, true);

function main(e) {
  let shorts_url = window.location.href;
  let video_url = shorts_url.replace("shorts", "video");

  window.location.assign(video_url);
};

