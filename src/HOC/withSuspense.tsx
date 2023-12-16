/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

function withSuspense(ChildrenComponent: React.FC, LoadingComponent: React.ReactNode | null = null) {
  return function Loadable(props: any) {
    return (
      <React.Suspense fallback={LoadingComponent || 'Lazy components is loading ...'}>
        <ChildrenComponent {...props} />
      </React.Suspense>
    )
  }
}

export default withSuspense
