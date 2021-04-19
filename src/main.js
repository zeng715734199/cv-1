let html = document.querySelector('#html')    //通过css选择器找到这个元素
let style = document.querySelector('#style')
let string = `
/*哈喽，宁可以亲切地叫俺小曾
 * 接下来俺给你露两手
 * 首先，俺准备一个div
**/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px
}
/*接下来我把div变成一个太极
 *睁大你的维克多虚空之眼给俺看好了。。
 *首先，先把div变成一个圆
*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/*太极是阴阳形成的
 *一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
#div1::before{
    border-radius: 50%;
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    border-radius: 50%;
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%; 
    transform: translateX(-50%);
    background: #fff;
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`
let n = -1
let string2 = ''

let step = ()=>{
    setTimeout(() => {
        n = n + 1
        if(string[n] === '\n' ) {
            string2 += '<br>'
        }else if(string[n] ===' '){
            string2 += '&nbsp'
        }else{
            string2 += string[n]
        }
        html.innerHTML = string2
        style.innerHTML = string.substring(0,n)
        window.scroll(0,99999)
        html.scroll(0,99999)
        if( n+1 < string.length)
        step()
    },1)
} 
step()

