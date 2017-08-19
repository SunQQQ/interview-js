var name,phone,jsonString,arrays=[],objects={};
document.getElementById("bottom").onclick = function () {
    document.getElementById("inputs").style.display = "block";
    document.getElementsByTagName("input")[0].value = "";
    document.getElementsByTagName("input")[1].value = "";
}
document.getElementsByClassName("add")[0].onclick = function () {
    name = document.getElementsByTagName("input")[0].value;
    phone = document.getElementsByTagName("input")[1].value;

    objects = {
        name:name,
        phone:phone
    };
    arrays.push(objects);

    console.log(JSON.stringify(arrays));
    var jsonToObject = JSON.parse(JSON.stringify(arrays));

    document.getElementsByClassName("content")[0].innerHTML = "";
    for(var i=0;i<jsonToObject.length;i++){
        var newdiv = document.createElement("div");
        newdiv.className = "listTitle";

        var left = document.createElement("div");
        left.className = "name";
        left.innerHTML = jsonToObject[i].name;

        var right = document.createElement("div");
        right.className = "phone";
        right.innerHTML = jsonToObject[i].phone;

        newdiv.append(left);
        newdiv.append(right);
        document.getElementsByClassName("content")[0].appendChild(newdiv);
    }



    document.getElementsByClassName("inputs")[0].style.display = "none";
}

    // .container 设置了 overflow 属性, 导致 Android 手机下输入框获取焦点时, 输入法挡住输入框的 bug
    // 相关 issue: https://github.com/weui/weui/issues/15
    // 解决方法:
    // 0. .container 去掉 overflow 属性, 但此 demo 下会引发别的问题
    // 1. 参考 http://stackoverflow.com/questions/23757345/android-does-not-correctly-scroll-on-input-focus-if-not-body-element
    //    Android 手机下, input 或 textarea 元素聚焦时, 主动滚一把
    if (/Android/gi.test(navigator.userAgent)) {
        window.addEventListener('resize', function () {
            if (document.activeElement.tagName == 'INPUT' || document.activeElement.tagName == 'TEXTAREA') {
                window.setTimeout(function () {
                    document.activeElement.scrollIntoViewIfNeeded();
                }, 0);
            }
        })
    }
	

		
