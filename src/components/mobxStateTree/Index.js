import React from 'react'
import { observer } from 'mobx-react-lite'

function Index({Store}) {
    // console.log("mst ===>",Store.userName)

    let newMath = ()=>{
        Store.setMath("100")
    }

    let newHindi = ()=>{
        Store.setHindi("20")
    }


    let newMathMark = ()=>{
        Store.getMathMark()
    }
    return (
        <div>
            <h1>{Store.userName} :- {Store.userId}</h1>
            <h3>Maths Marks :- {Store.math}</h3>
            <h3>Hindi Marks :- {Store.hindi}</h3>
            <h3>Total Marks :- {Store.totalMarks}</h3>
            <h3>Percentage :- {Store.percentage} %</h3>
            <button onClick={newMath}>update Maths Mark</button>
            <button onClick={newHindi}>update Hindi Mark</button>
            <button onClick={newMathMark}>Call Api</button>


        </div>
    )
}

export default observer(Index) 
