export namespace CliTypes {
    export interface Result {
        Date: string
        Company: string
        Value: number
        Items: NfItem[]
    }

    export interface NfItem {
        Name: string
        Quantity: string
        UnitaryValue: number
        TotalValue: number
    }
}