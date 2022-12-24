import Bin from "../Icons/Bin"
import Plus from "../Icons/Plus"
import Edit from "../Icons/Edit"
import Button from "../ui/Button"
import Check from "../Icons/Check"

import { useState } from "react"

const ActionsHeader = () => {
  let [isChecked, setIsChecked] = useState(true)

  const handleCheckClick = () => {
    if (isChecked) {
      setIsChecked(false)
    } else {
      setIsChecked(true)
    }
  }

  return (
    <div className="flex flex-row px-2 py-2 border-b-2">
      <Button>
        <Plus className="mx-2" />
      </Button>
      <Button>
        <Edit className="mx-2" />
      </Button>
      <Button>
        <Bin className="mx-2" />
      </Button>
      <Button onClick={handleCheckClick}>
        <Check className="absolute right-10 top-20" isChecked={isChecked} />
      </Button>
    </div>
  )
}

export default ActionsHeader
