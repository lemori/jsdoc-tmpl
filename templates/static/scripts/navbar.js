/* show members and functions of current module */
(function () {
    var p = window.location.pathname.split('/').slice(-1)[0];
    if ('module-' !== p.slice(0, 7)) return;
    var lists = '<br><h2 style="color:#A35A00">' + p.slice(7, -5) + '</h2><ul>',
        hs = document.getElementsByTagName('h4'),
        nav = document.getElementsByTagName('nav')[0];
    // add entries
    for (var i = 0; i < hs.length; i++) {
        var n = hs[i].getAttribute('id');
        lists += '<li><a href="#' + n + '">' + n + '</a></li>';
    };
    // auto hide module lists
    nav.innerHTML += lists + '</ul>';
    var h3module = nav.getElementsByTagName('h3')[0],
        navmodules = nav.getElementsByTagName('ul')[0];
    navmodules.className = 'nav-modules';
    navmodules.style.display = 'none';
    h3module.innerHTML += '&nbsp;<sub>&gt;&gt;</sub>';
    h3module.style.cursor = 'pointer';
    h3module.onclick = function () {
        var nm = document.getElementsByClassName('nav-modules')[0];
        if (nm.style.display === 'none') {
            nm.style.display = '';
        } else {
            nm.style.display = 'none';
        }
    };
})();