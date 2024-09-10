import React, { useEffect, useState } from 'react'

export function MainPage({user}) {

  const [info, setInfo] = useState({name:user.name, lastname: user.lastname})

  useEffect(()=>{
    setInfo({name:user.name, lastname:user.lastname})
  }, [{name:user.name, lastname:user.lastname}])

  return (
    <div>Добро пожаловать {info.name} {info.lastname}, мы тебя ждали</div>
  )
}
