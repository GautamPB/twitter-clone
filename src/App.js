import './App.css'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Login from './components/Login'

function App() {
    const user = null

    return (
        <div className="app">
            {!user ? (
                <Login />
            ) : (
                <>
                    <Sidebar />
                    <Feed />
                </>
            )}
        </div>
    )
}

export default App
