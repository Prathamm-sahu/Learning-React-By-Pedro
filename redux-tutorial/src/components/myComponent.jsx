import { useAppSelector } from "../redux/hooks"

export const MyComponent = () => {
  const count = useAppSelector(state => state.counter)
  
  return (
    <h1>My Comp: {count}</h1>
  )
}