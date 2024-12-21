import { Routes, Route } from 'react-router-dom';
import Home from '../pages/public/Home';

const PublicRoute = () => {

    return (

        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    )

}


export default PublicRoute;