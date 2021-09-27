import { types,flow,onSnapshot,applySnapshot,getSnapshot } from "mobx-state-tree";
import axios from 'axios'
const UserModel = types
.model('User',{
    userId:types.string,
    userName:types.string,
    math:types.number,
    hindi:types.number
})
.actions((self)=>({
    setMath(value)
    {
        self.math=parseInt(value)
    },
    setHindi(value)
    {
        self.hindi=parseInt(value)
    },
    getMathMark: flow (function* getMathMark(){
        let response= yield axios.get("api")
        //FOR UPDATING STATE 
        applySnapshot(self,
            {
                ...self,
                math:response
            })
    }),
    
    //ONPAGE LOAD CALLED IMMEDIATELY
    afterCreate(ABC)
    {
       
        onSnapshot(self,(snapShot)=>{ console.log("onSnapshot ===>",snapShot)})
        console.log("onLoad MST",ABC)
    }
}))
.views((self)=>({
    get totalMarks(){
        return self.math + self.hindi
    },
    get percentage(){
        return ((self.math + self.hindi)/200)*100
    }
}))


const users=UserModel.create({
    userId:"acd123",
    userName:"Hemant",
    math:90,
    hindi:80

})

console.log("user Dtaaaa MST ===>",getSnapshot(users))

export default users