const userLeft = false;
const userWatchingCatMeme = false;

function watchTutorialCallback(callback, errorCallback) {
if (userLeft) {
    errorCallback({
        name: 'UserLeftError',
        message: 'The user has left the tutorial.'
    })
} else if (userWatchingCatMeme) {
    errorCallback({
        name: 'CatMemeWatched',
        message: 'The user has watched a cat meme.'
    })
} else {
    callback('Tutorial watched successfully!')
}
}
