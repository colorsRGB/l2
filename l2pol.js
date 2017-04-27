<script>
function myFunction()
{
  var str=prompt("Пожалуйста, введите число","0");
   var mag = str.split("");
    if((mag.length%2)==0)
    					           {
                         var z=mag.length-1;
                          for( var i = 0; i < mag.length/2;i++,z--)
                         									                          if(mag[i]==mag[z])
                                                                                      {
                                                                                        var ist=("Pravda");
                                                                                      }
                                                                                        else
                                                                                            {
                                                                                              ist=("loj");
                                                                                            }

                                               alert(ist);
                         }
    else
                  {
                    var z=mag.length-1;
                     for( var i = 0; i < (mag.length/2)-1;i++,z--)
            									                                    if(mag[i]==mag[z])
                                                                                    {
                                                                                     var ist=("Pravda");
                                                                                    }

                                                                              else
                                                                                  {
                                                                                   ist=("loj");
                                                                                  }
                                               alert(ist);
                   }



  }
</script>
