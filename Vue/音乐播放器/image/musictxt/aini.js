var lyric = `[ar:王心凌]
[ti:爱你]
[00:00.12]男rap：yo yo yo yo cyndi
[00:04.92]what what's wrong with me
[00:06.90]女：爱你
[00:08.27]男rap：yo yo cyndi baby
[00:11.18]what's wrong with me
[00:13.75]cyndi give me your love
[00:16.06]you make me sneeze all the time
[00:21.93]now now怎么我一直狂打喷嚏
[00:25.73]在凌晨三点二十六分
[00:27.64]let me sing let me sing a song
[00:29.15]陪你入睡
[00:31.65]what is love sayyes sayyes
[00:37.85]cyndi i really do love you so
[00:38.67]女：如果你突然打了个喷嚏
[00:42.16]那一定就是我在想你
[00:44.37]如果半夜被手机吵醒
[00:46.72]啊 那是因为我关心
[00:49.02]常常想你说的话
[00:51.48]是不是别有用心
[00:53.89]明明很想相信
[00:56.14]却又忍不住怀疑
[00:58.87]在你的心里
[01:01.13]我是否就是唯一
[01:03.58]爱 就是有我常烦着你
[01:07.91]so baby 情话多说一点
[01:10.62]想我就多看一眼
[01:13.50]表现多一点点
[01:15.25]让我能真的看见
[01:17.91]oh bye 少说一点
[01:20.27]想陪你不只一天
[01:22.68]多一点让我心甘情愿 爱你
[01:42.05]喜欢在你的臂弯里胡闹
[01:44.31]你的世界是一座城堡
[01:46.84]在大头贴画满心号
[01:49.04]贴在手机上对你微笑
[01:51.10]常常想我说的话
[01:53.81]你是否听得进去
[01:56.32]明明很想生气
[01:58.72]却又止不住笑意
[02:01.51]在我的心里你真的就是唯一
[02:06.02]爱就是有我常赖着你
[02:10.23]so baby 情话多说一点
[02:13.04]想我就多看一眼
[02:15.49]表现多一点点
[02:17.60]让我能真的看见
[02:20.26]oh bye 少说一点
[02:22.67]想陪你不只一天
[02:25.08]多一点让我心甘情愿 爱你
[02:29.54]就这样 一天多一点
[02:32.70]慢慢地累积感觉
[02:34.96]两人的世界就能够贴近一点
[02:43.88]so baby 情话多说一点
[02:46.72]想我就多看一眼
[02:49.37]表现多一点点
[02:51.12]让我能真的看见
[02:53.63]oh bye 少说一点
[02:56.29]想陪你不只一天
[02:58.84]多一点让我心甘情愿 爱你
[03:02.93]so baby 情话多说一点
[03:05.89]想我就多看一眼
[03:08.69]表现多一点点
[03:10.40]让我能真的看见
[03:13.36]oh bye 少说一点
[03:15.52]想陪你不只一天
[03:17.92]多一点让我心甘情愿 爱你
[03:22.74]多一点 才会慢慢发现
[03:27.71]因为你让我心甘情愿`

let part = lyric.split('\n')

for(let index = 0;index<part.length;index++) {
  part[index] = getObj(part[index])
}

console.log(part);

function getObj(partContent) {
  // 每行切分成：时间+歌词
  let twoParts = partContent.split(']')
  //获取时间
  let time = twoParts[0].substr(1)
  //将时间切分成：分+秒
  let timeParts = time.split(":")

  let second = Number(timeParts[1])
  let minutes = Number(timeParts[0])

  let seconds = (minutes * 60 + second).toFixed(2)

  let words = twoParts[1]
  return {
    seconds,
    words
  }
}

export default part