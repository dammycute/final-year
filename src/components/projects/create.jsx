import React from 'react'
import Header from '../common/header'
import Sidebar from '../common/sidebar'
import CreateForm from './create-form'

const ProjectCreate = () => {
  return (
    <div className='dash-body h-screen'>
            <Header />

            <div className="layout flex">
                <Sidebar customClass='w-1/6' />

                <div className="container w-5/6">
                    {/* <Wrapper/>  */}
                    <CreateForm/>
                </div>
            </div>
        </div>
  )
}

export default ProjectCreate