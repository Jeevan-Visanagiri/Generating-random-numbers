let random=(mult) =>{s
    return ((Math.floor(Math.random()*mult)>=10000000) & (Math.floor(Math.random()*mult) <=99999999) )?Math.floor(Math.random()*mult) : random(mult) 
  } 
console.log('The 8 digit Random number are '+random(10));