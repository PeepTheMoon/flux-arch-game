import React from 'react';
import { shallow } from 'enzyme';
import Hand from './Hand';

describe('Hand component', () => {
  it('renders Hand', () => {
    const wrapper = shallow(<Hand image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRolJqqHMjpTKMX1xJ5ytee8332VT_vLI4PoAsurW4zcQQrE8Nd&usqp=CAU" />);
    expect(wrapper).toMatchSnapshot();
  });
});
