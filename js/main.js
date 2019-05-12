include("NeuralNet");

onload(function() {
    var canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 400;
    canvas.style = "background-color: black;";

    document.body.prepend(canvas);

    var ctx = canvas.getContext("2d");

    var inputs = [
        0, 0, 1,
        0, 1, 1,
        1, 0, 1,
        1, 1, 1
    ];

    var outputs = [0,1,1,0];

    var net = new NeuralNet(inputs.length, 4, outputs.length);

    var iter = 20000;
    while(iter--) {
        net.train(inputs, outputs);
    }

    console.log(net.guess(inputs));
});