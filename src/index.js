+ import './style.css';

  function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = 'Buuu'
+   element.classList.add('myClass');

    return element;
  }

  document.body.appendChild(component());