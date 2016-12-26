for (var i = 0; i < 5; i++) {
        (function (a) {
                setTimeout(function () {
                        console.log(a);
                }, 1000);
        })(i);
}

var obj = {
        name:'name'
};
var newObj ={
        
}; 

for (key in obj){
        newObj[key] = obj.key;
};

var defer = new Promise(function(resolve,reject){
        setTimeout(function(){
                resolve('hello');
        });
});

defer.then(function(data){
        
});

function bind(func,context){
        return function(){
               return func.apply(context); 
        };
}

//sum(a)(b);

//deep kopy
//Реализация класса энимал
//Стоян Стефанов
//ООП
//Выразительный js