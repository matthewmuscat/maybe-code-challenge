import React from "react"
import { Tip } from "../../models/tip"
import Accordion from "./Accordion"

// Declare Props type.
type Props = {
  tips: Tip[]
}

// Componetize our "Tips" for consistency.
function Tips({ tips }: Props) {
  return (
    <div className="my-8">
      {/* Render each Tip as an Accordion */}
      { tips.map((tip: Tip) => (
        <Accordion key={tip.type} tip={tip} />
      ))}
    </div>
  )
}

export default Tips
