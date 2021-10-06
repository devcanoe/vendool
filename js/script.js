function toggle_visibility() {
    var e = document.getElementById('cart');
    if(e.style.display == 'flex') {
      e.style.display = 'none';
    }
    else {
      e.style.display = 'flex';
    }
    console.log('clicked');
    return;
  }

  function show_filter(){
      var hslider = document.getElementById('hslider');
      var fmenu = document.getElementById('filter-menu');
      var fbutton = document.getElementById('filter-button');
      if(fmenu.style.display == 'flex') {
        fmenu.style.display = 'none';
        hslider.style.display = 'flex';
        fbutton.style.backgroundColor = 'white'
      }
      else {
        fmenu.style.display = 'flex';
        hslider.style.display = 'none';
    
      }
      console.log('clicked');
      return;
  }