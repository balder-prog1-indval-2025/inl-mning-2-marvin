let g = new Grid(22,12,outerWidth/4,0,700)
let yttreGrid = g.cell

let timeout = 0 
let rad = 0 
let column = 0
let block = [
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

let height = 2 
let width = 2 
let colojr = randomItem ("red", "green", "blue", "yellow", "purple", "white")
update =  () => {
    
    clear ()
    g.draw ()
    timeout += deltaTime
    if (timeout > 100 ){
        

        
        timeout = 0 
        if( rad != 18 + height && g.cell(rad+height,column).color == null) { 
          g.cell(rad,column).color = null
            rad++

        }
        else {rad = 0
           colojr = randomItem ("red", "green", "blue", "yellow", "purple", "white")
       }

    }
  if (keyboard.d){
    g.cell(rad,column).color = null
column++ 

  }
  if (keyboard.a){g.cell(rad,column).color = null
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


