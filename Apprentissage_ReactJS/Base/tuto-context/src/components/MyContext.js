import React from "react";

const user = {
    name: 'Lisa',
    age: 9
}

const MyContext = React.createContext(user);

export default MyContext