import React from 'react'

const Toaster = ({text}: any) => {
  return (
        <div className="alert alert-success mt-3 toaster" role="alert">
            {text}
        </div>
  )
}

export default Toaster
