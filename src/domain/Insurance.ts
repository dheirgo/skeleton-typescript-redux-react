export class Insurance {
    id: string;
    name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    static fromJson(json: any) {
        return new Insurance(json['id'], json['name']);
    }

    toJson(): any {
        return {
            "id": this.id,
            "name": this.name
        }
    }
};