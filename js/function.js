/**
 * Created by OnlyMid on 2017/3/29.
 */
function fn(a) {
    console.log(a);
    var a = 2;
    function a() {}
    console.log(a);
}
fn(1);