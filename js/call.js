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
        fn.call(obj);
        arguments[0];
    }
}
obj.method(fn);