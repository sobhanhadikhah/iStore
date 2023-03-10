export const fadeIn = {
    hidden:{
        opacity:0,
        scale:0.5
        
    },
    visible:{
        
        opacity:1,
        scale:1,
        transition:{
            duration: 0.5
            
        }
    },
    
}
export const BoxVarint = {
    hidden:{
        x: -1000 
    },
    visible:{
        x:0,
        transition:{
            when:"beforeChildren",
            staggerChildren: 0.2
        }
    }
}

export const FadeinNavbar = {
    hidden:{
        scale:.8,
        opacity:0
    },
    visible:{
        scale:1,
        opacity:1,
        transition:{
            when: "beforeChildren",
            staggerChildren: 0.2

        }
    }
}
export const  varBox = {
    hidden:{
        opacity:0     
    },
    visible:{
    opacity:1,
    transition: {
        when:"",
        //delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
}
export const itemBox = {
    hidden:{
        scale: 0.4
    },
    visible:{
        scale: 1,
        transition:{
            damping:10,
            type: "spring",
             stiffness: 100,

        }
        
    }
}
export const mobileNavVarient = {
    hidden:{
        x: -1000

    },

    visible:{
        x: 0,
        transition: {
            type: "tween",
            duration: 0.5,
            delayChildren: 0.3,
            staggerChildren: 0.5
          }
    },
    exit:{
        
        x:-1000,
        transition: {
            type: "spring",
            bounce: 0,
            duration: 0.3
          }
    }
    

}

export const listVaritions  = {
    hidden:{
        opacity: 0,
        scale:0,  
          transition: { duration: 0.2 }

    },
    visible:{
        opacity: 1,
        scale:1,
    transition:
     {
        
     type: "spring",
      stiffness: 300,
       damping: 24 
    }
    },
    
    
}
export const closeMenuVar = {
    hidden:{
        scale:0,
        opacity:0
    },
    visible:{
        scale:1,
        opacity:1,
        transition:{
            type: "spring",
            stiffness: 300,
             damping: 24 ,
        }
    }
}
export const popCards = {
    hidden:{
        opacity:0,
        scale:0,
        display:"hidden"
    },
    visible:{
        opacity:1,
        scale:1,
        transition:{
            
            duration:0.5
        }
    }
}





