
<script type="text/javascript" language="Javascript">
  var mad=[];
  mad[0]=0;
  mad[1]=1;

      for (var i=0; i<16; i++){
                                if(i>=2){
                                          mad[i]=mad[i-2]+mad[i-1];
                                          console.log(mad[i-1]);
                                        }
                                        else
                                            {
                                              console.log(mad[i]);
                                            }

                                }
  </script>
