import React, { useEffect, useState } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { loadEmojies } from '../actions'

// const Emojis = ({ emojies, loadEmjoies }) => {

//     useEffect(() => {
//         loadEmjoies()

//         console.log("+++++");
//         console.log(emojies);
//         console.log("++++")
//     }, [])

//     console.log("------");
//     console.log(emojies);
//     console.log("------");

//     return (
//         <div>

//             <h1>Emjois List</h1>
//             {console.log('render ++')}


//             <ul >
//                 {console.log('render ==')}
//                 {
//                     Object.keys(emojies).map((key, index) => {

//                         return <li key={index}>
//                             <img src={emojies[key]} alt="333" />
//                         </li>
//                     })
//                 }
//             </ul>

//         </div >

//     )
// }

// const mapStateToProps = (state) => {
//     const { emojies: { emojies, err } } = state
//     return {
//         emojies,
//         err
//     }
// }

// const mapActionToProps = {
//     loadEmjoies
// }

// export default connect(mapStateToProps, mapActionToProps)(Emojis)



const Emojies = () => {
    // equal to mapStateToProps
    const { emojies } = useSelector(state => {
        console.log(state.emojies);
        return { emojies: state.emojies.emojies }
    })

    // equal to mapActionToProps
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadEmojies())
    }, [])

    return (
        <div>

            <h1>Emjois List</h1>
            {console.log('render ++')}

            <ul >
                {console.log('render ==')}
                {
                    Object.keys(emojies).map((key, index) => {

                        return <li key={index}>
                            <img src={emojies[key]} alt="333" />
                        </li>
                    })
                }
            </ul>

        </div >

    )
}

export default Emojies