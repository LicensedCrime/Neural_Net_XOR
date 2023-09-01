Array.prototype.print = function(title) {
    var num_y = this.length;
    var num_x = this[0].length;

    if(!title) {
        title = "res";
    }

    var str = "[\n";

    if(num_x > 0) {
        for(var y = 0; y < num_y; y++) {
            for(var x = 0; x < num_x; x++) {
                str += (" " + this[y][x]).padEnd(19);
            }
        }

        str += "\n]";
        console.log(title, str);
        return;
    }

    if(num_y > 0) {
        for(var x = 0; x < num_y; x++) {
            str += (" " + this[x]).padEnd(19);
        }

        str += "\n]";
        console.log(title, str);
        return;
    }

    console.log(title, "[]");
};

Array.prototype.copyMat = function() {
    var tmp = [], index = 0;
    this.forEach(y => {
        tmp.push([]);

        y.forEach(x => tmp[index].push(x));

        index++;
    });

    return tmp;
};

Array.prototype.dot = function(arr) {
    var arr_cols = arr[0].length;
    var arr_rows = arr.length;
    var num_rows = this.length;

    if(this[0].length != arr_rows) {
        throw "rip dot" + this[0].length + " " + arr_rows;
    }

    var sum = 0;
    var out = [];
    for(var z = 0; z < num_rows; z++) {
        out[z] = [];

        for(var n = 0; n < arr_cols; n++) {
            sum = 0;

            for(var y = 0; y < arr_rows; y++) {
                sum += this[z][y] * arr[y][n];
            }

            out[z][n] = sum;
        }
    }

    return out;
};

Array.prototype.transpose = function() {
    var num_cols = this[0].length;
    var tmp = [], n = 0;
    while(n < num_cols) { n++; tmp.push([]); }

    for(var z = 0; z < num_cols; z++) {
        for(var y = 0; y < this.length; y++) {
            tmp[z].push(this[y][z]);
        }
    }

    return tmp;
};

Array.prototype.random = function(rows, cols) {
    var out = [];
    for(var y = 0; y < rows; y++) {
        out[y] = [];

        for(var x = 0; x < cols; x++) {
            out[y][x] = Math.random()
        }
    }

    return out;
};