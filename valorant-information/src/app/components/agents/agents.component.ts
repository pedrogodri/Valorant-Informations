import { Agent } from './../../models/api-model/agent-model/agent';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { SingleAgentReturn } from './../../models/api-return/agent-return/single-agent-return';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements OnInit {

  public agentData$ = new Subject<Agent[] | undefined>();
  public singleAgent: SingleAgentReturn = new SingleAgentReturn({});

  constructor(public service: ApiService,
              public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getAgents().subscribe(
      (resp) => {
        this.agentData$.next(resp.data);
      }
    )
  }

  agentBtnClick(paramUuid: string) {
    if(paramUuid) {
      this.service.getAgentByUuid(paramUuid).subscribe(
        (resp) => {
          this.singleAgent = resp;
        }
      )
    }
  }

}
