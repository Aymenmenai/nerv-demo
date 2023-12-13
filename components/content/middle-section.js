import React from 'react'
import Page from '../layouts/containers/page'

const MiddleSection = () => {
  return (
    <Page>
       <div style={{backgroundColor:'orange'}} className='w-full h-full flex p-10  justify-around items-center flex-col'> 
            <div className='text-8xl flex-1 flex justify-center items-center'>CHOOSE YOUR TASTE</div>
            <div className='flex justify-between flex-wrap w-[50svw]'>
               { [...Array(5).keys()].map((el,index)=>{
                return <div key={index} className='grid gap-2 text-center cursor-pointer hover:scale-105 transition-all ease-in-out'>
                    <div className='rounded-full w-32 h-32 border flex justify-center items-center overflow-hidden'>cir</div>
                    <div>{el}</div>
                </div>
               })}
            </div>
       </div>
    </Page>
  )
}

export default MiddleSection