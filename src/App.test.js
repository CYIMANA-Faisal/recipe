import { shallow, mount, render } from 'enzyme';
import { getQueryForElement } from '@testing-library/jest-dom';
import App from './App';
import Navbar from './components/Navbar';
import Content from './components/Content';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails'
import Create from './components/Create';
import Recipe from './components/Recipe';
import {BrowserRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom'
import Footer from './components/Footer';

let isAuthenticated = false;

const mockRecipe = {
  "title": "sdfbjsjd",
  "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD",
  "instruction": "hgkcfasdzgjfxlgsadjz",
  "id": 665304
}

describe('Testing App Component', () => {
  const wrapper = shallow(<App />);
  it('should have the content component',() => {
    expect(wrapper.find(Navbar).length).toEqual(1);
    expect(wrapper.find(Content).length).toEqual(1);
  })

  it('should not have recipe details route',() => {
    isAuthenticated = false;
    expect(wrapper.find(RecipeDetails).length).toEqual(0);
  })

  it('should have recipe details route',() => {
    isAuthenticated = true;
    expect(wrapper.find(RecipeDetails).length).toEqual(0);
  })
  
  it('should not have create route',() => {
    isAuthenticated = false;
    expect(wrapper.find(Create).length).toEqual(0);
  })
  it('should have create route',() => {
    isAuthenticated = true;
    expect(wrapper.find(Create).length).toEqual(0);
  })
});

describe('Testing Content Component', () => {
  const wrapper = shallow(<Content preparedBy = {'All dishes'} isAuthenticated={isAuthenticated} />);
  it('should have recipe list', () => {
    expect(wrapper.find(RecipeList).length).toEqual(1);
  })
});
describe('Testing Recipe Component', () => {
  const wrapper = shallow(<Recipe recipe = { mockRecipe }/>);
  it('should have link', () => {
    expect(wrapper.find(Link).length).toEqual(1);
  })
});

// describe('Testing footer component', () => {
//   const wrapper = shallow(<Footer/>);
//   expect(wrapper).toContainHTML();
// })

// test('Testing Create Component', () => {
//   const wrapper = shallow(<Create formTitle = { 'Add new recipe' } btnValue = { 'Add' }/>);
//   expect(wrapper.find('h2').text()).toBe('Add new recipe');
// });

// test('Testing RecipeList Component', () => {
//   const wrapper = shallow(<RecipeList/>);
//   expect(wrapper.find(Recipe)).toEqual(1);
// });

