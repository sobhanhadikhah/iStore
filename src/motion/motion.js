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
export const listVaritions  = {
    hidden:{
        scale:0
    },
    visible:{
        scale:1,
        rotate:360,
        

    },
    
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
        y: -100

    },

    visible:{
        y: 0,
        transition:{
            duration: 1
        }
    }
}







