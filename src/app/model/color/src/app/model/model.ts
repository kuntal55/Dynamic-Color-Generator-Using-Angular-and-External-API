export class model 
{
    id: number;
    uid: number;
    hex_value: string;
    colorname: string;

    constructor(id: number, uid: number, hex_value: string, colorname: string) 
    {
        this.id = id;
        this.uid = uid;
        this.hex_value = hex_value;
        this.colorname = colorname;
    }
}
