import { Outlet } from "react-router-dom"
import Header from "../Header"
import Sidebar from "../Sidebar"
import { Suspense } from "react"

export const Layout = () => {
    return <div className="d-flex flex-column h-100">
        <Header />
        <div className="d-flex flex-grow-1">
            <Sidebar />
            <div className='flex-grow-1 p-3'>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Outlet />
                </Suspense>
            </div>
        </div>
    </div>

}