function notif(msg, sts) {
    UIkit.notification({
        message: msg,
        status: sts,
        pos: 'top-left',
        timeout: 1000
    });
}

function unvailable() {
    notification("<span style='font-size:28px;' uk-icon='cog'></span> Under construction.", "warning");
}

function copy(str, msg, colour = "#34bdeb") {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    notif("<span style='color: " + colour + "'><span style='font-size:28px;' uk-icon='copy'></span> " + msg + "</span>", "primary", "top-left", 1000);
}