import React from 'react'

function Users(props) {

const {data} = props

    return (
        <div key={data.id} className='bg-slate-200 mx-5 my-5 p-5 rounded-xl grid grid-rows-1 justify-center'>
        <img src={data.picture.medium} alt="Avatar" className='rounded-full mx-auto' />
        <p className="lg:text-xl mx-auto text-grey-700 mt-2 font-sans" >Name: {data.name.first}{data.name.last}</p>
        <div className="lg:font-medium mx-auto text-grey-400 font-serif">Email:{data.email}</div>
        <div className="lg:font-medium mx-auto text-grey-400 font-mono">Location:{data.location.city}</div>
        <span className="lg:font-medium mx-auto text-grey-400 font-mono">Phone:{data.phone}</span>
        </div>


        // <div className='grid sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        //     {
        //         User.map((data) => {
        //             return (
        //                 <div key={data.id} className='bg-slate-200 mx-5 my-5 rounded-xl grid grid-rows-1 justify-center'>
        //                     <img src={data.picture.medium} alt="Avatar" className='rounded-full mx-auto' />
        //                     <p className="lg:text-xl mx-auto text-grey-700" >Name: {data.name.first}{data.name.last}</p>
        //                     <div className="lg:font-medium mx-auto text-grey-400">Email:{data.email}</div>
        //                     <div className="lg:font-medium mx-auto text-grey-400">Location:{data.location.city}</div>
        //                     <span className="lg:font-medium mx-auto text-grey-400">Phone:{data.phone}</span>

        //                 </div>
        //             )
        //         })
        //     }
        // </div>
    )
}

export default Users
