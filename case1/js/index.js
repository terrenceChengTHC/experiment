$(function ($) {
    var dpr, rem, scale;
    var docEl = document.documentElement;
    var fontEl = document.createElement('style');
    var metaEl = document.querySelector('meta[name="viewport"]');
    scale = 1 / dpr;
    dpr = win.devicePixelRatio || 1;
    rem = docEl.clientWidth * dpr / 10;
// ����viewport���������ţ��ﵽ����Ч��
    metaEl.setAttribute('content', 'width=' + dpr * docEl.clientWidth + ',
    initial-scale=' + scale + ',maximum-scale=' + scale + ',
        minimum-scale=' + scale + ',user-scalable=no');
// ����data-dpr���ԣ�������css hack֮��
    docEl.setAttribute('data-dpr', dpr);
// ��̬д����ʽ
    docEl.firstElementChild.appendChild(fontEl);
    fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}';
// ��js���õģ�ĳһdpr��rem��px֮���ת������
    window.rem2px = function(v) {
        v = parseFloat(v);
        return v * rem;
    };
    window.px2rem: function(v) {
        v = parseFloat(v);
        return v / rem;
    };
    window.dpr = dpr;
    window.rem = rem;
});