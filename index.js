function receivesAFunction(callback) {
    return callback()
}

function returnsANamedFunction() {
    let fn = () => {}
    return fn
}

function returnsAnAnonymousFunction() {
    return () => {}
}