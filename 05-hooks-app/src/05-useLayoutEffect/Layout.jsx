import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"
import { LoadingQuote } from "../03-examples/LoadingQuote";
import { Quote } from "../03-examples/Quote";

export const Layout = () => {

  const { counter, increment } = useCounter(1);

  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;

  const { data, isLoading, hasError } = useFetch( url );

  const { quote, author } = !!data && data[0];

  const handleNextQuote = () => {
    increment();
  }

  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />

        {
          isLoading 
          ? <LoadingQuote /> 
          : <Quote quote={ quote } author={ author } />
        }
        <button className="btn btn-primary" onClick={ handleNextQuote }>Next Quote</button>
    </>
  )
}
