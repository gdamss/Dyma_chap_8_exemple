

function b() {
    function a() {
        console.log(foo);
    }
    let foo = 1;
    a()
}

let foo = 2;
    b()