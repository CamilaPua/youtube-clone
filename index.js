const videos = [
    {
        id: '1',
        title: 'la batalla más arquitectónica de julio césar',
        file: 'videos/1.mp4',
        views: '478K',
        date: '2 weeks',
        thumbnail: 'videos/thumbnails/1.jpg',
        channel: 'Ter',
        channelPhoto: 'channels/Ter.jpg'
    },
    {
        id: '2',
        title: "If you're ambitious but lazy, please watch this video…",
        file: 'videos/2.mp4',
        views: '1M',
        date: '1 month',
        thumbnail: 'videos/thumbnails/2.jpg',
        channel: 'atomiumjae',
        channelPhoto: 'channels/atomiumjae.jpg'
    },
    {
        id: '3',
        title: 'Carefully Pushing Enemy When I know My Random Teammate Have No Use😶',
        file: 'videos/3.mp4',
        views: '11',
        date: '1 day',
        thumbnail: 'videos/thumbnails/3.jpg',
        channel: 'HomeBoyCODM',
        channelPhoto: 'channels/HomeBoyCODM.jpg'
    },
    {
        id: '4',
        title: 'ASMR Cranial Nerve Exam (testing your senses) 🧠🌡️',
        file: 'videos/4.mp4',
        views: '7.1K',
        date: '3 weeks',
        thumbnail: 'videos/thumbnails/4.jpg',
        channel: 'ASMR Andy',
        channelPhoto: 'channels/ASMR Andy.jpg'
    },
    {
        id: '5',
        title: 'No seas tan programador.',
        file: 'videos/5.mp4',
        views: '30K',
        date: '3 weeks',
        thumbnail: 'videos/thumbnails/5.jpg',
        channel: 'Dot Dager',
        channelPhoto: 'channels/Dot Dager.jpg'
    },
    {
        id: '6',
        title: 'OpenAI o1: Camino a las IAs con RAZONAMIENTO SOBREHUMANO | Análisis completo',
        file: 'videos/6.mp4',
        views: '212K',
        date: '2 weeks',
        thumbnail: 'videos/thumbnails/6.jpg',
        channel: 'Dot CSV',
        channelPhoto: 'channels/Dot CSV.jpg'
    }
];

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
    threeDotsElement.setAttribute('class', 'video-three-dots')
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

const addVideoToLayout = (videoData) => {
    addVideoCard(videoData)
    addVideoContainer(videoData)
    addVideoDetails(videoData)
    addVideoInfo(videoData)
    addVideoData(videoData)
}

for (let i = 0; i < videos.length; i++) {
    const video = videos[i];
    addVideoToLayout(video)
}