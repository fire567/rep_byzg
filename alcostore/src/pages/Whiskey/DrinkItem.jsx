import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faRubleSign,
  faMinusSquare,
  faPlusSquare,
  faTrashAlt,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

import {
  Wrapper,
  Country,
  Picture,
  Name,
  Prop,
  Price,
  MidPrice,
  RatingControls,
  Stars,
  PriceAndScore,
} from './styled/DrinkItem.js';

export default class DrinkItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <Wrapper>
        <Country>
          <img src="../img/United_States.jpg" />
        </Country>
        <Picture>
          <img src={`../img/${item.picture}`} />
        </Picture>
        <Name>
          <div>{item.name}</div>
          <div>{item.subname}</div>
        </Name>
        <Prop>{item.prop}</Prop>
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
            <MidPrice>средняя цена</MidPrice>
            <div>
              <RatingControls>
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
              </RatingControls>
            </div>
            <Stars>
              {Array(5)
                .fill()
                .map((_, i) => (
                  <a href="javascript:void(0)" key={i}>
                    <FontAwesomeIcon icon={faStar} />
                  </a>
                ))}
              {item.rating} оценок
            </Stars>
            <br />
          </div>
        </PriceAndScore>
      </Wrapper>
    );
  }
}
