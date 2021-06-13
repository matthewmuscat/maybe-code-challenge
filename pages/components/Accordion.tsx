import React from "react"
import { Disclosure } from "@headlessui/react"
import { Tip } from "../../models/tip"

// Declare Props type.
type Props = {
  tip: Tip
}

// Declare colours based on Tip types.
enum TipIconColour {
  estate = "teal",
  medical = "yellow",
  retirement = "orange",
  savings = "pink",
}

// Componetize our "Accordion", which is a "Disclosure" under the hood.
// Manages state self-sufficiently
// https://headlessui.dev/react/disclosure
function Accordion({ tip }: Props) {
  return (
    <div className="w-full px-4 pt-6">
      <div className="w-full max-w-md p-4 mx-auto bg-gray-900 rounded-2xl hover:bg-gray-700">
        <Disclosure as="div">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center justify-between w-full py-2 text-sm font-medium text-left rounded-lg focus:outline-none focus-visible:ringfocus-visible:ring-opacity-75">
                <div className="flex items-center">
                  <div className={`bg-${TipIconColour[tip.type]} bg-opacity-10 w-8 h-8 rounded-md flex items-center justify-center`}>
                    <img alt={tip.type} className="w-6 h-6" src={`/icons/${tip.type}.svg`} />
                  </div>
                  <h2 className="pl-4 pr-4 font-bold">{tip.title}</h2>
                </div>
                <img alt={"chevron down"} className={`${!open ? "transform -rotate-90" : ""}`} src="/icons/chevron-down.svg" />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-2 pb-2 ml-6 text-sm text-left text-gray">
                <p>{tip.description}</p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}

export default Accordion


