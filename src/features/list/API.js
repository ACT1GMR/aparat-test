export function fetchList(amount = 1) {
  return fetch('http://localhost:3000/aparat?url=http://api.aparat.com/fa/v1/video/video/mostViewedVideos')
    .then(response => response.json())
}
