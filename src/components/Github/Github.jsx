import React, { useState } from "react";
import { useEffect } from "react";
export default function Github()
{
    const[data, setData] = useState();
    useEffect(
        () =>
        {
        fetch('https://api.github.com/users/prathmeshparit')
        .then(res => res.json())
        .then(data => {
                setData(data);
        })
        },
        []
    )



    return(
      
        <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
            Github Followers:{data.followers}
            <img src={data.avatar_url} alt="git" width={100}/>
            
        </div>

    );
}