import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import CommentCard from './components/presentational/CommentCard';
import CommentsList from './components/presentational/CommentsList';

it('renders without crashing', () => {
  shallow(<App />);
});

it(`show spinner when "loading" state is true`, () => {
  const wrapper = shallow(<App />);
  wrapper.setState({ loading: true })
  expect(wrapper.find('Spinner').length).toEqual(1);
});

it(`show app content when "loading" state is false`, () => {
  const wrapper = shallow(<App />);
  wrapper.setState({ loading: false })
  expect(wrapper.find('Layout').length).toEqual(1);
});

it(`shows a list of comments`, () => {
  const comments = [{ id: 1, name: '', email: '', body: '' }, { id: 2, name: '', email: '', body: '' }];
  const commentsList = shallow(<CommentsList comments={comments} />);
  expect(commentsList.find('Col').length).toEqual(comments.length);
});

it(`call save function after click button "Wybierz komentarz"`, () => {
  const mockSave = jest.fn();
  const mockRemove = jest.fn();
  const comment = { id: 1, name: '', email: '', body: '' };
  const commentCard = shallow(<CommentCard {...comment} handleSave={mockSave} handleRemove={mockRemove} />);
  commentCard.find('Button').simulate('click')
  expect(mockSave).toHaveBeenCalled();
});

it(`call remove function after click button "Usuń"`, () => {
  const mockSave = jest.fn();
  const mockRemove = jest.fn();
  const comment = { id: 1, name: '', email: '', body: '', saved: true };
  const commentCard = shallow(<CommentCard {...comment} handleSave={mockSave} handleRemove={mockRemove} />);
  commentCard.find('Button').simulate('click')
  expect(mockRemove).toHaveBeenCalled();
});
