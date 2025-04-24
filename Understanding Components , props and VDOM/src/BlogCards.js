import React from 'react'

function BlogCards({title,content,isFeatured}) {
  return (
    <>
     <div>
        <div>
            <h1>{title}</h1>
        </div>
        <div>
             <p>{content}</p>
        </div>
        <div>
            <button disabled ={isFeatured}>click</button>
        </div>
     </div>
    </>
  )
}

export default BlogCards