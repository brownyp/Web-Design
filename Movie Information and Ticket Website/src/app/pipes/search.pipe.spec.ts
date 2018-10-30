import { SearchPipe } from './search.pipe';

describe('SearchPipe', () => {
  
  const pipe = new SearchPipe();
  
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  
  it('check search value', () => {
  let productss = [
    {
      name: 'Power Rangers'
    },
    {
      name: 'Spider-Man: Homecoming'
    }
  ];
    expect(pipe.transform(productss, 'Power')).toContain({name: 'Power Rangers'});
  });
});
