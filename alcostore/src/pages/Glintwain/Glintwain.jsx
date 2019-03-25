import React, { Component } from 'react';

import { Wrapper, Drink-item__country, Drink-item__picture, Name, Prop, Prise, Mid-prise,
 Center, Stars, Prise-and-score
 } from './styled.js';

export default class GlintwainPage extends Component {
	render(){
		return(
		<Wrapper>
        <div></div>
       <Drink-item__country>
          <img src="../img/United_States.jpg" />
       </Drink-item__country>
       <Drink-item__picture>
          <img src="../img/Woodford-Reserve.jpg" />
       </Drink-item__picture>
       <Name>
          <div>Виски (бурбон) Вудфорд</div>
          <div>Резерв п/к</div>
       </Name>
       <Prop>
          0.75 л., США, Кентукки, 43.2%
       </Prop>
       <div class="prise-and-score">
          <div>
             <a href="javascript:void(0)">
             <i class="far fa-heart"></i>
             </a>
          </div>
          <div>
             <Prise>
                3299.90
                <i class="fas fa-ruble-sign"></i>
                <br />
             </Prise>
             <Mid-prise>
                средняя цена
             </Mid-prise>
             <div>
                <Center>
                   <a href="javascript:void(0)">
                   <i class="far fa-minus-square"></i>
                   </a>
                   1
                   <a href="javascript:void(0)">
                   <i class="far fa-plus-square"></i>
                   </a>
                   <a href="javascript:void(0)">
                   <i class="far fa-trash-alt"></i>
                   </a>
                </Center>
             </div>
             <Stars>
                <a href="javascript:void(0)">
                <i class="far fa-star"></i>
                </a><a href="javascript:void(0)">
                <i class="far fa-star"></i>
                </a><a href="javascript:void(0)">
                <i class="far fa-star"></i>
                </a><a href="javascript:void(0)">
                <i class="far fa-star"></i>
                </a><a href="javascript:void(0)">
                <i class="far fa-star"></i>
                </a>
                507 оценок
             </Stars>
             <br />
          </div>
       </Wrapper>
       <div class="drink-item" >
          <div>2.</div>
          <Drink-item__country>
             <img src="../img/United_States.jpg" />
          </Drink-item__country>
          <Drink-item__picture>
             <img src="../img/jim_beam_nabor2.jpg" />
          </Drink-item__picture>
          <Name>
             <div>Виски (бурбон) Джим Бим</div>
             <div>Дабл Оак +2 стакана п/к</div>
          </Name>
          <Prop>
             0.7 л., США, 43%
          </Prop>
          <div class="prise-and-score">
             <div>
                <a href="javascript:void(0)">
                <i class="far fa-heart"></i>
                </a>
             </div>
             <div>
                <Prise>
                   1599.90
                   <i class="fas fa-ruble-sign"></i>
                   <br />
                </Prise>
                <Mid-prise>
                   средняя цена
                </Mid-prise>
                <div>
                   <Center>
                      <a href="javascript:void(0)">
                      <i class="far fa-minus-square"></i>
                      </a>
                      1
                      <a href="javascript:void(0)">
                      <i class="far fa-plus-square"></i>
                      </a>
                      <a href="javascript:void(0)">
                      <i class="far fa-trash-alt"></i>
                      </a>
                   </Center>
                </div>
                <Stars>
                   <a href="javascript:void(0)">
                   <i class="far fa-star"></i>
                   </a><a href="javascript:void(0)">
                   <i class="far fa-star"></i>
                   </a><a href="javascript:void(0)">
                   <i class="far fa-star"></i>
                   </a><a href="javascript:void(0)">
                   <i class="far fa-star"></i>
                   </a><a href="javascript:void(0)">
                   <i class="far fa-star"></i>
                   </a>
                   639 оценок
                </Stars>
                <br />
             </div>
          </div>
       </Wrapper>
    </div>
		)
	}
}