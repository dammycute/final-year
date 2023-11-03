// import Dummy from './command-me';

import Header from '../common/header'
import Sidebar from '../common/sidebar'
import CreateSub from './create-sub'

const CreateTask = () => {
  return (
    <div className='dash-body h-screen'>
            <Header />

            <div className="layout flex">
                <Sidebar customClass='w-1/6' />

                <div className="container w-5/6">
                    {/* <Wrapper/>  */}
                    <CreateSub/>
                </div>
            </div>
        </div>
  )
}

export default CreateTask