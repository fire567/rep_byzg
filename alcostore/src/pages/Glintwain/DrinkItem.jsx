import React, { Component } from 'react';

import { Wrapper, DrinkItemCountry, DrinkItemPicture, Name, Prop, Prise, MidPrise,
  Center, Stars, PriseAndScore
} from './styled/DrinkItem.js';

export default class DrinkItem extends Component {
  render() {
    const { item } = this.props;
    return(
      <Wrapper>
        <div></div>
        <DrinkItemCountry>
          <img src="../img/United_States.jpg" />
        </DrinkItemCountry>
        <DrinkItemPicture>
          <img src="../img/Woodford-Reserve.jpg" />
        </DrinkItemPicture>
        <Name>
          <div>{item.name}</div>
          <div>{item.subname}</div>
        </Name>
        <Prop>
          {item.prop}
        </Prop>
        <PriseAndScore>
          <div>
            <a href="javascript:void(0)">
              <i class="far fa-heart"></i>
            </a>
          </div>
          <div>
            <Prise>
              {item.price}
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
              {item.rating} оценок
            </Stars>
            <br />
          </div>
        </PriseAndScore>
      </Wrapper>
    )
  }
}