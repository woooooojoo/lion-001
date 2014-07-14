$(document).ready(function(){

 $("a[href=#profile]").click(function (){ 
      $('html, body').animate({ 
         scrollTop: $("#me2").offset().top 
      }, 1000); 
      return false; 
   }); 

   $("a[href=#me1]").click(function (){ 
      $('html, body').animate({ 
         scrollTop: $("#me2").offset().top 
      }, 1000); 
      return false; 
   }); 
   $("a[href=#timeline1]").click(function (){ 
      $('html, body').animate({ 
         scrollTop: $("#timeline2").offset().top 
      }, 1000); 
      return false; 
   }); 

 $("a[href=#travel]").click(function (){ 
      $('html, body').animate({ 
         scrollTop: $("#travel2").offset().top 
      }, 1000); 
      return false; 
   }); 
 $("a[href=#korea]").click(function (){ 
      $('html, body').animate({ 
         scrollTop: $("#korea2").offset().top 
      }, 1000); 
      return false; 
   }); 


 $("a[href=#abroad]").click(function (){ 
      $('html, body').animate({ 
         scrollTop: $("#abroad2").offset().top 
      }, 1000); 
      return false; 
   }); 



$(window).load(function(){

  $('.Collage').collagePlus(
  // {
  //   'effect' : 'effect-1',
  // }
  );
});



 
});
	


