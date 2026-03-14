function solution(babbling) {
     const words = ["aya", "ye", "woo", "ma"]
     let count = 0
     
     for(let b of babbling) {
         let prev =""
         let valid = true;
         
         while(b.length> 0) {
             let matched = false
             
             for(let w of words) {
                 if(b.startsWith(w) && prev !== w) {
                     b = b.slice(w.length)
                     prev = w
                     matched = true
                     break;
                 }
             }
               if(!matched) {
                     valid = false;
                     break
                 }
         }
             if(valid) count++
         
     }
    return count
}