const Contact = () => {
  return (
    <div className="max-w-[1240px] m-auto p-4 h-[80vh]">
      <h1 className="text-5xl font-bold text-center p-10">Lets work together</h1>
      <form className='max-w-[6--px] m-auto'>
        <div className="grid grid-cols-2 gap-2">
          <input className="border shadow-lg p-3 " type='text' id='name' placeholder="Name" />
          <input className="border shadow-lg p-3" type='email' id='email' placeholder="Email" />
        </div>
        <div>
          <input className="border shadow-lg p-3 w-full my-4" type='text' id='subject' placeholder="Subject" />
          <textarea className='border shadow-lg p-3 w-full' id='message' cols='30' rows='10' placeholder="Message" />
          <button className="border shadow-lg p-3 w-full mt-2">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Contact