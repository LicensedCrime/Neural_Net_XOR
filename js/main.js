include("Sigmoid");

onload(function() {
    var canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 400;
    canvas.style = "background-color: black;";

    document.body.prepend(canvas);

    var ctx = canvas.getContext("2d");

    var inputs = [
        [0, 0, 1],
        [0, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
    ];

    var outputs = [
        [0],
        [1],
        [1],
        [0]
    ];

    var input_weight = [
        [2 * Math.random() - 1, 2 * Math.random() - 1, 2 * Math.random() - 1, 2 * Math.random() - 1],
        [2 * Math.random() - 1, 2 * Math.random() - 1, 2 * Math.random() - 1, 2 * Math.random() - 1],
        [2 * Math.random() - 1, 2 * Math.random() - 1, 2 * Math.random() - 1, 2 * Math.random() - 1]
    ];

    var output_weights = [
        [2 * Math.random() - 1],
        [2 * Math.random() - 1],
        [2 * Math.random() - 1],
        [2 * Math.random() - 1]
    ];

    var hidden_layer;
    var output_layer;

    var output_error;
    var hidden_error

    var iter = 60000;
    while(iter--) {
        hidden_layer = Math.Sigmoid.activate_list( Math.dot(inputs, input_weight) );
        output_layer = Math.Sigmoid.activate_list( Math.dot(hidden_layer, output_weights) );

        output_error = Math.substract(outputs, output_layer);

        if(iter % 10000 == 0) {
            console.log( Math.sum_array(output_error) );
        }

        var output_delta = Math.multiply(output_error, Math.Sigmoid.derivative_list(output_layer));

        var hidden_error = Math.dot(output_delta, Math.transpose(output_weights));
        var hidden_delta = Math.multiply(hidden_error, Math.Sigmoid.derivative_list(hidden_layer));

        output_weights = Math.add( Math.dot(Math.transpose(hidden_layer), output_delta), output_weights );
        input_weight = Math.add( Math.dot(Math.transpose(inputs), hidden_delta), input_weight );
    }

    console.log(output_layer);
});