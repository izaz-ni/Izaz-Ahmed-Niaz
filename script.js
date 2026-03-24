
// Minimal JS: dynamic year and basic form UX
document.addEventListener('DOMContentLoaded', function () {
  var y = new Date().getFullYear();
  var el = document.getElementById('year');
  if (el) el.textContent = y;
});
