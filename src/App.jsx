import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import AddJobPage from './pages/AddJobPage'
import EditJobPage from './pages/EditJobPage'
import JobDetail,{jobLoader} from './pages/JobDetail'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
  //Add New Job
  const addJob=async (obj)=>{
    await fetch('/api/jobs',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(obj)
    })
    return;
  }

  //Delete a job
  const deleteJob=async(jobId)=>{
    await fetch(`/api/jobs/${jobId}`,{
      method:'DELETE'
    })
    return;
  }

  //Edit a Job
  const editJob=async(obj)=>{
    await fetch(`/api/jobs/${obj.id}`,{
      method:'PUT',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(obj)
    })
    return;
  }

  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/jobs' element={<JobsPage/>}/>
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
        <Route path='/edit-job/:id' element={<EditJobPage editJobSubmit={editJob}/>} loader={jobLoader}/>
        <Route path='/jobs/:id' element={<JobDetail deleteSingleJob={deleteJob}/>} loader={jobLoader}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App