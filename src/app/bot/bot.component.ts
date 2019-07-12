import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})
export class BotComponent implements OnInit {

  botName: string = null;
  
  validBot:boolean = false;
  botsInBackEnd: string[] = ['megabot', 'bot1', '2B'];

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.botName = urlParameters['name'];
    })

    //simulates a search in back-end for the bot
    this.validBot = this.botsInBackEnd.includes(this.botName);    
  }

}
