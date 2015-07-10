function watch(initial) {
  var db = {
    initial: null,
    was: null,
    now: null
  };
  db.initial = db.now = initial;
  function watchFn() {}
  watchFn.prototype.getInitial = function() {
    return db.initial;
  };
  watchFn.prototype.set = function(val) {
    db.was = db.now;
    db.now = val;
  };
  watchFn.prototype.get = function() {
    return db.now;
  };
  watchFn.prototype.getWas = function() {
    return db.was;
  };
  watchFn.prototype.isChanged = function() {
    return String(db.now) !== String(db.initial);
  };
  return new watchFn();
}
