export function fetchList(amount = 1) {
  return fetch('http://api.aparat.com/fa/v1/video/video/mostViewedVideos')
    .then(response => response.json())
}
