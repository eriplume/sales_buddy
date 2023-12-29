import React from 'react'
import CustomersPie from './CustomersPie'

export default function GraphArea() {
  return (
    <div className="flex flex-row justify-center w-full max-w-lg pt-4 pb-7 md:py-7 bg-white rounded-md">
      <CustomersPie/>
    </div>
  )
}
