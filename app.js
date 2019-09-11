console.log('==================== hoisting ====================')
/**
 * Q1. 호이스팅(Hoisting) : 변수 var를 최상단에 먼서 선언!
 */
var a = 30;
function hoisting() {
    console.log('a :', a)
    var a = 20;
    console.log('a :', a)
}
hoisting();
/**
 * 호이스팅 설명
 * 위와 같은 경우, 전역변수 a가 선언되었고, fn hoisting()에 var a가 또 있음.
 * hoisting의 첫번째 a는 전역변수 a가 아닌, 로컬변수 a 임.
 * hoisting으로 인해 undefined가 선언됨.(내부에 선언된 var a가 호이스팅 되었기 때문)
 *
 * 결과 :
        a : undefined // 첫번째 a는 전역변수 a 가 아닌, 호이스팅된 로컬변수 a
        a : 20
 */
console.log('==================== hoisting ====================')


console.log('==================== lexical scoping ====================')
/**
 * lexical scoping : 어휘적범위....ㅋ
 * var name ='zero' 가 선언된 이후
 * wrapper()에서 name = 'nero'로 변경하여도, var name='nero'로 wrapper() 내부에 선언되었기 때문에 해당 변수는 wrapper의 지역변수가 됨
 * --- 전역변수 var name ='zero' 에 영향을 미치지 않음
 */
var name = 'zero';
function log() {
    console.log(name);
}

function wrapper() {
    var name = 'nero';
    log();
}
wrapper();
console.log('==================== lexical scoping ====================')


console.log('==================== namespace 생성 ====================')
var another = function () {
    var x = '123';
    var y = function () {
        console.log(x);
    }
    return {
        y
    }
}
var newScope = another();
console.log(newScope.x); //return에 포함되지 않았으므로 접근불가
newScope.y();
console.log('==================== namespace 생성 ====================')
console.log('==================== IIFE(즉시호출 함수 표현식) ====================')
var currScope = (function () {
    var x = 'it is x';
    var y = function () {
        console.log(x);
    }
    return {
        y
    }
})();
currScope.y();
console.log('==================== IIFE(즉시호출 함수 표현식) ====================')
console.log('==================== 실행 컨텍스트 ====================')
// https://www.zerocho.com/category/JavaScript/post/5741d96d094da4986bc950a0
var name = 'zero'; // (1)변수 선언 (6)변수 대입
function wow(word) { // (2)변수 선언 (3)변수 대입
    console.log(word + ' ' + name); // (11)
}
function say() { // (4)변수 선언 (5)변수 대입
    var name = 'nero'; // (8)
    console.log(name); // (9)
    wow('hello'); // (10)
}
say(); // (7)
/**
 * 실행순서
 * '전역컨텍스트': {
 *      변수객체:{
 *          arguments: null,
 *          variable :[{name:'zero'}, {wow: Function}, {say: Function}]
 *      },
 *      scopeChain: ['전역 변수객체'],
 *      this: window,
 *      'say 컨텍스트' : { // say(7) 실행 후 생성
 *             변수객체:{
 *                  arguments: null,
 *                  variable :[ {name:'nero'} ]
 *              },
 *              scopeChain: ['say 변수 객체' , '전역 변수객체'],
 *              this: window,
 *      },
 *      'wow 컨텍스트' : {
 *             변수객체:{
 *                  arguments: [ {word:'hello'} ],
 *                  variable : null
 *              },
 *              scopeChain: ['wow 변수 객체' , '전역 변수객체'],
 *              this: window,
 *      } 
 */

/**
 * 
 *          variable :[{name:'zero'}, {wow: Function}, {say: Function}]
 */
console.log('==================== 실행 컨텍스트 ====================')
console.log('==================== 이벤트 루프 ====================')
// https://www.zerocho.com/category/Javascript/post/597f34bbb428530018e8e6e2
// 이벤트 루프와 백그라운드, 태스크 큐
console.log('==================== 이벤트 루프 ====================')


console.log('==================== IIFE(즉시호출 함수 표현식) ====================')

var makeFoo = function (name) {
    return function () {
        console.log(name);
    };
};
var foo = makeFoo('name~');
foo();
foo = null; //메모리 해제 gc회수


console.log('=================outer=================')
var name = 'zero';
function outer() {
    console.log('외부', name);
    function inner() {
        enemy = 'nero';
        console.log('내부', name);
    }
    inner();
}
outer();
console.log(enemy); // undefined











var another = function () {
    var x = 'local';
    function y() {
        alert(x);
    }
    return { y: y };
}
var newScope = another();