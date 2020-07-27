$(document).on('scroll', function() {
  
    var pixelsFromTop = $(document).scrollTop()

  
  

  
  
  
      
  
  
  
                    
                       
                       
             
  
  
  var documentHight = $(document).height()
  var windowHeight = $(window).height()
  
  var difference = documentHight - windowHeight
  
  
  var percentage = 100 * pixelsFromTop / difference
  
  
  
     $('.bar-top').css('width', percentage + '%')

  
})