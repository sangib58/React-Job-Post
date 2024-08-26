import JobListings from "../components/JobListings"

const JobsPage = () => {
  return (
    <section className='bg-blue-50 px-6 py-4'>
      <JobListings isHome={true}/>
    </section>
  )
}

export default JobsPage