//Code by Victor Lia Fook
module.exports = {
    triangleType : function(a, b, c){
        a = parseInt(a);
        b = parseInt(b);
        c = parseInt(c);
        if(isNaN(a) || isNaN(b) || isNaN(c) || a < 1 || b < 1 || c < 1)
            return "Error";
        if(a == b && a == c)
            return "Equilateral";
        var sides = [a, b, c];
        sides = sides.sort();
        if(sides[2] - (sides[0] + sides[1]) >= 0)
            return "Error";
        
        if(a == b || a == c || b == c)
            return "Isosceles";
        return "Scalene";
    }
    
}