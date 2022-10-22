import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainIntroductionComponent } from './blockchain-introduction.component';

describe('BlockchainIntroductionComponent', () => {
  let component: BlockchainIntroductionComponent;
  let fixture: ComponentFixture<BlockchainIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockchainIntroductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockchainIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
