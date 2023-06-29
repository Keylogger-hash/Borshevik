import React from 'react';
import logo from './logo.svg';
import './App.css';
import borsh from './borsh.png';
import minus from './minus.svg';
import plus from './plus.svg';
import { useState } from 'react';
import Modal, { ModalProps } from './Modal';
function App() {
  let [count,setCount] = useState(1);
  let [show,setShow] = useState(false);
  function incClick(){
    if (count===30){
      return 
    }
    setCount(count+1)
  }
  function decClick(){
    if (count===1){
      return
    }
    setCount(count-1)
  }
  function showModal(){
    if (show===true){
      window.location.reload()
    }else{
      setShow(!show)
    }
  }
  const modalProps: ModalProps = {
    isShow: show,
    setIsShow:showModal 
  }
  return (
    <div className="App" > 
      <Modal {...modalProps}></Modal>
      <h1>Борщ</h1>
      <div className='container'>
        <div className='third-container'>
        <div className='slider-block-title-column'>
            <div className='slider-block-title-row'>
              <h4 className='slider-title'>
                Украинский борщ
              </h4>
              <h4 className='slider-title'>
                Кубанский борщ
              </h4>
              <h4 className='slider-title'>
                Российский борщ
              </h4>
              
            </div>  
            <div className='center rangeSlider'>
              <input type="range"></input>
            </div>
            <div className='slider-block-title-row'>
              <div>
                <p>
                  <small>
                    Помидоров больше 
                  </small>
                </p>
                <p>
                  <small>
                    Бурака меньше 
                  </small>
                </p>
                <p>
                  <small>
                    Густой цвет
                  </small>
                </p>
              </div>
              <div>
                <p>
                  <small>
                    Томатов меньше
                  </small>
                </p>
                <p>
                  <small>
                    Свеклы больше
                  </small>
                </p>
                <p>
                  <small>
                    Полупрозрачный  
                  </small>
                </p>
              </div>
            </div>
          </div>  
        </div>
  
          <div className='paragraph'>  
            <p>В стандартной конфигурации:</p>  
            <p>картофель, капуста, помидоры, морковь, бурак,<br/> зеленый лук,укроп и петрушка</p>  
          </div>  
          <div className='second-container'>
          <div className='form'>
            <div className='form-column'>
              <h4> Бульон</h4>
              <ul className='form-list' >
                <li>
                  <input name='narezka' type="radio" id="point-1"></input>
                  <label htmlFor="point-1">Говяжий</label>
                </li>
                <li>
                  <input name='narezka' type="radio" id="point-2"></input>
                  <label htmlFor="point-2">Свиной</label>
                </li>
                <li>
                  <input name='narezka' type="radio" id="point-3"></input>
                  <label htmlFor="point-3">Свино-Говяжий</label>
                </li>
                <li>
                  <p>
                    <small>
                      Куриный не делаем,<br/> вегетарианский тем более
                    </small>
                  </p>
                </li>
              </ul>
            </div>
            <div className='form-column'>
              <h4> Капуста</h4>
              <ul className='form-list '>
                <li>
                  <input name='kapusta' type="radio" id="point-4"></input>
                  <label htmlFor="point-4">Свежая</label>
                </li>
                <li>
                  <input name='kapusta' type="radio" id="point-5"></input>
                  <label htmlFor="point-5">Квашенная</label>
                </li>
                <li>
                  <input name='kapusta' type="radio" id="point-6"></input>
                  <label htmlFor="point-6">Микс</label>
                </li>
              </ul>
            </div>
            <div className='form-column'>
              <h4> Наполнение</h4>
              <ul className='form-list'>
                <li>
                  <input name='filling' type="checkbox" id="point-7"></input>
                  <label htmlFor="point-7">Фасоль</label>
                </li>
                <li>
                  <input name='filling' type="checkbox" id="point-8"></input>
                  <label htmlFor="point-8">                  
                    Копченное сало
                  </label>
                </li>
                <li>
                  <input name='filling' type="checkbox" id="point-9"></input>
                  <label htmlFor="point-9">                  
                    Болгарский перец
                  </label>
                </li>
                <li>
                  <input name='filling' type="checkbox" id="point-10"></input>
                  <label htmlFor="point-10">                  
                    Шампиньоны
                  </label>
                </li>
                <li>
                  <input name='filling'  type="checkbox" id="point-11"></input>
                  <label htmlFor="point-11">                  
                    Кинза
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className='slicing'>
            <h4>Нарезка</h4>
            <p>Калибровка по картофелю, остальное все соразмерно</p>
            <div className='slicing-list'>
              <ul>
                <li>
                  <input name='slicing'  type="radio" id="point-12"></input>
                  <label htmlFor="point-12">
                    1 см
                  </label>              
                </li>
                <li>
                  <input name='slicing'  type="radio" id="point-13"></input>
                  <label htmlFor="point-13">
                    1.5 см
                  </label>    
                </li>
                <li>
                  <input name='slicing'  type="radio" id="point-14"></input>
                  <label htmlFor="point-14">
                    2 см
                  </label>    
                </li>
                <li>
                  <input name='slicing'  type="radio" id="point-15"></input>
                  <label htmlFor="point-15">
                    3-4 см
                  </label>    
                </li>
              </ul>
            </div>
          </div>
          <div className='additional'>
            <div className='additional-item'>
              <p>Хлеб</p>
              <ul>
                <li>
                  <input name='bread' type="radio"></input>
                  <label htmlFor="point-16">
                    Белый пшеничный
                  </label>
                </li>
                <li>
                  <input name='bread' type="radio"></input>
                  <label htmlFor="point-16">
                    Серый ржаной
                  </label>
                </li>
                <li>
                  <input name='bread' type="radio"></input>
                  <label htmlFor="point-16">
                    Бородинский
                  </label>
                </li>
                <li>
                  <input name='bread' type="radio"></input>
                  <label htmlFor="point-16">
                    Пампушка чесночная
                  </label>
                </li>
              </ul>
            </div>
            <div className='additional-item'>
              <p>В придачу</p>
              <ul>
                <li>
                  <input name='in-add' type="checkbox"></input>
                  <label htmlFor="point-16">
                    Сметана
                  </label>
                </li>
                <li>
                  <input name='in-add' type="checkbox"></input>
                  <label htmlFor="point-16">
                    Чеснок зубчики
                  </label>
                </li>
                <li>
                  <input name='in-add' type="checkbox"></input>
                  <label htmlFor="point-16">
                    Аджика
                  </label>
                </li>
                <li>
                  <input name='in-add' type="checkbox"></input>
                  <label htmlFor="point-16">
                    Водка
                  </label>
                </li>              
              </ul>
            </div>
          </div>
          <div className='order'>
            <div>
              {count} порция
            </div>
            <div>
              <button onClick={decClick} >
                <img src={minus} width={40} height={40} ></img>
              </button>
              <button onClick={incClick}>
                <img src={plus} width={40} height={40}></img>
              </button>
            </div>
            <button onClick={showModal}>Заказать</button>
          </div>
          </div>

      </div>
    </div>
  );
}

export default App;
