# floating-horizontal-scrollbar

Display an horizontal scrollbar at the bottom of the window if a div overflows the window height.

## Usage

### Vanilla JS

```html
<div id="container" style="width: 300px; overflow:auto;">
  <div id="content" style="width: 2000px; height: 2000px; background-color: #ccc;"></div>
</div>
```

```js
var scrollbar = require("floating-horizontal-scrollbar");

scrollbar(document.getElementById("container"));
```

### Mithril

```js
var scrollbar = require("floating-horizontal-scrollbar");

var page = {
  view: function(ctrl) {
    var scrollbarConfig = function(element, isInitialized, context){
      if (!isInitialized) {
        scrollbar(element);
      }
    };

    return m("#container", {config: scrollbarConfig, style: "width: 300px; overflow:auto;"},
      m("#content", {style: "width: 2000px; height: 2000px; background-color: #ccc;"})
    );
  }
};

m.mount(document.body, page);
```
