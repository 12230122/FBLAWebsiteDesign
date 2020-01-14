/*(o)*/
// hello, i'm a comment who says -> hello, is it me you're looking for ?
!(() => {
  var timer;
  document.getElementById('refreshAbsolute').
  addEventListener('click', () => {
    document.getElementById('block').style.display = "none";
    if (!timer) {
      timer = setTimeout(() => {
        document.getElementById('block').style.display = "inline-block";
        timer = null;
      }, 100);
    }
  });
})();
/*(o)*/