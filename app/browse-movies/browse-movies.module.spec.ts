import { BrowseMoviesModule } from './browse-movies.module';

describe('BrowseMoviesModule', () => {
  let browseMoviesModule: BrowseMoviesModule;

  beforeEach(() => {
    browseMoviesModule = new BrowseMoviesModule();
  });

  it('should create an instance', () => {
    expect(browseMoviesModule).toBeTruthy();
  });
});
