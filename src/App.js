import { useEffect, useState } from 'react';
import api from './Api/Api';
import './App.css';
import Ballot from './Components/Ballot'
import Result from './Components/Result';

function App() {
  const [ballot, setBallot] = useState([])
  const [userBallot, setUserBallot] = useState({})
  const [modal, setModal] = useState(false)

  useEffect(() => {
    api.getBallotData().then(data => {
      setBallot(data.items)
      initializeUserBallot(data.items)
    })
  }, [])

  const initializeUserBallot = (selections) => {
    let emptyBallot = {}
    selections.forEach(category => emptyBallot[category.id] = '')
    setUserBallot(emptyBallot)
  }

  const tallySelections = (selection, category) => {
    let newUserBallot = { ...userBallot }
    newUserBallot[category] = selection
    setUserBallot(newUserBallot)
  }

  const toggleModal = () => {
    modal ? setModal(false) : setModal(true)
  }

  return (
    <>
      <header className='App-header'>
        <h1>Awards 2022</h1>
      </header>
      <div className="App">
        <Ballot ballot={ballot} tallySelections={tallySelections} />
      </div>
      <button onClick={() => toggleModal()}>Submit All Ballots</button>
      {modal && <Result toggleModal={toggleModal} userBallot={userBallot} />}
    </>
  )
}

export default App;
