const example = {
    id: '1',
    title: 'la batalla más arquitectónica de julio césar',
    file: 'videos/1.mp4',
    views: '478K',
    date: '2 weeks',
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

const addVideoDetails = (videoData) => {
    const videoInfoElement = document.createElement('div')
    const threeDotsElement = document.createElement('div')

    videoInfoElement.setAttribute('class', 'video-info')
    videoInfoElement.setAttribute('id', `video-info-${videoData.id}`)
    threeDotsElement.innerHTML = '...'

    document.getElementById(`video-details-${videoData.id}`).append(videoInfoElement)
    document.getElementById(`video-details-${videoData.id}`).append(threeDotsElement)
}

const addVideoInfo = (videoData) => {
    const channelPhoto = document.createElement('img')
    const videoDataElement = document.createElement('div')

    channelPhoto.setAttribute('class', 'channel-photo')
    channelPhoto.setAttribute('src', videoData.channelPhoto)

    videoDataElement.setAttribute('id', `video-data-${videoData.id}`)
    videoDataElement.setAttribute('class', 'video-data')

    document.getElementById(`video-info-${videoData.id}`).append(channelPhoto)
    document.getElementById(`video-info-${videoData.id}`).append(videoDataElement)
}

const addVideoData = (videoData) => {
    // Add title
    const videoTitleDivElement = document.createElement('div')
    const videoTitleSpanElement = document.createElement('span')

    videoTitleDivElement.setAttribute('id', `video-title-div-${videoData.id}`)
    videoTitleDivElement.setAttribute('class', 'video-title')
    videoTitleSpanElement.textContent = videoData.title

    document.getElementById(`video-data-${videoData.id}`).append(videoTitleDivElement)
    document.getElementById(`video-title-div-${videoData.id}`).append(videoTitleSpanElement)

    // Add channel, views and relative date
    const videoChannelAndViewsElement = document.createElement('div')
    const channelNameElement = document.createElement('span')
    const viewsAndDateElement = document.createElement('span')

    videoChannelAndViewsElement.setAttribute('id', `video-channel-views-${videoData.id}`)
    videoChannelAndViewsElement.setAttribute('class', `video-channel-views`)
    channelNameElement.textContent = videoData.channel
    viewsAndDateElement.textContent = `${videoData.views} views - ${videoData.date} ago`

    document.getElementById(`video-data-${videoData.id}`).append(videoChannelAndViewsElement)
    document.getElementById(`video-channel-views-${videoData.id}`).append(channelNameElement)
    document.getElementById(`video-channel-views-${videoData.id}`).append(viewsAndDateElement)
}

addVideoCard(example)
addVideoContainer(example)
addVideoDetails(example)
addVideoInfo(example)
addVideoData(example)