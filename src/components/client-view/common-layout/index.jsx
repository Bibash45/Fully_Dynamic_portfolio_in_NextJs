"use client"
import { useParams } from "next/navigation"
import Navbar from "../navbar"

export default function CommonLayout({children}){
    const pathname = useParams()

    return (
        <>
        {pathname !== '/Admin' ? <Navbar /> : null}
        {children}
        </>
    )
}