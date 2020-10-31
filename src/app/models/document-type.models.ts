export default class DocumentType {
    id?: number;
    shortName?: string;
    name?: string

    constructor(id: number, shortName: string, name: string) {
        this.id = id;
        this.shortName = shortName;
        this.name = name;
    }
}