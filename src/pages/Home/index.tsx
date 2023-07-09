import React from 'react'
import './style.scss'
import { Button } from '@mui/material'

export const Home = () => {
    return (
        <>
            <header className="header-wrapper">
                <Button variant="contained">Войти в личный кабинет</Button>
            </header>
            <main className="main-background"></main>
        </>
    )
}
