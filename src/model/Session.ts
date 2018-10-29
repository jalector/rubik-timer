export class Session {
    private id:string;
    public date:string;
    public records:number[];
    public avg:number;
    public avg3:number;
    public avg6:number;
    public avg12:number;

    constructor( records?:number[]) { 
        this.id = this.generateID();
        this.records = ( records )? records : [];        
        this.date = this.today();
        this.avg = 0; 
        this.avg3 = 0;
        this.avg6 = 0;
        this.avg12 = 0;
    }

    calAvg():number {
        let average:number = 0
        if(this.records.length > 0){
          average = this.records.reduce( (ant, cur) => ant + cur) / ( this.records.length+1 );
        }
        this.avg = average;
        return average;
    }

    calAvg3():number {
        let average:number = 0;
        return average;
    }
    calAvg6():number {
        let average:number = 0;
        return average;
    }
    calAvg12():number {
        let average:number = 0;
        return average;
    }

    updateAverage():void {
        this.calAvg();
        this.calAvg3();
        this.calAvg6();
        this.calAvg12();
    }

    public toJson():any {
        let json: any = {
            id: this.id,
            records: this.records,
            avg: this.avg,
            avg3: this.avg3,
            avg6: this.avg6,
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
        session.avg6 = json.avg6;
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