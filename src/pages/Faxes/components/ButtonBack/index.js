import React, {useContext} from 'react'

import FaxPageContext from "../../../../contexts/FaxPageContext"
import ButtonBackward from "../../../../components/Buttons/ButtonBackward";
import {getFaxes} from "../../../../api/pages/faxes-page";

const ButtonBack = () => {
  const {activeTab, setButtonBackState, setLoading, updateData, setSearchParams, setSearchBarState} = useContext(FaxPageContext)

  const clickHandler = () => {
    setButtonBackState(false)
    setLoading(true)
    getFaxes(activeTab, 1)
      .then((response) => {
        updateData(response)
      })
      .finally(() => {
        setLoading(false)
        setSearchParams(null)
        setSearchBarState(true)
      })
  }

  return (
    <>
      <ButtonBackward onClick={clickHandler}>
        Back to list
      </ButtonBackward>
    </>
  )
}

export default ButtonBack