/**
 * Created by OnlyMid on 2017/3/29.
 */
//1.first question
function fn(a) {
    console.log(a);
    var a = 2;
    function a() {}
    console.log(a);
}
fn(1);

// function a() {}
// 2

//2.secord question
var a = 1;
function fn1() {
    console.log(a);
    var a = 2;
}
fn1();
console.log(a);

// undefiner
// 1




// 第一个题解析：
// 因为该情况下会有申明提前，而且funtion比变量优先级更高。所以上面那个输出function，下面那个事实上var a=2在后面运行，覆盖了function a。所以下面那个输出2
// 第二题解析：
// 因为申明提前且不赋值所以fn1输出underfine，又因为a为全局变量，fn1()改变不了的。
