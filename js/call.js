/**
 * Created by OnlyMid on 2017/3/29.
 */
var length = 10;
function fn() {
    console.log(this.length);
}
var obj = {
    length:5,
    method:function (fn) {
        fn();
        fn.call(obj);   //call的含义是：在obj环境中执行一遍函数fn的语句
    }
}
obj.method(fn);