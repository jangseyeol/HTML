
        // let studentScore = {
        //     koreaScore : 90,
        //     englishScore : 80,
        //     mathScore : 99
        // }
        // console.log(studentScore.koreaScore);
        // console.log(studentScore.englishScore);
        // console.log(studentScore.mathScore);
        
        // let a = 10;
        // let b = '10';
        // console.log(typeof a);
        // console.log(typeof b);
        // console.log(a == b);
        // // console.log(a === b);

        // console.log(String(a)+b);
        // console.log(a+Number(b));

        // let c = [10, 20, 30, 40, "kor", "eng"]

        // console.log(c);
    
        // for(let a in c) 
        //     console.log(a);

        // let d = {
        //     a:10,
        //     b:20,
        //     c:30
        // };

        // for(let a in d)
        // console.log(d[a]);

        // function fun1(n){
        //     for(let i=0; i<n; i++)
        //     console.log(i);
        // }

        // fun1(3);

        // let funct = function fun2(n){
        //     for(let i=0; i<n; i++)
        //     console.log(i);
        // }

        // funct(3);

        // let funct2 = function(n){  //익명함수
        //     for(let i=0; i<n; i++)
        //     console.log(i);
    //     // }

    //     // funct2(3);

    // let funct2 = function(n){
    //     let sum = 0;
    //     for(let i=1; i<=n ; i++)
    //     sum += i;
    //     return sum;
    // }

    // let total = funct2(3);
    // // console.log("합 : " + total);

    // let funct3 = (n) => {
    //     let sum = 0;
    //     for(let i=1; i<=n ; i++)
    //     sum += i;
    //     return sum;
    // }

    // let sum = funct3(100);
    // // console.log(sum)

    // let f = () => 
    //     console.log("----------------");
  
    // f();

    // // let f2 =  () => 
    // //     console.log("----------------");

    // function sum(a, b) {
    //     console.log(a+b)
    // }
    // sum(10,200);

    
    // (function sum(a, b) {
    //     console.log(a+b)
    // })(10,200);

    // let dan = 3;
    // let gugu = 8;
    // let string = `${dan} 곱하기 ${gugu}은 ${dan * gugu}입니다.`
    // console.log(string);

    // let obj = {name : "철수", age : "20"};
    // for(let key in obj){
    //     console.log(key + ": " + obj[key]);
    // }

    // let arr = ["orange", "banana", "apple"];
    // for(let index in arr){
    //     console.log(index + ": "+ arr[index]);
    // }

    // for(let i = 1; i <= 10 ; i++){
    //     if(i%2 === 1) continue;
    //     console.log(i);
    // }

    // let sum = 0;
    // for(let i=1; i<=100 ; i++){
    //     sum += i
    // }
    // console.log(sum);

    // const person = {
    //     name : {firstName:"길동", lastName:"홍"}, 
    //     age : 29,
    //     address : "경기도"
    // }
    // console.log(person.name.firstName);
    // console.log(person.name['firstName']);

    // person.gender = "남";
    
    // person.age = 59

    // person.name.lastName = "김";
    
    // delete person.gender;

    // console.log(person)


    // let test = [10, 20, 30, 40, 50];
    // console.log(test);
    // test.unshift(60);

    // console.log(test);

    // const person = {   };

    // const person = {
    //     name : "Hong Gildong"
    // };

    // const person = {
    //     name:["Hong", "Gildong"],
    //     age:20,
    //     isAdult:true
    // };

    // const person = {
    //     name:{
    //         firstName:"Gildong",
    //         lastName:"Hong"
    //     },
    //     age:20,
    //     isAdult:true,
    //     printInfo:function(){
    //         console.log('printInfo');
    //     }
    // }

    // const person = {
    //     name: "Hong Gildong",
    //     age : 20
    // };
    // console.log(person["name"]);
    // console.log(person["age"]);

    // const person = {
    //     name: {
    //         firstName: "Gildong",
    //         lastName: "Hong"
    //     },
    //     age:20,
    //     likes: ["apple", "samsung"],
    //     printHello:function(){
    //         return "hello";
    //     }
    // }
    // console.log(person["name"])
    // console.log(person["name"]["firstName"]);
    // console.log(person["likes"]);
    // console.log(person["likes"][0]);
    // console.log(person["likes"][1]);
    // console.log(person["printHello"]);
    // console.log(person["printHello"]());
    // console.log(person.name.lastName);
    // console.log(person.age);
    // console.log(person.likes[0]);
    // console.log(person.printHello());

    // let num =10;
    // let copyNum =num;
    // num = 20;
    // console.log(num);
    // console.log(copyNum);

    // const person = {
    //     name : "Hong Gildong"
    // };
    // const copyPerson = person;
    // person.name = "Hong";
    // console.log(person.name);
    // console.log(copyPerson.name);

    // const pw = "124";
    // if(pw.length <4){
    //     console.log("비밀번호는 최소 4자리 이상 입력해 주세요.");
    // }

    // const email = "test!naver.com";
    // if(email.includes("@") === false){
    //     console.log("올바른 이메일 형식이 아닙니다.");
    // }

    // const email = "test!naver.com";
    // if(email.indexOf("@") === -1 ){
    //     console.log("올바른 이메일 형식이 아닙니다.");
    // }

    // const arr = [10,20,30];
    // for(let i =0; i<arr.length; i++){
    //     console.log(arr[i]);
    // }
    // const arr = [10,20,30,40];
    // arr.push(50);

    const date = new Date(2022, 11, 25, 18, 30, 50);
    const dateFormat = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    console.log(dateFormat);    