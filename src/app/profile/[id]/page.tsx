import React from 'react'

const page = ({params}:any) => {
  return (
    <div>
        <h1>
            User profile of {params.id}
        </h1>
    </div>
  )
}

export default page;