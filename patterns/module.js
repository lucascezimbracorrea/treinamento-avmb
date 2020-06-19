
var Estoque = (function(){
    var total = 100;

    return {
        count: function(){
            return document.getElementById("total").value = total + '🍔';
        },
        adicionar: function(){
            this.count()
            return total += 1;
        },
        remover: function(){
            this.count()
            return total -= 1;
        }
    }
})();