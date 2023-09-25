/* 
Buffer是一个类似数组的对象，用于表示固定长度的字节序列
Buffer本质是一段内存空间，专门用来处理二进制数据
特点：
    1.Buffer大小固定且无法调整
    2.Buffer性能较好，可以直接对计算机内存进行操作
    3.每个元素的大小为1字节(byte)

*/
// 1.alloc
let buf = Buffer.alloc(10);
console.log(buf)
//2.allocUnsafe
let buf1 = Buffer.allocUnsafe(10)
console.log(buf1)
//from 
let buf2 = Buffer.from('hello');
let buf3 = Buffer.from([12,,34,5,6,5,7,,6,433,234,2,])
let buf4 = Buffer.from([105,108,111,118,101,121,111,117])
console.log(buf4.toString())//utf-8
//[]
let buff = Buffer.from('hello');
// console.log(buff[0].toString(2))
buff[0] = 95;
console.log(buff.toString())
/* 
1.溢出：
    let buf = Buffer.from('hello');
    buf[0] = 361;舍弃高位数字 0001 0110 1001=》0110 1001
    console.log(buf)
2.中文
     let buf = Buffer.from('你好');
     console.log(buf)
     
*/