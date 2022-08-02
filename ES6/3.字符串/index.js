/**
 * 2022-8-02
 * 字符串
 */

//ES5字符串的方法
var foo = 'hello'
var bar = 'world'

foo.charAt(2) // l
foo.charCodeAt(2) // l->Unicode

foo.concat(bar) // helloworld

foo.indexOf('e') // 1
foo.lastInexOf('l') // 3

// 左闭右开
foo.slice(0, 2) // he
foo.substr(1, 2) // el
foo.substring(2, 4) //ll

foo.toLowerCase() // hello
foo.toUpperCase() // HELLO

foo.match() //找到一个或者多个正则表达式的匹配
foo.replace() //替换与正则表达式匹配的子串
foo.search() //检索与正则表达式相匹配的值

foo.includes('he') //true
foo.startWith('h') //true
foo.endsWith('0') //true

//返回一个字符串，表示将原字符串重复n次
foo.repeat(2) // hellohello

//长度补全
'x'.padStart(5, 'ab') //ababx
'x'.padStart(4, 'ab') //abax

'x'.padEnd(5, 'ab') //xabab
'x'.padEnd(4, 'ab') //xaba

//消除空格
const s = '   str   '
s.trim() // 'str'
s.trimStart() // 'str   '
s.trimEnd() // '   str'

'aabbcc'.replace('b', '_') //aa_bcc

'aabbcc'.replace(/b/g, '_') //aa__cc
'aabbcc'.replaceAll('b', '_') //aa__cc

const str = 'hello'
str.at(1) // e
str.at(-1) //o
str.at(10) // undefined






