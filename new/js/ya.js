(function () {
    var aa;
    function ba(a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    }
    // ... (остальной код из ya.js без изменений, сокращен для примера)
  }).call(this);