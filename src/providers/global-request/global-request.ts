import { Injectable } from '@angular/core';
import { Session } from '../../model/Session';

@Injectable()
export class GlobalRequestProvider {
  public sessions:Session[] = [];

  constructor() {
    console.log('Hello GlobalRequestProvider Provider');
    this.sessions = this.loadSessions();
  }

  public saveSession( session:Session ):void {
    this.sessions.push( session );
    let jsonSession:any[] = [];
    for(let session of this.sessions){
      jsonSession.push( session.toJson() );
    }

    localStorage.setItem('sessions', JSON.stringify( jsonSession ));
  }
  

  public loadSessions():Session[]{
    let sessions:Session[] = [];
    let rawJson = localStorage.getItem('sessions');
    if( rawJson != null ) {
      let json = JSON.parse( rawJson );
      for(let rawSession of json){
        sessions.push( Session.fromJSON( rawSession ));
      }  
    }

    return sessions;
  }

  
}
