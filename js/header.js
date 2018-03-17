$(document).ready(function()
{
 
    
 $( "#accueil" ).hover(
  function() {
      
      $( "#submenu-index" ).css('visibility', 'visible');
  }, function() {
      
      $( "#submenu-index" ).css('visibility', 'hidden');
  }
);
    
    
     $( "#master" ).hover(
  function() {
    $( "#submenu-master" ).css('display', 'block');
  }, function() {
    $( "#submenu-master" ).css('display', 'none');
  }
 );
    
      $( "#admission" ).hover(
  function() {
    $( "#submenu-admission" ).css('display', 'block');
  }, function() {
    $( "#submenu-admission" ).css('display', 'none');
  }
);
        
    $( "#realisation" ).hover(
  function() {
    $( "#submenu-realisation" ).css('display', 'block');
  }, function() {
    $( "#submenu-realisation" ).css('display', 'none');
  }
);
            $( "#mondepro" ).hover(
  function() {
    $( "#submenu-mondePro" ).css('display', 'block');
  }, function() {
    $( "#submenu-mondePro" ).css('display', 'none');
  }
     
        
);
});
                  