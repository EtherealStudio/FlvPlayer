var vConsole = new VConsole();
var url = 'https://zhw2590582.github.io/assets-cdn';
var flv = new FlvPlayer({
    url: url + '/video/your-name-H264(Baseline@L52)-AAC.flv',
    container: document.querySelector('.flvplayer-app'),
    debug: true,
});