import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleAgentReturn } from 'src/app/models/api-return/agent-return/single-agent-return';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss']
})
export class AgentComponent implements OnInit {

  @Input() singleAgent: SingleAgentReturn = new SingleAgentReturn({});

  constructor(public service: ApiService,
              public route: ActivatedRoute) { }

  ngOnInit(): void {
  }
}
