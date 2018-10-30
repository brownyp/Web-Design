import { GenrePipe } from './genre.pipe';

describe('GenrePipe', () => {
  
  const pipe = new GenrePipe();
  
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  
  it('check genre value', () => {
    let productss = [
      {
        genres: [
          'action',
          'comedy'
        ]
      },
      {
        genres: [
          'adventure',
          'comedy'
        ]
      }
    ];
    expect(pipe.transform(productss, 'action')).toContain({genres: ['action', 'comedy']});
  });
});
