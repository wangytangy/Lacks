const style = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(255, 255, 255, 0.75)',
    zIndex          : 10
  },
  content : {
    position        : 'fixed',
    top             : '0',
    left            : '0',
    right           : '0',
    bottom          : '0',
    border          : '1px solid #ccc',
    zIndex          : 11,
    opacity         : '0',
    transition      : 'opacity 1s'
  }
};

export default style;
