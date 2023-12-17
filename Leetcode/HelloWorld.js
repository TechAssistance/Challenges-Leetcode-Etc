function createHelloWorld() {

    function HelloWorld() {
        //console.log('Hello World');
        return "Hello World"
    }

    return HelloWorld;
}

const helloWorld = createHelloWorld();

helloWorld();
