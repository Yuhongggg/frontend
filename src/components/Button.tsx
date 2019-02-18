import React from 'react';


interface ButtonComponentProps {
  buttonText: string,
  onClickFunction: (event: React.MouseEvent<HTMLElement>) => void
}


/**
 * A generic button component
 * @param {string} buttonText texts to be diplayed on the button
 * @param {(event: React.MouseEvent<HTMLElement>) => void} onClickFunction callback function when clicked
 */
export default class Button extends React.Component<ButtonComponentProps> {

  constructor(props: any) {
    super(props);
  }

  public render() : React.ReactNode {
    return (
      <button onClick={this.props.onClickFunction}>
        {this.props.buttonText}
      </button>
    )
  }
}
