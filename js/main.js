function show(handle) {
	document.querySelectorAll('.details').forEach(product => product.classList.add('hidden'));
	document.querySelector(`#product-${handle}`).classList.remove('hidden');
}

window.addEventListener('load', function () {
  var highlight = document.querySelector('#selectProduct');
  show('ammo-box');

  highlight.addEventListener('change', () => show(highlight.value));
});