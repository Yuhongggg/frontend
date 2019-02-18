import React from 'react';

export default class Button extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <button onClick={this.props.onClickFunction}>
        {this.props.buttonText}
      </button>
    )
  }
}
