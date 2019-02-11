(function (window) {
  var oldScrollTop = 0;
  window.onload = function () {
    window.addEventListener('scroll', function () {
      var scrollTop = window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop
        || 0;
      var banner = document.getElementById('banner');
      if (scrollTop > 50) {
        banner.classList.add('fixed');
      } else if (scrollTop < 2) {
        banner.classList.remove('fixed');
      }
      if (scrollTop > oldScrollTop) {
        banner.classList.remove('showing');
      } else {
        banner.classList.add('showing');
      }
      oldScrollTop = scrollTop;
    })
    var mBtn = document.getElementById('mBtn');
    var mPanel = document.getElementById('mPanel');
    mBtn && mBtn.addEventListener('click', function () {
      if (mPanel) {
        if (mPanel.classList.contains('open')) {
          mPanel.classList.remove('open');
        } else {
          mPanel.classList.add('open');
        }
      }
    })
  }
})(window);