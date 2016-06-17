(function(doc, win) {
var docEl = doc.documentElement,
isIOS = navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
dpr = isIOS ? Math.min(win.devicePixelRatio, 3) : 1,
dpr = window.top === window.self ? dpr : 1, //被iframe引用时，禁止缩放
resizeEvt = "orientationchange" in window ? "orientationchange" : "resize";
docEl.dataset.dpr = dpr;
var recalc = function() {
var width = docEl.clientWidth;
if (width / dpr > 1080) {
width = 1080 * dpr;
}
docEl.dataset.width = width
docEl.dataset.percent = width / 6.4;  //设计图是1080px;  设计图的尺寸除以100即可;
docEl.style.fontSize = width / 6.4 + "px";
};
recalc()
if (!doc.addEventListener) return;
win.addEventListener(resizeEvt, recalc, false);
})(document, window);