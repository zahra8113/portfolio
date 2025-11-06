// Mobile nav toggle
document.getElementById('navToggle').addEventListener('click', function(){
    var nav = document.getElementById('nav');
    if(nav.style.display === 'flex'){ nav.style.display = 'none'; }
    else { nav.style.display = 'flex'; nav.style.flexDirection = 'column'; }
  });
  
  // Smooth scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
  