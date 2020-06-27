import React from 'react'

import { OzanButtonComponent as Button} from 'react-button-oa'

const App = () => {

  function handleClick() {
      alert("Button clicked!")
  }

  return <Button onClick={handleClick} text="Button!"/>

}

export default App
