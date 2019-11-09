//Переделать фичу с добавлением в блоки(доллар/евро)
        let money = document.getElementById('finanse-list');
        let information = document.querySelector('.information-block');
        let btn = document.querySelector('.btn-block');
        let d = document.querySelector('.dollar-block');
        let e = document.querySelector('.euro-block');
        let dollar = document.querySelector('.dollar');
        let euro = document.querySelector('.euro');
        let btn2 = document.querySelector('.minus-block');
        let cash = document.getElementById('cash1');
        let cash2 = document.getElementById('cash2');
        let d_block = document.querySelector('.d');
        let e_block = document.querySelector('.e');
        let text = document.createElement('p');
        let clearBlock = document.querySelector('.clearBlock'); 
        text.className = 't';
        let clearCash = document.querySelector('.cash-clear-block');
        let f1 = document.querySelector('#f1');
        let f2 = document.querySelector('#f2');
        let items = [];

        clearBlock.addEventListener('click', Clear);
        btn.addEventListener('click', Symm);
        btn2.addEventListener('click', Minus);
        clearCash.addEventListener('click', CashClear);

        function CashClear() {
            if(confirm('Вы хотите очистить 2 своих кошелька?')) {
                if(cash.textContent == 0 && cash2.textContent == 0) {
                    alert('У вас уже и так они пустые');
                    return;  
                } else {
                
                clearCash.classList.add('clear');

                setTimeout(() => {
                   clearCash.classList.remove('clear');
                }, 1000);

                cash.textContent = 0;
                cash2.textContent = 0;
                text.textContent = `На кошельке 0$ и 0€`;
                
                AddItem(' ', '$', 0, ' ', 'green');
                AddItem(' ', '€', 0, ' ', 'blue');

                information.classList.add('show1');
                information.classList.add('show2');
                information.classList.add('show3');

                setTimeout(function() {
                   information.classList.remove('show1');
                   information.classList.remove('show2');
                   information.classList.remove('show3');
                }, 5000);
            }
            }
        }

        function Clear() {
           let b = document.querySelectorAll('.b');

           b.forEach(function(c) {
             setTimeout(function() {
                c.classList.add('hide');
             }, 500);
           });

           alert('busket is clear...)');

           items.splice(0, 20);
        }

        function Symm() {
            let x = money.value;
            let x2 = Number(x);

            money.value = "";
                
            if(x.length == 0 || x == "0") {
                alert('Вы не можете довавить 0-е значение в кошелек');
                return false;
            } else {  

               information.classList.add('show');
               information.classList.add('show2');
               information.classList.add('show3');

               setTimeout(function() {
                  information.classList.remove('show');
                  information.classList.remove('show2');
                  information.classList.remove('show3'); 
               }, 5000);

               if(confirm('В какой кошелек хотите добавить денег? Да - Доллар, Нет - Евро')) {
                  return Dollar_block(x2);
               } else {
                  return Euro_block(x2);
               }
           } 
        }

        function Dollar_block(arg1) {
                let dlr = '$';
                let pls = '+';
                let arr = [];
                arr.push(arg1);
                let N = Number(cash.textContent);

                let totalMoney = arr.reduce(function(a, b) {
                  a += b;
                  return a;
                }, N);

                cash.textContent = totalMoney;
                text.style.color = 'green';

                information.appendChild(text);
                text.textContent = `Было добавлено ${arg1}$`;
                AddItem(pls, dlr, arg1, "green", "green");

                 if(arg1 >= 10000 && Symm()) {
                    alert('Ваш кошелек переполнен деньгами');
                     if(confirm('Хотите его обнулить?')) {
                        cash.textContent = 0;
                        text.textContent = `Было снято ${arg1}$`;
                        text.classList.add('color');
                        text.style.color = 'red';
                        AddItem('', dlr, 0, '' ,'green');

                        information.classList.add('show');
                        information.classList.add('show2');
                        information.classList.add('show3');

                        setTimeout(() => {
                           information.classList.remove('show');
                           information.classList.remove('show2');
                           information.classList.remove('show3');
                        }, 5000);
                    } else {
                      f1.style.marginLeft = '225px';
                      return;
                    } 
                } 
        }

        function Euro_block(arg2) {
                let pl1 = '+';
                let eur = '€';
                let arr2 = [];
                arr2.push(arg2);
                let N2 = Number(cash2.textContent);

                let totalMoney2 = arr2.reduce(function(v, r) {
                  v += r;
                  return v;
                }, N2);

                cash2.textContent = totalMoney2;

                information.appendChild(text);
                text.textContent = `Было добавлено ${arg2}€`;
                text.style.color = 'green';
                AddItem(pl1, eur, arg2, "green", "blue");
                
                if(arg2 >= 10000 && Symm()) {
                   alert('Ваш кошелек переполнен деньгами');
                   if(confirm('Хотите его обнулить?')) {
                      cash2.textContent = 0;
                      text.textContent = `Было снято ${arg2}€`;
                      text.style.color = 'red';
                      AddItem(' ', eur, 0, ' ', 'blue'); 

                      text.classList.add('color');

                      information.classList.add('show');
                      information.classList.add('show2');
                      information.classList.add('show3');

                      setTimeout(() => {
                         information.classList.remove('show');
                         information.classList.remove('show2');
                         information.classList.remove('show3');
                      }, 5000); 
                   } else {
                      f2.style.marginLeft = '225px';
                      return;
                   } 
                } 
        }

        function Minus() {
            let y = money.value;
            let y2 = Number(y);

            money.value = "";
                
            if(y.length == 0 || y == "0") {
                alert('Вы не можете снять что либо, т.к 0-е значение в кошелеке');
                return false;
            } else {

            information.classList.add('show');
            information.classList.add('show2');
            information.classList.add('show3');
            text.classList.add('color');

            setTimeout(function() {
                information.classList.remove('show');
                information.classList.remove('show2');
                information.classList.remove('show3');  
            }, 5000);

           
            if(confirm('Откуда хотите вычесть деньги? Да - Доллар, Нет - Евро')) {
               Dollar_block2(y2);
            } else {
               Euro_block2(y2);
            }
            }
        }


        function Dollar_block2(Land1) {
                let m1 = '-';
                let eur = '$';
                let item2 = [];
                item2.push(Land1);
                let Num = Number(cash.textContent);

                let Lm = item2.reduce(function(i, p) {
                   i -= p;
                   return i; 
                }, Num);
                
                cash.textContent = Lm;
                information.appendChild(text);
                text.textContent = `Было снято ${Land1}$`;
                text.style.color = 'red';
                AddItem(m1, eur, Land1, "red", "green");

                if(Land1 >= cash.textContent) {
                    alert('Ваш кошелек не может быть отрицательным');
                    if(confirm('Хотите привести свой кошелек хотя бы в нулевое значение?')) {
                        cash.textContent  = 0;
                        text.textContent = `У вас на кошельке 0$`;
                        AddItem(' ', eur, 0, ' ', 'green');

                        information.classList.add('show');
                        information.classList.add('show2');
                        information.classList.add('show3');
                        text.classList.add('color'); 

                        setTimeout(function() {
                           information.classList.remove('show');
                           information.classList.remove('show2');
                           information.classList.remove('show3');
                        }, 5000);
                    } else {
                        cash.textContent = 0;
                        text.textContent = `У вас на кошельке 0$`;

                        AddItem(' ', eur, 0, ' ', 'green');

                        information.classList.add('show');
                        information.classList.add('show2');
                        information.classList.add('show3');
                        text.classList.add('color'); 

                        setTimeout(function() {
                           information.classList.remove('show');
                           information.classList.remove('show2');
                           information.classList.remove('show3');
                        }, 5000);
                    }
                }
        }

        function Euro_block2(Land2) {
                let m2 = '-';
                let eur2 = '€';
                let item3 = [];
                item3.push(Land2);
                let Num2 = Number(cash2.textContent);

                let Lm2 = item3.reduce(function(o, l) {
                   o -= l;
                   return o; 
                }, Num2);

                cash2.textContent = Lm2;

                information.appendChild(text);
                text.textContent = `Было снято ${Land2}€`;
                text.style.color = 'red';
                AddItem(m2, eur2, Land2, " ", "blue");

                if(Land2 >= cash2.textContent) {
                    alert('Ваш кошелек не может быть отрицательным');
                    if(confirm('Хотите привести свой кошелек хотя бы в нулевое значение?')) {
                        cash2.textContent = 0;
                        text.textContent = 'На вашем кошельке 0€';
                        AddItem(' ', eur2, 0, " " , 'blue');

                        information.classList.add('show');
                        information.classList.add('show2');
                        information.classList.add('show3');
                        text.classList.add('color');

                        setTimeout(function() {
                           information.classList.remove('show');
                           information.classList.remove('show2');
                           information.classList.remove('show3');
                        }, 5000);
                    } else {
                        cash2.textContent = 0;
                        text.textContent = `У вас на кошельке 0$`;

                        AddItem(' ', eur2, 0, ' ', 'blue');

                        information.classList.add('show');
                        information.classList.add('show2');
                        information.classList.add('show3');
                        text.classList.add('color'); 

                        setTimeout(function() {
                           information.classList.remove('show');
                           information.classList.remove('show2');
                           information.classList.remove('show3');
                        }, 5000);
                    }
                }
        }

        function AddItem(z, y, mn, c1, c2) {
            if(items.length === 20) {
                alert('Вы больше не можете пополнять историю пополнения платежа');

                let blck = document.querySelectorAll('.b');

                setTimeout(function() {
                   blck.forEach(function(k) {
                      k.classList.add('hide');
                   });
                }, 500);

                items.splice(0, 20);
            } else {
            let history = document.querySelector('.history-block');
            let block = document.createElement('div');
            let znak = document.createElement('p');
            let time_block = document.createElement('div');
            let data_time = document.createElement('span');
            let syma = document.createElement('span');
            let choice = document.createElement('div');
            let choice_znak = document.createElement('span');
            let time = new Date();
            let hours = time.getHours();
            let minutes = time.getMinutes();
            let seconds = time.getSeconds();
            let year =  time.getFullYear();
            let month = time.getMonth();
            let day = time.getDate();

            block.className = 'b';
            znak.className = 'znak';
            syma.className = 'syma';
            choice.className = 'choice';
            choice_znak.className = 'choice_znak';
            time_block.className = 'time_block';
            data_time.className = 'data_time';

            history.appendChild(block);
            block.appendChild(znak);
            block.appendChild(syma);
            block.appendChild(time_block);
            time_block.appendChild(data_time);
            block.appendChild(choice);
            choice.appendChild(choice_znak);
            items.push(block);

            znak.textContent = z;
            syma.textContent = mn;
            choice_znak.textContent = y;
            data_time.textContent = `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;

            znak.style.color = c1;
            choice_znak.style.color = c2;

            }
        }