import axios from 'axios'
import React from 'react'

export const Omdb1 = () => {

    const getMovieData = async()=>{

            const res = await axios.get("https://www.omdbapi.com/",{
                params:{
                    //s:"avatar",
                    i:"tt0499549",
                    apikey:"9d57be0b"
                }
            })

            console.log(res.data)

    }
  return (
    <div>
        <button onClick={()=>{getMovieData()}}>get</button>
    </div>
  )
}
