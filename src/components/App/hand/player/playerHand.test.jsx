import React from 'react';
import { shallow } from 'enzyme';
import playerHand from './PlayerHand';

describe('playerHand component', () => {
  it('renders playerHand', () => {
    const wrapper = shallow(<playerHand image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRolJqqHMjpTKMX1xJ5ytee8332VT_vLI4PoAsurW4zcQQrE8Nd&usqp=CAU" name='paper'/>);
    expect(wrapper).toMatchSnapshot();
  });
});
