import React, { useEffect, useState } from 'react'

export function ErrorPage({user}) {

  const [info, setInfo] = useState({name:user.name, lastname: user.lastname})

  useEffect(()=>{
    setInfo({name:user.name, lastname:user.lastname})
  }, [{name:user.name, lastname:user.lastname}])

  console.log(info);

  return (
    <div>{info.name} {info.lastname}, мы тебя не ждали</div>
  )
}
