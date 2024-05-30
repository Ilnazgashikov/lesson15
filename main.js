function DomElement (selector, height, width, bg, fontSize ) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    let elem = null;
    this.createElement = function () {
      if (Array.from(selector)[0] === '.') {
        elem = document.createElement('div')
        elem.classList.add(selector.substring(1))
        console.log(elem);
      }
      else if (Array.from(selector)[0] === '#') {
        elem = document.createElement('p')
        elem.setAttribute('id', selector.substring(1))
        console.log(elem);
      }
      document.body.append(elem);
      elem.style.cssText = `height: ${this.height}px;
      width: ${this.width}px;
      background: ${this.bg};
      font-size: ${this.fontSize}px;`;
      elem.textContent = "Любой текст"
    } 
  }
  const square = new DomElement('#block', '400', '400', 'red', '14');
  square.createElement();