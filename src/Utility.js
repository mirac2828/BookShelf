

export const upperCase=(str)=>{
    
    
    let a=str.split(" ")

    
    
    
  let tempWord=[]

    for(let i=0;i<a.length;i++)
   
   
    { 
        let word="" 

        for(let j=0;j<a[i].length;j++)

        {  if(j===0){ word+=a[i][0].toUpperCase() 
            }
            else{ word+=a[i][j] }}
       
        
tempWord.push(word)

    }
   

return tempWord.join(" ")
 }
