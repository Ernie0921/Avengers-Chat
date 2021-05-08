import React from "react";
import { auth } from "../config";

const SignOut = ({ setShowListMenu }) => //if user is logged in then display this signout button 
    auth.currentUser && (
        <button 
            className="logout"
            onClick={() => {
                auth.signOut();
                setShowListMenu(false);
            }}
        >
            Sign Out
        </button>
    )

export default SignOut;