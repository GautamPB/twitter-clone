import './App.css'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Login from './components/Login'
import { useStateValue } from './components/StateProvider'

function App() {
    // const user = null
    const [{ user }, dispatch] = useStateValue()

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
