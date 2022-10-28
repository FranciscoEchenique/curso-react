import { useFetch } from "../hooks/useFetch"

export const MultiplesCustomHooks = () => {

  const url = 'https://www.breakingbadapi.com/api/quotes/1';

  useFetch( url )

  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />
    </>
  )
}
