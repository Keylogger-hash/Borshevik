import React from 'react';
import logo from './logo.svg';
import './App.css';
import borsh from './borsh.png';
function App() {
  return (
    <div className="App" >
      <div className='container'>
        <h1>Борщ</h1>
        <div className='slider-block-title'>
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
          <div>  
            <h4>В стандартной конфигурации:</h4>  
            <p>картофель, капуста, помидоры, морковь, бурак,<br/> зеленый лук,укроп и петрушка</p>  
          </div>  
          <div className='form'>
            <div className='form-column'>
              <h4> Бульон</h4>
              <ul className='form-list'>
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
              <ul className='form-list'>
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
                  <input type="checkbox" id="point-11"></input>
                  <label htmlFor="point-11">                  
                    Кинза
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4>Нарезка</h4>
          </div>
      </div>

    </div>
  );
}

export default App;
