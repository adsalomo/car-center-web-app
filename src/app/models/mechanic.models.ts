export default class Mechanic {
    document: number;
    documentTypeId: number;
    documentTypeName: string;
    firstName: string;
    secondName: string;
    surName: string;
    secondSurName: string;
    cellPhone: string;
    address: string;
    email: string;
    state: string

    constructor(document?: number,
        documentTypeId?: number,
        documentTypeName?: string,
        firstName?: string,
        secondName?: string,
        surName?: string,
        secondSurName?: string,
        cellPhone?: string,
        address?: string,
        email?: string,
        state?: string) {
        this.document = document;
        this.documentTypeId = documentTypeId;
        this.documentTypeName = documentTypeName;
        this.firstName = firstName;
        this.secondName = secondName;
        this.surName = surName;
        this.secondSurName = secondSurName;
        this.cellPhone = cellPhone;
        this.address = address;
        this.email = email;
        this.state = state;
    }
}