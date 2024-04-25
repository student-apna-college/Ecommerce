import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'

 function CreateCategory() {
  return (
    <div>
        <Layout title={"Dashboard - create category"}>
        <div className='container-fluid m-3 p-3'>
            <div className='row'>
                <div className='col-md-3'>
                <AdminMenu></AdminMenu> 
                </div>              
                <div className='col-md-9'>
                    <h1>CreateCategory</h1>
                </div>
            </div>
        </div>
    </Layout>
    </div>
  )
}
export default CreateCategory