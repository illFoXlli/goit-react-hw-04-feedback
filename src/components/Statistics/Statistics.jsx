import { Button } from 'components/Button';
import { Box } from '../Box';
import { Titel } from '../Titel/Titel.jsx';
import React from 'react';
import s from './Statistics.module.css';
// import PropTypes from 'prop-types';

class Statistisc extends React.Component {
  state = {
    valueGood: this.props.valueGood,
    valueNeutral: this.props.valueNeutral,
    valueBad: this.props.valueBad,
    valueTotal: this.props.valueTotal,
    valuePositive: this.props.valuePositive,
    clickStyleGood: false,
    clickStyleNeutral: false,
    clickStyleBad: false,
  };

  total = () => {
    this.setState(prevState => {
      return {
        valuePositive: Math.round(
          (prevState.valueGood / prevState.valueTotal) * 100
        ),
      };
    });
  };

  сlickOnButtonGood = () => {
    this.clickStyleGood = true;
    this.clickStyleNeutral = false;
    this.clickStyleBad = false;
    this.setState(prevState => {
      this.style = { backgroundColor: 'tomato' };
      this.total();
      return {
        valueGood: prevState.valueGood + 1,
        valueTotal: prevState.valueTotal + 1,
      };
    });
  };

  clickOnButtonNeutral = () => {
    this.clickStyleGood = false;
    this.clickStyleNeutral = true;
    this.clickStyleBad = false;
    this.setState(prevState => {
      this.total();
      return {
        valueNeutral: prevState.valueNeutral + 1,
        valueTotal: prevState.valueTotal + 1,
      };
    });
  };
  clickOnButtonBad = () => {
    this.clickStyleGood = false;
    this.clickStyleNeutral = false;
    this.clickStyleBad = true;
    this.clickStyleGood = false;
    this.setState(prevState => {
      this.total();
      return {
        valueBad: prevState.valueBad + 1,
        valueTotal: prevState.valueTotal + 1,
      };
    });
  };

  render() {
    return (
      <>
        <Titel
          textAlign="center"
          fontStyle="italic"
          fontSize="32px"
          margin="0 auto"
          p="30px"
        >
          Plese leave feedback
        </Titel>
        <Box
          width="660px"
          display="flex"
          justifyContent="space-between"
          m="auto"
        >
          <Button
            clickStyleGood={this.clickStyleGood}
            style={
              (this.style = {
                transform: 'translateY(0px)',
                boxShadow: ' none',
              })
            }
            noStyle={
              (this.style = {
                transform: 'translateY(-5px)',
                boxShadow:
                  ' 0 6px 0 -4px #fff, 0 9px 0 -4px #aaa, 0 12px 0 -4px #000',
              })
            }
            onIncrementGood={this.сlickOnButtonGood}
          >
            Good
          </Button>
          <Button
            clickStyleNeutral={this.clickStyleNeutral}
            style={
              (this.style = {
                transform: 'translateY(0px)',
                boxShadow: ' none',
              })
            }
            noStyle={
              (this.style = {
                transform: 'translateY(-5px)',
                boxShadow:
                  ' 0 6px 0 -4px #fff, 0 9px 0 -4px #aaa, 0 12px 0 -4px #000',
              })
            }
            onIncrementNeutral={this.clickOnButtonNeutral}
          >
            Neutral
          </Button>
          <Button
            clickStyleBad={this.clickStyleBad}
            style={
              (this.style = {
                transform: 'translateY(0px)',
                boxShadow: ' none',
              })
            }
            noStyle={
              (this.style = {
                transform: 'translateY(-5px)',
                boxShadow:
                  ' 0 6px 0 -4px #fff, 0 9px 0 -4px #aaa, 0 12px 0 -4px #000',
              })
            }
            onIncrementBad={this.clickOnButtonBad}
          >
            Bad
          </Button>
        </Box>
        <h2>Statistics:</h2>
        <ul className={s.ulItem}>
          <li className={s.pItem}>
            Good:
            <span className={s.spanItem}>
              {this.state.valueGood}
            </span>
          </li>
          <li className={s.pItem}>
            Neutral:
            <span className={s.spanItem}>
              {this.state.valueNeutral}
            </span>
          </li>
          <li className={s.pItem}>
            Bad:
            <span className={s.spanItem}>
              {this.state.valueBad}
            </span>
          </li>
          <li className={s.pItem}>
            Total:
            <span className={s.spanItem}>
              {this.state.valueTotal}
            </span>
          </li>
          <li className={s.pItem}>
            Positive feedback:
            <span className={s.spanItem}>
              {this.state.valuePositive}%
            </span>
          </li>
        </ul>
      </>
    );
  }
}
export default Statistisc;

// Statistics.propTypes = {
//   valueGood: PropTypes.number.isRequired,
//   valueNeutral: PropTypes.number.isRequired,
//   valueBad: PropTypes.number.isRequired,
//   valueTotal: PropTypes.number.isRequired,
//   valuePositive: PropTypes.number.isRequired,
//   clickStyleGood: PropTypes.bool.isRequired,
//   clickStyleNeutral: PropTypes.bool.isRequired,
//   clickStyleBad: PropTypes.bool.isRequired,
// };
