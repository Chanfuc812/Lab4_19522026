import * as React from 'react'

const MyFeature = React.lazy(() => Promise.all([
    import("./MyFeature"),
    new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 3000)
    })
]).then(([m]) => m)
)

export default function MyPage() {
  return (
    <>
        <h1>MY PAGE</h1>
        <MyFeature/>
    </>
  )
}
