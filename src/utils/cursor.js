// Linear interpolation
const lerp = (a, b, n) => (1 - n) * a + n * b;

// Gets the mouse position
const getMousePos = (e) => {
  let posx = 0;
  let posy = 0;
  if (!e) e = window.event;
  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  }
  else if (e.clientX || e.clientY) {
    // @ts-ignore
    posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
    // @ts-ignore
    posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
  }
  
  return { x : posx, y : posy }
};
