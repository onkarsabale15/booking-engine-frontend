"use client";
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
export const signIn = async (email, password) => {
    const bdy = {
        email,
        password
    };
    const body = JSON.stringify(bdy);
    const response = await fetch(BACKEND_URL + '/api/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: body
    })
    const { data, message } = await response.json();
    if (response.status == 200) {
        localStorage.setItem("user", JSON.stringify(data.userExists));
        localStorage.setItem("token", data.token);
    }
    return { data, message }
}

export const isLoggedIn = async () => {
    const user = localStorage.getItem("user");
    return user ? true : false
}

export const logOut = async () => {
    try {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        return true;
    } catch (error) {
        return false;
    }
}