//promise: async (callback)

function asyncCallback(success, fail) {
    setTimeout(() => {
        success("callback succeed");
    }, 2000);

    setTimeout(() => {
        success("callback failed");
    }, 4000);
};

asyncCallback(function(data) {
        console.log("success", data);
    },
    function(err) {
        console.log("fail", err);
    }
);

//console.log("===promise===");
function asyncWithPromise(){
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("promise success");
        }, 4000);
    
        setTimeout(() => {
            reject("promise fail");
        }, 4000);
    });
};

asyncWithPromise()
.then((data) => console.log("success", data))
.catch((err) => console.log("error", err));

//async & await
async function testAsync() {
    try {
        const data = await asyncWithPromise();
        console.log("ASYNC", data);
    } catch (e) {
        console.log("ASYNC", err);
    }
};

testAsync();
