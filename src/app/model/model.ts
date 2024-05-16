export class model{
    id:number;
    uid:number;
    hexValue:string;
    colorName:string;

    constructor(id:number,uid:number,hexValue:string,colorName:string){
        this.id=id;
        this.uid=uid;
        this.hexValue=hexValue;
        this.colorName=colorName;
    }
}