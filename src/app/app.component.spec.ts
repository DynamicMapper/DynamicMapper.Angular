import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppModule
      ]
    }).compileComponents();
  }));

  it('should render serialized source and destination', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const [source, destination] = fixture.debugElement.nativeElement.querySelectorAll('pre');

    expect(source.innerText).toContain('"value": 123');
    expect(destination.innerText).toContain('"value": "123"');
  });
});
