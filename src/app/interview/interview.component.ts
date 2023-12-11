import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-interview',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './interview.component.html',
  styleUrl: './interview.component.css',
})
export class InterviewComponent {
  constructor(private route: ActivatedRoute) {}
  protected interview_id: any;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.interview_id = params.get('id');
    });
  }
}