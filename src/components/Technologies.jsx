import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandAngular } from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si'
import { TbBrandNodejs } from 'react-icons/tb'
import { SiSpringboot } from 'react-icons/si'
import { DiMysql } from 'react-icons/di'
import { DiAws } from 'react-icons/di'
import { DiJava } from 'react-icons/di'
const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h2 className='text-center text-4xl my-20'>Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiJava className='text-7xl text-orange-700'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiSpringboot className='text-7xl text-green-400'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNodejs className='text-7xl text-green-400'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiMysql className='text-7xl text-blue-400'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className='text-7xl text-green-400'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiAws className='text-7xl text-orange-400'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 opacity-25">
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 opacity-25">
                <TbBrandAngular className='text-7xl text-red-400'/>
            </div> 
        </div>
    </div>
  )
}

export default Technologies