//Code by Victor Lia Fook
var memory = Array();

module.exports = {
    memory: memory,
    recursive: function (n){
        if(this.memory[n])
            return memory[n];
        if(n == 0)
            return 0;
        if(n == 1)
            return 1;
        var fib1 = this.recursive(n - 1);
        this.memory[n - 1] = fib1;
        var fib2 = this.recursive(n - 2);
        this.memory[n - 2] = fib2;
        return  fib1 + fib2;
    },

    iterative: function (n){
        var x = 0, y = 1, z = 1;
        for (var i = 0; i < n; i++) {
            x = y;
            y = z;
            z = x + y;
        }
        return x;
    }
    
}