export class Quote {
    // id!: number;
    // text!: string;
    // author!: string;
    showName: boolean;

    constructor(public id: number, public text: string, public author: string) {
        this.showName = false;
    }
}
