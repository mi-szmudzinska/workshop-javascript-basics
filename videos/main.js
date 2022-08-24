/**
*  @typedef Author
 * @property {string} avatarUrl
 * @property {string} id
 * @property {string} name
 */
/**
 *  @typedef Video
 *  @property {Author} author
 *  @property {string} description
 *  @property {string} id
 *  @property {string} thumbUrl
 *  @property {string} title
 *  @property {string} videoUrl
 */

function fetchVideos() {
    const url = 'http://fakes.herokuapp.com/videos';
    return fetch(url)
        .then(function (response) {
            console.log('response');
            return response.json();
        })
        .catch(function(error){
            console.error(error);
        });
}
/**
*  @param {Video} video
 */
function template(video) {
    //DOM - Document Object Model
    const videoContainer = document.createElement("div");
    videoContainer.classList.add('video');
    videoContainer.textContent = video.title;
    
    const thumb = document.createElement('img');
    thumb.src = video.thumbUrl;
    videoContainer.append(thumb);
    
    const title = document.createElement('h3');
    title.textContent = video.title;
    videoContainer.append(title);
    
    const description = document.createElement('p');
    description.textContent = video.description;
    videoContainer.append(description);
    
    return videoContainer;
    
    //HTML
    //return `<div class="video">${video.title}</div>`;
}

function renderVideos(videos) {
    const main = document.querySelector("main");
    videos.forEach(function (video) {
      //main.innerHTML += template(video);
      main?.append(template(video));
    });
}

function main () {
    console.log('main');
    fetchVideos()
        .then(function (videos) {
            renderVideos(videos);
        })
}

window.addEventListener("DOMContentLoaded", main);