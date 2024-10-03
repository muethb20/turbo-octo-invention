import * as React from 'react'
import {Outlet} from "react-router-dom";


const Header: React.FC = () => {
    return (
        <div>
            <h1>Teso</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;