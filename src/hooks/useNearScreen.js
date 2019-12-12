import { useEffect, useState, useRef } from 'react'

export const useNearScreen = () => {
  const [show, setShow] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver(entries => { // <-- Create the observer and define what should happen with each ref
        const { isIntersecting } = entries[0]
        if (isIntersecting) { //  <-- In case that the reference (in this case the article) is in the viewport, I render it
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(ref.current)
    })
  }, [ref])

  return [show, ref] // <-- Return show to evaluate inside the logic
}
