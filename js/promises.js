const url = 'https://api.github.com/users/'
const events = '/events'

const getLastCommitDate = (username) => {
    let token = `token ${GITHUB_API_TOKEN}`;
    // console.log(token);
    return fetch(url + username + events, {headers: {'Authorization': token}})
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            return data.filter(event=>event.type === "PushEvent")
        })
        .then(pushEvents => {
            // console.log(pushEvents[0].created_at);
            return pushEvents[0].created_at;
        })
}

console.log(getLastCommitDate("ronaldrajski"));
console.log(getLastCommitDate("danielfryar"));
console.log(getLastCommitDate("fridaynext"));
console.log(getLastCommitDate("kennethhowell"));

const wait = (ms) => {
    return new Promise((resolve, reject)=>{
      setTimeout(resolve,ms);
        // reject();
    });
}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
// wait(5000).catch(() => console.log("When will we see this?"))


