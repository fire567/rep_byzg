import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRubleSign, faMinusSquare, faPlusSquare, faTrashAlt, faStar } from '@fortawesome/free-solid-svg-icons'

import { Wrapper, DrinkItemCountry, DrinkItemPicture, Name, Prop, Price, MidPrice,
  Center, Stars, PriceAndScore
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
        <PriceAndScore>
          <div>
            <a href="javascript:void(0)">
              <FontAwesomeIcon icon={faHeart} />
            </a>
          </div>
          <div>
            <Price>
              {item.price}
              <FontAwesomeIcon icon={faRubleSign} />
              <br />
            </Price>
            <Mid-price>
              средняя цена
            </Mid-price>
            <div>
              <Center>
                <a href="javascript:void(0)">
                  <FontAwesomeIcon icon={faMinusSquare} />
                </a>
                1
                <a href="javascript:void(0)">
                  <FontAwesomeIcon icon={faPlusSquare} />
                </a>
                <a href="javascript:void(0)">
                  <FontAwesomeIcon icon={faTrashAlt} />
                </a>
              </Center>
            </div>
            <Stars>
              <a href="javascript:void(0)">
                <FontAwesomeIcon icon={faStar} />
              </a>
              <a href="javascript:void(0)">
                <FontAwesomeIcon icon={faStar} />
              </a>
              <a href="javascript:void(0)">
                <FontAwesomeIcon icon={faStar} />
              </a>
              <a href="javascript:void(0)">
                <FontAwesomeIcon icon={faStar} />
              </a>
              <a href="javascript:void(0)">
                <FontAwesomeIcon icon={faStar} />
              </a>
              {item.rating} оценок
            </Stars>
            <br />
          </div>
        </PriceAndScore>
      </Wrapper>
    )
  }
}