{
  "name": "video is all you need",
  "description": "This extension redirects Shorts URLs to YouTube homepage.",
  "version": "0.1",
  "manifest_version": 2,
  "content_scripts": [{
    "matches": ["https://www.youtube.com/shorts*"],
    "js": ["jquery-2.2.0.min.js", "ChEx.js", "content_script.js"]
  }],
  "background": {
    "service_worker": "background.js",
    "type": "module"
},
  "options_page": "options.html"
}
