import { CommunityRoutingModule } from './community-routing.module';

describe('CommunityRoutingModule', () => {
  let communityRoutingModule: CommunityRoutingModule;

  beforeEach(() => {
    communityRoutingModule = new CommunityRoutingModule();
  });

  it('should create an instance', () => {
    expect(communityRoutingModule).toBeTruthy();
  });
});
