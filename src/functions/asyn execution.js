export default function exec_async(cb, params ={}) {
  let breaker =0;
  let int = setInterval(() => {
    try {
      breaker++
      cb(params);
      clearInterval(int);
    } catch (error) {
      if(breaker === 10000000*10000000){
        console.log(error);
        console.error("Error! Expired max time execution.");
        clearInterval(int);
      }
    }
  }, 100);
}

