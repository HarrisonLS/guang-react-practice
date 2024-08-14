
import { create} from 'zustand'
import Container from '../materials/Container'
import { Button } from 'antd'

export const useComponentConfigStore = create((set)=>({
    componentConfig:{
        Container:{
            name:'Container',
            defaultProps:{},
            component:Container
        },
        Button:{
            name:'Button',
            defaultProps:{type:'primary', text:'按钮'},
            component:Button,
        }
    },
    registerComponent:(name,componentConfig)=> set((state)=>{
        return {
            ...state,
            componentConfig:{
               ...state.componentConfig,
                [name]:componentConfig
            }
        }
    })
}))