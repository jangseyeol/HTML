//콜백함수

let f = function(){
    console.log("1번");
}
setTimeout(
    f, 1000
); // 1초 후에 실행
setTimeout(
    f, 3000
); // 3초 후에 실행
console.log("----------------------"); //이것 가장 먼저 출력

function double(num){
    setTimeout(
        function(){
            const doubleNum = num*2;
            console.log(doubleNum);
        }, 1000 //1초 후에 num*2가 나옴
    )
}

double(10); 