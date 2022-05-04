import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { EvalSystemService } from '../services/eval-system/eval-system.service';
import { FileUploadComponent } from '../shared/ui/file-upload/file-upload.component';

import { EvalSystemComponent } from './eval-system.component';

describe('EvalSystemComponent', () => {
  let component: EvalSystemComponent;
  let fixture: ComponentFixture<EvalSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, MatIconModule],
      declarations: [EvalSystemComponent, FileUploadComponent],
      providers: [EvalSystemService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvalSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
