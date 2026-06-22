import { use, useState ,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Toaster } from 'react-hot-toast'

function App() {

  
 return(<div>

<Toaster
  position="top-right"
  reverseOrder={false}
/>
  </div>
 )

}

export default App
