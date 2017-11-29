  // 获取dom 元素
  var numone = document.getElementById('num-one');
  var numtwo = document.getElementById('num-two');
  var btn = document.getElementById("btn");
  var result = document.getElementById("result");

  function verify(val) {
      // 验证是否是数字  不需要验证是否为空
      console.log(val);
      if (isNaN(val)) {
          alert('请输入正确的数字');
          return false
      } else {
          return val
      }
  }
  // 点击计算
  btn.onclick = function () {
      // 获得计算方式
      var computers = document.getElementById('computer').value;
      // 输入的值
      var a = verify(numone.value);
      if (a) {
        var b = verify(numtwo.value);
      } else {
          
      }
      if (a == undefined || b == undefined || a == false || b == false) {

      } else {
          // 进行计算  因为获取的数字都是字符串类型  所以需要转换一下
          switch (computers) {
              case "+":
                  result.innerText = parseFloat(a) + parseFloat(b);
                  break;
              case "-":
                  result.innerText = parseFloat(a) - parseFloat(b);
                  // return a-b;
                  break;
              case "*":
                  result.innerText = parseFloat(a * b);
                  // return a*b;
                  break;
              case "/":
                  result.innerText = parseFloat(a / b);
                  // return a/b;
                  break;
          }
      }
  }