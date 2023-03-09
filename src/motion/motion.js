export const fadeIn = {
    hidden:{
        opacity:0,
        y:-1000
        
    },
    visible:{
        y:0,
        opacity:1,
        
        transition:{
            duration:1,
            
        }
    },
    
}
export const BoxVarint = {
    hidden:{
        x: -1000 
    },
    visible:{
        x:0,
        when:"beforeChildren"
    }
}
export const listVaritions  = {
    hidden:{
        
        scale:0
    },
    visible:{
        scale:1,
        
        rotate:360,
        transition:{
            delay:1,
            duration: 1
            
        },
        
    },
    
}