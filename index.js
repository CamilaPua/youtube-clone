const example = {
    id: '1',
    title: 'la batalla más arquitectónica de julio césar',
    file: 'videos/1.mp4',
    thumbnail: 'videos/thumbnails/1.jpg',
    channel: 'Ter',
    channelPhoto: 'channels/Ter.jpg'
}

const addVideoCard = (videoData) => {
    const videoCardElement = document.createElement('div')
    const videoContainerElement = document.createElement('div')
    const videoDetailsElement = document.createElement('div')

    videoCardElement.setAttribute('id', `video-card-${videoData.id}`)
    videoCardElement.setAttribute('class', 'video-card')
    videoContainerElement.setAttribute('id', `video-container-${videoData.id}`)
    videoContainerElement.setAttribute('class', 'video-container')
    videoDetailsElement.setAttribute('id', `video-details-${videoData.id}`)
    videoDetailsElement.setAttribute('class', 'video-details')

    document.getElementById('videos-layout').append(videoCardElement)
    document.getElementById(`video-card-${videoData.id}`).append(videoContainerElement)
    document.getElementById(`video-card-${videoData.id}`).append(videoDetailsElement)
}

const addVideoContainer = (videoData) => {
    const videoElement = document.createElement('video')

    videoElement.setAttribute('src', videoData.file);
    videoElement.setAttribute('class', 'video-custom');
    videoElement.setAttribute('id', `video-${videoData.id}`);
    videoElement.setAttribute('poster', videoData.thumbnail);
    videoElement.addEventListener('mouseover', () => { videoElement.play() });
    videoElement.addEventListener('mouseleave', () => { videoElement.load() });
    videoElement.muted = true;

    document.getElementById(`video-container-${videoData.id}`).append(videoElement)
}

addVideoCard(example)
addVideoContainer(example)