/*
async function fetchData(id){
    let user = await fetchUser(id),
        friends = await fetchFriends(id);
    return {
        user,
        friends
    };
};
*/
function fetchFriends(){
    
};
function fetchUser(){

};

function* _fetch(id){
    let user = (yield fetchUser(id));
    let friends = (yield fetchFriends(id));
    return {
        user, 
        friends
    };
};
let id;

let fetchData = _async(_fetch(id));


function _async(fnc){
    function steps(){
        let result = fnc.next();

        if (result.done){
            return result.value;
        } else {
            return Promise.resolve(result.value).then(steps);
        }
    }
    return steps();
}
