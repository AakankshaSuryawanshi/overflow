import React from 'react'


const WidgetTags =()=>{
    const tags=['c','css','express','firebase','html','java','javascript','mern','mongodb','mysql','next.js','php','python','reactjs']
    return(
        <div className='Widget-Tags'>
              <h4>Watched tags</h4>
              <div className='Widget-Tags-div'>
              {
                tags.map((tag)=>(
                    <p key={tag}>{tag}</p>
                ))
              }
              </div>
        </div>
    )
}

export default WidgetTags
