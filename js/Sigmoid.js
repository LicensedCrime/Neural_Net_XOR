function Sigmoid() {
    this.activate = function(x) { return 1 / (1 + Math.exp(-x)); };
    this.derivative = function(x) { return x * (1 - x); };

    this.apply_list = function(list, callback) {
        var rows = list.length;
        var cols = list[0].length;

        var result = [];
        for(var y = 0; y != rows; y++) {
            result.push(new Array(cols));

            for(var x = 0; x != cols; x++) {
                result[y][x] = callback(list[y][x]);
            }
        }

        return result;
    };

    this.activate_list = function(list) {
        return this.apply_list(list, this.activate);
    };

    this.derivative_list = function(list) {
        return this.apply_list(list, this.derivative);
    };
}

Math.Sigmoid = new Sigmoid();

Math.dot = function(a, b) {
    var rows = a.length;
    var cols = a[0].length;
    
    if (cols != b.length) {
        console.log(a, b);
        throw "fail dot()";
    }

    var result = [];
    for (var y = 0; y < rows; y++) {
        result.push(new Array(b[0].length));

        for (var x = 0; x < b[0].length; x++) {
            var sum = 0;

            for (var z = 0; z < cols; z++) {
                sum+= a[y][z] * b[z][x];
            }

            result[y][x] = sum;
        }
    }

    return result;
};

Math.substract = function(a, b) {
    var rows = a.length;
    var cols = a[0].length;

    if (cols != b[0].length && rows != b.length) {
        throw "fail substract()";
    }

    var result = [];
    for (var y = 0; y < rows; y++) {
        result.push( new Array(cols) );

        for (var x = 0; x < cols; x++) {
            result[y][x] = a[y][x] - b[y][x];
        }
    }

    return result;
};

Math.sum_array = function(arr) {
    var result = 0;

    var num_values = arr.length * arr[0].length;
    for(var y = 0; y < arr.length; y++) {
        for(var x = 0; x < arr[0].length; x++) {
            result += arr[y][x];
        }
    }

    return result / num_values;
};

Math.multiply = function(a, b) {
    var rows = a.length;
    var cols = a[0].length;

    if (cols != b[0].length && rows != b.length) {
        console.log(rows, cols, a, b);
        throw "fail multiply()";
    }

    var result = [];
    for (var y = 0; y < rows; y++) {
        result.push( new Array(cols) );

        for (var x = 0; x < cols; x++) {
            result[y][x] = a[y][x] * b[y][x];
        }
    }

    return result;
};

Math.transpose = function(arr) {
    var rows = arr.length;
    var cols = arr[0].length;

    var result = [];
    for(var x = 0; x != cols; x++) {
        result.push(new Array(cols));
    }

    for (var y = 0; y < rows; y++) {
        for (var x = 0; x < cols; x++) {
            result[x][y] = arr[y][x];
        }
    }    

    return result;
};

Math.add = function(a, b) {
    var rows = a.length;
    var cols = a[0].length;

    var result = [];
    for (var y = 0; y < rows; y++) {
        result.push( new Array(cols) );

        for (var x = 0; x < cols; x++) {
            result[y][x] = a[y][x] + b[y][x];
        }
    }

    return result;
};