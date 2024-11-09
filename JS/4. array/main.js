// var language = 'Javascript, PHP, Ruby, C++, C#';
// var lang = language.split(', ');
// console.log(lang);

// var languages = [
//     'Javascript',
//     'PHP',
//     'Ruby',
//     'C++',
//     'C#',
//      null,
//      undefined,
//      function(){

//      },
//      {},
//      123,
// ];
// console.log(languages);

// var languages = new Array(
//     'Javascript',
//     'PHP',
//     'Ruby',
//     'C++',
//     'C#',
//     null,
//     undefined,
//     function(){
//
//     },
//     {},
//     123,
// );
// console.log(languages);

//{} [] array đều được type of trả về là object, cách phân biệt:
// console.log(Array.isArray(languages)); //true
// console.log(Array.isArray([])); //true
// console.log(Array.isArray(new Array(1,2))); //true
// console.log(Array.isArray({})); //false

// console.log(languages.length);
// console.log(languages[0]);

var languages = [
    'Javascript',
    'PHP',
    'Ruby'
];

var languages2 = [
    'C++',
    'C#'
]

// console.log(languages.toString());
// console.log(languages.join(', '));

// console.log(languages.push('C++')); //đẩy 1 phần tử vào cuối mảng
// console.log(languages.pop()) //lấy phần tử cuối ra khỏi mảng

// console.log(languages.unshift('C++')); //đẩy 1 phần tử vào đầu
// console.log(languages.shift()) //lấy phần tử đầu

// languages.splice(1, 1); //xóa ở vtri thứ 1 và xóa 1 phần tử từ vị trí đó

// console.log(languages);

// console.log(languages.concat(languages2));

// console.log(languages.slice(1,2)); //cắt mảng từ 1 vị trí đến bao nhiêu từ đó