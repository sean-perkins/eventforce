import { HttpModule } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';

import { EventService } from './event.service';

describe('EventService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [EventService],
            imports: [HttpModule]
        });
    });

    it('should ...', inject([EventService], (service: EventService) => {
        expect(service).toBeTruthy();
    }));
});
