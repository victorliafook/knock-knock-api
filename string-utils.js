//Code by Victor Lia Fook
module.exports = {
    reverse: function(str){
        var ret = "";
        var max_idx = str.length - 1;
        for(var i = max_idx; i >= 0 ; i--){
            ret += str[i];
        }
        return ret;
    }
    
}