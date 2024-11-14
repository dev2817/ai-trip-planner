import { signInWithPopup } from "firebase/auth";
import { firebase } from "../../utils/firebaseConfig";
import { authApi } from "../../../../apis/authApis";
import { useAuth } from "../../utils/useAuth";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import "./GoogleButton.css"
import { useNavigate } from "react-router-dom";

export default function GoogleButton({ name }) {
    const { ipAddress, projectCode,successNavigate, projectRole } = useAuth();
    const [userData, setUserData] = useState({
        googleUid: "",
        name: "",
        email: "",
        profileImage: "",
        roles: [],
        projectCode: "",
        ip: ""
    });
    const navigate = useNavigate();

    const updateUserData = (
        displayName,
        email,
        photoURL,
        uid
    ) => {
        setUserData((prevData) => ({
            ...prevData,
            name: displayName || prevData.name,
            email: email || prevData.email,
            profileImage: photoURL || prevData.profileImage,
            googleUid: uid,
        }));
    };

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(firebase.auth, firebase.provider);
            const user = result.user;

            const userDetails = {
                googleUid: user.uid,
                name: user.displayName,
                email: user.email,
                profileImage: user.photoURL,
                roles: userData.roles,
                projectCode: userData.projectCode,
                ip: userData.ip
            };
            updateUserData(userDetails.name, userDetails.email, userDetails.profileImage, userDetails.googleUid)

            const response = await authApi.signWithGoogle(userDetails);
            if (response.data.success) {
                if (response.data.completeProfile === false) {
                    localStorage.setItem('email', user.email)
                    navigate('/auth/complete-profile');
                }
                toast.success(response.data.message)
                localStorage.clear();
                localStorage.setItem('authtoken', response.data.data)
                successNavigate()
            }
            else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error("Something went wrong!")
            console.error('Error signing in with Google:', error);
        }
    };


    useEffect(() => {
        setUserData({
            googleUid: "",
            name: "",
            email: "",
            profileImage: "",
            ip: ipAddress,
            roles: projectRole,
            projectCode: projectCode,
        })
    }, [projectCode, projectRole, ipAddress])
    
    return (
        <div className="google-signin-container">
            <button className="google-signin-btn" onClick={() => handleGoogleSignIn()}>
                <img className="google-logo" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />
                <span>{name} with Google</span>
            </button>
        </div>
    )
}
