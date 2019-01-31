// JavaScript source code

function register(user) {
    console.log(JSON.stringify(user));
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },//
        body: JSON.stringify({
            Name: user.firstName,
            Surname: user.lastName,
            Gender: user.username,
            DOB: user.password,
            Status: user.password
        })
    };

    return fetch(`${URL}/api/Employee/user/Employee`, requestOptions).then(
        function (handleResponse) {
            console.log(handleResponse);
        }
    );
}