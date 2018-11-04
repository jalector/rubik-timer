export class Session {
    private id:string;
    public date:string;
    public records:number[];
    public avg:number;
    public avg3:number;
    public avg5:number;
    public avg12:number;

    constructor( records?:number[]) { 
        this.id = this.generateID();
        this.records = ( records )? records : [];        
        this.date = this.today();
        this.avg = 0; 
        this.avg3 = 0;
        this.avg5 = 0;
        this.avg12 = 0;
    }

    calAvg( limit:number) :number {4
        let sum:number = 0;
        if( this.records.length >= limit){
            for(let i = 0; i < limit; i++){
                sum += this.records[ i ];
            }
        }
        return ( sum / limit );
    }

    newRecord( record:number ):void {
        this.records.push( record ); 
    }

    updateAverage():void {
        this.avg = this.calAvg( this.records.length );
        this.avg3 = this.calAvg( 2 );
        this.avg5 = this.calAvg( 5 );
        this.avg12 = this.calAvg( 11 );
    }

    public toJson():any {
        let json: any = {
            id: this.id,
            records: this.records,
            avg: this.avg,
            avg3: this.avg3,
            avg5: this.avg5,
            avg12: this.avg12            
        }
        return json ; 
    }

    public static fromJSON( json:any ):Session{
        let session:Session = new Session();
        session.id = json.id;
        session.records = json.records;
        session.avg = json.avg;
        session.avg3 = json.avg3;
        session.avg5 = json.avg5;
        session.avg12 = json.avg12;
        return session;
    }

    private generateID():string{        
        let id:string = "";
        for (let index = 0; index < 10; index++) {
            id += Math.floor( Math.random( ) * 10 ); 
        }
        return id;
    }

    private today():string{
        let date = new Date();
        let months = [
            "Jan",
            "Feb",
            "Mar",
            "Abr",
            "May",
            "Jun",
            "Jul",
            "Ago",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ];
        
        let year = date.getFullYear();
        let month =  months[ date.getMonth() ];
        let day = date.getDate();
        return `${month} ${day}, ${year}`;
    }

}