$(document).ready(function(){
 
   

  $.ajax({

      url: "https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON",
       type:"get",
       dataType:'text',
       success: function(data){
         console.log(data);

            
              
           


         var tomb = JSON.parse(data);
         var cim=""; 
         for (var i=0;i<tomb.length;i++)
         {
            cim+=' <tr> <td>'+tomb[i].Title+" : "+'</td> </tr>' ;
         }
         
         $('.click').click(function(){
          $('.cim').append(cim);

         })
       


         var tomb = JSON.parse(data);
         var ev=""; 
         for (var i=0;i<tomb.length;i++)
         {
            ev+='<tr> <td>'+tomb[i].Year+'<td> </tr>';
         }
         $('.click').click(function(){
          $('.ev').append(ev);
         })
      
          

         var tomb = JSON.parse(data);
         var ertekeles=""; 
         for (var i=0;i<tomb.length;i++)
         {
          ertekeles+='<tr> <td>'+tomb[i].Rated+'<td> </tr>';
         }
         $('.click').click(function(){
          $('.ertekeles').append(ertekeles);
         })



       },
       error:function() {
         console.log("error");
       }
   });
$(".hid").click(function(){
    $("table").hide();
   })

$(".shw").click(function(){
  $("table").show();
    })

});
