import React, { Component } from "react";
import styles from './commonStyles.module.css'

export class Tabs extends Component {
  state = {
    selected: this.props.selected || 0
  };

  handleChange(index) {
    this.setState({ selected: index });
  }

  render() {
    return (
      <>
        <ul className={styles.tabsContainer}>
          {this.props.children.map((elem, index) => {
            const style = index === this.state.selected ? styles.selected : "";
            return (
              <li key={elem.props.title} className={`${styles.tabItem} ${style}`}>
                <button className={styles.tabButton} onClick={() => this.handleChange(index)} >{elem.props.title}</button>
              </li>
            );
          })}
        </ul>
        <div className={styles.panel}>{this.props.children[this.state.selected]}</div>
      </>
    );
  }
}
