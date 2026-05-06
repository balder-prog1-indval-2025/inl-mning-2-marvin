let g = new Grid(22,12,outerWidth/4,0,700)
let yttreGrid = g.cell

let timeout = 0 
let rad = 0 
let column = 0

update =  () => {
    
    clear ()
    g.draw ()
    timeout += deltaTime
    if (timeout > 10 ){
        

        
        timeout = 0 
        if( rad != 21 && g.cell(rad+1,column).color!= "") { 
          g.cell(rad,column).color = ""
            rad++

        }
        else {rad = 0 }

    }
  if (keyboard.d){
    g.cell(rad,column).color = ""
column++ 

  }

  if (keyboard.a){g.cell(rad,column).color = ""
    column--
  }
  if ( column == 12 ){ 
    column = 11
  }
  if(column < 0) {
  column = 0
  }
  //if (g.cell(rad,column).color != "" )

  
g.cell(rad,column).color = "red"

//if( rad == 21) {
//g.cell(21, column )



//}

}

