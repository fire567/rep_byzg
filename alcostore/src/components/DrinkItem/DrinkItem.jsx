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
} from './styled';

export default class DrinkItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      icon: faHeart,
    };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  changeIcon() {
    this.setState({ icon: faStar });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    const { item } = this.props;
    const increment = this.increment.bind(this);
    const decrement = this.decrement.bind(this);
    const changeIcon = this.changeIcon.bind(this);
    return (
      <Wrapper>
        <Country>
          <img src={`../img/${item.country}.jpg`} />
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
            <a href="javascript:void(0)" onClick={changeIcon}>
              <FontAwesomeIcon icon={this.state.icon} />
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
                <a href="javascript:void(0)" onClick={decrement}>
                  <FontAwesomeIcon icon={faMinusSquare} />
                </a>
                {this.state.count}
                <a href="javascript:void(0)" onClick={increment}>
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
