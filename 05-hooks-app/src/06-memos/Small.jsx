import React from "react";

export const Small = React.memo(({ counter }) => {

    console.log('Se renderizó');

  return (
    <small>{ counter }</small>
  )
});
