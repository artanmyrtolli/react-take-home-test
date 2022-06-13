import React from "react";
import BallotCategory from "./BallotCategory";

const Ballot = ({ ballot, tallySelections }) => {

  const renderBallot = (ballot) => {
    return ballot.map(category => {
      return <BallotCategory
        key={category.id}
        ballot={category}
        tallySelections={tallySelections}
      />
    })
  }

  return (
    <>
      {renderBallot(ballot)}
    </>
  )

}



export default Ballot