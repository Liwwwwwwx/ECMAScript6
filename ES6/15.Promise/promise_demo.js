//1.promise实现异步加载图片
function loadImageAsync(url) {
    return new Promise((res, rej) => {
        const image = new Image()

        image.onload = function() {
            res(image)
        }
        image.onerror = function() {
            rej(new Error('Could not load image at' + url))
        }

        image.src = url
    })
}