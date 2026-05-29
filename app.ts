let g = new Grid(22,12,outerWidth/4,0,700)
let yttreGrid = g.cell

let timeout = 0 
let rad = 0 
let column = 0
/*let block = [
  {
    rad: 0,
    column: 0
  },                                                                                                                            
  {
    rad:0,
    column:1 
  }, 
  { 
    rad:1, 
    column:0
  },
  {
    rad:1,
    column:1 
  }
]
*/
let avlång = [
  {rad:0,
    column:0

  },
  {rad:1,
  column:0

},
{rad:2,
column: 0 

},
{rad:3,
column:0 

},
]


let zVänster= [
  {rad: 0,
    column:0 
    
  },
   
  {rad: 0,
      column: 1
  },
  
  {rad: 1, 
  column: 1   
  },
  
  {rad:1, 
  column:2
  },
  ]


  let colojr = randomItem ("red", "green", "blue", "yellow", "purple", "white")



/*  let h = 4
let w = 1
let colojr = randomItem ("red", "green", "blue", "yellow", "purple", "white")
update =  () => {
    
    clear ()
    g.draw ()
    timeout += deltaTime
    if (timeout > 100 ){
        

        
        timeout = 0 
        if( rad != 14 + h && g.cell(rad+h,column).color == null) { 
         
          
          for(let i = 0 ; i< avlång.length; i++){
            g.cell(rad + avlång[i].rad ,column + avlång[i].column) .color = null
          }
        
          rad++

        }
        else {rad = 0
           colojr = randomItem ("red", "green", "blue", "yellow", "purple", "white")
       }

    }
  if (keyboard.d){
    g.cell(rad,column).color = null
   
    for(let i = 0 ; i< avlång.length; i++){
      g.cell(rad + avlång[i].rad ,column + avlång[i].column) .color = null
    }

    column++ 

  }
  if (keyboard.a){g.cell(rad,column).color = null
    
    for(let i = 0 ; i< avlång.length; i++){
      g.cell(rad + avlång[i].rad ,column + avlång[i].column) .color = null
    }
    
    column--
  }
  if ( column == 12 ){ 
    column = 11
  }
  if(column < 0) {
  column = 0
  } 
  //if (g.cell(rad,column).color != "" )

  for(let i = 0 ; i< avlång.length; i++){
    g.cell(rad + avlång[i].rad ,column + avlång[i].column) .color = colojr
  }


}
*/










let längd = 2 
let bredd = 4

update =  () => {
    
  clear ()
  g.draw ()
  timeout += deltaTime
  if (timeout > 100 ){
      

      
      timeout = 0 
      if( rad != 18 + längd&& g.cell(rad+längd,column).color == null) { 
       
        
        for(let i = 0 ; i< zVänster.length; i++){
          g.cell(rad + zVänster[i].rad ,column + zVänster[i].column) .color = null
        }
      
        rad++

      }
      else {rad = 0
         colojr = randomItem ("red", "green", "blue", "yellow", "purple", "white")
     }

  }
if (keyboard.d){
  g.cell(rad,column).color = null
 
  for(let i = 0 ; i< zVänster.length; i++){
    g.cell(rad + zVänster[i].rad ,column + zVänster[i].column) .color = null
  }

  column++ 

}
if (keyboard.a){g.cell(rad,column).color = null
  
  for(let i = 0 ; i< zVänster.length; i++){
    g.cell(rad + zVänster[i].rad ,column + zVänster[i].column) .color = null
  }
  
  column--
}
if ( column == 12 ){ 
  column = 11
}
if(column < 0) {
column = 0
} 
//if (g.cell(rad,column).color != "" )

for(let i = 0 ; i< zVänster.length; i++){
  g.cell(rad + zVänster[i].rad ,column + zVänster[i].column) .color = colojr
}


}






/*let height = 2 
let width = 2 
//let colojr = randomItem ("red", "green", "blue", "yellow", "purple", "white")
update =  () => {
    
    clear ()
    g.draw ()
    timeout += deltaTime
    if (timeout > 100 ){
        

        
        timeout = 0 
        if( rad != 18 + height && g.cell(rad+height,column).color == null) { 
         
          
          for(let i = 0 ; i< block.length; i++){
            g.cell(rad + block[i].rad ,column + block[i].column) .color = null
          }
        
          rad++

        }
        else {rad = 0
           colojr = randomItem ("red", "green", "blue", "yellow", "purple", "white")
       }

    }
  if (keyboard.d){
    g.cell(rad,column).color = null
   
    for(let i = 0 ; i< block.length; i++){
      g.cell(rad + block[i].rad ,column + block[i].column) .color = null
    }

    column++ 

  }
  if (keyboard.a){g.cell(rad,column).color = null
    
    for(let i = 0 ; i< block.length; i++){
      g.cell(rad + block[i].rad ,column + block[i].column) .color = null
    }
    
    column--
  }
  if ( column == 12 ){ 
    column = 11
  }
  if(column < 0) {
  column = 0
  } 
  //if (g.cell(rad,column).color != "" )

  for(let i = 0 ; i< block.length; i++){
    g.cell(rad + block[i].rad ,column + block[i].column) .color = colojr
  }


//if( rad == 21) {
//g.cell(21, column )
 

//}

}
*/

