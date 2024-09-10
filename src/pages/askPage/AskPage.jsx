import React, { useEffect, useState } from 'react'
import {MainPage} from '../mainPage/MainPage'
import {ErrorPage} from '../errorPage/ErrorPage'

export default function AskPage() {
    const [info, setInfo] = useState({name:'', lastname:''})

    const getInfo = () =>{
        const user = prompt('Введите ваше имя и фамилию')
        const arr = user.split(' ')
        const name = arr[0].charAt(0).toUpperCase() + arr[0].slice(1).toLocaleLowerCase();
        const lastname = arr[1].charAt(0).toUpperCase() + arr[1].slice(1).toLocaleLowerCase();
        setInfo({name, lastname})
        
    }

    useEffect(()=>{
        getInfo()
    },[])

  return (
    info.name === 'John' && info.lastname === 'Johns' ? 
    <MainPage user = {{name: info.name, lastname: info.lastname}}/>:
    <ErrorPage user = {{name: info.name, lastname: info.lastname}} />
  )
}
