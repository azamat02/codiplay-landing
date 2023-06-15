import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

interface CustomRadioGroupProps {
  list: string[],
  selected: string,
  setSelected: (value: string) => void;
}

export default function CustomRadioGroup({selected, setSelected, list}: CustomRadioGroupProps) {

  return (
    <div className="">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup value={selected ?? list[0]} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {list.map((item) => (
              <RadioGroup.Option
                key={item+'-1'}
                value={item}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-300'
                      : ''
                  }
                  ${
                    checked ? 'bg-blue-900 bg-opacity-75 text-white' : 'bg-white'
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 border-gray-300 border-[1px] focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {item}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? 'text-blue-100' : 'text-gray-500'
                            }`}
                          >
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked ? (
                        <div className="shrink-0 text-white">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      ) :  
                      <div className="shrink-0 text-white">
                        <div className="w-6 h-6 rounded-full border-[1px] bg-lightgray"></div>
                      </div>
                    }
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
