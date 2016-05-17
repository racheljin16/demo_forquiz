$(function() {
     
   var movieword="";
   $("#draggable").draggable();
   $("#draggable1").draggable();
   $("#draggable2").draggable();
   $("#draggable3").draggable();
   $("#draggable4").draggable();
   
   $("#droppable").droppable({
	    accept: "#draggable",
	    activeClass: "active",
	    hoverClass: "hover",
	   	drop: function(event, ui) {
	   	 $(this).addClass("ui-widget-content")
		  .find("p").html("Dropped");
		  movieword += $("#draggable").text().replace(/ /g,'');
	   	  
	   }
	  });
	$("#droppable1").droppable({
	    accept: "#draggable1",
	    activeClass: "active",
	    hoverClass: "hover",
	   	drop: function(event, ui) {
	   	 $(this).addClass("ui-widget-content")
		  .find("p").html("Dropped");
		  movieword += $("#draggable1").text().replace(/ /g,'');
	   	  
	   }
	  });

	$("#droppable2").droppable({
	    accept: "#draggable2",
	    activeClass: "active",
	    hoverClass: "hover",
	   	drop: function(event, ui) {
	   	 $(this).addClass("ui-widget-content")
		  .find("p").html("Dropped");
		  movieword += $("#draggable2").text().replace(/ /g,'');
	   	  
	   }
	  });

	$("#droppable3").droppable({
	    accept: "#draggable3",
	    activeClass: "active",
	    hoverClass: "hover",
	   	drop: function(event, ui) {
	   	 $(this).addClass("ui-widget-content")
		  .find("p").html("Dropped");
	   	  movieword += $("#draggable3").text().replace(/ /g,'');
	   }
	  });
	   
	$("#droppable4").droppable({
	    accept: "#draggable4",
	    activeClass: "active",
	    hoverClass: "hover",
	   	drop: function(event, ui) {
	   	 $(this).addClass("ui-widget-content")
		  .find("p").html("Dropped");
	   	  movieword += $("#draggable4").text().replace(/ /g,'');
	   }
	  });
	   
	 
	   
	 

	 $('#submitButton').click(function(){
       
       	if ($("#droppable").hasClass('ui-widget-content') && $("#droppable1").hasClass('ui-widget-content') && $("#droppable2").hasClass('ui-widget-content') && $("#droppable3").hasClass('ui-widget-content') && $("#droppable4").hasClass('ui-widget-content')){
       		alert('success!')
       	}
       	else{
       		alert('not right!')
       	}


		 //Check if the correct movie was dragged and dropped
		        
        //Check if the movie word is tenet. If yes is it a palindrome 
	 });
	  
             
          
      
   
});